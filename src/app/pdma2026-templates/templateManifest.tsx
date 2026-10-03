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
import type { TemplateVariantId } from "@/components/presentation/templates/renderTemplate";

export const BASELINE_TEMPLATE_COUNT = 10;
export const TEMPLATE_COUNT = 14;

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

export type TemplateManifestEntry = PresentationSlideManifestEntry & { kind: TemplateKind; templateName: string; variantId?: TemplateVariantId; sourceSlide: number | null; qa: "targeted" };

/** Gallery order from the ten production slide exemplars. */
export const templateContent = [title, endCard, exercise, embeddedApp, compareContrast, flowScenario, decisionSpectrum, hubEcosystem, scorecard, structuredAction] as const satisfies readonly TemplateContent[];

export const templateGalleryEntries: readonly { content: TemplateContent; variantId?: TemplateVariantId; variantLabel?: string }[] = [
  ...templateContent.map((content) => ({ content })),
  { content: flowScenario, variantId: "flow-animated-atmosphere", variantLabel: "ANIMATED ATMOSPHERE" },
  { content: embeddedApp, variantId: "embedded-full-planets", variantLabel: "FULL PLANETS" },
  { content: hubEcosystem, variantId: "hub-animated-planets", variantLabel: "ANIMATED PLANETS" },
  { content: structuredAction, variantId: "structured-animated-magenta", variantLabel: "ANIMATED MAGENTA" },
];

function templateAssets(content: TemplateContent) {
  const decorative = decorativeVariants[content.decorativeVariant].filter(isDecorImage).map(({ src }) => src);
  if (content.kind === "exercise") return [...decorative, ...content.rows.map(({ glyph }) => glyph), content.connectorArt];
  return decorative;
}

/** Shell-compatible manifest: one entry per template, chrome taken from the mapped live slide. */
export const templateManifest: readonly TemplateManifestEntry[] = templateGalleryEntries.map(({ content, variantId, variantLabel }, index) => {
  const key = `slide-${String(index + 1).padStart(2, "0")}`;
  const templateName = templateNames[content.kind];
  return {
    key,
    id: key,
    kind: content.kind,
    templateName,
    sourceSlide: content.chrome.sourceSlide,
    tocTitle: `${templateName.toUpperCase()}${variantLabel ? ` — ${variantLabel}` : ` — ${content.chrome.tocTitle}`}`,
    headerLabels: content.chrome.headerLabels,
    footerLabel: content.chrome.footerLabel,
    title: content.chrome.title,
    assets: [...templateAssets(content), ...(variantId === "embedded-full-planets" ? ["/pdma2026-templates-lab/assets/slide-06/planet-left.png", "/pdma2026-templates-lab/assets/slide-06/planet-right.png"] : [])],
    ...(variantId ? { variantId } : {}),
    qa: "targeted",
  };
});

export function assertTemplateManifestParity(manifest: readonly TemplateManifestEntry[], rendered: readonly ReactNode[]) {
  if (manifest.length !== TEMPLATE_COUNT || rendered.length !== TEMPLATE_COUNT) throw new Error(`PDMA template parity failed: ${manifest.length} manifest entries, ${rendered.length} rendered slides`);
  if (manifest.slice(0, BASELINE_TEMPLATE_COUNT).map(({ kind }) => kind).join(",") !== templateContent.map(({ kind }) => kind).join(",")) throw new Error("PDMA template parity failed: baseline order changed");
  if (new Set(manifest.slice(0, BASELINE_TEMPLATE_COUNT).map(({ kind }) => kind)).size !== BASELINE_TEMPLATE_COUNT) throw new Error("PDMA template parity failed: duplicate baseline template kind");
  if (manifest.slice(BASELINE_TEMPLATE_COUNT).map(({ variantId }) => variantId).join(",") !== "flow-animated-atmosphere,embedded-full-planets,hub-animated-planets,structured-animated-magenta") throw new Error("PDMA template parity failed: promoted variant order");
  if (manifest.some(({ headerLabels }) => headerLabels.length !== 3 || headerLabels.some((label) => !label.trim()))) throw new Error("PDMA template parity failed: every template requires three header labels");
  if (manifest.some(({ footerLabel }) => !footerLabel.trim())) throw new Error("PDMA template parity failed: every template requires a footer label");
}
