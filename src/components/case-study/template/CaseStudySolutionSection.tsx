import { BlogCardGrid } from "@/components/case-study/BlogCardGrid"
import type { CaseStudyData } from "@/content/case-studies/types"
import { EyebrowPill } from "@/components/EyebrowPill"
import { FullWidthImage } from "@/components/FullWidthImage"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { SectionShell } from "@/components/SectionShell"
import { DeferredSolutionDiagramVisual } from "@/components/case-study/template/visuals/deferred/DeferredDiagramVisual"
import { DeferredNylCarousel } from "@/components/case-study/template/visuals/deferred/DeferredNylCarousel"

export function CaseStudySolutionSection({ data }: { data: CaseStudyData }) {
  const isModereSimulation = data.solution.diagramKey === "modere-simulation"

  return (
    <SectionShell surface="white" containerClassName="pb-7 pt-1 md:pb-8 md:pt-1 lg:pb-10 lg:pt-1">
      <div className="flex flex-col items-center gap-8 pt-6 md:pt-8 lg:pt-10">
        <MotionReveal preset="section" className="flex flex-col items-center gap-5 text-center">
          <EyebrowPill className="bg-white" labelClassName="type-p2 text-[#222222]">
            {data.solution.eyebrow}
          </EyebrowPill>

          <div className="flex max-w-[1200px] flex-col items-center gap-3">
            <h2 className="type-h3 max-w-[1104px] text-[#222222]">{data.solution.title}</h2>
            <p className="type-p3 max-w-[814px] text-black/65">{data.solution.copy}</p>
          </div>
        </MotionReveal>

        {data.solution.diagram || data.solution.diagramKey ? (
          <DeferredSolutionDiagramVisual
            diagram={data.solution.diagram}
            diagramKey={data.solution.diagramKey}
            className={isModereSimulation ? "mx-auto w-full max-w-[1440px]" : "w-full"}
            minHeightClassName={
              isModereSimulation
                ? "min-h-[520px] md:min-h-[760px]"
                : "min-h-[360px] md:min-h-[420px]"
            }
            loadingLabel="Loading architecture diagram..."
          />
        ) : data.solution.heroImage ? (
          <MotionReveal preset="image">
            <FullWidthImage src={data.solution.heroImage} fullWidth={false} />
          </MotionReveal>
        ) : (
          <MotionReveal preset="card" className="w-full">
            <BlogCardGrid cards={data.solution.cards ?? []} />
          </MotionReveal>
        )}

        {data.solution.gallery && data.solution.gallery.length > 0 && (
          <MotionReveal preset="image" className="w-full" delay={0.04}>
            <DeferredNylCarousel images={data.solution.gallery} />
          </MotionReveal>
        )}
      </div>
    </SectionShell>
  )
}
