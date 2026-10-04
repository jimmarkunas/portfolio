"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import type { GlobalLocation } from "@/components/case-study/GlobalLocationsMapInner"

type Geometry = {
  borders: [number, number][][]
}

type Props = {
  title: string
  locations: GlobalLocation[]
}

type Pin = GlobalLocation

function getStableLabelOffset(pin: Pin) {
  const key = `${pin.city}|${pin.country}`
  let hash = 0
  for (const character of key) hash = (hash * 31 + character.charCodeAt(0)) >>> 0
  const angle = (hash % 16) * (Math.PI / 8) - Math.PI / 2
  const distance = 22 + ((hash >>> 4) % 3) * 10
  return { x: Math.cos(angle) * distance, y: Math.sin(angle) * distance }
}

function uniqueCityLocations(locations: GlobalLocation[]): Pin[] {
  const seen = new Set<string>()
  return locations
    .filter(({ city }) => !/ store \d+$/i.test(city))
    .filter((location) => {
      const key = `${location.city}|${location.country}`
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
}

export function GlobalRetailFootprintGlobe({ title, locations }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const pausedRef = useRef(false)
  const rotationRef = useRef({ longitude: -0.35, tilt: 0.02 })
  const pins = useMemo(() => uniqueCityLocations(locations), [locations])

  useEffect(() => {
    let cancelled = false
    let frame = 0
    let lastTime = 0
    let geometry: Geometry | null = null
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d", { alpha: true })
    if (!canvas || !context) return undefined

    const rotation = rotationRef.current
    let drag: { pointerId: number; x: number; y: number; longitude: number; tilt: number } | null = null
    let projectedPins: { pin: Pin; x: number; y: number; depth: number }[] = []
    let width = 0
    let height = 0
    let pixelRatio = 1

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.max(1, Math.round(width * pixelRatio))
      canvas.height = Math.max(1, Math.round(height * pixelRatio))
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    }
    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    resize()

    const project = (lat: number, lon: number, cx: number, cy: number, radius: number) => {
      const latitude = (lat * Math.PI) / 180
      const longitude = (lon * Math.PI) / 180 + rotation.longitude
      const cosLat = Math.cos(latitude)
      const x = cosLat * Math.sin(longitude)
      const baseZ = cosLat * Math.cos(longitude)
      const y = Math.sin(latitude) * Math.cos(rotation.tilt) - baseZ * Math.sin(rotation.tilt)
      const depth = Math.sin(latitude) * Math.sin(rotation.tilt) + baseZ * Math.cos(rotation.tilt)
      return { x: cx + x * radius, y: cy - y * radius, depth }
    }

    const draw = (time: number) => {
      if (cancelled || !geometry) return
      const delta = Math.min(time - (lastTime || time), 40)
      lastTime = time
      if (!pausedRef.current && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        rotation.longitude += delta * 0.000025
      }
      context.clearRect(0, 0, width, height)
      const cx = width / 2
      const cy = height / 2
      const radius = Math.max(1, Math.min(width * 0.46, height * 0.475))

      context.save()
      context.beginPath()
      context.arc(cx, cy, radius, 0, Math.PI * 2)
      context.clip()

      context.strokeStyle = "rgba(70,78,74,.62)"
      context.lineWidth = Math.max(0.65, radius / 520)
      context.lineCap = "round"
      context.lineJoin = "round"
      for (const line of geometry.borders) {
        context.beginPath()
        let drawing = false
        for (const [lon, lat] of line) {
          const point = project(lat, lon, cx, cy, radius)
          if (point.depth > 0.015) {
            if (!drawing) context.moveTo(point.x, point.y)
            else context.lineTo(point.x, point.y)
            drawing = true
          } else drawing = false
        }
        context.stroke()
      }

      projectedPins = []
      for (const pin of pins) {
        const [lon, lat] = pin.coordinates
        const point = project(lat, lon, cx, cy, radius)
        if (point.depth <= 0.02) continue
        projectedPins.push({ pin, x: point.x, y: point.y, depth: point.depth })
        const dotRadius = 2.2 + point.depth * 1.1
        context.beginPath()
        context.arc(point.x, point.y, dotRadius + 1.5, 0, Math.PI * 2)
        context.fillStyle = "rgba(255,255,255,.85)"
        context.fill()
        context.beginPath()
        context.arc(point.x, point.y, dotRadius, 0, Math.PI * 2)
        context.fillStyle = "#14233b"
        context.fill()
      }

      context.restore()
      context.font = "8px Inter, ui-sans-serif, system-ui, sans-serif"
      context.textAlign = "center"
      context.textBaseline = "middle"
      for (const { pin, x, y, depth } of projectedPins) {
        const label = pin.city
        const labelWidth = context.measureText(label).width + 12
        const labelHeight = 13
        const offset = getStableLabelOffset(pin)
        const labelX = x + offset.x
        const labelY = y + offset.y
        const box = { left: labelX - labelWidth / 2, top: labelY - labelHeight / 2 }
        const lineX = labelX - offset.x * Math.min(1, (labelWidth / 2) / Math.abs(offset.x || 1), (labelHeight / 2) / Math.abs(offset.y || 1))
        const lineY = labelY - offset.y * Math.min(1, (labelWidth / 2) / Math.abs(offset.x || 1), (labelHeight / 2) / Math.abs(offset.y || 1))
        context.strokeStyle = "rgba(76,84,80,.68)"
        context.lineWidth = 1
        context.beginPath()
        context.moveTo(x, y)
        context.lineTo(lineX, lineY)
        context.stroke()
        context.fillStyle = "rgba(22,35,31,.94)"
        context.beginPath()
        context.roundRect(box.left, box.top, labelWidth, labelHeight, 7)
        context.fill()
        context.fillStyle = `rgba(235,239,235,${Math.min(1, 0.72 + depth * 0.28)})`
        context.fillText(label, labelX, labelY)
      }

      frame = requestAnimationFrame(draw)
    }

    fetch("/maps/world-globe-geometry.json")
      .then((response) => {
        if (!response.ok) throw new Error(`Globe geometry request failed: ${response.status}`)
        return response.json() as Promise<Geometry>
      })
      .then((data) => {
        if (cancelled) return
        geometry = data
        frame = requestAnimationFrame(draw)
      })
      .catch(() => {
        if (!cancelled) context.clearRect(0, 0, width, height)
      })

    const handlePointerDown = (event: PointerEvent) => {
      drag = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, longitude: rotation.longitude, tilt: rotation.tilt }
      canvas.setPointerCapture(event.pointerId)
      canvas.style.cursor = "grabbing"
    }
    const handlePointerMove = (event: PointerEvent) => {
      if (!drag || drag.pointerId !== event.pointerId) return
      const dx = event.clientX - drag.x
      const dy = event.clientY - drag.y
      rotation.longitude = drag.longitude + dx / Math.max(1, Math.min(width, height))
      rotation.tilt = Math.max(-0.8, Math.min(0.8, drag.tilt + dy / Math.max(1, Math.min(width, height))))
    }
    const handlePointerUp = (event: PointerEvent) => {
      if (!drag || drag.pointerId !== event.pointerId) return
      drag = null
      canvas.style.cursor = "grab"
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        rotation.longitude += event.key === "ArrowLeft" ? -0.12 : 0.12
        event.preventDefault()
      }
      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        rotation.tilt = Math.max(-0.8, Math.min(0.8, rotation.tilt + (event.key === "ArrowUp" ? -0.1 : 0.1)))
        event.preventDefault()
      }
    }

    canvas.addEventListener("pointerdown", handlePointerDown)
    canvas.addEventListener("pointermove", handlePointerMove)
    canvas.addEventListener("pointerup", handlePointerUp)
    canvas.addEventListener("pointercancel", handlePointerUp)
    canvas.addEventListener("keydown", handleKeyDown)

    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
      observer.disconnect()
      canvas.removeEventListener("pointerdown", handlePointerDown)
      canvas.removeEventListener("pointermove", handlePointerMove)
      canvas.removeEventListener("pointerup", handlePointerUp)
      canvas.removeEventListener("pointercancel", handlePointerUp)
      canvas.removeEventListener("keydown", handleKeyDown)
    }
  }, [pins])

  return (
    <div className="global-locations-globe relative h-[300px] overflow-hidden md:h-[420px] lg:h-[500px]">
      <canvas
        ref={canvasRef}
        role="img"
        aria-label={`${title}. Rotating globe with ${pins.length} labeled retail city locations. Drag to rotate or use the arrow keys.`}
        tabIndex={0}
        className="absolute inset-0 h-full w-full touch-none cursor-grab outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#14233b]"
      />
    </div>
  )
}
