import type { CaseStudyData } from "@/components/case-study/types"

export const boehringeringelheimCaseStudy = {
  slug: "bi",
  breadcrumbCurrent: "Boehringer Ingelheim",
  hero: {
    title: "Boehringer Ingelheim: 1st B2B Adobe Cloud Commerce",
    intro:
      "Boehringer Ingelheim had five markets, country-specific business rules, and a commerce model that didn’t scale. I led the product and program work to define one global reference storefront, decide where local variation belonged, and keep commerce stable through the shift from Oracle to SAP.",
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
      src: "/bi/hero-bi-01.png",
      alt: "Boehringer Ingelheim global commerce transformation hero image",
    },
  },
  atAGlance: {
    eyebrow: "At-a-Glance",
    title: "Global Cloud Commerce",
    copy:
      "I led product and program delivery for a high-risk global commerce transformation across 5 countries, anchored in the U.S. and France. The work had to align storefront logic, loyalty, ERP migration, and multi-vendor delivery without letting local complexity or cutover risk derail it.",
    stats: [
      { value: "10", suffix: "x", label: "Online Sales Uplift" },
      { value: "15", suffix: "%+", label: "Order Throughput" },
      { value: "5", suffix: "", label: "Countries" },
      { value: "30%", suffix: "", label: "U.S. Online Sales Uplift" },
    ],
  },
  problem: {
    eyebrow: "Problem Statement",
    title: "Five Markets, 7 Messes",
    media: {
      kind: "react-diagram",
      component: "bi-data-silos",
    },
    overview:
      "The core problem was simple: every market had its own commerce model, and none of it scaled. Multi-million-dollar accounts were still ordering by phone, customers were dealing with awkward eligibility rules and fragmented support, and the business was trying to modernize commerce while moving from Oracle to SAP. Boehringer didn’t need another country patch. It needed one global model that could flex locally without losing control.",
    projectOverviewRows: [
      { label: "Client", value: "Boehringer Ingelheim" },
      { label: "Industry", value: "Animal Health • B2B Commerce • Pharmaceuticals" },
      { label: "Timeline", value: "Sep 2020 - Mar 2023" },
    ],
    tools: [
      { label: "Adobe Commerce", icon: "/tool-icons/svg/adobe-logo.svg" },
      { label: "Oracle", icon: "/tool-icons/svg/oracle-logo.svg" },
      { label: "SAP", icon: "/tool-icons/svg/sap-logo.svg" },
      { label: "Mulesoft", icon: "/tool-icons/svg/mulesoft-logo.svg" },
      { label: "Avalara", icon: "/tool-icons/svg/avalara-logo.svg" },
      { label: "Yotpo", icon: "/tool-icons/svg/yotpo-logo.svg" },
    ],
    quote: {
      quote:
        "Multi-million dollar accounts were still ordering over the phone; it was a scalability and an operations problem.",
      attributionTitle: "Max Booker",
      attributionSubtitle: "Director, Digital Channel Excellence, Boehringer Ingelheim",
      avatarSrc: "/bi/max-booker.jpeg",
    },
  },
  role: {
    eyebrow: "My Role",
    title: "Senior Product & Program Manager",
    copy:
      "I ran the product and program spine of the transformation. I defined the global storefront, set the rules for local variation, managed Oracle-to-SAP coexistence, and kept backlog, vendors, and cutover from drifting while the business kept running.",
    tags: [
      "Global Transformation",
      "Product Leadership",
      "Program Leadership",
      "Commerce Strategy",
    ],
    stats: [
      { value: "8", suffix: "", label: "System Integrations" },
      { value: "$30", suffix: "M", label: "Program Budget" },
      { value: "10", suffix: "+", label: "Team Size" },
      { value: "1", suffix: "st", label: "B2B Adobe CC Stack" },
    ],
    narrative: {
      title: "I Made Global Work Without Losing Local Control",
      paragraphs: [
        "Launching Adobe Commerce wasn’t the hard part. The hard part was drawing the line between global and local, then stopping 5 markets from turning one platform into five different versions of the truth. If the business units weren’t run as one product and one program, the platform would drown in exceptions.",
        "I defined the global storefront, set the rules for local variation, and managed Oracle-SAP coexistence during migration. Then I locked down scope, protected the backlog, and stopped country pressure and vendor drift from wrecking the roadmap.",
      ],
      highlights: [
        "Defined the global reference storefront that anchored 5 countries while highlighting the U.S. and France.",
        "Set the rules for local variation so markets could adapt without breaking the global model.",
        "Managed Oracle-to-SAP migration while protecting cutover sequencing and business continuity.",
      ],
      closing:
        "This is the kind of work I do best, unify global requirements without losing control of the program.",
    },
  },
  solution: {
    eyebrow: "Solution",
    title: "Classic Adobe With a Twist",
    copy:
      "Rebuilt a global commerce model that could handle regulated B2B ordering, loyalty, localization, and ERP transition without breaking.",
    diagramKey: "bi-commerce-ecosystem",
    cards: [
      {
        category: "Global Architecture",
        readTime: "Reference Storefront",
        title:
          "I defined the global reference build that gave Boehringer one strong commerce baseline instead of a new custom solution for every market.",
        art: "olive",
      },
      {
        category: "ERP Transition",
        readTime: "Oracle-to-SAP Coexistence",
        title:
          "I helped manage the coexistence model so commerce could keep operating while Oracle and SAP logic were being migrated and stabilized.",
        art: "olive",
      },
      {
        category: "Local Execution",
        readTime: "Market Variation Rules",
        title:
          "I set the rules for what could vary by market, including regulation, language, loyalty, checkout, and account logic, so local needs did not destroy the global model.",
        art: "olive",
      },
    ],
  },
  supplementalNarrative: {
    title: "The Hard Part Was Coexistence",
    paragraphs: [
      "Boehringer wasn’t just modernizing a storefront. It was unifying five countries and moving from Oracle to SAP without disrupting day-to-day operations. Every roadmap decision carried business continuity risk.",
      "The global reference model stopped the platform from getting buried under country exceptions. Once the core logic was locked, teams moved faster, local variation got cleaner, and the business finally had something it could scale.",
    ],
    highlights: [
      "Customers got cleaner ordering, better eligibility handling, and less fragmented support.",
      "The business got one product model instead of 5 competing versions of commerce truth.",
    ],
    closing:
      "The platform worked because the governance worked, and the governance worked because someone owned the whole system, not just one market or one vendor stream.",
  },
  impact: {
    eyebrow: "Impact",
    title: "Scale, Throughput, Stability",
    intro:
      "Fragmented B2B commerce became a scalable global system with more digital volume, fewer service escalations, and a platform that could absorb country complexity.",
    proofPoints: ["Sales", "Throughput", "Business Continuity"],
    stats: [
      { value: "10", suffix: "x", label: "Online Sales" },
      { value: "15", suffix: "%", label: "Order Throughput" },
      { value: "12", suffix: "%", label: "Less Escalations" },
      { value: "30", suffix: "%", label: "U.S. Online Sales" },
    ],
    beforeAfter: {
      title: "Before & After",
      summary:
        "BI moved from fragmented country-by-country commerce to a stronger global model.",
      columns: [
        {
          label: "Before",
          title: "Fragmented + Fragile",
          points: [
            "Every market had its own way of doing commerce.",
            "Large accounts were still ordering over the phone.",
            "Country customizations & ERP change created constant cutover risk.",
          ],
        },
        {
          label: "After",
          title: "Unified + Scalable",
          points: [
            "One global reference storefront supported 5 countries.",
            "Online sales scaled 10x+ with stronger digital adoption.",
            "Throughput improved, escalations fell, and the platform stayed stable.",
          ],
        },
      ],
    },
    journeySteps: [
      { step: "1", title: "Define The Global Core", copy: "I defined the global storefront model so the program had one backbone instead of five competing patterns." },
      { step: "2", title: "Control Local Variation", copy: "I set boundaries for what markets could localize, which kept flexibility without letting country requests fragment the platform." },
      { step: "3", title: "Protect The Migration", copy: "I managed the coexistence between Oracle and SAP so the business could keep moving while the technical backbone changed underneath it." },
    ],
  },
  delivery: {
    eyebrow: "Implementation",
    title: "Delivery Phases",
    introTitle: "How I Kept The Program Under Control",
    introCopy:
      "This was a multi-year transformation with global stakeholders, local requirements, ERP migration, loyalty, vendors, and regulation all moving at once.",
    phases: [
      { phase: "Phase 01", title: "Diagnose", copy: "Brought in by Publicis to save the project and replace the current PM.", ringClass: "border-[#D39D23]", labelClass: "text-[#D39D23]" },
      { phase: "Phase 02", title: "Define", copy: "Led global reference storefront, core logic, and rules for local variation.", ringClass: "border-[#5E7FB7]", labelClass: "text-[#5E7FB7]" },
      { phase: "Phase 03", title: "Align", copy: "Aligned BI teams, country stakeholders, Adobe, and agency around one roadmap.", ringClass: "border-[#1A9E9A]", labelClass: "text-[#1A9E9A]" },
      { phase: "Phase 04", title: "Migrate", copy: "Managed Oracle-to-SAP coexistence, sequencing, and cutover planning.", ringClass: "border-[#1A9E9A]", labelClass: "text-[#1A9E9A]" },
      { phase: "Phase 05", title: "Expand", copy: "Rolled the model into markets with cleaner execution.", ringClass: "border-[#3E7BE0]", labelClass: "text-[#3E7BE0]" },
    ],
  },
  challengeQuote: {
    quote:
      "Jim thinks several steps ahead, looks out for the client, and pushes the work to be better without making it heavier.",
    attributionTitle: "Jared Miller",
    attributionSubtitle: "Client Partner, Corra/Publicis Sapient",
    avatarSrc: "/bi/jared-miller.jpeg",
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Press & Accolades",
    intro:
      "The strongest outside proof here is not hype, it is validation from Adobe and Corra that the platform delivered measurable digital growth, global flexibility, and a stronger operating model for animal health commerce.",
    rows: [
      {
        company: "Building Success With B2B Ecommerce in Animal Health",
        source: "Adobe",
        dates: "2024",
        summary: "Adobe says Boehringer Ingelheim used Adobe Commerce to create more scalable B2B ecommerce in animal health, with U.S. online sales climbing from 3% to 30% after launch.",
        tags: ["Adobe", "Commerce"],
        file: "/bi/files/BI-AdobeCaseStudy.pdf",
      },
      {
        company: "Headless B2B Gateways Facilitating Client Engagement Around the World",
        source: "Publicis Sapient / Corra",
        dates: "2024",
        summary: "Corra describes how Boehringer Ingelheim built a global reference B2B storefront for regulated veterinary ordering, loyalty, and international expansion with headless architecture and modular services.",
        tags: ["Case Study", "Global"],
        file: "/bi/files/BI-Publicis-Sapient-Case-Study_01.pdf",
      },
      {
        company: "Boehringer Ingelheim Global Reference Gateways",
        source: "Corra",
        dates: "2024",
        summary: "Corra details the two global reference gateways for the U.S., France, and the rest of the world, showing how the platform supported regional logic while staying scalable and maintainable.",
        tags: ["Case Study", "B2B"],
        file: "/bi/files/BI-Publicis-Sapient-Case-Study_02.pdf",
      },
    ],
  },
} satisfies CaseStudyData
