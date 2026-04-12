import type { Metadata } from "next"

import Homepage from "@/components/homepage/HomepageView"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Homepage Preview",
  description: "Internal homepage preview route for Jim Markunas portfolio updates.",
  canonicalPath: "/preview/homepage",
  robots: {
    index: false,
    follow: false,
  },
})

export default function HomepagePreviewPage() {
  return <Homepage />
}
