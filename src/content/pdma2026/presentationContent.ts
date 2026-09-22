import type { Pdma2026Content } from "./types";
import { pdma2026SlideOrder } from "./types";
export const pdma2026Content: Pdma2026Content = {
  navigation: { previousAriaLabel: "Previous slide", nextAriaLabel: "Next slide", openTocAriaLabel: "Open slide table of contents", toggleFullscreenAriaLabel: "Toggle fullscreen", tocDialogAriaLabel: "PDMA 2026 slide table of contents", tocTitle: "PDMA 2026", closeButtonLabel: "Close slide table of contents" },
  slideOrder: pdma2026SlideOrder,
  slides: Object.fromEntries(pdma2026SlideOrder.map((key, index) => [key, { id: key, title: index === 1 ? "WHAT SHIFTS. WHAT STAYS." : `PDMA 2026 — Slide ${index + 1}` }])) as Pdma2026Content["slides"],
};
