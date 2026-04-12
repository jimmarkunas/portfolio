import type { CaseStudyData } from "@/content/case-studies/types"
import { k2Copy } from "@/content/case-studies/chunks/k2.copy"
import { k2Diagram } from "@/content/case-studies/chunks/k2.diagram"

export const k2CaseStudy = {
  slug: "k2",
  breadcrumbCurrent: "K2 Sports",
  hero: {
    title: "Headless/Composable Commerce for 9 K2 Brands",
    intro: k2Copy.heroIntro,
    primaryCta: {
      label: "Book a Call",
      href: "https://calendar.app.google/iwn5AUyWqJadMK2t9",
      external: true,
    },
    secondaryCta: {
      label: "View CV",
      href: "/cv",
    },
    image: {
      src: "/k2/hero-k2-01.png",
      alt: "K2 Sports headless multi-brand commerce transformation hero image",
    },
  },
  atAGlance: {
    eyebrow: "At-a-Glance",
    title: "One Engine, Many Brands",
    copy: k2Copy.atAGlanceCopy,
    stats: [
      { value: "9", suffix: "", label: "Sites Launched" },
      { value: "75", suffix: "%", label: "Faster Site Creation" },
      { value: "90", suffix: "%", label: "Faster Publishing" },
      { value: "2", suffix: "", label: "Custom Integrations" },
    ],
  },
  problem: {
    eyebrow: "Problem Statement",
    title: "Forced Migration, No Plan",
    media: {
      kind: "image",
      src: "/k2/modal-k2-01.png",
      alt: "K2 Sports headless commerce architecture and scoping artifacts",
      aspectRatio: "16/9",
    },
    overview: k2Copy.problemOverview,
    projectOverviewRows: [
      { label: "Client", value: "K2 Sports" },
      { label: "Industry", value: "Sporting Goods • Multi-Brand Commerce • Headless" },
      { label: "Timeline", value: "2020" },
    ],
    tools: [
      { label: "BigCommerce", icon: "/tool-icons/svg/bc-logo-blk.svg" },
      { label: "Contentstack", icon: "/tool-icons/svg/contentstack-logo.svg" },
      { label: "WordPress", icon: "/tool-icons/svg/wordpress-logo.svg" },
      { label: "Quivers", icon: "/tool-icons/svg/quivers-logo.svg" },
    ],
    quote: {
      quote:
        "The challenge wasn't just replacing Demandware. It was making 9 storefronts, multiple systems, and business users all work together in one system.",
      attributionTitle: "Nicole Phillips",
      attributionSubtitle: "Director of eCommerce, K2",
      avatarSrc: "/k2/nicole-phillips.jpeg",
    },
  },
  role: {
    eyebrow: "My Role",
    title: "Program Manager & Solution Architect",
    copy: k2Copy.roleCopy,
    tags: [
      "Headless Commerce",
      "Program Leadership",
      "Multi-Brand Architecture",
      "Integration Strategy",
    ],
    stats: [
      { value: "9", suffix: "", label: "brand sites" },
      { value: "$1.5", suffix: "M", label: "program budget" },
      { value: "4", suffix: "", label: "team size" },
      { value: "1", suffix: "", label: "shared engine" },
    ],
    narrative: {
      title: "I Made Headless Commerce Work for Business Users",
      paragraphs: k2Copy.roleNarrative.paragraphs,
      highlights: k2Copy.roleNarrative.highlights,
      closing: k2Copy.roleNarrative.closing,
    },
  },
  solution: {
    eyebrow: "Solution",
    title: "Headless, But Actually Operable",
    copy: k2Copy.solutionCopy,
    cards: [],
    diagram: k2Diagram,
  },
  supplementalNarrative: {
    title: "This Was a Headless Multi-Store Monolith in Disguise",
    paragraphs: k2Copy.supplementalNarrative.paragraphs,
    highlights: k2Copy.supplementalNarrative.highlights,
    closing: k2Copy.supplementalNarrative.closing,
  },
  impact: {
    eyebrow: "Impact",
    title: "Speed, Scale, Lower TCO",
    intro: k2Copy.impactIntro,
    proofPoints: ["Launch Speed", "Business Control", "Lower TCO"],
    stats: [
      { value: "9", suffix: "", label: "Sites Launched" },
      { value: "75", suffix: "%", label: "Faster Site Creation" },
      { value: "90", suffix: "%", label: "Faster Publishing" },
      { value: "2", suffix: "", label: "Custom BC Integrations" },
    ],
    beforeAfter: {
      title: "Before & After",
      summary: k2Copy.impactBeforeAfterSummary,
      columns: [
        {
          label: "Before",
          title: "Fragile Model",
          points: [
            "Demandware was dying + K2 had no clean multi-brand SaaS plan.",
            "Reconciliation across systems was too manual & noisy.",
            "Marketing flexibility & operations were pulling in opposite directions.",
          ],
        },
        {
          label: "After",
          title: "Reusable + Operable",
          points: [
            "9 sites launched in under 9 months on one reusable headless pattern.",
            "Site publishing accelerated by 90%.",
            "K2 gained more control w/o engineering bottlenecks.",
          ],
        },
      ],
    },
    journeySteps: [
      {
        step: "1",
        title: "Designed One Engine",
        copy: k2Copy.impactJourneyStepCopies[0],
      },
      {
        step: "2",
        title: "Kept the Truth in the Right Place",
        copy: k2Copy.impactJourneyStepCopies[1],
      },
      {
        step: "3",
        title: "Made It Work at Speed",
        copy: k2Copy.impactJourneyStepCopies[2],
      },
    ],
  },
  delivery: {
    eyebrow: "Implementation",
    title: "Delivery Phases",
    introTitle: "How I Made the Portfolio Manageable",
    introCopy: k2Copy.deliveryIntroCopy,
    phases: [
      {
        phase: "Phase 01",
        title: "Diagnose",
        copy: "Mapped gaps across Demandware, reconciliation pain, source-system ownership.",
        ringClass: "border-[#D39D23]",
        labelClass: "text-[#D39D23]",
      },
      {
        phase: "Phase 02",
        title: "Architect",
        copy: "Defined the shared engine, centralized API, proxy, and source-of-truth model.",
        ringClass: "border-[#5E7FB7]",
        labelClass: "text-[#5E7FB7]",
      },
      {
        phase: "Phase 03",
        title: "Protect",
        copy: "Solved the DNS, SEO, and routing risks so the migration wouldn't destroy traffic.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 04",
        title: "Launch",
        copy: "Rolled the architecture across 9 storefronts while keeping system truth stable.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 05",
        title: "Scale",
        copy: "Left behind a reusable multi-brand pattern that K2 and BC applied to future work.",
        ringClass: "border-[#3E7BE0]",
        labelClass: "text-[#3E7BE0]",
      },
    ],
  },
  challengeQuote: {
    quote: k2Copy.challengeQuote,
    attributionTitle: "Nicole Phillips",
    attributionSubtitle: "Director of eCommerce, K2",
    avatarSrc: "/k2/nicole-phillips.jpeg",
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Press & Accolades",
    intro: k2Copy.recognitionIntro,
    rows: [
      {
        company: "Headless Commerce vs Microservices: Thorough Comparison",
        source: "Magenest",
        dates: "December 18, 2023",
        summary:
          "Magenest compared headless commerce and microservices architectures, citing K2 Sports as an example of headless commerce done right — one backend engine delivering differentiated brand experiences across multiple storefronts.",
        tags: ["Case Study", "Magenest"],
        file: "/k2/files/2023-12-18_magenest-casestudy-01.pdf",
      },
      {
        company: "Headless Commerce Success Stories: 3 Brands Solving Tough Challenges with Innovative Tech",
        source: "BigCommerce",
        dates: "November 9, 2021",
        summary:
          "BigCommerce featured K2 alongside three other brands as a headless commerce success story — 8 brands and 16 sites launched in under 9 months, with 75% faster site creation, 90% faster content publishing, and a 50% productivity boost.",
        tags: ["Case Study", "BigCommerce"],
        file: "/k2/files/2021-11-09_bc-casestudy-02.pdf",
      },
      {
        company: "Mastering Composable Content: An Essential Strategy for Modern Businesses",
        source: "Contentstack",
        dates: "February 18, 2020",
        summary:
          "Contentstack used K2 Sports to illustrate composable content strategy in practice — citing 75% faster websites and 90% faster content publishing as evidence that structured, API-driven content architecture delivers measurable operational gains.",
        tags: ["Case Study", "Contentstack"],
        file: "/k2/files/2020-02-18cs-casestudy-02.pdf",
      },
      {
        company: "Agile Development: Building Composable Software for Digital Efficiency",
        source: "Contentstack",
        dates: "February 15, 2020",
        summary:
          "Contentstack cited K2 Sports as a real-world example of composable software in practice, referencing 75% faster site implementation, 90% faster content delivery, and 50% productivity gains from the headless architecture.",
        tags: ["Case Study", "Contentstack"],
        file: "/k2/files/2020-02-15_cs-casestudy-01.pdf",
      },
      {
        company: "K2 Sports",
        source: "BigCommerce",
        dates: "January 18, 2020",
        summary:
          "BigCommerce's dedicated K2 case study documented the migration from Salesforce Commerce Cloud to a headless stack built on BigCommerce and Contentstack — launching 8 brands and 16 sites in under 9 months, with 75% faster site creation, 90% faster content publishing, and a 50% productivity boost.",
        tags: ["Case Study", "BigCommerce"],
        file: "/k2/files/2020-01-18_bc-casestudy-01.pdf",
      },
    ],
  },
} satisfies CaseStudyData
