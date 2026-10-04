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

type Pin = GlobalLocation & { key: string }

const LABEL_CITIES = new Set(["new york", "london", "paris", "tokyo", "sydney", "são paulo", "sao paulo"])

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
    .map((location) => ({ ...location, key: `${location.city}|${location.country}` }))
}

export function GlobalRetailFootprintGlobe({ title, locations }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const pausedRef = useRef(false)
  const selectedPinRef = useRef<string | null>(null)
  const rotationRef = useRef({ longitude: -0.35, tilt: 0.16 })
  const zoomRef = useRef(1)
  const targetZoomRef = useRef(1)
  const [isPaused, setIsPaused] = useState(false)
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
    let drag: { pointerId: number; x: number; y: number; longitude: number; tilt: number; moved: boolean } | null = null
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
      zoomRef.current += (targetZoomRef.current - zoomRef.current) * Math.min(1, delta * 0.006)

      context.clearRect(0, 0, width, height)
      const cx = width / 2
      const cy = height / 2
      const radius = Math.max(1, Math.min(width * 0.46, height * 0.475)) * zoomRef.current

      context.save()
      context.beginPath()
      context.arc(cx, cy, radius, 0, Math.PI * 2)
      context.clip()

      context.strokeStyle = "rgba(68,122,203,.12)"
      context.lineWidth = 0.7
      for (let lat = -60; lat <= 60; lat += 30) {
        context.beginPath()
        let drawing = false
        for (let lon = -180; lon <= 180; lon += 4) {
          const point = project(lat, lon, cx, cy, radius)
          if (point.depth > 0) {
            if (!drawing) context.moveTo(point.x, point.y)
            else context.lineTo(point.x, point.y)
            drawing = true
          } else drawing = false
        }
        context.stroke()
      }
      for (let lon = -150; lon <= 180; lon += 30) {
        context.beginPath()
        let drawing = false
        for (let lat = -88; lat <= 88; lat += 3) {
          const point = project(lat, lon, cx, cy, radius)
          if (point.depth > 0) {
            if (!drawing) context.moveTo(point.x, point.y)
            else context.lineTo(point.x, point.y)
            drawing = true
          } else drawing = false
        }
        context.stroke()
      }

      context.strokeStyle = "rgba(68,122,203,.82)"
      context.lineWidth = Math.max(0.55, radius / 460)
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

      const selectedPin = pins.find((pin) => pin.key === selectedPinRef.current)
      const nearbyPins = selectedPin
        ? pins.filter((pin) => {
            const lonDiff = Math.abs(pin.coordinates[0] - selectedPin.coordinates[0])
            const latDiff = Math.abs(pin.coordinates[1] - selectedPin.coordinates[1])
            return lonDiff < 20 && latDiff < 14
          })
        : []
      const labelPins = projectedPins.filter(({ pin }) => LABEL_CITIES.has(pin.city.toLocaleLowerCase()) || nearbyPins.some((nearby) => nearby.key === pin.key))
      context.font = "11px Inter, ui-sans-serif, system-ui, sans-serif"
      context.textAlign = "center"
      context.textBaseline = "middle"
      for (const { pin, x, y, depth } of labelPins) {
        const label = pin.city
        const labelWidth = context.measureText(label).width + 14
        const labelY = y - 19
        context.fillStyle = "rgba(20,35,59,.9)"
        context.beginPath()
        context.roundRect(x - labelWidth / 2, labelY - 8, labelWidth, 16, 8)
        context.fill()
        context.fillStyle = `rgba(255,255,255,${Math.min(1, 0.62 + depth * 0.38)})`
        context.fillText(label, x, labelY)
      }

      context.restore()
      context.beginPath()
      context.arc(cx, cy, radius - 0.5, 0, Math.PI * 2)
      context.strokeStyle = "rgba(68,122,203,.42)"
      context.lineWidth = 1
      context.stroke()
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
      drag = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, longitude: rotation.longitude, tilt: rotation.tilt, moved: false }
      canvas.setPointerCapture(event.pointerId)
      canvas.style.cursor = "grabbing"
    }
    const handlePointerMove = (event: PointerEvent) => {
      if (!drag || drag.pointerId !== event.pointerId) return
      const dx = event.clientX - drag.x
      const dy = event.clientY - drag.y
      if (Math.abs(dx) + Math.abs(dy) > 4) drag.moved = true
      rotation.longitude = drag.longitude + dx / Math.max(1, Math.min(width, height))
      rotation.tilt = Math.max(-0.8, Math.min(0.8, drag.tilt + dy / Math.max(1, Math.min(width, height))))
    }
    const handlePointerUp = (event: PointerEvent) => {
      if (!drag || drag.pointerId !== event.pointerId) return
      if (!drag.moved) {
        const rect = canvas.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        let nearest: { pin: Pin; distance: number } | null = null
        for (const point of projectedPins) {
          const distance = Math.hypot(point.x - x, point.y - y)
          if (distance < 18 && (!nearest || distance < nearest.distance)) nearest = { pin: point.pin, distance }
        }
        if (nearest) {
          selectedPinRef.current = nearest.pin.key
          rotation.longitude = (-nearest.pin.coordinates[0] * Math.PI) / 180
          rotation.tilt = (nearest.pin.coordinates[1] * Math.PI) / 180
          targetZoomRef.current = 1.9
          pausedRef.current = true
          setIsPaused(true)
        }
      }
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

  function toggleRotation() {
    pausedRef.current = !pausedRef.current
    setIsPaused(pausedRef.current)
  }

  function resetGlobe() {
    selectedPinRef.current = null
    rotationRef.current.longitude = -0.35
    rotationRef.current.tilt = 0.16
    zoomRef.current = 1
    targetZoomRef.current = 1
    setIsPaused(false)
    pausedRef.current = false
  }

  function zoomGlobe(factor: number) {
    targetZoomRef.current = Math.max(1, Math.min(3.2, targetZoomRef.current * factor))
    pausedRef.current = true
    setIsPaused(true)
  }

  return (
    <div className="global-locations-globe relative h-[300px] overflow-hidden md:h-[420px] lg:h-[500px]">
      <canvas
        ref={canvasRef}
        role="img"
        aria-label={`${title}. Interactive rotating globe with ${pins.length} retail city locations. Drag to rotate, click a location to drill down, or use the arrow keys.`}
        tabIndex={0}
        className="absolute inset-0 h-full w-full touch-none cursor-grab outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#14233b]"
      />
      <div className="absolute bottom-4 left-4 z-10 rounded-lg bg-black/50 px-3 py-1.5 backdrop-blur-sm">
        <span className="text-[13px] font-medium tracking-wide text-[#E5E7EB]">{title}</span>
      </div>
      <div className="absolute right-4 top-4 z-10 flex flex-col gap-1.5">
        <button
          type="button"
          onClick={() => zoomGlobe(1.35)}
          aria-label="Zoom in to locations"
          title="Zoom in"
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/50 text-[18px] text-white backdrop-blur-sm transition-colors hover:bg-black/70"
        >
          +
        </button>
        <button
          type="button"
          onClick={() => zoomGlobe(1 / 1.35)}
          aria-label="Zoom out from locations"
          title="Zoom out"
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/50 text-[18px] text-white backdrop-blur-sm transition-colors hover:bg-black/70"
        >
          −
        </button>
        <button
          type="button"
          onClick={toggleRotation}
          aria-label={isPaused ? "Resume globe rotation" : "Pause globe rotation"}
          title={isPaused ? "Resume rotation" : "Pause rotation"}
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/50 text-[13px] text-white backdrop-blur-sm transition-colors hover:bg-black/70"
        >
          {isPaused ? "▶" : "Ⅱ"}
        </button>
        <button
          type="button"
          onClick={resetGlobe}
          aria-label="Reset globe view and zoom out"
          title="Reset view"
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/50 text-[15px] text-white backdrop-blur-sm transition-colors hover:bg-black/70"
        >
          ↺
        </button>
      </div>
    </div>
  )
}
