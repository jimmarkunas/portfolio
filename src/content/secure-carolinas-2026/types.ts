import type { PresentationNavigationCopy } from "@/lib/presentation";

export const secureCarolinas2026SlideOrder = [
  "title",
  "copilots",
  "agents",
  "attackSurface",
  "question",
  "authority",
  "guardrails",
  "evidence",
  "network",
  "transfer",
  "success",
  "meetAgent",
  "decisionBoard",
  "readinessStatus",
  "productionDecision",
  "readinessCheck",
  "closingCta",
] as const;

export type SecureCarolinas2026SlideKey = (typeof secureCarolinas2026SlideOrder)[number];
export type SecureCarolinas2026ActId = "ACT_I" | "ACT_II" | "ACT_III" | "ACT_IV";

export type SecureCarolinas2026SlideMeta = {
  id: string;
  title: string;
  subtitle?: string;
  act: SecureCarolinas2026ActId;
  actLabel: string;
};

export type SecureCarolinas2026Content = {
  navigation: PresentationNavigationCopy;
  slideOrder: readonly SecureCarolinas2026SlideKey[];
  slides: Record<SecureCarolinas2026SlideKey, SecureCarolinas2026SlideMeta>;
};
