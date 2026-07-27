"use client"

import dynamic from "next/dynamic"

import { Container } from "@/components/Container"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { modereSolutionDetails } from "@/content/case-studies/revamp/modere"
import type { CaseStudyRevampData } from "@/content/case-studies/revamp/types"
import { CaseStudyRevampSectionHeader } from "../CaseStudyRevampSectionHeader"

const ModereSimulation = dynamic(
  () => import("@/components/case-study/modere-simulation/ModereSimulation"),
  { ssr: false }
)

export function CaseStudyRevampModereSolutionSection({
  data,
}: {
  data: CaseStudyRevampData
}) {
  const isWhiteBackground = data.solution.background === "white"

  return (
    <section className={isWhiteBackground ? "bg-white" : "bg-[#F3F3F3]"}>
      <Container className="py-14 md:py-16 lg:py-20">
        <div className="flex flex-col gap-10 lg:gap-12">
          <MotionReveal preset="section" className="flex flex-col items-center gap-4 text-center">
            <CaseStudyRevampSectionHeader
              eyebrow={data.solution.eyebrow}
              title={data.solution.title}
              copy={data.solution.copy}
              align="center"
              className="max-w-[900px]"
            />
          </MotionReveal>

          <MotionReveal preset="cardStrong" className="w-full">
            <ModereSimulation className="w-full" />
          </MotionReveal>

          <MotionReveal preset="cardStrong" className={`${isWhiteBackground ? "bg-[#F3F3F3]" : "bg-white"} p-6 md:p-8`}>
            <div className="grid gap-4 md:grid-cols-2">
              <div className={`rounded-[24px] border border-black/8 ${isWhiteBackground ? "bg-white" : "bg-[#F8F8F8]"} p-6`}>
                <div className="type-p5 uppercase tracking-[0.16em] text-[#7B7B7B]">{modereSolutionDetails.architectureWorked.eyebrow}</div>
                <p className="type-p3 mt-3 text-[#222222]">{modereSolutionDetails.architectureWorked.copy}</p>
              </div>

              <div className={`rounded-[24px] border border-black/8 ${isWhiteBackground ? "bg-white" : "bg-[#F8F8F8]"} p-6`}>
                <div className="type-p5 uppercase tracking-[0.16em] text-[#7B7B7B]">{modereSolutionDetails.businessGained.eyebrow}</div>
                <p className="type-p3 mt-3 text-black/65">{modereSolutionDetails.businessGained.copy}</p>
              </div>
            </div>
          </MotionReveal>
        </div>
      </Container>
    </section>
  )
}
