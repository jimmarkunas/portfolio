"use client"

import { Container } from "@/components/Container"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { StatCard } from "@/components/StatCard"
import { BeforeAfterComparison } from "@/components/case-study/BeforeAfterComparison"
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
                valueTextClassName="text-[52px] font-medium leading-none"
                suffixClassName="text-[30px] font-medium leading-none"
                labelClassName="mt-4"
              />
            ))}
          </MotionReveal>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:items-start">
            <MotionReveal preset="card" className="rounded-[28px] border border-black/8 bg-[#222222] p-6 md:p-8">
              <BeforeAfterComparison columns={data.impact.beforeAfter.columns} />
              <h3 className="type-h5 mt-6 text-white">{data.impact.beforeAfter.title}</h3>
              <p className="type-p3 mt-3 max-w-[760px] text-white/72">{data.impact.beforeAfter.summary}</p>
            </MotionReveal>

            <MotionReveal preset="section" delay={0.04} className="flex flex-col gap-4">
              <div className="rounded-[24px] border border-black/8 bg-[#F8F8F8] p-6 md:p-7">
                <div className="type-p5 uppercase tracking-[0.16em] text-[#7B7B7B]">Decision-to-outcome links</div>
                <div className="mt-4 flex flex-col gap-4">
                  {data.impact.connections.map((connection) => (
                    <article key={connection.title} className="rounded-[18px] border border-black/8 bg-white p-5">
                      <h4 className="type-h6 text-[#222222]">{connection.title}</h4>
                      <p className="type-p3 mt-2 text-black/65">{connection.copy}</p>
                    </article>
                  ))}
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

