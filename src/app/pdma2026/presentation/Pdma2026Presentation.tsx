"use client";

import { pdma2026Spec } from "./pdma2026Content";
import { PdmaPresentationShell } from "../PdmaPresentationShell";
import { assertPdma2026Spec, renderPdma2026Slide } from "./pdma2026Registry";
import { pdma2026Content } from "@/content/pdma2026";

/** PDMA is the first deck rendered from a serializable presentation specification. */
export default function Pdma2026Presentation() {
  assertPdma2026Spec();
  return <PdmaPresentationShell spec={pdma2026Spec} renderSpecSlide={renderPdma2026Slide} navigation={pdma2026Content.navigation} />;
}
