import type { CaseStudyMedia, CaseStudySummaryColumn, CaseStudyTool } from "@/content/case-studies"

export type CaseStudyRevampImage = {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
}

export type CaseStudyRevampMetric = {
  value: string
  suffix?: string
  label: string
  detail?: string
}

export type CaseStudyRevampQuote = {
  quote: string
  attributionTitle: string
  attributionSubtitle: string
  avatarSrc?: string
}

export type CaseStudyRevampFact = {
  icon: CaseStudyRevampFactIcon
  label: string
  value: string
}

export type CaseStudyRevampFactIcon = "role" | "client" | "timeline" | "team" | "budget" | "systems"

export type CaseStudyRevampDecision = {
  title: string
  copy: string
}

export type CaseStudyRevampArchitectureLane = {
  eyebrow: string
  title: string
  copy: string
  bullets: string[]
  image?: CaseStudyRevampImage
}

export type CaseStudyRevampValidationItem = {
  eyebrow: string
  title: string
  copy: string
}

export type CaseStudyRevampRelatedStudy = {
  eyebrow: string
  title: string
  summary: string
  href: string
  image: {
    src: string
    alt: string
  }
}

export type CaseStudyRevampHeroImage = Extract<CaseStudyMedia, { kind: "image" }>

export type CaseStudyRevampRecognitionRow = {
  publisher: string
  date: string
  summary: string
  pdfHref: string
}

export type CaseStudyRevampRecognition = {
  eyebrow: string
  title: string
  intro: string
  editorialImage?: CaseStudyRevampImage
  featured?: {
    media: CaseStudyMedia
    title: string
    date?: string
    summary: string
    tags: string[]
  }
  rows: CaseStudyRevampRecognitionRow[]
}

export type CaseStudyRevampMetadata = {
  title: string
  description: string
  image: {
    src: string
    alt: string
    width: number
    height: number
  }
}

export type CaseStudyRevampData = {
  slug: string
  breadcrumbCurrent: string
  metadata?: CaseStudyRevampMetadata
  hero: {
    eyebrow: string
    title: string
    intro: string
    metrics: CaseStudyRevampMetric[]
    image: CaseStudyRevampHeroImage
  }
  productionQuote: CaseStudyRevampQuote
  executiveBrief: {
    eyebrow: string
    title: string
    copy: string
    role: string
    client: string
    timeline: string
    teamStakeholders: string
    budgetScale: string
    systemsTechnology: string
    tools?: CaseStudyTool[]
    problem: string
    mandate: string
    whatIChanged: string
    outcome: string
    facts: CaseStudyRevampFact[]
  }
  challenge: {
    eyebrow: string
    title: string
    paragraphs: string[]
    visual: CaseStudyMedia
    caption: string
  }
  ownership: {
    eyebrow: string
    title: string
    summary: string
    editorialImage?: CaseStudyRevampImage
    decisions: CaseStudyRevampDecision[]
  }
  solution: {
    eyebrow: string
    title: string
    copy: string
    background?: "gray" | "white"
    architecture: CaseStudyRevampArchitectureLane[]
    summary: string
  }
  impact: {
    eyebrow: string
    title: string
    intro: string
    editorialImage?: CaseStudyRevampImage
    metrics: CaseStudyRevampMetric[]
    transformation: {
      eyebrow: string
      title?: string
      rows: Array<{
        problem: string
        decision: string
        outcome: string
      }>
    }
  }
  evidence: {
    eyebrow: string
    title: string
    intro: string
    testimonial: CaseStudyRevampQuote
    validationItems: CaseStudyRevampValidationItem[]
  }
  recognition?: CaseStudyRevampRecognition
  relatedStudies: CaseStudyRevampRelatedStudy[]
  finalCta: {
    eyebrow: string
    title: string
    copy: string
  }
}
