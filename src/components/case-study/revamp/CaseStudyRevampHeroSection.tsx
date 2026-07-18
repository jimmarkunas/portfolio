"use client"

import Link from "next/link"

import { BreadcrumbHomeIcon } from "@/components/case-study/template/CaseStudyTemplateIcons"
import { CaseStudyHeroImage } from "@/components/case-study/CaseStudyHeroImage"
import { Container } from "@/components/Container"
import { AnimatedMetricValue } from "@/components/metrics/AnimatedMetricValue"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { TextLink } from "@/components/TextLink"
import type { CaseStudyRevampData } from "@/content/case-studies/revamp/types"

export function CaseStudyRevampHeroSection({ data }: { data: CaseStudyRevampData }) {
  return (
    <section className="bg-[#F3F3F3]">
      <Container className="pb-7 pt-8 md:pb-8 md:pt-10 lg:pb-10 lg:pt-12">
        <div className="flex flex-col gap-6 lg:gap-8">
          <MotionReveal preset="section">
            <nav aria-label="Breadcrumb" className="type-p5 text-[#222222]">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#222222] text-white transition-colors duration-200 hover:bg-[#447ACB] hover:text-white"
                    href="/"
                    aria-label="Home"
                  >
                    <BreadcrumbHomeIcon />
                  </Link>
                </li>
                <li aria-hidden="true" className="text-[#222222]">
                  &gt;
                </li>
                <li>
                  <TextLink href="/work">Case Studies</TextLink>
                </li>
                <li aria-hidden="true" className="text-[#222222]">
                  &gt;
                </li>
                <li className="text-[#222222]">{data.breadcrumbCurrent}</li>
              </ol>
            </nav>
          </MotionReveal>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-x-12 lg:gap-y-6">
            <MotionReveal preset="section" className="lg:col-span-2">
              <h1 className="type-h1-case-study w-full text-[#222222]">{data.hero.title}</h1>
            </MotionReveal>

            <MotionReveal preset="section" delay={0.05} className="w-full max-w-none">
              <p className="type-p2 w-full text-black/66">{data.hero.intro}</p>
            </MotionReveal>

            <MotionReveal preset="card" delay={0.04} className="grid gap-4 md:grid-cols-3 lg:mt-0 lg:items-start xl:grid-cols-3">
              {data.hero.metrics.map((metric) => (
                <article
                  key={`${metric.value}-${metric.label}`}
                  className="relative h-[176px] overflow-hidden rounded-[10px] bg-white px-8 py-10"
                >
                  <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                    <div
                      aria-label={`${metric.value}${metric.suffix ?? ""} ${metric.label}`.trim()}
                      className="inline-flex items-baseline justify-center whitespace-nowrap leading-none text-slate-800"
                    >
                      <AnimatedMetricValue
                        value={metric.value}
                        trigger="load"
                        className="font-[var(--font-family-display)] type-stat-number font-semibold text-[#404040]"
                      />
                      {metric.suffix ? (
                        <span className="font-[var(--font-family-display)] type-stat-plus font-semibold text-[#404040]">
                          {metric.suffix && /^[a-zA-Z]+$/.test(metric.suffix)
                            ? metric.suffix.toUpperCase()
                            : metric.suffix}
                        </span>
                      ) : null}
                    </div>
                    <div className="type-p3 max-w-[260px] text-center leading-[1.3] text-neutral-700 text-balance">
                      {metric.label}
                    </div>
                  </div>
                </article>
              ))}
            </MotionReveal>
          </div>

          <MotionReveal preset="image">
            <CaseStudyHeroImage src={data.hero.image.src} alt={data.hero.image.alt} />
          </MotionReveal>
        </div>
      </Container>
    </section>
  )
}
