import { CaseStudyRevampChallengeSection } from "../CaseStudyRevampChallengeSection"
import { CaseStudyRevampEvidenceSection } from "../CaseStudyRevampEvidenceSection"
import { CaseStudyRevampExecutiveBriefSection } from "../CaseStudyRevampExecutiveBriefSection"
import { CaseStudyRevampHeroSection } from "../CaseStudyRevampHeroSection"
import { CaseStudyRevampImpactSection } from "../CaseStudyRevampImpactSection"
import { CaseStudyRevampOwnershipSection } from "../CaseStudyRevampOwnershipSection"
import { CaseStudyRevampProductionQuoteSection } from "../CaseStudyRevampProductionQuoteSection"
import { CaseStudyRevampRecognitionSection } from "../CaseStudyRevampRecognitionSection"
import { CaseStudyRevampRelatedSection } from "../CaseStudyRevampRelatedSection"
import type { CaseStudyRevampData } from "@/content/case-studies/revamp/types"
import { CaseStudyRevampCpsSolutionSection } from "./CaseStudyRevampCpsSolutionSection"

export function CaseStudyRevampCpsTemplate({ data }: { data: CaseStudyRevampData }) {
  return <main className="min-h-full overflow-x-hidden bg-[#F3F3F3] text-[#222222]"><CaseStudyRevampHeroSection data={data} /><CaseStudyRevampExecutiveBriefSection data={data} /><CaseStudyRevampChallengeSection data={data} /><CaseStudyRevampProductionQuoteSection data={data} /><CaseStudyRevampOwnershipSection data={data} /><CaseStudyRevampCpsSolutionSection data={data} /><CaseStudyRevampImpactSection data={data} /><CaseStudyRevampEvidenceSection data={data} /><CaseStudyRevampRecognitionSection data={data} /><CaseStudyRevampRelatedSection data={data} /></main>
}
