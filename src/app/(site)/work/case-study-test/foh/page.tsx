import type { Metadata } from "next"

import { CaseStudyRevampTemplate } from "@/components/case-study/revamp/CaseStudyRevampTemplate"
import { fohRevampCaseStudy } from "@/content/case-studies/revamp/foh"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Frederick's of Hollywood Preview",
  description: "Internal preview route for the Frederick's of Hollywood revamp case study.",
  canonicalPath: "/work/case-study-test/foh",
  robots: {
    index: false,
    follow: false,
  },
})

export default function FOHCaseStudyPreviewPage() {
  return <CaseStudyRevampTemplate data={fohRevampCaseStudy} />
}
