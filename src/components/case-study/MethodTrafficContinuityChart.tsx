"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"

const font = "Inter Display, Inter, ui-sans-serif, system-ui, sans-serif"
const accent = "#447ACB"
const xPoints = [60, 100, 140, 180, 220, 260, 290, 320, 350, 380, 420, 460, 500, 540, 580, 620]
const yPoints = [218, 216, 217, 215, 216, 214, 213, 215, 214, 212, 195, 180, 160, 145, 132, 128]

export default function MethodTrafficContinuityChart() {
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })
  const plotPoints = xPoints.map((x, i) => `${x},${yPoints[i] + 50}`).join(" ")
  return <div className="w-full overflow-hidden rounded-[16px] bg-[#222222]"><svg ref={ref} viewBox="0 0 640 365" className="h-auto w-full" role="img" aria-label="Paid and organic traffic during the Method migration window">
    <rect x="1" y="1" width="638" height="363" rx="16" fill="#222222" />
    <text x="320" y="35" textAnchor="middle" fill="#FFF" fontSize="18" fontWeight="600" fontFamily={font}>Paid &amp; Organic Traffic · Migration Window</text>
    <text x="320" y="54" textAnchor="middle" fill="#B8B8B8" fontSize="13" fontFamily={font}>Method replatform · Apr – Jul 2019 · Indexed to pre-migration baseline</text>
    {[86, 136, 186, 236, 286].map((y) => <line key={y} x1="60" y1={y} x2="620" y2={y} stroke="#3A3A3A" />)}
    {["+20%", "+15%", "+10%", "+5%", "0%"].map((label, i) => <text key={label} x="48" y={90 + i * 50} textAnchor="end" fill="#A0A0A0" fontSize="11" fontFamily={font}>{label}</text>)}
    <line x1="60" y1="286" x2="620" y2="286" stroke="#666" strokeDasharray="4 4" />
    <rect x="260" y="86" width="120" height="200" fill={accent} opacity="0.1" />
    <line x1="260" y1="86" x2="260" y2="296" stroke={accent} strokeDasharray="3 3" opacity="0.55" />
    <line x1="380" y1="86" x2="380" y2="296" stroke={accent} strokeDasharray="3 3" opacity="0.55" />
    <text x="155" y="78" textAnchor="middle" fill="#A0A0A0" fontSize="10" letterSpacing="1" fontFamily={font}>PRE-MIGRATION</text>
    <text x="320" y="78" textAnchor="middle" fill="#A0A0A0" fontSize="10" letterSpacing="1" fontFamily={font}>MIGRATION</text>
    <text x="500" y="78" textAnchor="middle" fill="#A0A0A0" fontSize="10" letterSpacing="1" fontFamily={font}>POST-LAUNCH</text>
    <motion.polyline initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : { pathLength: 0 }} transition={{ duration: 1.2, ease: "easeOut" }} fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" points={plotPoints} />
    <circle cx="260" cy="264" r="4" fill={accent} /><circle cx="380" cy="262" r="4" fill={accent} /><circle cx="620" cy="178" r="5" fill="#4ADE80" />
    {["Jan", "Feb", "Mar", "Apr–May", "Jun", "Jul", "Aug", "Sep"].map((label, i) => <text key={label} x={[60, 140, 220, 300, 380, 460, 540, 620][i]} y="306" textAnchor="middle" fill="#B8B8B8" fontSize="11" fontFamily={font}>{label}</text>)}
    <text x="270" y="330" textAnchor="middle" fill={accent} fontSize="11" fontWeight="500" fontFamily={font}>301 redirects + Google Feed</text>
    <text x="270" y="347" textAnchor="middle" fill="#B8B8B8" fontSize="11" fontFamily={font}>mapping locked before go-live</text>
    <text x="600" y="160" textAnchor="end" fill="#4ADE80" fontSize="13" fontWeight="600" fontFamily={font}>+15% traffic</text>
    <text x="600" y="174" textAnchor="end" fill="#888" fontSize="11" fontFamily={font}>paid + organic</text>
  </svg><div className="flex flex-wrap justify-center gap-x-6 gap-y-2 px-8 pb-5 text-center" style={{ color: "#B8B8B8", fontFamily: font, fontSize: 12, lineHeight: 1.4 }}><span className="inline-flex items-center whitespace-nowrap"><span className="mr-1.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#447ACB]" />Paid + organic traffic (indexed)</span><span className="inline-flex items-center whitespace-nowrap"><span className="mr-1.5 inline-block h-2.5 w-2.5 shrink-0 bg-[#447ACB] opacity-30" />Migration window</span><span className="inline-flex items-center whitespace-nowrap"><span className="mr-1.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#4ADE80]" />Post-launch result</span></div></div>
}
