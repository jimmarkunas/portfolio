"use client"

import { useEffect, useState } from "react"
import { useReducedMotion } from "motion/react"

const METHOD_DOT_DURATION = 21333
const METHOD_DOT_RADIUS = 4.5
const METHOD_DOT_COLOR = "#447ACB"
const SEO_ROUTE = [{ x: 50, y: 293 }, { x: 1468, y: 293 }, { x: 1468, y: 356 }]
const CONVERSION_ROUTE = [{ x: 50, y: 662 }, { x: 1468, y: 662 }, { x: 1468, y: 610 }]
const STAGE_DIVIDER_TOPS = [110, 130.23, 150.45, 170.68, 190.9, 211.13, 231.35, 251.58, 271.8, 292.03, 312.25, 332.48, 352.7, 372.93, 393.15, 413.38, 433.6, 453.83, 474.05, 494.28, 514.51, 534.73, 554.96, 575.18, 595.41, 615.63, 635.86, 656.08, 676.31, 696.53, 716.76, 736.98, 757.21, 777.43, 797.66, 817.88, 838.11, 858.34, 878.56, 898.79, 919.01]

function StageDivider({ x }: { x: number }) {
  return <>{STAGE_DIVIDER_TOPS.map((top) => <div key={`${x}-${top}`} data-svg-wrapper data-layer={x === 571 ? "Stage Divider 1 Dash" : "Stage Divider 2 Dash"} className={`${x === 571 ? "StageDivider1Dash" : "StageDivider2Dash"} left-[${x}px] top-[${top}px] absolute`} style={{ left: x, top }}><svg width="2" height="9" viewBox="0 0 2 9" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="1.35354" height="8.98901" fill="#AEB4BC" fillOpacity="0.9" /></svg></div>)}</>
}

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

