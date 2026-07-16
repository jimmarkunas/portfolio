"use client"

import { Container } from "@/components/Container"
import { PullQuote } from "@/components/PullQuote"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { caseStudy as cpsCaseStudy } from "@/content/case-studies/cps"

export function CaseStudyProductionQuoteSection() {
  return (
    <section className="border-y-2 border-red-500 bg-white">
      <Container className="py-14 md:py-16 lg:py-20">
        <MotionReveal preset="section">
          <PullQuote
            quote={cpsCaseStudy.problem.quote.quote}
            attributionTitle={cpsCaseStudy.problem.quote.attributionTitle}
            attributionSubtitle={cpsCaseStudy.problem.quote.attributionSubtitle}
            avatarSrc={cpsCaseStudy.problem.quote.avatarSrc}
            glyphClassName="text-[rgba(34,34,34,0.06)]"
            quoteClassName="!type-h4"
            attributionClassName="[&>div>div:first-child]:!type-h5 [&>div>div:last-child]:!type-p5"
          />
        </MotionReveal>
      </Container>
    </section>
  )
}
