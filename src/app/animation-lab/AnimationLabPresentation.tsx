"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { PresentationShell, PresentationSlideCanvas } from "@/components/presentation/PresentationShell";
import type { PresentationSlideManifestEntry } from "@/components/presentation/presentationTypes";
import type { PresentationNavigationCopy } from "@/lib/presentation";
import { originalGlobeRecipes } from "@/components/presentation/animations/globe/globePresets";
import type { GlobeAnimationRecipe, GlobePresetId, LocationTagPresetId, OrbitPresetId, ParticleFieldEffect } from "@/components/presentation/animations/globe/globeTypes";
import { orbAppearanceProfiles, orbPresets } from "@/components/pbds/orb/orbPresets";

const MotionGlobe = dynamic(
  () => import("@/components/presentation/animations/globe/MotionGlobe").then(({ MotionGlobe: Globe }) => Globe),
  { ssr: false, loading: () => <div className="animation-lab-globe-loading" aria-label="Loading globe" /> },
);

const PBDSKineticSphere = dynamic(
  () => import("@/components/pbds/orb/PBDSKineticSphere").then(({ PBDSKineticSphere: Sphere }) => Sphere),
  { ssr: false },
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

const composerManifest: PresentationSlideManifestEntry = {
  key: "animation-globe-composer",
  id: "animation-globe-composer",
  tocTitle: "Globe Composer",
  headerLabels: ["MOTION", "COMPOSITION", "SYSTEM"],
  footerLabel: "GLOBE COMPOSER · INTERACTIVE MIXER",
  title: { white: "", size: 0 },
  assets: ["/pdma2026/slide-01/canonical-asterisk.svg"],
};

const navigation: PresentationNavigationCopy = {
  previousAriaLabel: "Previous slide",
  nextAriaLabel: "Next slide",
  openTocAriaLabel: "Open slide table of contents",
  toggleFullscreenAriaLabel: "Toggle fullscreen",
  tocDialogAriaLabel: "Animation Lab slide list",
  tocTitle: "Animation Lab",
  closeButtonLabel: "Close",
};

const globeChoices: readonly GlobePresetId[] = ["globe-1", "globe-2", "globe-3", "globe-4"];
const tagChoices: readonly LocationTagPresetId[] = ["tag-1", "tag-2", "tag-3", "tag-4"];
const orbitChoices: readonly OrbitPresetId[] = ["orbit-1", "orbit-2", "orbit-3", "orbit-4"];
const fieldChoices: readonly ParticleFieldEffect[] = ["off", "pbds-lab", "lychee"];

function ChoiceGroup<T extends string>({
  label,
  choices,
  selected,
  onSelect,
  names,
}: {
  label: string;
  choices: readonly T[];
  selected: T | null;
  onSelect: (choice: T) => void;
  names: (choice: T) => string;
}) {
  return <div className="animation-lab-composer-group" role="group" aria-label={label}>
    <span className="animation-lab-composer-group-label">{label}</span>
    <div className="animation-lab-composer-options">
      {choices.map((choice, index) => <button
        key={choice}
        type="button"
        className={`animation-lab-composer-option${selected === choice ? " is-active" : ""}`}
        aria-label={names(choice)}
        aria-pressed={selected === choice}
        onClick={() => onSelect(choice)}
      >{label === "RADIOACTIVE FIELD" ? names(choice) : index + 1}</button>)}
    </div>
  </div>;
}

function GlobeComposerSlide() {
  const [recipe, setRecipe] = useState<GlobeAnimationRecipe>(originalGlobeRecipes["original-1"]);
  const activeOriginal = originals.find((original) => {
    const source = originalGlobeRecipes[original];
    return source.globe === recipe.globe
      && source.locationTag === recipe.locationTag
      && source.orbit === recipe.orbit
      && source.particleField === recipe.particleField;
  });
  const selectOriginal = (number: 1 | 2 | 3 | 4) => {
    setRecipe(originalGlobeRecipes[`original-${number}`]);
  };

  return <PresentationSlideCanvas key="animation-globe-composer">
    <section className="animation-lab-slide animation-lab-composer" aria-label="Globe Composer">
      <div className="animation-lab-identity">
        <span>ANIMATION LAB</span>
        <span>GLOBE COMPOSER</span>
      </div>
      <aside className="animation-lab-composer-panel" aria-label="Globe composition controls">
        <ChoiceGroup
          label="ORIGINAL"
          choices={[1, 2, 3, 4] as const}
          selected={activeOriginal ? Number(activeOriginal.slice(-1)) as 1 | 2 | 3 | 4 : null}
          onSelect={selectOriginal}
          names={(choice) => `Original ${choice}`}
        />
        <ChoiceGroup
          label="GLOBE"
          choices={globeChoices}
          selected={recipe.globe}
          onSelect={(globe) => setRecipe((current) => ({ ...current, globe }))}
          names={(choice) => `Globe ${choice.slice(-1)}`}
        />
        <ChoiceGroup
          label="LOCATION TAGS"
          choices={tagChoices}
          selected={recipe.locationTag}
          onSelect={(locationTag) => setRecipe((current) => ({ ...current, locationTag }))}
          names={(choice) => `Location tags ${choice.slice(-1)}`}
        />
        <ChoiceGroup
          label="ORBIT"
          choices={orbitChoices}
          selected={recipe.orbit}
          onSelect={(orbit) => setRecipe((current) => ({ ...current, orbit }))}
          names={(choice) => `Orbit ${choice.slice(-1)}`}
        />
        <ChoiceGroup
          label="RADIOACTIVE FIELD"
          choices={fieldChoices}
          selected={recipe.particleField}
          onSelect={(particleField) => setRecipe((current) => ({ ...current, particleField }))}
          names={(choice) => choice === "off" ? "Off" : choice === "pbds-lab" ? "PBDS Lab" : "Lychee"}
        />
      </aside>
      <div className="animation-lab-composer-preview">
        {recipe.particleField === "pbds-lab" && <div className="animation-lab-composer-field" aria-hidden="true">
          <PBDSKineticSphere
            {...orbPresets.magentaRight}
            {...orbAppearanceProfiles.magentaAtmosphere}
            radius={330}
            centerOffsetX={0}
            centerOffsetY={70}
            cropPosition="center"
            bodyOpacity={0}
            stippleDensity={0}
            atmosphereWidth={9}
            atmosphereIntensity={0.3}
            innerGlowIntensity={0.04}
            glowingStrokeIntensity={0}
            interactive={false}
          />
        </div>}
        <div className="animation-lab-composer-globe">
          <MotionGlobe recipe={recipe} />
        </div>
      </div>
    </section>
  </PresentationSlideCanvas>;
}

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
  const allSlides = [...slides, <GlobeComposerSlide key="animation-globe-composer" />];
  const allManifest = [...slideManifest, composerManifest];

  return <PresentationShell
    slides={allSlides}
    slideManifest={allManifest}
    navigation={navigation}
    brandLabel="ANIMATION LAB"
    brandAsset="/pdma2026/slide-01/canonical-asterisk.svg"
    tocDialogId="animation-lab-slide-toc"
  />;
}
