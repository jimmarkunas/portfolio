import type { ComponentType, ReactNode } from "react";
import type { PdmaSlideKey, PdmaSlideManifestEntry } from "@/app/pdma2026/presentation/presentationTypes";
import { ProductizationExerciseApp } from "./components/apps/ProductizationExerciseApp";
import { decorativeVariants, isDecorImage } from "./components/DecorativeLayer";
import { CompareContrastTemplate } from "./components/templates/CompareContrastTemplate";
import { DecisionSpectrumTemplate } from "./components/templates/DecisionSpectrumTemplate";
import { EmbeddedAppTemplate } from "./components/templates/EmbeddedAppTemplate";
import { EndCardTemplate } from "./components/templates/EndCardTemplate";
import { ExerciseTemplate } from "./components/templates/ExerciseTemplate";
import { FlowScenarioTemplate } from "./components/templates/FlowScenarioTemplate";
import { HubEcosystemTemplate } from "./components/templates/HubEcosystemTemplate";
import { ScorecardTemplate } from "./components/templates/ScorecardTemplate";
import { StructuredActionTemplate } from "./components/templates/StructuredActionTemplate";
import { TitleTemplate } from "./components/templates/TitleTemplate";
import { templateContent } from "./templateContent";
import type { TemplateContent, TemplateKind } from "./templateTypes";

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

export type TemplateManifestEntry = PdmaSlideManifestEntry & { kind: TemplateKind; templateName: string; sourceSlide: number | null; qa: "targeted" };

function renderTemplate(content: TemplateContent): ReactNode {
  switch (content.kind) {
    case "title": return <TitleTemplate content={content} />;
    case "end-card": return <EndCardTemplate content={content} />;
    case "exercise": return <ExerciseTemplate content={content} />;
    case "embedded-app": return <EmbeddedAppTemplate content={content} app={<ProductizationExerciseApp />} />;
    case "compare-contrast": return <CompareContrastTemplate content={content} />;
    case "flow-scenario": return <FlowScenarioTemplate content={content} />;
    case "decision-spectrum": return <DecisionSpectrumTemplate content={content} />;
    case "hub-ecosystem": return <HubEcosystemTemplate content={content} />;
    case "scorecard": return <ScorecardTemplate content={content} />;
    case "structured-content-action": return <StructuredActionTemplate content={content} />;
  }
}

function templateAssets(content: TemplateContent) {
  const decorative = decorativeVariants[content.decorativeVariant].filter(isDecorImage).map(({ src }) => src);
  if (content.kind === "exercise") return [...decorative, ...content.rows.map(({ glyph }) => glyph), content.connectorArt];
  return decorative;
}

/** Shell-compatible manifest: one entry per template, chrome taken from the mapped live slide. */
export const templateManifest: readonly TemplateManifestEntry[] = templateContent.map((content, index) => {
  const key = `slide-${String(index + 1).padStart(2, "0")}` as PdmaSlideKey;
  const templateName = templateNames[content.kind];
  const Component: ComponentType = () => renderTemplate(content);
  Component.displayName = `PdmaTemplate(${content.kind})`;
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
    component: Component,
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
