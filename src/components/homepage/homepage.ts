import { siteCta } from "@/content/site"

const fallbackHomepageText = {
  hero: {
    role: "Program Leader",
    year: "2008",
    title: "Hello",
    subtitle: "— I'm An Award-Winning PM",
    scroll: "Scroll down ↓",
    projectCompletedValue: "75",
    projectCompletedLabel: "Projects Led",
    startupRaisedValue: "100M",
    startupRaisedLabel: "Budgets Managed",
  },
  sections: {
    experiences: {
      pill: "What I Do",
      title: "Technical Delivery Leadership",
      description:
        "I step into high-stakes programs where business goals, technical constraints, vendors, and delivery pressure collide. My job is to turn ambiguity into clarity and keep the work moving without losing speed, quality, or trust.",
    },
    awards: {
      pill: "Recognition",
      title: "Awards & Academic Case Studies",
      description:
        "The work didn’t just launch, it was globally recognized. My work has earned industry awards, and the LEGO digital transformation was later studied at Harvard & MIT as a case study in digital change at scale.",
    },
    portfolio: {
      pill: "Portfolio",
      title: "Successful Projects I've Led",
      categories: [
        "eCommerce",
        "Streaming",
        "Mobile Apps",
        "SAP",
        "PIM",
        "SaaS",
        "UI/UX",
      ],
      moreProjects: {
        pill: "Founder",
        title: "Companies I've Founded",
        cards: [
          { title: "Digital Agency Website Design - UI/UX", width: 703, height: 527 },
          { title: "Brand identity - Branding", width: 703, height: 527 },
        ],
      },
    },
    highlights: {
      cta: "See More",
    },
    insights: {
      pill: "Proven Results",
      title: "My Commercial impact",
      description:
        "A snapshot of the numbers behind the work: my revenue impact, platform scale, industry recognition, and long-horizon delivery experience across complex commerce and transformation programs.",
    },
    testimonials: {
      pill: "Testimonials",
      title: "Trusted by Teams Who Need High-Velocity Execution",
      description:
        "",
    },
    journey: {
      pill: "Recognition",
      title: "Press Coverage",
      intro:
        "As a digital commerce thought leader, I’ve been featured by the tech press and on podcasts for my point of view on commerce, platform modernization, and complex delivery. Digital transformation and AI are hot topics, and I'm flattered to be able to help shape the future of eCom. ",
      cta: siteCta.bookCallLabel,
    },
  },
  experienceCards: [
    {
      title: "Project Management",
      description:
        "Lead cross-functional delivery across product, engineering, operations, and executives. Turn business goals into execution.",
    },
    {
      title: "Program Delivery",
      description:
        "I run complex, multi-workstream programs across teams, vendors, and platforms. Keep execution aligned and risk under control.",
    },
    {
      title: "Platform Modernization",
      description:
        "Modernize eCommerce & enterprise platforms across discovery, migration, launch, and stabilization.",
    },
    {
      title: "Management Consulting",
      description:
        "Turn executive priorities, business constraints, and technical complexity into clear scope, solutions, and outcomes.",
    },
  ],
  awards: [
    { rank: "[1]", year: "2025", title: "MACH Composable Award (Nominated)", source: "MACH Alliance" },
    { rank: "[2]", year: "2025", title: "Global Smart 20 Award (Won)", source: "Global Smart 20" },
    { rank: "[3]", year: "2016", title: "Harvard Business Review (Profiled)", source: "Harvard" },
    { rank: "[4]", year: "2016", title: "MIT Sloan Management (Profiled)", source: "MIT" },
  ],
  stats: {
    cards: [
      {
        // Edit the small dark badge in the Proven Results lead card.
        badgeValue: "A+",
        title: "20+ Years",
        subtitle: "Leading digital delivery",
      },
      {
        value: "$1B",
        label: "Revenue uplift delivered at Modere (up from $500m)",
      },
      {
        value: "$120m",
        label: "YoY Revenue Impact at DIRECTV",
      },
      {
        title: "2 Awards",
        subtitle: "Industry awards for project work",
      },
      {
        value: "40k",
        label: "Hours leading projects",
      },
      {
        value: "2",
        suffix: "",
        summary: "Academic case studies at Harvard and MIT for LEGO",
      },
    ],
  },
  testimonials: [
    {
      company: "TFA Agency",
      name: "Jared Miller",
      role: "CEO/Founder",
      avatarSrc: "/bi/jared-miller.jpeg",
      quote:
        "Jim is one of those rare people who makes hard things feel manageable and big ideas feel executable. He has deep experience across ecommerce and digital platforms, and it shows. He thinks several steps ahead, looks out for the client, and pushes the work to be better.  He elevates teams simply by being in the room. ",
      variant: "dark",
      tall: true,
    },
    {
      company: "Human, Inc",
      name: "Matt Jasper",
      role: "Director, eCommerce",
      badgeSrc: "/tool-icons/svg/icon-headphones.svg",
      badgeImageClassName: "scale-[0.72]",
      avatarSrc: "/testimonials/matt-jasper.jpeg",
      quote:
        "Jim is the rare combination of strategic thinker, trusted advisor, and proactive problem-solver. He consistently went above and beyond to ensure our success.",
      variant: "light",
    },
    {
      company: "Modere",
      name: "Chris Beck",
      role: "CTO",
      badgeSrc: "/modere/modere-logo-circle.svg",
      avatarSrc: "/modere/chris-back.jpeg",
      quote:
        "Jim protected the architecture and kept the team from building the wrong thing.",
      variant: "light",
    },
    {
      company: "Corra Agency",
      name: "Murali Annavarapu ",
      role: "Program Manager",
      badgeSrc: "/testimonials/corra-logo.jpeg",
      avatarSrc: "/bi/murali-annvarapuru.jpeg",
      quote:
        "His people management and teamwork skills are truly second to none. Jim leads with empathy, clarity, and accountability.",
      variant: "light",
    },
    {
      company: "American Apparel",
      name: "Nick Kolev",
      role: "Director of Engineering",
      avatarSrc: "/aa/nick-kolev.jpeg",
      quote:
        "Jim was a key reason our most challenging projects shipped successfully at American Apparel. He’s a PM who earns trust quickly: prepared, transparent, and dependable.",
      variant: "light",
    },
    {
      company: "BigCommerce",
      name: "Nekeed Upshaw",
      role: "Global Product Manager",
      badgeSrc: "/tool-icons/svg/bc-logo-icon.svg",
      avatarSrc: "/testimonials/nekeed-upshaw.jpeg",
      quote:
        "Jim operates like a product manager, excels at stakeholder management, effectively prioritizes competing demands, and drives cross-functional alignment.",
      variant: "light",
    },
    {
      company: "Cloud NC",
      name: "Adrian Sorapuru",
      role: "Head of Business Developmentx",
      badgeSrc: "/testimonials/cloudnc-logo.png",
      badgeImageClassName: "scale-[1.55]",
      avatarSrc: "/cbdistillery/adrian-sorapuru.jpeg",
      quote:
        "Jim is an exceptional project manager equipped with technical and sales acumen. He was a leading driver of new business opportunities and drove incremental revenue for the company. Jim understands how to drive key insights that turn pain points into deliverable results. I recommend Jim for any company that needs to deliver results and drive revenue.",
      variant: "dark",
      tall: true,
    },
  ],
  testimonial: {
    quote:
      "I needed a PM who could save the day. After Murad changed agencies twice, and my PM walked off the job, I personally requested Jim.",
    initials: "TA",
    name: "Neely Cox",
    handle: "Enterprise Account Manager, BC",
    avatarSrc: "/murad/neely-cox.jpeg",
  },
  journey: {
    featured: {
      company: "Value Squared Podcast",
      date: "• January 27, 2026",
      summary: "Value Squared sat down with Jim Markunas, a digital product leader and e-commerce consultant, to break down what’s actually happening in tech, AI, and digital transformation. If you’re a founder, entrepreneur, product manager, or business owner, this episode will challenge how you think about AI, technology, and growth.",
      tags: ["Podcast", "Value2"],
      href: "",
      external: true,
    },
    entries: [
      {
        company: "The AI Journal",
        date: "• February 2026",
        summary: "Before BOPIS Went Mainstream: Jim Markunas on pioneering one of the world’s first true global omni-channel ecosystems for American Apparel across 16 countries",
        tags: ["Interview", "AI Journal"],
        href: "https://aijourn.com/before-bopis-went-mainstream-james-markunas-on-pioneering-one-of-the-worlds-first-true-global-omni-channel-ecosystems-for-american-apparel-across-16-countries/",
        external: true,
      },
      {
        company: "Mind The Product",
        date: "• April 2026",
        summary: "Coming Soon",
        tags: ["Article", "MTP"],
        href: "",
        external: true,
      },
      {
        company: "The New Stack",
        date: "• May 2026",
        summary: "Coming Soon",
        tags: ["Article", "TNS"],
        href: "",
        external: true,
      },
      {
        company: "TBD",
        date: "• May 2026",
        summary: "Coming Soon",
        tags: ["Interview", "TBD"],
        href: "",
        external: true,
      },
    ],
  },
}

