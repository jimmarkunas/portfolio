import type { ReactNode } from "react";
import type { Pdma2026Content } from "@/content/pdma2026";
import { buildPdmaConfig, pdmaConfig } from "./pdma.config";

export type {
  Pdma2026SlideComponent,
  Pdma2026SlideDefinition as Pdma2026SlideManifestEntry,
  Pdma2026SlideKey,
  PdmaHeaderLabels,
  PdmaTitleConfig,
} from "./pdma.config";
import type { Pdma2026SlideDefinition } from "./pdma.config";
type Pdma2026SlideManifestEntry = Pdma2026SlideDefinition;

export function buildPdma2026SlideManifest(_content: Pdma2026Content): Pdma2026SlideManifestEntry[] {
  return buildPdmaConfig(_content).slides.map((slide) => ({ ...slide }));
}

export function assertPdma2026ManifestParity(manifest: readonly Pdma2026SlideManifestEntry[], renderedSlides: readonly ReactNode[]) {
  if (manifest.length !== pdmaConfig.slides.length || renderedSlides.length !== manifest.length) throw new Error(`PDMA manifest/render parity failed: ${manifest.length} manifest entries, ${renderedSlides.length} rendered slides`);
  if (new Set(manifest.map(({ key }) => key)).size !== manifest.length) throw new Error("PDMA manifest/render parity failed: duplicate slide key");
  if (new Set(manifest.map(({ id }) => id)).size !== manifest.length) throw new Error("PDMA manifest/render parity failed: duplicate slide id");
  if (manifest.some(({ assets }) => !assets)) throw new Error("PDMA manifest/render parity failed: missing asset declaration");
  if (manifest.some(({ headerLabels }) => headerLabels.length !== 3 || headerLabels.some((label) => !label.trim()))) throw new Error("PDMA manifest/render parity failed: every slide requires exactly three non-empty header labels");
  if (manifest.some(({ footerLabel }) => !footerLabel.trim())) throw new Error("PDMA manifest/render parity failed: every slide requires a non-empty footer label");
}