function PulseRing({ left, top, reducedMotion }: { left: number; top: number; reducedMotion: boolean }) {
  if (reducedMotion) return null
  return (
    <span className="pointer-events-none absolute h-3 w-3" style={{ left: left + 12, top: top + 12, transform: "translate(-50%, -50%)" }} aria-hidden="true">
      <span className="pointer-events-none absolute inset-0 box-border rounded-full border-[1.25px] border-[rgba(34,34,34,0.58)]" style={{ animationName: "method-pulse-wave", animationDuration: "4.8s", animationTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)", animationIterationCount: "infinite", animationDelay: "0s" }} />
      <span className="pointer-events-none absolute inset-0 box-border rounded-full border-[1.25px] border-[rgba(34,34,34,0.58)]" style={{ animationName: "method-pulse-wave", animationDuration: "4.8s", animationTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)", animationIterationCount: "infinite", animationDelay: "-3.2s" }} />
      <span className="pointer-events-none absolute inset-0 box-border rounded-full border-[1.25px] border-[rgba(34,34,34,0.58)]" style={{ animationName: "method-pulse-wave", animationDuration: "4.8s", animationTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)", animationIterationCount: "infinite", animationDelay: "-1.6s" }} />
    </span>
  )
}

export default function MethodSeoCroFlow() {
  const reducedMotion = useReducedMotion()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (reducedMotion) return
    let frame = 0
    const startedAt = performance.now()
    const tick = (now: number) => {
      setProgress(((now - startedAt) % METHOD_DOT_DURATION) / METHOD_DOT_DURATION)
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [reducedMotion])

  const seoDots = [0, 1 / 3, 2 / 3].map((offset) => pointAlongRoute(SEO_ROUTE, (progress + offset) % 1))
  const conversionDots = [0, 1 / 3, 2 / 3].map((offset) => pointAlongRoute(CONVERSION_ROUTE, (progress + offset) % 1))

  return (
<>
<style>{`@keyframes method-pulse-wave { 0% { inset: 0px; opacity: 0.62; } 65% { opacity: 0.24; } 100% { inset: -7px; opacity: 0; } }`}</style>
<div data-layer="Method SEO + CRO Flow — Editable" className="MethodSeoCroFlowEditable relative w-full aspect-[1648/928] overflow-hidden rounded-2xl bg-white" style={{ containerType: "inline-size" }}>
  <div className="absolute left-0 top-0 h-[928px] w-[1648px] origin-top-left" style={{ transform: "scale(min(1, calc(100cqw / 1648px)))" }}>
  <StageDivider x={571} />
  <StageDivider x={1105.65} />
  <div data-layer="Stage 01" className="Stage01 w-72 h-8 left-[205px] top-[59px] absolute text-center justify-center text-neutral-800 text-lg font-semibold font-['Inter'] leading-6 tracking-[3.10px]">01 · AUDIT</div>
  <div data-layer="Stage 02" className="Stage02 w-80 h-8 left-[650px] top-[59px] absolute text-center justify-center text-neutral-800 text-lg font-semibold font-['Inter'] leading-6 tracking-[3.10px]">02 · MIGRATE</div>
  <div data-layer="Stage 03" className="Stage03 w-72 h-8 left-[1115px] top-[59px] absolute text-center justify-center text-neutral-800 text-lg font-semibold font-['Inter'] leading-6 tracking-[3.10px]">03 · CONVERT</div>
  <div data-layer="SEO Protection" className="SeoProtection w-64 h-11 left-[50px] top-[145px] absolute justify-center text-blue-600 text-lg font-medium font-['Inter'] leading-6 tracking-[2.50px]">SEO PROTECTION</div>
  <div data-layer="Conversion Growth" className="ConversionGrowth w-72 h-11 left-[50px] top-[485px] absolute justify-center text-blue-600 text-lg font-medium font-['Inter'] leading-6 tracking-[2.50px]">CONVERSION GROWTH</div>
  <svg aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 h-full w-full" viewBox="0 0 1648 928" fill="none" shapeRendering="crispEdges">
    <path d="M 50 293 H 53 M 243 293 H 331 M 521 293 H 813 M 1003 293 H 1090 M 1280 293 H 1468 V 356" stroke="#959595" strokeLinecap="square" strokeLinejoin="miter" vectorEffect="non-scaling-stroke" />
    <path d="M 50 662 H 53 M 243 662 H 408 M 726 662 H 813 M 1003 662 H 1090 M 1280 662 H 1468 V 610" stroke="#959595" strokeLinecap="square" strokeLinejoin="miter" vectorEffect="non-scaling-stroke" />
    {!reducedMotion ? <>
      {seoDots.map((dot, index) => <circle key={`seo-dot-${index}`} cx={dot.x} cy={dot.y} r={METHOD_DOT_RADIUS} fill={METHOD_DOT_COLOR} />)}
      {conversionDots.map((dot, index) => <circle key={`conversion-dot-${index}`} cx={dot.x} cy={dot.y} r={METHOD_DOT_RADIUS} fill={METHOD_DOT_COLOR} />)}
    </> : null}
  </svg>
  <div data-layer="Google Search Console" className="GoogleSearchConsole size-48 left-[52px] top-[200px] absolute bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-300">
    <div data-layer="Google Search Console Title" className="GoogleSearchConsoleTitle w-40 h-16 left-[18px] top-[28px] absolute text-center justify-center text-neutral-800 text-lg font-medium font-['Inter'] leading-7">Google Search<br/>Console</div>
    <div data-layer="Google Search Console Detail" className="GoogleSearchConsoleDetail w-40 h-16 left-[18px] top-[98px] absolute text-center justify-center text-zinc-500 text-base font-normal font-['Inter'] leading-6">Traffic baseline<br/>documented</div>
  </div>
  <PulseRing left={40} top={281} reducedMotion={Boolean(reducedMotion)} />
  <div data-svg-wrapper data-layer="Google Search Console Pulse Dot" className="GoogleSearchConsolePulseDot left-[46px] top-[287px] absolute">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6" r="6" fill="black"/>
    </svg>
  </div>
  <div data-layer="SEO migration mapping" className="SeoMigrationMapping size-48 left-[330px] top-[200px] absolute bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-300">
    <div data-layer="SEO migration mapping Title" className="SeoMigrationMappingTitle w-40 h-16 left-[18px] top-[28px] absolute text-center justify-center text-neutral-800 text-lg font-medium font-['Inter'] leading-7">SEO migration<br/>mapping</div>
    <div data-layer="SEO migration mapping Detail" className="SeoMigrationMappingDetail w-40 h-16 left-[18px] top-[98px] absolute text-center justify-center text-zinc-500 text-base font-normal font-['Inter'] leading-6">URLs · categories ·<br/>canonicals</div>
  </div>
  <PulseRing left={318} top={281} reducedMotion={Boolean(reducedMotion)} />
  <div data-svg-wrapper data-layer="SEO migration mapping Pulse Dot" className="SeoMigrationMappingPulseDot left-[324px] top-[287px] absolute">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6" r="6" fill="black"/>
    </svg>
  </div>
  <div data-layer="301 redirect build" className="RedirectBuild size-48 left-[812px] top-[200px] absolute bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-300">
    <div data-layer="301 redirect build Title" className="RedirectBuildTitle w-40 h-16 left-[18px] top-[28px] absolute text-center justify-center text-neutral-800 text-lg font-medium font-['Inter'] leading-7">301 redirect build</div>
    <div data-layer="301 redirect build Detail" className="RedirectBuildDetail w-40 h-16 left-[18px] top-[98px] absolute text-center justify-center text-zinc-500 text-base font-normal font-['Inter'] leading-6">Old URLs →<br/>BigCommerce</div>
  </div>
  <PulseRing left={800} top={281} reducedMotion={Boolean(reducedMotion)} />
  <div data-svg-wrapper data-layer="301 redirect build Pulse Dot" className="RedirectBuildPulseDot left-[806px] top-[287px] absolute">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6" r="6" fill="black"/>
    </svg>
  </div>
  <div data-layer="Zero traffic loss" className="ZeroTrafficLoss size-48 left-[1089px] top-[200px] absolute bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-300">
    <div data-layer="Zero traffic loss Title" className="ZeroTrafficLossTitle w-40 h-16 left-[18px] top-[28px] absolute text-center justify-center text-blue-600 text-lg font-medium font-['Inter'] leading-7">Zero traffic loss</div>
    <div data-layer="Zero traffic loss Detail" className="ZeroTrafficLossDetail w-40 h-16 left-[18px] top-[98px] absolute text-center justify-center text-zinc-500 text-base font-normal font-['Inter'] leading-6">301s validated<br/>post-launch</div>
  </div>
  <PulseRing left={1077} top={281} reducedMotion={Boolean(reducedMotion)} />
  <div data-svg-wrapper data-layer="Zero traffic loss Pulse Dot" className="ZeroTrafficLossPulseDot left-[1083px] top-[287px] absolute">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6" r="6" fill="#447ACB"/>
    </svg>
  </div>
  <div data-layer="Conversion audit" className="ConversionAudit size-48 left-[52px] top-[569px] absolute bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-300">
    <div data-layer="Conversion audit Title" className="ConversionAuditTitle w-40 h-16 left-[18px] top-[28px] absolute text-center justify-center text-neutral-800 text-lg font-medium font-['Inter'] leading-7">Conversion audit</div>
    <div data-layer="Conversion audit Detail" className="ConversionAuditDetail w-40 h-16 left-[18px] top-[98px] absolute text-center justify-center text-zinc-500 text-base font-normal font-['Inter'] leading-6">Homegrown system<br/>baseline</div>
  </div>
  <PulseRing left={40} top={650} reducedMotion={Boolean(reducedMotion)} />
  <div data-svg-wrapper data-layer="Conversion audit Pulse Dot" className="ConversionAuditPulseDot left-[46px] top-[656px] absolute">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6" r="6" fill="black"/>
    </svg>
  </div>
  <div data-layer="Migration Platform" className="MigrationPlatform w-80 h-72 left-[407px] top-[516px] absolute bg-neutral-800 rounded-2xl overflow-hidden">
    <div data-layer="Platform Eyebrow" className="PlatformEyebrow w-64 h-7 left-[28px] top-[24px] absolute text-center justify-center text-white text-base font-medium font-['Inter'] leading-5 tracking-[2.40px]">MIGRATION PLATFORM</div>
    <div data-layer="Platform Title" className="PlatformTitle w-64 h-8 left-[28px] top-[59px] absolute text-center justify-center text-white text-xl font-semibold font-['Inter'] leading-7">BigCommerce + AEM/AEP</div>
    <div data-layer="Platform Subtitle" className="PlatformSubtitle w-64 h-7 left-[28px] top-[96px] absolute text-center justify-center text-white text-base font-normal font-['Inter'] leading-5">Shared commerce · content · data</div>
    <div data-layer="Platform Divider" className="PlatformDivider w-64 h-px left-[28px] top-[155px] absolute bg-neutral-400" />
    <div data-layer="Platform Secondary Title" className="PlatformSecondaryTitle w-64 h-8 left-[28px] top-[182px] absolute text-center justify-center text-white text-xl font-medium font-['Inter'] leading-7">Front-end data layer</div>
    <div data-layer="Platform Secondary Detail" className="PlatformSecondaryDetail w-64 h-7 left-[28px] top-[218px] absolute text-center justify-center text-white text-base font-normal font-['Inter'] leading-5">Behavioral tracking live</div>
  </div>
  <div data-svg-wrapper data-layer="Capability Accent" className="CapabilityAccent left-[417px] top-[814px] absolute">
    <svg width="4" height="43" viewBox="0 0 4 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="4" height="43" fill="#0057FF"/>
    </svg>
  </div>
  <div data-layer="Capability Note" className="CapabilityNote w-80 h-12 left-[438px] top-[810px] absolute justify-center text-blue-600 text-lg font-medium font-['Inter'] leading-6">New capability vs. Mrs. Meyer’s</div>
  <div data-layer="AEP personalization" className="AepPersonalization size-48 left-[812px] top-[569px] absolute bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-300">
    <div data-layer="AEP personalization Title" className="AepPersonalizationTitle w-40 h-16 left-[18px] top-[28px] absolute text-center justify-center text-neutral-800 text-lg font-medium font-['Inter'] leading-7">AEP personalization</div>
    <div data-layer="AEP personalization Detail" className="AepPersonalizationDetail w-40 h-16 left-[18px] top-[98px] absolute text-center justify-center text-zinc-500 text-base font-normal font-['Inter'] leading-6">Real-time segment<br/>targeting</div>
  </div>
  <PulseRing left={800} top={650} reducedMotion={Boolean(reducedMotion)} />
  <div data-svg-wrapper data-layer="AEP personalization Pulse Dot" className="AepPersonalizationPulseDot left-[806px] top-[656px] absolute">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6" r="6" fill="black"/>
    </svg>
  </div>
  <div data-layer="Conversion lift" className="ConversionLift size-48 left-[1089px] top-[569px] absolute bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-300">
    <div data-layer="Conversion lift Title" className="ConversionLiftTitle w-40 h-16 left-[18px] top-[28px] absolute text-center justify-center text-blue-600 text-lg font-medium font-['Inter'] leading-7">Conversion lift</div>
    <div data-layer="Conversion lift Detail" className="ConversionLiftDetail w-40 h-16 left-[18px] top-[98px] absolute text-center justify-center text-zinc-500 text-base font-normal font-['Inter'] leading-6">vs. homegrown<br/>baseline</div>
  </div>
  <PulseRing left={1077} top={650} reducedMotion={Boolean(reducedMotion)} />
  <div data-svg-wrapper data-layer="Conversion lift Pulse Dot" className="ConversionLiftPulseDot left-[1083px] top-[656px] absolute">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6" r="6" fill="#447ACB"/>
    </svg>
  </div>
  <div data-layer="Outcome — 20% DTC revenue uplift" className="Outcome20DtcRevenueUplift size-64 left-[1335px] top-[355px] absolute bg-neutral-800 rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-300 overflow-hidden">
    <div data-svg-wrapper data-layer="Outcome Accent" className="OutcomeAccent left-[28px] top-[36px] absolute">
      <svg width="39" height="5" viewBox="0 0 39 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="39" height="5" rx="2" fill="#0057FF"/>
      </svg>
    </div>
    <div data-layer="Frame 1" className="Frame1 w-64 h-44 left-0 top-[67px] absolute">
      <div data-layer="Outcome Metric" className="OutcomeMetric w-64 h-20 left-0 top-0 absolute text-center justify-center text-zinc-100 text-7xl font-semibold font-['Inter'] leading-[76px]">20%</div>
      <div data-layer="Outcome Label" className="OutcomeLabel w-64 h-9 left-0 top-[79px] absolute text-center justify-center text-zinc-100 text-xl font-medium font-['Inter'] leading-6">DTC revenue uplift</div>
      <div data-layer="Outcome Detail" className="OutcomeDetail w-64 left-0 top-[123px] absolute text-center justify-center text-zinc-500 text-lg font-normal font-['Inter'] leading-8">3 launches ·<br/>US, CA, Men</div>
    </div>
  </div>
</div>
</div>
</>
  )
}
