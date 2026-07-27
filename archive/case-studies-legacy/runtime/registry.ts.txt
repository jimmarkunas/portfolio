import type {
  CaseStudyData,
  LoadedCaseStudy,
} from "@/content/case-studies/types"
import type { CaseStudyRevampData } from "@/content/case-studies/revamp/types"

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

type CaseStudyRegistryEntryBase = {
  slug: CaseStudySlug
  route: `/work/${string}`
  contentModule: `@/content/case-studies/${string}`
  diagramModule?: string
  templateVersion?: "legacy" | "revamp"
}

type LegacyCaseStudyRegistryEntry = CaseStudyRegistryEntryBase & {
  templateVersion?: "legacy"
  load: () => Promise<CaseStudyData>
}

type RevampCaseStudyRegistryEntry = CaseStudyRegistryEntryBase & {
  templateVersion: "revamp"
  load: () => Promise<CaseStudyRevampData>
}

export type CaseStudyRegistryEntry = LegacyCaseStudyRegistryEntry | RevampCaseStudyRegistryEntry

export const caseStudyRegistry: Record<CaseStudySlug, CaseStudyRegistryEntry> = {
  cps: {
    slug: "cps",
    route: "/work/cps",
    contentModule: "@/content/case-studies/cps",
    load: () => import("./cps").then((module) => module.caseStudy),
  },
  dtv01: {
    slug: "dtv01",
    route: "/work/dtv01",
    contentModule: "@/content/case-studies/dtv01",
    load: () => import("./dtv01").then((module) => module.caseStudy),
  },
  newyorklife: {
    slug: "newyorklife",
    route: "/work/newyorklife",
    contentModule: "@/content/case-studies/newyorklife",
    load: () => import("./newyorklife").then((module) => module.caseStudy),
  },
  modere: {
    slug: "modere",
    route: "/work/modere",
    contentModule: "@/content/case-studies/modere",
    load: () => import("./modere").then((module) => module.caseStudy),
  },
  bi: {
    slug: "bi",
    route: "/work/bi",
    contentModule: "@/content/case-studies/bi",
    diagramModule: "@/components/case-study/bi-commerce-ecosystem-diagram",
    load: () => import("./bi").then((module) => module.caseStudy),
  },
  mm: {
    slug: "mm",
    route: "/work/mm",
    contentModule: "@/content/case-studies/mm",
    diagramModule: "@/components/case-study/SCJCommerceArchitecture",
    load: () => import("./mm").then((module) => module.caseStudy),
  },
  method: {
    slug: "method",
    route: "/work/method",
    contentModule: "@/content/case-studies/method",
    diagramModule: "@/components/case-study/SCJCommerceArchitecture",
    load: () => import("./method").then((module) => module.caseStudy),
  },
  murad: {
    slug: "murad",
    route: "/work/murad",
    contentModule: "@/content/case-studies/murad",
    diagramModule: "@/components/case-study/MuradArchitectureDiagram",
    load: () => import("./murad").then((module) => module.caseStudy),
  },
  k2: {
    slug: "k2",
    route: "/work/k2",
    contentModule: "@/content/case-studies/k2",
    load: () => import("./k2").then((module) => module.caseStudy),
  },
  cbdistillery: {
    slug: "cbdistillery",
    route: "/work/cbdistillery",
    contentModule: "@/content/case-studies/cbdistillery",
    load: () => import("./cbdistillery").then((module) => module.caseStudy),
  },
  foh: {
    slug: "foh",
    route: "/work/foh",
    contentModule: "@/content/case-studies/revamp/foh",
    templateVersion: "revamp",
    load: () => import("./revamp/foh").then((module) => module.fohRevampCaseStudy),
  },
  lego: {
    slug: "lego",
    route: "/work/lego",
    contentModule: "@/content/case-studies/lego",
    load: () => import("./lego").then((module) => module.caseStudy),
  },
  cwg: {
    slug: "cwg",
    route: "/work/cwg",
    contentModule: "@/content/case-studies/cwg",
    load: () => import("./cwg").then((module) => module.caseStudy),
  },
  aa: {
    slug: "aa",
    route: "/work/aa",
    contentModule: "@/content/case-studies/aa",
    load: () => import("./aa").then((module) => module.caseStudy),
  },
  zevo: {
    slug: "zevo",
    route: "/work/zevo",
    contentModule: "@/content/case-studies/zevo",
    load: () => import("./zevo").then((module) => module.caseStudy),
  },
  dtv02: {
    slug: "dtv02",
    route: "/work/dtv02",
    contentModule: "@/content/case-studies/dtv02",
    load: () => import("./dtv02").then((module) => module.caseStudy),
  },
}

export const caseStudySlugs = Object.keys(caseStudyRegistry) as CaseStudySlug[]

export const caseStudyMap = caseStudySlugs.map((slug) => {
  const { load: _ignoredLoad, ...entry } = caseStudyRegistry[slug]
  return entry
})

function isCaseStudySlug(slug: string): slug is CaseStudySlug {
  return slug in caseStudyRegistry
}

export async function loadCaseStudyBySlug(slug: string): Promise<LoadedCaseStudy | null> {
  if (!isCaseStudySlug(slug)) {
    return null
  }

  const entry: CaseStudyRegistryEntry = caseStudyRegistry[slug]

  if (entry.templateVersion === "revamp") {
    return {
      templateVersion: "revamp",
      data: await entry.load(),
    }
  }

  return {
    templateVersion: "legacy",
    data: await entry.load(),
  }
}

export async function loadAllCaseStudies(): Promise<Array<{ slug: CaseStudySlug; study: CaseStudyData }>> {
  const studies = await Promise.all(
    caseStudySlugs.map(async (slug) => {
      const loadedStudy = await loadCaseStudyBySlug(slug)
      if (!loadedStudy || loadedStudy.templateVersion !== "legacy") {
        return null
      }

      return { slug, study: loadedStudy.data }
    })
  )

  return studies.filter(
    (entry): entry is { slug: CaseStudySlug; study: CaseStudyData } => entry !== null
  )
}
