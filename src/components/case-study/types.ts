export type CaseStudyAction = {
  label: string
  href: string
  external?: boolean
}

export type CaseStudyStat = {
  value: string
  suffix?: string
  label: string
}

export type CaseStudyTool = {
  label: string
  icon: string
}

export type CaseStudyOverviewRow = {
  label: string
  value: string
}

export type CaseStudyExperienceRow = {
  company: string
  source?: string
  dates: string
  summary: string
  tags: string[]
  file?: string
  url?: string
}

export type CaseStudyDeliveryPhase = {
  phase: string
  title: string
  copy: string
  ringClass: string
  labelClass: string
}

export type CaseStudyJourneyStep = {
  step: string
  title: string
  copy: string
}

export type CaseStudySummaryColumn = {
  label: string
  title: string
  points: string[]
}

export type CaseStudyBlogCardArt = "olive" | "ux" | "motion" | (string & {})

export type CaseStudyBlogCard = {
  category: string
  readTime: string
  title: string
  art: CaseStudyBlogCardArt
}

export type CaseStudySolutionDiagramKey =
  | "murad-architecture"
  | "bi-commerce-ecosystem"
  | "scj-commerce-architecture"
  | "modere-commerce-flow"

export type CaseStudyMedia =
  | {
      kind: "image"
      src: string
      alt: string
      aspectRatio: "16/9" | "9/16"
    }
  | {
      kind: "video-placeholder"
      title: string
      subtitle: string
      aspectRatio: "16/9" | "9/16"
    }
  | {
      kind: "youtube"
      videoId: string
      aspectRatio: "16/9" | "9/16"
    }
  | {
      kind: "video"
      src: string
      aspectRatio: "16/9" | "9/16"
    }

export type CaseStudyNarrative = {
  image?: string
  title: string
  paragraphs: string[]
  highlights?: string[]
  closing?: string
  closingImage?: string
}

export type DiagramInputNode = {
  id: string
  label: string
  icon: string
  descriptor: string
  tier: string
}

export type DiagramOutputNode = {
  id: string
  label: string
  glyph: string
  descriptor: string
  tier?: string
}

export type DiagramIntegration = {
  id: string
  label: string
  icon: string
}

export type DiagramPill = {
  id: string
  label: string
}

export type DiagramTooltip = {
  title: string
  body: string
}

export type DiagramData = {
  inputs: DiagramInputNode[]
  outputs: DiagramOutputNode[]
  integrations: DiagramIntegration[]
  integrationsLabel?: string
  pills: DiagramPill[]
  tooltips: Record<string, DiagramTooltip>
}

export type GlobalLocation = {
  city: string
  country: string
  coordinates: [number, number]
}

export type CaseStudyData = {
  slug: string
  breadcrumbCurrent: string
  hero: {
    title: string
    intro: string
    primaryCta: CaseStudyAction
    secondaryCta: CaseStudyAction
    image: {
      src: string
      alt: string
    }
  }
  atAGlance: {
    eyebrow: string
    title: string
    copy: string
    stats: CaseStudyStat[]
  }
  problem: {
    eyebrow: string
    title: string
    media: CaseStudyMedia
    overview: string
    projectOverviewRows: CaseStudyOverviewRow[]
    tools: CaseStudyTool[]
    quote: {
      quote: string
      attributionTitle: string
      attributionSubtitle: string
      avatarSrc?: string
      preQuoteImage?: string
      preQuoteHeading?: string
      preQuoteImageCaption?: string
      preQuoteChart?: "directv-revenue"
    }
  }
  role: {
    eyebrow: string
    title: string
    copy: string
    tags: string[]
    stats: CaseStudyStat[]
    narrative: CaseStudyNarrative
  }
  solution: {
    eyebrow: string
    title: string
    copy: string
    cards: CaseStudyBlogCard[]
    heroImage?: string
    diagram?: DiagramData
    diagramKey?: CaseStudySolutionDiagramKey
  }
  supplementalNarrative: CaseStudyNarrative
  impact: {
    eyebrow: string
    title: string
    intro: string
    proofPoints: string[]
    stats: CaseStudyStat[]
    statsImage?: string
    beforeAfter: {
      title: string
      summary: string
      columns: CaseStudySummaryColumn[]
    }
    journeySteps: CaseStudyJourneyStep[]
  }
  delivery: {
    eyebrow: string
    title: string
    introTitle: string
    introCopy: string
    phases: CaseStudyDeliveryPhase[]
  }
  globalLocations?: {
    title: string
    locations: GlobalLocation[]
  }
  challengeQuote: {
    quote: string
    attributionTitle: string
    attributionSubtitle: string
    avatarSrc?: string
  }
  recognition?: {
    eyebrow: string
    title: string
    intro: string
    leadImage?: {
      src: string
      alt: string
    }
    featured?: {
      media: CaseStudyMedia
      company: string
      dates: string
      summary: string
      tags: string[]
    }
    rows: CaseStudyExperienceRow[]
  }
}
