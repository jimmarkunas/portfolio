"use client"

import dynamic from "next/dynamic"
import { Container } from "@/components/Container"
import { MotionReveal } from "@/components/motion/MotionReveal"
import type { CaseStudyRevampData } from "@/content/case-studies/revamp/types"
import { CaseStudyRevampSectionHeader } from "../CaseStudyRevampSectionHeader"

const BiCommerceDiagram = dynamic(() => import("@/components/case-study/bi-commerce-ecosystem-diagram"), { ssr: false })

export function CaseStudyRevampBiSolutionSection({ data }: { data: CaseStudyRevampData }) {
  const isWhiteBackground = data.solution.background === "white"

  return <section className={`border-b border-black/10 ${isWhiteBackground ? "bg-white" : "bg-[#F3F3F3]"}`}><Container className="pb-8 pt-14 md:pb-10 md:pt-16 lg:pb-10 lg:pt-20"><div className="flex flex-col gap-10 lg:gap-12">
    <MotionReveal preset="section" className="flex flex-col items-center gap-4 text-center"><CaseStudyRevampSectionHeader eyebrow={data.solution.eyebrow} title={data.solution.title} copy={data.solution.copy} align="center" className="max-w-[900px]" /></MotionReveal>
    <MotionReveal preset="cardStrong" className="overflow-hidden rounded-[24px] bg-white"><BiCommerceDiagram /></MotionReveal>
    <div className={`grid gap-4 p-6 md:grid-cols-2 ${isWhiteBackground ? "bg-[#F3F3F3]" : "bg-white"}`}>
      <div className={`rounded-[24px] border border-black/8 ${isWhiteBackground ? "bg-white" : "bg-[#F8F8F8]"} p-6`}>
        <div className="type-p5 uppercase tracking-[0.16em] text-[#7B7B7B]">Why the architecture worked</div>
        <p className="type-p3 mt-3 text-[#222222]">Commerce, product data, content, and market logic each had a clear home. That separation reduced custom work, protected the platform from vendor drift, and made expansion repeatable instead of rebuilding market by market.</p>
      </div>
      <div className={`rounded-[24px] border border-black/8 ${isWhiteBackground ? "bg-white" : "bg-[#F8F8F8]"} p-6`}>
        <div className="type-p5 uppercase tracking-[0.16em] text-[#7B7B7B]">What the business gained</div>
        <p className="type-p3 mt-3 text-black/65">Markets could manage the right catalog, pricing, and ordering logic without turning routine commercial work into another country-specific build. The global model stayed focused on commerce while local variation remained controlled.</p>
      </div>
    </div>
  </div></Container></section>
}
