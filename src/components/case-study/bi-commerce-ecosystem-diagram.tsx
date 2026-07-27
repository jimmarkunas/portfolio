"use client"

import { motion } from "motion/react"
import { useEffect, useRef, type MouseEvent, type ReactNode, type RefObject } from "react"

import { DiagramRendererHost } from "@/components/case-study/diagram-shared/DiagramRendererHost"
import {
  BI_AEM_SYSTEM_CARD,
  BI_MULESOFT_HERO_CARD,
  BI_SAP_SYSTEM_CARD,
  BlueTag,
  BrowserCard,
  CommerceCard,
  DataLakeCard,
  HeroCard,
  MarchingAntsBorder,
  SystemCard,
} from "@/components/case-study/diagram-shared/BiDiagramCards"
import { BiConnectorLayer } from "@/components/case-study/diagram-shared/BiConnectorLayer"
import {
  BI_DESKTOP_NODE_POSITIONS,
  BI_DESKTOP_PARTICLE_PATHS,
  BI_MULESOFT_PILLS,
} from "@/components/case-study/diagram-config/bi-commerce.config"
import {
  CONN_H,
  CONN_W,
  MOB_DOWN,
  MOB_UP,
  VH,
  VW,
} from "./bi-commerce-ecosystem.constants"
import { DiagramShell } from "./DiagramShell"
import { TOOLTIPS } from "./biCommerceDiagramData"

type SharpParticlePoint = { x: number; y: number }
type SharpParticlePath = SharpParticlePoint[]

interface SharpParticleCanvasProps {
  paths: SharpParticlePath[]
  containerRef: React.RefObject<HTMLElement>
  color?: string
  speedMultiplier?: number
  particlesPerPath?: number
}

interface SharpParticle {
  pathIndex: number
  t: number
  speed: number
  radius: number
}

interface SharpPathMetrics {
  cumulativeLengths: number[]
  totalLength: number
}

function sharpLerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function sharpDistance(a: SharpParticlePoint, b: SharpParticlePoint) {
  return Math.hypot(b.x - a.x, b.y - a.y)
}

function buildSharpPathMetrics(path: SharpParticlePath): SharpPathMetrics {
  if (path.length < 2) return { cumulativeLengths: [0], totalLength: 0 }
  const cumulativeLengths = [0]
  for (let i = 1; i < path.length; i++) {
    cumulativeLengths[i] = cumulativeLengths[i - 1] + sharpDistance(path[i - 1], path[i])
  }
  return {
    cumulativeLengths,
    totalLength: cumulativeLengths[cumulativeLengths.length - 1] ?? 0,
  }
}

function pointOnSharpPath(path: SharpParticlePath, metrics: SharpPathMetrics, t: number): SharpParticlePoint {
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
    x: sharpLerp(path[i].x, path[i + 1].x, segT),
    y: sharpLerp(path[i].y, path[i + 1].y, segT),
  }
}

function createSharpParticle(pathIndex: number, speedMultiplier: number): SharpParticle {
  return {
    pathIndex,
    t: Math.random(),
    speed: (0.001058 + Math.random() * 0.001587) * speedMultiplier,
    radius: 2.0 + Math.random() * 1.8,
  }
}

