import type { CaseStudyData } from "@/components/case-study/types"

export const mrsmeyersCaseStudy = {
  slug: "mm",
  breadcrumbCurrent: "Mrs. Meyer's",
  hero: {
    title: "I Helped Launch Mrs. Meyer's First DTC Channel From Scratch",
    intro:
      "SC Johnson had no direct-to-consumer channel for Mrs. Meyer's, which meant no owned customer relationship, no first-party data loop, and no way to prove DTC could add revenue without disrupting retail. I led the program to stand up a modern commerce stack across BigCommerce, SAP, Salsify, tax, payments, fulfillment, and marketing systems, then helped turn that launch into a reusable pattern the business could extend to Caldrea and Method. The result was 15%+ revenue uplift and a new channel SCJ could finally own.",
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
      src: "/mrsmeyers/hero-mrsmeyers-01.png",
      alt: "Mrs. Meyer's direct-to-consumer commerce launch hero image",
    },
  },
  atAGlance: {
    eyebrow: "At-a-Glance",
    title: "Zero To One DTC",
    copy:
      "This was SC Johnson's first real move into modern home-care DTC for Mrs. Meyer's. I helped design the integration pattern, calm the enterprise politics, and get a fragile mix of retail-era systems to behave like a working direct-to-consumer machine, then set the pattern up so Caldrea and Method could follow.",
    stats: [
      { value: "$15", suffix: "%+", label: "revenue uplift" },
      { value: "10", suffix: "%", label: "brand GMV target" },
      { value: "2", suffix: "+", label: "follow-on brands" },
      { value: "10", suffix: "+", label: "systems in stack" },
    ],
  },
  problem: {
    eyebrow: "Problem Statement",
    title: "No DTC, No Safety Net",
    media: {
      kind: "image",
      src: "/mrsmeyers/hero-mrsmeyers-02.png",
      alt: "SC Johnson commerce architecture and launch-planning materials",
      aspectRatio: "16/9",
    },
    overview:
      "SC Johnson wanted to prove direct-to-consumer could work for Mrs. Meyer's without creating channel conflict or operational chaos, but the company had no DTC motion, no owned customer relationship, and no modern path from browsing to fulfillment. Underneath that was the real problem, old-money enterprise systems built for pallets, retail distribution, and slow-moving processes suddenly had to support parcel shipping, tax, payments, subscriptions, customer service, and a consumer-grade storefront.",
    projectOverviewRows: [
      { label: "Client", value: "SC Johnson" },
      { label: "Industry", value: "CPG • Home Care • eCommerce" },
      { label: "Timeline", value: "Feb 2019 to Jul 2019" },
    ],
    tools: [
      { label: "BigCommerce", icon: "/tool-icons/bc-logo.png" },
      { label: "SAP", icon: "/tool-icons/sap-logo.png" },
      { label: "Salsify", icon: "/tool-icons/salsify-logo.png" },
      { label: "Avalara", icon: "/tool-icons/avalara-logo.png" },
    ],
    quote: {
      quote:
        "This was the first time BC partnered with a globally recognized retail brand to go from zero to one, and Jim was the perfect PM for the job.",
      attributionTitle: "Rachel Gavinski",
      attributionSubtitle: "Key Account Director, BigCommerce",
    },
  },
  role: {
    eyebrow: "My Role",
    title: "Senior Program Manager",
    copy:
      "I owned the cross-functional machine, architecture conversations, vendor coordination, launch planning, and executive/client communication required to get this live. In practice, the role was part program leadership, part solutioning, and part political cleanup.",
    tags: [
      "Program Leadership",
      "Solution Architecture",
      "Enterprise DTC",
      "System Integration",
    ],
    stats: [
      { value: "10", suffix: "+", label: "system integrations" },
      { value: "$3", suffix: "M", label: "program budget" },
      { value: "25", suffix: "", label: "team size" },
      { value: "5", suffix: " mo", label: "program timeline" },
    ],
    narrative: {
      title: "I Made Enterprise Plumbing Behave Like DTC",
      paragraphs: [
        "The hard part was not making the storefront look good. The hard part was getting SC Johnson's enterprise stack to behave like a direct-to-consumer business for the first time. We had to connect BigCommerce to SAP, product data, tax, payments, fulfillment, customer support, and marketing systems, while keeping the client calm, the agencies aligned, and the launch moving on a compressed timeline.",
        "I made three decisions that changed the trajectory. First, I helped define the SAP and BigCommerce integration pattern so the business had a clean path from catalog and order capture into back-office operations. Second, I pushed Rewind backups because the risk posture around launch and storefront changes was too casual for a first-time DTC motion. Third, I structured the stack and solution pattern so Mrs. Meyer's was not a dead-end project, it became the base for Caldrea and Method to follow.",
      ],
      highlights: [
        "Defined the core SAP and BigCommerce integration approach for a first-time enterprise DTC launch.",
        "Pushed backup and recovery safeguards that reduced launch risk and protected the storefront.",
        "Structured the home-care stack to become a reusable pattern for follow-on SCJ brands.",
      ],
      closing:
        "This was not a normal website launch, it was the moment SC Johnson proved it could open a new revenue channel and make the enterprise systems underneath it hold together.",
    },
  },
  solution: {
    eyebrow: "Solution",
    title: "A Reusable DTC Stack",
    copy:
      "I helped shape a launch model that connected storefront, product data, tax, payments, fulfillment, support, and marketing into one workable consumer flow. Just as important, the stack was designed to be reusable so SCJ could extend the pattern beyond Mrs. Meyer's instead of funding a brand-new solution every time.",
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
      "This project was technically hard, but the political layer mattered just as much. There were moments when internal account management and stakeholder alignment were not where they needed to be, so I did a lot of one-on-one persuasion, damage control, and translation to keep confidence high and prevent small issues from becoming bigger ones.",
      "That is part of why this story matters. It was not just a launch under pressure, it was a launch where the client had to trust that someone was actually steering the ship. Once the system held and the site went live, that trust turned into permission to reuse the pattern across additional home-care brands.",
    ],
    highlights: [
      "The launch required constant translation across client, agency, platform, and operations teams.",
      "Success built the credibility needed to extend the model beyond one brand.",
    ],
    closing:
      "I was not just moving tickets, I was keeping the room stable long enough for the launch to happen and the business case to prove itself.",
  },
  impact: {
    eyebrow: "Impact",
    title: "A New Revenue Channel",
    intro:
      "The launch mattered because it gave SC Johnson a direct-to-consumer channel it did not have before, then proved the model could drive real revenue and support future launches. This was not a cosmetic eCommerce project, it opened a new commercial lane for the business.",
    proofPoints: ["Revenue", "Repeatability", "System Fit"],
    stats: [
      { value: "$15", suffix: "%+", label: "revenue uplift" },
      { value: "10", suffix: "%", label: "brand GMV target" },
      { value: "2", suffix: "+", label: "follow-on brands" },
      { value: "0", suffix: "–1", label: "DTC channel" },
    ],
    beforeAfter: {
      title: "Before & After",
      summary:
        "SC Johnson moved from no owned DTC motion for Mrs. Meyer's to a functioning commerce stack that could support direct revenue and future brand launches.",
      columns: [
        {
          label: "Before",
          title: "No DTC Motion",
          points: [
            "No direct-to-consumer storefront for Mrs. Meyer's.",
            "No owned first-party relationship with shoppers.",
            "Enterprise systems were not set up for parcel-style consumer commerce.",
          ],
        },
        {
          label: "After",
          title: "Live And Repeatable",
          points: [
            "Mrs. Meyer's launched with a working end-to-end DTC stack.",
            "The business had a path to 10% of brand GMV through DTC.",
            "The architecture and delivery model were reused for Caldrea and Method.",
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
    introTitle: "How I Forced It Through",
    introCopy:
      "This was a compressed launch with real system risk and very little room for drift. The work had to move from discovery into design, integration, validation, and launch fast, while keeping multiple vendors, enterprise systems, and brand stakeholders moving toward one date.",
    phases: [
      {
        phase: "Phase 01",
        title: "Diagnose",
        copy: "Mapped the real gaps across DTC capabilities, enterprise systems, fulfillment, and consumer experience expectations.",
        ringClass: "border-[#D39D23]",
        labelClass: "text-[#D39D23]",
      },
      {
        phase: "Phase 02",
        title: "Align",
        copy: "Brought SCJ, BigCommerce, agencies, and downstream system owners into one execution path and one launch target.",
        ringClass: "border-[#5E7FB7]",
        labelClass: "text-[#5E7FB7]",
      },
      {
        phase: "Phase 03",
        title: "Design",
        copy: "Defined the integration logic, storefront approach, backup posture, and reusable stack pattern for future home-care brands.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 04",
        title: "Build",
        copy: "Connected BigCommerce, SAP, Salsify, Avalara, payments, fulfillment, Klaviyo, and analytics into a live commerce workflow.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 05",
        title: "Launch",
        copy: "Delivered the first live DTC channel for Mrs. Meyer's, then created the confidence and architecture pattern to extend it to more SCJ brands.",
        ringClass: "border-[#3E7BE0]",
        labelClass: "text-[#3E7BE0]",
      },
    ],
  },
  challengeQuote: {
    quote:
      "Jim was in the foxhole with us on this one. When things got hard, he stayed calm, stayed close to the client, and helped us get it over the line.",
    attributionTitle: "Jon Michael",
    attributionSubtitle: "Stakeholder, SCJ Program Team",
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Validation & Expansion",
    intro:
      "The strongest proof here was not outside press, it was what happened next. The launch worked, BigCommerce leadership recognized it internally, and the pattern became the foundation for more SCJ home-care brands to follow.",
    rows: [
      {
        company: "Mrs. Meyer's Clean Day Launch",
        dates: "2019",
        summary:
          "SC Johnson moved from no DTC motion to a live consumer channel for one of its flagship home-care brands.",
        tags: ["Launch", "DTC"],
      },
      {
        company: "Caldrea Launch",
        dates: "2020",
        summary:
          "The underlying launch pattern extended into Caldrea, proving the architecture and delivery model were reusable.",
        tags: ["Expansion", "Reusable Stack"],
      },
      {
        company: "Method Follow-On Path",
        dates: "Post-launch",
        summary:
          "The work created a template SC Johnson could use as it extended the home-care DTC pattern into additional brands like Method.",
        tags: ["Scale", "Pattern"],
      },
    ],
  },
} satisfies CaseStudyData
