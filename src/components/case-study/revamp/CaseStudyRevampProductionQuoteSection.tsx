"use client"

import { Container } from "@/components/Container"
import { PullQuote } from "@/components/PullQuote"
import { MotionReveal } from "@/components/motion/MotionReveal"
import type { CaseStudyRevampData } from "@/content/case-studies/revamp/types"

export function CaseStudyRevampProductionQuoteSection({ data }: { data: CaseStudyRevampData }) {
  return (
    <section className="bg-white">
      <Container className="py-14 md:py-16 lg:py-20">
        <MotionReveal preset="section">
          <PullQuote
            quote={data.productionQuote.quote}
            attributionTitle={data.productionQuote.attributionTitle}
            attributionSubtitle={data.productionQuote.attributionSubtitle}
            avatarSrc={data.productionQuote.avatarSrc}
            glyphClassName="text-[rgba(34,34,34,0.06)]"
            quoteClassName="!type-h4"
            attributionClassName="[&>div>div:first-child]:!type-h5 [&>div>div:last-child]:!type-p5"
          />
        </MotionReveal>
      </Container>
    </section>
  )
}
