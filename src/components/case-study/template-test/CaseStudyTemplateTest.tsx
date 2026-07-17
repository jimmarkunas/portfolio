import type { ReactNode } from "react"

import { CaseStudyOutcomeHeroSection } from "./CaseStudyOutcomeHeroSection"
import { CaseStudyExecutiveBriefSection } from "./CaseStudyExecutiveBriefSection"
import { CaseStudyChallengeSection } from "./CaseStudyChallengeSection"
import { CaseStudyProductionQuoteSection } from "./CaseStudyProductionQuoteSection"
import { CaseStudyOwnershipSection } from "./CaseStudyOwnershipSection"
import { CaseStudySolutionSection } from "./CaseStudySolutionSection"
import { CaseStudyImpactSection } from "./CaseStudyImpactSection"
import { CaseStudyEvidenceSection } from "./CaseStudyEvidenceSection"
import { CaseStudyRecognitionSection } from "./CaseStudyRecognitionSection"
import { CaseStudyRelatedSection } from "./CaseStudyRelatedSection"
import type { CaseStudyTemplateTestData } from "@/content/case-study-template-test"

function SectionBorder({ children }: { children: ReactNode }) {
  return <div className="border border-red-500">{children}</div>
}

export function CaseStudyTemplateTest({ data }: { data: CaseStudyTemplateTestData }) {
  return (
    <main className="min-h-full overflow-x-hidden bg-[#F3F3F3] text-[#222222]">
      <SectionBorder>
        <CaseStudyOutcomeHeroSection data={data} />
      </SectionBorder>
      <SectionBorder>
        <CaseStudyExecutiveBriefSection data={data} />
      </SectionBorder>
      <SectionBorder>
        <CaseStudyProductionQuoteSection />
      </SectionBorder>
      <SectionBorder>
        <CaseStudyChallengeSection data={data} />
      </SectionBorder>
      <SectionBorder>
        <CaseStudyOwnershipSection data={data} />
      </SectionBorder>
      <SectionBorder>
        <CaseStudySolutionSection data={data} />
      </SectionBorder>
      <SectionBorder>
        <CaseStudyImpactSection data={data} />
      </SectionBorder>
      <SectionBorder>
        <CaseStudyEvidenceSection data={data} />
      </SectionBorder>
      <SectionBorder>
        <CaseStudyRecognitionSection data={data} />
      </SectionBorder>
      <SectionBorder>
        <CaseStudyRelatedSection data={data} />
      </SectionBorder>
    </main>
  )
}
