import type { Metadata } from "next"

import { Container } from "@/components/Container"
import { StructuredData } from "@/components/seo/StructuredData"
import { siteCanonicalPaths } from "@/content/site"
import Geekle2026App from "./Geekle2026App"
import { geekle2026Content } from "@/content/presentations/geekle2026"
import { buildPageMetadata } from "@/lib/seo"
import {
  createHowToStructuredData,
  createPresentationStructuredData,
} from "@/lib/structured-data"

const GEEKLE_DESCRIPTION =
  "Geekle 2026 presentation by Jim Markunas on using practical workflows to deliver interactive product demos quickly."

export const metadata: Metadata = buildPageMetadata({
  title: "Geekle 2026 Talk",
  description: GEEKLE_DESCRIPTION,
  canonicalPath: siteCanonicalPaths.geekle2026,
  useDefaultImage: false,
})

export default function Geekle2026Page() {
  const { hero, agenda, modereGame, toolsNeeded, preSetup, buildPart1, buildPart2, finalize } =
    geekle2026Content.slides
  const howToSteps = [
    ...preSetup.steps.map((step) => step.text),
    ...buildPart1.steps.map((step) => step.text),
    ...buildPart2.steps.map((step) => step.text),
    ...finalize.steps.map((step) => step.label),
  ]

  return (
    <main className="bg-black text-white">
      <StructuredData
        data={[
          createPresentationStructuredData({
            name: "Geekle 2026 Talk",
            description: GEEKLE_DESCRIPTION,
            path: siteCanonicalPaths.geekle2026,
            keywords: [
              "interactive product demos",
              "gamified decision tree",
              "executive decision-making",
              "case study storytelling",
              "rapid prototyping",
            ],
            slideTitles: geekle2026Content.slideRegistry.map((slide) => slide.title),
          }),
          createHowToStructuredData({
            name: "Build a gamified decision tree demo",
            description: agenda.summary,
            path: siteCanonicalPaths.geekle2026,
            totalTime: "PT20M",
            estimatedCost: "Free-ish tools plus hosting",
            tools: toolsNeeded.tools.map((tool) => `${tool.name} (${tool.cost})`),
            steps: howToSteps,
            keywords: [
              "gamified decision tree",
              "interactive demo build",
              "Geekle talk",
              "executive storytelling",
            ],
          }),
        ]}
      />

      <section className="border-b border-white/10">
        <Container className="py-12 md:py-16 lg:py-20">
          <div className="max-w-[980px] space-y-6">
            <div className="inline-flex items-center gap-2 rounded-[50px] border border-white/15 bg-white/5 px-4 py-1">
              <span className="h-3 w-3 rounded-full bg-white" />
              <span className="text-[14px] leading-5 text-white/80">
                Geekle 2026
              </span>
            </div>

            <h1 className="max-w-[940px] text-4xl font-normal leading-tight md:text-5xl md:leading-[1.08]">
              {hero.title}{" "}
              <span className="text-white/72">{hero.highlight}</span>{" "}
              <span className="text-white">{hero.suffix}</span>
            </h1>

            <p className="max-w-[860px] text-[18px] leading-8 text-white/72">
              {GEEKLE_DESCRIPTION}
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-[28px] border border-white/10 bg-white/5 px-5 py-5">
                <p className="text-[16px] leading-6 text-white/64">
                  Why this talk matters
                </p>
                <p className="mt-2 text-[18px] leading-8 text-white">
                  {agenda.summary}
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 px-5 py-5">
                <p className="text-[16px] leading-6 text-white/64">
                  Case study anchor
                </p>
                <p className="mt-2 text-[18px] leading-8 text-white">
                  {modereGame.paragraphs.join(" ")}
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 px-5 py-5">
                <p className="text-[16px] leading-6 text-white/64">
                  Goal
                </p>
                <p className="mt-2 text-[18px] leading-8 text-white">
                  {modereGame.goalText}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-normal md:text-4xl">
                  What attendees learn
                </h2>
                <p className="text-[17px] leading-8 text-white/70">
                  The talk shows how to use accessible tools, narrative framing,
                  and lightweight code workflows to turn a hard executive
                  conversation into an interactive decision-making experience.
                </p>
              </div>

              <ul className="grid gap-3">
                {agenda.whyCareItems.map((item) => (
                  <li
                    key={item}
                    className="rounded-[24px] border border-white/10 bg-white/5 px-4 py-4 text-[15px] leading-6 text-white/78"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 px-5 py-5">
              <h2 className="text-2xl font-normal text-white">Tools used</h2>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {toolsNeeded.tools.map((tool) => (
                  <div
                    key={tool.id}
                    className="rounded-[20px] border border-white/10 bg-black/20 px-4 py-4"
                  >
                    <p className="text-[16px] leading-6 text-white">
                      {tool.name}
                    </p>
                    <p className="mt-1 text-[14px] leading-6 text-white/62">
                      {tool.cost}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="py-12 md:py-16">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-normal md:text-4xl">
                Server-rendered build flow
              </h2>
              <p className="max-w-[860px] text-[17px] leading-8 text-white/70">
                The presentation is interactive, but the core process is also
                written out here so search engines and shared previews can index
                the workflow without depending on client-side slide navigation.
              </p>
            </div>

            <div className="grid gap-4 xl:grid-cols-4">
              <div className="rounded-[28px] border border-white/10 bg-white/5 px-5 py-5">
                <h3 className="text-[20px] leading-7 text-white">
                  {preSetup.title}
                </h3>
                <p className="mt-3 text-[14px] leading-6 text-white/64">
                  {preSetup.steps.map((step) => step.text).join(" • ")}
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 px-5 py-5">
                <h3 className="text-[20px] leading-7 text-white">
                  {buildPart1.titlePrefix} {buildPart1.titleHighlight}
                </h3>
                <p className="mt-3 text-[14px] leading-6 text-white/64">
                  {buildPart1.steps.map((step) => step.text).join(" • ")}
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 px-5 py-5">
                <h3 className="text-[20px] leading-7 text-white">
                  {buildPart2.titlePrefix} {buildPart2.titleHighlight}
                </h3>
                <p className="mt-3 text-[14px] leading-6 text-white/64">
                  {buildPart2.intro}
                </p>
                <p className="mt-3 text-[14px] leading-6 text-white/64">
                  {buildPart2.steps.map((step) => step.text).join(" • ")}
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 px-5 py-5">
                <h3 className="text-[20px] leading-7 text-white">
                  {finalize.title}
                </h3>
                <p className="mt-3 text-[14px] leading-6 text-white/64">
                  {finalize.steps
                    .map((step) => `${step.number} ${step.label}`)
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
              Browse the live deck below to use the navigation controls, walk
              through the slides in order, and present the talk fullscreen.
            </p>
          </div>
        </Container>

        <div className="geekle2026-page">
          <Geekle2026App />
        </div>
      </section>
    </main>
  )
}
