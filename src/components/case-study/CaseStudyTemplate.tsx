import { CaseStudyChallengeQuoteSection } from "@/components/case-study/template/CaseStudyChallengeQuoteSection"
import { CaseStudyDeliverySection } from "@/components/case-study/template/CaseStudyDeliverySection"
import { CaseStudyHeroSection } from "@/components/case-study/template/CaseStudyHeroSection"
import { CaseStudyImpactSection } from "@/components/case-study/template/CaseStudyImpactSection"
import { CaseStudyIntroSection } from "@/components/case-study/template/CaseStudyIntroSection"
import { CaseStudyRecognitionSection } from "@/components/case-study/template/CaseStudyRecognitionSection"
import { CaseStudySolutionSection } from "@/components/case-study/template/CaseStudySolutionSection"
import { CaseStudySupplementalSection } from "@/components/case-study/template/CaseStudySupplementalSection"
import type { CaseStudyData } from "@/components/case-study/types"

export function CaseStudyTemplate({ data }: { data: CaseStudyData }) {
  const isFoh = data.slug === "foh"

  return (
    <main className="min-h-full overflow-x-hidden bg-[#F3F3F3] text-[#222222]">
      <CaseStudyHeroSection data={data} />
      <CaseStudyIntroSection data={data} />
      <CaseStudySolutionSection data={data} />
      <CaseStudySupplementalSection data={data} />
      <CaseStudyImpactSection data={data} />
      <CaseStudyDeliverySection data={data} />
      <CaseStudyChallengeQuoteSection data={data} />

      <CaseStudyRecognitionSection data={data} isFoh={isFoh} />
    </main>
  )
}
