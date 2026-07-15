import type { Metadata } from "next"

import { CaseStudyTemplateTest } from "@/components/case-study/template-test/CaseStudyTemplateTest"
import { caseStudyTemplateTest } from "@/content/case-study-template-test"

export const metadata: Metadata = {
  title: "Case Study Test",
  description:
    "Fictional placeholder route used to validate the standard case-study template before migrating live content.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function CaseStudyTestPage() {
  return <CaseStudyTemplateTest data={caseStudyTemplateTest} />
}
