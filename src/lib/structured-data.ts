import type { CaseStudyData } from "@/content/case-studies"
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
  studies: Array<{ slug: string; study: CaseStudyData }>
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
          description: study.role.copy,
          image: toAbsoluteUrl(study.hero.image.src),
          author: personReference(),
        },
      })),
    },
  }
}

export function createCaseStudyStructuredData(study: CaseStudyData): StructuredDataValue {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.hero.title,
    name: study.breadcrumbCurrent,
    description: study.hero.intro,
    abstract: study.atAGlance.copy,
    articleSection: "Case Study",
    genre: "Case Study",
    url: toAbsoluteUrl(`/work/${study.slug}`),
    mainEntityOfPage: toAbsoluteUrl(`/work/${study.slug}`),
    image: [toAbsoluteUrl(study.hero.image.src)],
    author: personReference(),
    creator: personReference(),
    publisher: personReference(),
    about: [
      toThing(study.problem.title),
      toThing(study.solution.title),
      toThing(study.impact.title),
    ],
    keywords: [...study.role.tags, ...study.impact.proofPoints],
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
