import dynamic from "next/dynamic"
import type { ComponentType } from "react"

import { BlogCardGrid } from "@/components/case-study/BlogCardGrid"
import type { CaseStudyData, CaseStudySolutionDiagramKey, DiagramData } from "@/components/case-study/types"
import { EyebrowPill } from "@/components/EyebrowPill"
import { FullWidthImage } from "@/components/FullWidthImage"
import { SectionShell } from "@/components/SectionShell"

const HeadlessCommerceDiagram = dynamic<{ data: DiagramData }>(
  () => import("@/app/diagrams/headless_commerce_react"),
  { ssr: false }
)
const MuradArchitectureDiagram = dynamic(
  () => import("@/components/case-study/MuradArchitectureDiagram"),
  { ssr: false }
)
const BISystemDiagram = dynamic(
  () => import("@/components/case-study/bi-commerce-ecosystem-diagram"),
  { ssr: false }
)
const SCJCommerceArchitecture = dynamic(
  () => import("@/components/case-study/SCJCommerceArchitecture"),
  { ssr: false }
)

const solutionDiagramRegistry: Record<CaseStudySolutionDiagramKey, ComponentType> = {
  "murad-architecture": MuradArchitectureDiagram,
  "bi-commerce-ecosystem": BISystemDiagram,
  "scj-commerce-architecture": SCJCommerceArchitecture,
}

export function CaseStudySolutionSection({ data }: { data: CaseStudyData }) {
  const SelectedDiagram = data.solution.diagramKey
    ? solutionDiagramRegistry[data.solution.diagramKey]
    : null

  return (
    <SectionShell surface="white" containerClassName="pb-7 pt-1 md:pb-8 md:pt-1 lg:pb-10 lg:pt-1">
      <div className="flex flex-col items-center gap-8 pt-6 md:pt-8 lg:pt-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <EyebrowPill className="bg-white" labelClassName="type-p2 text-[#222222]">
            {data.solution.eyebrow}
          </EyebrowPill>

          <div className="flex max-w-[1200px] flex-col items-center gap-3">
            <h2 className="type-h3 max-w-[1104px] text-[#222222]">{data.solution.title}</h2>
            <p className="type-p3 max-w-[814px] text-black/65">{data.solution.copy}</p>
          </div>
        </div>

        {data.solution.diagram ? (
          <HeadlessCommerceDiagram data={data.solution.diagram} />
        ) : SelectedDiagram ? (
          <SelectedDiagram />
        ) : data.solution.heroImage ? (
          <FullWidthImage src={data.solution.heroImage} fullWidth={false} />
        ) : (
          <BlogCardGrid cards={data.solution.cards} />
        )}
      </div>
    </SectionShell>
  )
}
