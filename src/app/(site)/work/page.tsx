import type { Metadata } from "next"

import { Container } from "@/components/Container"
import { PortfolioFounderSections } from "@/components/work/PortfolioFounderSections"
import { StructuredData } from "@/components/seo/StructuredData"
import { getHomepageText } from "@/components/homepage/homepage"
import { loadAllCaseStudies } from "@/content/case-studies"
import { siteCanonicalPaths } from "@/content/site"
import { buildPageMetadata } from "@/lib/seo"
import { createWorkCollectionStructuredData } from "@/lib/structured-data"

export const metadata: Metadata = buildPageMetadata({
  title: "Work",
  description:
    "16 public case studies across commerce transformation, platform modernization, enterprise delivery, and delivery rescue.",
  canonicalPath: siteCanonicalPaths.work,
  useDefaultImage: false,
})

export default async function WorkPage() {
  const { sections } = getHomepageText()
  const studies = await loadAllCaseStudies()
  const introCopy = {
    pill: "Portfolio",
    title: "Successful Projects I've Led",
    description: `${studies.length} public case studies covering commerce transformation, platform modernization, digital commerce, multi-brand architecture, enterprise delivery, delivery rescue, and measurable business outcomes across retail, utilities, insurance, streaming, and global platform programs.`,
  }

  return (
    <main className="min-h-full bg-[#F3F3F3]">
      <StructuredData data={createWorkCollectionStructuredData(studies)} />
      <section className="w-full bg-[#F3F3F3]">
        <Container className="pb-14 pt-7 md:pb-16 md:pt-8 lg:pb-[72px] lg:pt-[36px]">
          <PortfolioFounderSections
            intro={introCopy}
            portfolio={sections.portfolio}
            founder={sections.portfolio.moreProjects}
            showCta={false}
          />
        </Container>
      </section>
    </main>
  )
}
