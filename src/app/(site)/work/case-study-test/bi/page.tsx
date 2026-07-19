import type { Metadata } from "next"
import { CaseStudyRevampBiTemplate } from "@/components/case-study/revamp/bi/CaseStudyRevampBiTemplate"
import { biRevampCaseStudy } from "@/content/case-studies/revamp/bi"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Boehringer Ingelheim Preview",
  description: "Internal preview route for the Boehringer Ingelheim revamp case study.",
  canonicalPath: "/work/case-study-test/bi",
  robots: { index: false, follow: false },
})

export default function BICaseStudyPreviewPage() {
  return <CaseStudyRevampBiTemplate data={biRevampCaseStudy} />
}
