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

export type CaseStudyNarrative = {
  title: string
  image?: string
  paragraphs: string[]
  highlights?: string[]
  closing?: string
  closingImage?: string
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
  challengeQuote: {
    quote: string
    attributionTitle: string
    attributionSubtitle: string
    avatarSrc?: string
  }
  recognition: {
    eyebrow: string
    title: string
    intro: string
    featured: {
      media: CaseStudyMedia
      company: string
      dates: string
      summary: string
      tags: string[]
    }
    rows: CaseStudyExperienceRow[]
  }
}
