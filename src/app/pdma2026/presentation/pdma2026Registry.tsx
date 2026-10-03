import type { ReactNode } from "react";
import type { PresentationSlideSpec, PresentationSpec, TemplateContent } from "@/components/presentation/presentationTypes";
import { renderPresentationTemplate } from "@/components/presentation/presentationTemplateRegistry";
import { validatePresentationSpec } from "@/components/presentation/presentationSpec";
import { AgentsRevealSlide } from "./slides/AgentsRevealSlide";
import { AmbiguityGateSlide } from "./slides/AmbiguityGateSlide";
import { FrameworkToProductSlide } from "./slides/FrameworkToProductSlide";
import { IdeaToSpecSlide } from "./slides/IdeaToSpecSlide";
import { ShiftBoundarySlide } from "./slides/ShiftBoundarySlide";
import { WorkMapSlide } from "./slides/WorkMapSlide";
import { pdmaDecorativeRecipes } from "./pdmaDecorativeRecipes";
import { pdma2026SlotIds, resolvePdma2026Slot } from "./pdma2026Slots";
import { pdma2026Spec } from "./pdma2026Content";

type LocalRenderer = (content: Record<string, unknown>) => ReactNode;
const chromeFor = (slide: PresentationSlideSpec) => ({ tocTitle: slide.tocTitle, headerLabels: slide.headerLabels, footerLabel: slide.footerLabel, title: slide.title });
const contentFor = (slide: PresentationSlideSpec, kind: string) => ({
  kind,
  chrome: chromeFor(slide),
  decorativeVariant: slide.decoration?.recipeId ?? "none",
  ...(slide.composition.content as Record<string, unknown>),
}) as Record<string, unknown>;

/** The six accepted PDMA-only compositions stay behind this consumer-owned registry. */
export const pdma2026CompositionRegistry: Readonly<Record<string, LocalRenderer>> = {
  "shift-boundary": (content) => <ShiftBoundarySlide content={content as never} />,
  "work-map": (content) => <WorkMapSlide content={content as never} />,
  "ambiguity-gate": (content) => <AmbiguityGateSlide content={content as never} />,
  "agents-reveal": (content) => <AgentsRevealSlide content={content as never} />,
  "framework-to-product": (content) => <FrameworkToProductSlide content={content as never} />,
  "idea-to-spec": (content) => <IdeaToSpecSlide content={content as never} />,
};

export const pdma2026RegistryCatalog = {
  chromeIds: new Set(["pbds-presentation"]),
  navigationCopyIds: new Set(["pdma2026-navigation"]),
  compositionIds: new Set(Object.keys(pdma2026CompositionRegistry)),
  decorationRecipeIds: new Set(Object.keys(pdmaDecorativeRecipes)),
  slotIds: new Set<string>(pdma2026SlotIds),
  assetIds: new Set(pdma2026Spec.slides.flatMap(({ assetIds = [] }) => assetIds)),
};

export function validatePdma2026Spec(spec: PresentationSpec = pdma2026Spec) {
  return validatePresentationSpec(spec, pdma2026RegistryCatalog);
}

export function renderPdma2026Slide(slide: PresentationSlideSpec): ReactNode {
  if (slide.composition.type === "template") {
    const template = slide.composition.templateId;
    const content = contentFor(slide, template) as TemplateContent;
    const appSlotId = slide.slots?.app;
    return renderPresentationTemplate(template, content, { app: appSlotId ? resolvePdma2026Slot(appSlotId) : null });
  }
  const renderer = pdma2026CompositionRegistry[slide.composition.compositionId];
  if (!renderer) throw new Error(`[presentation ${pdma2026Spec.id} / slide ${slide.id}] composition '${slide.composition.compositionId}' is not registered`);
  return renderer(contentFor(slide, slide.composition.compositionId));
}

export function assertPdma2026Spec(spec: PresentationSpec = pdma2026Spec) {
  validatePdma2026Spec(spec);
  if (spec.slides.length !== 16) throw new Error(`PDMA spec requires 16 slides; got ${spec.slides.length}`);
  return true;
}
