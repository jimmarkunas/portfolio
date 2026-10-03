import type {
  CompareContrastTemplateContent, DecisionSpectrumTemplateContent, EmbeddedAppTemplateContent,
  EndCardTemplateContent, ExerciseTemplateContent, FlowScenarioTemplateContent,
  HubEcosystemTemplateContent, ScorecardTemplateContent, StructuredActionTemplateContent,
  TitleTemplateContent, TemplateContent,
} from "@/components/presentation/presentationTypes";

/** Immutable gallery exemplar fixture copied from the accepted examples at extraction baseline. */
const standardTitle = { size: 82, leading: 88, tracking: -2.4 } as const;
const lines = (...values: string[]) => values.join("\n");
const PDMA_KIT_URL = "https://github.com/jimmarkunas/agents-enterprise-ai-operating-model";
const PDMA_EXERCISE_ROUTE = "/pdma2026/exercise";

const slide01: TitleTemplateContent = {
  kind: "title",
  decorativeVariant: "title-hero",
  chrome: {
    tocTitle: "THE NEW PM OPERATING SYSTEM",
    headerLabels: ["JUDGMENT", "AUTHORITY", "ACCOUNTABILITY"],
    footerLabel: "HUMAN JUDGMENT COMPOUNDS",
    title: { white: "THE NEW PM", magenta: "OPERATING SYSTEM", subtitle: lines("What stays uniquely human.", "What shifts to AI."), size: 82, leading: 88, tracking: -2.4, subtitleSize: 30, subtitleLeading: 36 },
  },
  speaker: { name: "Jim Markunas", role: "Head of Product, Bytalos" },
}

const slide16: EndCardTemplateContent = {
  kind: "end-card",
  decorativeVariant: "end-card-orb",
  chrome: {
    tocTitle: "TURN AI CAPABILITY INTO PRODUCT VALUE.",
    headerLabels: ["VALUE", "AUTHORITY", "ACCOUNTABILITY"],
    footerLabel: "NEVER AUTOMATE AWAY ACCOUNTABILITY",
    title: { ...standardTitle, white: "TURN AI CAPABILITY", magenta: "INTO PRODUCT VALUE.", subtitle: "Start with the business case. Define the authority. Productize the controls.\nMeasure the outcome.", subtitleSize: 30 },
  },
  statement: { lead: "AUTOMATE THE WORK.", emphasis: "NEVER AUTOMATE AWAY ACCOUNTABILITY." },
  download: {
    url: PDMA_KIT_URL,
    eyebrow: "SPECIAL GIFT FROM PDMA + JIM",
    title: "A.G.E.N.T.S. PRODUCTIZATION KIT",
    description: "A free worksheet for operationalizing this approach in your enterprise.",
    teamPrompt: "TAKE IT BACK TO YOUR TEAM.",
    actions: ["DOWNLOAD IT", "USE IT", "ADAPT IT", "SHARE IT"],
    ctaLabel: "DOWNLOAD THE KIT",
    qrAriaLabel: "Open the Agents Enterprise AI Operating Model GitHub repository",
  },
}

const slide14: ExerciseTemplateContent = {
  kind: "exercise",
  decorativeVariant: "none",
  chrome: {
    tocTitle: "NOW YOU DO IT.",
    headerLabels: ["APPLY", "DECIDE", "BUILD"],
    footerLabel: "USEFUL PM ARTIFACT • NOT JUST A QUIZ RESULT",
    title: { ...standardTitle, white: "NOW YOU", magenta: "DO IT.", subtitle: "Turn an AI idea into a mini productization brief you can take back to work.", subtitleSize: 30 },
  },
  rows: [
    { number: "01", title: "VALUE", body: "Increase revenue, decrease cost, or\nstreamline operations?", glyph: "/pdma2026/slide-14/66471.svg", emphasis: false },
    { number: "02", title: "AUTHORITY", body: "What may AI observe, recommend,\nprepare, decide, or execute?", glyph: "/pdma2026/slide-14/408a3.svg", emphasis: false },
    { number: "03", title: "A.G.E.N.T.S.", body: "Define controls, evidence, systems,\ntransfer, and success.", glyph: "/pdma2026/slide-14/a7ab0.svg", emphasis: false },
    { number: "04", title: "OUTPUT", body: "Generate a mini productization brief /\nbacklog-ready artifact.", glyph: "/pdma2026/slide-14/ea3ba.svg", emphasis: true },
  ],
  supportingLabel: "IDEAS\nTHROUGH\nSTRUCTURE\nTO IMPACT",
  connectorArt: "/pdma2026/slide-14/b1b9e.svg",
  worksheet: {
    href: PDMA_EXERCISE_ROUTE,
    ariaLabel: "Open the PDMA live productization exercise",
    brand: "PDMA 2026",
    status: "CONFIDENTIAL   •   DRAFT",
    eyebrow: "AI INITIATIVE",
    title: "PRODUCTIZATION BRIEF",
    fields: ["OPPORTUNITY", "VALUE", "AUTHORITY", "A.G.E.N.T.S.", "OUTPUT", "NEXT STEPS"],
    footerLead: "FROM IDEA TO IMPACT",
    footerBrand: "PDMA 2026",
  },
  takeaway: "ARE YOU READY TO PRODUCTIZE YOUR AI?",
}

