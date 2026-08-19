import type { Metadata } from "next"

import Homepage from "@/components/homepage/HomepageView"
import { buildPageMetadata } from "@/lib/seo"

const HOMEPAGE_TITLE = "Digital Product & Program Leader"
const HOMEPAGE_DESCRIPTION =
  "Award-winning product and program leader delivering commerce transformation, platform modernization, and proven revenue impact."
const HOMEPAGE_OG_IMAGE = "/jim/hero-jim-01-cutout.png"

export const metadata: Metadata = buildPageMetadata({
  title: HOMEPAGE_TITLE,
  description: HOMEPAGE_DESCRIPTION,
  canonicalPath: "/",
  routeMarker: "home",
  image: {
    url: HOMEPAGE_OG_IMAGE,
    width: 3779,
    height: 3024,
    alt: "Jim Markunas portfolio homepage preview",
  },
})

export default function HomePage() {
  return <Homepage />
}
