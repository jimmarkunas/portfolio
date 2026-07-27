import type { Metadata } from "next"

import { CaseStudyRevampModereTemplate } from "@/components/case-study/revamp/modere/CaseStudyRevampModereTemplate"
import { modereRevampCaseStudy } from "@/content/case-studies/revamp/modere"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Modere Preview",
  description: "Internal preview route for the Modere revamp case study.",
  canonicalPath: "/work/case-study-test/modere",
  robots: {
    index: false,
    follow: false,
  },
})

export default function ModereCaseStudyPreviewPage() {
  return <CaseStudyRevampModereTemplate data={modereRevampCaseStudy} />
}
