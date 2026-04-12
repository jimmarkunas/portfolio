import type { CaseStudyData, DiagramData } from "@/content/case-studies/types"

export const k2Copy = {
  heroIntro: `K2 Sports was being forced off a dying Demandware stack, but they still wanted each brand to feel distinct while finance & operations wanted one manageable engine underneath everything. I led the program and solution architecture that turned that mess into a headless multi-brand model, with BigCommerce powering commerce, WordPress and Contentstack powering the front end, and Avante plus Quivers staying the source of truth.`,
  atAGlanceCopy: `This was a forced replatform, but it became something much more valuable. I turned a brittle migration problem into a reusable headless commerce pattern that let nine K2 brands share one backend engine while still preserving brand-specific front ends, regional logic, and business-user control.`,
  problemOverview: `Demandware was sunsetting, reconciliation across systems was too manual, and nobody had a clean answer for how Quivers, Avante, payments, CMS, SEO, and nine storefronts were supposed to work together in SaaS. Marketing wanted every brand to keep its own look and feel. Finance and operations wanted one reliable engine under everything. The business needed a model that could move at speedboat speed without turning headless commerce into an engineering science project.`,
  roleCopy: `I owned the multi-brand architecture, integration strategy, program execution, and the political work required to get 9 storefronts moving on one clean model. I was the architecture lead, the traffic cop, the SEO & cutover risk manager, and the one person pulling the right people together to make the hard calls.`,
  roleNarrative: {
    paragraphs: [
      `K2 didn’t need another platform swap. It needed a multi-store, multi-brand ecosystem built from scratch that could serve marketing, finance, and operations without forcing BigCommerce to do an ERP’s job.`,
      `I turned 9 stores into one manageable system, pushed our partnership team to approve a custom Quivers and Avante integration with BigCommerce, and solved the DNS and SEO problem so the front end stayed clean without sacrificing search equity.`,
    ],
    highlights: [
      `Built the unified API and proxy pattern behind a 9-store, multi-brand headless ecosystem.`,
      `Protected Avante & Quivers as system-of-record layers instead of letting the commerce platform absorb the wrong responsibilities.`,
      `Solved DNS, 301, and SEO continuity so the migration didn't destroy organic traffic or brand coherence.`,
    ],
    closing: `This is one of my clearest examples of building bleeding-edge architecture while still making it operable for marketing, finance, and operations.`,
  },
  solutionCopy: `I designed a model where one commerce backend powered multiple brand experiences. BigCommerce ran commerce. WordPress and Contentstack ran the front end. Avante and Quivers stayed the source of truth.`,
  supplementalNarrative: {
    paragraphs: [
      `This wasn’t a simple headless commerce build. It was a multi-store system made to feel like one clean brand experience. The challenge was keeping the architecture disciplined enough for finance and operations while still giving each brand room to feel distinct.`,
      `I could see the full picture across APIs, storefronts, source systems, business users, and migration risk, then make the tradeoffs hold. That’s what kept the solution together and made it reusable for other multi-brand clients.`,
    ],
    highlights: [
      `The architecture let 9 brands behave like one manageable system without looking like one generic front end.`,
      `The solutioning pattern became a downstream reference for future BigCommerce multi-brand work.`,
    ],
    closing: `The win was bigger than a migration. It was turning a forced move into a reusable architecture the business could actually live with.`,
  },
  impactIntro: `We gave K2 a cleaner operating model, faster storefront creation, faster content velocity, and less dependence on engineering.`,
  impactBeforeAfterSummary: `K2 moved from a brittle multi-brand migration problem with too much manual reconciliation to a manageable headless commerce model.`,
  impactJourneyStepCopies: [
    `I built the architecture pattern that let 9 storefronts share one backend commerce model instead of fragmenting into separate implementation projects.`,
    `I made sure Avante & Quivers remained the source of truth so the business could scale without breaking data discipline or inventing fake system ownership.`,
    `I pulled the right people together to deliver two custom, platform-wide BigCommerce integrations and a headless experience layer that could move fast without collapsing into chaos.`,
  ],
  deliveryIntroCopy: `The program had to move fast across platform scoping, storefront migration, and launch.`,
  challengeQuote: `What Jim built was bigger than a migration. He created one clean engine behind nine brands, cut the noise between systems, and made the whole portfolio more manageable.`,
  recognitionIntro: `The proof is simple: the pattern held up, BigCommerce reused it, and it kept showing up publicly as a model for multi-brand headless commerce.`,
}


