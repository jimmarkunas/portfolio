"use client"

import { useRef } from "react"

import { Container } from "@/components/Container"
import { FullWidthImage } from "@/components/FullWidthImage"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { StatCard } from "@/components/StatCard"
import type { CaseStudyRevampData } from "@/content/case-studies/revamp/types"
import { CaseStudyRevampSectionHeader } from "./CaseStudyRevampSectionHeader"

export function CaseStudyRevampImpactSection({ data }: { data: CaseStudyRevampData }) {
  const timelineRef = useRef<HTMLDivElement | null>(null)

  return (
    <section className="bg-white">
      <Container className="py-14 md:py-16 lg:py-20">
        <div className="flex flex-col gap-3 lg:gap-4">
          <MotionReveal preset="section" className="flex flex-col items-center gap-4 text-center">
            <CaseStudyRevampSectionHeader
              eyebrow={data.impact.eyebrow}
              title={data.impact.title}
              copy={data.impact.intro}
              align="center"
              className="max-w-[900px]"
            />
          </MotionReveal>

          <MotionReveal preset="card" className={`grid gap-4 sm:grid-cols-2 ${data.impact.metrics.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
            {data.impact.metrics.map((metric) => (
              <StatCard
                key={`${metric.value}-${metric.label}`}
                value={metric.value}
                suffix={metric.suffix}
                decoration={<div className="h-[3px] w-7 rounded-full bg-[#447ACB]" />}
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

          <MotionReveal preset="section" className="flex flex-col gap-4">

            <div className="border-t border-black/10 pt-5">
              <div ref={timelineRef} className="relative">
                <div className="absolute bottom-0 left-[calc(34%+36px)] top-0 hidden w-px bg-black/12 lg:block" />

                <div className="divide-y divide-black/8">
                  {data.impact.transformation.rows.map((row, index) => (
                    <div key={`${row.problem}-${row.decision}-${row.outcome}`} className="py-10 md:py-12">
                      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.34fr)_72px_minmax(0,1fr)] lg:gap-8 lg:items-start">
                        <div className="order-2 flex min-w-0 flex-col gap-2 lg:order-none">
                          <div className="type-p5 uppercase tracking-[0.14em] text-[#B44A4A]">Problem</div>
                          <p className="w-full max-w-none type-p4 leading-[1.45] text-black/55 md:max-lg:type-p3 md:max-lg:max-w-[36ch] md:max-lg:leading-[1.45]">
                            {row.problem}
                          </p>
                        </div>

                        <div className="relative order-1 flex justify-center lg:order-none lg:justify-start">
                          <div className="relative z-10 flex flex-col items-center pt-1 lg:items-start">
                            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#222222] type-p2 font-light tabular-nums text-white">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                        </div>

                        <div className="order-3 flex min-w-0 flex-col gap-2 lg:order-none">
                          <div className="type-p5 uppercase tracking-[0.14em] text-[#447ACB]">Decision</div>
                          <p className="w-full max-w-none type-p4 leading-[1.45] font-normal text-[#222222] md:max-lg:type-h5 md:max-lg:leading-[1.35] md:max-lg:max-w-[48rem]">
                            {row.decision}
                          </p>

                          <div className="mt-5 w-full max-w-none border-l-2 border-l-[#447ACB] pl-4 md:max-lg:max-w-none md:max-lg:pl-5 lg:max-w-[36rem] lg:pl-6">
                            <div className="flex flex-col gap-2">
                              <div className="type-p5 uppercase tracking-[0.14em] text-[#447ACB]">Outcome</div>
                              <p className="w-full max-w-none type-p4 leading-[1.45] font-medium text-[#447ACB] md:max-lg:leading-[1.45]">
                                {row.outcome}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MotionReveal>

          {data.impact.editorialImage ? (
            <MotionReveal preset="image">
              <div className={`flex w-full flex-col gap-4 ${data.slug === "newyorklife" ? "items-center text-center" : ""}`}>
                {data.slug === "newyorklife" ? <h3 className="type-h5 text-[#222222]">CORECMS launch: digital lead attribution increased</h3> : null}
                {data.slug === "newyorklife" ? <p className="type-p3 w-full text-black/62">After the CORECMS launch, digitally attributed lead generation rose well above the 2023 baseline, reaching nearly $100M by November.</p> : null}
                <figure className={`flex w-full flex-col gap-3 ${data.slug === "newyorklife" ? "rounded-[24px] bg-white p-4 md:p-6 [&_img]:brightness-[1.05]" : ""}`}>
                  <FullWidthImage
                    src={data.impact.editorialImage.src}
                    alt={data.impact.editorialImage.alt}
                    fullWidth={false}
                  />
                  {data.impact.editorialImage.caption ? (
                    <figcaption className="type-p5 text-black/55">{data.impact.editorialImage.caption}</figcaption>
                  ) : null}
                </figure>
              </div>
            </MotionReveal>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
