import type { PresentationSpec, PresentationTemplateKind } from "./presentationTypes";

export const PRESENTATION_TEMPLATE_IDS = [
  "title", "end-card", "exercise", "embedded-app", "compare-contrast", "flow-scenario",
  "decision-spectrum", "hub-ecosystem", "scorecard", "structured-content-action",
] as const satisfies readonly PresentationTemplateKind[];

export type PresentationRegistryCatalog = {
  chromeIds: ReadonlySet<string>;
  navigationCopyIds: ReadonlySet<string>;
  compositionIds: ReadonlySet<string>;
  decorationRecipeIds: ReadonlySet<string>;
  slotIds: ReadonlySet<string>;
  assetIds: ReadonlySet<string>;
};

const fail = (deckId: string, slideId: string | undefined, field: string, message: string): never => {
  throw new Error(`[presentation ${deckId}${slideId ? ` / slide ${slideId}` : ""}] ${field}: ${message}`);
};

function assertJson(value: unknown, deckId: string, slideId?: string, field = "spec") {
  const active = new Set<object>();
  const visit = (item: unknown, path: string): void => {
    if (item === null || typeof item === "string" || typeof item === "boolean") return;
    if (typeof item === "number") { if (Number.isFinite(item)) return; fail(deckId, slideId, path, "number must be finite"); }
    if (typeof item !== "object") fail(deckId, slideId, path, `${typeof item} is not serializable data`);
    if (active.has(item as object)) fail(deckId, slideId, path, "cyclic data is not serializable");
    active.add(item as object);
    if (Array.isArray(item)) item.forEach((child, index) => visit(child, `${path}[${index}]`));
    else {
      const proto = Object.getPrototypeOf(item);
      if (proto !== Object.prototype && proto !== null) fail(deckId, slideId, path, "only plain objects are allowed");
      for (const [key, child] of Object.entries(item as Record<string, unknown>)) visit(child, `${path}.${key}`);
    }
    active.delete(item as object);
  };
  visit(value, field);
}

const requiredTemplateFields: Readonly<Record<PresentationTemplateKind, readonly string[]>> = {
  title: ["speaker"],
  "end-card": ["statement", "download"],
  exercise: ["rows", "worksheet", "takeaway"],
  "embedded-app": ["frameLabel"],
  "compare-contrast": ["panels", "takeaway"],
  "flow-scenario": ["synopsis", "signals", "stages", "question", "takeaway"],
  "decision-spectrum": ["stages", "progression", "takeaway"],
  "hub-ecosystem": ["inventory", "core", "owners", "caption"],
  scorecard: ["decisionRule", "columns", "highlight", "takeaway"],
  "structured-content-action": ["requirements", "steps", "takeaway"],
};

const expectedPayloadKinds: Partial<Record<PresentationTemplateKind, Readonly<Record<string, "object" | "array" | "string">>>> = {
  title: { speaker: "object" },
  "end-card": { statement: "object", download: "object" },
  exercise: { rows: "array", worksheet: "object", takeaway: "string" },
  "embedded-app": { frameLabel: "string" },
  "compare-contrast": { panels: "array", takeaway: "string" },
  "flow-scenario": { synopsis: "object", signals: "array", stages: "array", question: "object", takeaway: "string" },
  "decision-spectrum": { stages: "array", progression: "array", takeaway: "string" },
  "hub-ecosystem": { inventory: "object", core: "object", owners: "object", caption: "array" },
  scorecard: { decisionRule: "object", columns: "array", highlight: "object", takeaway: "string" },
  "structured-content-action": { requirements: "array", steps: "array", takeaway: "string" },
};

