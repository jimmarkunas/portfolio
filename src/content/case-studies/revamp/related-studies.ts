import { caseStudyCardCatalog, type CaseStudySlug, type CaseStudyCardCatalogEntry } from "./case-study-card-catalog"

export type CaseStudyRevampRelatedStudies = {
  eyebrow?: string
  title?: string
  intro?: string
  slugs: CaseStudySlug[]
}

export function resolveRelatedStudies({ currentSlug, config }: { currentSlug: string; config: CaseStudyRevampRelatedStudies }): CaseStudyCardCatalogEntry[] {
  const seen = new Set<CaseStudySlug>()
  return config.slugs.map((slug) => {
    if (slug === currentSlug) throw new Error(`Related study '${slug}' references itself.`)
    if (seen.has(slug)) throw new Error(`Related study '${slug}' is duplicated.`)
    const study = caseStudyCardCatalog[slug]
    if (!study) throw new Error(`Unknown related study '${slug}'.`)
    if (!study.href.startsWith(`/work/${slug}`) || study.href.includes("case-study-test") || study.href.includes("preview") || study.href.includes("localhost")) {
      throw new Error(`Invalid live related-study href for '${slug}': ${study.href}`)
    }
    seen.add(slug)
    return study
  })
}
