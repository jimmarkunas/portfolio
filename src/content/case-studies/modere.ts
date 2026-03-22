import type { CaseStudyData } from "@/components/case-study/types"

export const modereCaseStudy = {
  slug: "modere",
  breadcrumbCurrent: "Modere",
  hero: {
    title: "I Helped Turn Modere's Stuck Commerce Stack Into a Scalable Growth Engine",
    intro:
      "Modere wanted to grow from a $500M business into a $1B one, but the company had outgrown its home-grown commerce stack, its launch model, and its tolerance for market-by-market custom work. I helped reimagine the platform around a composable architecture, protected the right product and system decisions under heavy political pressure, and gave the business a faster, cleaner way to scale across web, mobile, markets, and promotions. The result was a stronger commerce foundation that supported real sales growth, better conversion, faster performance, and a path to scale.",
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
      src: "/modere/hero-modere-01.png",
      alt: "Modere composable commerce platform hero image",
    },
  },
  atAGlance: {
    eyebrow: "At-a-Glance",
    title: "Commerce at Scale",
    copy:
      "I helped redesign Modere's digital commerce foundation so the business could grow without rebuilding itself every time it entered a market, launched a promotion, or added a new channel. The work connected web, mobile, product data, content, payments, and promotion logic into one composable system the business could actually use.",
    stats: [
      { value: "$1", suffix: "B", label: "revenue target reached" },
      { value: "43", suffix: "%+", label: "conversion uplift" },
      { value: "35", suffix: "%", label: "faster page loads" },
      { value: "10", suffix: "+", label: "markets supported" },
    ],
  },
  problem: {
    eyebrow: "Problem Statement",
    title: "A Platform That Couldn't Scale",
    media: {
      kind: "image",
      src: "/modere/hero-modere-02.png",
      alt: "Modere global commerce and architecture overview",
      aspectRatio: "16/9",
    },
    overview:
      "Modere did not have a growth problem, it had a scale problem. Leadership wanted to break through a $500M ceiling and push the business toward $1B, but the existing stack was too brittle, too custom, and too dependent on engineers to support that ambition cleanly. Affiliate signup, checkout, promotions, mobile, and market expansion all carried too much friction, and internal politics were making a hard problem even harder.",
    projectOverviewRows: [
      { label: "Client", value: "Modere" },
      { label: "Industry", value: "Health & Beauty • Global DTC Commerce • Affiliate Commerce" },
      { label: "Timeline", value: "Mar 2023 to Jun 2024" },
    ],
    tools: [
      { label: "BigCommerce", icon: "/tool-icons/bc-logo.png" },
      { label: "Pimcore", icon: "/tool-icons/pimcore-logo.png" },
      { label: "Contentstack", icon: "/tool-icons/contentstack-logo.png" },
      { label: "Braintree", icon: "/tool-icons/braintree-logo.png" },
      { label: "Klarna", icon: "/tool-icons/klarna-logo.png" },
      { label: "Azure", icon: "/tool-icons/msazure-logo.png" },
    ],
    quote: {
      quote: "We can't keep scaling this business market by market on custom work; we need a scalable solution.",
      attributionTitle: "Shan Sullivan",
      attributionSubtitle: "SVP, Technology, Modere",
      avatarSrc: "/modere/shan-sullivan.png",
    },
  },
  role: {
    eyebrow: "My Role",
    title: "Senior Product Manager & Program Manager",
    copy:
      "I sat at the center of product, program leadership, and architecture judgment. My job was to protect the right composable vision, guide the business through the politics around it, and keep the platform from collapsing into another expensive half-measure.",
    tags: [
      "Product Leadership",
      "Program Leadership",
      "Composable Commerce",
      "Architecture Direction",
    ],
    stats: [
      { value: "20", suffix: "", label: "team size" },
      { value: "$6", suffix: "M", label: "program budget" },
      { value: "20", suffix: "+", label: "system integrations" },
      { value: "16", suffix: " mo", label: "program timeline" },
    ],
    narrative: {
      title: "I Protected the Right Architecture Under Pressure",
      paragraphs: [
        "This project was not hard just because of the technology. It was hard because leadership wanted growth, the business had outgrown its home-grown stack, and internal politics were working against the re-platform. I saw early that the original agency was not going to build the platform Modere actually needed, and I helped bring in the right partner to make the architecture real instead of theoretical.",
        "The three decisions that mattered most were insisting on a truly composable model, choosing a thin commerce layer instead of burying business logic in the wrong place, and using Pimcore as the product brain. That gave Modere a cleaner way to manage products, pricing, promotions, and market complexity, while keeping content, checkout, and mobile experiences aligned around one core system.",
      ],
      highlights: [
        "Insisted on a composable architecture instead of another brittle all-in-one rebuild.",
        "Helped select the right agency partner and protected the platform vision when politics threatened to derail it.",
        "Positioned Pimcore as the product brain, with a thin commerce layer and cleaner separation of concerns.",
      ],
      closing:
        "The value I brought here was not just delivery, it was leadership and judgment when the wrong technical and political decisions would have cost the business years.",
    },
  },
  solution: {
    eyebrow: "Solution",
    title: "One Commerce System, Many Growth Paths",
    copy:
      "I helped shape a composable, API-first commerce platform that could support product complexity, promotions, subscriptions, global markets, and mobile experiences without forcing the business back into custom work every time it wanted to grow. The solution was designed to make commerce more scalable for the business and less painful for affiliates and customers.",
    cards: [
      {
        category: "Architecture",
        readTime: "Composable Core",
        title: "I helped move Modere away from a brittle home-grown stack and toward a composable model built around BigCommerce, Pimcore, Contentstack, and a custom promotion engine.",
        art: "/modere/product-modere-01.png",
      },
      {
        category: "Product Logic",
        readTime: "Pimcore as Brain",
        title: "I treated Pimcore as the product brain so the business could manage product data, pricing, inventory, promotions, and global catalog logic more cleanly across channels and markets.",
        art: "/modere/product-modere-02.png",
      },
      {
        category: "Mobile & Growth",
        readTime: "Shared Engine",
        title: "I helped make one shared commerce and content engine work across web and mobile, including a wrapper-based app approach that supported 10 markets and 7 languages without rebuilding features natively.",
        art: "/modere/product-modere-03.png",
      },
    ],
  },
  supplementalNarrative: {
    title: "The Real Win Was Business Independence",
    image: "/modere/hero-modere-03.png",
    paragraphs: [
      "Before this work, too much of Modere's growth depended on engineers. New promotions, market changes, product updates, and affiliate-facing experiences all carried unnecessary friction because the stack was not built to separate business logic cleanly from presentation and execution.",
      "After the redesign, business teams had a much clearer path to launch and manage products and promotions by working through the right systems instead of opening engineering tickets for everything. That made the platform faster, more scalable, and more commercially useful, which is the whole point of good commerce architecture.",
    ],
    highlights: [
      "Business teams gained more control over products and promotions without waiting on engineering for every change.",
      "One core system supported web and mobile growth across 10+ markets and 7 languages.",
    ],
    closing:
      "This is what good platform work looks like, less friction for the business, less chaos for the teams, and more room for revenue to show up.",
    closingImage: "/modere/hero-modere-05.png",
  },
  impact: {
    eyebrow: "Impact",
    title: "Growth, Conversion, and Scale",
    intro:
      "This platform mattered because it helped turn architectural discipline into commercial performance. The business gained a path to scale, affiliates got a better buying and signup experience, and the underlying system became faster, cleaner, and easier to grow.",
    proofPoints: ["Revenue", "Conversion", "Scale"],
    stats: [
      { value: "$500", suffix: "M–$1B", label: "company growth" },
      { value: "43", suffix: "%+", label: "conversion uplift" },
      { value: "35", suffix: "%", label: "faster page loads" },
      { value: "4", suffix: " wk", label: "app launch timeline" },
    ],
    statsImage: "/modere/hero-modere-04.png",
    beforeAfter: {
      title: "Before & After",
      summary:
        "Modere moved from brittle, engineer-dependent commerce operations to a platform the business could actually scale.",
      columns: [
        {
          label: "Before",
          title: "Custom Work and Friction",
          points: [
            "Growth was constrained by a stack that had outgrown the business.",
            "Affiliate signup, checkout, promotions, and mobile all carried unnecessary friction.",
            "New markets and changes created more custom work than leverage.",
          ],
        },
        {
          label: "After",
          title: "Composable and Scalable",
          points: [
            "The business had a platform built to support growth across markets, products, and channels.",
            "Customers and affiliates saw less friction, better performance, and stronger commerce flows.",
            "Modere gained a cleaner path to revenue growth, mobile expansion, and operational self-sufficiency.",
          ],
        },
      ],
    },
    journeySteps: [
      { step: "1", title: "See the Real Risk", copy: "I recognized early that the business was trying to scale on the wrong technical foundation and with the wrong delivery partner." },
      { step: "2", title: "Protect the Architecture", copy: "I pushed for composable, kept the commerce layer thin, and used Pimcore as the product brain so the system could support growth instead of fighting it." },
      { step: "3", title: "Turn Platform Work Into Revenue", copy: "The cleaner system reduced friction, improved performance, supported subscriptions and mobile, and helped the business move from a $500M ceiling toward $1B." },
    ],
  },
  delivery: {
    eyebrow: "Implementation",
    title: "Delivery Phases",
    introTitle: "How I Helped Make It Real",
    introCopy:
      "This was not a simple re-platform. It was a politically charged transformation that needed stronger architecture, the right partner ecosystem, and enough operational discipline to move from concept to launch without caving to bad compromises.",
    phases: [
      { phase: "Phase 01", title: "Diagnose", copy: "Mapped the business bottlenecks, legacy stack risks, and the reasons the current path would not support growth cleanly.", ringClass: "border-[#D39D23]", labelClass: "text-[#D39D23]" },
      { phase: "Phase 02", title: "Align", copy: "Helped align executives, product, vendors, and agency partners around a composable direction the business could actually scale.", ringClass: "border-[#5E7FB7]", labelClass: "text-[#5E7FB7]" },
      { phase: "Phase 03", title: "Design", copy: "Protected the system shape, with a thin commerce layer, Pimcore as the product brain, and the right separation between commerce, content, and promotion logic.", ringClass: "border-[#1A9E9A]", labelClass: "text-[#1A9E9A]" },
      { phase: "Phase 04", title: "Build", copy: "Connected BigCommerce, Pimcore, Contentstack, payments, fraud, tax, search, and mobile into one scalable platform.", ringClass: "border-[#1A9E9A]", labelClass: "text-[#1A9E9A]" },
      { phase: "Phase 05", title: "Launch", copy: "Delivered a faster, more scalable commerce system across web and mobile, with stronger conversion, better performance, and a clearer path to growth.", ringClass: "border-[#3E7BE0]", labelClass: "text-[#3E7BE0]" },
    ],
  },
  challengeQuote: {
    quote: "Jim protected the architecture and kept the team from building the wrong thing.",
    attributionTitle: "Chris Beck",
    attributionSubtitle: "CTO, Modere",
    avatarSrc: "/modere/chris-beck.png",
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Recognition & Validation",
    intro:
      "The strongest proof here is that the architecture did not just look good on a slide. It earned outside validation from platform partners and was strong enough to be recognized in the MACH ecosystem as a serious composable commerce implementation.",
    featured: {
      media: {
        kind: "image",
        src: "/modere/hero-modere-06.png",
        alt: "MACH Impact Awards nomination for Modere composable commerce architecture",
        aspectRatio: "16/9",
      },
      company: "MACH Impact Awards",
      dates: "2025",
      summary: "Modere's commerce architecture was nominated for a MACH Impact Award, reinforcing that this was not just a migration, it was a serious composable commerce transformation.",
      tags: ["Award", "Composable Commerce"],
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
