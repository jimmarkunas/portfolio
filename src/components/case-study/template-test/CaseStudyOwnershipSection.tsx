"use client"

import { Container } from "@/components/Container"
import { MotionReveal } from "@/components/motion/MotionReveal"
import type { CaseStudyTemplateTestData } from "@/content/case-study-template-test"
import { CaseStudySectionHeader } from "./CaseStudySectionHeader"

export function CaseStudyOwnershipSection({ data }: { data: CaseStudyTemplateTestData }) {
  return (
    <section className="bg-white">
      <Container className="py-14 md:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start lg:gap-12">
          <MotionReveal preset="section" className="flex flex-col gap-6">
            <CaseStudySectionHeader eyebrow={data.ownership.eyebrow} title={data.ownership.title} />
            <p className="type-p3 max-w-[620px] text-black/70">{data.ownership.summary}</p>
          </MotionReveal>

          <MotionReveal preset="card" delay={0.04}>
            <ol className="space-y-4">
              {data.ownership.decisions.map((decision, index) => (
                <li key={decision.title} className="rounded-[20px] border border-black/8 bg-[#F8F8F8] p-5 md:p-6">
                  <div className="grid gap-4 md:grid-cols-[56px_minmax(0,1fr)] md:items-start md:gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#222222] type-p5 font-medium text-white">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="type-h4 text-[#222222]">{decision.title}</h3>
                      <p className="type-p2 mt-2 text-black/65">{decision.copy}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </MotionReveal>
        </div>
      </Container>
    </section>
  )
}
