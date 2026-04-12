import type { Metadata } from "next"
import type { ReactNode } from "react"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Interviews Redirect",
  description: "Legacy interviews URL redirecting to the canonical interview presentation route.",
  canonicalPath: "/interview",
  robots: {
    index: false,
    follow: false,
  },
})

export default function InterviewsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children
}
