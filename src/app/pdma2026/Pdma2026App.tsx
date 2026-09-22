"use client";

import { pdma2026Content } from "@/content/pdma2026";
import { PdmaPresentationShell } from "./PdmaPresentationShell";
import { buildPdma2026SlideManifest } from "./pdma2026SlideManifest";

export default function Pdma2026App() {
  const slideManifest = buildPdma2026SlideManifest(pdma2026Content);
  const slides = slideManifest.map(({ render }) => render());
  return <PdmaPresentationShell slides={slides} slideManifest={slideManifest} navigation={pdma2026Content.navigation} />;
}
