"use client"

import { Container } from "@/components/Container"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { PortfolioImageCard } from "@/components/work/portfolio-founder/PortfolioImageCard"
import { portfolioHoverWideCardClass } from "@/components/work/portfolio-founder/styles"
import type { CaseStudyTemplateTestData } from "@/content/case-study-template-test"
import { CaseStudySectionHeader } from "./CaseStudySectionHeader"

export function CaseStudyRelatedSection({ data }: { data: CaseStudyTemplateTestData }) {
  return (
    <section className="bg-[#F3F3F3]">
      <Container className="py-14 md:py-16 lg:py-20">
        <div className="flex flex-col gap-8">
          <MotionReveal preset="section" className="flex flex-col items-center gap-4 text-center">
            <CaseStudySectionHeader
              eyebrow="Related Case Studies"
              title="Exactly two cards to test the layout"
              copy="These are fictional placeholders that use the existing portfolio card language without pulling in live case-study content."
              align="center"
              className="max-w-[900px]"
            />
          </MotionReveal>

          <div className="grid gap-6 md:grid-cols-2">
            {data.relatedStudies.map((study, index) => (
              <MotionReveal key={study.title} preset="card" delay={index * 0.04}>
                <article className="flex h-full flex-col gap-4">
                  <PortfolioImageCard
                    href={study.href}
                    src={study.image.src}
                    alt={study.image.alt}
                    aspectRatio="16 / 9"
                    className={portfolioHoverWideCardClass}
                    loading="lazy"
                  />
                  <div className="flex flex-col gap-3">
                    <div className="type-p5 uppercase tracking-[0.16em] text-[#7B7B7B]">{study.eyebrow}</div>
                    <h3 className="type-h4 text-[#222222]">{study.title}</h3>
                    <p className="type-p2 text-black/65">{study.summary}</p>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
