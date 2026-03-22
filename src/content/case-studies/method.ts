import type { CaseStudyData } from "@/components/case-study/types"

export const methodCaseStudy = {
  slug: "method",
  breadcrumbCurrent: "Method",
  hero: {
    title: "I Turned Method Into a Brand-True DTC Launch on Shared Rails",
    intro:
      "Method had retail recognition, strong design DNA, and a loyal customer base, but no real direct-to-consumer channel the brand actually owned. I led the fast-follow launch on SC Johnson's shared BigCommerce and SAP stack, then made that shared architecture feel unmistakably Method instead of generic enterprise plumbing. The result was 20%+ DTC revenue uplift, three launches, and a reusable commerce pattern the business could scale.",
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
      "This was a true zero-to-one DTC launch for Method, but it was also the second proof point on SC Johnson's emerging home-care commerce stack. I helped take the shared rails built for Mrs. Meyer's, make them feel brand-specific for Method, and prove the business could scale new brands without rebuilding the entire system every time.",
    stats: [
      { value: "$20", suffix: "%+", label: "DTC revenue uplift" },
      { value: "3", suffix: "", label: "launches" },
      { value: "1", suffix: "", label: "unified platform" },
      { value: "10", suffix: "+", label: "systems in stack" },
    ],
  },
  problem: {
    eyebrow: "Problem Statement",
    title: "A Cult Brand With No DTC Home",
    media: {
      kind: "image",
      src: "/method/hero-method-02.png",
      alt: "Method commerce architecture and launch planning artifacts",
      aspectRatio: "16/9",
    },
    overview:
      "Method had the brand equity, the design language, and the consumer love, but it still had no true direct-to-consumer channel. SC Johnson wanted growth, wanted DTC fast, and wanted to avoid turning every new brand launch into a custom technology project. The challenge was making shared enterprise rails across commerce, ERP, product data, tax, fulfillment, service, and marketing feel seamless and brand-right for Method, without sacrificing speed or repeatability.",
    projectOverviewRows: [
      { label: "Client", value: "SC Johnson • Method" },
      { label: "Industry", value: "CPG • Home Care • eCommerce" },
      { label: "Timeline", value: "Apr 2019 to Jul 2019" },
    ],
    tools: [
      { label: "BigCommerce", icon: "/tool-icons/bc-logo.png" },
      { label: "SAP", icon: "/tool-icons/sap-logo.png" },
      { label: "Salsify", icon: "/tool-icons/salsify-logo.png" },
      { label: "Cybersource", icon: "/tool-icons/cybersource-logo.png" },
    ],
    quote: {
      quote:
        "We wanted growth, and we wanted to get into direct-to-consumer as fast as possible.",
      attributionTitle: "Tammy Tran",
      attributionSubtitle: "Director of eCommerce, Method",
      avatarSrc: "/method/tammy-tran.png",
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
      "Shared Platform Strategy",
    ],
    stats: [
      { value: "5", suffix: "", label: "team size" },
      { value: "$1", suffix: "M", label: "program budget" },
      { value: "10", suffix: "+", label: "system integrations" },
      { value: "3", suffix: " mo", label: "program timeline" },
    ],
    narrative: {
      title: "I Made Shared Rails Feel Brand-Specific",
      paragraphs: [
        "Method could not afford a generic store that looked like an afterthought bolted onto enterprise middleware. The brand had strong visual identity, storytelling standards, and customer expectations, which meant the launch had to feel native to Method even though it was running on shared SC Johnson rails. At the same time, the business needed speed. This was a fast-follow launch, not an 18-month greenfield science project.",
        "I made three decisions that changed the trajectory. First, I treated Method as a shared-rails launch, not a custom build, which protected speed and kept the long-term platform pattern intact. Second, I defined how SAP, Salsify, WMS, tax, payments, service, and marketing tools needed to fit together so the storefront could behave like a real DTC business. Third, I translated Method's design-heavy storytelling needs into reusable templates and page structures, so the experience felt distinctly Method without blowing up the shared architecture.",
      ],
      highlights: [
        "Protected the shared-platform strategy while still making the launch feel fully brand-specific.",
        "Defined how SAP, Salsify, WMS, tax, payments, service, and marketing tools fit into the Method launch flow.",
        "Turned brand storytelling needs into reusable templates and page types instead of one-off custom pages.",
      ],
      closing:
        "This is the kind of work I do best, turning shared enterprise systems into something the brand can actually own, and the business can actually scale.",
    },
  },
  solution: {
    eyebrow: "Solution",
    title: "One Stack, Distinct Brand Experience",
    copy:
      "I helped launch Method on the same core SC Johnson commerce foundation used across the home-care portfolio, then shaped the experience so it felt like Method from the first click. The solution was not just technical reuse, it was controlled reuse with enough flexibility for storytelling, merchandising, and customer experience to stay on-brand.",
    cards: [
      {
        category: "Shared Commerce Core",
        readTime: "Platform reuse",
        title:
          "BigCommerce, SAP, product data, tax, fulfillment, and service tooling stayed on the shared SC Johnson backbone so Method could move fast without rebuilding the stack.",
        art: "/method/product-method-01.png",
      },
      {
        category: "Brand Experience",
        readTime: "Reusable templates",
        title:
          "I translated Method's design language, storytelling patterns, and page needs into reusable templates that felt brand-specific without creating a custom maintenance nightmare.",
        art: "/method/product-method-02.png",
      },
      {
        category: "Operational Fit",
        readTime: "End-to-end launch flow",
        title:
          "Cybersource, Avalara or Vertex, Rewind, Klaviyo, Zendesk, and the PFS OMS/WMS layer were organized into a commerce flow that let Method act like a real DTC business from day one.",
        art: "/method/product-method-03.png",
      },
    ],
  },
  supplementalNarrative: {
    title: "Fast Follow, Not Copy Paste",
    image: "/method/hero-method-03.png",
    paragraphs: [
      "The temptation on a fast-follow brand launch is to treat it like copy and paste. That is how brands end up feeling generic. What made this work strong was that the shared platform gave us speed, but the experience layer still respected what made Method different, its tone, its design language, and the way the brand needed to show up for customers.",
      "That balance is harder than it looks. Reuse without flattening the brand takes judgment. I had to protect the platform pattern, keep the system fit clean, and still make sure the customer experience did not read like SC Johnson enterprise plumbing with a fresh coat of paint.",
    ],
    highlights: [
      "The launch proved shared rails did not have to mean generic brand experience.",
      "Method became evidence that SC Johnson could scale more DTC brands without rebuilding the stack every time.",
    ],
    closing:
      "The real win was not just speed, it was proving that a repeatable architecture could still deliver a brand-right experience.",
    closingImage: "/method/hero-method-05.png",
  },
  impact: {
    eyebrow: "Impact",
    title: "Growth, Speed, Repeatability",
    intro:
      "Method gave SC Johnson more than another live site. It proved the shared home-care platform could support distinct brands, faster launches, and real commercial performance without going back to custom architecture every time.",
    proofPoints: ["Revenue", "Repeatability", "Brand Fit"],
    stats: [
      { value: "$20", suffix: "%+", label: "DTC revenue uplift" },
      { value: "3", suffix: "", label: "launches" },
      { value: "1", suffix: "", label: "unified platform" },
      { value: "0", suffix: "–1", label: "DTC channel" },
    ],
    statsImage: "/method/hero-method-04.png",
    beforeAfter: {
      title: "Before & After",
      summary:
        "Method moved from no owned DTC channel to a live commerce business running on a repeatable SC Johnson platform that still felt true to the brand.",
      columns: [
        {
          label: "Before",
          title: "Strong Brand, No DTC",
          points: [
            "Method had strong retail recognition, but no true direct-to-consumer channel.",
            "The business had no owned DTC relationship to learn from or grow.",
            "Every new brand launch risked becoming a separate technology project.",
          ],
        },
        {
          label: "After",
          title: "Live And Scalable",
          points: [
            "Method launched as a real DTC business on SC Johnson's shared commerce rails.",
            "The experience felt brand-specific instead of generic platform reuse.",
            "The launch proved one unified platform could support multiple brands and markets.",
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
      "This was a compressed launch with very little room for drift. The work had to move fast, stay coordinated across shared systems, and still preserve the Method brand experience, which meant the program needed tight execution, clear decisions, and no tolerance for architecture creep.",
    phases: [
      {
        phase: "Phase 01",
        title: "Diagnose",
        copy: "Mapped what Method needed from a zero-to-one DTC channel, then separated what should stay shared from what needed to feel brand-specific.",
        ringClass: "border-[#D39D23]",
        labelClass: "text-[#D39D23]",
      },
      {
        phase: "Phase 02",
        title: "Align",
        copy: "Brought SC Johnson, BigCommerce, LiveArea, and downstream system owners into one execution path with shared expectations around scope and launch timing.",
        ringClass: "border-[#5E7FB7]",
        labelClass: "text-[#5E7FB7]",
      },
      {
        phase: "Phase 03",
        title: "Design",
        copy: "Defined how SAP, Salsify, WMS, tax, payments, service, and marketing systems would support the launch while keeping the experience on-brand.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 04",
        title: "Build",
        copy: "Connected the storefront, shared enterprise services, and brand experience layer into one commerce flow that could actually support DTC operations.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 05",
        title: "Launch",
        copy: "Delivered Method as a live DTC business and proved SC Johnson could extend the same platform pattern across multiple home-care brands.",
        ringClass: "border-[#3E7BE0]",
        labelClass: "text-[#3E7BE0]",
      },
    ],
  },
  challengeQuote: {
    quote: "Jim got it done.",
    attributionTitle: "Tammy Tran",
    attributionSubtitle: "Director of eCommerce, Method",
    avatarSrc: "/method/tammy-tran-impact.png",
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Platform Reuse In Action",
    intro:
      "The strongest proof here was not outside press, it was platform behavior. Method showed that SC Johnson could move from one successful DTC launch to the next without losing speed, brand integrity, or architectural discipline.",
    featured: {
      media: {
        kind: "image",
        src: "/method/hero-method-06.png",
        alt: "Method DTC launch and platform expansion artifacts",
        aspectRatio: "16/9",
      },
      company: "SC Johnson Home-Care Expansion",
      dates: "2019",
      summary:
        "Method became the second major proof point on SC Johnson's shared DTC platform, demonstrating that reusable architecture could still support a distinct brand experience and commercial lift.",
      tags: ["Expansion", "Platform Reuse"],
    },
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
