"use client"

import { Container } from "@/components/Container"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { PullQuote } from "@/components/PullQuote"
import type { CaseStudyTemplateTestData } from "@/content/case-study-template-test"

export function CaseStudyEvidenceSection({ data }: { data: CaseStudyTemplateTestData }) {
  return (
    <section className="bg-[#222222]">
      <Container className="py-14 md:py-16 lg:py-20">
        <div className="flex flex-col gap-10 lg:gap-12">
          <MotionReveal preset="section">
            <PullQuote
              dark
              quote={data.evidence.testimonial.quote}
              attributionTitle={data.evidence.testimonial.attributionTitle}
              attributionSubtitle={data.evidence.testimonial.attributionSubtitle}
              avatarSrc={data.evidence.testimonial.avatarSrc}
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
        </div>
      </Container>
    </section>
  )
}
