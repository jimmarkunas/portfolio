import type { Pdma2026Content, Pdma2026SlideKey } from "@/content/pdma2026";
export type Pdma2026SlideRegistryEntry = { key: Pdma2026SlideKey; id: string; title: string };
export function buildPdma2026SlideRegistry(content: Pdma2026Content): Pdma2026SlideRegistryEntry[] { return content.slideOrder.map((key) => ({ ...content.slides[key], key })); }
