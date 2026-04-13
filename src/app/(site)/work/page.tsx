import type { Metadata } from "next"

import { Container } from "@/components/Container"
import { PortfolioFounderSections } from "@/components/work/PortfolioFounderSections"
import { getHomepageText } from "@/components/homepage/homepage"
import { siteCanonicalPaths, siteRoutes } from "@/content/site"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Work",
  description:
    "Case studies by Jim Markunas across commerce transformation, platform modernization, and enterprise delivery.",
  canonicalPath: siteCanonicalPaths.work,
})

export default function WorkPage() {
  const { sections } = getHomepageText()

  return (
    <main className="min-h-full bg-[#F3F3F3]">
      <section className="w-full bg-[#F3F3F3]">
        <Container className="pb-14 pt-7 md:pb-16 md:pt-8 lg:pb-[72px] lg:pt-[36px]">
          <PortfolioFounderSections
            portfolio={sections.portfolio}
            founder={sections.portfolio.moreProjects}
            ctaLabel={sections.highlights.cta}
            ctaHref={siteRoutes.work}
            showCta={false}
          />
        </Container>
      </section>
    </main>
  )
}
