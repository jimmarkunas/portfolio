"use client"

import { Container } from "@/components/Container"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { CaseStudyMediaFrame } from "@/components/case-study/CaseStudyMediaFrame"
import type { CaseStudyRevampData } from "@/content/case-studies/revamp/types"
import { CaseStudyRevampSectionHeader } from "./CaseStudyRevampSectionHeader"

export function CaseStudyRevampChallengeSection({ data }: { data: CaseStudyRevampData }) {
  return (
    <section className="bg-[#F3F3F3]">
      <Container className="py-14 md:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-12">
          <MotionReveal preset="section" className="flex flex-col gap-6">
            <CaseStudyRevampSectionHeader eyebrow={data.challenge.eyebrow} title={data.challenge.title} />

            <div className="flex flex-col gap-5">
              {data.challenge.paragraphs.map((paragraph, index) => (
                <p key={`${data.challenge.eyebrow}-${index}`} className="type-p3 text-[#222222]">
                  {paragraph}
                </p>
              ))}
            </div>
          </MotionReveal>

          <MotionReveal preset="image" delay={0.04}>
            <div className="lg:mt-12 overflow-hidden rounded-[28px] border border-black/8 bg-white shadow-[0_18px_54px_rgba(34,34,34,0.08)]">
              <CaseStudyMediaFrame media={data.challenge.visual} className="w-full" />
            </div>
            <p className="type-p5 mt-3 text-black/55">{data.challenge.caption}</p>
          </MotionReveal>
        </div>
      </Container>
    </section>
  )
}
