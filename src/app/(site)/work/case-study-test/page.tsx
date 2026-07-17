import type { Metadata } from "next"

import { CaseStudyRevampTemplate } from "@/components/case-study/revamp/CaseStudyRevampTemplate"
import { caseStudyRevampFixture } from "@/content/case-studies/revamp/fixture"

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
  return <CaseStudyRevampTemplate data={caseStudyRevampFixture} />
}