const slide15: EmbeddedAppTemplateContent = {
  kind: "embedded-app",
  decorativeVariant: "embedded-dual-orbs",
  chrome: {
    tocTitle: "EMBEDDED APPS. REAL WORK.",
    headerLabels: ["APPLY", "DECIDE", "BUILD"],
    footerLabel: "USEFUL PM ARTIFACT • NOT JUST A QUIZ RESULT",
    title: { ...standardTitle, white: "EMBEDDED APPS.", magenta: "REAL WORK.", subtitle: "Put live tools, data, and workflows directly in the presentation.", subtitleSize: 30, sameRow: true, magentaX: 746 },
  },
  frameLabel: "Gallery interactive exemplar",
}

const slide03: CompareContrastTemplateContent = {
  kind: "compare-contrast",
  decorativeVariant: "compare-edge-planets",
  chrome: {
    tocTitle: "COPILOTS GENERATE OUTPUTS. AGENTS TAKE ACTION.",
    headerLabels: ["OUTPUTS", "AUTHORITY", "ACTION"],
    footerLabel: "AUTHORITY IS A PRODUCT DECISION",
    title: { ...standardTitle, white: "COPILOTS GENERATE OUTPUTS.", magenta: "AGENTS TAKE ACTION.", subtitle: lines("When AI can act in enterprise systems, product design must account for", "authority, consequence, and control."), subtitleSize: 29, subtitleLeading: 42 },
  },
  panels: [
    {
      heading: "C O P I L O T",
      descriptor: "A S S I S T S   W I T H   O U T P U T S",
      steps: [{ glyph: "H", label: "HUMAN" }, { glyph: "P", label: "PROMPT" }, { glyph: "M", label: "MODEL" }, { glyph: "O", label: "OUTPUT" }],
      accentIndex: 3,
      boundary: "Human remains the execution boundary.",
      tone: "neutral",
    },
    {
      heading: "A G E N T",
      descriptor: "A C T S   I N   T H E   R E A L   W O R L D",
      steps: [{ glyph: "G", label: "GOAL" }, { glyph: "A", label: "AGENT" }, { glyph: "T", label: "TOOL / SYSTEM" }, { glyph: "→", label: "ACTION" }],
      accentIndex: 1,
      boundary: "AI can now cross the execution boundary.",
      capabilities: ["READ", "WRITE", "SEND", "SPEND"],
      tone: "accent",
    },
  ],
  takeaway: "WHEN AI BECOMES AN OPERATOR, AUTHORITY BECOMES A PRODUCT DECISION.",
}

