"use client"
import { useRef, useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { DIAGRAM_DATA as D } from "./muradDiagramData"
import MobileCard from "./MobileCard"
import { DiagramRendererHost } from "@/components/case-study/diagram-shared/DiagramRendererHost"
import { MuradApiLayerCard } from "@/components/case-study/diagram-shared/MuradApiLayerCard"
import { MuradDesktopLayer } from "@/components/case-study/diagram-shared/MuradDesktopLayer"
import {
  MURAD_DESKTOP_HEIGHT,
  MURAD_DESKTOP_WIDTH,
  MURAD_MOBILE_HEIGHT,
  MURAD_MOBILE_PATHS,
  MURAD_MOBILE_RED_PATHS,
  MURAD_MOBILE_WIDTH,
  MURAD_PATHS,
  MURAD_RED_PATHS,
} from "@/components/case-study/diagram-config/murad-architecture.config"

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};
const cardTransition = { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } as const;
const MURAD_DOT_DURATION = 21333
const MURAD_DOT_RADIUS = 4.5
const MURAD_BLUE_DOT_COLOR = "#447ACB"
const MURAD_RED_DOT_COLOR = "#CB4444"

function pointAlongRoute(route: { x: number; y: number }[], progress: number) {
  const lengths = route.slice(1).map((point, index) => Math.hypot(point.x - route[index].x, point.y - route[index].y))
  const total = lengths.reduce((sum, length) => sum + length, 0)
  let distance = progress * total
  for (let index = 0; index < lengths.length; index += 1) {
    const segmentLength = lengths[index]
    if (distance <= segmentLength) {
      const start = route[index]
      const end = route[index + 1]
      const ratio = segmentLength === 0 ? 0 : distance / segmentLength
      return { x: start.x + (end.x - start.x) * ratio, y: start.y + (end.y - start.y) * ratio }
    }
    distance -= segmentLength
  }
  return route[route.length - 1]
}


