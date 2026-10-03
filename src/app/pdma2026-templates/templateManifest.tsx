import type { ComponentType, ReactNode } from "react";
import { renderPresentationTemplate } from "@/components/presentation/presentationTemplateRegistry";
import { isDecorImage } from "@/components/presentation/templates/DecorativeLayer";
import { validatePresentationSpec } from "@/components/presentation/presentationSpec";
import { galleryDecorationRecipes } from "./galleryDecorationRecipes";
import { GalleryEmbeddedAppExample } from "./GalleryEmbeddedAppExample";
import { templateContent } from "./templateGalleryFixtures";
import type { JsonValue, PresentationSlideSpec, PresentationSpec, TemplateContent, TemplateKind } from "@/components/presentation/presentationTypes";

export const TEMPLATE_COUNT = 10;
export const templateNames: Record<TemplateKind, string> = {
  title: "Title", "end-card": "End Card", exercise: "Exercise / Worksheet",
  "embedded-app": "Embedded Interactive App", "compare-contrast": "Compare / Contrast",
  "flow-scenario": "Flow / Scenario", "decision-spectrum": "Decision / Spectrum",
  "hub-ecosystem": "Hub / Ecosystem", scorecard: "Scorecard / Evaluation",
  "structured-content-action": "Structured Content / Action",
};

const sourceSlides: Record<TemplateKind, number | null> = {
  title: 1, "end-card": 16, exercise: 14, "embedded-app": null, "compare-contrast": 3,
  "flow-scenario": 9, "decision-spectrum": 8, "hub-ecosystem": 6, scorecard: 7,
  "structured-content-action": 10,
};

export type TemplateManifestEntry = {
  key: string;
  id: string;
  kind: TemplateKind;
  templateName: string;
  sourceSlide: number | null;
  tocTitle: string;
  headerLabels: readonly [string, string, string];
  footerLabel: string;
  title: TemplateContent["chrome"]["title"];
  component: ComponentType;
  assets: readonly string[];
  routeLinks?: readonly string[];
  qa: "targeted";
};

/** These fixtures are immutable examples, copied once from the accepted production exemplars. */
export { templateContent };

export const galleryNavigationCopy = {
  previousAriaLabel: "Previous slide", nextAriaLabel: "Next slide", openTocAriaLabel: "Open slide table of contents",
  toggleFullscreenAriaLabel: "Toggle fullscreen", tocDialogAriaLabel: "PDMA 2026 slide table of contents",
  tocTitle: "PDMA 2026", closeButtonLabel: "Close slide table of contents",
};

const fixturePayload = (content: TemplateContent): JsonValue => {
  const { kind: _kind, chrome: _chrome, decorativeVariant: _decoration, ...payload } = content;
  return payload as JsonValue;
};

export const galleryPresentationSpec: PresentationSpec = {
  schemaVersion: 1,
  id: "pdma2026-templates",
  chromeId: "pbds-presentation",
  metadata: { title: "Presentation Template Gallery", brandLabel: "PDMA 2026" },
  navigationCopyId: "gallery-navigation",
  slides: templateContent.map((content, index) => ({
    id: `slide-${String(index + 1).padStart(2, "0")}`,
    tocTitle: `${templateNames[content.kind].toUpperCase()} — ${content.chrome.tocTitle}`,
    headerLabels: content.chrome.headerLabels,
    footerLabel: content.chrome.footerLabel,
    title: content.chrome.title,
    composition: { type: "template", templateId: content.kind, content: fixturePayload(content) },
    decoration: { recipeId: content.decorativeVariant },
    assetIds: assetsFor(content),
    ...(content.kind === "exercise" ? { routeLinks: [{ label: "Open exercise", href: content.worksheet.href }] } : {}),
    ...(content.kind === "embedded-app" ? { slots: { app: "gallery-embedded-example" } } : {}),
  })),
};

