import type { PresentationNavigationCopy } from "@/lib/presentation";

export const usaiiSlideOrder = [
  "title", "agentDefinition", "operatingModel", "authorityLadder", "evidenceAuditability",
  "enterpriseIntegration", "transferEscalation", "valueMetrics", "accountability", "productionGate",
] as const;

export type UsaiiSlideKey = (typeof usaiiSlideOrder)[number];
export type UsaiiSlideCopy = { id: string; title: string; subtitle?: string; image: string };
export type UsaiiSlides = Record<UsaiiSlideKey, UsaiiSlideCopy>;
export type UsaiiContent = { navigation: PresentationNavigationCopy; slideOrder: readonly UsaiiSlideKey[]; slides: UsaiiSlides };
