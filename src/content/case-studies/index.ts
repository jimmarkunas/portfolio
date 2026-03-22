import type { CaseStudyData } from "@/components/case-study/types"
import { cpsEnergyCaseStudy } from "./cps-energy"
import { directv01CaseStudy } from "./directv01"
import { newYorkLifeCaseStudy } from "./newyorklife"
import { modereCaseStudy } from "./modere"
import { boehringeringelheimCaseStudy } from "./boehringeringelheim"
import { mrsmeyersCaseStudy } from "./mrsmeyers"
import { methodCaseStudy } from "./method"
import { muradCaseStudy } from "./murad"
import { k2CaseStudy } from "./k2"
import { cbdistilleryCaseStudy } from "./cbdistillery"
import { fredericksCaseStudy } from "./fredericks"
import { legoCaseStudy } from "./lego"
import { americanapparelCaseStudy } from "./americanapparel"
import { directveverywhereCaseStudy } from "./directveverywhere"

export const caseStudyRegistry: Record<string, CaseStudyData> = {
  [cpsEnergyCaseStudy.slug]: cpsEnergyCaseStudy,
  [directv01CaseStudy.slug]: directv01CaseStudy,
  [newYorkLifeCaseStudy.slug]: newYorkLifeCaseStudy,
  [modereCaseStudy.slug]: modereCaseStudy,
  [boehringeringelheimCaseStudy.slug]: boehringeringelheimCaseStudy,
  [mrsmeyersCaseStudy.slug]: mrsmeyersCaseStudy,
  [methodCaseStudy.slug]: methodCaseStudy,
  [muradCaseStudy.slug]: muradCaseStudy,
  [k2CaseStudy.slug]: k2CaseStudy,
  [cbdistilleryCaseStudy.slug]: cbdistilleryCaseStudy,
  [fredericksCaseStudy.slug]: fredericksCaseStudy,
  [legoCaseStudy.slug]: legoCaseStudy,
  [americanapparelCaseStudy.slug]: americanapparelCaseStudy,
  [directveverywhereCaseStudy.slug]: directveverywhereCaseStudy,
}
