import type { Metadata } from "next"
import Link from "next/link"

import { Container } from "@/components/Container"
import { PortfolioFounderSections } from "@/components/work/PortfolioFounderSections"
import { StructuredData } from "@/components/seo/StructuredData"
import { getHomepageText } from "@/components/homepage/homepage"
import { loadAllCaseStudies } from "@/content/case-studies"
import { siteCanonicalPaths, siteRoutes } from "@/content/site"
import { buildPageMetadata } from "@/lib/seo"
import {
  createWorkCollectionStructuredData,
  formatStructuredDataStat,
} from "@/lib/structured-data"

export const metadata: Metadata = buildPageMetadata({
  title: "Work",
  description:
    "Case studies by Jim Markunas across commerce transformation, platform modernization, and enterprise delivery.",
  canonicalPath: siteCanonicalPaths.work,
  useDefaultImage: false,
})

export default async function WorkPage() {
  const { sections } = getHomepageText()
  const studies = await loadAllCaseStudies()

  return (
    <main className="min-h-full bg-[#F3F3F3]">
      <StructuredData data={createWorkCollectionStructuredData(studies)} />
      <section className="w-full bg-[#F3F3F3]">
        <Container className="pb-4 pt-8 md:pb-6 md:pt-10 lg:pb-8 lg:pt-12">
          <div className="max-w-[980px] space-y-4">
            <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-4 py-1 shadow-[inset_0_0_0_1px_rgba(34,34,34,0.06)]">
              <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
              <span className="text-[14px] leading-5 text-[#222222]">Portfolio Index</span>
            </div>

            <h1 className="max-w-[900px] text-4xl font-normal leading-tight text-[#222222] md:text-5xl md:leading-[1.08]">
              Case studies in commerce transformation, platform modernization,
              and delivery rescue
            </h1>

            <p className="max-w-[860px] text-[18px] leading-8 text-[#4B4B4B]">
              {studies.length} public case studies covering digital commerce,
              multi-brand architecture, enterprise delivery, and measurable
              business outcomes across retail, utilities, insurance, streaming,
              and global platform programs.
            </p>
          </div>
        </Container>
      </section>

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

      <section className="w-full border-t border-[#222222]/10 bg-white/70">
        <Container className="py-12 md:py-16 lg:py-20">
          <div className="space-y-8">
            <div className="max-w-[920px] space-y-4">
              <div className="inline-flex items-center gap-2 rounded-[50px] bg-[#F3F3F3] px-4 py-1 shadow-[inset_0_0_0_1px_rgba(34,34,34,0.06)]">
                <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
                <span className="text-[14px] leading-5 text-[#222222]">
                  Searchable Summaries
                </span>
              </div>

              <h2 className="max-w-[840px] text-3xl font-normal leading-tight text-[#222222] md:text-4xl">
                Every project below links to the full narrative, delivery role,
                and measured outcome.
              </h2>

              <p className="max-w-[820px] text-[18px] leading-8 text-[#4B4B4B]">
                The visual portfolio grid stays intact, and this server-rendered
                index adds plain-language summaries so search engines and shared
                previews can understand what each engagement actually delivered.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {studies.map(({ slug, study }) => {
                const industry = study.problem.projectOverviewRows.find(
                  (row) => row.label === "Industry"
                )?.value
                const highlights = study.impact.stats
                  .slice(0, 3)
                  .map((stat) =>
                    formatStructuredDataStat(stat.value, stat.suffix, stat.label)
                  )
                  .join(" · ")

                return (
                  <article
                    key={slug}
                    className="rounded-[32px] bg-white px-6 py-6 shadow-[inset_0_0_0_1px_rgba(34,34,34,0.08)] md:px-7"
                  >
                    <p className="text-[13px] uppercase tracking-[0.22em] text-[#6A6A6A]">
                      {industry ?? "Case Study"}
                    </p>

                    <h2 className="mt-3 text-[28px] leading-tight text-[#222222]">
                      <Link
                        href={`/work/${slug}`}
                        className="transition-colors duration-200 hover:text-[#447ACB]"
                      >
                        {study.hero.title}
                      </Link>
                    </h2>

                    <p className="mt-3 text-[17px] leading-8 text-[#4B4B4B]">
                      {study.role.copy}
                    </p>

                    <p className="mt-4 text-[14px] leading-6 text-[#222222]">
                      {highlights}
                    </p>

                    <Link
                      href={`/work/${slug}`}
                      className="mt-5 inline-flex text-[15px] leading-6 text-[#222222] underline decoration-[#222222]/30 underline-offset-4 transition-colors duration-200 hover:text-[#447ACB]"
                    >
                      Read the full case study
                    </Link>
                  </article>
                )
              })}
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
