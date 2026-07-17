"use client"

import { Fragment } from "react"
import { Container } from "@/components/Container"
import { FullWidthImage } from "@/components/FullWidthImage"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { ProofPointArrowIcon } from "@/components/case-study/template/CaseStudyTemplateIcons"
import { TagPill } from "@/components/TagPill"
import type { CaseStudyRevampData } from "@/content/case-studies/revamp/types"
import { CaseStudyRevampSectionHeader } from "./CaseStudyRevampSectionHeader"

export function CaseStudyRevampSolutionSection({ data }: { data: CaseStudyRevampData }) {
  return (
    <section className="bg-[#F3F3F3]">
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

          <MotionReveal preset="card" className="bg-white p-6 md:p-8">
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch">
              {data.solution.architecture.map((lane, index) => (
                <Fragment key={lane.title}>
                  <article className="flex min-w-0 h-full flex-col gap-4 rounded-[24px] border border-black/8 bg-[#F8F8F8] p-6">
                    {lane.image ? (
                      <FullWidthImage
                        src={lane.image.src}
                        alt={lane.image.alt}
                        fullWidth={false}
                      />
                    ) : null}

                    <div className="flex items-center justify-center gap-4">
                      <TagPill variant="soft" className="py-1.5 text-center type-p5 uppercase tracking-[0.12em]">
                        {lane.eyebrow}
                      </TagPill>
                    </div>

                    <div className="flex h-[8rem] flex-col items-center justify-center gap-2 text-center">
                      <h3 className="type-h6 text-[#222222]">{lane.title}</h3>
                      <p className="type-p2 text-black/68">{lane.copy}</p>
                    </div>

                    <ul className="space-y-2 border-t border-black/8 pt-4">
                      {lane.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-[#222222]">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#447ACB]" />
                          <span className="type-p2">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>

                  {index < data.solution.architecture.length - 1 ? (
                    <div className="hidden items-center justify-center lg:flex">
                      <ProofPointArrowIcon className="text-[#447ACB]" />
                    </div>
                  ) : null}
                </Fragment>
              ))}
            </div>
          </MotionReveal>

          <MotionReveal preset="cardStrong" className="bg-white p-6 md:p-8">
            <div
              data-placeholder="case-study-solution-diagram"
              className="flex min-h-[360px] w-full items-center justify-center rounded-[24px] border border-dashed border-black/20 bg-[#F8F8F8] px-6 py-12 text-center md:min-h-[420px] md:px-10"
            >
              <div className="flex max-w-[620px] flex-col items-center gap-3">
                <div className="type-p5 uppercase tracking-[0.16em] text-[#7B7B7B]">Diagram Placeholder</div>

                <h3 className="type-h4 text-[#222222]">Production solution diagram renders here</h3>

                <p className="type-p2 max-w-[560px] text-black/60">
                  This test block represents the diagram, architecture visual, workflow, system map, or interactive
                  solution graphic used by production case studies.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-[24px] border border-black/8 bg-[#F8F8F8] p-6">
                <div className="type-p5 uppercase tracking-[0.16em] text-[#7B7B7B]">Why this shape worked</div>
                <p className="type-p2 mt-3 text-[#222222]">{data.solution.summary}</p>
              </div>

              <div className="rounded-[24px] border border-black/8 bg-[#F8F8F8] p-6">
                <div className="type-p5 uppercase tracking-[0.16em] text-[#7B7B7B]">Architecture notes</div>
                <p className="type-p2 mt-3 text-black/65">
                  The point of the section is to pressure-test whether a large system visual reads cleanly without
                  turning into a dashboard.
                </p>
              </div>
            </div>
          </MotionReveal>
        </div>
      </Container>
    </section>
  )
}
