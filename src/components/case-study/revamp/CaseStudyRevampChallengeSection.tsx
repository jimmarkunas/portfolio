"use client"

import { Container } from "@/components/Container"
import { EyebrowPill } from "@/components/EyebrowPill"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { CaseStudyMediaFrame } from "@/components/case-study/CaseStudyMediaFrame"
import type { CaseStudyRevampData } from "@/content/case-studies/revamp/types"
import { CASE_STUDY_SECTION_INTRO_CLASS } from "./CaseStudySectionIntro"

export function CaseStudyRevampChallengeSection({ data }: { data: CaseStudyRevampData }) {
  const isDirectvRevenueChart = data.challenge.visual.kind === "react-diagram" && data.challenge.visual.component === "directv-revenue"
  const isRetailChart = data.challenge.visual.kind === "react-diagram" && ["retail-vs-dtc", "method-traffic-continuity"].includes(data.challenge.visual.component)

  return (
    <section className="bg-[#F3F3F3]">
      <Container className="py-14 md:py-16 lg:py-20">
        <div className={`grid gap-10 ${isRetailChart ? "lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]" : "lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]"} lg:grid-rows-[auto_auto] lg:items-start lg:gap-x-12 lg:gap-y-4 lg:max-xl:grid-cols-1 lg:max-xl:gap-x-8 lg:max-xl:gap-y-4`}>
          <MotionReveal preset="section" className="flex flex-col items-start gap-4 lg:col-start-1 lg:row-start-1">
            <EyebrowPill data-case-study-challenge-eyebrow className="w-fit" labelClassName="type-p3 text-[#222222]">
              {data.challenge.eyebrow}
            </EyebrowPill>
          </MotionReveal>

          <MotionReveal preset="section" className="flex flex-col gap-6 lg:col-start-1 lg:row-start-2">
            <h2 data-case-study-challenge-title className="type-h2 text-[#222222]">{data.challenge.title}</h2>
            <div data-case-study-challenge-copy className="flex flex-col gap-5">
              {data.challenge.paragraphs.map((paragraph, index) => (
                <p key={`${data.challenge.eyebrow}-${index}`} className={`${CASE_STUDY_SECTION_INTRO_CLASS} text-[#222222]`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </MotionReveal>

          <MotionReveal preset="image" delay={0.04} className="lg:col-start-2 lg:row-start-2">
            <div data-case-study-challenge-media className={isDirectvRevenueChart ? "overflow-hidden rounded-[28px] bg-white" : "overflow-hidden rounded-[28px] border border-black/8 bg-white shadow-[0_18px_54px_rgba(34,34,34,0.08)]"}>
              <CaseStudyMediaFrame media={data.challenge.visual} className="w-full" />
            </div>
            {data.challenge.caption ? <p className="type-p5 mt-3 text-black/55">{data.challenge.caption}</p> : null}
          </MotionReveal>
        </div>
      </Container>
    </section>
  )
}
