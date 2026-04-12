import type { EyebrowIntroSection } from "@/content/site/types"

export type ServiceEntry = {
  title: string
  summary: string
}

export type CareerStatEntry = {
  value: string
  suffix?: string
  label: string
}

export type ServiceProjectLogoEntry = {
  src: string
  alt: string
  caseStudyHref: `/work/${string}`
  scaleClass?: string
  size?: "default" | "half"
}

export type ServiceMapLocationEntry = {
  city: string
  country: string
  coordinates: [number, number] // [longitude, latitude]
}

export type ServiceEntriesSection = EyebrowIntroSection & {
  entries: ServiceEntry[]
}

export type CareerStatsSection = EyebrowIntroSection & {
  stats: CareerStatEntry[]
}

export type ProjectShowcaseSection = {
  eyebrow: string
  title: string
  logos: ServiceProjectLogoEntry[]
}

export type ServicesMapSection = EyebrowIntroSection & {
  mapTitle: string
  locations: ServiceMapLocationEntry[]
}

export type ContactSection = EyebrowIntroSection & {
  email: string
  linkedinLabel: string
  linkedinHref: string
  location: string
}

export type ServicesContactContent = {
  services: ServiceEntriesSection
  careerStats: CareerStatsSection
  projectShowcase: ProjectShowcaseSection
  servicesMap: ServicesMapSection
  contact: ContactSection
}

export const siteContent = {
  services: {
    eyebrow: "Services",
    title: "How I Help Teams Ship",
    intro:
      "I partner with founders and enterprise leaders to define product strategy, align execution, and deliver measurable outcomes across commerce, media, and platform programs.",
    entries: [
      {
        title: "Product Leadership",
        summary:
          "Roadmaps, prioritization, and delivery operating models that keep strategy connected to execution.",
      },
      {
        title: "Platform Architecture",
        summary:
          "Scalable system planning across commerce, content, and data surfaces without unnecessary complexity.",
      },
      {
        title: "Transformation Programs",
        summary:
          "Cross-functional program structure that aligns teams, reduces risk, and improves speed to value.",
      },
    ] satisfies ServiceEntry[],
  },
  careerStats: {
    eyebrow: "Results",
    title: "Career Delivery Impact",
    intro:
      "A cross-program snapshot of outcomes delivered across enterprise commerce, media platforms, and digital transformation initiatives.",
    stats: [
      {
        value: "20",
        suffix: "+",
        label: "Years leading high-stakes digital delivery programs",
      },
      {
        value: "75",
        suffix: "+",
        label: "Major programs launched across product and platform teams",
      },
      {
        value: "$1B",
        suffix: "+",
        label: "Revenue impact delivered through transformation portfolios",
      },
      {
        value: "40k",
        suffix: "+",
        label: "Hours leading architecture, execution, and stabilization",
      },
    ] satisfies CareerStatEntry[],
  },
  projectShowcase: {
    eyebrow: "Projects",
    title: "Marquee Projects I've Led",
    logos: [
      {
        src: "/company-logos/svg/method-logo.svg",
        alt: "Method",
        caseStudyHref: "/work/method",
        scaleClass: "scale-110 md:scale-115 lg:scale-125",
      },
      {
        src: "/company-logos/svg/new-york-life-logo.svg",
        alt: "New York Life",
        caseStudyHref: "/work/newyorklife",
        size: "half",
      },
      {
        src: "/company-logos/svg/directv-logo.svg",
        alt: "DirecTV",
        caseStudyHref: "/work/dtv01",
        scaleClass: "scale-100",
      },
      {
        src: "/company-logos/svg/lego-logo.svg",
        alt: "LEGO",
        caseStudyHref: "/work/lego",
        size: "half",
      },
      {
        src: "/company-logos/svg/modere-logo.svg",
        alt: "Modere",
        caseStudyHref: "/work/modere",
        scaleClass: "scale-110 md:scale-115 lg:scale-125",
      },
      {
        src: "/company-logos/svg/mm-logo.svg",
        alt: "Mrs. Meyer's Clean Day",
        caseStudyHref: "/work/mm",
        scaleClass: "scale-110 md:scale-115 lg:scale-125",
      },
      {
        src: "/company-logos/svg/murad-logo.svg",
        alt: "Murad",
        caseStudyHref: "/work/murad",
        scaleClass: "scale-110 md:scale-115 lg:scale-125",
      },
      {
        src: "/company-logos/svg/bi-logo.svg",
        alt: "Boehringer Ingelheim",
        caseStudyHref: "/work/bi",
        scaleClass: "scale-110 md:scale-115 lg:scale-125",
      },
    ] satisfies ServiceProjectLogoEntry[],
  },
  servicesMap: {
    eyebrow: "Locations",
    title: "Where I Work",
    intro:
      "I support teams across North America, Europe, and Asia through on-site and remote delivery leadership.",
    mapTitle: "Global Delivery Footprint",
    locations: [
      { city: "Austin, TX", country: "United States", coordinates: [-97.7431, 30.2672] },
      { city: "Los Angeles, CA", country: "United States", coordinates: [-118.2437, 34.0522] },
      { city: "Chicago, IL", country: "United States", coordinates: [-87.6298, 41.8781] },
      { city: "London", country: "England, UK", coordinates: [-0.1276, 51.5072] },
      { city: "Paris", country: "France", coordinates: [2.3522, 48.8566] },
      { city: "Bangalore", country: "India", coordinates: [77.5946, 12.9716] },
    ] satisfies ServiceMapLocationEntry[],
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact Me",
    intro:
      "Available for product leadership, platform architecture, and transformation programs. Based in the US, UK, and EU, open to remote opportunities worldwide.",
    email: "jim@jimmarkunas.com",
    linkedinLabel: "linkedin.com/in/jimmarkunas",
    linkedinHref: "https://linkedin.com/in/jimmarkunas",
    location: "US · UK · EU",
  },
} satisfies ServicesContactContent
