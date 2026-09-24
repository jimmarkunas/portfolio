import type { EmbeddedAppTemplateContent, TemplateContent } from "./templateTypes";
import {
  slide01 as title,
  slide03 as compareContrast,
  slide06 as hubEcosystem,
  slide07 as scorecard,
  slide08 as decisionSpectrum,
  slide09 as flowScenario,
  slide10 as structuredAction,
  slide14 as exercise,
  slide15 as endCard,
} from "@/app/pdma2026/presentation/pdma2026Content";

/*
 * Body copy for the /pdma2026-templates gallery. Nine exemplars render the production
 * deck's own content (src/app/pdma2026/presentation/pdma2026Content.ts is the copy
 * authority); the Embedded App exemplar owns its approved concept title below.
 * Approved concept images own composition only; none of their placeholder wording is used.
 */

const standardTitle = { size: 82, leading: 88, tracking: -2.4 } as const;

// T04 — approved Embedded App concept owns title/subtitle; shell metadata inherits slide-14.
const embeddedApp: EmbeddedAppTemplateContent = {
  kind: "embedded-app",
  decorativeVariant: "embedded-dual-orbs",
  chrome: {
    sourceSlide: null,
    tocTitle: "EMBEDDED APPS. REAL WORK.",
    headerLabels: ["APPLY", "DECIDE", "BUILD"],
    footerLabel: "USEFUL PM ARTIFACT • NOT JUST A QUIZ RESULT",
    title: { ...standardTitle, white: "EMBEDDED APPS.", magenta: "REAL WORK.", subtitle: "Put live tools, data, and workflows directly in the presentation.", subtitleSize: 30, sameRow: true, magentaX: 746 },
  },
  frameLabel: "Live PDMA productization exercise",
};







/** Deck order is fixed by TEMPLATE_ARCHITECTURE_CONTRACT.md §2. */
export const templateContent = [
  title,
  endCard,
  exercise,
  embeddedApp,
  compareContrast,
  flowScenario,
  decisionSpectrum,
  hubEcosystem,
  scorecard,
  structuredAction,
] as const satisfies readonly TemplateContent[];

/*
 * Embedded App exemplar body copy. Decision data comes from @/content/pdma2026;
 * these labels are mapped from the live exercise (PdmaProductizationExercise.tsx),
 * Slide 07 (value questions), Slide 08 (authority stages) and Slide 14 (row labels).
 */
export const embeddedExerciseCopy = {
  brand: "PDMA 2026",
  initiativeLabel: "Opportunity / AI initiative",
  initiativePlaceholder: "Name the initiative",
  initiativeDefault: "AI initiative",
  start: "Start exercise →",
  next: "Next decision →",
  generate: "Generate brief →",
  back: "← Back",
  reset: "Reset",
  unresolved: "Unresolved",
  guideLead: "The live app will guide you through:",
  sections: exercise.rows.map(({ number, title: label, body }) => ({ number, label, body: body.replace(/\n/g, " ") })),
  valueStep: { label: scorecard.decisionRule.label, prompt: "PICK ONE PRIMARY VALUE DRIVER.", questions: scorecard.columns.map(({ question }) => question.replace(/\n/g, " ")) },
  authorityStep: { label: "AUTHORITY", prompt: "HOW MUCH AUTHORITY SHOULD THE ROBOTS HAVE?", descriptions: decisionSpectrum.stages.map(({ body }) => body.replace(/\n/g, " ")) },
  controlsLabel: "A.G.E.N.T.S.",
  outputTitle: "PRODUCTIZATION BRIEF",
  outputLabel: "A.G.E.N.T.S. decisions",
  summaryLabel: "Recommended productization summary",
  decisionLabel: (step: number, total: number) => `Decision ${step} / ${total}`,
} as const;
