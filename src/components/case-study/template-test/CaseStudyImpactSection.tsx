"use client"

import { Container } from "@/components/Container"
import { FullWidthImage } from "@/components/FullWidthImage"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { StatCard } from "@/components/StatCard"
import type { CaseStudyTemplateTestData } from "@/content/case-study-template-test"
import { CaseStudySectionHeader } from "./CaseStudySectionHeader"

export function CaseStudyImpactSection({ data }: { data: CaseStudyTemplateTestData }) {
  return (
    <section className="bg-white">
      <Container className="py-14 md:py-16 lg:py-20">
        <div className="flex flex-col gap-10 lg:gap-12">
          <MotionReveal preset="section" className="flex flex-col items-center gap-4 text-center">
            <CaseStudySectionHeader
              eyebrow={data.impact.eyebrow}
              title={data.impact.title}
              copy={data.impact.intro}
              align="center"
              className="max-w-[900px]"
            />
          </MotionReveal>

          <MotionReveal preset="card" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {data.impact.metrics.map((metric) => (
              <StatCard
                key={`${metric.value}-${metric.label}`}
                value={metric.value}
                suffix={metric.suffix}
                label={
                  <div className="flex flex-col gap-2">
                    <span className="type-p2 font-medium text-[#222222]">{metric.label}</span>
                    {metric.detail ? <span className="type-p3 text-black/62">{metric.detail}</span> : null}
                  </div>
                }
                className="min-h-[220px] px-7 py-8"
                valueClassName="inline-flex items-baseline justify-center whitespace-nowrap gap-0.5"
                valueTextClassName="type-stat-number font-semibold leading-none tabular-nums"
                suffixClassName="type-stat-plus font-semibold leading-none uppercase"
                labelClassName="mt-4"
              />
            ))}
          </MotionReveal>

          {data.impact.editorialImage ? (
            <MotionReveal preset="image">
              <figure className="flex w-full flex-col gap-3">
                <FullWidthImage
                  src={data.impact.editorialImage.src}
                  alt={data.impact.editorialImage.alt}
                  fullWidth={false}
                />
                {data.impact.editorialImage.caption ? (
                  <figcaption className="type-p5 text-black/55">{data.impact.editorialImage.caption}</figcaption>
                ) : null}
              </figure>
            </MotionReveal>
          ) : null}

          <MotionReveal preset="section" className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="w-full max-w-none type-h4 text-[#222222]">{data.impact.transformation.title}</h3>
            </div>

            <div className="border-t border-black/10 pt-5">
              <div className="relative">
                <div className="absolute bottom-0 left-[calc(34%+36px)] top-0 hidden w-px bg-black/12 lg:block" />

                <div className="divide-y divide-black/8">
                  {data.impact.transformation.rows.map((row, index) => (
                    <div key={`${row.problem}-${row.decision}-${row.outcome}`} className="py-10 md:py-12">
                      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.34fr)_72px_minmax(0,1fr)] lg:gap-8 lg:items-start">
                        <div className="min-w-0">
                          <div className="type-p5 uppercase tracking-[0.14em] text-[#B44A4A]">Problem</div>
                          <p className="mt-2 max-w-[36ch] type-p2 text-black/55">{row.problem}</p>
                        </div>

                        <div className="relative flex justify-center lg:justify-start">
                          <div className="absolute left-1/2 top-0 z-0 h-full w-px bg-black/12 lg:left-[36px]" />
                          <div className="relative z-10 flex flex-col items-center gap-2 pt-1 lg:items-start lg:gap-1">
                            <span className="type-h5 font-light tabular-nums text-black/35">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="h-2.5 w-2.5 rounded-full bg-[#447ACB]" />
                          </div>
                        </div>

                        <div className="min-w-0">
                          <div className="type-p5 uppercase tracking-[0.14em] text-[#447ACB]">Decision</div>
                          <p className="mt-2 max-w-[48rem] type-h5 font-normal text-[#222222]">{row.decision}</p>

                          <div className="mt-5 max-w-[36rem] border-l-2 border-l-[#447ACB] pl-6">
                            <div className="type-p5 uppercase tracking-[0.14em] text-[#447ACB]">Outcome</div>
                            <p className="mt-2 type-p2 font-medium text-[#447ACB]">{row.outcome}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </Container>
    </section>
  )
}