const slide09: FlowScenarioTemplateContent = {
  kind: "flow-scenario",
  decorativeVariant: "flow-dual-orbs",
  chrome: {
    tocTitle: "LIVE SCENARIO: RETENTION AGENT.",
    headerLabels: ["VALUE", "SIGNAL", "ACTION"],
    footerLabel: "PRODUCTION-READY ENTERPRISE PRODUCT",
    title: { ...standardTitle, white: "LIVE SCENARIO:", magenta: "RETENTION AGENT.", subtitle: "A real enterprise business case: detect churn risk across CRM, product-usage, and support data before it is too late to act.", subtitleSize: 29 },
  },
  synopsis: {
    label: "BUSINESS PROBLEM",
    body: "Customer retention teams spend too much time manually identifying churn risk across fragmented enterprise systems.",
    valueLabel: "PRIMARY VALUE DRIVER",
    primaryValue: "INCREASE REVENUE",
    supportingValue: "+ STREAMLINE OPERATIONS",
    iconId: "file-text",
  },
  signals: [
    { title: "CRM", body: "Customer data", iconId: "users-round" },
    { title: "PRODUCT USAGE", body: "Behavioral data", iconId: "bar-chart-3" },
    { title: "SUPPORT", body: "Support tickets", iconId: "headset" },
    { title: "ACCOUNT HEALTH", body: "Billing & health data", iconId: "database" },
  ],
  stages: [
    { title: "IDENTIFY", body: "Detect meaningful churn-risk patterns across enterprise customer data.", iconId: "chart-column" },
    { title: "RECOMMEND", body: "Recommend an approved intervention to the responsible team.", iconId: "lightbulb" },
  ],
  question: { label: "PRODUCT QUESTION", body: "How much authority should this agent have?", followUp: "How do we turn this business case into a production-ready enterprise product?", iconId: "circle-help" },
  takeaway: "HOW DO WE TURN THIS BUSINESS CASE INTO A PRODUCTION-READY ENTERPRISE PRODUCT?",
}

const slide08: DecisionSpectrumTemplateContent = {
  kind: "decision-spectrum",
  decorativeVariant: "spectrum-horizon",
  chrome: {
    tocTitle: "HOW MUCH AUTHORITY SHOULD THE ROBOTS HAVE?",
    headerLabels: ["OBSERVE", "DECIDE", "EXECUTE"],
    footerLabel: "AUTHORITY IS A PRODUCT DECISION",
    title: { ...standardTitle, white: "HOW MUCH AUTHORITY", magenta: "SHOULD THE ROBOTS HAVE?", subtitle: lines("The farther AI moves from observing to acting, the more deliberately", "the Product Manager has to design the boundary."), subtitleSize: 26 },
  },
  stages: [
    { number: "01", title: "OBSERVE", body: "AI sees the state\nof the product\nor process.", active: false, lift: 0, iconId: "eye" },
    { number: "02", title: "RECOMMEND", body: "AI proposes what\nshould happen.", active: false, lift: 105, iconId: "file-text" },
    { number: "03", title: "PREPARE", body: "AI stages the action\nfor human review.", active: false, lift: 145, iconId: "settings" },
    { number: "04", title: "DECIDE", body: "AI chooses the action\nwithin defined rules.", active: true, lift: 105, iconId: "git-branch" },
    { number: "05", title: "EXECUTE", body: "AI acts within\ndefined limits.", active: true, lift: 0, iconId: "zap" },
  ],
  progression: ["MORE AUTONOMY", "MORE CONSEQUENCE", "MORE PRODUCT DESIGN"],
  takeaway: "THE FARTHER RIGHT YOU GO, THE MORE PRODUCT DESIGN HAS TO ACCOUNT FOR THE CONSEQUENCES.",
}

const slide06: HubEcosystemTemplateContent = {
  kind: "hub-ecosystem",
  decorativeVariant: "hub-corner-orbs",
  chrome: {
    tocTitle: "UNDERSTAND THE ENVIRONMENT. NAME THE OWNERS.",
    headerLabels: ["SYSTEMS", "DATA", "OWNERSHIP"],
    footerLabel: "AUTOMATION DOES NOT ERASE OWNERSHIP",
    title: { white: "UNDERSTAND THE ENVIRONMENT.", magenta: "NAME THE OWNERS.", subtitle: "Before you automate, inventory the environment and assign human accountability.", size: 64, leading: 70, tracking: 0, subtitleSize: 29, subtitleLeading: 36, subtitleOffset: 17, subtitleX: 0, subtitleTracking: 0, exactSubtitleSize: true, titleColor: "#f2f2f2", subtitleColor: "#f2f2f2", magentaRowShift: -2 },
  },
  inventory: {
    heading: "DO THE INVENTORY",
    cards: [
      { title: "SYSTEMS", body: "Applications, infrastructure, tools\nand integrations.", iconId: "layers-3" },
      { title: "DATA", body: "Sources, types, sensitivity\nand quality.", iconId: "database" },
      { title: "PEOPLE", body: "Teams, roles, skills\nand working models.", iconId: "users-round" },
      { title: "DEPENDENCIES", body: "Upstream, downstream\nand external partners.", iconId: "link" },
    ],
  },
  core: { heading: "AUTOMATION", label: "AI / AUTOMATION", emphasis: "AI" },
  owners: {
    heading: "NAME THE OWNERS",
    cards: [
      { title: "SYSTEM OWNER", body: "Accountable for reliability,\nsecurity and lifecycle.", iconId: "user-round" },
      { title: "DECISION OWNER", body: "Accountable for policies,\ntrade-offs and approvals.", iconId: "file-text" },
      { title: "OUTCOME OWNER", body: "Accountable for value,\nresults and continuous improvement.", iconId: "bar-chart-3" },
    ],
  },
  caption: ["MORE AWARENESS", "BETTER AUTONOMY"],
}

