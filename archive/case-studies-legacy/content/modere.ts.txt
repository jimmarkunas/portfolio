import type { CaseStudyData } from "@/content/case-studies/types"
import { defaultCaseStudyPrimaryCta } from "@/content/case-studies/shared"

export const caseStudy = {
  slug: "modere",
  breadcrumbCurrent: "Modere",
  hero: {
    title: "Winning Awards And Making $1B With Modere",
    intro:
      "Work Nominated for a MACH Composable Award: Modere wanted to double from $500M GMV to $1B, but the old stack and market-by-market launch model were already breaking under the weight. I helped push the platform toward a composable architecture and protect the system decisions that gave the business a cleaner path to scale.",
    primaryCta: defaultCaseStudyPrimaryCta,
    secondaryCta: {
      label: "View CV",
      href: "/cv",
    },
    image: {
      src: "/modere/hero-modere-01.png",
      alt: "Modere composable commerce platform hero image",
    },
  },
  atAGlance: {
    eyebrow: "At-a-Glance",
    title: "Commerce at Scale",
    copy:
      "I helped redesign Modere’s commerce foundation so the business could scale into new markets, promotions, and channels without rebuilding the stack each time. The result was one composable system across web, mobile, product data, content, payments, and promotions.",
    stats: [
      { value: "$1B", suffix: "", label: "Revenue Target Reached" },
      { value: "43", suffix: "%", label: "Conversion Uplift" },
      { value: "35", suffix: "%", label: "Faster Site" },
      { value: "10", suffix: "", label: "Markets Supported" },
    ],
  },
  problem: {
    eyebrow: "Problem Statement",
    title: "Platform Couldn't Scale",
    media: {
      kind: "image",
      src: "/modere/hero-modere-02.png",
      alt: "Modere global commerce and architecture overview",
      aspectRatio: "16/9",
    },
    overview:
      "Modere wasn’t short on demand. It was short on scale. Leadership wanted to break past $500M and push toward $1B, but the existing stack was too brittle, too custom, and too dependent on engineers to get there cleanly. Affiliate signup, checkout, promotions, mobile, and market expansion were all dragging, and the politics around the work made it harder.",
    projectOverviewRows: [
      { label: "Client", value: "Modere" },
      { label: "Industry", value: "Health & Beauty • Affiliate Commerce" },
      { label: "Timeline", value: "Mar 2023 - Jun 2024" },
    ],
    tools: [
      { label: "BigCommerce", icon: "/tool-icons/svg/bc-logo-blk.svg" },
      { label: "Pimcore", icon: "/tool-icons/svg/pimcore-logo.svg" },
      { label: "Contentstack", icon: "/tool-icons/svg/contentstack-logo.svg" },
      { label: "Azure", icon: "/tool-icons/svg/azure-logo.svg" },
    ],
    quote: {
      quote: "We can't keep scaling this business market by market on custom work; we need a scalable solution.",
      attributionTitle: "Shan Sullivan",
      attributionSubtitle: "SVP, Technology, Modere",
      avatarSrc: "/modere/shan-sullivan.jpeg",
    },
  },
  role: {
    eyebrow: "My Role",
    title: "Senior Product Manager & Program Manager",
    copy:
      "I sat at the center of product, program, and architecture. My job was to hold the composable vision through the politics and stop the platform from collapsing into another expensive half-measure.",
    tags: [
      "Product Leadership",
      "Program Leadership",
      "Composable Commerce",
      "Architecture Direction",
    ],
    stats: [
      { value: "20", suffix: "+", label: "System Integrations" },
      { value: "$6", suffix: "M", label: "Program Budget" },
      { value: "20", suffix: "", label: "Team Size" },
      { value: "16", suffix: " mo", label: "Program Timeline" },
    ],
    narrative: {
      title: "I Protected the Right Architecture Under Pressure",
      paragraphs: [
        "This wasn’t just a technology problem. Modere had outgrown its home-grown stack, leadership wanted growth, and internal politics were dragging the re-platform off course. I saw early that the original agency wasn’t going to deliver the right platform, so I helped bring in the right partner and make the architecture real.",
        "Three decisions shaped the platform: protect the composable model, keep business logic out of the commerce layer, and make Pimcore the product brain. That gave Modere a cleaner way to manage products, pricing, promotions, and market complexity without letting content, checkout, and mobile drift into separate systems.",
      ],
      highlights: [
        "Insisted on a composable architecture instead of another brittle all-in-one rebuild.",
        "Helped select the right agency partner and protected the platform vision when politics threatened to derail it.",
        "Positioned Pimcore as the product brain, with a thin commerce layer and cleaner separation of concerns.",
      ],
      closing:
        "I brought leadership + judgment when the wrong technical & political decisions were costing Modere time and money.",
    },
  },
  solution: {
    eyebrow: "Solution",
    title: "One Commerce System, Many Growth Paths",
    copy:
      "I shaped a composable, API-first commerce platform designed for scalability & less pain for affiliates & customers. What would YOU do if I weren't around?",
    diagramKey: "modere-simulation",
    cards: [
      {
        category: "Architecture",
        readTime: "Composable Core",
        title: "I helped move Modere away from a brittle home-grown stack and toward a composable model built around BigCommerce, Pimcore, Contentstack, and a custom promotion engine.",
        art: "olive",
      },
      {
        category: "Product Logic",
        readTime: "Pimcore as Brain",
        title: "I treated Pimcore as the product brain so the business could manage product data, pricing, inventory, promotions, and global catalog logic more cleanly across channels and markets.",
        art: "olive",
      },
      {
        category: "Mobile & Growth",
        readTime: "Shared Engine",
        title: "I helped make one shared commerce and content engine work across web and mobile, including a wrapper-based app approach that supported 10 markets and 7 languages without rebuilding features natively.",
        art: "olive",
      },
    ],
  },
  supplementalNarrative: {
    title: "The Real Win Was Business Independence",
    paragraphs: [
      "Engineering had become the bottleneck for too much of Modere’s growth. Promotions, market changes, product updates, and affiliate experiences all carried avoidable friction because the stack didn’t separate business logic cleanly from presentation and execution.",
      "The redesign took routine commercial work out of engineering’s hands. Business teams could launch and manage products and promotions through the right systems, which made the platform faster, easier to scale, and more commercially useful.",
    ],
    highlights: [
      "Business teams gained more control over products & promotions without waiting on IT.",
      "One core system supported web and mobile growth across 10+ markets and 7 languages.",
    ],
    closing:
      "This is what good platform work looks like, less friction for the business, less chaos for the teams, and more room for revenue growth.",
  },
  impact: {
    eyebrow: "Impact",
    title: "Growth, Conversion, and Scale",
    intro:
      "The architecture turned interconnected systems into commercial leverage: a better path to scale, better affiliate experience, and a system built for growth.",
    proofPoints: ["Revenue", "Conversion", "Scale"],
    stats: [
      { value: "$1B", suffix: "", label: "Revenue Growth" },
      { value: "43", suffix: "%", label: "Conversion Uplift" },
      { value: "35", suffix: "%", label: "Site Speed" },
      { value: "4", suffix: " wk", label: "Mobile Launch Timeline" },
    ],
    beforeAfter: {
      title: "Before & After",
      summary:
        "Modere moved from brittle, engineer-dependent commerce operations to a platform the business could scale.",
      columns: [
        {
          label: "Before",
          title: "Custom Work + Friction",
          points: [
            "Growth was constrained by an old system stack.",
            "Affiliate signup, checkout, promotions, and mobile carried friction.",
            "New markets created more custom work than leverage.",
          ],
        },
        {
          label: "After",
          title: "Composable + Scalable",
          points: [
            "The business had a platform built to support growth across channels.",
            "Customers & affiliates saw less friction and stronger commerce flows.",
            "Modere gained a cleaner path to revenue growth.",
          ],
        },
      ],
    },
    journeySteps: [
      { step: "1", title: "Ferret Out Risks", copy: "I recognized early that the business was trying to scale on the wrong technical foundation and with the wrong delivery partner." },
      { step: "2", title: "Protect the Architecture", copy: "I pushed for composable, kept the commerce layer thin, and used Pimcore as the product brain so the system could support growth instead of fighting it." },
      { step: "3", title: "Turn Systems Into Revenue", copy: "The cleaner system reduced friction, improved performance, supported subscriptions and mobile, and helped the business move from a $500M ceiling toward $1B." },
    ],
  },
  delivery: {
    eyebrow: "Implementation",
    title: "Delivery Phases",
    introTitle: "How I Helped Make It Real",
    introCopy:
      "This wasn’t a simple re-platform. It was a political transformation that needed stronger architecture, the right partners, and the discipline to avoid bad compromises.",
    phases: [
      { phase: "Phase 01", title: "Diagnose", copy: "Mapped the business bottlenecks, legacy stack risks, and growth blockers.", ringClass: "border-[#D39D23]", labelClass: "text-[#D39D23]" },
      { phase: "Phase 02", title: "Align", copy: "Aligned executives, product, vendors, and agency partners.", ringClass: "border-[#5E7FB7]", labelClass: "text-[#5E7FB7]" },
      { phase: "Phase 03", title: "Design", copy: "Protected the system shape, with a thin commerce layer.", ringClass: "border-[#1A9E9A]", labelClass: "text-[#1A9E9A]" },
      { phase: "Phase 04", title: "Build", copy: "Connected BC, Pimcore, Contentstack, payments, and mobile into one.", ringClass: "border-[#1A9E9A]", labelClass: "text-[#1A9E9A]" },
      { phase: "Phase 05", title: "Launch", copy: "Delivered a faster, more scalable commerce system across platforms.", ringClass: "border-[#3E7BE0]", labelClass: "text-[#3E7BE0]" },
    ],
  },
  star: {
    situation:
      "Every country was building its own version of the product. Nothing was shared. The company was trying to hit $1B in revenue but the technology was holding it back.",
    task: "Stop every team from building their own thing. Get all partners using one shared, scalable system.",
    actions: [
      "Defined a single architecture every market had to follow",
      "Aligned three vendors around one shared delivery plan",
      "Eliminated one-off custom builds market by market",
      "Protected the architecture from scope creep and vendor drift",
    ],
    results: [
      { value: "$1B", label: "Revenue target hit", variant: "primary" },
      { value: "43%", label: "Conversion uplift", variant: "secondary" },
      { value: "65%+", label: "GTM acceleration", variant: "default" },
    ],
  },
  challengeQuote: {
    quote: "Jim protected the architecture and kept the team from building the wrong thing.",
    attributionTitle: "Chris Beck",
    attributionSubtitle: "CTO, Modere",
    avatarSrc: "/modere/chris-back.jpeg",
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Press & Recognition",
    intro:
      "The architecture didn't just look good on a slide. It earned and award nomination, outside validation from platform partners, and was strong enough to be recognized in the MACH ecosystem as a serious composable commerce implementation.",
    leadImage: {
      src: "/modere/mach-award.png",
      alt: "MACH Alliance Impact Award nomination for Modere composable commerce",
      badge: "2025 MACH Award Nominee. See below for public case studies",
    },
    rows: [
      {
        company: "MACH Impact Award Nomination for Composable Commerce",
        source: "MACH Alliance",
        dates: "2025",
        summary: "The MACH Alliance nominated Modere's composable commerce architecture for a MACH Impact Award, recognizing it as a serious real-world implementation of composable, best-of-breed commerce.",
        tags: ["Award", "Composable Commerce"],
        file: "/modere/files/05-mach-alliance-award.pdf",
      },
      {
        company: "A B2C Replatform for a Global Retailer",
        source: "Guidance",
        dates: "2024",
        summary: "Guidance documented Modere's headless BigCommerce implementation across seven markets, including custom promotions, shareable cart behavior, and deep back-office integrations.",
        tags: ["Case Study", "Guidance"],
        file: "/modere/files/01-guidance-modere-case-study.pdf",
      },
      {
        company: "Modere Drives Social Commerce Growth With Hamari",
        source: "Hamari",
        dates: "2024",
        summary: "Hamari documented how Modere used its referral and social commerce platform to drive customer acquisition and loyalty growth across the new composable commerce stack.",
        tags: ["Case Study", "Social Commerce"],
        file: "/modere/files/02-hamari-modere-case-study.pdf",
      },
      {
        company: "Scaling Product Data and Global Inventory With Pimcore",
        source: "Pimcore",
        dates: "2024",
        summary: "Pimcore highlighted how Modere centralized product data, pricing, and inventory logic across 4,000+ SKUs and 26 global warehouses while reducing time to market and duplicated data.",
        tags: ["Case Study", "Pimcore"],
        file: "/modere/files/03-pimcore-modere-case-study.pdf",
      },
      {
        company: "Launching a 7-Language, 10-Market Mobile App in Four Weeks",
        source: "MobiLoud",
        dates: "2024",
        summary: "MobiLoud documented how Modere launched a wrapper-based mobile app strategy across 10 markets and 7 languages in four weeks on a single codebase.",
        tags: ["Case Study", "Mobile"],
        file: "/modere/files/04-mobiloud-modere-case-study.pdf",
      },
    ],
  },
} satisfies CaseStudyData
