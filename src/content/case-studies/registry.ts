import type { CaseStudyData } from "@/content/case-studies/types"

export type CaseStudySlug =
  | "cps"
  | "dtv01"
  | "newyorklife"
  | "modere"
  | "bi"
  | "mm"
  | "method"
  | "murad"
  | "k2"
  | "cbdistillery"
  | "foh"
  | "lego"
  | "cwg"
  | "aa"
  | "zevo"
  | "dtv02"

export type CaseStudyRegistryEntry = {
  slug: CaseStudySlug
  route: `/work/${string}`
  contentModule: `@/content/case-studies/${string}`
  diagramModule?: string
  load: () => Promise<CaseStudyData>
}

export const caseStudyRegistry = {
  cps: {
    slug: "cps",
    route: "/work/cps",
    contentModule: "@/content/case-studies/cps",
    load: () => import("./cps").then((module) => module.cpsEnergyCaseStudy),
  },
  dtv01: {
    slug: "dtv01",
    route: "/work/dtv01",
    contentModule: "@/content/case-studies/dtv01",
    load: () => import("./dtv01").then((module) => module.directv01CaseStudy),
  },
  newyorklife: {
    slug: "newyorklife",
    route: "/work/newyorklife",
    contentModule: "@/content/case-studies/newyorklife",
    load: () => import("./newyorklife").then((module) => module.newYorkLifeCaseStudy),
  },
  modere: {
    slug: "modere",
    route: "/work/modere",
    contentModule: "@/content/case-studies/modere",
    load: () => import("./modere").then((module) => module.modereCaseStudy),
  },
  bi: {
    slug: "bi",
    route: "/work/bi",
    contentModule: "@/content/case-studies/bi",
    diagramModule: "@/components/case-study/bi-commerce-ecosystem-diagram",
    load: () => import("./bi").then((module) => module.boehringeringelheimCaseStudy),
  },
  mm: {
    slug: "mm",
    route: "/work/mm",
    contentModule: "@/content/case-studies/mm",
    diagramModule: "@/components/case-study/SCJCommerceArchitecture",
    load: () => import("./mm").then((module) => module.mrsmeyersCaseStudy),
  },
  method: {
    slug: "method",
    route: "/work/method",
    contentModule: "@/content/case-studies/method",
    diagramModule: "@/components/case-study/SCJCommerceArchitecture",
    load: () => import("./method").then((module) => module.methodCaseStudy),
  },
  murad: {
    slug: "murad",
    route: "/work/murad",
    contentModule: "@/content/case-studies/murad",
    diagramModule: "@/components/case-study/MuradArchitectureDiagram",
    load: () => import("./murad").then((module) => module.muradCaseStudy),
  },
  k2: {
    slug: "k2",
    route: "/work/k2",
    contentModule: "@/content/case-studies/k2",
    load: () => import("./k2").then((module) => module.k2CaseStudy),
  },
  cbdistillery: {
    slug: "cbdistillery",
    route: "/work/cbdistillery",
    contentModule: "@/content/case-studies/cbdistillery",
    load: () => import("./cbdistillery").then((module) => module.cbdistilleryCaseStudy),
  },
  foh: {
    slug: "foh",
    route: "/work/foh",
    contentModule: "@/content/case-studies/foh",
    load: () => import("./foh").then((module) => module.fredericksCaseStudy),
  },
  lego: {
    slug: "lego",
    route: "/work/lego",
    contentModule: "@/content/case-studies/lego",
    load: () => import("./lego").then((module) => module.legoCaseStudy),
  },
  cwg: {
    slug: "cwg",
    route: "/work/cwg",
    contentModule: "@/content/case-studies/cwg",
    load: () => import("./cwg").then((module) => module.cwgCaseStudy),
  },
  aa: {
    slug: "aa",
    route: "/work/aa",
    contentModule: "@/content/case-studies/aa",
    load: () => import("./aa").then((module) => module.americanapparelCaseStudy),
  },
  zevo: {
    slug: "zevo",
    route: "/work/zevo",
    contentModule: "@/content/case-studies/zevo",
    load: () => import("./zevo").then((module) => module.zevoCaseStudy),
  },
  dtv02: {
    slug: "dtv02",
    route: "/work/dtv02",
    contentModule: "@/content/case-studies/dtv02",
    load: () => import("./dtv02").then((module) => module.directveverywhereCaseStudy),
  },
} satisfies Record<CaseStudySlug, CaseStudyRegistryEntry>

export const caseStudySlugs = Object.keys(caseStudyRegistry) as CaseStudySlug[]

export const caseStudyMap = caseStudySlugs.map((slug) => {
  const { load: _ignoredLoad, ...entry } = caseStudyRegistry[slug]
  return entry
})

export async function loadCaseStudyBySlug(slug: string): Promise<CaseStudyData | null> {
  const entry = caseStudyRegistry[slug as CaseStudySlug]
  return entry ? entry.load() : null
}

export async function loadAllCaseStudies(): Promise<Array<{ slug: CaseStudySlug; study: CaseStudyData }>> {
  const studies = await Promise.all(
    caseStudySlugs.map(async (slug) => {
      const study = await loadCaseStudyBySlug(slug)
      return study ? { slug, study } : null
    })
  )

  return studies.filter(
    (entry): entry is { slug: CaseStudySlug; study: CaseStudyData } => entry !== null
  )
}
