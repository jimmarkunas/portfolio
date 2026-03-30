import type { CaseStudyData } from "@/components/case-study/types"

export const mrsmeyersCaseStudy = {
  slug: "mm",
  breadcrumbCurrent: "Mrs. Meyer's",
  hero: {
    title: "Launching Mrs. Meyer's First DTC Channel From Scratch",
    intro:
      "Mrs. Meyer’s had no DTC channel, which left SC Johnson with no owned customer relationship, no first-party data, and no proof DTC could add revenue without cannibalizing retail.I led the launch across the commerce stack, then helped turn it into a reusable model for Caldrea and Method.",
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
      src: "/mm/hero-mm-01.png",
      alt: "Mrs. Meyer's direct-to-consumer commerce launch hero image",
    },
  },
  atAGlance: {
    eyebrow: "At-a-Glance",
    title: "From Zero - One DTC",
    copy:
      "This was SC Johnson's first real move into modern home-care DTC for Mrs. Meyer's. I helped design the integration pattern, calm the enterprise politics, and get a fragile mix of retail-era systems to behave like a working direct-to-consumer machine.",
    stats: [
      { value: "$15", suffix: "%", label: "Revenue Uplift" },
      { value: "10", suffix: "%", label: "Brand GMV Target" },
      { value: "2", suffix: "+", label: "Follow-on Brands" },
      { value: "10", suffix: "+", label: "Systems in Stack" },
    ],
  },
  problem: {
    eyebrow: "Problem Statement",
    title: "No Digital Ownership",
    media: {
      kind: "image",
      src: "/mrsmeyers/hero-mrsmeyers-02.png",
      alt: "SC Johnson commerce architecture and launch-planning materials",
      aspectRatio: "16/9",
    },
    overview:
      "SC Johnson wanted to prove DTC could work for Mrs. Meyer’s without blowing up retail. The company had no DTC muscle, no owned customer relationship, and no modern path from storefront to fulfillment. Worse, the systems underneath were built for pallets, retail distribution, and slow enterprise processes, not parcel shipping, tax, payments, subscriptions, customer service, and a consumer-grade storefront.",
    projectOverviewRows: [
      { label: "Client", value: "SC Johnson" },
      { label: "Industry", value: "CPG • Home Care • eCommerce" },
      { label: "Timeline", value: "Feb 2019 - Jul 2019" },
    ],
    tools: [
      { label: "BigCommerce", icon: "/tool-icons/svg/bc-logo-blk.svg" },
      { label: "SAP", icon: "/tool-icons/svg/sap-logo.svg" },
      { label: "Salsify", icon: "/tool-icons/svg/salsify-logo.svg" },
      { label: "Avalara", icon: "/tool-icons/svg/avalara-logo.svg" },
    ],
    quote: {
      quote:
        "This was the first time BC partnered with a globally recognized retail brand to go from zero to one, and Jim was the perfect PM for the job.",
      attributionTitle: "Rachel Gavinski",
      attributionSubtitle: "Key Account Director, BigCommerce",
      avatarSrc: "/mm/rachel-gavinski.jpeg",
    },
  },
  role: {
    eyebrow: "My Role",
    title: "Senior Program Manager",
    copy:
      "I owned the cross-functional machine, architecture conversations, vendor coordination, launch planning, and executive/client communication required to get this live. My role was part program leadership, part solutioning, and part political cleanup.",
    tags: [
      "Program Leadership",
      "Solution Architecture",
      "Enterprise DTC",
      "System Integration",
    ],
    stats: [
      { value: "10", suffix: "+", label: "System Integrations" },
      { value: "$3", suffix: "M", label: "Program Budget" },
      { value: "25", suffix: "", label: "Team Size" },
      { value: "5", suffix: " mo", label: "Program Timeline" },
    ],
    narrative: {
      title: "I Made Enterprise Plumbing Behave Like DTC",
      paragraphs: [
        "The hard part wasn’t the storefront. It was getting SC Johnson’s enterprise stack to work like a DTC business for the first time. We had to connect BigCommerce to SAP, product data, tax, payments, fulfillment, support, and marketing, while keeping the launch moving on a tight timeline.",
        "I changed the trajectory in three places. I helped define the SAP and BigCommerce integration pattern, pushed for Rewind backups when the launch risk was too loose, and structured the stack so Mrs. Meyer’s became the model for Caldrea and Method instead of a dead-end build.",
      ],
      highlights: [
        "Defined the core SAP & BigCommerce integration approach for a first-time enterprise DTC launch.",
        "Pushed backup and recovery safeguards that reduced launch risk and protected the storefront.",
        "Structured the home-care stack to become a reusable pattern for follow-on SCJ brands.",
      ],
      closing:
        "This was the moment SC Johnson proved it could open a new revenue channel and make the enterprise systems underneath it hold together.",
    },
  },
  solution: {
    eyebrow: "Solution",
    title: "A Reusable DTC Stack",
    copy:
      "Built a reusable launch model connecting storefront, product data, tax, payments, fulfillment, support, and marketing into one workable consumer flow.",
    diagramKey: "scj-commerce-architecture",
    cards: [
      {
        category: "Commerce Core",
        readTime: "Storefront + checkout",
        title:
          "BigCommerce provided the storefront, cart, and checkout layer that let SCJ go from no DTC presence to a real consumer buying experience without building a platform from scratch.",
        art: "olive",
      },
      {
        category: "Enterprise Integration",
        readTime: "Back-office orchestration",
        title:
          "SAP, Salsify, Avalara, payments, fulfillment, and service tools were connected into a launch pattern that could support parcel-style DTC instead of retail-era workflows.",
        art: "olive",
      },
      {
        category: "Scalable Pattern",
        readTime: "Brand repeatability",
        title:
          "The solution was structured so Caldrea and Method could follow the same model, turning one launch into a repeatable SCJ home-care DTC pattern.",
        art: "olive",
      },
    ],
  },
  supplementalNarrative: {
    title: "The Politics Were Real",
    paragraphs: [
      "The technical work was hard, but the politics were just as important. When alignment slipped, I handled the one-on-one persuasion and translation needed to keep confidence up and stop small issues from growing.",
      "This wasn’t just a pressured launch. The client needed to trust that someone was actually steering it. Once the system held, that trust turned into permission to reuse the pattern across other home-care brands.",
    ],
    highlights: [
      "The launch required constant translation across client, agency, platform, and operations teams.",
      "Success built the credibility needed to extend the model beyond one brand.",
    ],
    closing:
      "I wasn't just moving tickets, I was keeping the room stable so the launch could happen and drove a provable business case for a large enterprise.",
  },
  impact: {
    eyebrow: "Impact",
    title: "A New Revenue Channel",
    intro:
      "This launch opened a new DTC revenue lane for SC Johnson and proved the model could scale beyond one brand.",
    proofPoints: ["Revenue", "Repeatability", "System Fit"],
    stats: [
      { value: "$15", suffix: "%", label: "Revenue Uplift" },
      { value: "10", suffix: "%", label: "Brand GMV Target" },
      { value: "2", suffix: "+", label: "Follow-on Brands" },
      { value: "0-1", suffix: "", label: "DTC Channel" },
    ],
    beforeAfter: {
      title: "Before & After",
      summary:
        "SC Johnson moved from no owned DTC motion to a functioning ROI machine.",
      columns: [
        {
          label: "Before",
          title: "No DTC Motion",
          points: [
            "No direct-to-consumer storefront for Mrs. Meyer's.",
            "No owned 1st-party relationship with shoppers.",
            "Enterprise systems were not set up for consumer commerce.",
          ],
        },
        {
          label: "After",
          title: "Live + Repeatable",
          points: [
            "Mrs. Meyer's launched a working end-to-end DTC stack.",
            "Direct path to 10% of brand GMV through DTC.",
            "The architecture & delivery model were reused for Caldrea & Method.",
          ],
        },
      ],
    },
    journeySteps: [
      {
        step: "1",
        title: "Define The Launch Pattern",
        copy:
          "I helped define how storefront, ERP, product data, tax, payments, fulfillment, and reporting needed to work together for a first-time DTC motion.",
      },
      {
        step: "2",
        title: "Reduce The Risk",
        copy:
          "I pushed safeguards like Rewind backups and tighter launch discipline because the business did not have room for a sloppy first impression.",
      },
      {
        step: "3",
        title: "Prove The Model",
        copy:
          "Once the launch held, SCJ had more than one new site, it had a repeatable home-care DTC pattern the business could extend.",
      },
    ],
  },
  delivery: {
    eyebrow: "Implementation",
    title: "Delivery Phases",
    introTitle: "How I Drove",
    introCopy:
      "This was a compressed launch with real system risk and no room for drift. I moved discovery, design, integration, validation, and vendors toward one date.",
    phases: [
      {
        phase: "Phase 01",
        title: "Diagnose",
        copy: "Mapped gaps across DTC capabilities, enterprise systems & fulfillment.",
        ringClass: "border-[#D39D23]",
        labelClass: "text-[#D39D23]",
      },
      {
        phase: "Phase 02",
        title: "Align",
        copy: "Brought SCJ, BC, agencies, and downstream system owners into one path.",
        ringClass: "border-[#5E7FB7]",
        labelClass: "text-[#5E7FB7]",
      },
      {
        phase: "Phase 03",
        title: "Design",
        copy: "Defined integration logic, storefront approach, and reusable stack.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 04",
        title: "Build",
        copy: "Connected BC, SAP, Salsify, Avalara, fulfillment, and Klaviyo.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 05",
        title: "Launch",
        copy: "Delivered first live DTC channel for Mrs. Meyer's, then more SCJ brands.",
        ringClass: "border-[#3E7BE0]",
        labelClass: "text-[#3E7BE0]",
      },
    ],
  },
  challengeQuote: {
    quote:
      "Working with Jim was a life-changing experience.",
    attributionTitle: "Jon Michael",
    attributionSubtitle: "Stakeholder, SCJ Program Team",
    avatarSrc: "/mm/jon-michael.jpeg",
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Press & Accolades",
    leadImage: {
      src: "/mm/kudos-mrsmeyers-01.png",
      alt: "Mrs. Meyer's DTC launch recognition",
    },
    intro:
      "The strongest proof here was: the launch worked, BigCommerce leadership recognized it internally, and the pattern became the foundation for more SCJ home-care brands to follow. Plus Jon Michael is super quotable.",
    rows: [],
  },
} satisfies CaseStudyData