export const galleryRegistryCatalog = {
  chromeIds: new Set(["pbds-presentation"]), navigationCopyIds: new Set(["gallery-navigation"]),
  compositionIds: new Set<string>(), decorationRecipeIds: new Set(Object.keys(galleryDecorationRecipes)),
  slotIds: new Set(["gallery-embedded-example"]), assetIds: new Set(galleryPresentationSpec.slides.flatMap(({ assetIds = [] }) => assetIds)),
};
export function validateGallerySpec(spec: PresentationSpec = galleryPresentationSpec) { return validatePresentationSpec(spec, galleryRegistryCatalog); }

export function renderGallerySlide(slide: PresentationSlideSpec): ReactNode {
  if (slide.composition.type !== "template") throw new Error(`[presentation ${galleryPresentationSpec.id} / slide ${slide.id}] gallery accepts template compositions only`);
  const content = {
    ...slide.composition.content as Record<string, unknown>,
    kind: slide.composition.templateId,
    chrome: { tocTitle: slide.tocTitle, headerLabels: slide.headerLabels, footerLabel: slide.footerLabel, title: slide.title },
    decorativeVariant: slide.decoration?.recipeId ?? "none",
  } as TemplateContent;
  const app = slide.slots?.app === "gallery-embedded-example" ? <GalleryEmbeddedAppExample /> : null;
  return renderPresentationTemplate(slide.composition.templateId, content, { app });
}

function renderTemplate(content: TemplateContent): ReactNode {
  return renderPresentationTemplate(content.kind, content, {
    app: content.kind === "embedded-app" ? <GalleryEmbeddedAppExample /> : null,
  });
}

function assetsFor(content: TemplateContent) {
  const decoration = galleryDecorationRecipes[content.decorativeVariant] ?? [];
  const recipeAssets = decoration.filter(isDecorImage).map(({ src }) => src);
  const contentAssets = JSON.stringify(content).match(/"(\/[^" ]+\.(?:svg|png|jpe?g|webp))"/gi)?.map((value) => value.slice(1, -1)) ?? [];
  return [...new Set([...recipeAssets, ...contentAssets])];
}

export const templateManifest: readonly TemplateManifestEntry[] = templateContent.map((content, index) => {
  const templateName = templateNames[content.kind];
  const Component: ComponentType = () => renderTemplate(content);
  Component.displayName = `PresentationTemplateExample(${content.kind})`;
  return {
    key: `slide-${String(index + 1).padStart(2, "0")}`,
    id: `slide-${String(index + 1).padStart(2, "0")}`,
    kind: content.kind,
    templateName,
    sourceSlide: sourceSlides[content.kind],
    tocTitle: `${templateName.toUpperCase()} — ${content.chrome.tocTitle}`,
    headerLabels: content.chrome.headerLabels,
    footerLabel: content.chrome.footerLabel,
    title: content.chrome.title,
    component: Component,
    assets: assetsFor(content),
    ...(content.kind === "exercise" ? { routeLinks: [content.worksheet.href] } : {}),
    qa: "targeted",
  };
});

export function assertTemplateManifestParity(manifest: readonly TemplateManifestEntry[], rendered: readonly ReactNode[]) {
  if (manifest.length !== TEMPLATE_COUNT || rendered.length !== TEMPLATE_COUNT) throw new Error(`presentation template parity failed: ${manifest.length} entries, ${rendered.length} rendered slides`);
  if (new Set(manifest.map(({ kind }) => kind)).size !== TEMPLATE_COUNT) throw new Error("presentation template parity failed: duplicate template kind");
  if (manifest.some(({ headerLabels }) => headerLabels.length !== 3 || headerLabels.some((label) => !label.trim()))) throw new Error("presentation template parity failed: every template requires three non-empty header labels");
  if (manifest.some(({ footerLabel }) => !footerLabel.trim())) throw new Error("presentation template parity failed: every template requires a non-empty footer label");
}
