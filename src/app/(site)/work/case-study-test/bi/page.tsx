import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getCaseStudyPreview } from "@/content/case-studies/revamp/preview-registry"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Boehringer Ingelheim Preview",
  description: "Internal preview route for the Boehringer Ingelheim revamp case study.",
  canonicalPath: "/work/case-study-test/bi",
  robots: { index: false, follow: false },
})

export default async function BICaseStudyPreviewPage() {
  const study = getCaseStudyPreview("bi")

  if (!study || !study.loadContent || !study.loadTemplate) {
    notFound()
  }

  const data = await study.loadContent()
  const Template = study.loadTemplate

  return <Template data={data} />
}
