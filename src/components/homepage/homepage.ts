import { siteCta } from "@/content/site"

const fallbackHomepageText = {
  hero: {
    role: "Program Fixer",
    year: "2008",
    title: "Fixer",
    subtitle: "— I Fix Digital Programs Before They Crash",
    scroll: "Scroll down ↓",
    projectCompletedValue: "75",
    projectCompletedLabel: "Projects Delivered",
    startupRaisedValue: "$1B+",
    startupRaisedLabel: "ROI Delivered",
  },
  sections: {
    experiences: {
      pill: "What I Do",
      title: "Programs I've Rescued",
      description:
        "Real engagements pulled from the case studies below. Same pattern every time: stabilize the program, align ownership, and convert delivery into measurable business outcomes.",
      ctaLead: "If your program is in trouble",
    },
    awards: {
      pill: "Awards",
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
        description: "I started my career in tech as an entrepreneur. Here are the brands and products I built from the ground up.",
        cards: [
          { title: "Digital Agency Website Design - UI/UX", width: 703, height: 527 },
          { title: "Brand identity - Branding", width: 703, height: 527 },
        ],
      },
    },
    highlights: {
      cta: "See More",
    },
    services: {
      pill: "Proven Results",
      title: "My Areas of Expertse & Business Impact",
      description:
        "I specialize in turning complex problems into elegant solutions. My approach blends creativity with strategic.\n\nHere's a snapshot of the numbers behind the work: my revenue impact, platform scale, industry recognition, and long-horizon delivery experience across complex commerce and digital transformation programs.\n",
    },
    insights: {
      pill: "Proven Results",
      title: "Experience & Impact",
      description:
        "A snapshot of the numbers behind the work: my revenue impact, platform scale, industry recognition, and long-horizon delivery experience across complex commerce and digital transformation programs.",
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
  experienceEngagements: [
    {
      company: "DIRECTV",
      href: "/work/dtv01",
      logoSrc: "/company-logos/svg/directv-logo.svg",
      situation:
        "Upsell campaigns were taking 6 months to launch inside a shrinking subscriber base across 20+ systems.",
      whatIDid:
        "Built the operating model, intake/approval flow, and product ownership for the revenue journey.",
      results:
        "$55M Q4 Upsell Revenue, 60d Faster TTV",
    },
    {
      company: "Modere",
      href: "/work/modere",
      logoSrc: "/company-logos/svg/modere-logo.svg",
      situation:
        "Growth toward $1B was constrained by a brittle stack, market-by-market custom work, and delivery friction.",
      whatIDid:
        "Protected a composable architecture and aligned partners around one scalable system shape.",
      results:
        "$1B Revenue Target Hit, 43% Conversion Uplift, and 35% faster site performance.",
    },
    {
      company: "New York Life",
      href: "/work/newyorklife",
      logoSrc: "/company-logos/svg/new-york-life-logo.svg",
      situation:
        "Agent sites were slow, manual, and compliance-risky, with launches stretching from months to quarters.",
      whatIDid:
        "Designed multi-tenant governance workflows and permissions to make speed and control work together.",
      results:
        "200% Lead Gen Uplift, 12k+ Sites Launched, and launch times reduced from 6 months to 2 weeks.",
    },
    {
      company: "LEGO",
      href: "/work/lego",
      logoSrc: "/company-logos/svg/lego-logo.svg",
      situation:
        "The digital engagement layer lagged market expectations with cluttered navigation and inconsistent checkout behavior.",
      whatIDid:
        "Turned transformation goals into shippable product requirements across navigation, cart, and checkout.",
      results:
        "3x Revenue Growth, $50M Cost Savings, 24% digital sales uplift, and $25 AOV lift.",
    },
    {
      company: "Mrs. Meyer's",
      href: "/work/mm",
      logoSrc: "/company-logos/svg/mm-logo.svg",
      situation:
        "No DTC channel, no owned customer relationship, and enterprise systems not built for consumer commerce.",
      whatIDid:
        "Led the first end-to-end DTC stack integration and launch operating model across core systems.",
      results:
        "15% Revenue Uplift, 15% Brand GMV Uplift, and reuse across follow-on brands.",
    },
    {
      company: "Method",
      href: "/work/method",
      logoSrc: "/company-logos/svg/method-logo.svg",
      situation:
        "Strong brand equity but no DTC channel, with pressure to launch fast on shared enterprise rails.",
      whatIDid:
        "Ran fast-follow launch execution and translated shared platform capabilities into brand-right experience.",
      results:
        "20% Revenue Uplift, 3 Issue-Free Launches",
    },
    {
      company: "Frederick's of Hollywood",
      href: "/work/foh",
      logoSrc: "/tool-icons/svg/shopify-logo.svg",
      situation:
        "Post-bankruptcy relaunch needed to absorb celebrity traffic & promotions w/o heavy-stack overhead.",
      whatIDid:
        "Led lean Shopify Plus relaunch model and campaign-ready operating workflow.",
      results:
        "25% Lower TCO, 3x Promo ROI",
    },
    {
      company: "CPS Energy",
      href: "/work/cps",
      logoSrc: "/tool-icons/svg/cps-energy-logo.svg",
      situation:
        "Streetlight repair operations were fragmented across intake, SAP, dispatch, and field crews with unclear ownership.",
      whatIDid:
        "Led product and program design to connect resident reporting, field iPad workflows, and system integrations.",
      results:
        "73% Fewer CS Calls, 3w-4d Repair Window Cut",
    },
    {
      company: "Murad",
      href: "/work/murad",
      logoSrc: "/company-logos/svg/murad-logo.svg",
      situation:
        "Global replatform was unstable after agency churn, with unresolved order, payment, and subscription architecture risks.",
      whatIDid:
        "Owned architecture and launch escalation path to stabilize Oracle, BigCommerce, and subscription model execution.",
      results:
        "3 International Launchs, 11 Named Integrations",
    },
    {
      company: "Boehringer Ingelheim",
      href: "/work/bi",
      logoSrc: "/company-logos/svg/bi-logo.svg",
      situation:
        "Country-by-country B2B commerce fragmentation and ERP transition risk were slowing digital adoption.",
      whatIDid:
        "Defined a global reference model with controlled local variation and managed Oracle-to-SAP coexistence.",
      results:
        "10x Online Sales, 15%+ Order Throughput, and 12% fewer service escalations.",
    },
    {
      company: "K2 Sports",
      href: "/work/k2",
      logoSrc: "/tool-icons/svg/k2-sports-logo.png",
      situation:
        "Forced Demandware migration needed to support nine brand experiences without fragmenting operations.",
      whatIDid:
        "Designed the headless multi-brand architecture and integration strategy around one shared commerce engine.",
      results:
        "9 Sites Launched, 2 Custom Integrations, and 90% faster publishing.",
    },
    {
      company: "DIRECTV Everywhere",
      href: "/work/dtv02",
      logoSrc: "/company-logos/svg/directv-logo.svg",
      situation:
        "A national streaming promise was public before the product was operationally aligned across 35+ teams.",
      whatIDid:
        "Defined one product truth across parity, entitlement, and roadmap so execution could converge.",
      results:
        "5M+ Downloads, $200M Revenue Uplift.",
    },
  ],
  awards: [
    { rank: "[1]", year: "2025", title: "MACH Composable Award (Nominated)", source: "MACH Alliance" },
    { rank: "[2]", year: "2025", title: "Global Smart 20 Award (Won)", source: "Global Smart 20" },
    { rank: "[3]", year: "2016", title: "Harvard Business Review (Profiled)", source: "Harvard" },
    { rank: "[4]", year: "2016", title: "MIT Sloan Management (Profiled)", source: "MIT" },
  ],
  stats: {
    trustStats: [
      {
        value: "$1.3B+",
        title: "Commercial Impact",
        subtitle: "Delivered across a 20-year career",
      },
      {
        value: "75+",
        title: "Enterprise Programs",
        subtitle: "Led end-to-end",
      },
      {
        value: "40k",
        title: "Hours",
        subtitle: "Leading complex digital programs",
      },
      {
        value: "5",
        title: "Program Rescues",
        subtitle: "Brought in after prior PM or agency failed",
      },
    ],
    cards: [
      {
        // Edit the small dark badge in the Proven Results lead card.
        logoSrc: "/panels/02-interview/modere-logo-int.svg",
        logoAlt: "Modere",
        badgeValue: "$500M → $1B",
        title: "",
        subtitle: "Revenue growth enabled at Modere",
      },
      {
        logoSrc: "/company-logos/svg/directv-logo.svg",
        logoAlt: "DIRECTV",
        value: "$120M YoY",
        label: "Revenue uplift at DIRECTV",
      },
      {
        logoSrc: "/company-logos/svg/bi-logo.svg",
        logoAlt: "Boehringer Ingelheim",
        value: "$340M",
        label: "Online sales impact at Boehringer Ingelheim",
      },
      {
        logoSrc: "/company-logos/svg/directv-logo.svg",
        logoAlt: "DIRECTV",
        title: "$120M YoY",
        subtitle: "Revenue uplift at DIRECTV",
      },
      {
        value: "40k",
        label: "Hours leading projects",
      },
      {
        logoSrc: "/company-logos/svg/bi-logo.svg",
        logoAlt: "Boehringer Ingelheim",
        value: "$340M",
        suffix: "",
        summary: "Online sales impact at Boehringer Ingelheim",
      },
    ],
  },
  services: [
    {
      title: "Technical Program Management",
      description: "Delivering complex, multi-vendor enterprise digital transformation, re-platforming, and system integrations",
      icon: "uiux",
    },
    {
      title: "Technical Product Management",
      description: "Translating business strategy into prioritized backlogs, sprint cadences, and shippable outcomes",
      icon: "branding",
    },
    {
      title: "Solutioning & Business Analysis",
      description: "Diagnosing integration complexity across systems (ERP, OMS, PIM, commerce platforms, etc.)",
      icon: "graphic",
    },
    {
      title: "Digital Transformation",
      description: "Modernizing legacy platforms and business processes across enterprise systems at global scale",
      icon: "web",
    },
    {
      title: "Platform & Commerce Delivery",
      description: "End-to-end launch experience across Adobe Commerce, BigCommerce, Shopify, Oracle, SAP and composable",
      icon: "marketing",
    },
    {
      title: "Agentic AI & Automation",
      description: "Building and deploying AI-assisted workflows, compliance agents, and delivery tooling",
      icon: "motion",
    },
  ],
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
        company: "TechRound",
        date: "• July 2, 2026",
        summary: "Product Market Fit: Early Green Flags And Where To Look",
        tags: ["Article", "TechRound"],
        href: "https://techround.co.uk/guides/product-market-fit-early-green-flags-where-look/",
        external: true,
      },
      {
        company: "TechGrid",
        date: "• May 28, 2026",
        summary: "Product Managers: Train Your Robot to Find ROI. Then Sell the Idea to the Execs.",
        tags: ["Article", "TechGrid"],
        href: "https://techgrid.media/articles/product-managers-train-your-robot-to-find-roi-then-sell-the-idea-to-the-execs/",
        external: true,
      },
      {
        company: "Dataconomy",
        date: "• April 3, 2026",
        summary: "Your AI program has a data problem, you just don’t know it yet",
        tags: ["Interview", "Dataconomy"],
        href: "https://dataconomy.com/2026/04/03/your-ai-program-has-a-data-problem-you-just-dont-know-it-yet/",
        external: true,
      },
      {
        company: "The AI Journal",
        date: "• March 9, 2026",
        summary: "Before BOPIS went mainstream: James Markunas on pioneering one of the world's first true global omni-channel ecosystems for American Apparel across 16 countries",
        tags: ["Interview", "AI Journal"],
        href: "https://aijourn.com/before-bopis-went-mainstream-james-markunas-on-pioneering-one-of-the-worlds-first-true-global-omni-channel-ecosystems-for-american-apparel-across-16-countries/",
        external: true,
      },
      {
        company: "TechGrid",
        date: "• February 25, 2026",
        summary: "Is AI making companies smarter or just more efficient at bad management?",
        tags: ["Interview", "TechGrid"],
        href: "https://techgrid.media/interviews/is-ai-making-companies-smarter-or-just-more-efficient-at-bad-management/",
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
    services?: Partial<HomepageText["sections"]["services"]>
    insights?: Partial<HomepageText["sections"]["insights"]>
    testimonials?: Partial<HomepageText["sections"]["testimonials"]>
    journey?: Partial<HomepageText["sections"]["journey"]>
  }
  experienceEngagements?: HomepageText["experienceEngagements"]
  awards?: HomepageText["awards"]
  stats?: Partial<HomepageText["stats"]>
  services?: HomepageText["services"]
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
      services: {
        ...fallbackHomepageText.sections.services,
        ...(homepageText.sections?.services ?? {}),
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
    experienceEngagements: homepageText.experienceEngagements ?? fallbackHomepageText.experienceEngagements,
    awards: homepageText.awards ?? fallbackHomepageText.awards,
    stats: { ...fallbackHomepageText.stats, ...(homepageText.stats ?? {}) },
    services: homepageText.services ?? fallbackHomepageText.services,
    testimonials: homepageText.testimonials ?? fallbackHomepageText.testimonials,
    testimonial: { ...fallbackHomepageText.testimonial, ...(homepageText.testimonial ?? {}) },
    journey: homepageText.journey ?? fallbackHomepageText.journey,
  }
}

export default getHomepageText
