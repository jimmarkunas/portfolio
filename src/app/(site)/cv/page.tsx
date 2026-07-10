import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { ReactNode } from "react"

import { Container } from "@/components/Container"
import { EyebrowPill } from "@/components/EyebrowPill"
import { AnimatedMetricValue } from "@/components/metrics/AnimatedMetricValue"
import { TrackedExternalLink } from "@/components/analytics/TrackedExternalLink"
import { cvContent, siteCanonicalPaths, siteRoutes } from "@/content/site"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "CV",
  description: cvContent.meta.description,
  canonicalPath: siteCanonicalPaths.cv,
  useDefaultImage: false,
})

function SectionPill({ label, className = "" }: { label: string; className?: string }) {
  return (
    <EyebrowPill className={`self-start bg-white ${className}`.trim()} labelClassName="type-p2 text-[#222222]">
      {label}
    </EyebrowPill>
  )
}

function normalizePeriod(period: string) {
  return period.replace("–", "-")
}

const hoverLiftClass = "transition-transform duration-200 hover:-translate-y-0.5"

type CvRevealProps = {
  children: ReactNode
  className?: string
  preset?: string
  delay?: number
}

function CvReveal({ children, className }: CvRevealProps) {
  return <div className={className}>{children}</div>
}

export default function CvPage() {
  const [featuredExperience, ...remainingExperiences] = cvContent.experiences

  return (
    <main className="min-h-full overflow-x-hidden bg-[#F3F3F3]">
      <section className="w-full bg-[#F3F3F3]">
        <Container className="pb-14 pt-8 md:pb-16 md:pt-10 lg:pb-[80px] lg:pt-[42px]">
          <div className="flex flex-col gap-16 md:gap-20">
            <div className="flex flex-col gap-8">
              <section className="flex flex-col items-center">
                <h1 className="type-h2 mt-4 text-center text-[#232323]">
                  {cvContent.deliverySection.title}
                </h1>
                <p className="type-p2 mt-5 max-w-[920px] text-center text-[#2E2E2E]">
                  {cvContent.deliverySection.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  {cvContent.downloads.map((asset, index) => (
                    <TrackedExternalLink
                      key={asset.href}
                      href={asset.href}
                      label={asset.label}
                      location="cv_download"
                      download={asset.fileName}
                      className={`${index === 0 ? "button-primary" : "button-secondary"} ${hoverLiftClass}`}
                    >
                      {asset.label}
                    </TrackedExternalLink>
                  ))}
                </div>

                <div className="mt-10 grid w-full gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {cvContent.impactStats.map((stat, index) => (
                    <CvReveal key={stat.label} preset="card" delay={index * 0.04} className="h-full">
                      <Link
                        href={stat.href ?? siteRoutes.work}
                        className={`flex h-full flex-col items-center justify-center gap-3 rounded-[10px] bg-white px-6 py-6 text-center outline outline-1 outline-black/5 ${hoverLiftClass} md:px-7 md:py-7`}
                      >
                        <div className="type-stat-number text-[#242840]">
                          <AnimatedMetricValue value={stat.value} trigger="load" />
                        </div>
                        <p className="type-p2 text-[#414141]">
                          {stat.displayLabel ?? stat.label}
                        </p>
                      </Link>
                    </CvReveal>
                  ))}
                </div>
              </section>

              <section className="relative pt-0">
                <CvReveal preset="section" className="relative z-10 rounded-[2px] bg-[#ECECEC] px-5 py-6 md:px-8 md:py-8 lg:px-10 lg:py-10">
                  <div className="grid gap-8 border-b border-black/10 pb-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,410px)] lg:pb-8">
                    <div className="flex flex-col gap-2">
                      <SectionPill label={cvContent.sectionPills.experience} className="self-start" />
                      <h2 className="type-h3 max-w-[420px] text-[#2A2A2A]">
                        {cvContent.experienceSection.title}
                      </h2>
                    </div>

                    <div className="flex flex-col gap-3 lg:pt-2">
                      <p className="type-p3 text-[#555555]">{cvContent.experienceIntro}</p>
                      <TrackedExternalLink
                        href={cvContent.cta.primary.href}
                        label={cvContent.cta.primary.label}
                        location="cv_page"
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-text-cta type-p3 w-fit ${hoverLiftClass}`}
                      >
                        <span>{cvContent.cta.primary.label}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </TrackedExternalLink>
                    </div>
                  </div>

                  <div className="border-b border-black/10 py-6">
                    <div className="grid gap-5 lg:grid-cols-[minmax(0,310px)_minmax(0,1fr)_max-content] lg:items-start lg:gap-6">
                      <div>
                        <h3 className="type-p2 text-[#2A2A2A]">{featuredExperience.company}</h3>
                        <p className="type-p4 mt-1 text-[#666666]">• {normalizePeriod(featuredExperience.period)}</p>
                      </div>

                      <div className="flex flex-col gap-4">
                        <p className="type-p3 max-w-[560px] text-[#4B5154]">{featuredExperience.summary}</p>
                        <ul className="space-y-1.5">
                          {featuredExperience.highlights.map((highlight) => (
                            <li key={`${featuredExperience.company}-${highlight}`} className="type-p4 text-[#3F4548]">
                              • {highlight}
                            </li>
                          ))}
                        </ul>
                        {featuredExperience.spotlights?.length ? (
                          <ul className="space-y-1.5">
                            {featuredExperience.spotlights.map((spotlight) => (
                              <li
                                key={`${featuredExperience.company}-${spotlight.client}`}
                                className="type-p4 text-[#3F4548]"
                              >
                                • {spotlight.client}: {spotlight.outcome}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>

                      <div className="flex flex-col items-start gap-3 lg:items-end">
                        <div className="flex flex-wrap gap-2 lg:justify-end">
                          {featuredExperience.tags.slice(0, 2).map((tag) => (
                            <span
                              key={`${featuredExperience.company}-${tag}`}
                              className="type-ui-sm inline-flex min-h-[28px] items-center rounded-[999px] bg-[#2F2F2F] px-3 text-[#F4F4F4]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {remainingExperiences.map((entry) => (
                    <article
                      key={`${entry.company}-${entry.period}`}
                      className="grid gap-4 border-b border-black/10 py-5 last:border-b-0 lg:grid-cols-[minmax(0,310px)_minmax(0,1fr)_max-content] lg:items-center lg:gap-6"
                    >
                      <div>
                        <h3 className="type-p2 text-[#2A2A2A]">{entry.company}</h3>
                        <p className="type-p4 mt-1 text-[#666666]">• {normalizePeriod(entry.period)}</p>
                      </div>
                      <div className="max-w-[540px]">
                        <p className="type-p3 text-[#4B5154]">{entry.summary}</p>
                        <ul className="mt-2 space-y-1.5">
                          {entry.highlights.map((highlight) => (
                            <li key={`${entry.company}-${highlight}`} className="type-p4 text-[#3F4548]">
                              • {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2 lg:justify-end">
                        {entry.tags.slice(0, 2).map((tag) => (
                          <span
                            key={`${entry.company}-${tag}`}
                            className="type-ui-sm inline-flex min-h-[28px] items-center rounded-[999px] bg-[#DFDFDF] px-3 text-[#555555]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </CvReveal>
              </section>
            </div>

            <CvReveal preset="section" className="grid gap-8 lg:grid-cols-[minmax(0,470px)_minmax(0,1fr)] lg:gap-12">
              <div className="flex flex-col gap-3">
                <SectionPill label={cvContent.sectionPills.awards} />
                <h2 className="type-h3 max-w-[420px] text-[#222222]">
                  {cvContent.awardsSection.title}
                </h2>
                <p className="type-p2 max-w-[500px] text-[#2D2D2D]">
                  {cvContent.awardsSection.description}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {cvContent.awards.map((award, index) => {
                  const rowBody = (
                    <article className="rounded-[10px] bg-[#F0F0F0] px-6 py-5 md:px-8 md:py-6">
                      <div className="flex flex-col gap-2 xl:hidden">
                        <div className="type-p2 text-[#404040]">
                          {award.rank} {award.year}
                        </div>
                        <div className="type-p2 text-[#2A2A2A]">{award.title}</div>
                        <div className="type-p3 text-[#2A2A2A]">{award.source}</div>
                      </div>

                      <div className="hidden xl:grid xl:grid-cols-[110px_minmax(0,1fr)_max-content] xl:items-center xl:gap-6">
                        <div className="type-p2 text-[#404040]">
                          {award.rank} {award.year}
                        </div>
                        <div className="type-p2 text-[#2A2A2A] xl:text-center">{award.title}</div>
                        <div className="type-p3 text-[#2A2A2A] xl:text-right xl:whitespace-nowrap">{award.source}</div>
                      </div>
                    </article>
                  )

                  if (!award.href) {
                    return (
                      <CvReveal key={`${award.rank}-${award.title}`} preset="card" delay={index * 0.04}>
                        <div>{rowBody}</div>
                      </CvReveal>
                    )
                  }

                  return (
                    <CvReveal key={`${award.rank}-${award.title}`} preset="card" delay={index * 0.04}>
                      <Link
                        href={award.href}
                        className="block transition-[transform,opacity] duration-200 hover:-translate-y-0.5 hover:opacity-90"
                      >
                        {rowBody}
                      </Link>
                    </CvReveal>
                  )
                })}
              </div>
            </CvReveal>

            <CvReveal preset="section" className="grid gap-8 lg:grid-cols-[minmax(0,470px)_minmax(0,1fr)] lg:gap-12">
              <div className="flex flex-col gap-3">
                <h2 className="type-h3 text-[#222222]">{cvContent.detailsSection.title}</h2>
                <p className="type-p2 max-w-[500px] text-[#2D2D2D]">{cvContent.detailsSection.description}</p>
              </div>

              <div className="grid gap-4">
                <CvReveal preset="card">
                  <article className="rounded-[10px] bg-white p-6 outline outline-1 outline-black/5">
                    <h3 className="type-h5 text-[#2A2A2A]">{cvContent.detailsSection.additionalExperienceTitle}</h3>
                    <ul className="mt-3 space-y-2">
                      {cvContent.additionalExperience.map((item) => (
                        <li key={item} className="type-p3 text-[#5A5A5A]">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </CvReveal>

                <CvReveal preset="card" delay={0.03}>
                  <article className="rounded-[10px] bg-white p-6 outline outline-1 outline-black/5">
                    <h3 className="type-h5 text-[#2A2A2A]">{cvContent.detailsSection.founderExperienceTitle}</h3>
                    <ul className="mt-3 space-y-3">
                      {cvContent.founderExperience.map((item) => (
                        <li key={item.company} className="type-p3 text-[#5A5A5A]">
                          • <span className="text-[#2A2A2A]">{item.company}:</span> {item.summary}
                        </li>
                      ))}
                    </ul>
                  </article>
                </CvReveal>

                <CvReveal preset="card" delay={0.05}>
                  <article className="rounded-[10px] bg-white p-6 outline outline-1 outline-black/5">
                    <h3 className="type-h5 text-[#2A2A2A]">{cvContent.detailsSection.credentialsTitle}</h3>

                    <div className="mt-3 grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="type-p2 text-[#2A2A2A]">{cvContent.detailsSection.educationTitle}</h4>
                        <ul className="mt-2 space-y-1.5">
                          {cvContent.education.map((item) => (
                            <li key={item} className="type-p3 text-[#5A5A5A]">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="type-p2 text-[#2A2A2A]">{cvContent.detailsSection.certificationsTitle}</h4>
                        <ul className="mt-2 space-y-1.5">
                          {cvContent.certifications.map((item) => (
                            <li key={item} className="type-p3 text-[#5A5A5A]">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="type-p2 text-[#2A2A2A]">{cvContent.detailsSection.toolsTitle}</h4>
                      <p className="type-p3 mt-2 text-[#5A5A5A]">
                        {cvContent.skills.flatMap((group) => group.items).join(", ")}
                      </p>
                    </div>
                  </article>
                </CvReveal>
              </div>
            </CvReveal>
          </div>
        </Container>
      </section>
    </main>
  )
}
