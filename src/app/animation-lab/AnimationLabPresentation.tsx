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

const slideManifest: readonly PresentationSlideManifestEntry[] = [{
  key: "animation-globe-01",
  id: "animation-globe-01",
  tocTitle: "Motion Globe — Original 1",
  headerLabels: ["MOTION", "COMPOSITION", "SYSTEM"],
  footerLabel: "GLOBE COMPOSER · ORIGINAL 1",
  title: { white: "", size: 0 },
  assets: ["/pdma2026/slide-01/canonical-asterisk.svg"],
}];

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
  const slides = [
    <PresentationSlideCanvas key="animation-globe-01">
      <section className="animation-lab-slide" aria-label="Globe Composer — Original 1">
        <div className="animation-lab-identity">
          <span>ANIMATION LAB</span>
          <span>MOTION GLOBE · ORIGINAL 1</span>
        </div>
        <div className="animation-lab-globe">
          <MotionGlobe recipe={originalGlobeRecipes["original-1"]} />
        </div>
      </section>
    </PresentationSlideCanvas>,
  ];

  return <PresentationShell
    slides={slides}
    slideManifest={slideManifest}
    navigation={navigation}
    brandLabel="ANIMATION LAB"
    brandAsset="/pdma2026/slide-01/canonical-asterisk.svg"
    tocDialogId="animation-lab-slide-toc"
  />;
}
