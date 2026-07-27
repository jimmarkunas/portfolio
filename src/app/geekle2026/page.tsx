import type { Metadata } from "next"

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
  const { agenda, toolsNeeded, preSetup, buildPart1, buildPart2, finalize } =
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

      <div className="geekle2026-page">
        <Geekle2026App />
      </div>
    </main>
  )
}
