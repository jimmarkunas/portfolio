import type { CaseStudyData } from "@/components/case-study/types"
import { cpsEnergyCaseStudy } from "./cps-energy"
import { directv01CaseStudy } from "./directv01"
import { newYorkLifeCaseStudy } from "./newyorklife"

export const caseStudyRegistry: Record<string, CaseStudyData> = {
  [cpsEnergyCaseStudy.slug]: cpsEnergyCaseStudy,
  [directv01CaseStudy.slug]: directv01CaseStudy,
  [newYorkLifeCaseStudy.slug]: newYorkLifeCaseStudy,
}
