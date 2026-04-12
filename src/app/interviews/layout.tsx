import type { Metadata } from "next"
import type { ReactNode } from "react"
import { buildPageMetadata } from "@/lib/seo"
import "./index.css"

export const metadata: Metadata = buildPageMetadata({
  title: "Interviews",
  description:
    "Interview presentation by Jim Markunas covering enterprise delivery outcomes, hybrid agile execution, risk management, and status reporting.",
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
