import { HomepageHeroSection } from "@/components/homepage/sections/HomepageHeroSection"
import { PastClientsSection } from "@/components/homepage/sections/PastClientsSection"
import {
  HomepageInsightsSection,
  HomepageServicesGrid,
} from "@/components/homepage/sections/HomepageInsightsSection"
import { HomepageAwardsSection } from "@/components/homepage/sections/HomepageAwardsSection"
import { HomepageTestimonialsSection } from "@/components/homepage/sections/HomepageTestimonialsSection"
import { HomepagePullQuoteSection } from "@/components/homepage/sections/HomepagePullQuoteSection"
import { HomepageJourneySection } from "@/components/homepage/sections/HomepageJourneySection"
import { PortfolioFounderSections } from "@/components/work/PortfolioFounderSections"
import { ContentFlow } from "@/components/ContentFlow"
import { siteRoutes } from "@/content/site"
import { portfolioSectionContent } from "@/content/site/portfolio"
import {
  HOMEPAGE_SECTION_HEADER_TITLE_CLASS,
  HOMEPAGE_SECTION_HEADER_TITLE_GROUP_CLASS,
  HomepageSectionHeader,
  HomepageSectionShell,
} from "@/components/homepage/ui"
import { MotionReveal } from "@/components/motion/MotionReveal"

import { getHomepageText } from "./homepage"

export default function Homepage() {
  const {
    hero,
    sections,
    stats,
    services,
    awards,
    testimonials,
    journey,
  } = getHomepageText()

  return (
    <main className="min-h-full bg-[#F3F3F3]">
      <HomepageHeroSection hero={hero} />

      <PastClientsSection
        motionStyle="homepage"
        showRescueCta
      />

      <HomepageInsightsSection
        section={sections.provenResults}
        stats={stats}
        statsCards={stats.cards}
      />

      <HomepageSectionShell
        className="bg-[#F3F3F3]"
        paddingClassName="pt-10 pb-10 md:pt-12 md:pb-12 lg:pt-14 lg:pb-14"
        containerClassName="!px-8 md:!px-12 lg:!px-12"
      >
        <div className="flex w-full flex-col gap-8 md:gap-10">
            <MotionReveal preset="hero" className="w-full" delay={0.02}>
              <HomepageSectionHeader label={sections.experience.pill}>
                <div
                  className={`${HOMEPAGE_SECTION_HEADER_TITLE_GROUP_CLASS} w-full lg:grid lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:gap-12`}
                >
                  <h2 className={`${HOMEPAGE_SECTION_HEADER_TITLE_CLASS} max-w-[540px] text-[#222222]`}>
                    {sections.experience.title}
                  </h2>
                  <div className="max-w-[980px]">
                    <ContentFlow spacing="body">
                      {sections.experience.description.map((paragraph) => (
                        <p key={paragraph} className="type-p3 text-black/80">
                          {paragraph}
                        </p>
                      ))}
                    </ContentFlow>
                  </div>
                </div>
              </HomepageSectionHeader>
            </MotionReveal>

          <HomepageServicesGrid services={services} />
        </div>
      </HomepageSectionShell>

      <HomepagePullQuoteSection />

      <HomepageAwardsSection section={sections.awards} awards={awards} />

      <HomepageTestimonialsSection section={sections.testimonials} testimonials={testimonials} />

      <HomepageSectionShell
        className="bg-[#F3F3F3]"
        paddingClassName="pt-10 pb-0 md:pt-12 md:pb-0 lg:pt-14 lg:pb-0"
      >
        <PortfolioFounderSections
          portfolio={portfolioSectionContent.portfolio}
          founder={portfolioSectionContent.founder}
          ctaLabel={portfolioSectionContent.ctaLabel}
          ctaHref={siteRoutes.work}
          showCta
        />
      </HomepageSectionShell>

      <HomepageJourneySection
        section={sections.recognition}
        journey={journey}
      />
    </main>
  )
}
