import { CaseStudyRevampTemplate } from "../CaseStudyRevampTemplate"
import type { CaseStudyRevampData } from "@/content/case-studies/revamp/types"
import { CaseStudyRevampModereSolutionSection } from "./CaseStudyRevampModereSolutionSection"

export function CaseStudyRevampModereTemplate({
  data,
}: {
  data: CaseStudyRevampData
}) {
  return (
    <CaseStudyRevampTemplate
      data={data}
      SolutionSection={CaseStudyRevampModereSolutionSection}
    />
  )
}
