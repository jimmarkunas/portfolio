import { CaseStudyRevampModereTemplate } from "../modere/CaseStudyRevampModereTemplate"
import type { CaseStudyRevampData } from "@/content/case-studies/revamp/types"

export function CaseStudyRevampModereLiveTemplate({ data }: { data: CaseStudyRevampData }) {
  return <CaseStudyRevampModereTemplate data={data} />
}
