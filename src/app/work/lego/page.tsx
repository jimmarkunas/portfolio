import { CaseStudyTemplate } from "@/components/case-study/CaseStudyTemplate"
import { legoCaseStudy } from "@/content/case-studies/lego"

export default function LegoPage() {
  return <CaseStudyTemplate data={legoCaseStudy} />
}
