"use client"

import { Container } from "@/components/Container"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { PullQuote } from "@/components/PullQuote"
import { TagPill } from "@/components/TagPill"
import type { CaseStudyTemplateTestData } from "@/content/case-study-template-test"
import { CaseStudySectionHeader } from "./CaseStudySectionHeader"

export function CaseStudyEvidenceSection({ data }: { data: CaseStudyTemplateTestData }) {
  return (
    <section className="bg-[#222222]">
      <Container className="py-14 md:py-16 lg:py-20">
        <div className="flex flex-col gap-10 lg:gap-12">
          <MotionReveal preset="section" className="flex flex-col items-center gap-4 text-center">
            <CaseStudySectionHeader
              eyebrow={data.evidence.eyebrow}
              title={data.evidence.title}
              copy={data.evidence.intro}
              align="center"
              tone="dark"
              className="max-w-[900px]"
            />
          </MotionReveal>

          <MotionReveal preset="section">
          <PullQuote
            dark
            quote={data.evidence.testimonial.quote}
            attributionTitle={data.evidence.testimonial.attributionTitle}
            attributionSubtitle={data.evidence.testimonial.attributionSubtitle}
            glyphClassName="text-[rgba(255,255,255,0.1)]"
              decorativeFrame={
                <>
                  <div className="pointer-events-none absolute left-4 top-6 h-16 w-16 rounded-tl-[18px] border-l border-t border-white/10 md:left-8 md:top-8 md:h-20 md:w-20" />
                  <div className="pointer-events-none absolute right-4 top-6 h-16 w-16 rounded-tr-[18px] border-r border-t border-white/10 md:right-8 md:top-8 md:h-20 md:w-20" />
                  <div className="pointer-events-none absolute bottom-6 left-4 h-16 w-16 rounded-bl-[18px] border-b border-l border-white/10 md:bottom-8 md:left-8 md:h-20 md:w-20" />
                  <div className="pointer-events-none absolute bottom-6 right-4 h-16 w-16 rounded-br-[18px] border-b border-r border-white/10 md:bottom-8 md:right-8 md:h-20 md:w-20" />
                </>
              }
            />
          </MotionReveal>

          <MotionReveal preset="card" className="grid gap-4 md:grid-cols-3">
            {data.evidence.validationItems.map((item) => (
              <article key={item.title} className="rounded-[24px] border border-white/10 bg-white/5 p-6">
                <TagPill variant="white" className="py-1.5 type-p5 uppercase tracking-[0.12em]">
                  {item.eyebrow}
                </TagPill>
                <h3 className="type-h5 mt-4 text-white">{item.title}</h3>
                <p className="type-p2 mt-3 text-white/68">{item.copy}</p>
              </article>
            ))}
          </MotionReveal>
        </div>
      </Container>
    </section>
  )
}
