import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getCaseStudyPreview } from "@/content/case-studies/revamp/preview-registry"
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

export default async function FOHCaseStudyPreviewPage() {
  const study = getCaseStudyPreview("foh")

  if (!study || !study.loadContent || !study.loadTemplate) {
    notFound()
  }

  const data = await study.loadContent()
  const Template = study.loadTemplate

  return <Template data={data} />
}
