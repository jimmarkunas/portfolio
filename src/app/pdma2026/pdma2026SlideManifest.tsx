import type { ReactNode } from "react";
import type { ComponentType } from "react";
import type { Pdma2026Content } from "@/content/pdma2026";
import { buildPdmaConfig, pdmaConfig } from "./pdma.config";
import { Slide02 } from "./components/Slide02";
import { Slide01 } from "./components/slides/Slide01";
import { Slide03 } from "./components/slides/Slide03";
import { Slide04 } from "./components/slides/Slide04";
import { Slide05 } from "./components/slides/Slide05";
import { Slide06 } from "./components/CanonicalSlide06Exact";
import { Slide07 } from "./components/slides/Slide07";
import { Slide08 } from "./components/CanonicalSlide08";
import { Slide09 } from "./components/slides/Slide09";
import { Slide10 } from "./components/slides/Slide10";
import { Slide11 } from "./components/slides/Slide11";
import { Slide12 } from "./components/slides/Slide12";
import { Slide13 } from "./components/slides/Slide13";
import { Slide14 } from "./components/slides/Slide14";
import { Slide15 } from "./components/slides/Slide15";

export type {
  Pdma2026SlideDefinition,
  Pdma2026SlideComponent,
  Pdma2026SlideKey,
  PdmaHeaderLabels,
  PdmaTitleConfig,
} from "./pdma.config";
import type { Pdma2026SlideDefinition } from "./pdma.config";
export type Pdma2026SlideManifestEntry = Omit<Pdma2026SlideDefinition, "component"> & { component: ComponentType };
const components = { Slide01, Slide02, Slide03, Slide04, Slide05, Slide06, Slide07, Slide08, Slide09, Slide10, Slide11, Slide12, Slide13, Slide14, Slide15 };

export function buildPdma2026SlideManifest(_content: Pdma2026Content): Pdma2026SlideManifestEntry[] {
  return buildPdmaConfig(_content).slides.map((slide) => ({ ...slide, component: components[`Slide${slide.key.slice(-2)}` as keyof typeof components] }));
}

export function assertPdma2026ManifestParity(manifest: readonly Pdma2026SlideManifestEntry[], renderedSlides: readonly ReactNode[]) {
  if (manifest.length !== pdmaConfig.slides.length || renderedSlides.length !== manifest.length) throw new Error(`PDMA manifest/render parity failed: ${manifest.length} manifest entries, ${renderedSlides.length} rendered slides`);
  if (new Set(manifest.map(({ key }) => key)).size !== manifest.length) throw new Error("PDMA manifest/render parity failed: duplicate slide key");
  if (new Set(manifest.map(({ id }) => id)).size !== manifest.length) throw new Error("PDMA manifest/render parity failed: duplicate slide id");
  if (manifest.some(({ assets }) => !assets)) throw new Error("PDMA manifest/render parity failed: missing asset declaration");
  if (manifest.some(({ headerLabels }) => headerLabels.length !== 3 || headerLabels.some((label) => !label.trim()))) throw new Error("PDMA manifest/render parity failed: every slide requires exactly three non-empty header labels");
  if (manifest.some(({ footerLabel }) => !footerLabel.trim())) throw new Error("PDMA manifest/render parity failed: every slide requires a non-empty footer label");
}
