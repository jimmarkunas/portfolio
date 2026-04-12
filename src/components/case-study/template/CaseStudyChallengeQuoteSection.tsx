import type { CaseStudyData } from "@/content/case-studies/types"
import { Container } from "@/components/Container"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { PullQuote } from "@/components/PullQuote"

export function CaseStudyChallengeQuoteSection({ data }: { data: CaseStudyData }) {
  return (
    <section className="bg-[#222222]">
      <Container className="py-14 md:py-16 lg:py-20">
        <MotionReveal preset="section">
          <PullQuote
            dark
            quote={<>&ldquo;{data.challengeQuote.quote}&rdquo;</>}
            attributionTitle={data.challengeQuote.attributionTitle}
            attributionSubtitle={data.challengeQuote.attributionSubtitle}
            avatarSrc={data.challengeQuote.avatarSrc}
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
      </Container>
    </section>
  )
}
