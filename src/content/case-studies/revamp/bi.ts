import type { CaseStudyTool } from "@/content/case-studies"
import type { CaseStudyRevampData } from "./types"

const tools: CaseStudyTool[] = [
  { label: "Adobe Commerce Cloud", icon: "/tool-icons/svg/adobe-logo.svg" },
  { label: "Adobe Experience Manager", icon: "/tool-icons/svg/adobe-experience-manager-logo.svg" },
  { label: "Adobe Experience Platform", icon: "/tool-icons/adobexm-logo.png" },
  { label: "SAP", icon: "/tool-icons/svg/sap-logo.svg" },
  { label: "Oracle", icon: "/tool-icons/svg/oracle-logo.svg" },
  { label: "MuleSoft", icon: "/tool-icons/svg/mulesoft-logo.svg" },
]

export const biRevampCaseStudy = {
  slug: "bi",
  breadcrumbCurrent: "Boehringer Ingelheim",
  metadata: {
    title: "Boehringer Ingelheim: 1st B2B Adobe Cloud Commerce",
    description:
      "A global B2B commerce transformation across five markets, with one reference storefront and a controlled Oracle-to-SAP transition.",
    image: { src: "/bi/hero-bi-01.png", alt: "Boehringer Ingelheim global B2B commerce program", width: 2880, height: 1164 },
  },
  hero: {
    eyebrow: "Adobe Experience Cloud · B2B Commerce · Animal Health · Pharmaceuticals",
    title: "Boehringer Ingelheim: 1st B2B Adobe Cloud Commerce",
    intro:
      "Boehringer Ingelheim had five markets, country-specific business rules, and a commerce model that didn't scale. I led the product and program work to define one global reference storefront, decide where local variation belonged, and keep commerce stable through the shift from Oracle to SAP. Five countries. One global model. Three years. No country was allowed to break the program, and none did.",
    metrics: [
      { value: "10", suffix: "×", label: "Online Sales Uplift" },
      { value: "15", suffix: "%+", label: "Order Throughput" },
      { value: "5", label: "Countries" },
    ],
    image: { kind: "image", src: "/bi/hero-bi-01.png", alt: "Boehringer Ingelheim global B2B commerce — animal health program delivery", aspectRatio: "16/9" },
  },
  productionQuote: {
    quote: "Jim thinks several steps ahead, looks out for the client, and pushes the work to be better without making it heavier.",
    attributionTitle: "Jared Miller",
    attributionSubtitle: "Client Partner, Corra/Publicis Sapient",
    avatarSrc: "/bi/jared-miller.jpeg",
  },
  executiveBrief: {
    eyebrow: "At-a-Glance",
    title: "Global Cloud Commerce",
    copy: "I led product and program delivery for a high-risk global commerce transformation across 5 countries, anchored in the U.S. and France. The work had to align storefront logic, ERP migration, and multi-vendor delivery without letting local complexity or cutover risk derail it.",
    role: "Senior Product & Program Manager",
    client: "Boehringer Ingelheim",
    timeline: "Sep 2020 – Mar 2023",
    teamStakeholders: "10+ person team",
    budgetScale: "$30M program budget",
    systemsTechnology: "Adobe Commerce Cloud, Adobe Experience Manager, Adobe Experience Platform, SAP, Oracle, MuleSoft; 8 system integrations",
    tools,
    problem: "Every country ran its own B2B commerce setup, with no shared global model, while the Oracle-to-SAP migration increased delivery and continuity risk.",
    mandate: "Build one global model that countries could follow while safely managing the ERP transition underneath it.",
    whatIChanged: "I defined the global reference storefront, set boundaries for local variation, managed Oracle and SAP in parallel, and protected the roadmap from country-specific exceptions.",
    outcome: "10× online sales uplift. 15%+ order throughput improvement. 12% fewer service escalations. U.S. online sales grew from 3% to 30% of total animal health revenue.",
    facts: [
      { icon: "role", label: "Role", value: "Senior Product & Program Manager" },
      { icon: "client", label: "Client", value: "Boehringer Ingelheim" },
      { icon: "timeline", label: "Timeline", value: "Sep 2020 – Mar 2023" },
      { icon: "team", label: "Team / Stakeholders", value: "10+ person team" },
      { icon: "budget", label: "Budget / Scale", value: "$30M program budget" },
      { icon: "systems", label: "Systems / Technology", value: "Adobe Commerce Cloud, AEM, AEP, SAP, Oracle, MuleSoft; 8 integrations" },
    ],
  },
  challenge: {
    eyebrow: "Problem Statement",
    title: "Five Markets, 7 Messes",
    paragraphs: [
      "The core problem was simple: every market had its own commerce model, and none of it scaled. Multi-million-dollar accounts were still ordering by phone, customers were dealing with awkward eligibility rules and fragmented support, and the business was trying to modernize commerce while moving from Oracle to SAP. Boehringer didn't need another country patch. It needed one global model that could flex locally without losing control.",
      "The scale and regulatory complexity made it harder. Boehringer supports customers with products for many animal species, taking into account different regulations for pets and livestock across countries. B2B customers needed the right catalog, pricing, and ordering flow without a support call to sort out the rest. Every market had its own version of that problem, and no shared infrastructure existed to solve it.",
      "The Oracle-to-SAP migration added a live continuity risk to the delivery environment. Every roadmap decision carried business continuity stakes. The work required managing two ERP systems in parallel while the commerce platform was being built on top of both — without letting the migration stall or fragment the commerce program.",
    ],
    visual: { kind: "react-diagram", component: "bi-data-silos" },
    caption: "Five markets. Five versions of commerce truth. None of them scalable.",
  },
  ownership: {
    eyebrow: "My Role",
    title: "Senior Product & Program Manager",
    summary: "I ran the product and program spine of the transformation. I defined the global storefront, set the rules for local variation, managed Oracle-to-SAP coexistence, and kept backlog, vendors, and cutover from drifting while the business kept running.",
    decisions: [
      { title: "Replaced the Prior PM and Stabilized the Engagement", copy: "I was brought in by Publicis to save the project and replace the current PM. I rebuilt the delivery structure, re-established stakeholder trust across U.S. and EU teams, and put the program back on a trackable roadmap." },
      { title: "Defined the Global Reference Storefront", copy: "I defined the global reference model that anchored the U.S. and France, giving the program one backbone instead of five competing patterns." },
      { title: "Set the Rules for Local Variation", copy: "I set the boundaries for what markets could localize — catalog eligibility, pricing rules, and language — while keeping variation from breaking the global model." },
      { title: "Managed Oracle-to-SAP Coexistence", copy: "I managed both systems running side-by-side, protected cutover sequencing, and made sure business continuity was not sacrificed for technical convenience." },
      { title: "Locked Down Scope Against Country Pressure", copy: "I locked down scope and managed the backlog against the global model, stopping country pressure from turning one platform into a patchwork." },
    ],
  },
  solution: {
    mode: "diagram",
    background: "white",
    eyebrow: "Solution",
    title: "Classic Adobe With a Twist",
    copy: "Rebuilt a global commerce model that could handle regulated B2B ordering, localization, and ERP transition without breaking.",
    architecture: [
      { eyebrow: "Commerce Architecture", title: "One Global Model, Controlled Local Variation", copy: "Global consistency with room for markets to adapt.", bullets: ["Adobe Commerce Cloud as the global commerce layer", "AEM for content and experience management", "SAP as commercial source of truth", "MuleSoft as the integration spine", "8 system integrations"] },
      { eyebrow: "ERP Migration", title: "Oracle and SAP Running Side-by-Side Without Breaking Commerce", copy: "Parallel systems, sequenced cutovers, protected continuity.", bullets: ["Oracle-to-SAP migration alongside live commerce", "Country-by-country cutover sequencing", "SAP established as commercial source of truth", "Commerce and migration moved in parallel"] },
      { eyebrow: "B2B Commerce", title: "Procurement That Works Without a Phone Call", copy: "Self-service ordering for regulated market conditions.", bullets: ["Country-specific catalog eligibility", "Regulated B2B ordering flows", "Template-based market adaptation", "Reduced support and escalation burden"] },
    ],
    summary: "",
  },
  impact: {
    eyebrow: "Impact",
    title: "Scale, Throughput, Stability",
    intro: "Fragmented B2B commerce became a scalable global system with more digital volume, fewer service escalations, and a platform that could absorb country complexity.",
    metrics: [
      { value: "10", suffix: "×", label: "Online Sales", detail: "Online sales uplift since Adobe Commerce launch" },
      { value: "15", suffix: "%+", label: "Order Throughput", detail: "Order throughput improvement post-launch" },
      { value: "12", suffix: "%", label: "Less Escalations", detail: "Reduction in service escalations post-launch" },
      { value: "30", suffix: "%", label: "U.S. Online Sales", detail: "Up from 3% of total animal health revenue" },
    ],
    transformation: {
      eyebrow: "Before & After",
      rows: [
        { problem: "Every market had its own way of doing commerce. Nothing was shared, and country exceptions kept multiplying.", decision: "I defined the global reference storefront that anchored 5 countries and locked scope against fragmentation.", outcome: "One global reference storefront supported 5 countries and online sales scaled 10×." },
        { problem: "Large B2B accounts were still ordering by phone, with fragmented eligibility handling and service escalations.", decision: "I drove a B2B self-service model with country-specific catalog eligibility and regulated ordering flows.", outcome: "Service escalations fell 12% and customers got cleaner ordering and eligibility handling." },
        { problem: "Country customizations and ERP change created constant cutover risk while Oracle and SAP ran in parallel.", decision: "I managed coexistence country by country, protecting business continuity while the technical backbone changed.", outcome: "Throughput improved 15%+ and the platform stayed stable through the ERP transition." },
      ],
    },
  },
  evidence: {
    eyebrow: "Delivery Proof",
    title: "What the Work Actually Produced",
    intro: "The strongest outside proof here is not hype — it is validation from Adobe and Corra that the platform delivered measurable digital growth, global flexibility, and a stronger operating model for animal health commerce.",
    testimonial: { quote: "Multi-million dollar accounts were still ordering over the phone; it was a scalability and an operations problem.", attributionTitle: "Max Booker", attributionSubtitle: "Director, Digital Channel Excellence, Boehringer Ingelheim", avatarSrc: "/bi/max-booker.jpeg" },
    validationItems: [
      { eyebrow: "Architecture", title: "One Global Model That Held Across Five Countries", copy: "The reference model stopped the platform from being buried under country exceptions." },
      { eyebrow: "ERP Migration", title: "Commerce Survived the Migration", copy: "The governance model kept both systems operational in parallel and sequenced cutovers without breaking commerce." },
      { eyebrow: "B2B Operations", title: "Self-Service Replaced Phone-Based Procurement", copy: "Multi-million-dollar B2B accounts moved into self-service ordering with country-specific eligibility." },
    ],
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Press & Accolades",
    intro: "Three external sources independently documented the platform outcomes — Adobe on the commerce results, Publicis Sapient/Corra on the global architecture, and Corra again on the reference gateway model.",
    rows: [
      { publisher: "Adobe", date: "2024", summary: "Adobe says Boehringer Ingelheim used Adobe Commerce to create more scalable B2B ecommerce in animal health, with U.S. online sales climbing from 3% to 30% after launch.", pdfHref: "/bi/files/BI-AdobeCaseStudy.pdf" },
      { publisher: "Publicis Sapient / Corra", date: "2024", summary: "Corra describes how Boehringer Ingelheim built a global reference B2B storefront for regulated veterinary ordering and international expansion with headless architecture and modular services.", pdfHref: "/bi/files/BI-Publicis-Sapient-Case-Study_01.pdf" },
      { publisher: "Corra", date: "2024", summary: "Corra details the two global reference gateways for the U.S., France, and the rest of the world, showing how regional logic stayed scalable and maintainable.", pdfHref: "/bi/files/BI-Publicis-Sapient-Case-Study_02.pdf" },
    ],
  },
  relatedStudies: [
    { eyebrow: "Related Case Study", title: "Winning Awards and Making $1B With Modere", summary: "A composable commerce platform built to scale markets, content, and mobile without rebuilding the stack each time.", href: "/work/modere", image: { src: "/modere/hero-modere-01.png", alt: "Modere composable commerce platform" } },
    { eyebrow: "Related Case Study", title: "Turning Frederick's Into Celebrity-Driven DTC", summary: "A lean Shopify Plus relaunch built for celebrity traffic, campaign velocity, and a cleaner operating model.", href: "/work/foh", image: { src: "/foh/hero-foh-01.png", alt: "Frederick's of Hollywood and Megan Fox relaunch" } },
  ],
  finalCta: { eyebrow: "Next step", title: "If this preview looks right, we can wire it into the live case study next.", copy: "Use this preview route to confirm the hierarchy, spacing, and interactive diagram before any live BI migration." },
} satisfies CaseStudyRevampData
