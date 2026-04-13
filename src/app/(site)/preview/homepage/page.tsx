import type { Metadata } from "next"

import Homepage from "@/components/homepage/HomepageView"
import { siteCanonicalPaths } from "@/content/site"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Homepage Preview",
  description: "Internal homepage preview route for Jim Markunas portfolio updates.",
  canonicalPath: siteCanonicalPaths.previewHomepage,
  robots: {
    index: false,
    follow: false,
  },
})

export default function HomepagePreviewPage() {
  return <Homepage />
}
