import type { ReactNode } from "react";
import type { Pdma2026Content, Pdma2026SlideKey } from "@/content/pdma2026";
import { titleConfig, type PdmaTitleConfig } from "./pdmaTitleConfig";
import { Slide02 } from "./components/Slide02";
import { Slide01, Slide03, Slide04, Slide05 } from "./components/Batch01Slides";
import { Slide06, Slide07, Slide09, Slide10 } from "./components/CanonicalSlides06to10";
import { Slide08 } from "./components/CanonicalSlide08";
import { Slide11, Slide12, Slide13, Slide14, Slide15 } from "./components/CanonicalSlides11to15";

export type Pdma2026SlideManifestEntry = {
  key: Pdma2026SlideKey;
  id: string;
  tocTitle: string;
  footerLabel: string;
  title: PdmaTitleConfig;
  render: () => ReactNode;
};

const footerLabels = [
  "HUMAN JUDGMENT COMPOUNDS",
  "THE NEW PM OPERATING SYSTEM",
  "AUTHORITY IS A PRODUCT DECISION",
  "BUILD THE RIGHT OPERATING MODEL",
] as const;

const renderers: Record<Pdma2026SlideKey, () => ReactNode> = {
  "slide-01": () => <Slide01 />,
  "slide-02": () => <Slide02 />,
  "slide-03": () => <Slide03 />,
  "slide-04": () => <Slide04 />,
  "slide-05": () => <Slide05 />,
  "slide-06": () => <Slide06 />,
  "slide-07": () => <Slide07 />,
  "slide-08": () => <Slide08 />,
  "slide-09": () => <Slide09 />,
  "slide-10": () => <Slide10 />,
  "slide-11": () => <Slide11 />,
  "slide-12": () => <Slide12 />,
  "slide-13": () => <Slide13 />,
  "slide-14": () => <Slide14 />,
  "slide-15": () => <Slide15 />,
};

function footerLabelFor(index: number) {
  return footerLabels[Math.min(index, footerLabels.length - 1)];
}

export function buildPdma2026SlideManifest(content: Pdma2026Content): Pdma2026SlideManifestEntry[] {
  return content.slideOrder.map((key, index) => ({
    key,
    id: content.slides[key].id,
    tocTitle: content.slides[key].title,
    footerLabel: footerLabelFor(index),
    title: titleConfig[index + 1],
    render: renderers[key],
  }));
}
