import type { CaseStudyData } from "@/components/case-study/types"

export const americanapparelCaseStudy = {
  slug: "aa",
  breadcrumbCurrent: "American Apparel",
  hero: {
    title: "Saving American Apparel With Digital Commerce",
    intro:
      "American Apparel was in trouble. The founder was pushed out. The board gave us a blunt mandate: move the numbers fast with digital, or there won't be a company left. I partnered with Amanda Lopez, AA's Director of eCommerce, to drive a global Oracle ATG & RFID-driven commerce engine across 16 regional sites and 260+ stores, while the rest of the business was on fire.",
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
    copy:
      "This was not a normal eCommerce re-platform. The company was betting survival on a digital turnaround, and my job was to make the technology real, fast enough to matter. I helped unify 16 international Oracle ATG storefronts, real-time RFID inventory across the entire globe, and omni-channel order routing into one commercial system that retail, factory, and web could finally share.",
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
    overview:
      "American Apparel didn't need another incremental website upgrade. It needed digital commerce & omni-channel to move revenue quickly enough to stabilize a distressed business. But inventory visibility was broken, stores & web didn't share the same truth, and our global retail footprint was behaving like disconnected local systems. If customers couldn't reliably find size, color, and availability across stores & web, the business would keep bleeding sales and trust.",
    projectOverviewRows: [
      { label: "Client", value: "American Apparel" },
      { label: "Industry", value: "Retail • Apparel • Omni-Channel Commerce" },
      { label: "Timeline", value: "Jun 2013 - Jun 2015" },
    ],
    tools: [
      { label: "JIRA", icon: "/tool-icons/jira-logo.png" },
      { label: "Azure", icon: "/tool-icons/msazure-logo.png" },
      { label: "MS Dynamics", icon: "/tool-icons/msdynamics-logo.png" },
      { label: "Oracle ATG", icon: "/tool-icons/oracle-logo.png" },
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
    copy:
      "Amanda sold the vision to the board, and I became the technical co-pilot who made it real. I owned the product & program layer that connected global IA, PRDs, integration design, launch plans, and omni-channel logic across stores, factory, and web.",
    tags: [
      "Program Leadership",
      "Omni-Channel Commerce",
      "WMS Logistics",
      "Digital Transformation",
    ],
    stats: [
      { value: "260", suffix: "+", label: "stores" },
      { value: "$6", suffix: "M", label: "program budget" },
      { value: "7", suffix: "", label: "team size" },
      { value: "16", suffix: "", label: "international sites" },
    ],
    narrative: {
      title: "I Turned Inventory Truth Into Commercial Performance",
      paragraphs: [
        "The business problem looked like retail, but the real issue was systems truth. Stores, factory, and digital weren't operating from one reliable brain, which made global commerce, store fulfillment, and customer promises harder than they should have been. Meanwhile, the company didn't have the luxury of a slow rebuild. The pressure was immediate, and the board wanted results fast.",
        "I made three decisions that changed the trajectory. First, I moved 16 international sites onto one Oracle ATG model so markets could share releases, templates, and integrations instead of reinventing the wheel. I made RFID the inventory truth layer for both digital and stores, so product availability stopped living in conflicting realities. Then, I designed the routing logic behind BOPIS and ship-to-store using inventory, distance, shipping cost, and geolocation so every order became both a customer promise and a profit decision.",
      ],
      highlights: [
        "Moved 16 international sites onto one Oracle ATG commerce model w/ shared integrations and release logic.",
        "Made RFID the inventory truth layer across stores, factory, and digital experiences.",
        "Designed the order-routing logic behind BOPIS and ship-to-store to balance fulfillment speed, cost, and store traffic.",
      ],
      closing:
        "Digital commerce wasn't a vanity project for us, it was a survival mechanism for a broken retail business.",
    },
  },
  solution: {
    eyebrow: "Solution",
    title: "One Global Commerce Engine",
    copy:
      "I built a system where stores, factory, and web could finally act like one business. The solution combined a global Oracle ATG stack, real-time RFID inventory visibility, and omni-channel order-routing logic.",
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
    paragraphs: [
      "A lot of what retail now treats as normal was still bleeding edge here: real-time inventory visibility, profit-aware order routing, BOPIS, ship-to-store, and unified digital plus store logic were not mature defaults in 2014. We built the playbook while the company was under commercial pressure.",
      "Yes, we launched the technology, but we made the business behave like a modern omni-channel retailer before most retailers had the operational muscle or systems clarity to do it well.",
    ],
    highlights: [
      "The work blended digital commerce, in-store operations, and inventory intelligence into one retail model.",
      "American Apparel used omni-channel as a commercial rescue lever before the pattern became standard across retail.",
    ],
    closing:
      "The point was never just to modernize the stack. The point was to move revenue, cut shrink, and make a fragile business more coherent fast.",
    closingImage: "/americanapparel/hero-americanapparel-05.png",
  },
  impact: {
    eyebrow: "Impact",
    title: "Revenue, Stores & Inventory Discipline",
    intro:
      "We changed the economics of the business, not just the website. Digital revenue grew, store sales moved, omni-channel orders took off from zero, and the inventory system became disciplined.",
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
      summary:
        "From fragmented systems to a unified omni-channel engine.",
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
        copy:
          "I helped consolidate 16 regional storefronts onto one Oracle ATG model so the business could move globally instead of piecemeal.",
      },
      {
        step: "2",
        title: "Make Inventory Real",
        copy:
          "I pushed RFID and inventory visibility into the core of the customer and fulfillment experience so stores and web stopped disagreeing about what existed.",
      },
      {
        step: "3",
        title: "Turn Stores Into a Revenue Lever",
        copy:
          "I helped build BOPIS, ship-to-store, and routing logic that made every order a smarter retail decision, not just a checkout event.",
      },
    ],
  },
  delivery: {
    eyebrow: "Implementation",
    title: "Delivery Phases",
    introTitle: "How We Moved Fast Enough to Matter",
    introCopy:
      "This program had to move like a rescue, not a research project. The work progressed while the company was under enormous financial and executive pressure.",
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
