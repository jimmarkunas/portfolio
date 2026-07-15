"use client"

import { Container } from "@/components/Container"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { TagPill } from "@/components/TagPill"
import { Timeline } from "@/components/Timeline"
import { ProofPointArrowIcon } from "@/components/case-study/template/CaseStudyTemplateIcons"
import type { CaseStudyTemplateTestData } from "@/content/case-study-template-test"
import { CaseStudySectionHeader } from "./CaseStudySectionHeader"

export function CaseStudySolutionSection({ data }: { data: CaseStudyTemplateTestData }) {
  return (
    <section className="bg-[#F3F3F3]">
      <Container className="py-14 md:py-16 lg:py-20">
        <div className="flex flex-col gap-10 lg:gap-12">
          <MotionReveal preset="section" className="flex flex-col items-center gap-4 text-center">
            <CaseStudySectionHeader
              eyebrow={data.solution.eyebrow}
              title={data.solution.title}
              copy={data.solution.copy}
              align="center"
              className="max-w-[900px]"
            />
          </MotionReveal>

          <MotionReveal preset="cardStrong" className="rounded-[28px] border border-black/8 bg-white p-6 md:p-8">
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch">
              {data.solution.architecture.map((lane, index) => (
                <div key={lane.title} className="flex flex-col gap-4">
                  <article className="flex h-full flex-col gap-4 rounded-[24px] border border-black/8 bg-[#F8F8F8] p-6">
                    <div className="flex items-center justify-between gap-4">
                      <TagPill variant="soft" className="py-1.5 text-[13px] uppercase tracking-[0.12em]">
                        {lane.eyebrow}
                      </TagPill>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="type-h5 text-[#222222]">{lane.title}</h3>
                      <p className="type-p3 text-black/68">{lane.copy}</p>
                    </div>
                    <ul className="mt-auto space-y-2 border-t border-black/8 pt-4">
                      {lane.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-[#222222]">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#447ACB]" />
                          <span className="type-p3">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                  {index < data.solution.architecture.length - 1 ? (
                    <div className="hidden items-center justify-center lg:flex">
                      <ProofPointArrowIcon className="rotate-0 text-[#447ACB]" />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:items-start">
              <div className="rounded-[24px] border border-black/8 bg-[#F8F8F8] p-6">
                <div className="type-p5 uppercase tracking-[0.16em] text-[#7B7B7B]">Why this shape worked</div>
                <p className="type-p2 mt-3 text-[#222222]">{data.solution.summary}</p>
              </div>

              <div className="rounded-[24px] border border-black/8 bg-[#F8F8F8] p-6">
                <div className="type-p5 uppercase tracking-[0.16em] text-[#7B7B7B]">Architecture notes</div>
                <p className="type-p3 mt-3 text-black/65">
                  The point of the section is to pressure-test whether a large system visual reads cleanly without
                  turning into a dashboard.
                </p>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal preset="card" delay={0.04} className="rounded-[28px] border border-black/8 bg-white p-6 md:p-8">
            <div className="mb-6 flex flex-col gap-3">
              <h3 className="type-h5 text-[#222222]">Optional delivery timeline</h3>
              <p className="type-p3 max-w-[760px] text-black/60">
                The timeline is embedded here as an optional block so we can validate section behavior without
                adding a separate production section yet.
              </p>
            </div>
            <Timeline items={data.solution.timeline} />
          </MotionReveal>
        </div>
      </Container>
    </section>
  )
}

