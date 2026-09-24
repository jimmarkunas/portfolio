import type { ComponentType, ReactNode } from "react";
import { decorativeVariants, isDecorImage, type DecorItem } from "@/app/pdma2026-templates/components/DecorativeLayer";
import { CompareContrastTemplate } from "@/app/pdma2026-templates/components/templates/CompareContrastTemplate";
import { DecisionSpectrumTemplate } from "@/app/pdma2026-templates/components/templates/DecisionSpectrumTemplate";
import { EndCardTemplate } from "@/app/pdma2026-templates/components/templates/EndCardTemplate";
import { ExerciseTemplate } from "@/app/pdma2026-templates/components/templates/ExerciseTemplate";
import { FlowScenarioTemplate } from "@/app/pdma2026-templates/components/templates/FlowScenarioTemplate";
import { HubEcosystemTemplate } from "@/app/pdma2026-templates/components/templates/HubEcosystemTemplate";
import { ScorecardTemplate } from "@/app/pdma2026-templates/components/templates/ScorecardTemplate";
import { StructuredActionTemplate } from "@/app/pdma2026-templates/components/templates/StructuredActionTemplate";
import { TitleTemplate } from "@/app/pdma2026-templates/components/templates/TitleTemplate";
import { PDMA_EXERCISE_ROUTE, PDMA_KIT_URL, pdma2026Slides, type Pdma2026SlideContent } from "./pdma2026Content";
import type { PdmaSlideKey, PdmaSlideManifestEntry } from "./presentationTypes";
import { AgentsRevealSlide } from "./slides/AgentsRevealSlide";
import { AmbiguityGateSlide, ambiguityDecor } from "./slides/AmbiguityGateSlide";
import { FrameworkToProductSlide } from "./slides/FrameworkToProductSlide";
import { IdeaToSpecSlide } from "./slides/IdeaToSpecSlide";
import { ShiftBoundarySlide, shiftBoundaryDecor } from "./slides/ShiftBoundarySlide";
import { WorkMapSlide, workMapDecor } from "./slides/WorkMapSlide";

export const PDMA2026_SLIDE_COUNT = 15;

export type Pdma2026ManifestEntry = PdmaSlideManifestEntry & { composition: Pdma2026SlideContent["kind"]; qa: "targeted" };

/** One composition per slide: nine approved templates, six preserved production compositions. */
function renderSlide(content: Pdma2026SlideContent): ReactNode {
  switch (content.kind) {
    case "title": return <TitleTemplate content={content} />;
    case "shift-boundary": return <ShiftBoundarySlide content={content} />;
    case "compare-contrast": return <CompareContrastTemplate content={content} />;
    case "work-map": return <WorkMapSlide content={content} />;
    case "ambiguity-gate": return <AmbiguityGateSlide content={content} />;
    case "hub-ecosystem": return <HubEcosystemTemplate content={content} />;
    case "scorecard": return <ScorecardTemplate content={content} />;
    case "decision-spectrum": return <DecisionSpectrumTemplate content={content} />;
    case "flow-scenario": return <FlowScenarioTemplate content={content} />;
    case "structured-content-action": return <StructuredActionTemplate content={content} />;
    case "agents-reveal": return <AgentsRevealSlide content={content} />;
    case "framework-to-product": return <FrameworkToProductSlide content={content} />;
    case "idea-to-spec": return <IdeaToSpecSlide content={content} />;
    case "exercise": return <ExerciseTemplate content={content} />;
    case "end-card": return <EndCardTemplate content={content} />;
  }
}

const decorSources = (items: readonly DecorItem[]) => items.filter(isDecorImage).map(({ src }) => src);

function slideAssets(content: Pdma2026SlideContent): readonly string[] {
  switch (content.kind) {
    case "shift-boundary": return [...decorSources(shiftBoundaryDecor), ...content.lists.flatMap(({ items }) => items.map(({ glyph }) => glyph))];
    case "work-map": return decorSources(workMapDecor);
    case "ambiguity-gate": return decorSources(ambiguityDecor);
    case "agents-reveal": return [content.hub.ring];
    case "framework-to-product": return [];
    case "idea-to-spec": return [content.before.marker, content.after.marker, content.bridge.art];
    case "exercise": return [...decorSources(decorativeVariants[content.decorativeVariant]), ...content.rows.map(({ glyph }) => glyph), content.connectorArt];
    default: return decorSources(decorativeVariants[content.decorativeVariant]);
  }
}

const routeLinks = (content: Pdma2026SlideContent) => content.kind === "exercise" ? [PDMA_EXERCISE_ROUTE] : content.kind === "end-card" ? [PDMA_KIT_URL] : undefined;

/** The production /pdma2026 manifest: order, IDs, TOC, chrome, and composition per slide. */
export const pdma2026Manifest: readonly Pdma2026ManifestEntry[] = pdma2026Slides.map((content, index) => {
  const key = `slide-${String(index + 1).padStart(2, "0")}` as PdmaSlideKey;
  const Component: ComponentType = () => renderSlide(content);
  Component.displayName = `Pdma2026Slide(${key}:${content.kind})`;
  return {
    key,
    id: key,
    composition: content.kind,
    tocTitle: content.chrome.tocTitle,
    headerLabels: content.chrome.headerLabels,
    footerLabel: content.chrome.footerLabel,
    title: content.chrome.title,
    component: Component,
    assets: slideAssets(content),
    routeLinks: routeLinks(content),
    qa: "targeted",
  };
});

export function assertPdma2026ManifestParity(manifest: readonly Pdma2026ManifestEntry[], rendered: readonly ReactNode[]) {
  if (manifest.length !== PDMA2026_SLIDE_COUNT || rendered.length !== PDMA2026_SLIDE_COUNT) throw new Error(`PDMA manifest/render parity failed: ${manifest.length} manifest entries, ${rendered.length} rendered slides`);
  if (new Set(manifest.map(({ id }) => id)).size !== PDMA2026_SLIDE_COUNT) throw new Error("PDMA manifest/render parity failed: duplicate slide id");
  if (manifest.some(({ headerLabels }) => headerLabels.length !== 3 || headerLabels.some((label) => !label.trim()))) throw new Error("PDMA manifest/render parity failed: every slide requires exactly three non-empty header labels");
  if (manifest.some(({ footerLabel }) => !footerLabel.trim())) throw new Error("PDMA manifest/render parity failed: every slide requires a non-empty footer label");
}
