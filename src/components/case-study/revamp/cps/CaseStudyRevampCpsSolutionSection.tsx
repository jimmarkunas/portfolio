"use client"

import { Fragment } from "react"

import { Container } from "@/components/Container"
import { FullWidthImage } from "@/components/FullWidthImage"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { ProofPointArrowIcon } from "@/components/case-study/template/CaseStudyTemplateIcons"
import { TagPill } from "@/components/TagPill"
import type { CaseStudyRevampData } from "@/content/case-studies/revamp/types"
import { cpsSolutionContent } from "@/content/case-studies/revamp/cps"
import { CaseStudyRevampSectionHeader } from "../CaseStudyRevampSectionHeader"
import { CpsOperationsFlowDiagram } from "./CpsOperationsFlowDiagram"

export function CaseStudyRevampCpsSolutionSection({ data }: { data: CaseStudyRevampData }) {
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

          <MotionReveal preset="card" className={`${isWhiteBackground ? "bg-[#F3F3F3]" : "bg-white"} p-6 md:p-8`}>
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch">
              {data.solution.architecture.map((lane, index) => (
                <Fragment key={lane.title}>
                  <article className={`flex min-w-0 h-full flex-col gap-4 rounded-[24px] border border-black/8 ${isWhiteBackground ? "bg-white" : "bg-[#F8F8F8]"} p-6`}>
                    {lane.image ? <FullWidthImage src={lane.image.src} alt={lane.image.alt} fullWidth={false} /> : null}

                    <div className="flex items-center justify-center gap-4">
                      <TagPill variant="soft" className="py-1.5 text-center type-p5 uppercase tracking-[0.12em]">
                        {lane.eyebrow}
                      </TagPill>
                    </div>

                    <div className="flex h-[8rem] flex-col items-center justify-center gap-2 text-center">
                      <h3 className="type-h6 text-[#222222]">{lane.title}</h3>
                      <p className="type-p3 text-black/68">{lane.copy}</p>
                    </div>

                    <ul className="mx-auto w-max max-w-full space-y-2 border-t border-black/8 pt-4 text-left lg:mx-0 lg:w-auto lg:max-w-none">
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
                      <ProofPointArrowIcon className="text-[#447ACB]" />
                    </div>
                  ) : null}
                </Fragment>
              ))}
            </div>
          </MotionReveal>

          <MotionReveal preset="cardStrong" className="overflow-hidden rounded-[24px] bg-white">
            <div className="p-6 md:p-8">
              <CaseStudyRevampSectionHeader
                eyebrow={cpsSolutionContent.flow.eyebrow}
                title={cpsSolutionContent.flow.title}
                copy={cpsSolutionContent.flow.copy}
              />
              <div className="mt-6">
                <CpsOperationsFlowDiagram />
              </div>
            </div>
          </MotionReveal>

          <MotionReveal preset="cardStrong" className={`${isWhiteBackground ? "bg-[#F3F3F3]" : "bg-white"} p-6 md:p-8`}>
            <p className="type-p3 text-[#222222]">{cpsSolutionContent.closing}</p>
          </MotionReveal>
        </div>
      </Container>

    </section>
  )
}
