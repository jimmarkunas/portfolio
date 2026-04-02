import type { CaseStudyData } from "@/components/case-study/types"
import { americanapparelCopy } from "@/content/case-studies/chunks/americanapparel.copy"
import { americanapparelGlobalLocations } from "@/content/case-studies/chunks/americanapparel.locations"

export const americanapparelCaseStudy = {
  slug: "aa",
  breadcrumbCurrent: "American Apparel",
  hero: {
    title: "Saving American Apparel With Digital Commerce",
    intro: americanapparelCopy.heroIntro,
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
      src: "/aa/hero-aa-01.png",
      alt: "American Apparel omni-channel commerce transformation hero image",
    },
  },
  atAGlance: {
    eyebrow: "At-a-Glance",
    title: "Digital Survival Horror",
    copy: americanapparelCopy.atAGlanceCopy,
    stats: [
      { value: "43", suffix: "%", label: "Digital Revenue Uplift" },
      { value: "14", suffix: "%", label: "Retail Channel Uplift" },
      { value: "300", suffix: "%", label: "Omni-Channel Growth" },
      { value: "65", suffix: "%", label: "Shrink Reduction" },
    ],
  },
  problem: {
    eyebrow: "Problem Statement",
    title: "Betting on Digital",
    media: {
      kind: "image",
      src: "/aa/modal-aa-01.png",
      alt: "American Apparel digital transformation and omni-channel planning materials",
      aspectRatio: "16/9",
    },
    overview: americanapparelCopy.problemOverview,
    projectOverviewRows: [
      { label: "Client", value: "American Apparel" },
      { label: "Industry", value: "Retail • Apparel • Omni-Channel Commerce" },
      { label: "Timeline", value: "Jun 2013 - Jun 2015" },
    ],
    tools: [
      { label: "JIRA", icon: "/tool-icons/jira-logo.png" },
      { label: "Azure", icon: "/tool-icons/svg/azure-logo.svg" },
      { label: "MS Dynamics", icon: "/tool-icons/msdynamics-logo.png" },
      { label: "Oracle ATG", icon: "/tool-icons/svg/oracle-logo.svg" },
    ],
    quote: {
      quote:
        "After they ousted Dov, AA was on fire and in financial trouble. We needed to innovate and we needed to double revenue on a very short timeline.",
      attributionTitle: "Amanda Lopez",
      attributionSubtitle: "Director of eCommerce, American Apparel",
      avatarSrc: "/aa/amanda-lopez.jpeg",
    },
  },
  role: {
    eyebrow: "My Role",
    title: "eCommerce Program Manager",
    copy: americanapparelCopy.roleCopy,
    tags: [
      "Program Leadership",
      "Omni-Channel Commerce",
      "WMS Logistics",
      "Digital Transformation",
    ],
    stats: [
      { value: "260", suffix: "+", label: "Stores Worldwide" },
      { value: "$6", suffix: "M", label: "Program Budget" },
      { value: "7", suffix: "", label: "Team Size" },
      { value: "16", suffix: "", label: "International Sites" },
    ],
    narrative: {
      title: americanapparelCopy.roleNarrative.title,
      paragraphs: americanapparelCopy.roleNarrative.paragraphs,
      highlights: americanapparelCopy.roleNarrative.highlights,
      closing: americanapparelCopy.roleNarrative.closing,
    },
  },
  solution: {
    eyebrow: "Solution",
    title: "One Global Commerce Engine",
    copy: americanapparelCopy.solutionCopy,
    cards: [
      {
        category: "Global Commerce Core",
        readTime: "16-site replatform",
        title:
          "I helped move 16 regional sites onto a shared Oracle ATG model so markets could stop operating like isolated storefronts and start sharing templates, integrations, and release patterns.",
        art: "/aa/modal-aa-02.png",
      },
      {
        category: "Inventory Truth",
        readTime: "RFID visibility",
        title:
          "Item-level RFID became the inventory spine for stores, factory, and digital, giving the business one real-time view of where every garment actually was.",
        art: "/aa/modal-aa-03.png",
      },
      {
        category: "Omni-Channel Fulfillment",
        readTime: "BOPIS + ship-to-store",
        title:
          "I helped design the omni-channel journeys and routing rules that made BOPIS, ship-to-store, and smart fulfillment behave like everyday operations instead of stunt features.",
        art: "/aa/modal-aa-04.png",
      },
    ],
  },
  supplementalNarrative: {
    title: "Bleeding-Edge Omni-Channel",
    paragraphs: americanapparelCopy.supplementalNarrative.paragraphs,
    highlights: americanapparelCopy.supplementalNarrative.highlights,
    closing: americanapparelCopy.supplementalNarrative.closing,
  },
  impact: {
    eyebrow: "Impact",
    title: "Revenue, Stores & Inventory Discipline",
    intro: americanapparelCopy.impactIntro,
    proofPoints: ["Inventory", "Omni-Channel", "Revenue"],
    stats: [
      { value: "43", suffix: "%", label: "Digital Revenue Uplift" },
      { value: "14", suffix: "%", label: "Store Sales Uplift" },
      { value: "300", suffix: "%", label: "Omni-Channel Growth" },
      { value: "-65", suffix: "%", label: "Shrink Reduction" },
    ],
    statsImage: "/aa/hero-aa-02.png",
    beforeAfter: {
      title: "Before & After",
      summary: americanapparelCopy.impactBeforeAfterSummary,
      columns: [
        {
          label: "Before",
          title: "Fragmented & Bleeding",
          points: [
            "Regional stores & operations didn't share inventory truth.",
            "Customers couldn't reliably trust product availability.",
            "The business needed digital to move revenue fast.",
          ],
        },
        {
          label: "After",
          title: "Unified & Commercial",
          points: [
            "Digital revenue rose 43%+, store sales rose 14%+ w/ omni-channel.",
            "RFID-driven inventory visibility reduced shrink by 65%.",
            "BOPIS & smart routing made stores part of the revenue engine.",
          ],
        },
      ],
    },
    journeySteps: [
      {
        step: "1",
        title: "Unified Platform",
        copy: americanapparelCopy.impactJourneyStepCopies[0],
      },
      {
        step: "2",
        title: "Make Inventory Real",
        copy: americanapparelCopy.impactJourneyStepCopies[1],
      },
      {
        step: "3",
        title: "Turn Stores Into a Revenue Lever",
        copy: americanapparelCopy.impactJourneyStepCopies[2],
      },
    ],
  },
  delivery: {
    eyebrow: "Implementation",
    title: "Delivery Phases",
    introTitle: "How We Moved Fast Enough to Matter",
    introCopy: americanapparelCopy.deliveryIntroCopy,
    phases: [
      {
        phase: "Phase 01",
        title: "Stabilize",
        copy:
          "Drove strategy & rescue program + aligned operations around a survival-oriented mission.",
        ringClass: "border-[#D39D23]",
        labelClass: "text-[#D39D23]",
      },
      {
        phase: "Phase 02",
        title: "Unify",
        copy:
          "Moved the global footprint to one Oracle ATG model with shared information architecture.",
        ringClass: "border-[#5E7FB7]",
        labelClass: "text-[#5E7FB7]",
      },
      {
        phase: "Phase 03",
        title: "Instrument",
        copy:
          "Built RFID-driven inventory truth into one stack for stores, factory, and digital.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 04",
        title: "Activate",
        copy:
          "Launched BOPIS, ship-to-store, and routing logic that connected digital & physical retail networks.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 05",
        title: "Scale",
        copy:
          "Used the unified platform, inventory truth, and omni-channel model to drive revenue.",
        ringClass: "border-[#3E7BE0]",
        labelClass: "text-[#3E7BE0]",
      },
    ],
  },
  globalLocations: {
    title: "American Apparel · Global Retail Footprint",
    locations: americanapparelGlobalLocations,
  },
  challengeQuote: {
    quote:
      "Q1 revenue is up thanks to your work. You moved mountains to make it happen!",
    attributionTitle: "Paula Schneider",
    attributionSubtitle: "Interim Chief Executive Officer, American Apparel",
    avatarSrc: "/aa/paula-schneider.jpeg",
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Press, Partners, And Proof",
    intro:
      "Despite our best efforts, we didn't make it. The board of directors made the decision to file for bankruptcy and then sold it for parts to the Canadians. Just like hand grenades, 'almost' counts in this story.",
    featured: {
      media: {
        kind: "youtube",
        videoId: "IdChd8u4VLg",
        aspectRatio: "16/9",
      },
      company: "American Apparel files for bankruptcy",
      dates: "Oct 5, 2015",
      summary:
        "After a series of scandals and lawsuits, American Apparel is filing for bankruptcy. Buzzfeed News' Business Reporter Sapna Maheshwari spoke to CBSN about the filing.",
      tags: ["News", "CBS"],
    },
    rows: [
      {
        company: "American Apparel Drives Sales and Customer Loyalty With the Right Commerce Experience",
        source: "Object Edge",
        dates: "2015",
        summary:
          "Object Edge documented the global Oracle ATG rollout and the sales lift that followed the omni-channel commerce transformation, including more than 38% eCommerce sales growth.",
        tags: ["Case Study", "eCommerce"],
        file: "/aa/files/01-objectedge-casestudy.pdf",
      },
      {
        company: "American Apparel Uses RFID and Business Intelligence to Improve Inventory Accuracy and Sales",
        source: "Microsoft",
        dates: "2013",
        summary:
          "Microsoft documented store sales growth, lower inventory handling costs, stronger margins, and real-time visibility driven by the RFID and BI stack.",
        tags: ["Case Study", "Inventory Mgmt."],
        file: "/aa/files/03-microsoft-casestudy.pdf",
      },
      {
        company: "American Apparel Deploys Motorola RFID Across Its Supply Chain for Product Visibility",
        source: "Motorola",
        dates: "2012",
        summary:
          "Motorola documented the RFID rollout and showed how item-level inventory visibility dramatically improved stock accuracy, cycle counts, and store operations.",
        tags: ["Case Study", "RFID"],
        file: "/aa/files/02-motorola-casestudy.pdf",
      },
    ],
  },
} satisfies CaseStudyData
