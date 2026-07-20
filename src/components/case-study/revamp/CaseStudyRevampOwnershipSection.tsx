"use client"

import { Container } from "@/components/Container"
import { FullWidthImage } from "@/components/FullWidthImage"
import { MotionReveal } from "@/components/motion/MotionReveal"
import type { CaseStudyRevampData } from "@/content/case-studies/revamp/types"
import { CaseStudyRevampSectionHeader } from "./CaseStudyRevampSectionHeader"
import { CASE_STUDY_SECTION_INTRO_CLASS } from "./CaseStudySectionIntro"

export function CaseStudyRevampOwnershipSection({ data }: { data: CaseStudyRevampData }) {
  return (
    <section className="bg-[#F3F3F3]">
      <Container className="py-3.5 md:py-4 lg:py-5">
        <div className="flex flex-col gap-10 lg:gap-12">
          {data.ownership.editorialImage ? (
            <MotionReveal preset="image">
              <figure className="flex w-full flex-col gap-3">
                <FullWidthImage
                  src={data.ownership.editorialImage.src}
                  alt={data.ownership.editorialImage.alt}
                  fullWidth={false}
                />
                {data.ownership.editorialImage.caption ? (
                  <figcaption className="type-p5 text-black/55">{data.ownership.editorialImage.caption}</figcaption>
                ) : null}
              </figure>
            </MotionReveal>
          ) : null}

          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start lg:gap-12">
            <MotionReveal preset="section" className="flex flex-col gap-6">
              <CaseStudyRevampSectionHeader
                eyebrow="What I Owned"
                title={data.ownership.title}
                className="md:max-lg:w-full md:max-lg:max-w-none md:max-lg:items-start md:max-lg:[&>div]:w-full md:max-lg:[&>div]:max-w-none md:max-lg:[&>div]:gap-3 md:max-lg:[&>div>p]:max-w-none"
              />
              <p className={`${CASE_STUDY_SECTION_INTRO_CLASS} max-w-[620px] md:max-lg:max-w-none`}>{data.ownership.summary}</p>
            </MotionReveal>

            <MotionReveal preset="card" delay={0.04}>
              <ol className="space-y-4">
                {data.ownership.decisions.map((decision, index) => (
                  <li key={decision.title} className="rounded-[20px] border border-black/8 bg-white p-5 md:p-6">
                    <div className="grid gap-4 md:grid-cols-[56px_minmax(0,1fr)] md:items-start md:gap-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#222222] type-p5 font-medium text-white">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="type-p1 font-medium text-[#222222]">{decision.title}</h3>
                        <p className="type-p3 mt-2 text-black/65">{decision.copy}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </MotionReveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
