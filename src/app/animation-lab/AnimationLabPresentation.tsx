"use client";

import dynamic from "next/dynamic";
import { PresentationShell, PresentationSlideCanvas } from "@/components/presentation/PresentationShell";
import type { PresentationSlideManifestEntry } from "@/components/presentation/presentationTypes";
import type { PresentationNavigationCopy } from "@/lib/presentation";
import { originalGlobeRecipes } from "@/components/presentation/animations/globe/globePresets";

const MotionGlobe = dynamic(
  () => import("@/components/presentation/animations/globe/MotionGlobe").then(({ MotionGlobe: Globe }) => Globe),
  { ssr: false, loading: () => <div className="animation-lab-globe-loading" aria-label="Loading globe" /> },
);

const originals = ["original-1", "original-2", "original-3", "original-4"] as const;

const slideManifest: readonly PresentationSlideManifestEntry[] = originals.map((original, index) => {
  const number = index + 1;
  const slideId = `animation-globe-0${number}`;
  return {
    key: slideId,
    id: slideId,
    tocTitle: `Motion Globe — Original ${number}`,
    headerLabels: ["MOTION", "COMPOSITION", "SYSTEM"],
    footerLabel: `GLOBE SOURCE · ORIGINAL ${number}`,
    title: { white: "", size: 0 },
    assets: ["/pdma2026/slide-01/canonical-asterisk.svg"],
  };
});

const navigation: PresentationNavigationCopy = {
  previousAriaLabel: "Previous slide",
  nextAriaLabel: "Next slide",
  openTocAriaLabel: "Open slide table of contents",
  toggleFullscreenAriaLabel: "Toggle fullscreen",
  tocDialogAriaLabel: "Animation Lab slide list",
  tocTitle: "Animation Lab",
  closeButtonLabel: "Close",
};

export default function AnimationLabPresentation() {
  const slides = originals.map((original, index) => {
    const number = index + 1;
    const slideId = `animation-globe-0${number}`;
    return <PresentationSlideCanvas key={slideId}>
      <section className="animation-lab-slide" aria-label={`Motion Globe — Original ${number}`}>
        <div className="animation-lab-identity">
          <span>ANIMATION LAB</span>
          <span>MOTION GLOBE · ORIGINAL {number}</span>
        </div>
        <div className="animation-lab-globe">
          <MotionGlobe recipe={originalGlobeRecipes[original]} />
        </div>
      </section>
    </PresentationSlideCanvas>;
  });

  return <PresentationShell
    slides={slides}
    slideManifest={slideManifest}
    navigation={navigation}
    brandLabel="ANIMATION LAB"
    brandAsset="/pdma2026/slide-01/canonical-asterisk.svg"
    tocDialogId="animation-lab-slide-toc"
  />;
}
