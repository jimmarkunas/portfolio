import type { Metadata } from "next"

import Homepage from "@/components/homepage/HomepageView"
import { buildPageMetadata } from "@/lib/seo"

const HOMEPAGE_TITLE = "Product Leader | Product Management"
const HOMEPAGE_DESCRIPTION =
  "Product leader and product management partner who turns complex initiatives into clear priorities, shipped products, and measurable business outcomes."
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