function SharpParticleCanvas({
  paths,
  containerRef,
  color = "68,122,203",
  speedMultiplier = 1,
  particlesPerPath = 3,
}: SharpParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<SharpParticle[]>([])
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    particlesRef.current = paths.flatMap((_, i) =>
      Array.from({ length: particlesPerPath }, () => createSharpParticle(i, speedMultiplier))
    )
    const pathMetrics = paths.map((path) => buildSharpPathMetrics(path))
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

      for (const p of particlesRef.current) {
        const path = paths[p.pathIndex]
        const metrics = pathMetrics[p.pathIndex]
        if (!path || !metrics || path.length < 2) continue

        p.t += p.speed * frameScale
        if (p.t > 1) p.t = 0

        const pos = pointOnSharpPath(path, metrics, p.t)
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color},1)`
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [paths, containerRef, color, speedMultiplier, particlesPerPath])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}
    />
  )
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const cardTransition = { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } as const

const mobileCard = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
}

function asParticleContainerRef(ref: RefObject<HTMLDivElement>): RefObject<HTMLElement> {
  return ref as RefObject<HTMLElement>
}

function toMulesoftPills(toggle: (key: string) => void) {
  return BI_MULESOFT_PILLS.map((pill) => ({
    label: pill.label,
    onClick: (event: MouseEvent) => {
      event.stopPropagation()
      toggle(pill.key)
    },
  }))
}

function MobileConnector({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div className="flex justify-center py-[7px]">
      <div ref={ref} className="relative" style={{ width: CONN_W, height: CONN_H }}>
        <div className="absolute top-0 bottom-0" style={{ left: 11, width: 1.5, background: "#D9DDE3" }} />
        <div className="absolute top-0 bottom-0" style={{ left: 23, width: 1.5, background: "#D9DDE3" }} />
        {shouldReduceMotion ? null : (
          <>
            <SharpParticleCanvas paths={[MOB_DOWN]} containerRef={asParticleContainerRef(ref)} color="237,34,36" />
            <SharpParticleCanvas paths={[MOB_UP]} containerRef={asParticleContainerRef(ref)} color="34,34,34" />
          </>
        )}
      </div>
    </div>
  )
}

function MobileReveal({
  children,
  className,
  shouldReduceMotion,
}: {
  children: ReactNode
  className?: string
  shouldReduceMotion: boolean
}) {
  return (
    <motion.div
      className={className}
      variants={mobileCard}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, margin: "-40px" }}
    >
      {children}
    </motion.div>
  )
}

function ResponsiveStackLayout({
  toggle,
  shouldReduceMotion,
}: {
  toggle: (key: string) => void
  shouldReduceMotion: boolean
}) {
  const mulesoftPills = toMulesoftPills(toggle)

  return (
    <div className="flex flex-col">
      <MobileReveal shouldReduceMotion={shouldReduceMotion}>
        <SystemCard className="w-full" compact {...BI_SAP_SYSTEM_CARD} onClick={() => toggle("sap")} />
      </MobileReveal>

      <MobileConnector shouldReduceMotion={shouldReduceMotion} />

      <MobileReveal shouldReduceMotion={shouldReduceMotion}>
        <div className="flex flex-wrap gap-3 justify-center">
          <BlueTag label="PAYMENTS" onClick={() => toggle("payments")} />
          <BlueTag label="TAX" onClick={() => toggle("tax")} />
        </div>
      </MobileReveal>

      <MobileConnector shouldReduceMotion={shouldReduceMotion} />

      <MobileReveal shouldReduceMotion={shouldReduceMotion}>
        <HeroCard
          className="w-full"
          {...BI_MULESOFT_HERO_CARD}
          pills={mulesoftPills}
          onClick={() => toggle("mulesoft")}
        />
      </MobileReveal>

      <MobileConnector shouldReduceMotion={shouldReduceMotion} />

      <MobileReveal shouldReduceMotion={shouldReduceMotion}>
        <MarchingAntsBorder shouldReduceMotion={shouldReduceMotion}>
          <CommerceCard
            className="w-full"
            compact
            onClick={() => toggle("commerce-cloud")}
            onGraphqlClick={() => toggle("adobe-graphql")}
            onPillsClick={() => toggle("commerce-services")}
          />
        </MarchingAntsBorder>
      </MobileReveal>

      <MobileConnector shouldReduceMotion={shouldReduceMotion} />

      <MobileReveal shouldReduceMotion={shouldReduceMotion}>
        <SystemCard className="w-full" compact {...BI_AEM_SYSTEM_CARD} onClick={() => toggle("aem")} />
      </MobileReveal>

      <MobileConnector shouldReduceMotion={shouldReduceMotion} />

      <MobileReveal shouldReduceMotion={shouldReduceMotion}>
        <DataLakeCard className="w-full" onClick={() => toggle("data-lake")} onConnectorClick={() => toggle("aem-connector")} />
      </MobileReveal>

      <MobileConnector shouldReduceMotion={shouldReduceMotion} />

      <MobileReveal shouldReduceMotion={shouldReduceMotion}>
        <BrowserCard className="w-full" compact onClick={() => toggle("shopper-browser")} onSdkClick={() => toggle("adobe-web-sdk")} />
      </MobileReveal>
    </div>
  )
}

function DesktopFixedLayout({
  toggle,
  shouldReduceMotion,
}: {
  toggle: (key: string) => void
  shouldReduceMotion: boolean
}) {
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const positions = BI_DESKTOP_NODE_POSITIONS
  const mulesoftPills = toMulesoftPills(toggle)

  return (
    <motion.div
      ref={canvasContainerRef}
      className="relative h-[875px] w-[1440px] overflow-hidden bg-transparent"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
    >
      <BiConnectorLayer />
      {shouldReduceMotion
        ? null
        : BI_DESKTOP_PARTICLE_PATHS.map(([path, color], index) => (
            <SharpParticleCanvas
              key={`${path}:${color}:${index}`}
              paths={[path]}
              containerRef={asParticleContainerRef(canvasContainerRef)}
              color={color}
            />
          ))}

      <motion.div className="absolute z-10" style={positions.browser} variants={cardVariants} transition={cardTransition}>
        <BrowserCard className="w-[475px]" onClick={() => toggle("shopper-browser")} onSdkClick={() => toggle("adobe-web-sdk")} />
      </motion.div>

      <motion.div className="absolute z-10" style={positions.sap} variants={cardVariants} transition={cardTransition}>
        <SystemCard className="w-80" {...BI_SAP_SYSTEM_CARD} onClick={() => toggle("sap")} />
      </motion.div>

      <motion.div className="absolute z-10" style={positions.mulesoft} variants={cardVariants} transition={cardTransition}>
        <HeroCard className="w-[475px]" {...BI_MULESOFT_HERO_CARD} pills={mulesoftPills} onClick={() => toggle("mulesoft")} />
      </motion.div>

      <motion.div className="absolute z-10" style={positions.aem} variants={cardVariants} transition={cardTransition}>
        <SystemCard className="w-[390px]" {...BI_AEM_SYSTEM_CARD} onClick={() => toggle("aem")} />
      </motion.div>

      <motion.div className="absolute z-10" style={positions.commerceCloud} variants={cardVariants} transition={cardTransition}>
        <MarchingAntsBorder shouldReduceMotion={shouldReduceMotion}>
          <CommerceCard
            className="w-[475px]"
            onClick={() => toggle("commerce-cloud")}
            onGraphqlClick={() => toggle("adobe-graphql")}
            onPillsClick={() => toggle("commerce-services")}
          />
        </MarchingAntsBorder>
      </motion.div>

      <motion.div className="absolute z-10" style={positions.dataLake} variants={cardVariants} transition={cardTransition}>
        <DataLakeCard className="w-80" onClick={() => toggle("data-lake")} onConnectorClick={() => toggle("aem-connector")} />
      </motion.div>

      <motion.div className="absolute z-10" style={positions.paymentsTag} variants={cardVariants} transition={cardTransition}>
        <BlueTag label="PAYMENTS" onClick={() => toggle("payments")} />
      </motion.div>

      <motion.div className="absolute z-10" style={positions.taxTag} variants={cardVariants} transition={cardTransition}>
        <BlueTag label="TAX" onClick={() => toggle("tax")} />
      </motion.div>
    </motion.div>
  )
}

export default function CommerceEcosystemDiagram() {
  return (
    <DiagramRendererHost
      className="rounded-sm bg-transparent overflow-hidden w-full"
      closeOnPointerDown
      tooltips={TOOLTIPS}
    >
      {({ toggle, close, shouldReduceMotion }) => (
        <>
          <div className="md:hidden p-4">
            <ResponsiveStackLayout toggle={toggle} shouldReduceMotion={shouldReduceMotion} />
          </div>

          <DiagramShell
            className="w-full"
            onPointerDown={close}
            desktop={{
              baseWidth: VW,
              baseHeight: VH,
              viewportClassName: "hidden md:block",
              render: ({ shouldReduceMotion: desktopReduceMotion }) => (
                <DesktopFixedLayout toggle={toggle} shouldReduceMotion={desktopReduceMotion} />
              ),
            }}
          />
        </>
      )}
    </DiagramRendererHost>
  )
}
