import type { CaseStudyRevampData } from "./types"
import type { CaseStudyTool } from "@/content/case-studies"

const tools: CaseStudyTool[] = [
  { label: "JIRA", icon: "/tool-icons/jira-logo.png" },
  { label: "Azure", icon: "/tool-icons/svg/azure-logo.svg" },
  { label: "MS Dynamics", icon: "/tool-icons/msdynamics-logo.png" },
  { label: "Oracle ATG", icon: "/tool-icons/svg/oracle-logo.svg" },
]

const image = (src: string, alt: string, width: number, height: number) => ({ src, alt, width, height })

export const aaRevampCaseStudy = {
  slug: "aa",
  breadcrumbCurrent: "American Apparel",
  metadata: {
    title: "Saving American Apparel With Digital Commerce",
    description: "American Apparel's global Oracle ATG, RFID, and omni-channel commerce transformation.",
    image: image("/aa/hero-aa-01.png", "American Apparel omni-channel commerce transformation hero image", 2880, 1164),
  },
  hero: {
    eyebrow: "Oracle ATG · RFID · Omni-Channel Commerce · Apparel",
    title: "Saving American Apparel With Digital Commerce",
    intro: "American Apparel was in trouble. The founder was pushed out. The board gave us a blunt mandate: move the numbers fast with digital, or there won't be a company left. I partnered with Amanda Lopez, AA's Director of eCommerce, to drive a global Oracle ATG & RFID-driven commerce engine across 16 regional sites and 260+ stores, while the rest of the business was on fire.",
    metrics: [
      { value: "43", suffix: "%", label: "Digital Revenue Uplift" },
      { value: "14", suffix: "%", label: "Retail Channel Uplift" },
      { value: "300", suffix: "%", label: "Omni-Channel Growth" },
    ],
    image: { kind: "image", src: "/aa/hero-aa-01.png", alt: "American Apparel omni-channel commerce transformation hero image", aspectRatio: "16/9" },
  },
  productionQuote: {
    quote: "After they ousted Dov, AA was on fire and in financial trouble. We needed to innovate and we needed to double revenue on a very short timeline.",
    attributionTitle: "Amanda Lopez",
    attributionSubtitle: "Director of eCommerce, American Apparel",
    avatarSrc: "/aa/amanda-lopez.jpeg",
  },
  executiveBrief: {
    eyebrow: "At-a-Glance",
    title: "Digital Survival Horror",
    copy: "This was not a normal eCommerce re-platform. The company was betting survival on a digital turnaround, and my job was to make the technology real, fast enough to matter. I helped unify 16 international Oracle ATG storefronts, real-time RFID inventory across the entire globe, and omni-channel order routing into one commercial system that retail, factory, and web could finally share.",
    tools,
    problem: "American Apparel didn't need another incremental website upgrade. It needed digital commerce & omni-channel to move revenue quickly enough to stabilize a distressed business. But inventory visibility was broken, stores & web didn't share the same truth, and our global retail footprint was behaving like disconnected local systems. If customers couldn't reliably find size, color, and availability across stores & web, the business would keep bleeding sales and trust.",
    mandate: "Unify global commerce and inventory into one operating model that could stabilize the business and turn omni-channel into a real commercial lever.",
    whatIChanged: "Amanda sold the vision to the board, and I became the technical co-pilot who made it real. I owned the product & program layer that connected global IA, PRDs, integration design, launch plans, and omni-channel logic across stores, factory, and web.",
    outcome: "Digital revenue grew 43%, store sales moved 14%, omni-channel orders grew 300%, and shrink fell 65%.",
    facts: [
      { icon: "role", label: "Role", value: "eCommerce Program Manager" },
      { icon: "client", label: "Client", value: "American Apparel" },
      { icon: "timeline", label: "Timeline", value: "Jun 2013 - Jun 2015" },
      { icon: "team", label: "Team Size", value: "7" },
      { icon: "budget", label: "Program Budget", value: "$6M" },
      { icon: "systems", label: "Systems", value: "Oracle ATG, RFID, MS Dynamics, Azure" },
    ],
  },
  challenge: {
    eyebrow: "Problem Statement",
    title: "Betting on Digital",
    paragraphs: ["American Apparel didn't need another incremental website upgrade. It needed digital commerce & omni-channel to move revenue quickly enough to stabilize a distressed business. But inventory visibility was broken, stores & web didn't share the same truth, and our global retail footprint was behaving like disconnected local systems. If customers couldn't reliably find size, color, and availability across stores & web, the business would keep bleeding sales and trust."],
    visual: { kind: "image", src: "/aa/modal-aa-01.png", alt: "American Apparel digital transformation and omni-channel planning materials", aspectRatio: "16/9" },
    caption: "American Apparel's global commerce and omni-channel planning materials.",
  },
  ownership: {
    eyebrow: "What I Owned",
    title: "I Turned Inventory Truth to Commercial Performance Across the Globe",
    summary: "Amanda sold the vision to the board, and I became the technical co-pilot who made it real. I owned the product & program layer that connected global IA, PRDs, integration design, launch plans, and omni-channel logic across stores, factory, and web.",
    editorialImage: image("/aa/hero-aa-02.png", "American Apparel omni-channel commerce impact imagery", 2880, 1164),
    decisions: [
      { title: "Owned the Program Layer", copy: "I owned the product & program layer that connected global IA, PRDs, integration design, launch plans, and omni-channel logic across stores, factory, and web." },
      { title: "Unified the Global Platform", copy: "Moved 16 international sites onto one Oracle ATG commerce model w/ shared integrations and release logic." },
      { title: "Made Inventory Real", copy: "Made RFID the inventory truth layer across stores, factory, and digital experiences." },
      { title: "Designed Smart Fulfillment", copy: "Designed the order-routing logic behind BOPIS and ship-to-store to balance fulfillment speed, cost, and store traffic." },
      { title: "Connected Stores, Factory, and Web", copy: "I helped unify 16 international Oracle ATG storefronts, real-time RFID inventory across the entire globe, and omni-channel order routing into one commercial system that retail, factory, and web could finally share." },
    ],
  },
  solution: {
    mode: "three-column-and-diagram",
    eyebrow: "Solution",
    title: "One Global Commerce Engine",
    copy: "I built a system where stores, factory, and web could finally act like one business. The solution combined a global Oracle ATG stack, real-time RFID inventory visibility, and omni-channel order-routing logic.",
    architecture: [
      { eyebrow: "Global Commerce Core", title: "Shared Commerce Core", copy: "16 sites, one Oracle ATG model.", bullets: ["16 international storefronts", "Shared templates and integrations", "One global release model"], image: image("/aa/modal-aa-02.png", "American Apparel global Oracle ATG commerce model", 1792, 1856) },
      { eyebrow: "Inventory Truth", title: "Real-Time Inventory", copy: "RFID made inventory visible.", bullets: ["Stores, factory, and digital", "One inventory truth layer", "Improved inventory accuracy"], image: image("/aa/modal-aa-03.png", "American Apparel RFID inventory visibility", 1792, 1856) },
      { eyebrow: "Omni-Channel Fulfillment", title: "Smart Fulfillment", copy: "BOPIS and routing connected stores.", bullets: ["BOPIS and ship-to-store", "Inventory-aware routing", "Stores connected to digital"], image: image("/aa/modal-aa-04.png", "American Apparel omni-channel fulfillment", 1792, 1856) },
    ],
    summary: "The point was never just to modernize the stack. The point was to move revenue, cut shrink, and make a fragile business more coherent fast.",
  },
  impact: {
    eyebrow: "Impact",
    title: "Revenue, Stores & Inventory Discipline",
    intro: "We changed the economics of the business, not just the website. Digital revenue grew, store sales moved, omni-channel orders took off from zero, and the inventory system became disciplined.",
    editorialImage: image("/aa/banner-aa-010.jpg", "American Apparel billboard campaign banner", 2048, 1024),
    metrics: [
      { value: "43", suffix: "%", label: "Digital Revenue Uplift" },
      { value: "14", suffix: "%", label: "Store Sales Uplift" },
      { value: "300", suffix: "%", label: "Omni-Channel Growth" },
      { value: "-65", suffix: "%", label: "Shrink Reduction" },
    ],
    transformation: {
      eyebrow: "Before & After",
      title: "Fragmented Systems to a Unified Omni-Channel Engine",
      rows: [
        { problem: "Regional stores & operations didn't share inventory truth. Customers couldn't reliably trust product availability.", decision: "I pushed RFID and inventory visibility into the core of the customer and fulfillment experience so stores and web stopped disagreeing about what existed.", outcome: "RFID-driven inventory visibility reduced shrink by 65%." },
        { problem: "The business needed digital to move revenue fast across a fragmented global footprint.", decision: "I helped consolidate 16 regional storefronts onto one Oracle ATG model so the business could move globally instead of piecemeal.", outcome: "Digital revenue rose 43% and store sales rose 14%." },
        { problem: "Stores were disconnected from digital fulfillment and omni-channel orders started from zero.", decision: "I helped build BOPIS, ship-to-store, and routing logic that made every order a smarter retail decision.", outcome: "Omni-channel growth reached 300%." },
      ],
    },
  },
  evidence: {
    eyebrow: "Delivery Proof",
    title: "What the Work Actually Produced",
    intro: "Q1 revenue is up thanks to your work. You moved mountains to make it happen!",
    testimonial: { quote: "Q1 revenue is up thanks to your work. You moved mountains to make it happen!", attributionTitle: "Paula Schneider", attributionSubtitle: "Interim Chief Executive Officer, American Apparel", avatarSrc: "/aa/paula-schneider.jpeg" },
    validationItems: [],
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Press, Partners, And Proof",
    intro: "Despite our best efforts, we didn't make it. The board of directors made the decision to file for bankruptcy and then sold it for parts to the Canadians. Just like hand grenades, 'almost' counts in this story.",
    featured: { media: { kind: "youtube", videoId: "IdChd8u4VLg", aspectRatio: "16/9" }, title: "American Apparel files for bankruptcy", date: "Oct 5, 2015", summary: "After a series of scandals and lawsuits, American Apparel is filing for bankruptcy. Buzzfeed News' Business Reporter Sapna Maheshwari spoke to CBSN about the filing.", tags: ["News", "CBS"] },
    rows: [
      { publisher: "Object Edge", date: "2015", summary: "American Apparel Drives Sales and Customer Loyalty With the Right Commerce Experience — Object Edge documented the global Oracle ATG rollout and the sales lift that followed the omni-channel commerce transformation, including more than 38% eCommerce sales growth.", pdfHref: "/aa/files/01-objectedge-casestudy.pdf" },
      { publisher: "Microsoft", date: "2013", summary: "American Apparel Uses RFID and Business Intelligence to Improve Inventory Accuracy and Sales — Microsoft documented store sales growth, lower inventory handling costs, stronger margins, and real-time visibility driven by the RFID and BI stack.", pdfHref: "/aa/files/03-microsoft-casestudy.pdf" },
      { publisher: "Motorola", date: "2012", summary: "American Apparel Deploys Motorola RFID Across Its Supply Chain for Product Visibility — Motorola documented the RFID rollout and showed how item-level inventory visibility dramatically improved stock accuracy, cycle counts, and store operations.", pdfHref: "/aa/files/02-motorola-casestudy.pdf" },
    ],
  },
  relatedStudies: { slugs: ["foh", "modere"] },
  finalCta: { eyebrow: "Next step", title: "Review the American Apparel parity preview.", copy: "This preview preserves the legacy content represented by the shared revamp schema." },
} satisfies CaseStudyRevampData
