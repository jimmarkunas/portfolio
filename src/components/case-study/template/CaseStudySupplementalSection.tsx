import type { CaseStudyData } from "@/content/case-studies"
import { FullWidthImage } from "@/components/FullWidthImage"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { SectionShell } from "@/components/SectionShell"
import { ContentFlow } from "@/components/ContentFlow"
export function CaseStudySupplementalSection({ data }: { data: CaseStudyData }) {
  return (
    <SectionShell surface="white" containerClassName="pt-0 pb-10 md:pb-12 lg:pb-14">
      <MotionReveal preset="section" className="flex w-full flex-col items-start gap-5">
        <h2 className="type-h5 text-[#111111]">{data.supplementalNarrative.title}</h2>

        <ContentFlow spacing="body">
          {data.supplementalNarrative.paragraphs.map((paragraph, index) => (
            <p key={`supplemental-paragraph-${index}`} className="type-p2 my-0 text-[#222222]">
              {paragraph}
            </p>
          ))}

          {data.supplementalNarrative.image ? (
            <MotionReveal preset="image" className="w-full">
              <FullWidthImage src={data.supplementalNarrative.image} />
            </MotionReveal>
          ) : null}

          {data.supplementalNarrative.highlights ? (
            <div className="flex flex-col gap-5">
              {data.supplementalNarrative.highlights.map((item, i) => (
                <div key={`${item}-${i}`} className="flex items-start gap-3">
                  <div className="type-p5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0F1112] text-white">{i + 1}</div>
                  <div className="type-p2 text-[#111111]">{item}</div>
                </div>
              ))}
            </div>
          ) : null}

          {data.supplementalNarrative.closing ? (
            <p className="type-p2 text-[#222222]">{data.supplementalNarrative.closing}</p>
          ) : null}

          {data.supplementalNarrative.closingImage ? (
            <MotionReveal preset="image" className="w-full" delay={0.04}>
              <FullWidthImage src={data.supplementalNarrative.closingImage} fullWidth={false} />
            </MotionReveal>
          ) : null}
        </ContentFlow>
      </MotionReveal>
    </SectionShell>
  )
}
