import { Container } from "@/components/Container"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { caseStudyPullQuotes } from "@/content/case-studies/pull-quotes"

import { RotatingPullQuote } from "./RotatingPullQuote"

export function HomepagePullQuoteSection() {
  return (
    <section className="bg-[#222222]">
      <Container className="py-8 md:py-10 lg:py-12">
        <MotionReveal preset="section" delay={0.02}>
          <RotatingPullQuote quotes={caseStudyPullQuotes} />
        </MotionReveal>
      </Container>
    </section>
  )
}
