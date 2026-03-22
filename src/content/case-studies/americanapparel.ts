import type { CaseStudyData } from "@/components/case-study/types"

export const americanapparelCaseStudy = {
  slug: "aa",
  breadcrumbCurrent: "American Apparel",
  hero: {
    title: "I Helped Save American Apparel With Digital Commerce",
    intro:
      "American Apparel was in real trouble. After the founder was pushed out, the board gave the team a blunt mandate, if digital and omni-channel did not move the numbers fast, there might not be a company left. I partnered with Amanda Lopez to turn that pressure into a global Oracle ATG and RFID-driven commerce engine across 16 regional sites and 260+ stores, helping drive 43% digital revenue uplift while the rest of the business was on fire.",
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
      src: "/americanapparel/hero-americanapparel-01.png",
      alt: "American Apparel omni-channel commerce transformation hero image",
    },
  },
  atAGlance: {
    eyebrow: "At-a-Glance",
    title: "Digital Under Survival Pressure",
    copy:
      "This was not a normal retail replatform. The company was betting survival on a digital turnaround, and my job was to make the technology real fast enough to matter. I helped unify 16 regional Oracle ATG storefronts, real-time RFID inventory, and omni-channel order routing into one commercial system that stores, factory, and web could finally share.",
    stats: [
      { value: "43", suffix: "%+", label: "digital revenue uplift" },
      { value: "14", suffix: "%+", label: "store sales uplift" },
      { value: "300", suffix: "%", label: "omni-channel growth" },
      { value: "65", suffix: "%-", label: "shrink reduction" },
    ],
  },
  problem: {
    eyebrow: "Problem Statement",
    title: "A Retailer Betting Survival on Digital",
    media: {
      kind: "image",
      src: "/americanapparel/hero-americanapparel-02.png",
      alt: "American Apparel digital transformation and omni-channel planning materials",
      aspectRatio: "16/9",
    },
    overview:
      "American Apparel did not need another incremental website upgrade. The company needed digital commerce and omni-channel to move revenue quickly enough to help stabilize a distressed business. Inventory visibility was broken, stores and web did not share the same truth, and a global retail footprint was still behaving like disconnected local systems. If customers could not reliably find size, color, and availability across stores, warehouse, and web, the business would keep bleeding sales and trust.",
    projectOverviewRows: [
      { label: "Client", value: "American Apparel" },
      { label: "Industry", value: "Retail • Apparel • Omni-Channel Commerce" },
      { label: "Timeline", value: "Jun 2013 to Jun 2015" },
    ],
    tools: [
      { label: "Oracle ATG", icon: "/tool-icons/oracle-logo.png" },
      { label: "Mulesoft", icon: "/tool-icons/mulesoft-logo.png" },
      { label: "RFID", icon: "/tool-icons/oracle-logo.png" },
      { label: "Motorola", icon: "/tool-icons/oracle-logo.png" },
    ],
    quote: {
      quote:
        "After they ousted Dov, the company was in dire financial straits. We needed to innovate and we needed to double revenue on a very short timeline.",
      attributionTitle: "Amanda Lopez",
      attributionSubtitle: "Director of eCommerce, American Apparel",
      avatarSrc: "/americanapparel/amanda-lopez.png",
    },
  },
  role: {
    eyebrow: "My Role",
    title: "eCommerce Program Manager",
    copy:
      "Amanda sold the vision to the board, and I became the technical co-pilot who made it real. I owned the product and program layer that connected global IA, PRDs, integration design, launch plans, and omni-channel logic across stores, factory, and web.",
    tags: [
      "Program Leadership",
      "Omni-Channel Commerce",
      "Inventory Systems",
      "Retail Transformation",
    ],
    stats: [
      { value: "7", suffix: "", label: "team size" },
      { value: "$6", suffix: "M", label: "program budget" },
      { value: "16", suffix: "", label: "international sites" },
      { value: "260", suffix: "+", label: "stores" },
    ],
    narrative: {
      title: "I Turned Inventory Truth Into Commercial Performance",
      paragraphs: [
        "The business problem looked like retail, but the real issue was systems truth. Stores, factory, and digital were not operating from one reliable inventory brain, which made global commerce, store fulfillment, and customer promises much harder than they should have been. At the same time, the company did not have the luxury of a slow rebuild. The pressure was immediate, and the board wanted results fast.",
        "I made three decisions that changed the trajectory. First, I moved 16 regional sites onto one Oracle ATG model so markets could share releases, templates, and integrations instead of reinventing the wheel. Second, I made RFID the inventory truth layer for both digital and stores, so size, color, and availability stopped living in conflicting realities. Third, I designed the routing logic behind BOPIS and ship-to-store using inventory, distance, shipping cost, and geolocation so every order became both a customer promise and a profit decision.",
      ],
      highlights: [
        "Moved 16 regional sites onto one Oracle ATG commerce model with shared integrations and release logic.",
        "Made RFID the inventory truth layer across stores, factory, and digital experiences.",
        "Designed the order-routing logic behind BOPIS and ship-to-store to balance fulfillment speed, cost, and store traffic.",
      ],
      closing:
        "This is one of my clearest examples of using digital commerce not as a vanity project, but as a survival mechanism for a broken retail business.",
    },
  },
  solution: {
    eyebrow: "Solution",
    title: "One Global Commerce Engine",
    copy:
      "I helped build a system where stores, factory, and web could finally act like one business. The solution combined a global Oracle ATG stack, real-time RFID inventory visibility, and omni-channel order-routing logic so customers could shop with confidence and the business could fulfill intelligently.",
    cards: [
      {
        category: "Global Commerce Core",
        readTime: "16-site replatform",
        title:
          "I helped move 16 regional sites onto a shared Oracle ATG model so markets could stop operating like isolated storefronts and start sharing templates, integrations, and release patterns.",
        art: "/americanapparel/product-americanapparel-01.png",
      },
      {
        category: "Inventory Truth",
        readTime: "RFID visibility",
        title:
          "Item-level RFID became the inventory spine for stores, factory, and digital, giving the business one real-time view of where every garment actually was.",
        art: "/americanapparel/product-americanapparel-02.png",
      },
      {
        category: "Omni-Channel Fulfillment",
        readTime: "BOPIS + ship-to-store",
        title:
          "I helped design the omni-channel journeys and routing rules that made BOPIS, ship-to-store, and smart fulfillment behave like everyday operations instead of stunt features.",
        art: "/americanapparel/product-americanapparel-03.png",
      },
    ],
  },
  supplementalNarrative: {
    title: "This Was Early Omni-Channel, Not Today's Version",
    image: "/americanapparel/hero-americanapparel-03.png",
    paragraphs: [
      "A lot of what retail now treats as normal was still bleeding edge here. Real-time inventory visibility, profit-aware order routing, BOPIS, ship-to-store, and unified digital plus store logic were not mature defaults yet. We were building the playbook while the company was under real commercial pressure.",
      "That is part of why this case study matters. It was not just that we launched the technology. It was that we made the business behave like a modern omni-channel retailer before most retailers had the operational muscle or systems clarity to do it well.",
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
    title: "Revenue, Stores, And Inventory Discipline",
    intro:
      "The work mattered because it changed the economics of the business, not just the website. Digital revenue grew, store sales moved, omni-channel orders took off from zero, and the inventory system became disciplined enough to reduce both shrink and wasted labor.",
    proofPoints: ["Revenue", "Omni-Channel", "Inventory"],
    stats: [
      { value: "43", suffix: "%+", label: "digital revenue uplift" },
      { value: "14", suffix: "%+", label: "store sales uplift" },
      { value: "300", suffix: "%", label: "omni-channel growth" },
      { value: "65", suffix: "%-", label: "shrink reduction" },
    ],
    statsImage: "/americanapparel/hero-americanapparel-04.png",
    beforeAfter: {
      title: "Before & After",
      summary:
        "American Apparel moved from fragmented retail and digital systems to a unified omni-channel engine that could drive revenue, improve inventory trust, and make stores part of the digital model.",
      columns: [
        {
          label: "Before",
          title: "Fragmented And Bleeding",
          points: [
            "Regional sites, stores, and operations did not share one inventory truth.",
            "Customers could not reliably trust digital promises around size, color, and availability.",
            "The business was under survival pressure and needed digital to move revenue fast.",
          ],
        },
        {
          label: "After",
          title: "Unified And Commercial",
          points: [
            "Digital revenue rose 43%+ and store sales moved up 14%+ with stronger omni-channel behavior.",
            "RFID-driven inventory visibility reduced shrink by 65% to 70% and cut handling costs.",
            "BOPIS, ship-to-store, and smart routing made stores part of the digital revenue engine.",
          ],
        },
      ],
    },
    journeySteps: [
      {
        step: "1",
        title: "Unify the Platform",
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
      "This program had to move like a rescue, not a research project. The work progressed through platform unification, inventory modernization, omni-channel rollout, and global launch coordination while the company was under enormous financial and executive pressure.",
    phases: [
      {
        phase: "Phase 01",
        title: "Stabilize",
        copy:
          "Reframed the work as a commercial rescue program and aligned digital, stores, and operations around one survival-oriented mission.",
        ringClass: "border-[#D39D23]",
        labelClass: "text-[#D39D23]",
      },
      {
        phase: "Phase 02",
        title: "Unify",
        copy:
          "Moved the global storefront footprint toward one Oracle ATG model with shared information architecture, release logic, and integrations.",
        ringClass: "border-[#5E7FB7]",
        labelClass: "text-[#5E7FB7]",
      },
      {
        phase: "Phase 03",
        title: "Instrument",
        copy:
          "Built RFID-driven inventory truth into the stack so stores, factory, and digital all referenced the same reality.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 04",
        title: "Activate",
        copy:
          "Rolled out BOPIS, ship-to-store, and routing logic that connected digital orders to the physical retail network.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 05",
        title: "Scale",
        copy:
          "Used the unified platform, inventory truth, and omni-channel model to drive revenue, improve store performance, and support the broader digital-first turnaround.",
        ringClass: "border-[#3E7BE0]",
        labelClass: "text-[#3E7BE0]",
      },
    ],
  },
  challengeQuote: {
    quote:
      "Q1 revenue is up thanks to the work you moved mountains to make happen.",
    attributionTitle: "Paula Schneider",
    attributionSubtitle: "Chief Executive Officer, American Apparel",
    avatarSrc: "/americanapparel/paula-schneider.png",
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Press, Partners, And Proof",
    intro:
      "The strongest validation here came from the business results and the outside case studies that documented how aggressively American Apparel's digital and inventory model improved in a short period. The public materials back both the revenue story and the operational story.",
    featured: {
      media: {
        kind: "image",
        src: "/americanapparel/hero-americanapparel-06.png",
        alt: "American Apparel omni-channel case study validation",
        aspectRatio: "16/9",
      },
      company: "Three Partner Case Studies Documenting the Real Performance Lift",
      dates: "",
      summary:
        "Motorola, Microsoft, and Object Edge each published independent case studies on the RFID and commerce work at American Apparel, covering inventory accuracy, store sales growth, and digital revenue lift.",
      tags: ["Case Study", "Commerce", "RFID"],
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
        tags: ["Case Study", "Inventory"],
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
