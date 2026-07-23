import type {
  CaseStudyData,
  LoadedCaseStudy,
  LoadedRevampCaseStudy,
} from "@/content/case-studies"
import type { CaseStudyRevampData } from "@/content/case-studies/revamp/types"
import { siteContactEmail, siteExternalUrls } from "@/content/site/config"
import {
  SEO_DEFAULT_DESCRIPTION,
  SEO_DEFAULT_OG_IMAGE,
  SEO_PERSON_NAME,
  SEO_SITE_URL,
} from "@/lib/seo"

export type StructuredDataValue = Record<string, unknown>

const SEO_PERSON_ID = `${SEO_SITE_URL}#person`
const SEO_WEBSITE_ID = `${SEO_SITE_URL}#website`

function toAbsoluteUrl(value: string): string {
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value
  }

  return new URL(value, SEO_SITE_URL).toString()
}

function personReference() {
  return {
    "@id": SEO_PERSON_ID,
  }
}

function toThing(name: string) {
  return {
    "@type": "Thing",
    name,
  }
}

export function formatStructuredDataStat(value: string, suffix: string | undefined, label: string): string {
  return `${value}${suffix ?? ""} ${label}`.trim()
}

export function createSiteStructuredData(): StructuredDataValue[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": SEO_WEBSITE_ID,
      url: SEO_SITE_URL,
      name: SEO_PERSON_NAME,
      description: SEO_DEFAULT_DESCRIPTION,
      publisher: personReference(),
      about: personReference(),
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": SEO_PERSON_ID,
      name: SEO_PERSON_NAME,
      alternateName: "James Markunas",
      url: SEO_SITE_URL,
      image: toAbsoluteUrl(SEO_DEFAULT_OG_IMAGE),
      email: `mailto:${siteContactEmail}`,
      jobTitle: "Digital Product & Program Leader",
      description: SEO_DEFAULT_DESCRIPTION,
      sameAs: [siteExternalUrls.linkedin, siteExternalUrls.x, siteExternalUrls.notionPortfolio],
      knowsAbout: [
        "Commerce transformation",
        "Platform modernization",
        "Product leadership",
        "Program rescue",
        "Digital delivery",
      ],
    },
  ]
}

export function createWorkCollectionStructuredData(
  studies: Array<{ slug: string; study: CaseStudyData | CaseStudyRevampData }>
): StructuredDataValue {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Work",
    description:
      "Case studies by Jim Markunas across commerce transformation, platform modernization, and enterprise delivery.",
    url: toAbsoluteUrl("/work"),
    isPartOf: {
      "@id": SEO_WEBSITE_ID,
    },
    about: personReference(),
    mainEntity: {
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: studies.length,
      itemListElement: studies.map(({ slug, study }, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: toAbsoluteUrl(`/work/${slug}`),
        item: {
          "@type": "Article",
          headline: study.hero.title,
          name: study.breadcrumbCurrent,
        description: "role" in study ? study.role.copy : study.hero.intro,
          image: toAbsoluteUrl(study.hero.image.src),
          author: personReference(),
        },
      })),
    },
  }
}

function isLoadedCaseStudy(study: CaseStudyData | LoadedCaseStudy): study is LoadedCaseStudy {
  return "templateVersion" in study
}

function isRevampLoadedCaseStudy(study: CaseStudyData | LoadedCaseStudy): study is LoadedRevampCaseStudy {
  return isLoadedCaseStudy(study) && study.templateVersion === "revamp"
}

export function createCaseStudyStructuredData(study: CaseStudyData): StructuredDataValue
export function createCaseStudyStructuredData(study: LoadedCaseStudy): StructuredDataValue
export function createCaseStudyStructuredData(
  study: CaseStudyData | LoadedCaseStudy
): StructuredDataValue {
  if (isRevampLoadedCaseStudy(study)) {
    const revampStudy = study.data
    const image = revampStudy.metadata?.image ?? {
      src: revampStudy.hero.image.src,
      alt: revampStudy.hero.image.alt,
    }

    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: revampStudy.metadata?.title ?? revampStudy.breadcrumbCurrent,
      name: revampStudy.breadcrumbCurrent,
      description: revampStudy.metadata?.description ?? revampStudy.hero.intro,
      abstract: revampStudy.metadata?.description ?? revampStudy.hero.intro,
      articleSection: "Case Study",
      genre: "Case Study",
      url: toAbsoluteUrl(`/work/${revampStudy.slug}`),
      mainEntityOfPage: toAbsoluteUrl(`/work/${revampStudy.slug}`),
      image: [toAbsoluteUrl(image.src)],
      author: personReference(),
      creator: personReference(),
      publisher: personReference(),
      about: [toThing(revampStudy.hero.title)],
    }
  }

  const legacyStudy = isLoadedCaseStudy(study) ? study.data : study

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: legacyStudy.hero.title,
    name: legacyStudy.breadcrumbCurrent,
    description: legacyStudy.hero.intro,
    abstract: legacyStudy.atAGlance.copy,
    articleSection: "Case Study",
    genre: "Case Study",
    url: toAbsoluteUrl(`/work/${legacyStudy.slug}`),
    mainEntityOfPage: toAbsoluteUrl(`/work/${legacyStudy.slug}`),
    image: [toAbsoluteUrl(legacyStudy.hero.image.src)],
    author: personReference(),
    creator: personReference(),
    publisher: personReference(),
    about: [
      toThing(legacyStudy.problem.title),
      toThing(legacyStudy.solution.title),
      toThing(legacyStudy.impact.title),
    ],
    keywords: [...legacyStudy.role.tags, ...legacyStudy.impact.proofPoints],
  }
}

type PresentationStructuredDataInput = {
  name: string
  description: string
  path: string
  keywords: string[]
  slideTitles: string[]
}

export function createPresentationStructuredData({
  name,
  description,
  path,
  keywords,
  slideTitles,
}: PresentationStructuredDataInput): StructuredDataValue {
  return {
    "@context": "https://schema.org",
    "@type": "PresentationDigitalDocument",
    name,
    description,
    abstract: description,
    url: toAbsoluteUrl(path),
    mainEntityOfPage: toAbsoluteUrl(path),
    encodingFormat: "text/html",
    inLanguage: "en-US",
    isAccessibleForFree: true,
    author: personReference(),
    creator: personReference(),
    publisher: personReference(),
    about: keywords.map(toThing),
    keywords,
    hasPart: slideTitles.map((title) => ({
      "@type": "CreativeWork",
      name: title,
    })),
  }
}

type HowToStructuredDataInput = {
  name: string
  description: string
  path: string
  totalTime: string
  estimatedCost: string
  tools: string[]
  steps: string[]
  keywords: string[]
}

export function createHowToStructuredData({
  name,
  description,
  path,
  totalTime,
  estimatedCost,
  tools,
  steps,
  keywords,
}: HowToStructuredDataInput): StructuredDataValue {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    url: toAbsoluteUrl(path),
    totalTime,
    estimatedCost,
    author: personReference(),
    publisher: personReference(),
    keywords,
    about: keywords.map(toThing),
    tool: tools.map((tool) => ({
      "@type": "HowToTool",
      name: tool,
    })),
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step,
      text: step,
    })),
  }
}
