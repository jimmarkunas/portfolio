import type { CaseStudyData } from "@/components/case-study/types"
import { FullWidthImage } from "@/components/FullWidthImage"
import { SectionShell } from "@/components/SectionShell"

export function CaseStudySupplementalSection({ data }: { data: CaseStudyData }) {
  return (
    <SectionShell surface="white" containerClassName="pt-0 pb-10 md:pb-12 lg:pb-14">
      <div className="flex w-full flex-col items-start gap-5">
        <h2 className="type-h5 text-[#111111]">{data.supplementalNarrative.title}</h2>

        {data.supplementalNarrative.paragraphs.map((paragraph, index) => (
          <div key={`supplemental-paragraph-${index}`} className="contents">
            <p className="type-p2 my-0 text-[#222222]">{paragraph}</p>
            {index === 0 && data.supplementalNarrative.image && (
              <FullWidthImage src={data.supplementalNarrative.image} />
            )}
          </div>
        ))}

        {data.supplementalNarrative.highlights ? (
          <div className="flex flex-col gap-5">
            {data.supplementalNarrative.highlights.map((item, i) => (
              <div key={item} className="flex items-start gap-3">
                <div className="type-p5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0F1112] text-white">{i + 1}</div>
                <div className="type-p2 text-[#111111]">{item}</div>
              </div>
            ))}
          </div>
        ) : null}

        {data.supplementalNarrative.closing ? (
          <p className="type-p2 text-[#222222]">{data.supplementalNarrative.closing}</p>
        ) : null}

        {data.supplementalNarrative.closingImage && (
          <FullWidthImage src={data.supplementalNarrative.closingImage} fullWidth={false} />
        )}
      </div>
    </SectionShell>
  )
}
