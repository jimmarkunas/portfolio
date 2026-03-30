import type { CaseStudyData } from "@/components/case-study/types"

export const methodCaseStudy = {
  slug: "method",
  breadcrumbCurrent: "Method",
  hero: {
    title: "Method: Brand-True DTC Launch on Shared Rails",
    intro:
      "Method had strong brand equity and a loyal customer base, but no owned DTC channel. I led the fast-follow launch on SC Johnson’s shared BigCommerce and SAP stack, then made the experience feel like Method, not enterprise reuse.",
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
      src: "/method/hero-method-01.png",
      alt: "Method direct-to-consumer launch hero image",
    },
  },
  atAGlance: {
    eyebrow: "At-a-Glance",
    title: "Brand Experience, Shared Engine",
    copy:
      "This was Method’s zero-to-one DTC launch and the second real test of SC Johnson’s home-care stack. I turned shared rails into a brand-right Method experience and proved new brands could launch without starting over.",
    stats: [
      { value: "$20", suffix: "%", label: "DTC Revenue Uplift" },
      { value: "3", suffix: "", label: "Launches (US, CA, Men)" },
      { value: "1", suffix: "", label: "Unified DTC Platform" },
      { value: "10", suffix: "+", label: "Systems in Stack" },
    ],
  },
  problem: {
    eyebrow: "Problem Statement",
    title: "Cult Brand, No DTC",
    media: {
      kind: "image",
      src: "/method/hero-method-02.png",
      alt: "Method commerce architecture and launch planning artifacts",
      aspectRatio: "16/9",
    },
    overview:
      "Method had brand equity, a clear design language, and a loyal customer base, but no true DTC channel. SC Johnson wanted growth fast without turning every brand launch into a custom tech project. The challenge was making shared commerce, ERP, product data, tax, fulfillment, service, and marketing rails feel seamless and unmistakably Method.",
    projectOverviewRows: [
      { label: "Client", value: "SC Johnson • Method" },
      { label: "Industry", value: "CPG • Home Care • eCommerce" },
      { label: "Timeline", value: "Apr 2019 - Jul 2019" },
    ],
    tools: [
      { label: "BigCommerce", icon: "/tool-icons/svg/bc-logo-blk.svg" },
      { label: "SAP", icon: "/tool-icons/svg/sap-logo.svg" },
      { label: "Salsify", icon: "/tool-icons/svg/salsify-logo.svg" },
    ],
    quote: {
      quote:
        "We wanted to get into direct-to-consumer as fast as possible.",
      attributionTitle: "Tammy Tran",
      attributionSubtitle: "Director of eCommerce, Method",
      avatarSrc: "/method/tammy-tran.jpeg",
    },
  },
  role: {
    eyebrow: "My Role",
    title: "Senior Program Manager",
    copy:
      "I led the cross-functional launch across architecture, integration planning, execution, and stakeholder coordination. My job was to take shared enterprise rails, make them feel Method-specific, and get a zero-to-one DTC business live fast without compromising the long-term platform strategy.",
    tags: [
      "Program Leadership",
      "Enterprise DTC",
      "Solution Architecture",
      "MACH Composable",
    ],
    stats: [
      { value: "10", suffix: "+", label: "system integrations" },
      { value: "$1", suffix: "M", label: "program budget" },
      { value: "5", suffix: "", label: "team size" },
      { value: "3", suffix: " mo", label: "program timeline" },
    ],
    narrative: {
      title: "I Made Shared Rails Feel Brand-Specific",
      paragraphs: [
        "Method couldn’t ship a generic store bolted onto enterprise middleware. The launch had to feel native to the brand, even on shared SC Johnson rails, and it had to move fast. This was a fast-follow launch, not a long greenfield build.",
        "I changed the trajectory in three places: I protected the shared-rails model, locked down how the core systems had to work together, and turned Method’s storytelling needs into reusable templates that felt like the brand without blowing up the architecture.",
      ],
      highlights: [
        "Protected the shared-platform strategy while still making Method's eCom feel fully brand-specific.",
        "Defined how SAP, Salsify, WMS, tax, payments, service, and marketing tools fit into the Method launch flow.",
        "Turned brand storytelling needs into reusable templates and page types instead of one-off custom pages.",
      ],
      closing:
        "I turned a shared enterprise system into something Method could own, and that SC Johnson could scale.",
    },
  },
  solution: {
    eyebrow: "Solution",
    title: "One Stack, Distinct Brand Experience",
    diagramKey: "scj-commerce-architecture" as const,
    copy:
      "I helped launch Method on SC Johnson’s shared commerce foundation, then made the experience feel like Method instead of platform reuse.",
    cards: [
      {
        category: "Shared Commerce Core",
        readTime: "Platform reuse",
        title:
          "BigCommerce, SAP, product data, tax, fulfillment, and service tooling stayed on the shared SC Johnson backbone so Method could move fast without rebuilding the stack.",
        art: "olive",
      },
      {
        category: "Brand Experience",
        readTime: "Reusable templates",
        title:
          "I translated Method's design language, storytelling patterns, and page needs into reusable templates that felt brand-specific without creating a custom maintenance nightmare.",
        art: "olive",
      },
      {
        category: "Operational Fit",
        readTime: "End-to-end launch flow",
        title:
          "Cybersource, Avalara or Vertex, Rewind, Klaviyo, Zendesk, and the PFS OMS/WMS layer were organized into a commerce flow that let Method act like a real DTC business from day one.",
        art: "olive",
      },
    ],
  },
  supplementalNarrative: {
    title: "Fast Follow, Not Copy Paste",
    paragraphs: [
      "Fast-follow launches go generic when teams treat them like copy and paste. This one worked because we used shared rails for speed without sanding off what made Method feel like Method.",
      "That balance was harder than it looked. I had to protect the shared platform, keep the system tight, and stop the experience from reading like enterprise plumbing dressed up as Method.",
    ],
    highlights: [
      "The launch proved shared rails didn't have to mean generic brand experience.",
      "Method became evidence that SC Johnson could scale more DTC brands without rebuilding the stack every time.",
    ],
    closing:
      "The real win wasn't just speed, it was proving out a repeatable architecture while delivering a brand-right experience.",
  },
  impact: {
    eyebrow: "Impact",
    title: "Growth, Speed, Repeatability",
    intro:
      "Method proved SC Johnson could launch distinct brands faster on a shared platform, without rebuilding the stack each time.",
    proofPoints: ["Brand Fit", "Revenue", "Repeatability"],
    stats: [
      { value: "$20", suffix: "%", label: "DTC Revenue Uplift" },
      { value: "3", suffix: "", label: "Launches (US, CA, Men)" },
      { value: "1", suffix: "", label: "Unified Platform" },
      { value: "0-1", suffix: "", label: "DTC Channel" },
    ],
    beforeAfter: {
      title: "Before & After",
      summary:
        "Method moved from no DTC channel to a live commerce business running on a repeatable platform that felt true to the brand.",
      columns: [
        {
          label: "Before",
          title: "Strong Brand, No DTC",
          points: [
            "Method had strong retail recognition, but no true direct-to-consumer channel.",
            "The business had no historical data to learn from.",
            "Every new brand launch risked becoming a separate technology project.",
          ],
        },
        {
          label: "After",
          title: "Live And Scalable",
          points: [
            "Method launched as a real DTC business on SC Johnson's shared commerce rails.",
            "The experience felt brand-specific instead of generic platform reuse.",
            "The launch proved one unified platform could support multiple brands & markets.",
          ],
        },
      ],
    },
    journeySteps: [
      {
        step: "1",
        title: "Protect The Shared Rails",
        copy:
          "I kept Method on the shared SC Johnson architecture so the business could move fast and keep building a repeatable platform instead of funding a custom one-off.",
      },
      {
        step: "2",
        title: "Shape The Brand Layer",
        copy:
          "I turned Method's visual and storytelling requirements into reusable templates and page structures that fit the stack without flattening the brand.",
      },
      {
        step: "3",
        title: "Prove The Model",
        copy:
          "Once Method went live, SC Johnson had stronger evidence that shared enterprise rails could support distinct brands, real revenue, and repeatable expansion.",
      },
    ],
  },
  delivery: {
    eyebrow: "Implementation",
    title: "Delivery Phases",
    introTitle: "How I Got It Live Fast",
    introCopy:
      "Compressed launch with no room for drift. The work had to move fast and preserve the Method brand experience.",
    phases: [
      {
        phase: "Phase 01",
        title: "Diagnose",
        copy: "Scoped 0-1 DTC channel, added in brand-specific CMS strategy.",
        ringClass: "border-[#D39D23]",
        labelClass: "text-[#D39D23]",
      },
      {
        phase: "Phase 02",
        title: "Align",
        copy: "Brought SCJ, BC, and LiveArea into one execution path.",
        ringClass: "border-[#5E7FB7]",
        labelClass: "text-[#5E7FB7]",
      },
      {
        phase: "Phase 03",
        title: "Design",
        copy: "Defined how SAP, Salsify, WMS, tax, payments, would support the launch.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 04",
        title: "Build",
        copy: "Connected the storefront, shared enterprise services, and brand experience layer.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 05",
        title: "Launch",
        copy: "Delivered Method as a live DTC business and proved reusable patterns.",
        ringClass: "border-[#3E7BE0]",
        labelClass: "text-[#3E7BE0]",
      },
    ],
  },
  challengeQuote: {
    quote: "Jim got it done.",
    attributionTitle: "Tammy Tran",
    attributionSubtitle: "Director of eCommerce, Method",
    avatarSrc: "/method/tammy-tran.jpeg",
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Press & Accolades",
    intro:
      "The strongest proof here was not outside press, it was platform behavior. Method showed that SC Johnson could move from one successful DTC launch to the next without losing speed, brand integrity, or architectural discipline.",
    rows: [
      {
        company: "Method US Launch",
        dates: "2019",
        summary:
          "Method launched as a true zero-to-one DTC business on shared SC Johnson commerce rails without sacrificing the brand experience.",
        tags: ["Launch", "DTC"],
      },
      {
        company: "Method Men Support",
        dates: "2019",
        summary:
          "The platform pattern extended to Method Men as a secondary brand motion, reinforcing the value of reusable rails under one architecture.",
        tags: ["Brand Extension", "Reuse"],
      },
      {
        company: "Unified Platform Standard",
        dates: "Post-launch",
        summary:
          "The work strengthened the case for one unified SC Johnson home-care platform that could support future launches without custom rebuilds.",
        tags: ["Scale", "Internal Standard"],
      },
    ],
  },
} satisfies CaseStudyData
