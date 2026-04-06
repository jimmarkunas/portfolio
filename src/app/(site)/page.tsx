import type { Metadata } from "next"

import Homepage from "@/components/homepage/HomepageView"

const HOMEPAGE_TITLE = "Digital Product & Program Leader"
const HOMEPAGE_OG_TITLE = "James Markunas | Digital Product & Program Leader"
const HOMEPAGE_DESCRIPTION =
  "Award-winning product and program leader delivering commerce transformation, platform modernization, and proven revenue impact."
const HOMEPAGE_OG_IMAGE = "/jim/hero-jim-01-cutout.png"

export const metadata: Metadata = {
  title: HOMEPAGE_TITLE,
  description: HOMEPAGE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: HOMEPAGE_OG_TITLE,
    description: HOMEPAGE_DESCRIPTION,
    url: "/",
    images: [
      {
        url: HOMEPAGE_OG_IMAGE,
        width: 3779,
        height: 3024,
        alt: "James Markunas portfolio homepage preview",
      },
    ],
  },
  twitter: {
    title: HOMEPAGE_OG_TITLE,
    description: HOMEPAGE_DESCRIPTION,
    images: [HOMEPAGE_OG_IMAGE],
  },
}

export default function HomePage() {
  return <Homepage />
}
