import type { CaseStudyData } from "@/components/case-study/types"
import { caseStudySlugs } from "./case-study-map"

export { caseStudyMap, caseStudySlugs } from "./case-study-map"

type CaseStudyLoader = () => Promise<CaseStudyData>

const caseStudyLoaders: Record<string, CaseStudyLoader> = {
  cps: () => import("./cps-energy").then((module) => module.cpsEnergyCaseStudy),
  dtv01: () => import("./directv01").then((module) => module.directv01CaseStudy),
  newyorklife: () => import("./newyorklife").then((module) => module.newYorkLifeCaseStudy),
  modere: () => import("./modere").then((module) => module.modereCaseStudy),
  bi: () => import("./boehringeringelheim").then((module) => module.boehringeringelheimCaseStudy),
  mm: () => import("./mrsmeyers").then((module) => module.mrsmeyersCaseStudy),
  method: () => import("./method").then((module) => module.methodCaseStudy),
  murad: () => import("./murad").then((module) => module.muradCaseStudy),
  k2: () => import("./k2").then((module) => module.k2CaseStudy),
  cbdistillery: () => import("./cbdistillery").then((module) => module.cbdistilleryCaseStudy),
  foh: () => import("./fredericks").then((module) => module.fredericksCaseStudy),
  lego: () => import("./lego").then((module) => module.legoCaseStudy),
  aa: () => import("./americanapparel").then((module) => module.americanapparelCaseStudy),
  zevo: () => import("./zevo").then((module) => module.zevoCaseStudy),
  dtv02: () => import("./directveverywhere").then((module) => module.directveverywhereCaseStudy),
}

export async function loadCaseStudyBySlug(slug: string): Promise<CaseStudyData | null> {
  const loader = caseStudyLoaders[slug]
  return loader ? loader() : null
}

export async function loadAllCaseStudies(): Promise<Array<{ slug: string; study: CaseStudyData }>> {
  const studies = await Promise.all(
    caseStudySlugs.map(async (slug) => {
      const study = await loadCaseStudyBySlug(slug)
      return study ? { slug, study } : null
    })
  )

  return studies.filter(
    (entry): entry is { slug: string; study: CaseStudyData } => entry !== null
  )
}
