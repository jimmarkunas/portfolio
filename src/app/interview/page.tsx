import type { Metadata } from "next"

import { StructuredData } from "@/components/seo/StructuredData"
import { interviewContent } from "@/content/interviews"
import InterviewsApp from "../interviews/InterviewsApp"
import { siteCanonicalPaths } from "@/content/site"
import { buildPageMetadata } from "@/lib/seo"
import { createPresentationStructuredData } from "@/lib/structured-data"

const INTERVIEW_DESCRIPTION =
  "Interview presentation by Jim Markunas covering enterprise delivery outcomes, hybrid agile execution, risk management, and status reporting."

export const metadata: Metadata = buildPageMetadata({
  title: "Interviews",
  description: INTERVIEW_DESCRIPTION,
  canonicalPath: siteCanonicalPaths.interview,
  useDefaultImage: false,
})

export default function InterviewPage() {
  return (
    <main className="bg-black text-white">
      <StructuredData
        data={createPresentationStructuredData({
          name: "Jim Markunas Interview Presentation",
          description: INTERVIEW_DESCRIPTION,
          path: siteCanonicalPaths.interview,
          keywords: [
            "enterprise delivery",
            "program rescue",
            "hybrid agile",
            "risk management",
            "status reporting",
            "product leadership",
          ],
          slideTitles: interviewContent.slideTitles,
        })}
      />

      <div className="interviews-page">
        <InterviewsApp />
      </div>
    </main>
  )
}
