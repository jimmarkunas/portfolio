import { Container } from "@/components/Container"
import { PortfolioFounderSections } from "@/components/work/PortfolioFounderSections"
import { getHomepageText } from "@/components/homepage/homepage"
import { MotionReveal } from "@/components/motion/MotionReveal"

export default function WorkPage() {
  const { sections } = getHomepageText()

  return (
    <main className="min-h-full bg-[#F3F3F3]">
      <section className="w-full bg-[#F3F3F3]">
        <Container className="pb-14 pt-7 md:pb-16 md:pt-8 lg:pb-[72px] lg:pt-[36px]">
          <MotionReveal preset="section">
            <PortfolioFounderSections
              portfolio={sections.portfolio}
              founder={sections.portfolio.moreProjects}
              ctaLabel={sections.highlights.cta}
              ctaHref="/work/"
              showCta={false}
            />
          </MotionReveal>
        </Container>
      </section>
    </main>
  )
}
