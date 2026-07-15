"use client"

import { Container } from "@/components/Container"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { CaseStudyMediaFrame } from "@/components/case-study/CaseStudyMediaFrame"
import type { CaseStudyTemplateTestData } from "@/content/case-study-template-test"
import { CaseStudySectionHeader } from "./CaseStudySectionHeader"

export function CaseStudyChallengeSection({ data }: { data: CaseStudyTemplateTestData }) {
  return (
    <section className="bg-[#F3F3F3]">
      <Container className="py-14 md:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-12">
          <MotionReveal preset="section" className="flex flex-col gap-6">
            <CaseStudySectionHeader eyebrow={data.challenge.eyebrow} title={data.challenge.title} />

            <div className="flex flex-col gap-5">
              {data.challenge.paragraphs.map((paragraph, index) => (
                <p key={`${data.challenge.eyebrow}-${index}`} className="type-p2 text-[#222222]">
                  {paragraph}
                </p>
              ))}

              <div className="rounded-[20px] border border-black/8 bg-white px-6 py-5">
                <div className="type-p5 uppercase tracking-[0.16em] text-[#7B7B7B]">Risk and constraints</div>
                <p className="type-p3 mt-3 text-[#222222]">
                  Limited time, legacy systems, and a need for stakeholder proof shaped every decision.
                </p>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal preset="image" delay={0.04}>
            <div className="overflow-hidden rounded-[28px] border border-black/8 bg-white shadow-[0_18px_54px_rgba(34,34,34,0.08)]">
              <CaseStudyMediaFrame media={data.challenge.visual} className="w-full" />
            </div>
            <p className="type-p4 mt-3 text-black/55">{data.challenge.caption}</p>
          </MotionReveal>
        </div>
      </Container>
    </section>
  )
}

