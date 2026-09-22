import type { PresentationNavigationCopy } from "@/lib/presentation";
export const pdma2026SlideOrder = Array.from({ length: 15 }, (_, index) => `slide-${String(index + 1).padStart(2, "0")}`) as readonly string[];
export type Pdma2026SlideKey = (typeof pdma2026SlideOrder)[number];
export type Pdma2026Content = { navigation: PresentationNavigationCopy; slideOrder: readonly Pdma2026SlideKey[]; slides: Record<Pdma2026SlideKey, { id: string; title: string }> };
