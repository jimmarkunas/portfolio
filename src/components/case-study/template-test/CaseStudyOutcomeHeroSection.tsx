"use client"

import { Container } from "@/components/Container"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { CaseStudyMediaFrame } from "@/components/case-study/CaseStudyMediaFrame"
import { TextLink } from "@/components/TextLink"
import { StatCard } from "@/components/StatCard"
import type { CaseStudyTemplateTestData } from "@/content/case-study-template-test"
import { CaseStudySectionHeader } from "./CaseStudySectionHeader"

export function CaseStudyOutcomeHeroSection({ data }: { data: CaseStudyTemplateTestData }) {
  return (
    <section className="bg-[#F3F3F3]">
      <Container className="pb-14 pt-6 md:pb-16 md:pt-8 lg:pb-20 lg:pt-10">
        <div className="flex flex-col gap-8 lg:gap-10">
          <MotionReveal preset="section">
            <nav aria-label="Breadcrumb" className="type-p4 text-[#222222]">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <TextLink href="/work/" className="font-medium">
                    Work
                  </TextLink>
                </li>
                <li aria-hidden="true" className="text-[#222222]/55">
                  /
                </li>
                <li>{data.breadcrumbCurrent}</li>
              </ol>
            </nav>
          </MotionReveal>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-start lg:gap-12">
            <MotionReveal preset="section" className="flex max-w-[820px] flex-col items-start gap-6">
              <CaseStudySectionHeader
                eyebrow={data.hero.eyebrow}
                title={data.hero.title}
                copy={data.hero.intro}
              />
            </MotionReveal>

            <MotionReveal preset="card" delay={0.04} className="grid gap-4 sm:grid-cols-3 lg:pt-2">
              {data.hero.metrics.map((metric) => (
                <StatCard
                  key={`${metric.value}-${metric.label}`}
                  value={metric.value}
                  suffix={metric.suffix}
                  label={<span className="type-p3 text-neutral-700">{metric.label}</span>}
                  className="min-h-[160px] px-6 py-7"
                  valueTextClassName="text-[54px] font-medium leading-none"
                  suffixClassName="text-[30px] font-medium leading-none"
                  labelClassName="mt-3"
                />
              ))}
            </MotionReveal>
          </div>

          <MotionReveal preset="heroMedia" delay={0.08}>
            <div className="overflow-hidden rounded-[28px] border border-black/8 bg-white shadow-[0_24px_60px_rgba(34,34,34,0.08)]">
              <CaseStudyMediaFrame media={data.hero.image} className="w-full" />
            </div>
          </MotionReveal>
        </div>
      </Container>
    </section>
  )
}

