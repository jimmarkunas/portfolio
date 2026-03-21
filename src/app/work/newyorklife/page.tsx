import { CaseStudyTemplate } from "@/components/case-study/CaseStudyTemplate"
import { newYorkLifeCaseStudy } from "@/content/case-studies/newyorklife"

export default function NewYorkLifePage() {
  return <CaseStudyTemplate data={newYorkLifeCaseStudy} />
}
