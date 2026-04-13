import type { Metadata } from "next"
import InterviewsApp from "../interviews/InterviewsApp"
import { siteCanonicalPaths } from "@/content/site"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Interviews",
  description:
    "Interview presentation by Jim Markunas covering enterprise delivery outcomes, hybrid agile execution, risk management, and status reporting.",
  canonicalPath: siteCanonicalPaths.interview,
})

export default function InterviewPage() {
  return (
    <div className="interviews-page">
      <InterviewsApp />
    </div>
  )
}
