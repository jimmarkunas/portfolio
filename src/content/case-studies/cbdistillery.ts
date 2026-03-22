import type { CaseStudyData } from "@/components/case-study/types"

export const cbdistilleryCaseStudy = {
  slug: "cbdistillery",
  breadcrumbCurrent: "CBDistillery",
  hero: {
    title: "I Turned CBDistillery's Payments Crisis Into a Scalable Revenue Engine",
    intro:
      "CBDistillery was not just replatforming, it was at risk of losing the ability to process cards at all. Despite doing millions in revenue, approved payment partners would not touch the business, and without a real banking and subscription solution the company could not scale. I led the fintech and commerce architecture work that secured Square, forced a custom BigCommerce and Order Groove integration, and turned a payments rescue into the engine behind growth from $15M to $40M GMV.",
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
      src: "/cbdistillery/hero-cbdistillery-01.png",
      alt: "CBDistillery fintech and commerce product launch hero image",
    },
  },
  atAGlance: {
    eyebrow: "At-a-Glance",
    title: "Payments Rescue, Then Scale",
    copy:
      "This was a commerce build, a subscription launch, and a banking rescue all at the same time. I helped CBDistillery get banked, negotiated Square as the long-term processor, and designed a stack where one-time orders, subscriptions, and wholesale could all run on one clean commerce and payments model.",
    stats: [
      { value: "$15", suffix: "M", label: "GMV at launch" },
      { value: "$40", suffix: "M", label: "GMV after scale" },
      { value: "20", suffix: "K+", label: "orders per month" },
      { value: "89", suffix: "%", label: "retention" },
    ],
  },
  problem: {
    eyebrow: "Problem Statement",
    title: "A High-Growth Brand Nobody Would Bank",
    media: {
      kind: "image",
      src: "/cbdistillery/hero-cbdistillery-02.png",
      alt: "CBDistillery fintech architecture and payment stack planning materials",
      aspectRatio: "16/9",
    },
    overview:
      "CBDistillery had real volume, real demand, and a real business, but it was still living in one of the hardest merchant categories to bank. Approved payment partners would not underwrite the account, the company needed to move off WooCommerce, and subscriptions were a critical growth lever that depended on token vaulting and recurring billing actually working. If payments failed, none of the rest of the commerce strategy mattered.",
    projectOverviewRows: [
      { label: "Client", value: "CBDistillery" },
      { label: "Industry", value: "CBD • Fintech • Subscription Commerce" },
      { label: "Timeline", value: "2020" },
    ],
    tools: [
      { label: "BigCommerce", icon: "/tool-icons/bc-logo.png" },
      { label: "Square", icon: "/tool-icons/square-logo.png" },
      { label: "Order Groove", icon: "/tool-icons/ordergroove-logo.png" },
      { label: "WordPress", icon: "/tool-icons/wordpress-logo.png" },
    ],
    quote: {
      quote:
        "Despite their millions of dollars in revenue, none of our approved payment partners would touch them. Jim worked tirelessly to find CBDistillery a payment provider and then to convince the C-levels at BC to support a custom integration on a short timeline.",
      attributionTitle: "Adrian Sorapuru",
      attributionSubtitle: "Director, Strategic Business Development, BigCommerce",
      avatarSrc: "/cbdistillery/adrian-sorapuru.png",
    },
  },
  role: {
    eyebrow: "My Role",
    title: "Senior Product Manager & Solutions Architect",
    copy:
      "I owned the fintech, commerce, and subscription architecture required to get CBDistillery banked and scaling. That meant negotiating the processor relationship, aligning BigCommerce and Order Groove around a custom integration, and designing one stack that could support one-time orders, subscriptions, and wholesale without fragmenting the business.",
    tags: [
      "Fintech Architecture",
      "Program Leadership",
      "Subscription Commerce",
      "Payments Strategy",
    ],
    stats: [
      { value: "9", suffix: " mo", label: "program timeline" },
      { value: "$3", suffix: "M", label: "program budget" },
      { value: "15", suffix: "", label: "team size" },
      { value: "1", suffix: "", label: "custom BC integration" },
    ],
    narrative: {
      title: "I Solved the Payments Problem First",
      paragraphs: [
        "What I saw faster than other people was that this was not mainly a storefront problem. It was a banking and payments problem hiding inside a commerce project. CBDistillery could not grow on hope, and it could not build a durable subscription business without a processor willing to underwrite volume, support token vaulting, and work with both BigCommerce and Order Groove.",
        "I made three decisions that changed the trajectory. First, I negotiated Square as the long-term payments spine when most partners would not touch the business. Second, I forced the custom BigCommerce, Square, and Order Groove integration that made one-time and recurring billing coexist cleanly. Third, I designed one stack that could support DTC, subscriptions, and wholesale together, which gave the business a real operating model instead of a pile of disconnected revenue streams.",
      ],
      highlights: [
        "Negotiated Square as the long-term payments processor for a high-risk merchant category.",
        "Forced a custom BigCommerce and Order Groove integration so tokenized recurring billing could actually work.",
        "Designed one architecture for one-time orders, subscriptions, and wholesale instead of three disconnected systems.",
      ],
      closing:
        "This is one of my clearest examples of turning political red tape, payments risk, and platform limitations into a growth engine the business could actually scale on.",
    },
  },
  solution: {
    eyebrow: "Solution",
    title: "One Payments Spine, One Commerce Stack",
    copy:
      "I helped build a model where BigCommerce, Square, and Order Groove worked as one commercial system instead of three separate vendors with conflicting assumptions. WordPress handled the front-end brand layer, BigCommerce handled commerce, Square handled the money movement, and Order Groove handled recurring revenue, all on one set of rails.",
    cards: [
      {
        category: "Payments Infrastructure",
        readTime: "Square negotiation",
        title:
          "I negotiated and secured Square as the payments spine for a merchant category most partners would not underwrite, which gave CBDistillery a real long-term foundation for scale.",
        art: "/cbdistillery/product-cbdistillery-01.png",
      },
      {
        category: "Subscription Engine",
        readTime: "Order Groove integration",
        title:
          "I helped force the custom BigCommerce, Square, and Order Groove integration required to make tokenized recurring billing, subscriptions, and retention programs work cleanly.",
        art: "/cbdistillery/product-cbdistillery-02.png",
      },
      {
        category: "Unified Commercial Model",
        readTime: "DTC + wholesale alignment",
        title:
          "I designed one stack that could support one-time consumer purchases, recurring subscriptions, and wholesale activity without splitting the business into separate systems and teams.",
        art: "/cbdistillery/product-cbdistillery-03.png",
      },
    ],
  },
  supplementalNarrative: {
    title: "This Took Negotiation, Not Just Solutioning",
    image: "/cbdistillery/hero-cbdistillery-03.png",
    paragraphs: [
      "This case study works because it was not a solo-hero fantasy. Chris Van Dusen drove the brand and marketing engine. Adrian helped reinforce the partnership and commercial path. My role was to be the dogged negotiator and systems architect who could keep pushing through political red tape, line up the right executives, and get a skeptical ecosystem to support a merchant most of them would rather avoid.",
      "That combination is what made the outcome real. We did not just launch a better store. We built the fintech and commerce rails that let CBDistillery scale subscriptions, improve retention, and grow revenue on a much stronger foundation.",
    ],
    highlights: [
      "The hard part was convincing the ecosystem to support the business, not just wiring systems together.",
      "The launch worked because payments, subscriptions, and commerce were treated as one operating model.",
    ],
    closing:
      "The real win was not just getting CBDistillery live, it was getting the company banked, stable, and ready to grow.",
    closingImage: "/cbdistillery/hero-cbdistillery-05.png",
  },
  impact: {
    eyebrow: "Impact",
    title: "Revenue, Retention, And Subscription Scale",
    intro:
      "Once the payments problem was solved, the business finally had room to grow. The new stack did not just support transactions, it supported recurring revenue, stronger retention, and a much more durable commercial model that could handle real order volume.",
    proofPoints: ["GMV", "Retention", "Subscriptions"],
    stats: [
      { value: "$15", suffix: "M–$40M", label: "GMV growth" },
      { value: "18", suffix: "%", label: "new visitors subscribed" },
      { value: "89", suffix: "%", label: "retention" },
      { value: "20", suffix: "K+", label: "orders per month" },
    ],
    statsImage: "/cbdistillery/hero-cbdistillery-04.png",
    beforeAfter: {
      title: "Before & After",
      summary:
        "CBDistillery moved from payments fragility and platform limitations to a stable commerce and subscription engine that could support serious revenue growth.",
      columns: [
        {
          label: "Before",
          title: "Unbanked, Fragile, Constrained",
          points: [
            "Approved payment partners would not underwrite the account despite high revenue volume.",
            "WooCommerce was creating reliability, security, and maintenance strain.",
            "Subscriptions could not scale cleanly without the right tokenized payments architecture.",
          ],
        },
        {
          label: "After",
          title: "Banked, Repeatable, Scalable",
          points: [
            "GMV grew from $15M to $40M on a stronger payments and commerce foundation.",
            "18% of new site visitors subscribed and retention reached 89%.",
            "The store handled 20K+ orders per month while supporting DTC, wholesale, and recurring revenue together.",
          ],
        },
      ],
    },
    journeySteps: [
      {
        step: "1",
        title: "Get the Merchant Banked",
        copy: "I worked the ecosystem until CBDistillery had a real processor willing to support the volume, category risk, and long-term commercial model.",
      },
      {
        step: "2",
        title: "Force the Right Integration",
        copy: "I pushed the custom BigCommerce, Square, and Order Groove work that made one-time and recurring billing behave like one coherent customer and revenue system.",
      },
      {
        step: "3",
        title: "Scale on Stronger Rails",
        copy: "Once the fintech and subscription stack held, the business could focus on growth, retention, and volume instead of constantly worrying whether payments would collapse.",
      },
    ],
  },
  delivery: {
    eyebrow: "Implementation",
    title: "Delivery Phases",
    introTitle: "How I Turned the Payments Crisis Into a Launch",
    introCopy:
      "This work moved through processor negotiation, architecture design, custom integration planning, subscription alignment, and launch execution. The hard part was not just getting the systems to connect, it was getting the politics, underwriting, and vendor buy-in to line up fast enough that the business could keep moving.",
    phases: [
      {
        phase: "Phase 01",
        title: "Diagnose",
        copy: "Mapped the real risk across WooCommerce limits, processor refusal, subscription needs, and the business requirement to support both DTC and wholesale.",
        ringClass: "border-[#D39D23]",
        labelClass: "text-[#D39D23]",
      },
      {
        phase: "Phase 02",
        title: "Negotiate",
        copy: "Worked through 10+ processors, gateways, and banks until Square emerged as the viable long-term payments spine.",
        ringClass: "border-[#5E7FB7]",
        labelClass: "text-[#5E7FB7]",
      },
      {
        phase: "Phase 03",
        title: "Architect",
        copy: "Defined the BigCommerce, Square, Order Groove, and WordPress stack so one-time orders, subscriptions, and wholesale could operate on one coherent model.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 04",
        title: "Integrate",
        copy: "Forced the custom BigCommerce and Order Groove work needed for tokenized recurring billing and durable subscription retention programs.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 05",
        title: "Scale",
        copy: "Launched a stronger fintech and commerce foundation that let CBDistillery grow GMV, improve retention, and handle high monthly order volume.",
        ringClass: "border-[#3E7BE0]",
        labelClass: "text-[#3E7BE0]",
      },
    ],
  },
  challengeQuote: {
    quote: "Jim saved the day with this Square deal. The team is happy.",
    attributionTitle: "Chris Van Dusen",
    attributionSubtitle: "CBDistillery Stakeholder",
    avatarSrc: "/cbdistillery/chris-van-dusen.png",
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Case Studies & Subscription Proof",
    intro:
      "The strongest validation here is that the public case studies documented the exact commercial outcomes the new stack unlocked, from fast subscription growth to stronger retention and high order volume on the new platform.",
    featured: {
      media: {
        kind: "image",
        src: "/cbdistillery/hero-cbdistillery-06.png",
        alt: "CBDistillery subscription and commerce case study validation",
        aspectRatio: "16/9",
      },
      company: "How CBDistillery Hit Its Yearly Subscription Revenue Goal in 90 Days",
      dates: "Case Study",
      summary:
        "Order Groove documented CBDistillery's subscription success, including fast revenue ramp, strong new-subscriber conversion, and high retention on the new stack.",
      tags: ["Case Study", "Subscriptions"],
    },
    rows: [
      {
        company: "How CBDistillery Hit Its Yearly Subscription Revenue Goal in 90 Days",
        source: "OrderGroove",
        dates: "Case Study",
        summary:
          "Order Groove highlighted the subscription results, including 18% of new visitors subscribing, 89% retention, and a faster repeat-order cadence.",
        tags: ["Case Study", "Subscriptions"],
        file: "/cbdistillery/files/03-og-casestudy.pdf",
      },
      {
        company: "CBDistillery Subscription Program Drives Repeat Revenue",
        source: "OrderGroove",
        dates: "Case Study",
        summary:
          "A follow-on Order Groove case study documented continued subscription performance and how the program compounded into a reliable recurring revenue engine for the business.",
        tags: ["Case Study", "Subscriptions"],
        file: "/cbdistillery/files/04-og-casestudy.pdf",
      },
      {
        company: "CBDistillery Reaches 20K+ Orders Per Month",
        source: "Silk Commerce",
        dates: "Case Study",
        summary:
          "Silk Commerce reinforced the order scale the business could support once the new commerce and payments stack was live, documenting the operational lift from the replatform.",
        tags: ["Case Study", "Scale"],
        file: "/cbdistillery/files/02-silk-casestudy.pdf",
      },
      {
        company: "CBDistillery Migrates Off WooCommerce and Scales on BigCommerce",
        source: "Silk Commerce",
        dates: "Case Study",
        summary:
          "Silk Commerce documented the move from WooCommerce to BigCommerce and the operational benefits of the new platform across DTC and wholesale.",
        tags: ["Case Study", "BigCommerce"],
        file: "/cbdistillery/files/01-silk-casestudy.pdf",
      },
    ],
  },
} satisfies CaseStudyData
