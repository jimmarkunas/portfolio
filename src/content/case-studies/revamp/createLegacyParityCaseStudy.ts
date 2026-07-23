import type { CaseStudyData, CaseStudyMedia, CaseStudySolutionDiagramKey, DiagramData } from "@/content/case-studies/types"
import type { CaseStudyRevampData, CaseStudyRevampMetric, CaseStudySolutionMode } from "./types"
import type { CaseStudySlug } from "./case-study-card-catalog"

type OwnershipConfig = { title: string; sourcePath: string }
export type LegacyParityConfig = {
  legacy: CaseStudyData
  slug: string
  ownership: OwnershipConfig[]
  impactMetricIndexes?: number[]
  impactMetricsOverride?: CaseStudyRevampMetric[]
  heroMetricsOverride?: CaseStudyRevampMetric[]
  solutionMode: CaseStudySolutionMode
  relatedSlugs: CaseStudySlug[]
  allowedAssetRoots: string[]
  intentionalMediaRepeats?: string[]
  recognitionBannerImage?: string
  removeRecognition?: boolean
  removeRecognitionFeatured?: boolean
  featuredSolutionImages?: string[]
  challengeChart?: boolean
  retailChartBrand?: string
  solutionDiagramKey?: CaseStudySolutionDiagramKey
  solutionDiagram?: DiagramData
  impactEditorialImage?: string
  solutionSecondarySummary?: string
  ownerApprovedTextReplacements?: Array<[string, string]>
}

const readPath = (value: unknown, path: string): string => {
  const result = path.replace(/^legacy\./, "").split(".").reduce<unknown>((current, segment) => {
    const match = segment.match(/^([^[]+)(?:\[(\d+)\])?$/)
    if (!match || current == null || typeof current !== "object") return undefined
    const next = (current as Record<string, unknown>)[match[1]]
    return match[2] == null ? next : Array.isArray(next) ? next[Number(match[2])] : undefined
  }, value)
  return typeof result === "string" ? result : ""
}

const image = (src: string, alt: string) => ({ src, alt, width: 1600, height: 900 })

function media(value: CaseStudyMedia) {
  return value
}

const replaceText = (value: unknown, replacements: Array<[string, string]>): unknown => {
  if (typeof value === "string") return replacements.reduce((text, [from, to]) => text.replaceAll(from, to), value)
  if (Array.isArray(value)) return value.map((item) => replaceText(item, replacements))
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, replaceText(item, replacements)]))
  return value
}

