import type { Metadata } from "next"

import { CaseStudyTemplate } from "@/components/case-study/CaseStudyTemplate"
import { cpsEnergyCaseStudy } from "@/content/case-studies/cps-energy"

export const metadata: Metadata = {
  title: "CPS Energy Smart City Project | Jim Markunas",
}

export default function CpsEnergyPage() {
  return <CaseStudyTemplate data={cpsEnergyCaseStudy} />
}