export type HomepageText = typeof fallbackHomepageText

type PartialHomepageText = {
  hero?: Partial<HomepageText["hero"]>
  sections?: {
    experiences?: Partial<HomepageText["sections"]["experiences"]>
    awards?: Partial<HomepageText["sections"]["awards"]>
    portfolio?: Partial<HomepageText["sections"]["portfolio"]>
    highlights?: Partial<HomepageText["sections"]["highlights"]>
    insights?: Partial<HomepageText["sections"]["insights"]>
    testimonials?: Partial<HomepageText["sections"]["testimonials"]>
    journey?: Partial<HomepageText["sections"]["journey"]>
  }
  experienceCards?: HomepageText["experienceCards"]
  awards?: HomepageText["awards"]
  stats?: Partial<HomepageText["stats"]>
  testimonials?: HomepageText["testimonials"]
  testimonial?: Partial<HomepageText["testimonial"]>
  journey?: HomepageText["journey"]
}

// Edit copy here. This file is the single source for homepage text values.
export const homepageText: PartialHomepageText = { ...fallbackHomepageText }

export function getHomepageText(): HomepageText {
  return {
    hero: { ...fallbackHomepageText.hero, ...(homepageText.hero ?? {}) },
    sections: {
      experiences: {
        ...fallbackHomepageText.sections.experiences,
        ...(homepageText.sections?.experiences ?? {}),
      },
      awards: {
        ...fallbackHomepageText.sections.awards,
        ...(homepageText.sections?.awards ?? {}),
      },
      portfolio: {
        ...fallbackHomepageText.sections.portfolio,
        ...(homepageText.sections?.portfolio ?? {}),
      },
      highlights: {
        ...fallbackHomepageText.sections.highlights,
        ...(homepageText.sections?.highlights ?? {}),
      },
      insights: {
        ...fallbackHomepageText.sections.insights,
        ...(homepageText.sections?.insights ?? {}),
      },
      testimonials: {
        ...fallbackHomepageText.sections.testimonials,
        ...(homepageText.sections?.testimonials ?? {}),
      },
      journey: {
        ...fallbackHomepageText.sections.journey,
        ...(homepageText.sections?.journey ?? {}),
      },
    },
    experienceCards: homepageText.experienceCards ?? fallbackHomepageText.experienceCards,
    awards: homepageText.awards ?? fallbackHomepageText.awards,
    stats: { ...fallbackHomepageText.stats, ...(homepageText.stats ?? {}) },
    testimonials: homepageText.testimonials ?? fallbackHomepageText.testimonials,
    testimonial: { ...fallbackHomepageText.testimonial, ...(homepageText.testimonial ?? {}) },
    journey: homepageText.journey ?? fallbackHomepageText.journey,
  }
}

export default getHomepageText
