import type { Metadata } from "next"

import { Container } from "@/components/Container"
import { StructuredData } from "@/components/seo/StructuredData"
import { interviewContent } from "@/content/interviews"
import InterviewsApp from "../interviews/InterviewsApp"
import { siteCanonicalPaths } from "@/content/site"
import { buildPageMetadata } from "@/lib/seo"
import { createPresentationStructuredData } from "@/lib/structured-data"

const INTERVIEW_DESCRIPTION =
  "Interview presentation by Jim Markunas covering enterprise delivery outcomes, hybrid agile execution, risk management, and status reporting."

export const metadata: Metadata = buildPageMetadata({
  title: "Interviews",
  description: INTERVIEW_DESCRIPTION,
  canonicalPath: siteCanonicalPaths.interview,
  useDefaultImage: false,
})

export default function InterviewPage() {
  const { who, outcomes, services, rescuePlan, whyJim } = interviewContent.slides
  const headlineStats = [
    ...who.stats.slice(0, 2),
    ...outcomes.stats.slice(0, 2),
  ]

  return (
    <main className="bg-black text-white">
      <StructuredData
        data={createPresentationStructuredData({
          name: "Jim Markunas Interview Presentation",
          description: INTERVIEW_DESCRIPTION,
          path: siteCanonicalPaths.interview,
          keywords: [
            "enterprise delivery",
            "program rescue",
            "hybrid agile",
            "risk management",
            "status reporting",
            "product leadership",
          ],
          slideTitles: interviewContent.slideTitles,
        })}
      />

      <section className="border-b border-white/10">
        <Container className="py-12 md:py-16 lg:py-20">
          <div className="max-w-[980px] space-y-6">
            <div className="inline-flex items-center gap-2 rounded-[50px] border border-white/15 bg-white/5 px-4 py-1">
              <span className="h-3 w-3 rounded-full bg-white" />
              <span className="text-[14px] leading-5 text-white/80">
                Interview Deck
              </span>
            </div>

            <h1 className="max-w-[900px] text-4xl font-normal leading-tight md:text-5xl md:leading-[1.08]">
              Enterprise delivery interview presentation with server-rendered
              context
            </h1>

            <p className="max-w-[880px] text-[18px] leading-8 text-white/72">
              {INTERVIEW_DESCRIPTION}
            </p>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {headlineStats.map((stat) => (
                <div
                  key={stat.id}
                  className="rounded-[28px] border border-white/10 bg-white/5 px-5 py-5"
                >
                  <p className="text-[28px] leading-none text-white">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-[14px] leading-6 text-white/62">
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-normal md:text-4xl">
                  What the deck covers
                </h2>
                <p className="max-w-[760px] text-[17px] leading-8 text-white/70">
                  The presentation walks through operating style, measurable
                  outcomes, service coverage, hybrid delivery mechanics, Jira
                  backlog hygiene, leadership communication, and a concrete
                  thirty-day rescue plan.
                </p>
              </div>

              <ul className="grid gap-3 md:grid-cols-2">
                {interviewContent.slideTitles.slice(0, 8).map((title) => (
                  <li
                    key={title}
                    className="rounded-[24px] border border-white/10 bg-white/5 px-4 py-4 text-[15px] leading-6 text-white/78"
                  >
                    {title}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[28px] border border-white/10 bg-white/5 px-5 py-5">
                <h2 className="text-2xl font-normal text-white">
                  Core delivery coverage
                </h2>

                <div className="mt-4 grid gap-4">
                  {services.categories.map((category) => (
                    <div key={category.id}>
                      <p className="text-[16px] leading-6 text-white">
                        {category.title}
                      </p>
                      <p className="mt-1 text-[14px] leading-6 text-white/64">
                        {category.items.map((item) => item.text).join(" • ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 px-5 py-5">
                <h2 className="text-2xl font-normal text-white">
                  Thirty-day rescue plan
                </h2>

                <div className="mt-4 grid gap-4">
                  {rescuePlan.weeks.map((week) => (
                    <div key={week.id}>
                      <p className="text-[16px] leading-6 text-white">
                        {week.title}
                      </p>
                      <p className="mt-1 text-[14px] leading-6 text-white/64">
                        {week.points.join(" • ")}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-[14px] leading-6 text-white/64">
                  {whyJim.points
                    .slice(0, 3)
                    .map((point) => `${point.title}: ${point.desc}`)
                    .join(" • ")}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-10 md:pt-12">
        <Container className="pb-4">
          <div className="max-w-[880px] space-y-3">
            <h2 className="text-3xl font-normal md:text-4xl">
              Interactive presentation
            </h2>
            <p className="text-[17px] leading-8 text-white/70">
              Use the deck controls to move slide by slide, open the table of
              contents, or expand the presentation fullscreen during an
              interview or live discussion.
            </p>
          </div>
        </Container>

        <div className="interviews-page">
          <InterviewsApp />
        </div>
      </section>
    </main>
  )
}
