import { CaseStudyRevampHeroSection } from "../CaseStudyRevampHeroSection"
import { CaseStudyRevampExecutiveBriefSection } from "../CaseStudyRevampExecutiveBriefSection"
import { CaseStudyRevampChallengeSection } from "../CaseStudyRevampChallengeSection"
import { CaseStudyRevampProductionQuoteSection } from "../CaseStudyRevampProductionQuoteSection"
import { CaseStudyRevampOwnershipSection } from "../CaseStudyRevampOwnershipSection"
import { CaseStudyRevampImpactSection } from "../CaseStudyRevampImpactSection"
import { CaseStudyRevampEvidenceSection } from "../CaseStudyRevampEvidenceSection"
import { CaseStudyRevampRecognitionSection } from "../CaseStudyRevampRecognitionSection"
import { CaseStudyRevampRelatedSection } from "../CaseStudyRevampRelatedSection"
import { CaseStudyRevampAaMapSection } from "./CaseStudyRevampAaSolutionSection"
import { CaseStudyRevampSolutionSection } from "../CaseStudyRevampSolutionSection"
import type { CaseStudyRevampData } from "@/content/case-studies/revamp/types"

export function CaseStudyRevampAaTemplate({ data }: { data: CaseStudyRevampData }) {
  return <main data-case-study-renderer="revamp" className="min-h-full overflow-x-hidden bg-[#F3F3F3] text-[#222222]"><CaseStudyRevampHeroSection data={data} /><CaseStudyRevampExecutiveBriefSection data={data} /><CaseStudyRevampProductionQuoteSection data={data} /><CaseStudyRevampChallengeSection data={data} /><CaseStudyRevampOwnershipSection data={data} /><CaseStudyRevampSolutionSection data={data} /><CaseStudyRevampAaMapSection /><CaseStudyRevampImpactSection data={data} /><CaseStudyRevampEvidenceSection data={data} /><CaseStudyRevampRecognitionSection data={data} /><CaseStudyRevampRelatedSection data={data} /></main>
}
