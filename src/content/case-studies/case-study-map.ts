export type CaseStudyMapEntry = {
  slug: string
  route: `/work/${string}`
  contentModule: string
  diagramModule?: string
}

export const caseStudyMap: readonly CaseStudyMapEntry[] = [
  { slug: "cps", route: "/work/cps", contentModule: "@/content/case-studies/cps-energy" },
  { slug: "dtv01", route: "/work/dtv01", contentModule: "@/content/case-studies/directv01" },
  { slug: "newyorklife", route: "/work/newyorklife", contentModule: "@/content/case-studies/newyorklife" },
  { slug: "modere", route: "/work/modere", contentModule: "@/content/case-studies/modere" },
  {
    slug: "bi",
    route: "/work/bi",
    contentModule: "@/content/case-studies/boehringeringelheim",
    diagramModule: "@/components/case-study/bi-commerce-ecosystem-diagram",
  },
  {
    slug: "mm",
    route: "/work/mm",
    contentModule: "@/content/case-studies/mrsmeyers",
    diagramModule: "@/components/case-study/SCJCommerceArchitecture",
  },
  {
    slug: "method",
    route: "/work/method",
    contentModule: "@/content/case-studies/method",
    diagramModule: "@/components/case-study/SCJCommerceArchitecture",
  },
  {
    slug: "murad",
    route: "/work/murad",
    contentModule: "@/content/case-studies/murad",
    diagramModule: "@/components/case-study/MuradArchitectureDiagram",
  },
  { slug: "k2", route: "/work/k2", contentModule: "@/content/case-studies/k2" },
  { slug: "cbdistillery", route: "/work/cbdistillery", contentModule: "@/content/case-studies/cbdistillery" },
  { slug: "foh", route: "/work/foh", contentModule: "@/content/case-studies/fredericks" },
  { slug: "lego", route: "/work/lego", contentModule: "@/content/case-studies/lego" },
  { slug: "aa", route: "/work/aa", contentModule: "@/content/case-studies/americanapparel" },
  { slug: "dtv02", route: "/work/dtv02", contentModule: "@/content/case-studies/directveverywhere" },
] as const

export const caseStudySlugs = caseStudyMap.map((entry) => entry.slug)
