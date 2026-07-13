import { Container } from "@/components/Container"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { HomepageHeroSection } from "@/components/homepage/sections/HomepageHeroSection"
import { PastClientsSection } from "@/components/homepage/sections/PastClientsSection"
import { HomepageInsightsSection } from "@/components/homepage/sections/HomepageInsightsSection"
import { HomepageAwardsSection } from "@/components/homepage/sections/HomepageAwardsSection"
import { HomepageTestimonialsSection } from "@/components/homepage/sections/HomepageTestimonialsSection"
import { HomepageJourneySection } from "@/components/homepage/sections/HomepageJourneySection"
import { PullQuote } from "@/components/PullQuote"
import { PortfolioFounderSections } from "@/components/work/PortfolioFounderSections"
import { siteCta, siteRoutes } from "@/content/site"
import { HomepageSectionShell } from "@/components/homepage/ui"

import { getHomepageText } from "./homepage"

const HOMEPAGE_BOOK_CALL_HREF = siteCta.bookingUrls.homepageHero
const BOOK_CALL_LABEL = siteCta.bookCallLabel

export default function Homepage() {
  const {
    hero,
    sections,
    stats,
    services,
    awards,
    testimonials,
    journey,
    testimonial,
  } = getHomepageText()

  return (
    <main className="min-h-full bg-[#F3F3F3]">
      <HomepageHeroSection hero={hero} />

      <PastClientsSection
        motionStyle="homepage"
        showRescueCta
        rescueCtaLead={sections.experiences.ctaLead}
      />

      <HomepageInsightsSection
        section={sections.services}
        services={services}
        stats={stats}
        statsCards={stats.cards}
      />

      <HomepageAwardsSection section={sections.awards} awards={awards} />

      <HomepageTestimonialsSection section={sections.testimonials} testimonials={testimonials} />

      <section className="border border-red-500 bg-[#222222]">
        <Container className="py-14 md:py-16 lg:py-20">
          <MotionReveal preset="section" delay={0.02}>
            <PullQuote
              dark
              quote={<>&ldquo;{testimonial.quote}&rdquo;</>}
              attributionTitle={testimonial.name}
              attributionSubtitle={testimonial.handle}
              initials={testimonial.initials}
              avatarSrc={testimonial.avatarSrc}
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

      <HomepageSectionShell
        className="bg-[#F3F3F3]"
        paddingClassName="pt-10 pb-0 md:pt-12 md:pb-0 lg:pt-14 lg:pb-0"
      >
        <PortfolioFounderSections
          portfolio={sections.portfolio}
          founder={sections.portfolio.moreProjects}
          ctaLabel={sections.highlights.cta}
          ctaHref={siteRoutes.work}
          showCta
        />
      </HomepageSectionShell>

      <HomepageJourneySection
        section={sections.journey}
        journey={journey}
        bookCallHref={HOMEPAGE_BOOK_CALL_HREF}
        bookCallLabel={BOOK_CALL_LABEL}
      />
    </main>
  )
}
