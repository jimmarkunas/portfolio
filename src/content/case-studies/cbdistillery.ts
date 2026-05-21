import type { CaseStudyData } from "@/content/case-studies/types"
import { defaultCaseStudyPrimaryCta } from "@/content/case-studies/shared"

export const caseStudy = {
  slug: "cbdistillery",
  breadcrumbCurrent: "CBDistillery",
  hero: {
    title: "CBDistillery's: From De-Banked to $40m",
    intro:
      "CBDistillery was at risk of losing the ability to process cards. Despite millions in revenue, BC's payment partners wouldn't touch them, and without a banking solution the company would die instantly. I led negotiations that secured Square, forced a custom BigCommerce, Square & OrderGroove integration, and turned a payments rescue into $40m.",
    primaryCta: defaultCaseStudyPrimaryCta,
    secondaryCta: {
      label: "View CV",
      href: "/cv",
    },
    image: {
      src: "/cbdistillery/hero-cbd-01.png",
      alt: "CBDistillery fintech and commerce product launch hero image",
    },
  },
  atAGlance: {
    eyebrow: "At-a-Glance",
    title: "Payments Rescue, Then Scale",
    copy:
      "This was a commerce build, a subscription launch, and a banking rescue all at the same time. I helped CBDistillery get banked, negotiated Square as the long-term processor, and designed a stack where one-time orders, subscriptions, and wholesale could all run on one clean commerce and payments model.",
    stats: [
      { value: "$15", suffix: "M", label: "GMV at Launch" },
      { value: "$40", suffix: "M", label: "GMV After Scale" },
      { value: "20", suffix: "K+", label: "Orders Per Month" },
      { value: "89", suffix: "%", label: "Retention Uplift" },
    ],
  },
  problem: {
    eyebrow: "Problem Statement",
    title: "High-Growth Brand Nobody Would Bank",
    media: {
      kind: "image",
      src: "/cbdistillery/modal-cbd-04.png",
      alt: "CBDistillery fintech architecture and payment stack planning materials",
      aspectRatio: "16/9",
    },
    overview:
      "CBDistillery had real volume, real demand, and a real business, but it was one of the hardest merchant categories to bank. Approved payment partners refused to underwrite the account, CBDistillery needed to move off WooCommerce, and subscriptions were a critical growth lever that depended on token vaulting & recurring billing. If payments failed, none of the rest of the commerce strategy mattered.",
    projectOverviewRows: [
      { label: "Client", value: "CBDistillery" },
      { label: "Industry", value: "CBD • Fintech • Subscription Commerce" },
      { label: "Timeline", value: "2020" },
    ],
    tools: [
      { label: "BigCommerce", icon: "/tool-icons/svg/bc-logo-blk.svg" },
      { label: "Square", icon: "/tool-icons/svg/square-logo.svg" },
      { label: "Order Groove", icon: "/tool-icons/svg/ordergroove-logo.svg" },
      { label: "MS Dynamics", icon: "/tool-icons/svg/msdynamics-logo.svg" },
    ],
    quote: {
      quote:
        "Despite their millions of dollars in revenue, none of our approved payment partners would touch them. Jim worked tirelessly to find CBDistillery a payment provider and then convinced the C-levels at BC to support a custom integration with Square on a short timeline.",
      attributionTitle: "Adrian Sorapuru",
      attributionSubtitle: "Director, Strategic Business Development, BigCommerce",
      avatarSrc: "/cbdistillery/adrian-sorapuru.jpeg",
    },
  },
  role: {
    eyebrow: "My Role",
    title: "Senior Product Manager & Solutions Architect",
    copy:
      "I owned the fintech negotiations + the commerce & subscription architecture required to get CBDistillery banked & scaling. That meant negotiating the processor relationship, aligning BigCommerce, Square, and OrderGroove around a custom integration, and designing one stack that could support one-time orders, subscriptions, and wholesale without fragmenting the business.",
    tags: [
      "Fintech",
      "Program Leadership",
      "Subscriptions",
      "Solutioning",
    ],
    stats: [
      { value: "9", suffix: " mo", label: "Program Timeline" },
      { value: "$3", suffix: "M", label: "Program Budget" },
      { value: "15", suffix: "", label: "Team Size" },
      { value: "2", suffix: "", label: "Custom BC Integrations" },
    ],
    narrative: {
      title: "I Solved the Payments Problem",
      paragraphs: [
        "CBDistillery didn’t need another storefront conversation. It needed a banking partner. I pushed the issue, worked back channels, and called in favors until Square agreed to bank the business, which gave the company a real path to scale subscriptions.",
        "I changed the trajectory in three places. I got Square in place when most providers wouldn’t touch the business, drove the BigCommerce, Square, and OrderGroove integration that unified one-time and recurring billing, and helped shape one operating model across DTC, subscriptions, and wholesale.",
      ],
      highlights: [
        "Negotiated Square as the long-term payments processor for a high-risk merchant category.",
        "Forced a custom BigCommerce, OrderGroove, and Square integration so tokenized recurring billing would actually work.",
        "Designed the architecture for one-time orders, subscriptions, and wholesale.",
      ],
      closing:
        "I turned political red tape, payments risk, and platform limitations into a growth engine that scaled to $40m.",
    },
  },
  solution: {
    eyebrow: "Solution",
    title: "Scalable & Revenue-Driving Commerce Stack",
    copy:
      "Got Square over the line, drove the integration stack, and helped turn three revenue streams into one operating model.",
    cards: [
      {
        category: "Payments Infrastructure",
        readTime: "Square negotiation",
        title:
          "I negotiated and secured Square as the payments spine for a merchant category most partners would not underwrite, which gave CBDistillery a real long-term foundation for scale.",
        art: "/cbdistillery/modal-cbd-01.png",
      },
      {
        category: "Subscription Engine",
        readTime: "Order Groove integration",
        title:
          "I helped force the custom BigCommerce, Square, and Order Groove integration required to make tokenized recurring billing, subscriptions, and retention programs work cleanly.",
        art: "/cbdistillery/modal-cbd-02.png",
      },
      {
        category: "Unified Commercial Model",
        readTime: "DTC + wholesale alignment",
        title:
          "I designed one stack that could support one-time consumer purchases, recurring subscriptions, and wholesale activity without splitting the business into separate systems and teams.",
        art: "/cbdistillery/modal-cbd-03.png",
      },
    ],
  },
  supplementalNarrative: {
    title: "This Took Negotiation + Solutioning",
    paragraphs: [
      "Chris drove the brand. Adrian helped reinforce the commercial path. I pushed through the politics, lined up the right executives, and got a skeptical ecosystem to support a merchant most providers wanted to avoid.",
      "We didn’t just launch a better store. We built the fintech and commerce rails that let CBDistillery scale subscriptions, improve retention, and grow on a much stronger foundation.",
    ],
    highlights: [
      "The hard part was convincing BigCommerce to support the business, not just wiring systems together.",
      "The launch worked because payments, subscriptions, and commerce were custom-built for the global tenant system.",
    ],
    closing:
      "The real win was getting CBDistillery live AND getting them banked, stable, and ready to grow.",
  },
  impact: {
    eyebrow: "Impact",
    title: "Revenue, Retention & Subscription Scale",
    intro:
      "Once payments were solved, the business could finally grow. The new stack supported subscriptions, retention, and real order volume.",
    proofPoints: ["Subscriptions", "Retention", "$40m GMV"],
    stats: [
      { value: "$15", suffix: "M–$40M", label: "GMV Growth" },
      { value: "18", suffix: "%", label: "New Visitors Subscribed" },
      { value: "89", suffix: "%", label: "Retention" },
      { value: "20", suffix: "K+", label: "Orders per Month" },
    ],
    beforeAfter: {
      title: "Before & After",
      summary:
        "From payments fragility & platform limitations to a stable commerce & subscription engine.",
      columns: [
        {
          label: "Before",
          title: "Unbanked + Constrained",
          points: [
            "Approved payment partners wouldn't underwrite.",
            "WooCommerce wasn't scalable and was development heavy.",
            "Subscriptions couldn't exist w/o tokenized payments architecture.",
          ],
        },
        {
          label: "After",
          title: "Scalable",
          points: [
            "GMV grew to $40M w/ stronger payments & commerce foundation.",
            "New site visitors subscribed (18%).",
            "The store handled 20K+ orders per month.",
          ],
        },
      ],
    },
    journeySteps: [
      {
        step: "1",
        title: "Got Them Banked",
        copy: "I worked the ecosystem until CBDistillery had a real processor willing to support the volume, category risk, and long-term commercial model.",
      },
      {
        step: "2",
        title: "Forced the Integration",
        copy: "I pushed the custom BigCommerce, Square, and OrderGroove work that made one-time and recurring billing behave like one coherent customer & revenue system.",
      },
      {
        step: "3",
        title: "Scaled on Stronger Rails",
        copy: "Once the fintech and subscription stack held, the business could focus on growth, retention, and volume instead of constantly worrying whether payments would collapse.",
      },
    ],
  },
  delivery: {
    eyebrow: "Implementation",
    title: "Delivery Phases",
    introTitle: "How I Turned the Payments Crisis Into a Launch",
    introCopy:
      "The program cut across processor negotiation, architecture, integrations, subscription alignment, and launch.",
    phases: [
      {
        phase: "Phase 01",
        title: "Diagnose",
        copy: "Mapped risks: WooCommerce limits, processor refusal, subscription needs.",
        ringClass: "border-[#D39D23]",
        labelClass: "text-[#D39D23]",
      },
      {
        phase: "Phase 02",
        title: "Negotiate",
        copy: "Worked through 10+ processors, gateways, and banks until Square emerged.",
        ringClass: "border-[#5E7FB7]",
        labelClass: "text-[#5E7FB7]",
      },
      {
        phase: "Phase 03",
        title: "Architect",
        copy: "Negotiated the BigCommerce, Square, OrderGroove stack for subscriptions.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 04",
        title: "Integrate",
        copy: "Forced custom BC & OrderGroove work needed for recurring billing & subscriptions.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 05",
        title: "Scale",
        copy: "Launched a stronger fintech & commerce foundation that let CBDistillery grow.",
        ringClass: "border-[#3E7BE0]",
        labelClass: "text-[#3E7BE0]",
      },
    ],
  },
  star: {
    situation:
      "CBDistillery was at risk of losing card processing because approved partners wouldn't underwrite the account. The company also needed to move off WooCommerce and make subscriptions work through tokenized recurring billing.",
    task:
      "Get the business banked and build one commerce-and-payments system that could support one-time orders, subscriptions, and wholesale without fragmentation.",
    actions: [
      "Negotiated Square as the long-term processor for a high-risk merchant category",
      "Drove custom BigCommerce, Square, and OrderGroove integration for recurring billing",
      "Designed one operating model across DTC, subscriptions, and wholesale",
      "Led cross-functional delivery so payments stabilization and platform migration landed together",
    ],
    results: [
      { value: "$40M", label: "GMV after scale", variant: "primary" },
      { value: "20K+", label: "Orders per month", variant: "secondary" },
      { value: "89%", label: "Retention uplift", variant: "default" },
    ],
  },
  challengeQuote: {
    quote: "Jim saved the day with this Square deal. The team is happy.",
    attributionTitle: "Chris Van Dusen",
    attributionSubtitle: "CBDistillery Stakeholder",
    avatarSrc: "/cbdistillery/chris-vandusen.jpeg",
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Press & Accolades",
    intro:
      "The strongest validation here is that the public case studies documented the exact commercial outcomes the new stack unlocked, from fast subscription growth to stronger retention and high order volume on the new platform.",
    rows: [
      {
        company: "How CBDistillery Hit Its Yearly Subscription Revenue Goal in 90 Days",
        source: "OrderGroove",
        dates: "Case Study",
        summary:
          "Order Groove highlighted the subscription results, including 18% of new visitors subscribing, 89% retention, and a faster repeat-order cadence.",
        tags: ["Case Study", "OrderGroove"],
        file: "/cbdistillery/files/03-og-casestudy.pdf",
      },
      {
        company: "CBDistillery Subscription Program Drives Repeat Revenue",
        source: "OrderGroove",
        dates: "Case Study",
        summary:
          "A follow-on Order Groove case study documented continued subscription performance and how the program compounded into a reliable recurring revenue engine for the business.",
        tags: ["Case Study", "OrderGroove"],
        file: "/cbdistillery/files/04-og-casestudy.pdf",
      },
      {
        company: "CBDistillery Reaches 20K+ Orders Per Month",
        source: "Silk Commerce",
        dates: "Case Study",
        summary:
          "Silk Commerce reinforced the order scale the business could support once the new commerce and payments stack was live, documenting the operational lift from the replatform.",
        tags: ["Case Study", "Silk"],
        file: "/cbdistillery/files/02-silk-casestudy.pdf",
      },
      {
        company: "CBDistillery Migrates Off WooCommerce and Scales on BigCommerce",
        source: "Silk Commerce",
        dates: "Case Study",
        summary:
          "Silk Commerce documented the move from WooCommerce to BigCommerce and the operational benefits of the new platform across DTC and wholesale.",
        tags: ["Case Study", "Silk"],
        file: "/cbdistillery/files/01-silk-casestudy.pdf",
      },
    ],
  },
} satisfies CaseStudyData
