import type { TemplateContent } from "./templateTypes";
import {
  slide01 as title,
  slide03 as compareContrast,
  slide06 as hubEcosystem,
  slide07 as scorecard,
  slide08 as decisionSpectrum,
  slide09 as flowScenario,
  slide10 as structuredAction,
  slide14 as exercise,
  slide15 as embeddedApp,
  slide16 as endCard,
} from "@/app/pdma2026/presentation/pdma2026Content";

/*
 * Body copy for the /pdma2026-templates gallery. All ten exemplars render the production
 * deck's own content objects (src/app/pdma2026/presentation/pdma2026Content.ts is the copy
 * authority). Approved concept images own composition only; none of their placeholder
 * wording is used.
 */

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
