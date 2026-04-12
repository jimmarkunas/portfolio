"use client"
import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import ParticleCanvas from "./ParticleCanvas"
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
const MURAD_PARTICLE_SPEED_MULTIPLIER = 0.82


export default function MuradArchitectureDiagram() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const mobileWrapperRef = useRef<HTMLDivElement>(null)
  const mobileCanvasRef = useRef<HTMLDivElement>(null)
  const [mobileScale, setMobileScale] = useState(1)

  useEffect(() => {
    if (!wrapperRef.current) return
    const el = wrapperRef.current
    const update = () => setScale(Math.min(1, el.offsetWidth / MURAD_DESKTOP_WIDTH))
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

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
        {shouldReduceMotion ? null : (
          <>
            <ParticleCanvas
              paths={MURAD_PATHS}
              containerRef={canvasContainerRef}
              speedMultiplier={MURAD_PARTICLE_SPEED_MULTIPLIER}
            />
            <ParticleCanvas
              paths={MURAD_RED_PATHS}
              containerRef={canvasContainerRef}
              color="203,68,68"
              speedMultiplier={MURAD_PARTICLE_SPEED_MULTIPLIER}
            />
          </>
        )}
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
            {shouldReduceMotion ? null : (
              <>
                  <ParticleCanvas
                    paths={MURAD_MOBILE_PATHS}
                    containerRef={mobileCanvasRef}
                    speedMultiplier={MURAD_PARTICLE_SPEED_MULTIPLIER}
                  />
                  <ParticleCanvas
                    paths={MURAD_MOBILE_RED_PATHS}
                    containerRef={mobileCanvasRef}
                    color="203,68,68"
                    speedMultiplier={MURAD_PARTICLE_SPEED_MULTIPLIER}
                  />
              </>
            )}
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