export const k2Diagram: DiagramData = {
  inputs: [
    { id: "pwa", label: "PWA Storefront", icon: "/tool-icons/contentstack-logo.png", descriptor: "Contentstack", tier: "EXPERIENCE" },
    { id: "cms", label: "CMS DXP", icon: "/tool-icons/wordpress-logo.png", descriptor: "WordPress", tier: "CONTENT" },
    { id: "hc", label: "Headless Commerce", icon: "/tool-icons/bc-logo.png", descriptor: "BigCommerce", tier: "COMMERCE" },
  ],
  outputs: [
    { id: "pos", label: "POS", glyph: "database", descriptor: "In-store", tier: "OMNI-CHANNEL" },
    { id: "web", label: "Web App", glyph: "monitor", descriptor: "Storefronts", tier: "OMNI-CHANNEL" },
    { id: "mob", label: "Mobile App", glyph: "devices", descriptor: "iOS · Android", tier: "OMNI-CHANNEL" },
  ],
  integrations: [
    { id: "quivers", label: "Quivers", icon: "/tool-icons/quivers-logo.png" },
    { id: "epicor", label: "Avante", icon: "/tool-icons/epicore-logo.png" },
    { id: "stripe", label: "Stripe", icon: "/tool-icons/stripe-logo.png" },
  ],
  integrationsLabel: "BACK-OFFICE SYSTEMS",
  pills: [
    { id: "rest", label: "REST" },
    { id: "graphql", label: "GraphQL" },
    { id: "webhooks", label: "Webhooks" },
  ],
  tooltips: {
    pwa: { title: "PWA Storefront", body: "Brand teams controlled each storefront's front-end experience while the commerce engine stayed shared underneath; fast, app-like, and decoupled." },
    cms: { title: "CMS DXP", body: "WordPress powered the front-end brand layer for each of the nine storefronts, and was the integration layer for BC's cart, orders, and checkout." },
    hc: { title: "Headless Commerce", body: "BigCommerce served as the shared commerce engine — catalog, cart, and checkout across all 9 brands." },
    api: { title: "API Layer", body: "The central integration hub. REST & GraphQL APIs connected all platforms with clean separation between the commerce engine and front-end surfaces." },
    quivers: { title: "Quivers", body: "Unified commerce platform connecting K2 brands, big-box, and specialty retailers. Maintained as the source of truth for omni-channel fulfillment & wholesale data." },
    epicor: { title: "Avante / ERP", body: "ERP managing inventory, financials, and distribution. Kept deliberately outside the commerce layer to avoid turning BigCommerce into a fake ERP." },
    stripe: { title: "Stripe", body: "Payment processing infrastructure handling transactions, fraud prevention, and payout management across all brands and channels." },
    rest: { title: "REST", body: "RESTful endpoints for standard data operations — storefronts, POS, and mobile apps consume product, order, and customer data through this layer." },
    graphql: { title: "GraphQL", body: "Flexible query layer letting front-end teams fetch exactly the data they need — powers the complex, cross-brand requirements of the PWA storefronts." },
    webhooks: { title: "Webhooks", body: "Event-driven notifications keeping inventory, orders, and customer data in sync across BigCommerce, Quivers, Avante, and the storefronts in real time." },
    pos: { title: "POS", body: "Point-of-sale for in-store transactions. Syncs inventory and order data with the central platform in real time." },
    web: { title: "Web App", body: "Browser-based storefronts. Each of K2's nine brands got a distinct front-end experience consuming the same shared commerce infrastructure." },
    mob: { title: "Mobile App", body: "Native and hybrid mobile applications delivering dedicated iOS & Android experiences across the brand portfolio." },
  },
}

export const caseStudy = {
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
