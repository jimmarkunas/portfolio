import type { CaseStudyRevampData } from "./types"

export const dtv01RevampCaseStudy = {
  slug: "dtv01",
  breadcrumbCurrent: "DIRECTV",
  metadata: {
    title: "DIRECTV Revenue Platform Preview",
    description: "DIRECTV revenue platform case-study preview.",
    image: { src: "/dtv01/hero-dtv-01.png", alt: "DIRECTV revenue platform", width: 2880, height: 1164 },
  },
  hero: {
    eyebrow: "Revenue Operations · Product Strategy · Digital Transformation",
    title: "Turning DIRECTV's Slow Offer Engine to a Revenue Machine",
    intro: "DIRECTV was bleeding subscribers and money, but its upsell engine was trapped inside siloed teams, legacy systems, and a six-month launch cycle. I gave the offer journey an owner, operationalized digital revenue across channels, and helped drive $55M in Q4 2025 upsell revenue while cutting time-to-value by 60 days.",
    metrics: [
      { value: "$55", suffix: "M", label: "Q4 Upsell Revenue" },
      { value: "60", suffix: " days", label: "Faster Time to Value" },
      { value: "20", suffix: "+", label: "Systems in Play" },
    ],
    image: { kind: "image", src: "/dtv01/hero-dtv-01.png", alt: "DIRECTV revenue platform", aspectRatio: "16/9" },
  },
  productionQuote: {
    quote: "We needed a tactician to align all the teams and lead us to victory.",
    attributionTitle: "Katherine Huynh",
    attributionSubtitle: "Sr. Director of Product Marketing, DIRECTV",
    avatarSrc: "/dtv01/katherine-huynh.jpeg",
  },
  executiveBrief: {
    eyebrow: "At-a-Glance", title: "Revenue Under Pressure",
    copy: "I was brought in to turn fragmented sports and premium campaigns into a repeatable upsell and retention engine across set-top box, DIRECTV.com, mobile, and the operating model underneath it.",
    role: "Program & Product Manager", client: "DIRECTV", timeline: "Apr 2025 - Nov 2025 · 8 months",
    teamStakeholders: "65 stakeholders across 12+ organizations", budgetScale: "$10M program budget", systemsTechnology: "20+ legacy system integrations",
    tools: [
      { label: "DIRECTV Systems", icon: "/tool-icons/dtv-logo.png" },
      { label: "JIRA", icon: "/tool-icons/jira-logo.png" },
      { label: "Mulesoft", icon: "/tool-icons/mulesoft-logo.png" },
      { label: "Snowflake", icon: "/tool-icons/snowflake-logo.png" },
    ],
    problem: "Campaigns took six months to launch, teams lacked a shared operating model, and the commercial stack was split across more than 20 legacy systems.",
    mandate: "Give the revenue journey an owner and create a repeatable way to design, approve, launch, and measure targeted offers across channels.",
    whatIChanged: "I stood up the cross-functional operating model, built the intake and approval flow, treated the platform as a product, and handled the AT&T duplication problem without letting the roadmap collapse.",
    outcome: "$55M in Q4 2025 upsell revenue and 60 days faster time-to-value.",
    facts: [
      { icon: "role", label: "Role", value: "Program & Product Manager" },
      { icon: "client", label: "Client", value: "DIRECTV" },
      { icon: "timeline", label: "Timeline", value: "Apr 2025 - Nov 2025" },
      { icon: "team", label: "Stakeholders", value: "65 across 12+ organizations" },
      { icon: "budget", label: "Budget", value: "$10M program budget" },
      { icon: "systems", label: "Systems", value: "20+ integrations" },
    ],
  },
  challenge: {
    eyebrow: "Problem Statement", title: "A Shrinking, Siloed Machine",
    paragraphs: [
      "DIRECTV needed someone to fix a brittle revenue system inside a shrinking legacy business. Campaigns took too long to launch, 13 teams operated without a shared model, and the stack was fragmented across 20+ legacy systems with no single owner accountable for the offer journey end-to-end.",
      "Then the AT&T divorce happened. Processes that were already broken had to be duplicated and re-architected under even more organizational pressure, with decisioning, billing, and execution all at risk of stalling. The business needed the revenue platform to work faster than the org chart made possible.",
    ],
    visual: { kind: "react-diagram", component: "directv-revenue" },
    caption: "DIRECTV's revenue pressure made a repeatable offer engine an operating requirement.",
  },
  ownership: {
    eyebrow: "What I Owned", title: "I Gave the Revenue Journey an Owner",
    summary: "I owned the messy middle: operating model, launch mechanics, and enough of the product layer to make the whole machine work.",
    summaryParagraphs: ["I wasn't there to babysit delivery. I was there to stop the bleed and give the revenue platform lasting ownership."],
    decisions: [
      { title: "Product ownership", copy: "Defined the revenue platform as a product, with clear scope, ownership, and a shared offer schema." },
      { title: "Operating model", copy: "Built intake, grooming, and approval models that replaced ad hoc launch chaos." },
      { title: "Commercial execution", copy: "Connected decisioning, Salesforce, Snowflake, and the set-top box purchase path." },
      { title: "Cross-functional delivery", copy: "Aligned product, marketing, technology, and operations around one intake, grooming, and approval model." },
      { title: "AT&T separation", copy: "Handled the corporate breakup and duplicated architecture while keeping decisioning, billing, and execution moving." },
    ],
  },
  solution: { eyebrow: "Solution", title: "One Engine, Many Offers", copy: "I treated the digital revenue platform as both a product and an operating system: a repeatable way to design, approve, launch, and measure targeted offers across every key sales surface.", architecture: [], summary: "Seasonal launches stopped behaving like custom rebuilds and started behaving like a managed commercial system." },
  impact: {
    eyebrow: "Impact", title: "Revenue, Speed, Control", intro: "The work turned seasonal campaign pressure into a repeatable commercial capability.",
    metrics: [
      { value: "$55", suffix: "M", label: "Q4 Upsell Revenue" },
      { value: "60", suffix: " days", label: "Faster Time to Value" },
    ],
    transformation: { eyebrow: "Before & After", title: "From campaign chaos to commercial system", rows: [{ problem: "Every major launch felt like a mini re-platform.", decision: "Created one owned offer model and approval flow.", outcome: "Offers became reusable and launches became repeatable." }] },
  },
  evidence: {
    eyebrow: "Delivery Proof", title: "What the Work Produced", intro: "The operating model and product layer gave DIRECTV a clearer path through legacy complexity.",
    testimonial: { quote: "We needed a tactician to align all the teams and lead us to victory.", attributionTitle: "Katherine Huynh", attributionSubtitle: "Sr. Director of Product Marketing, DIRECTV", avatarSrc: "/dtv01/katherine-huynh.jpeg" },
    validationItems: [{ eyebrow: "Operating Model", title: "One accountable revenue journey", copy: "Offer intake, grooming, approvals, decisioning, billing, and execution moved toward one shared commercial model." }],
  },
  relatedStudies: [],
  finalCta: { eyebrow: "Next", title: "Build the system behind the growth", copy: "The strongest transformations make the next launch easier than the last one." },
} satisfies CaseStudyRevampData