export function validatePresentationSpec(spec: PresentationSpec, catalog: PresentationRegistryCatalog): true {
  const deckId = typeof spec?.id === "string" && spec.id ? spec.id : "<unknown>";
  assertJson(spec, deckId);
  if (spec.schemaVersion !== 1) fail(deckId, undefined, "schemaVersion", `unsupported version ${String(spec.schemaVersion)}`);
  if (typeof spec.id !== "string" || !deckId.trim()) fail(deckId, undefined, "id", "must be a non-empty string");
  if (!catalog.chromeIds.has(spec.chromeId)) fail(deckId, undefined, "chromeId", `unknown chrome ID '${spec.chromeId}'`);
  if (!catalog.navigationCopyIds.has(spec.navigationCopyId)) fail(deckId, undefined, "navigationCopyId", `unknown navigation copy ID '${spec.navigationCopyId}'`);
  if (typeof spec.metadata?.title !== "string" || !spec.metadata.title.trim()) fail(deckId, undefined, "metadata.title", "must be a non-empty string");
  if (typeof spec.metadata?.brandLabel !== "string" || !spec.metadata.brandLabel.trim()) fail(deckId, undefined, "metadata.brandLabel", "must be a non-empty string");
  if (!Array.isArray(spec.slides) || spec.slides.length === 0) fail(deckId, undefined, "slides", "must contain at least one slide");
  const seen = new Set<string>();
  for (const slide of spec.slides) {
    if (!slide || typeof slide !== "object" || Array.isArray(slide)) fail(deckId, "<unknown>", "slides[]", "each slide must be an object");
    const slideId = slide?.id ?? "<unknown>";
    if (typeof slideId !== "string" || !slideId.trim()) fail(deckId, "<unknown>", "id", "must be a non-empty string");
    if (seen.has(slideId)) fail(deckId, slideId, "id", "duplicate slide ID");
    seen.add(slideId);
    if (typeof slide.tocTitle !== "string" || !slide.tocTitle.trim()) fail(deckId, slideId, "tocTitle", "must be a non-empty string");
    if (!Array.isArray(slide.headerLabels) || slide.headerLabels.length !== 3 || slide.headerLabels.some((label) => typeof label !== "string" || !label.trim())) fail(deckId, slideId, "headerLabels", "requires exactly three non-empty labels");
    if (typeof slide.footerLabel !== "string" || !slide.footerLabel.trim()) fail(deckId, slideId, "footerLabel", "must be a non-empty string");
    if (!slide.title || !Number.isFinite(slide.title.size) || slide.title.size <= 0) fail(deckId, slideId, "title.size", "must be a positive finite number");
    if (![slide.title.white, slide.title.magenta, slide.title.subtitle].some((value) => typeof value === "string" && value.trim())) fail(deckId, slideId, "title", "requires non-empty white, magenta, or subtitle content");
    const composition = slide.composition;
    if (!composition || typeof composition !== "object" || Array.isArray(composition)) fail(deckId, slideId, "composition", "must be a template or deck-local object");
    if (composition.type === "template") {
      if (!(PRESENTATION_TEMPLATE_IDS as readonly string[]).includes(composition.templateId)) fail(deckId, slideId, "composition.templateId", `unknown template ID '${composition.templateId}'`);
      if (!composition.content || typeof composition.content !== "object" || Array.isArray(composition.content)) fail(deckId, slideId, "composition.content", "template payload must be an object");
      const payload = composition.content as Record<string, unknown>;
      for (const field of requiredTemplateFields[composition.templateId]) {
        if (!(field in payload)) fail(deckId, slideId, `composition.content.${field}`, "required template payload field is missing");
        const expected = expectedPayloadKinds[composition.templateId]?.[field];
        const actual = Array.isArray(payload[field]) ? "array" : payload[field] === null ? "null" : typeof payload[field];
        if (expected && actual !== expected) fail(deckId, slideId, `composition.content.${field}`, `expected ${expected}, received ${actual}`);
      }
    } else if (!catalog.compositionIds.has(composition.compositionId)) fail(deckId, slideId, "composition.compositionId", `unknown composition ID '${composition.compositionId}'`);
    if ("decoration" in slide && (!slide.decoration || typeof slide.decoration !== "object" || !catalog.decorationRecipeIds.has(slide.decoration.recipeId))) fail(deckId, slideId, "decoration.recipeId", `unknown decoration recipe '${slide.decoration?.recipeId}'`);
    if (slide.slots !== undefined && (!slide.slots || typeof slide.slots !== "object" || Array.isArray(slide.slots))) fail(deckId, slideId, "slots", "must be a record of slot IDs");
    for (const [slot, slotId] of Object.entries(slide.slots ?? {})) if (!catalog.slotIds.has(slotId)) fail(deckId, slideId, `slots.${slot}`, `unknown slot ID '${slotId}'`);
    if (slide.assetIds !== undefined && !Array.isArray(slide.assetIds)) fail(deckId, slideId, "assetIds", "must be an array of registered asset IDs");
    for (const assetId of slide.assetIds ?? []) if (typeof assetId !== "string" || !catalog.assetIds.has(assetId)) fail(deckId, slideId, "assetIds", `unknown asset ID '${assetId}'`);
    if (slide.routeLinks !== undefined && !Array.isArray(slide.routeLinks)) fail(deckId, slideId, "routeLinks", "must be an array of labeled links");
    for (const [index, link] of (slide.routeLinks ?? []).entries()) if (!link || typeof link.label !== "string" || !link.label.trim() || typeof link.href !== "string" || !link.href.trim()) fail(deckId, slideId, `routeLinks[${index}]`, "label and href must be non-empty strings");
  }
  return true;
}
