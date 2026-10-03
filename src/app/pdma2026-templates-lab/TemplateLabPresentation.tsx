"use client";

import type { ComponentType } from "react";
import { PresentationShell, PresentationSlideCanvas } from "@/components/presentation/PresentationShell";
import { pdmaAssets } from "@/app/pdma2026/pdmaAssets";
import { PdmaScenarioExercise } from "@/app/pdma2026/exercise/PdmaScenarioExercise";
import type { PdmaSlideKey } from "@/components/presentation/presentationTypes";
import { pdma2026Content } from "@/content/pdma2026";
import { renderTemplate, renderTemplateVariant } from "@/components/presentation/templates/renderTemplate";
import { FlowScenarioTemplate } from "@/components/presentation/templates/FlowScenarioTemplate";
import { StructuredActionTemplate } from "@/components/presentation/templates/StructuredActionTemplate";
import { HubEcosystemTemplate } from "@/components/presentation/templates/HubEcosystemTemplate";
import { templateContent } from "../pdma2026-templates/templateManifest";
import { templateManifest, type TemplateManifestEntry } from "../pdma2026-templates/templateManifest";

/*
 * Eight-slide decoration lab. Templates/content come from the gallery; accepted orb appearance
 * profiles come from shared PBDS presets. This route owns experiment selection and placement.
 */
const flow = templateContent.find((content) => content.kind === "flow-scenario")!;
const structured = templateContent.find((content) => content.kind === "structured-content-action")!;
const hub = templateContent.find((content) => content.kind === "hub-ecosystem")!;
const embedded = templateContent.find((content) => content.kind === "embedded-app")!;
const canonical = (kind: TemplateManifestEntry["kind"]) => templateManifest.find((entry) => entry.kind === kind)!;
const template = (kind: TemplateManifestEntry["kind"]) => templateContent.find((content) => content.kind === kind)!;
const TitleBaseline: ComponentType = () => renderTemplate(template("title"));
const EndCardBaseline: ComponentType = () => renderTemplate(template("end-card"));
const FlowExperiment: ComponentType = () => renderTemplateVariant(flow, "flow-animated-atmosphere");
const FlowBaseline: ComponentType = () => flow.kind === "flow-scenario" ? <FlowScenarioTemplate content={flow} hideLeadConnector hideTailConnector /> : null;
const StructuredAnimatedMagenta: ComponentType = () => renderTemplateVariant(structured, "structured-animated-magenta");
const HubAnimatedPlanets: ComponentType = () => renderTemplateVariant(hub, "hub-animated-planets");
const EmbeddedStaticPlanets: ComponentType = () => renderTemplateVariant(embedded, "embedded-full-planets", { app: <PdmaScenarioExercise /> });

const labSlides = [
  { label: "SLIDE 1 — BASELINE", entry: canonical("title"), component: TitleBaseline },
  { label: "SLIDE 2 — BASELINE", entry: canonical("end-card"), component: EndCardBaseline },
  { label: "SLIDE 6 — BASELINE", entry: canonical("flow-scenario"), component: FlowBaseline },
  { label: "SLIDE 6 — APPROVED LIVE", entry: canonical("flow-scenario"), component: FlowExperiment },
  { label: "TEMPLATE 2/10 — END CARD — TEST", entry: canonical("end-card"), component: EndCardBaseline },
  {
    label: "TEMPLATE 4/10 — EMBEDDED INTERACTIVE APP — TEST",
    entry: canonical("embedded-app"),
    component: EmbeddedStaticPlanets,
    preserveProductionChrome: true,
  },
  { label: "TEMPLATE 8/10 — HUB / ECOSYSTEM — TEST", entry: templateManifest.find((item) => item.kind === "hub-ecosystem")!, component: HubAnimatedPlanets },
  { label: "TEMPLATE 10/10 — STRUCTURED CONTENT / ACTION — TEST", entry: templateManifest.find((item) => item.kind === "structured-content-action")!, component: StructuredAnimatedMagenta },
];

const labManifest = labSlides.map(({ label, entry, component, preserveProductionChrome }, index) => {
  const key = `slide-${String(index + 1).padStart(2, "0")}` as PdmaSlideKey;
  return {
    ...entry,
    key,
    id: key,
    tocTitle: preserveProductionChrome ? entry.tocTitle : label,
    footerLabel: preserveProductionChrome ? entry.footerLabel : label,
    component,
  };
});

export default function TemplateLabPresentation() {
  const slides = labManifest.map(({ component: Component, key }) => Component === EmbeddedStaticPlanets
    ? <Component key={key} />
    : <PresentationSlideCanvas key={key}><Component /></PresentationSlideCanvas>);
  return <PresentationShell slides={slides} slideManifest={labManifest} navigation={pdma2026Content.navigation} brandLabel="PDMA 2026" brandAsset={pdmaAssets.asterisk} tocDialogId="pdma2026-slide-toc" />;
}
