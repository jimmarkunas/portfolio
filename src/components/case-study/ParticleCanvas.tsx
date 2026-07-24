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
  glow?: boolean
  radius?: number
  drawStaticPaths?: boolean
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

interface PathMetrics {
  cumulativeLengths: number[]
  totalLength: number
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function distance(a: Point, b: Point) {
  return Math.hypot(b.x - a.x, b.y - a.y)
}

function buildPathMetrics(path: Path): PathMetrics {
  if (path.length < 2) return { cumulativeLengths: [0], totalLength: 0 }
  const cumulativeLengths = [0]
  for (let i = 1; i < path.length; i++) {
    cumulativeLengths[i] = cumulativeLengths[i - 1] + distance(path[i - 1], path[i])
  }
  return {
    cumulativeLengths,
    totalLength: cumulativeLengths[cumulativeLengths.length - 1] ?? 0,
  }
}

function pointOnPath(path: Path, metrics: PathMetrics, t: number): Point {
  if (path.length < 2) return path[0] ?? { x: 0, y: 0 }
  if (metrics.totalLength <= 0) return path[0]

  const clampedT = Math.min(1, Math.max(0, t))
  const targetLength = clampedT * metrics.totalLength

  let i = 0
  while (
    i < metrics.cumulativeLengths.length - 1 &&
    metrics.cumulativeLengths[i + 1] < targetLength
  ) {
    i += 1
  }

  const startLength = metrics.cumulativeLengths[i]
  const endLength = metrics.cumulativeLengths[i + 1] ?? startLength
  const segmentLength = endLength - startLength
  const segT = segmentLength <= 0 ? 0 : (targetLength - startLength) / segmentLength

  return {
    x: lerp(path[i].x, path[i + 1].x, segT),
    y: lerp(path[i].y, path[i + 1].y, segT),
  }
}

function createParticle(pathIndex: number, speedMultiplier: number, radius?: number): Particle {
  return {
    pathIndex,
    t: Math.random(),
    speed: (0.001058 + Math.random() * 0.001587) * speedMultiplier,
    radius: radius ?? 2.0 + Math.random() * 1.8,
    trail: [],
  }
}

export default function ParticleCanvas({ paths, containerRef, color = DEFAULT_COLOR, speedMultiplier = 1, particlesPerPath = 3, glow = true, radius, drawStaticPaths = true }: ParticleCanvasProps) {
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
      Array.from({ length: particlesPerPath }, () => createParticle(i, speedMultiplier, radius))
    )
    const pathMetrics = paths.map((path) => buildPathMetrics(path))
    let lastFrameTime = 0

    function resize() {
      if (!canvas || !container) return
      canvas.width = container.offsetWidth
      canvas.height = container.offsetHeight
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(container)

    function draw(now: number) {
      if (!ctx || !canvas) return

      const frameDelta = lastFrameTime === 0
        ? 1000 / 60
        : Math.min(1000 / 15, now - lastFrameTime)
      lastFrameTime = now
      const frameScale = frameDelta / (1000 / 60)

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (drawStaticPaths) {
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
      }

      // Particles
      for (const p of particlesRef.current) {
        const path = paths[p.pathIndex]
        const metrics = pathMetrics[p.pathIndex]
        if (!path || !metrics || path.length < 2) continue

        p.t += p.speed * frameScale
        if (p.t > 1) {
          p.t = 0
          p.trail = []
        }

        const pos = pointOnPath(path, metrics, p.t)
        p.trail.push({ ...pos })
        if (p.trail.length > TRAIL_LENGTH) p.trail.shift()

        if (glow) {
          // Draw trail
          for (let i = 0; i < p.trail.length; i++) {
            const alpha = ((i + 1) / p.trail.length) * 0.35
            const r = p.radius * ((i + 1) / p.trail.length)
            ctx.beginPath()
            ctx.arc(p.trail[i].x, p.trail[i].y, r, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(${color},${alpha})`
            ctx.fill()
          }
        }

        // Draw either a solid head or the existing radial glow.
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, glow ? p.radius * 2 : p.radius, 0, Math.PI * 2)
        if (glow) {
          const grad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, p.radius * 2)
          grad.addColorStop(0, `rgba(${color},0.85)`)
          grad.addColorStop(1, `rgba(${color},0)`)
          ctx.fillStyle = grad
        } else {
          ctx.fillStyle = `rgb(${color})`
        }
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [paths, containerRef, color, speedMultiplier, particlesPerPath, glow, radius, drawStaticPaths])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}
    />
  )
}
