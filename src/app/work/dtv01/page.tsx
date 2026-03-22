import type { Metadata } from "next"

import { CaseStudyTemplate } from "@/components/case-study/CaseStudyTemplate"
import { directv01CaseStudy } from "@/content/case-studies/directv01"

export const metadata: Metadata = {
  title: "DIRECTV | Jim Markunas",
}

export default function Directv01Page() {
  return <CaseStudyTemplate data={directv01CaseStudy} />
}
