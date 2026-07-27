import type { ReactNode } from "react"

import { CaseStudyRevampHeroSection } from "../CaseStudyRevampHeroSection"
import { CaseStudyRevampExecutiveBriefSection } from "../CaseStudyRevampExecutiveBriefSection"
import { CaseStudyRevampChallengeSection } from "../CaseStudyRevampChallengeSection"
import { CaseStudyRevampProductionQuoteSection } from "../CaseStudyRevampProductionQuoteSection"
import { CaseStudyRevampOwnershipSection } from "../CaseStudyRevampOwnershipSection"
import { CaseStudyRevampImpactSection } from "../CaseStudyRevampImpactSection"
import { CaseStudyRevampEvidenceSection } from "../CaseStudyRevampEvidenceSection"
import { CaseStudyRevampRecognitionSection } from "../CaseStudyRevampRecognitionSection"
import { CaseStudyRevampRelatedSection } from "../CaseStudyRevampRelatedSection"
import type { CaseStudyRevampData } from "@/content/case-studies/revamp/types"
import { CaseStudyRevampModereSolutionSection } from "./CaseStudyRevampModereSolutionSection"

function SectionBorder({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}

export function CaseStudyRevampModereTemplate({
  data,
}: {
  data: CaseStudyRevampData
}) {
  return (
    <main data-case-study-renderer="revamp" className="min-h-full overflow-x-hidden bg-[#F3F3F3] text-[#222222]">
      <SectionBorder>
        <CaseStudyRevampHeroSection data={data} />
      </SectionBorder>
      <SectionBorder>
        <CaseStudyRevampExecutiveBriefSection data={data} />
      </SectionBorder>
      <SectionBorder>
        <CaseStudyRevampChallengeSection data={data} />
      </SectionBorder>
      <SectionBorder>
        <CaseStudyRevampProductionQuoteSection data={data} />
      </SectionBorder>
      <SectionBorder>
        <CaseStudyRevampOwnershipSection data={data} />
      </SectionBorder>
      <SectionBorder>
        <CaseStudyRevampModereSolutionSection data={data} />
      </SectionBorder>
      <SectionBorder>
        <CaseStudyRevampImpactSection data={data} />
      </SectionBorder>
      <SectionBorder>
        <CaseStudyRevampEvidenceSection data={data} />
      </SectionBorder>
      <SectionBorder>
        <CaseStudyRevampRecognitionSection data={data} />
      </SectionBorder>
      <SectionBorder>
        <CaseStudyRevampRelatedSection data={data} />
      </SectionBorder>
    </main>
  )
}
