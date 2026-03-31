"use client"
import { useRef, useEffect } from "react"

type Point = { x: number; y: number }
type Path = Point[]

interface ParticleCanvasProps {
  paths: Path[]
  containerRef: React.RefObject<HTMLElement>
  color?: string // RGB string e.g. "68,122,203"
  speedMultiplier?: number
  particlesPerPath?: number
}

const TRAIL_LENGTH = 8
const DEFAULT_COLOR = "68,122,203"

interface Particle {
  pathIndex: number
  t: number
  speed: number
  radius: number
  trail: Point[]
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function pointOnPath(path: Path, t: number): Point {
  if (path.length < 2) return path[0]
  const segments = path.length - 1
  const scaled = t * segments
  const i = Math.min(Math.floor(scaled), segments - 1)
  const segT = scaled - i
  return {
    x: lerp(path[i].x, path[i + 1].x, segT),
    y: lerp(path[i].y, path[i + 1].y, segT),
  }
}

function createParticle(pathIndex: number, speedMultiplier: number): Particle {
  return {
    pathIndex,
    t: Math.random(),
    speed: (0.001058 + Math.random() * 0.001587) * speedMultiplier,
    radius: 2.0 + Math.random() * 1.8,
    trail: [],
  }
}

export default function ParticleCanvas({ paths, containerRef, color = DEFAULT_COLOR, speedMultiplier = 1, particlesPerPath = 3 }: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // 3 particles per path
    particlesRef.current = paths.flatMap((_, i) =>
      Array.from({ length: particlesPerPath }, () => createParticle(i, speedMultiplier))
    )

    function resize() {
      if (!canvas || !container) return
      canvas.width = container.offsetWidth
      canvas.height = container.offsetHeight
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(container)

    function draw() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Static connector lines
      ctx.save()
      ctx.strokeStyle = `rgba(34,34,34,0.07)`
      ctx.lineWidth = 1
      for (const path of paths) {
        if (path.length < 2) continue
        ctx.beginPath()
        ctx.moveTo(path[0].x, path[0].y)
        for (let i = 1; i < path.length; i++) ctx.lineTo(path[i].x, path[i].y)
        ctx.stroke()
      }
      ctx.restore()

      // Particles
      for (const p of particlesRef.current) {
        const path = paths[p.pathIndex]
        if (!path || path.length < 2) continue

        p.t += p.speed
        if (p.t > 1) {
          p.t = 0
          p.trail = []
        }

        const pos = pointOnPath(path, p.t)
        p.trail.push({ ...pos })
        if (p.trail.length > TRAIL_LENGTH) p.trail.shift()

        // Draw trail
        for (let i = 0; i < p.trail.length; i++) {
          const alpha = ((i + 1) / p.trail.length) * 0.35
          const r = p.radius * ((i + 1) / p.trail.length)
          ctx.beginPath()
          ctx.arc(p.trail[i].x, p.trail[i].y, r, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${color},${alpha})`
          ctx.fill()
        }

        // Draw head with radial gradient
        const grad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, p.radius * 2)
        grad.addColorStop(0, `rgba(${color},0.85)`)
        grad.addColorStop(1, `rgba(${color},0)`)
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, p.radius * 2, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [paths, containerRef])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}
    />
  )
}
