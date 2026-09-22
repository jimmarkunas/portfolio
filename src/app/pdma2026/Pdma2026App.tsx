"use client";

import { pdma2026Content } from "@/content/pdma2026";
import { usePdma2026Slides } from "./hooks/usePdma2026Slides";
import { PdmaPresentationShell } from "./PdmaPresentationShell";

export default function Pdma2026App() {
  const { slides, slideManifest } = usePdma2026Slides({ content: pdma2026Content });
  return <PdmaPresentationShell slides={slides} slideManifest={slideManifest} navigation={pdma2026Content.navigation} />;
}
