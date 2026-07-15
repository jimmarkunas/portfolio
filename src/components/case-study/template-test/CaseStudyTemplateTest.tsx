import { CaseStudyOutcomeHeroSection } from "./CaseStudyOutcomeHeroSection"
import { CaseStudyExecutiveBriefSection } from "./CaseStudyExecutiveBriefSection"
import { CaseStudyChallengeSection } from "./CaseStudyChallengeSection"
import { CaseStudyProductionQuoteSection } from "./CaseStudyProductionQuoteSection"
import { CaseStudyOwnershipSection } from "./CaseStudyOwnershipSection"
import { CaseStudySolutionSection } from "./CaseStudySolutionSection"
import { CaseStudyImpactSection } from "./CaseStudyImpactSection"
import { CaseStudyEvidenceSection } from "./CaseStudyEvidenceSection"
import { CaseStudyRelatedSection } from "./CaseStudyRelatedSection"
import { CaseStudyFinalCtaSection } from "./CaseStudyFinalCtaSection"
import type { CaseStudyTemplateTestData } from "@/content/case-study-template-test"

export function CaseStudyTemplateTest({ data }: { data: CaseStudyTemplateTestData }) {
  return (
    <main className="min-h-full overflow-x-hidden bg-[#F3F3F3] text-[#222222]">
      <CaseStudyOutcomeHeroSection data={data} />
      <CaseStudyExecutiveBriefSection data={data} />
      <CaseStudyProductionQuoteSection />
      <CaseStudyChallengeSection data={data} />
      <CaseStudyOwnershipSection data={data} />
      <CaseStudySolutionSection data={data} />
      <CaseStudyImpactSection data={data} />
      <CaseStudyEvidenceSection data={data} />
      <CaseStudyRelatedSection data={data} />
      <CaseStudyFinalCtaSection data={data} />
    </main>
  )
}
