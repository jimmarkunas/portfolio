"use client"

import { useEffect, useState } from "react"
import { AnimatedSvgFlowDots } from "@/components/motion/AnimatedSvgFlowDots"
import type { FlowAnimationSpec } from "@/components/motion/flow-types"

const FRAME_WIDTH = 1368
const FRAME_HEIGHT = 570

type Point = { id: string; x: number; y: number; title: string; detail: string; proof?: boolean }

const SEO_POINTS: Point[] = [
  { id: "seo-search", x: 215, y: 178, title: "Google Search Console", detail: "Traffic baseline documented" },
  { id: "seo-map", x: 430, y: 178, title: "Google Feed mapping", detail: "URLs · categories · canonicals" },
  { id: "seo-redirect", x: 650, y: 178, title: "301 redirect build", detail: "Old URLs → BigCommerce" },
  { id: "seo-zero-loss", x: 910, y: 178, title: "Zero traffic loss", detail: "301s validated post-launch", proof: true },
]

const CONVERSION_POINTS: Point[] = [
  { id: "conversion-audit", x: 215, y: 350, title: "Conversion audit", detail: "Homegrown system baseline" },
  { id: "conversion-aep", x: 915, y: 350, title: "AEP personalization", detail: "Real-time segment targeting" },
  { id: "conversion-lift", x: 1090, y: 350, title: "Conversion lift", detail: "vs. homegrown baseline", proof: true },
]

const TRACKS = [
  { id: "method-seo-cro-seo-track", d: "M 150 178 H 430 H 650 H 910 V 238 H 1040", pathLength: 1000, delay: 0 },
  { id: "method-seo-cro-conversion-track", d: "M 150 350 H 430 H 750 V 350 H 915 H 1090 V 410 H 1040", pathLength: 1000, delay: 0.4 },
]

function Milestone({ point }: { point: Point }) {
  return <div className="absolute flex w-[170px] -translate-x-1/2 flex-col items-start" style={{ left: `${(point.x / FRAME_WIDTH) * 100}%`, top: `${(point.y / FRAME_HEIGHT) * 100}%` }}>
    <span className={`mb-3 h-3 w-3 rounded-full ${point.proof ? "bg-[#447ACB]" : "bg-[#222222]"}`} />
    <div className={point.proof ? "type-p2 font-medium text-[#447ACB]" : "type-p4 font-medium leading-[1.4] text-[#222222]"}>{point.title}</div>
    {point.proof ? <div className="mt-2 h-[3px] w-7 rounded-full bg-[#447ACB]" /> : null}
    <div className="type-p5 mt-1 leading-[1.4] text-black/55">{point.detail}</div>
  </div>
}

function StageLabel({ number, title, x }: { number: string; title: string; x: number }) {
  return <div className="absolute -translate-x-1/2" style={{ left: `${(x / FRAME_WIDTH) * 100}%`, top: `${(34 / FRAME_HEIGHT) * 100}%` }}><div className="type-p5 uppercase tracking-[0.14em] text-black/55">{number} · {title}</div></div>
}

function PlatformSurface() {
  return <div className="absolute w-[320px] -translate-x-1/2 rounded-[12px] bg-[#222222] px-5 py-5 text-left" style={{ left: `${(650 / FRAME_WIDTH) * 100}%`, top: `${(252 / FRAME_HEIGHT) * 100}%` }}>
    <div className="type-p5 uppercase tracking-[0.14em] text-white/55">Migration platform</div>
    <div className="mt-2 whitespace-nowrap type-p2 font-medium text-white">BigCommerce + AEM/AEP</div>
    <div className="type-p5 text-white/65">Shared commerce · content · data</div>
    <div className="mt-4 border-t border-white/12 pt-3"><div className="type-p5 text-white/65">Front-end data layer</div><div className="type-p5 text-white/65">Behavioral tracking live</div></div>
    <div className="mt-4 flex items-start border-l-2 border-l-[#447ACB] pl-3 type-p5 text-[#447ACB]">New capability vs. Mrs. Meyer’s</div>
  </div>
}

function OutcomeMetric() {
  return <div className="absolute flex h-[122px] w-[220px] -translate-y-1/2 flex-col items-start rounded-[12px] bg-[#222222] px-5 py-4" style={{ left: `${(1140 / FRAME_WIDTH) * 100}%`, top: `${(322 / FRAME_HEIGHT) * 100}%` }}>
    <div className="h-[3px] w-7 rounded-full bg-[#447ACB]" />
    <div className="mt-3 type-stat-number font-semibold leading-none tabular-nums text-white">20%</div>
    <div className="type-p2 font-medium text-white">DTC revenue uplift</div>
    <div className="type-p5 text-white/65">3 launches · US, CA, Men</div>
  </div>
}

function MobileHint() {
  return <div className="type-p5 px-4 py-3 text-center text-black/55 md:hidden">Scroll to explore the complete workflow →</div>
}

export function MethodSeoCroFlow() {
  const [reducedMotion, setReducedMotion] = useState(false)
  useEffect(() => { const media = window.matchMedia("(prefers-reduced-motion: reduce)"); const update = () => setReducedMotion(media.matches); update(); media.addEventListener("change", update); return () => media.removeEventListener("change", update) }, [])
  const specs: FlowAnimationSpec[] = TRACKS.map((track) => ({ id: track.id, path: { kind: "svg", d: track.d }, direction: "path-forward", loopMode: "restart", speed: 24, pathLength: track.pathLength, delay: track.delay, style: { color: "#447ACB", size: 6, opacity: 1 } }))
  return <div className="w-full bg-transparent"><MobileHint /><div tabIndex={0} className="overflow-x-auto outline-none focus-visible:ring-2 focus-visible:ring-[#447ACB]"><div className="relative min-w-[900px]" style={{ aspectRatio: `${FRAME_WIDTH} / ${FRAME_HEIGHT}` }}><svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox={`0 0 ${FRAME_WIDTH} ${FRAME_HEIGHT}`} preserveAspectRatio="xMidYMid meet" aria-hidden="true"><line x1="72" y1="82" x2="1296" y2="82" stroke="#222222" strokeOpacity="0.08" strokeWidth="1" /><g fill="none" stroke="#222222" strokeOpacity="0.12" strokeWidth="1">{TRACKS.map((track) => <path key={track.id} d={track.d} />)}</g><AnimatedSvgFlowDots specs={specs} reducedMotion={reducedMotion} /></svg><StageLabel number="01" title="Audit" x={280} /><StageLabel number="02" title="Migrate" x={650} /><StageLabel number="03" title="Convert" x={1050} /><div className="absolute left-[6%] top-[26%] type-p5 uppercase tracking-[0.14em] text-[#447ACB]">SEO protection</div><div className="absolute left-[6%] top-[56%] type-p5 uppercase tracking-[0.14em] text-[#447ACB]">Conversion growth</div>{SEO_POINTS.map((point) => <Milestone key={point.id} point={point} />)}{CONVERSION_POINTS.map((point) => <Milestone key={point.id} point={point} />)}<PlatformSurface /><OutcomeMetric /></div></div></div>
}
