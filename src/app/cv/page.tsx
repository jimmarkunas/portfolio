import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Download } from "lucide-react"

import { Container } from "@/components/Container"
import { cvContent } from "@/content/cv"

export const metadata: Metadata = {
  title: "CV | Jim Markunas",
  description: "Jim Markunas resume, experience, and delivery highlights.",
}

function SectionPill({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-3 py-0.5">
      <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
      <span className="type-p2 text-[#222222]">{label}</span>
    </div>
  )
}

export default function CvPage() {
  return (
    <main className="min-h-full bg-[#F3F3F3]">
      <section className="w-full bg-[#F3F3F3]">
        <Container className="pb-14 pt-7 md:pb-16 md:pt-8 lg:pb-[72px] lg:pt-[36px]">
          <div className="flex flex-col gap-16">
            <article className="relative overflow-hidden rounded-[20px] bg-white p-6 shadow-[inset_0_0_0_1px_rgba(34,34,34,0.06)] md:p-8 lg:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-14 top-[46%] h-[380px] w-[380px] rounded-full bg-[#E6EDFF]/70 blur-[96px]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-[420px] w-[420px] rounded-full bg-[#FFF1D8]/80 blur-[120px]"
              />

              <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(300px,336px)] lg:items-start">
                <div className="flex flex-col gap-5">
                  <SectionPill label={cvContent.hero.pill} />
                  <div className="flex flex-col gap-3">
                    <h1 className="type-h3 text-[#222222]">{cvContent.hero.name}</h1>
                    <p className="type-p2 max-w-[760px] text-[#222222]">{cvContent.hero.role}</p>
                    <p className="type-p3 max-w-[860px] text-[#4B5154]">{cvContent.hero.summary}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px] text-[#4B5154]">
                    {cvContent.hero.links.map((link) => {
                      const linkProps = link.external ? { target: "_blank", rel: "noreferrer" } : {}
                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          {...linkProps}
                          className="underline decoration-[#4B5154]/50 underline-offset-4 transition-colors hover:text-[#447ACB]"
                        >
                          {link.label}
                        </a>
                      )
                    })}
                  </div>
                </div>

                <div className="flex w-full flex-col gap-3">
                  <div className="type-p4 font-medium text-[#222222]">Download Resume</div>
                  {cvContent.downloads.map((asset, index) => (
                    <a
                      key={asset.href}
                      href={asset.href}
                      download={asset.fileName}
                      className={
                        index === 0
                          ? "inline-flex min-h-[50px] items-center justify-between gap-3 rounded-[50px] border border-[#222222] bg-[#222222] px-5 text-[16px] font-medium text-[#FEFEFE] transition-colors hover:border-[#447ACB] hover:bg-[#447ACB]"
                          : "inline-flex min-h-[50px] items-center justify-between gap-3 rounded-[50px] border border-[#222222]/20 bg-white px-5 text-[16px] font-medium text-[#222222] transition-colors hover:border-[#447ACB] hover:text-[#447ACB]"
                      }
                    >
                      <span>{asset.label}</span>
                      <Download className="h-4 w-4" />
                    </a>
                  ))}

                  <a
                    href={cvContent.cta.primary.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex min-h-[50px] items-center justify-between gap-3 rounded-[50px] border border-[#222222]/20 bg-[#F8F8F8] px-5 text-[16px] font-medium text-[#222222] transition-colors hover:border-[#447ACB] hover:text-[#447ACB]"
                  >
                    <span>{cvContent.cta.primary.label}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="relative z-10 mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {cvContent.impactStats.map((stat) => {
                  const cardBody = (
                    <>
                      <div className="type-h5 text-[#222222]">{stat.value}</div>
                      <p className="type-p4 mt-3 text-[#4B5154]">{stat.label}</p>
                    </>
                  )

                  if (stat.href) {
                    return (
                      <Link
                        key={stat.label}
                        href={stat.href}
                        className="group rounded-[12px] bg-[#F9FAFB] p-5 outline outline-1 outline-black/5 transition-colors hover:bg-white"
                      >
                        {cardBody}
                        <span className="mt-4 inline-flex items-center gap-1 text-[14px] text-[#447ACB]">
                          <span>View case study</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      </Link>
                    )
                  }

                  return (
                    <div key={stat.label} className="rounded-[12px] bg-[#F9FAFB] p-5 outline outline-1 outline-black/5">
                      {cardBody}
                    </div>
                  )
                })}
              </div>
            </article>

            <section className="flex flex-col gap-8">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,470px)_minmax(0,1fr)] lg:items-end">
                <div className="flex flex-col gap-3">
                  <SectionPill label="Experience" />
                  <h2 className="type-h3 max-w-[420px] text-[#222222]">Programs I Have Led</h2>
                </div>
                <p className="type-p3 max-w-[840px] text-[#4B5154]">{cvContent.experienceIntro}</p>
              </div>

              <div className="rounded-[16px] bg-white px-6 py-2 shadow-[inset_0_0_0_1px_rgba(34,34,34,0.06)] md:px-8">
                {cvContent.experiences.map((entry) => (
                  <article key={`${entry.company}-${entry.period}`} className="border-b border-black/10 py-8 last:border-b-0">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                      <div className="max-w-[760px]">
                        <h3 className="type-h5 text-[#222222]">{entry.company}</h3>
                        <p className="type-p3 mt-1 text-[#222222]">{entry.role}</p>
                        <p className="type-p4 mt-1 text-[#6A6A6A]">{entry.period}</p>
                      </div>
                      <div className="flex flex-wrap justify-start gap-2 lg:max-w-[420px] lg:justify-end">
                        {entry.tags.map((tag) => (
                          <span
                            key={`${entry.company}-${tag}`}
                            className="inline-flex min-h-[34px] items-center rounded-[100px] bg-[#F5F6F8] px-4 text-[14px] text-[#2F3A4B]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="type-p3 mt-4 max-w-[960px] text-[#4B5154]">{entry.summary}</p>

                    <ul className="mt-4 space-y-2">
                      {entry.highlights.map((highlight) => (
                        <li key={highlight} className="type-p4 flex gap-3 text-[#3F4548]">
                          <span aria-hidden="true" className="mt-[0.62em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#447ACB]" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {entry.spotlights ? (
                      <div className="mt-6 grid gap-3 md:grid-cols-2">
                        {entry.spotlights.map((spotlight) => {
                          const spotlightBody = (
                            <div className="rounded-[12px] bg-[#F8F8F8] p-4">
                              <div className="type-p4 font-medium text-[#222222]">{spotlight.client}</div>
                              <div className="type-p5 mt-1 text-[#5F6368]">{spotlight.focus}</div>
                              <p className="type-p4 mt-3 text-[#3F4548]">{spotlight.outcome}</p>
                            </div>
                          )

                          if (!spotlight.href) {
                            return <div key={`${entry.company}-${spotlight.client}`}>{spotlightBody}</div>
                          }

                          return (
                            <Link key={`${entry.company}-${spotlight.client}`} href={spotlight.href} className="group">
                              {spotlightBody}
                            </Link>
                          )
                        })}
                      </div>
                    ) : null}

                    {entry.relatedWork ? (
                      <div className="mt-5 flex flex-wrap gap-4">
                        {entry.relatedWork.map((related) => (
                          <Link
                            key={`${entry.company}-${related.label}`}
                            href={related.href}
                            className="inline-flex items-center gap-1 text-[15px] text-[#447ACB] underline underline-offset-4 transition-colors hover:text-[#2F5EA4]"
                          >
                            <span>{related.label}</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>

              <div className="rounded-[12px] bg-white p-6 shadow-[inset_0_0_0_1px_rgba(34,34,34,0.06)] md:p-7">
                <h3 className="type-p2 text-[#222222]">Additional Work Experience</h3>
                <div className="mt-4 flex flex-col gap-2">
                  {cvContent.additionalExperience.map((item) => (
                    <p key={item} className="type-p4 text-[#4B5154]">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </section>

            <section className="grid gap-8 lg:grid-cols-[minmax(0,470px)_minmax(0,1fr)]">
              <div className="flex flex-col gap-3">
                <SectionPill label="Recognition" />
                <h2 className="type-h3 max-w-[420px] text-[#222222]">Achievements & Awards</h2>
                <p className="type-p3 max-w-[460px] text-[#4B5154]">
                  Recognition tied to measurable program outcomes, from global smart-city modernization to composable commerce execution and enterprise transformation case-study coverage.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {cvContent.awards.map((award) => {
                  const rowBody = (
                    <article className="rounded-[10px] bg-white px-6 py-5 shadow-[inset_0_0_0_1px_rgba(34,34,34,0.06)] md:px-8">
                      <div className="grid gap-3 md:grid-cols-[110px_minmax(0,1fr)_max-content] md:items-center md:gap-6">
                        <div className="type-p2">
                          <span className="text-[#666666]">{award.rank}</span>
                          <span className="text-[#222222]"> {award.year}</span>
                        </div>
                        <div className="type-p2 text-[#222222] md:text-center">{award.title}</div>
                        <div className="type-p2 text-[#222222] md:text-right md:whitespace-nowrap">{award.source}</div>
                      </div>
                    </article>
                  )

                  if (!award.href) {
                    return <div key={`${award.rank}-${award.title}`}>{rowBody}</div>
                  }

                  return (
                    <Link key={`${award.rank}-${award.title}`} href={award.href} className="group">
                      {rowBody}
                    </Link>
                  )
                })}
              </div>
            </section>

            <section className="rounded-[20px] bg-white p-6 shadow-[inset_0_0_0_1px_rgba(34,34,34,0.06)] md:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-10">
                <div className="flex flex-col gap-3">
                  <SectionPill label="Capabilities" />
                  <h2 className="type-h3 text-[#222222]">Tools, Platforms, and Credentials</h2>
                  <p className="type-p3 text-[#4B5154]">
                    I combine program leadership with hands-on platform fluency, so business priorities and technical execution stay connected from planning to launch.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {cvContent.skills.map((group) => (
                    <article key={group.title} className="rounded-[12px] bg-[#F8F8F8] p-5">
                      <h3 className="type-p2 text-[#222222]">{group.title}</h3>
                      <ul className="mt-3 space-y-2">
                        {group.items.map((item) => (
                          <li key={item} className="type-p4 text-[#4B5154]">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}

                  <article className="rounded-[12px] bg-[#F8F8F8] p-5">
                    <h3 className="type-p2 text-[#222222]">Education</h3>
                    <ul className="mt-3 space-y-2">
                      {cvContent.education.map((item) => (
                        <li key={item} className="type-p4 text-[#4B5154]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>

                  <article className="rounded-[12px] bg-[#F8F8F8] p-5">
                    <h3 className="type-p2 text-[#222222]">Certifications</h3>
                    <ul className="mt-3 space-y-2">
                      {cvContent.certifications.map((item) => (
                        <li key={item} className="type-p4 text-[#4B5154]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </div>
            </section>

            <section className="rounded-[16px] bg-[#222222] p-6 text-white md:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-[840px]">
                  <h2 className="type-h4 text-white">{cvContent.cta.heading}</h2>
                  <p className="type-p3 mt-3 text-white/80">{cvContent.cta.body}</p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={cvContent.cta.primary.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[50px] border border-white bg-white px-5 text-[16px] font-medium text-[#222222] transition-colors hover:border-[#C9DDFF] hover:bg-[#C9DDFF]"
                  >
                    <span>{cvContent.cta.primary.label}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <Link
                    href={cvContent.cta.secondary.href}
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[50px] border border-white/60 px-5 text-[16px] font-medium text-white transition-colors hover:border-white hover:bg-white/10"
                  >
                    <span>{cvContent.cta.secondary.label}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </Container>
      </section>
    </main>
  )
}

