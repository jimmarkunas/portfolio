import { BlogCardGrid } from "@/components/case-study/BlogCardGrid"
import type { CaseStudyData } from "@/components/case-study/types"
import { EyebrowPill } from "@/components/EyebrowPill"
import { FullWidthImage } from "@/components/FullWidthImage"
import { SectionShell } from "@/components/SectionShell"
import { DeferredSolutionDiagramVisual } from "@/components/case-study/template/visuals/deferred/DeferredDiagramVisual"

export function CaseStudySolutionSection({ data }: { data: CaseStudyData }) {
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

        {data.solution.diagram || data.solution.diagramKey ? (
          <DeferredSolutionDiagramVisual
            diagram={data.solution.diagram}
            diagramKey={data.solution.diagramKey}
            minHeightClassName="min-h-[360px] md:min-h-[420px]"
            loadingLabel="Loading architecture diagram..."
          />
        ) : data.solution.heroImage ? (
          <FullWidthImage src={data.solution.heroImage} fullWidth={false} />
        ) : (
          <BlogCardGrid cards={data.solution.cards} />
        )}
      </div>
    </SectionShell>
  )
}
