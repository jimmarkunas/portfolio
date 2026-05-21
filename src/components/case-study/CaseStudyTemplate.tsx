import { CaseStudyChallengeQuoteSection } from "@/components/case-study/template/CaseStudyChallengeQuoteSection"
import { CaseStudyDeliverySection } from "@/components/case-study/template/CaseStudyDeliverySection"
import { DeferredNylRevenueChart } from "@/components/case-study/template/visuals/deferred/DeferredNylRevenueChart"
import { SectionShell } from "@/components/SectionShell"
import { CaseStudyHeroSection } from "@/components/case-study/template/CaseStudyHeroSection"
import { CaseStudyImpactSection } from "@/components/case-study/template/CaseStudyImpactSection"
import { CaseStudyIntroSection } from "@/components/case-study/template/CaseStudyIntroSection"
import { CaseStudyRecognitionSection } from "@/components/case-study/template/CaseStudyRecognitionSection"
import { CaseStudySolutionSection } from "@/components/case-study/template/CaseStudySolutionSection"
import { CaseStudySupplementalSection } from "@/components/case-study/template/CaseStudySupplementalSection"
import type { CaseStudyData } from "@/content/case-studies"

export function CaseStudyTemplate({ data }: { data: CaseStudyData }) {
  const isFoh = data.slug === "foh"
  const isNyl = data.slug === "newyorklife"
  const hideChallengeQuote = data.slug === "dtv01"

  return (
    <main className="min-h-full overflow-x-hidden bg-[#F3F3F3] text-[#222222]">
      <CaseStudyHeroSection data={data} />
      <CaseStudyIntroSection data={data} />
      <CaseStudySolutionSection data={data} />
      <CaseStudySupplementalSection data={data} />
      <CaseStudyImpactSection data={data} />
      {isNyl && (
        <SectionShell containerClassName="pt-2 pb-10 md:pt-3 md:pb-12 lg:pt-3 lg:pb-14">
          <DeferredNylRevenueChart />
        </SectionShell>
      )}
      <CaseStudyDeliverySection data={data} />
      {!hideChallengeQuote ? <CaseStudyChallengeQuoteSection data={data} /> : null}

      <CaseStudyRecognitionSection data={data} isFoh={isFoh} />
    </main>
  )
}
