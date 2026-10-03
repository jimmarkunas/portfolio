import type { ReactNode } from "react";
import type { PresentationSlideManifestEntry } from "@/components/presentation/presentationTypes";
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
import { decorativeVariants, isDecorImage } from "@/components/presentation/templates/DecorativeLayer";
import type { TemplateContent, TemplateKind } from "@/components/presentation/presentationTypes";

export const TEMPLATE_COUNT = 10;

export const templateNames: Record<TemplateKind, string> = {
  title: "Title",
  "end-card": "End Card",
  exercise: "Exercise / Worksheet",
  "embedded-app": "Embedded Interactive App",
  "compare-contrast": "Compare / Contrast",
  "flow-scenario": "Flow / Scenario",
  "decision-spectrum": "Decision / Spectrum",
  "hub-ecosystem": "Hub / Ecosystem",
  scorecard: "Scorecard / Evaluation",
  "structured-content-action": "Structured Content / Action",
};

export type TemplateManifestEntry = PresentationSlideManifestEntry & { kind: TemplateKind; templateName: string; sourceSlide: number | null; qa: "targeted" };

/** Gallery order from the ten production slide exemplars. */
export const templateContent = [title, endCard, exercise, embeddedApp, compareContrast, flowScenario, decisionSpectrum, hubEcosystem, scorecard, structuredAction] as const satisfies readonly TemplateContent[];

function templateAssets(content: TemplateContent) {
  const decorative = decorativeVariants[content.decorativeVariant].filter(isDecorImage).map(({ src }) => src);
  if (content.kind === "exercise") return [...decorative, ...content.rows.map(({ glyph }) => glyph), content.connectorArt];
  return decorative;
}

/** Shell-compatible manifest: one entry per template, chrome taken from the mapped live slide. */
export const templateManifest: readonly TemplateManifestEntry[] = templateContent.map((content, index) => {
  const key = `slide-${String(index + 1).padStart(2, "0")}`;
  const templateName = templateNames[content.kind];
  return {
    key,
    id: key,
    kind: content.kind,
    templateName,
    sourceSlide: content.chrome.sourceSlide,
    tocTitle: `${templateName.toUpperCase()} — ${content.chrome.tocTitle}`,
    headerLabels: content.chrome.headerLabels,
    footerLabel: content.chrome.footerLabel,
    title: content.chrome.title,
    assets: templateAssets(content),
    qa: "targeted",
  };
});

export function assertTemplateManifestParity(manifest: readonly TemplateManifestEntry[], rendered: readonly ReactNode[]) {
  if (manifest.length !== TEMPLATE_COUNT || rendered.length !== TEMPLATE_COUNT) throw new Error(`PDMA template parity failed: ${manifest.length} manifest entries, ${rendered.length} rendered slides`);
  if (new Set(manifest.map(({ kind }) => kind)).size !== TEMPLATE_COUNT) throw new Error("PDMA template parity failed: duplicate template kind");
  if (manifest.some(({ headerLabels }) => headerLabels.length !== 3 || headerLabels.some((label) => !label.trim()))) throw new Error("PDMA template parity failed: every template requires three header labels");
  if (manifest.some(({ footerLabel }) => !footerLabel.trim())) throw new Error("PDMA template parity failed: every template requires a footer label");
}
