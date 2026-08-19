import type { Metadata } from "next"

import { Container } from "@/components/Container"
import { PortfolioFounderSections } from "@/components/work/PortfolioFounderSections"
import { StructuredData } from "@/components/seo/StructuredData"
import { liveRevampSlugs, loadLiveRevampCaseStudy } from "@/content/case-studies/revamp/case-study-registry"
import { siteCanonicalPaths } from "@/content/site"
import { portfolioSectionContent } from "@/content/site/portfolio"
import { buildPageMetadata } from "@/lib/seo"
import { createWorkCollectionStructuredData } from "@/lib/structured-data"

export const metadata: Metadata = buildPageMetadata({
  title: "Work",
  description:
    "16 public case studies across commerce transformation, platform modernization, enterprise delivery, and delivery rescue.",
  canonicalPath: siteCanonicalPaths.work,
  routeMarker: "work",
  useDefaultImage: false,
})

export default async function WorkPage() {
  const studies = (await Promise.all(liveRevampSlugs.map(async (slug) => {
    const loaded = await loadLiveRevampCaseStudy(slug)
    return loaded ? { slug, study: loaded.data } : null
  }))).filter((study): study is { slug: string; study: NonNullable<Awaited<ReturnType<typeof loadLiveRevampCaseStudy>>>["data"] } => Boolean(study))
  const introCopy = {
    pill: "Portfolio",
    title: "Successful Projects I've Led",
    description: `${studies.length} public case studies covering commerce transformation, platform modernization, digital commerce, multi-brand architecture, enterprise delivery, delivery rescue, and measurable business outcomes across retail, utilities, insurance, streaming, and global platform programs.`,
  }

  return (
    <main id="work-page" data-gpme-route="work" data-gpme-deploy-sha={process.env.NEXT_PUBLIC_DEPLOY_SHA} className="min-h-full bg-[#F3F3F3]">
      <StructuredData data={createWorkCollectionStructuredData(studies)} />
      <section className="w-full bg-[#F3F3F3]">
        <Container className="pb-14 pt-7 md:pb-16 md:pt-8 lg:pb-[72px] lg:pt-[36px]">
          <PortfolioFounderSections
            intro={introCopy}
            portfolio={portfolioSectionContent.portfolio}
            founder={portfolioSectionContent.founder}
            showCta={false}
          />
        </Container>
      </section>
    </main>
  )
}