const slide07: ScorecardTemplateContent = {
  kind: "scorecard",
  decorativeVariant: "none",
  chrome: {
    tocTitle: "BEFORE YOU BUILD IT, PROVE THE VALUE.",
    headerLabels: ["REVENUE", "COST", "OPERATIONS"],
    footerLabel: "PICK ONE PRIMARY VALUE DRIVER",
    title: { ...standardTitle, white: "BEFORE YOU BUILD IT,", magenta: "PROVE THE VALUE.", subtitle: "Every Agentic Product should have a clear economic reason to exist. Pick one primary value driver.", subtitleSize: 27, subtitleLeading: 36 },
  },
  decisionRule: {
    label: "DECISION RULE",
    rule: "PICK ONE\nPRIMARY\nVALUE DRIVER.",
    supporting: "Use this scorecard to\nevaluate your concept.\nA strong product should\nclearly map to one\nprimary value driver.",
  },
  columns: [
    { title: "INCREASE REVENUE", question: "Does it help us grow top-line value?", rows: ["ACQUIRE", "CONVERT", "RETAIN", "EXPAND"] },
    { title: "DECREASE COST", question: "Does it remove meaningful cost\nfrom the system?", rows: ["LABOR", "COST-TO-SERVE", "REWORK", "WASTE"] },
    { title: "STREAMLINE OPERATIONS", question: "Does it make work materially\neasier to run?", rows: ["FASTER", "SIMPLER", "SCALABLE", "LESS MANUAL"] },
  ],
  highlight: { column: 0, row: 0 },
  takeaway: "IF YOU CAN'T IDENTIFY ONE OF THESE OUTCOMES, YOU DON'T HAVE A PRODUCT.",
}

const slide10: StructuredActionTemplateContent = {
  kind: "structured-content-action",
  decorativeVariant: "structured-dual-orbs",
  chrome: {
    tocTitle: "DESIGN PRODUCTION READINESS INTO THE FEATURE.",
    headerLabels: ["BACKLOG", "CONTROLS", "OUTCOMES"],
    footerLabel: "PRODUCTION READINESS STARTS IN THE BACKLOG",
  title: { ...standardTitle, white: "DESIGN PRODUCTION READINESS", magenta: "INTO THE FEATURE.", subtitle: "Guardrails, human intervention, and success measures belong in the product requirements before development begins.", subtitleSize: 24 },
  },
  requirements: [
    { number: "01", title: "GUARDRAILS", body: "What must the product\nprevent or constrain?", emphasis: false, iconId: "shield" },
    { number: "02", title: "HUMAN INTERVENTION", body: "When must a person review,\napprove, or take over?", emphasis: true, iconId: "user-round" },
    { number: "03", title: "SUCCESS METRICS", body: "What proves the feature\ncreates the intended\noutcome?", emphasis: false, iconId: "bar-chart-3" },
  ],
  sectionLabel: "OPERATIONALIZE IT AS PRODUCT WORK",
  steps: [
    { number: "01", title: "BACKLOG", body: "Capture the requirements.", emphasis: false, iconId: "clipboard-list" },
    { number: "02", title: "PRD", body: "Define behavior and\nboundaries.", emphasis: false, iconId: "file-text" },
    { number: "03", title: "ACCEPTANCE CRITERIA", body: "Make them testable.", emphasis: false, iconId: "check" },
    { number: "04", title: "PRODUCTION", body: "Prove they work.", emphasis: true, iconId: "box" },
  ],
  takeaway: "IF IT MATTERS IN PRODUCTION, IT BELONGS IN THE PRODUCT DEFINITION.",
  supportingTakeaway: "REAL FEATURES.\nREAL OUTCOMES.",
}

export const templateContent = [slide01, slide16, slide14, slide15, slide03, slide09, slide08, slide06, slide07, slide10] as const satisfies readonly TemplateContent[];
