"use client";

import type { ComponentType, CSSProperties } from "react";
import { orbAppearanceProfiles } from "@/components/pbds/orb/orbPresets";
import { PdmaPresentationShell, PdmaSlideCanvas } from "@/app/pdma2026/PdmaPresentationShell";
import { PdmaScenarioExercise } from "@/app/pdma2026/exercise/PdmaScenarioExercise";
import type { PdmaSlideKey } from "@/components/presentation/presentationTypes";
import { pdma2026Content } from "@/content/pdma2026";
import { DecorativeLayer, isDecorOrb } from "@/components/presentation/templates/DecorativeLayer";
import { EmbeddedAppFrame } from "@/components/presentation/TemplatePrimitives";
import { shellTitleBottom } from "@/components/presentation/templates/TemplateSlide";
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
/** ORB-VISUAL-1C: accepted atmospheric profiles on both edge orbs; placement remains lab-owned. */
const flowExperimentDecor = [{ orb: "greyLeft" as const, radius: 250 }, { orb: "magentaRight" as const, radius: 228 }].map((item) => isDecorOrb(item) && item.orb === "magentaRight"
  ? { ...item, radius: 228, props: orbAppearanceProfiles.magentaAtmosphere }
  : isDecorOrb(item) && item.orb === "greyLeft"
    ? { ...item, radius: 250, props: orbAppearanceProfiles.greyAtmosphere }
    : item);

const FlowExperiment: ComponentType = () => flow.kind === "flow-scenario" ? <FlowScenarioTemplate content={flow} decorItems={flowExperimentDecor} hideLeadConnector hideTailConnector /> : null;
const FlowBaseline: ComponentType = () => flow.kind === "flow-scenario" ? <FlowScenarioTemplate content={flow} hideLeadConnector hideTailConnector /> : null;
const structuredAnimatedMagentaDecor = [
  { orb: "greyLeft" as const, radius: 228, offsetY: 56, props: { ...orbAppearanceProfiles.magentaAtmosphere, skinStyle: "canonical-magenta" as const, accentColor: "#FF2FAE", primaryDotColor: "#FF2FAE", glowingStrokeIntensity: 0.2, autoRotateSpeed: 0.0012 } },
  { orb: "magentaRight" as const, radius: 228, offsetY: -170, props: { ...orbAppearanceProfiles.magentaAtmosphere, autoRotateSpeed: 0.0012 } },
];
const StructuredAnimatedMagenta: ComponentType = () => structured.kind === "structured-content-action" ? <StructuredActionTemplate content={structured} decorItems={structuredAnimatedMagentaDecor} /> : null;
const hubAnimatedDecor = [
  // Mirror the unchanged upper-right orb: 1080 - 60 - 440 = 580.
  { orb: "greyLeft" as const, radius: 228, viewport: { x: 0, y: 580, w: 440, h: 440 }, props: orbAppearanceProfiles.greyAtmosphere },
  { orb: "magentaRight" as const, radius: 228, viewport: { x: 1480, y: 60, w: 440, h: 440 }, props: orbAppearanceProfiles.magentaRim },
];
const HubAnimatedPlanets: ComponentType = () => hub.kind === "hub-ecosystem" ? <HubEcosystemTemplate content={hub} decorItems={hubAnimatedDecor} /> : null;
const staticEmbeddedPlanets = [
  { src: "/pdma2026-templates-lab/assets/slide-06/planet-left.png", x: -112, y: 275, w: 1000, h: 1000, fullPlane: true },
  { src: "/pdma2026-templates-lab/assets/slide-06/planet-right.png", x: 917, y: -48, w: 1253, h: 1253, fullPlane: true },
] as const;
const EmbeddedStaticPlanets: ComponentType = () => embedded.kind === "embedded-app" ? (
  <PdmaSlideCanvas>
    <div
      className="pdmat-slide pdmat-slide--embedded-app pdma-lab-embedded-static"
      data-template-kind="embedded-app"
      style={{ "--pdmat-title-bottom": `${shellTitleBottom(embedded.chrome.title)}px` } as CSSProperties}
    >
      <DecorativeLayer variant="embedded-dual-orbs" items={staticEmbeddedPlanets} />
      <div className="pdmat-stage">
        <section className="pdmat-template pdmat-embedded">
          <EmbeddedAppFrame label={embedded.frameLabel}><PdmaScenarioExercise /></EmbeddedAppFrame>
        </section>
      </div>
    </div>
  </PdmaSlideCanvas>
) : null;

const labSlides = [
  { label: "SLIDE 1 — BASELINE", entry: canonical("title"), component: canonical("title").component },
  { label: "SLIDE 2 — BASELINE", entry: canonical("end-card"), component: canonical("end-card").component },
  { label: "SLIDE 6 — BASELINE", entry: canonical("flow-scenario"), component: FlowBaseline },
  { label: "SLIDE 6 — APPROVED LIVE", entry: canonical("flow-scenario"), component: FlowExperiment },
  { label: "TEMPLATE 2/10 — END CARD — TEST", entry: templateManifest.find((item) => item.kind === "end-card")!, component: templateManifest.find((item) => item.kind === "end-card")!.component },
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
    : <PdmaSlideCanvas key={key}><Component /></PdmaSlideCanvas>);
  return <PdmaPresentationShell slides={slides} slideManifest={labManifest} navigation={pdma2026Content.navigation} />;
}
