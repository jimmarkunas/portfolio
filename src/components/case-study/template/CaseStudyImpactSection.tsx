import { BeforeAfterComparison } from "@/components/case-study/BeforeAfterComparison"
import type { CaseStudyData } from "@/content/case-studies/types"
import { EyebrowPill } from "@/components/EyebrowPill"
import { FullWidthImage } from "@/components/FullWidthImage"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { SectionShell } from "@/components/SectionShell"
import { StatCard } from "@/components/StatCard"
import { TagPill } from "@/components/TagPill"

import { ProofPointArrowIcon } from "./CaseStudyTemplateIcons"

export function CaseStudyImpactSection({ data }: { data: CaseStudyData }) {
  return (
    <SectionShell containerClassName="py-14 md:py-16 lg:py-20">
      <div className="flex flex-col items-center gap-6">
        <MotionReveal preset="section" className="flex max-w-[800px] flex-col items-center gap-3 text-center">
          <EyebrowPill className="bg-white" labelClassName="type-p2 text-[#222222]">
            {data.impact.eyebrow}
          </EyebrowPill>

          <div className="flex w-full flex-col items-center gap-2">
            <h2 className="type-h3 text-[#222222]">{data.impact.title}</h2>
            <p className="type-p3 max-w-[577px] text-black/55">{data.impact.intro}</p>
          </div>

          <div className="flex w-full flex-wrap items-center justify-center gap-2 pt-2 md:hidden">
            {data.impact.proofPoints.map((item, index) => (
              <div key={`mobile-intro-${item}`} className="flex items-center gap-2">
                <span className="text-[14px] font-bold text-[#222222]">{item}</span>
                {index < data.impact.proofPoints.length - 1 ? (
                  <ProofPointArrowIcon size={16} className="shrink-0 text-[#222222]" />
                ) : null}
              </div>
            ))}
          </div>

          <div className="hidden w-full items-center justify-center gap-3 pt-2 md:flex md:flex-wrap lg:hidden">
            {data.impact.proofPoints.map((item, index) => (
              <div key={`tablet-intro-${item}`} className="flex items-center gap-3">
                <TagPill variant="dark" className="py-2.5 text-[18px]">
                  {item}
                </TagPill>
                {index < data.impact.proofPoints.length - 1 ? (
                  <ProofPointArrowIcon className="text-[#222222]" />
                ) : null}
              </div>
            ))}
          </div>
        </MotionReveal>

        <MotionReveal preset="card" className="hidden w-full items-center justify-center gap-3 lg:flex">
          {data.impact.proofPoints.map((item, index) => (
            <div key={`desktop-intro-${item}`} className="flex items-center gap-3">
              <TagPill variant="dark" className="py-2.5 text-[18px]">
                {item}
              </TagPill>
              {index < data.impact.proofPoints.length - 1 ? (
                <ProofPointArrowIcon className="text-[#222222]" />
              ) : null}
            </div>
          ))}
        </MotionReveal>

        <div className="grid w-full grid-cols-2 gap-5 pt-3 md:pt-4 lg:grid-cols-4 lg:pt-6">
          {data.impact.stats.map((stat, index) => (
            <MotionReveal key={`${stat.value}-${stat.label}`} preset="card" delay={index * 0.04}>
              <StatCard
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                className="min-h-[176px] px-8 py-10"
                valueClassName="text-center text-slate-800"
                valueTextClassName="text-[56px] font-medium leading-[60px]"
                suffixClassName="text-[36px] font-semibold leading-9"
                labelClassName="type-p2 max-w-[220px] text-center font-medium text-neutral-700"
                contentClassName="gap-3.5"
              />
            </MotionReveal>
          ))}
        </div>

        {data.impact.statsImage && (
          <MotionReveal preset="image" className="w-full">
            <FullWidthImage src={data.impact.statsImage} fullWidth={false} />
          </MotionReveal>
        )}

        <MotionReveal preset="section" className="grid w-full gap-10 lg:grid-cols-4 lg:items-start lg:gap-5">
          <MotionReveal preset="card" className="flex flex-col items-start gap-4 lg:col-span-2">
            <div className="flex flex-col gap-5 rounded-2xl border border-[#222222] bg-[#222222] p-8">
              <h2 className="type-h3 max-w-[640px] text-white">{data.impact.beforeAfter.title}</h2>
              <p className="type-p3 max-w-[620px] text-white/70">{data.impact.beforeAfter.summary}</p>
              <BeforeAfterComparison columns={data.impact.beforeAfter.columns} />
            </div>
          </MotionReveal>

          <MotionReveal preset="card" delay={0.05} className="flex flex-col pt-10 lg:col-span-2">
            {data.impact.journeySteps.map((item, index) => (
              <div key={item.step} className="grid grid-cols-[40px_1fr] gap-x-4 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-x-10">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2B2B2B] text-[20px] font-medium leading-none text-white sm:h-16 sm:w-16 sm:text-[32px] sm:leading-[48px]">
                    {item.step}
                  </div>
                  {index < data.impact.journeySteps.length - 1 ? (
                    <div className="mt-2 w-px flex-1 bg-[linear-gradient(to_bottom,#667085_0%,#667085_55%,transparent_55%,transparent_100%)] bg-[length:1px_8px] bg-repeat-y" />
                  ) : null}
                </div>
                <div className={`flex flex-col items-start gap-2 pt-1 sm:pt-3 ${index < data.impact.journeySteps.length - 1 ? "pb-8 sm:pb-10" : ""}`}>
                  <h3 className="type-h5 text-[#222222]">{item.title}</h3>
                  <p className="type-p3 w-full max-w-none text-black/70 lg:max-w-[540px]">{item.copy}</p>
                </div>
              </div>
            ))}
          </MotionReveal>
        </MotionReveal>
      </div>
    </SectionShell>
  )
}