export default function MuradArchitectureDiagram() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const mobileWrapperRef = useRef<HTMLDivElement>(null)
  const mobileCanvasRef = useRef<HTMLDivElement>(null)
  const [mobileScale, setMobileScale] = useState(1)
  const reducedMotion = useReducedMotion()
  const [dotProgress, setDotProgress] = useState(0)

  useEffect(() => {
    if (reducedMotion) return
    let frame = 0
    const startedAt = performance.now()
    const tick = (now: number) => {
      setDotProgress(((now - startedAt) % MURAD_DOT_DURATION) / MURAD_DOT_DURATION)
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [reducedMotion])

  useEffect(() => {
    if (!wrapperRef.current) return
    const el = wrapperRef.current
    const update = () => setScale(Math.min(1, el.offsetWidth / MURAD_DESKTOP_WIDTH))
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const muradBlueDots = MURAD_PATHS.flatMap((route, routeIndex) => [0, 1 / 3, 2 / 3].map((offset, dotIndex) => ({ ...pointAlongRoute(route, (dotProgress + offset) % 1), key: `murad-blue-dot-${routeIndex}-${dotIndex}` })))
  const muradRedDots = MURAD_RED_PATHS.flatMap((route, routeIndex) => [0, 1 / 3, 2 / 3].map((offset, dotIndex) => ({ ...pointAlongRoute(route, (dotProgress + offset) % 1), key: `murad-red-dot-${routeIndex}-${dotIndex}` })))
  const muradMobileBlueDots = MURAD_MOBILE_PATHS.flatMap((route, routeIndex) => [0, 1 / 3, 2 / 3].map((offset, dotIndex) => ({ ...pointAlongRoute(route, (dotProgress + offset) % 1), key: `murad-mobile-blue-dot-${routeIndex}-${dotIndex}` })))
  const muradMobileRedDots = MURAD_MOBILE_RED_PATHS.flatMap((route, routeIndex) => [0, 1 / 3, 2 / 3].map((offset, dotIndex) => ({ ...pointAlongRoute(route, (dotProgress + offset) % 1), key: `murad-mobile-red-dot-${routeIndex}-${dotIndex}` })))

  useEffect(() => {
    if (!mobileWrapperRef.current) return
    const el = mobileWrapperRef.current
    const update = () => setMobileScale(el.getBoundingClientRect().width / MURAD_MOBILE_WIDTH)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <DiagramRendererHost tooltips={D.tooltips}>
      {({ toggle, shouldReduceMotion }) => (
        <>
    {/* ── Desktop ───────────────────────────────────────────────────── */}
    <motion.div
      className="hidden w-full md:block"
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.1 }}
      variants={shouldReduceMotion ? undefined : { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
    >
    <div className="relative w-full overflow-hidden" style={{ height: `${MURAD_DESKTOP_HEIGHT * scale}px` }}>
      <div style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        height: "100%",
        backgroundColor: "#fefefe",
        backgroundImage: "radial-gradient(circle, #d4d4e4 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />
    <div
      ref={wrapperRef}
      className="relative w-full overflow-hidden rounded-[10px]"
      style={{ height: `${MURAD_DESKTOP_HEIGHT * scale}px` }}
    >
      <div
        ref={canvasContainerRef}
        style={{
          width: MURAD_DESKTOP_WIDTH,
          height: MURAD_DESKTOP_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          position: "relative",
        }}
      >
<MuradDesktopLayer
  data={D}
  toggle={toggle}
  cardVariants={cardVariants}
  cardTransition={cardTransition}
/>
        {!shouldReduceMotion && !reducedMotion ? <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" viewBox={`0 0 ${MURAD_DESKTOP_WIDTH} ${MURAD_DESKTOP_HEIGHT}`} fill="none">
          {muradBlueDots.map((dot) => <circle key={dot.key} cx={dot.x} cy={dot.y} r={MURAD_DOT_RADIUS} fill={MURAD_BLUE_DOT_COLOR} />)}
          {muradRedDots.map((dot) => <circle key={dot.key} cx={dot.x} cy={dot.y} r={MURAD_DOT_RADIUS} fill={MURAD_RED_DOT_COLOR} />)}
        </svg> : null}
      </div>
    </div>
    </div>
    </motion.div>{/* end desktop hidden md:block */}

    {/* ── Mobile layout ───────────────────────────────────────────── */}
    <motion.div
      className="block md:hidden -mx-6"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={shouldReduceMotion ? undefined : { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div
        className="relative"
        style={{
          width: "100dvw",
          marginLeft: "calc(50% - 50dvw)",
          height: `${MURAD_MOBILE_HEIGHT * mobileScale}px`,
        }}
      >
        <div style={{
          position: "absolute", top: 0, left: "50%",
          transform: "translateX(-50%)", width: "100vw", height: "100%",
          backgroundColor: "#fefefe",
          backgroundImage: "radial-gradient(circle, #d4d4e4 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />
        <div
          ref={mobileWrapperRef}
          className="relative mx-auto overflow-hidden"
          style={{ width: "calc(100dvw - 20px)", height: `${MURAD_MOBILE_HEIGHT * mobileScale}px` }}
        >
          <div ref={mobileCanvasRef} style={{ width: MURAD_MOBILE_WIDTH, height: MURAD_MOBILE_HEIGHT, transform: `scale(${mobileScale})`, transformOrigin: "top left", position: "relative", backgroundColor: "#fefefe" }}>
            {!shouldReduceMotion && !reducedMotion ? <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" viewBox={`0 0 ${MURAD_MOBILE_WIDTH} ${MURAD_MOBILE_HEIGHT}`} fill="none">
              {muradMobileBlueDots.map((dot) => <circle key={dot.key} cx={dot.x} cy={dot.y} r={MURAD_DOT_RADIUS} fill={MURAD_BLUE_DOT_COLOR} />)}
              {muradMobileRedDots.map((dot) => <circle key={dot.key} cx={dot.x} cy={dot.y} r={MURAD_DOT_RADIUS} fill={MURAD_RED_DOT_COLOR} />)}
            </svg> : null}
            {/* ── Oracle ── */}
            <MobileCard data={D.oracle} top={40} cardKey="oracle" toggle={toggle} />
            {/* ── Contentful ── */}
            <MobileCard data={D.contentful} top={208} cardKey="contentful" toggle={toggle} />
            {/* ── API Layer top=376 ── */}
            <MuradApiLayerCard
              compact
              title={D.apiLayer.title}
              subtitle={D.apiLayer.subtitle}
              onClick={() => toggle("api-layer")}
            />
            {/* ── BC US ── */}
            <MobileCard data={D.bcUS} top={544} cardKey="bc-us" toggle={toggle} />
            {/* ── BC UK ── */}
            <MobileCard data={D.bcUK} top={712} cardKey="bc-uk" toggle={toggle} />
            {/* ── BC MY ── */}
            <MobileCard data={D.bcMY} top={880} cardKey="bc-my" toggle={toggle} />
            {/* ── Sendgrid ── */}
            <MobileCard data={D.sendgrid} top={1048} cardKey="sendgrid" toggle={toggle} />
            {/* ── Adobe ── */}
            <MobileCard data={D.adobe} top={1216} cardKey="adobe" toggle={toggle} />
          </div>
        </div>
      </div>
    </motion.div>
    </>
      )}
    </DiagramRendererHost>
  )
}