export function createLegacyParityCaseStudy(config: LegacyParityConfig): CaseStudyRevampData {
  const legacy = config.legacy
  const rows = legacy.problem.projectOverviewRows
  const valueFor = (label: string) => rows.find((row) => row.label.toLowerCase() === label.toLowerCase())?.value ?? ""
  const cards = legacy.solution.cards ?? []
  const metricIndexes = config.impactMetricIndexes ?? legacy.impact.stats.map((_, index) => index)
  const ownership = config.ownership.map((item) => ({
    title: item.title,
    copy: readPath(legacy, item.sourcePath) || item.title,
  }))
  const architecture = cards.slice(0, 3).map((card) => ({
    eyebrow: card.category,
    title: card.readTime,
    copy: card.title,
    bullets: [],
    image: image(card.art, `${legacy.breadcrumbCurrent} ${card.category}`),
  }))

  const result: CaseStudyRevampData = {
    slug: config.slug,
    breadcrumbCurrent: legacy.breadcrumbCurrent,
    metadata: { title: legacy.hero.title, description: legacy.hero.intro, image: image(legacy.hero.image.src, legacy.hero.image.alt) },
    hero: {
      eyebrow: legacy.atAGlance.eyebrow,
      title: legacy.hero.title,
      intro: legacy.hero.intro,
      metrics: config.heroMetricsOverride ?? legacy.atAGlance.stats,
      image: { kind: "image", src: legacy.hero.image.src, alt: legacy.hero.image.alt, aspectRatio: "16/9" },
    },
    productionQuote: legacy.problem.quote,
    executiveBrief: {
      eyebrow: "At-a-Glance",
      title: legacy.atAGlance.title,
      copy: legacy.atAGlance.copy,
      tools: legacy.problem.tools,
      problem: legacy.problem.overview,
      mandate: legacy.role.copy,
      whatIChanged: legacy.role.narrative.paragraphs[0] ?? legacy.role.copy,
      outcome: legacy.impact.intro,
      facts: [
        { icon: "role", label: "Role", value: legacy.role.title },
        { icon: "client", label: "Client", value: valueFor("Client") },
        { icon: "timeline", label: "Timeline", value: valueFor("Timeline") },
        { icon: "team", label: "Team", value: legacy.role.stats.find((stat) => /team|stakeholder/i.test(stat.label))?.value ?? "" },
        { icon: "budget", label: "Budget", value: legacy.role.stats.find((stat) => /budget/i.test(stat.label))?.value ?? "" },
        { icon: "systems", label: "Systems", value: legacy.problem.tools.map((tool) => tool.label).join(", ") },
      ],
    },
    challenge: { eyebrow: legacy.problem.eyebrow, title: legacy.problem.title, paragraphs: [legacy.problem.overview], visual: config.challengeChart ? { kind: "react-diagram", component: "directv-revenue" } : config.retailChartBrand ? { kind: "react-diagram", component: "retail-vs-dtc", brandName: config.retailChartBrand } : media(legacy.problem.media), caption: config.challengeChart || config.retailChartBrand ? "" : `${legacy.breadcrumbCurrent} legacy case-study media.` },
    ownership: { eyebrow: "What I Owned", title: legacy.role.narrative.title, summary: legacy.role.copy, decisions: ownership },
    solution: { mode: config.solutionMode, eyebrow: legacy.solution.eyebrow, title: legacy.solution.title, copy: legacy.solution.copy, architecture: config.featuredSolutionImages || config.solutionDiagramKey || config.solutionDiagram ? [] : architecture, featuredMedia: config.featuredSolutionImages?.map((src) => image(src, `${legacy.breadcrumbCurrent} featured solution`)), carouselImages: legacy.solution.gallery, diagram: config.solutionDiagram, diagramKey: config.solutionDiagramKey, summary: legacy.supplementalNarrative.paragraphs[0] ?? legacy.solution.copy, secondarySummary: config.solutionSecondarySummary },
    impact: { eyebrow: legacy.impact.eyebrow, title: legacy.impact.title, intro: legacy.impact.intro, editorialImage: config.impactEditorialImage ? image(config.impactEditorialImage, `${legacy.breadcrumbCurrent} impact diagram`) : undefined, metrics: config.impactMetricsOverride ?? metricIndexes.map((index) => legacy.impact.stats[index]), transformation: { eyebrow: "Before & After", title: legacy.impact.beforeAfter.title, rows: legacy.impact.beforeAfter.columns.length >= 2 ? legacy.impact.beforeAfter.columns[0].points.map((problem, index) => ({ problem, decision: legacy.impact.journeySteps[index]?.copy ?? legacy.impact.beforeAfter.summary, outcome: legacy.impact.beforeAfter.columns[1].points[index] ?? legacy.impact.beforeAfter.columns[1].points[legacy.impact.beforeAfter.columns[1].points.length - 1] })) : [] } },
    evidence: { eyebrow: "Delivery Proof", title: legacy.delivery.title, intro: legacy.delivery.introCopy, testimonial: legacy.challengeQuote, validationItems: legacy.delivery.phases.slice(0, 2).map((phase) => ({ eyebrow: phase.phase, title: phase.title, copy: phase.copy })) },
    recognition: !config.removeRecognition && legacy.recognition ? { eyebrow: "Recognition", title: "Press & Accolades", intro: legacy.recognition.intro, editorialImage: config.recognitionBannerImage ? image(config.recognitionBannerImage, `${legacy.breadcrumbCurrent} recognition banner`) : undefined, featured: !config.removeRecognitionFeatured && legacy.recognition.featured ? { media: legacy.recognition.featured.media, title: legacy.recognition.featured.company, date: legacy.recognition.featured.dates, summary: legacy.recognition.featured.summary, tags: legacy.recognition.featured.tags } : undefined, rows: legacy.recognition.rows.map((row) => ({ publisher: row.source ?? row.company, date: row.dates, summary: row.summary, pdfHref: row.file ?? row.url ?? "" })) } : undefined,
    relatedStudies: { slugs: config.relatedSlugs },
    finalCta: { eyebrow: "Next step", title: `Review the ${legacy.breadcrumbCurrent} case study.`, copy: "A direct legacy-parity preview." },
  }
  return (config.ownerApprovedTextReplacements ? replaceText(result, config.ownerApprovedTextReplacements) : result) as CaseStudyRevampData
}
