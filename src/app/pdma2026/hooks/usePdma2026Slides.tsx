import { useMemo } from "react";
import type { Pdma2026Content } from "@/content/pdma2026";
import { buildPdma2026SlideManifest } from "../pdma2026SlideManifest";

export function usePdma2026Slides({ content }: { content: Pdma2026Content }) {
  const manifest = useMemo(() => buildPdma2026SlideManifest(content), [content]);
  const slides = useMemo(() => manifest.map(({ render }) => render()), [manifest]);

  return {
    slides,
    slideManifest: manifest,
  };
}
