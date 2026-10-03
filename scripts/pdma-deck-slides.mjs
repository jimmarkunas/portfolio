/**
 * Read-only index of the production /pdma2026 deck for PDMA tooling (edit map, impact, context).
 * Derived from src/app/pdma2026/presentation/pdma2026Content.ts — no second configuration.
 */
import fs from "node:fs"
import path from "node:path"

export const CONTENT = "src/app/pdma2026/presentation/pdma2026Content.ts"
const T = "src/components/presentation/templates"
const P = "src/app/pdma2026/presentation/slides"
export const compositionFiles = {
  title: [`${T}/TitleTemplate.tsx`, "src/components/presentation/templates/templates.css"],
  "compare-contrast": [`${T}/CompareContrastTemplate.tsx`, "src/components/presentation/templates/templates.css"],
  "hub-ecosystem": [`${T}/HubEcosystemTemplate.tsx`, "src/components/presentation/templates/templates.css"],
  scorecard: [`${T}/ScorecardTemplate.tsx`, "src/components/presentation/templates/templates.css"],
  "decision-spectrum": [`${T}/DecisionSpectrumTemplate.tsx`, "src/components/presentation/templates/templates.css"],
  "flow-scenario": [`${T}/FlowScenarioTemplate.tsx`, "src/components/presentation/templates/templates.css"],
  "structured-content-action": [`${T}/StructuredActionTemplate.tsx`, "src/components/presentation/templates/templates.css"],
  exercise: [`${T}/ExerciseTemplate.tsx`, "src/components/presentation/templates/templates.css"],
  "embedded-app": [`${T}/EmbeddedAppTemplate.tsx`, "src/components/presentation/templates/templates.css"],
  "end-card": [`${T}/EndCardTemplate.tsx`, "src/components/presentation/templates/templates.css"],
  "shift-boundary": [`${P}/ShiftBoundarySlide.tsx`, "src/app/pdma2026/presentation/presentation.css"],
  "work-map": [`${P}/WorkMapSlide.tsx`, "src/app/pdma2026/presentation/presentation.css"],
  "ambiguity-gate": [`${P}/AmbiguityGateSlide.tsx`, "src/app/pdma2026/presentation/presentation.css"],
  "agents-reveal": [`${P}/AgentsRevealSlide.tsx`, "src/app/pdma2026/presentation/presentation.css"],
  "framework-to-product": [`${P}/FrameworkToProductSlide.tsx`, "src/app/pdma2026/presentation/presentation.css"],
  "idea-to-spec": [`${P}/IdeaToSpecSlide.tsx`, "src/app/pdma2026/presentation/presentation.css"],
}

export function readDeck(root = process.cwd()) {
  const source = fs.readFileSync(path.join(root, CONTENT), "utf8")
  return source.split(/\n(?=\/\/ \d\d — )/).filter((block) => /^\/\/ \d\d — /.test(block)).map((block) => {
    const number = Number(block.slice(3, 5))
    const composition = block.match(/^\s*kind:\s*"([a-z-]+)"/m)?.[1]
    const [component, stylesheet] = compositionFiles[composition] ?? []
    return {
      number,
      key: `slide-${String(number).padStart(2, "0")}`,
      title: block.match(/tocTitle:\s*"([^"]+)"/)?.[1],
      composition,
      component,
      stylesheet,
      content: `${CONTENT} (export slide${String(number).padStart(2, "0")})`,
      family: component?.includes("src/components/presentation/templates") ? "approved template" : "preserved production composition",
    }
  })
}
