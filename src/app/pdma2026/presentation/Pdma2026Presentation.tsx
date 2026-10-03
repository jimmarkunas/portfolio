"use client";

import { pdma2026Content } from "@/content/pdma2026";
import { PdmaPresentationShell } from "../PdmaPresentationShell";
import { assertPdma2026ManifestParity, pdma2026Manifest } from "./pdma2026Manifest";

/** The production PDMA 2026 deck, rendered through the shared presentation shell. */
export default function Pdma2026Presentation() {
  const slides = pdma2026Manifest.map(({ component: Component, key }) => <Component key={key} />);
  assertPdma2026ManifestParity(pdma2026Manifest, slides);
  return <PdmaPresentationShell slides={slides} slideManifest={[...pdma2026Manifest]} navigation={pdma2026Content.navigation} />;
}
