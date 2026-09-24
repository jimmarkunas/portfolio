"use client";

import type { ComponentType } from "react";
import { PdmaPresentationShell } from "@/app/pdma2026/PdmaPresentationShell";
import type { PdmaSlideKey } from "@/app/pdma2026/presentation/presentationTypes";
import { pdma2026Content } from "@/content/pdma2026";
import { decorativeVariants, isDecorOrb } from "../pdma2026-templates/components/DecorativeLayer";
import { FlowScenarioTemplate } from "../pdma2026-templates/components/templates/FlowScenarioTemplate";
import { TitleTemplate } from "../pdma2026-templates/components/templates/TitleTemplate";
import { templateContent } from "../pdma2026-templates/templateContent";
import { templateManifest, type TemplateManifestEntry } from "../pdma2026-templates/templateManifest";

/*
 * Temporary A/B lab: gallery Slide 1 (Title) and Slide 6 (Flow / Scenario), each as the canonical
 * gallery entry (baseline) and as an experiment copy. Experiments render the same template
 * component + content; only their decorItems may diverge. They start as the exact current variant.
 */
const title = templateContent.find((content) => content.kind === "title")!;
const flow = templateContent.find((content) => content.kind === "flow-scenario")!;
const canonical = (kind: TemplateManifestEntry["kind"]) => templateManifest.find((entry) => entry.kind === kind)!;

const TitleExperiment: ComponentType = () => title.kind === "title" ? <TitleTemplate content={title} decorItems={decorativeVariants[title.decorativeVariant]} /> : null;
/** ORB-VISUAL-1: hot-limb colors + stronger solar flare on the right magenta orb only; grey orb untouched. */
const flowExperimentDecor = decorativeVariants[flow.decorativeVariant].map((item) => isDecorOrb(item) && item.orb === "magentaRight"
  ? { ...item, props: { outerGlowColor: "#FF2FAE", midGlowColor: "#FF65C7", hotCoreColor: "#FFF7FC", solarFlareIntensity: 1.35 } }
  : item);
const FlowExperiment: ComponentType = () => flow.kind === "flow-scenario" ? <FlowScenarioTemplate content={flow} decorItems={flowExperimentDecor} /> : null;

const labSlides = [
  { label: "SLIDE 1 — BASELINE", entry: canonical("title"), component: canonical("title").component },
  { label: "SLIDE 1 — EXPERIMENT", entry: canonical("title"), component: TitleExperiment },
  { label: "SLIDE 6 — BASELINE", entry: canonical("flow-scenario"), component: canonical("flow-scenario").component },
  { label: "SLIDE 6 — EXPERIMENT", entry: canonical("flow-scenario"), component: FlowExperiment },
];

const labManifest = labSlides.map(({ label, entry, component }, index) => {
  const key = `slide-${String(index + 1).padStart(2, "0")}` as PdmaSlideKey;
  return { ...entry, key, id: key, tocTitle: label, footerLabel: label, component };
});

export default function TemplateLabPresentation() {
  const slides = labManifest.map(({ component: Component, key }) => <Component key={key} />);
  return <PdmaPresentationShell slides={slides} slideManifest={labManifest} navigation={pdma2026Content.navigation} />;
}
