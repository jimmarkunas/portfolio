import type { CaseStudyData } from "@/components/case-study/types"

export const boehringeringelheimCaseStudy = {
  slug: "bi",
  breadcrumbCurrent: "Boehringer Ingelheim",
  hero: {
    title: "I Unified Global Commerce During Boehringer's Oracle-to-SAP Migration",
    intro:
      "Boehringer Ingelheim had five markets, different business rules in every country, and a commerce model that nobody could scale cleanly. I led the product and program work to define one global reference storefront, decide where local variation belonged, and keep commerce stable while Oracle gave way to SAP underneath it. The result was a global platform that drove 10x+ online sales, improved throughput by 15%+, and helped move U.S. online sales from 3% to 30%.",
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
    title: "Global Commerce Under Stress",
    copy:
      "I ran product and program leadership for a high-risk global commerce transformation across five countries, with the U.S. and France as the anchor markets. The work had to unify storefront logic, loyalty, ERP migration, and multi-vendor delivery without letting local complexity or cutover risk derail the business.",
    stats: [
      { value: "10", suffix: "x+", label: "online sales" },
      { value: "15", suffix: "%+", label: "order throughput" },
      { value: "5", suffix: "", label: "countries in scope" },
      { value: "3", suffix: "%–30%", label: "U.S. online sales" },
    ],
  },
  problem: {
    eyebrow: "Problem Statement",
    title: "Five Markets, One Mess",
    media: {
      kind: "image",
      src: "/bi/modal-bi-01.png",
      alt: "Boehringer Ingelheim commerce platform visual for global veterinary ordering",
      aspectRatio: "16/9",
    },
    overview:
      "The core problem was simple, every market had its own way of doing commerce and nobody could scale it cleanly. Multi-million dollar accounts were still ordering over the phone, customers were dealing with awkward eligibility rules and fragmented support, and the business was trying to modernize commerce while moving from Oracle to SAP. Boehringer did not need another country-by-country patch job, it needed one global model that could flex locally without losing control.",
    projectOverviewRows: [
      { label: "Client", value: "Boehringer Ingelheim" },
      { label: "Industry", value: "Animal Health • B2B Commerce • Pharmaceuticals" },
      { label: "Timeline", value: "Sep 2020 to Mar 2023" },
    ],
    tools: [
      { label: "Adobe Commerce", icon: "/tool-icons/adobe-logo.png" },
      { label: "Oracle", icon: "/tool-icons/oracle-logo.png" },
      { label: "SAP", icon: "/tool-icons/sap-logo.png" },
      { label: "Mulesoft", icon: "/tool-icons/mulesoft-logo.png" },
      { label: "Avalara", icon: "/tool-icons/avalara-logo.png" },
      { label: "Yotpo", icon: "/tool-icons/yotpo-logo.png" },
    ],
    quote: {
      quote:
        "Multi-million dollar accounts were still ordering over the phone; it was a scalability and an operations problem.",
      attributionTitle: "Max Booker",
      attributionSubtitle: "Director, Digital Channel Excellence, Boehringer Ingelheim",
    },
  },
  role: {
    eyebrow: "My Role",
    title: "Senior Product & Program Manager",
    copy:
      "I owned the product and program spine of the transformation. My job was to define the global reference storefront, set the rules for local variation, manage Oracle-to-SAP coexistence, and keep the backlog, the vendors, and the cutover plan under control while the business kept running.",
    tags: [
      "Global Transformation",
      "Product Leadership",
      "Program Leadership",
      "Commerce Strategy",
    ],
    stats: [
      { value: "8", suffix: "", label: "system integrations" },
      { value: "$30", suffix: "M", label: "program budget" },
      { value: "10", suffix: "+", label: "team size" },
      { value: "30", suffix: " mo", label: "program timeline" },
    ],
    narrative: {
      title: "I Made Global Work Without Losing Local Control",
      paragraphs: [
        "The hard part was not launching Adobe Commerce. The hard part was deciding what had to stay global, what could be localized, and how to keep the program from turning into five different projects with five different truths. I saw early that the business units had to be treated as one product and one program, otherwise every market request would become another exception and the platform would collapse under its own variation.",
        "I defined the global reference storefront, set the boundaries for local variation, and managed the coexistence model between Oracle and SAP while the migration was in motion. I also put a more operational process around scope, protected the backlog aggressively, and kept the work focused on business value instead of letting country-by-country pressure or vendor drift blow up the roadmap.",
      ],
      highlights: [
        "Defined the global reference storefront that anchored five countries while highlighting the U.S. and France.",
        "Set the rules for local variation so markets could adapt without breaking the global model.",
        "Managed Oracle-to-SAP coexistence while protecting cutover sequencing and business continuity.",
      ],
      closing:
        "This is the kind of work I do best, unify global and local requirements without losing control of the program.",
    },
  },
  solution: {
    eyebrow: "Solution",
    title: "One Global Model",
    copy:
      "I helped shape a global commerce architecture that could support heavily regulated B2B ordering, loyalty, localization, and ERP transition inside one operating model. The answer was not to erase local needs, it was to standardize the core, expose the right variation points, and make the platform resilient enough to survive the migration underneath it.",
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
      "Boehringer was not just modernizing a storefront. It was trying to unify five countries, preserve customer continuity, and move the backbone from Oracle to SAP without breaking day-to-day operations. That changes the nature of the work, because every roadmap decision becomes a business continuity decision.",
      "The global reference model mattered because it stopped the program from becoming a collection of country exceptions. Once the core logic was clear, the team could move faster, local teams had a cleaner way to ask for variation, and the business had a platform it could actually expand instead of re-arguing the same architecture every quarter.",
    ],
    highlights: [
      "Customers got cleaner ordering, better eligibility handling, and less fragmented support.",
      "The business got one product model instead of five competing versions of commerce truth.",
    ],
    closing:
      "The platform worked because the governance worked, and the governance worked because someone owned the whole system, not just one market or one vendor stream.",
  },
  impact: {
    eyebrow: "Impact",
    title: "Scale, Throughput, Stability",
    intro:
      "This transformation mattered because it turned a fragile, fragmented B2B commerce setup into a scalable global system. The business got more digital volume, better throughput, fewer service escalations, and a platform that could absorb both country complexity and ERP change without losing the customer experience.",
    proofPoints: ["Sales", "Throughput", "Business Continuity"],
    stats: [
      { value: "10", suffix: "x+", label: "online sales" },
      { value: "15", suffix: "%+", label: "order throughput" },
      { value: "12", suffix: "%", label: "lower escalations" },
      { value: "3", suffix: "%–30%", label: "U.S. online sales" },
    ],
    beforeAfter: {
      title: "Before & After",
      summary:
        "Boehringer moved from fragmented country-by-country commerce to a stronger global model with controlled local flexibility and cleaner execution through the ERP transition.",
      columns: [
        {
          label: "Before",
          title: "Fragmented And Fragile",
          points: [
            "Every market had its own way of doing commerce.",
            "Large accounts were still ordering over the phone.",
            "Country customizations and ERP change created constant cutover risk.",
          ],
        },
        {
          label: "After",
          title: "Unified And Scalable",
          points: [
            "One global reference storefront supported five countries while highlighting the U.S. and France.",
            "Online sales scaled 10x+ with stronger digital adoption in the U.S. animal health segment.",
            "Throughput improved, escalations fell, and the platform stayed stable through Oracle-to-SAP migration.",
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
      "This was a multi-year transformation with enough moving parts to become chaos fast, global stakeholders, local requirements, ERP migration, loyalty, multi-vendor delivery, and country-specific regulation. My job was to create enough structure that the program could move decisively without becoming rigid.",
    phases: [
      { phase: "Phase 01", title: "Diagnose", copy: "Mapped the country-by-country fragmentation, customer pain, and ERP risk that were blocking scale.", ringClass: "border-[#D39D23]", labelClass: "text-[#D39D23]" },
      { phase: "Phase 02", title: "Define", copy: "Set the global reference storefront, the core logic, and the rules for local variation across five countries.", ringClass: "border-[#5E7FB7]", labelClass: "text-[#5E7FB7]" },
      { phase: "Phase 03", title: "Align", copy: "Brought BI teams, country stakeholders, Adobe, and Corra/Publicis around one roadmap and one backlog discipline.", ringClass: "border-[#1A9E9A]", labelClass: "text-[#1A9E9A]" },
      { phase: "Phase 04", title: "Migrate", copy: "Managed Oracle-to-SAP coexistence, sequencing, and cutover planning while protecting business continuity.", ringClass: "border-[#1A9E9A]", labelClass: "text-[#1A9E9A]" },
      { phase: "Phase 05", title: "Expand", copy: "Rolled the model into markets with cleaner execution, stronger throughput, and a platform that could scale without losing control.", ringClass: "border-[#3E7BE0]", labelClass: "text-[#3E7BE0]" },
    ],
  },
  challengeQuote: {
    quote:
      "Jim thinks several steps ahead, looks out for the client, and pushes the work to be better without making it heavier.",
    attributionTitle: "Jared Miller",
    attributionSubtitle: "Client Partner, Corra/Publicis Sapient",
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
        file: "/bi/files/AdobeCaseStudy-BI.pdf",
      },
      {
        company: "Headless B2B Gateways Facilitating Client Engagement Around the World",
        source: "Publicis Sapient / Corra",
        dates: "2024",
        summary: "Corra describes how Boehringer Ingelheim built a global reference B2B storefront for regulated veterinary ordering, loyalty, and international expansion with headless architecture and modular services.",
        tags: ["Case Study", "Global"],
        file: "/bi/files/Publicis Sapient Case Study-BI.pdf",
      },
      {
        company: "Boehringer Ingelheim Global Reference Gateways",
        source: "Corra",
        dates: "2024",
        summary: "Corra details the two global reference gateways for the U.S., France, and the rest of the world, showing how the platform supported regional logic while staying scalable and maintainable.",
        tags: ["Case Study", "B2B"],
        file: "/bi/files/Publicis-Corra-BoehringerIngelheim02.pdf",
      },
    ],
  },
} satisfies CaseStudyData
