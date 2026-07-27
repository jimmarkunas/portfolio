import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { CaseStudyRevampModereTemplate } from "@/components/case-study/revamp/modere/CaseStudyRevampModereTemplate"
import { getCaseStudyPreview } from "@/content/case-studies/revamp/preview-registry"
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

export default async function ModereCaseStudyPreviewPage() {
  const study = getCaseStudyPreview("modere")

  if (!study || !study.loadContent) {
    notFound()
  }

  const data = await study.loadContent()

  return <CaseStudyRevampModereTemplate data={data} />
}
