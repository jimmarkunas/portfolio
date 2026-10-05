"use client";

import dynamic from "next/dynamic";
import { useState, type ReactNode } from "react";
import { PresentationShell, PresentationSlideCanvas } from "@/components/presentation/PresentationShell";
import type { PresentationSlideManifestEntry } from "@/components/presentation/presentationTypes";
import type { PresentationNavigationCopy } from "@/lib/presentation";
import { originalGlobeRecipes } from "@/components/presentation/animations/globe/globePresets";
import type { CityUiMode, GlobeAnimationRecipe, GlobeColorId, GlobePresetId, GlobeSurfaceMode, LocationTagPresetId, OrbitPresetId, ParticleFieldEffect } from "@/components/presentation/animations/globe/globeTypes";

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
const surfaceChoices: readonly GlobeSurfaceMode[] = ["terrestrial", "dot-orb"];
const cityUiChoices: readonly CityUiMode[] = ["show", "hide"];
const colorChoices: readonly GlobeColorId[] = ["source", "magenta", "template-magenta", "white", "mid", "line"];
const shadingChoices = [0, 0.25, 0.5, 0.75, 1] as const;
const hoverChoices = ["source", "off", "repel", "attract", "swirl", "sonar", "halo", "wake"] as const;
const colorSwatches: Partial<Record<GlobeColorId, string>> = {
  magenta: "#FF2FAE",
  "template-magenta": "#F10F8A",
  white: "#FFFFFF",
  mid: "#7A7A7A",
  line: "#E6E6E6",
};
type ComposerPage = "presets" | "compose" | "style" | "interact";

function RangeControl({ label, min, max, step, value, displayValue, onChange }: {
  label: string; min: number; max: number; step: number; value: number; displayValue: string; onChange: (value: number) => void;
}) {
  return <label className="animation-lab-range">
    <span className="animation-lab-range-heading"><span>{label}</span><span aria-hidden="true">{displayValue}</span></span>
    <input aria-label={label} type="range" min={min} max={max} step={step} value={value} onChange={(event) => onChange(Number(event.currentTarget.value))} />
  </label>;
}

function ChoiceGroup<T extends string | number | boolean>({
  label,
  choices,
  selected,
  onSelect,
  names,
  buttonContent,
}: {
  label: string;
  choices: readonly T[];
  selected: T | null;
  onSelect: (choice: T) => void;
  names: (choice: T) => string;
  buttonContent?: (choice: T, index: number) => ReactNode;
}) {
  return <div className="animation-lab-composer-group" role="group" aria-label={label}>
    <span className="animation-lab-composer-group-label">{label}</span>
    <div className="animation-lab-composer-options">
      {choices.map((choice, index) => <button
        key={`${typeof choice}:${String(choice)}`}
        type="button"
        className={`animation-lab-composer-option${selected === choice ? " is-active" : ""}`}
        aria-label={names(choice)}
        aria-pressed={selected === choice}
        onClick={() => onSelect(choice)}
      >{buttonContent ? buttonContent(choice, index) : names(choice)}</button>)}
    </div>
  </div>;
}

function GlobeComposerSlide() {
  const [recipe, setRecipe] = useState<GlobeAnimationRecipe>(originalGlobeRecipes["original-1"]);
  const [page, setPage] = useState<ComposerPage>("compose");
  const [interactPage, setInteractPage] = useState<"hover" | "drag">("hover");
  const activeOriginal = originals.find((original) => {
    const source = originalGlobeRecipes[original];
    return source.globe === recipe.globe
      && source.locationTag === recipe.locationTag
      && source.orbit === recipe.orbit
      && source.particleField === recipe.particleField
      && source.surface === recipe.surface
      && source.cityUi === recipe.cityUi
      && source.globeColor === recipe.globeColor
      && source.orbitColor === recipe.orbitColor
      && source.surfaceShading === recipe.surfaceShading
      && source.dotDensity === recipe.dotDensity
      && source.hoverPhysics === recipe.hoverPhysics
      && source.hoverStrength === recipe.hoverStrength
      && source.dragEnabled === recipe.dragEnabled
      && source.dragSensitivity === recipe.dragSensitivity
      && source.dragInertia === recipe.dragInertia
      && source.dragTilt === recipe.dragTilt;
  });
  const selectOriginal = (number: 1 | 2 | 3 | 4) => {
    setRecipe(originalGlobeRecipes[`original-${number}`]);
  };
  const colorButton = (choice: GlobeColorId) => <span className="animation-lab-composer-color-choice">
    <span>{choice === "template-magenta" ? "TEMPLATE MAGENTA" : choice.toUpperCase()}</span>
    <i className={choice === "source" ? "is-source" : undefined} style={choice === "source" ? undefined : { backgroundColor: colorSwatches[choice] }} aria-hidden="true" />
  </span>;
  const colorName = (choice: GlobeColorId, axis: "globe" | "orbit") => `${choice === "template-magenta" ? "TEMPLATE MAGENTA" : choice.toUpperCase()} ${axis} color`;

  return <PresentationSlideCanvas key="animation-globe-composer">
    <section className="animation-lab-slide animation-lab-composer" aria-label="Globe Composer">
      <div className="animation-lab-identity">
        <span>ANIMATION LAB</span>
        <span>GLOBE COMPOSER</span>
      </div>
      <aside className="animation-lab-composer-panel" aria-label="Globe composition controls">
        <nav className="animation-lab-composer-pages" aria-label="Composer control pages">
          {(["presets", "compose", "style", "interact"] as const).map((composerPage) => <button
            key={composerPage}
            type="button"
            className={`animation-lab-composer-page${page === composerPage ? " is-active" : ""}`}
            aria-pressed={page === composerPage}
            onClick={() => setPage(composerPage)}
          >{composerPage.toUpperCase()}</button>)}
        </nav>
        {page === "presets" && <div className="animation-lab-composer-page-content is-presets">
          <ChoiceGroup
            label="ORIGINAL"
            choices={[1, 2, 3, 4] as const}
            selected={activeOriginal ? Number(activeOriginal.slice(-1)) as 1 | 2 | 3 | 4 : null}
            onSelect={selectOriginal}
            names={(choice) => `Original ${choice}`}
            buttonContent={(choice) => String(choice)}
          />
        </div>}
        {page === "compose" && <div className="animation-lab-composer-page-content is-compose">
          <ChoiceGroup label="GLOBE" choices={globeChoices} selected={recipe.globe} onSelect={(globe) => setRecipe((current) => ({ ...current, globe }))} names={(choice) => `Globe ${choice.slice(-1)}`} buttonContent={(_, index) => String(index + 1)} />
          <ChoiceGroup label="LOCATION TAGS" choices={tagChoices} selected={recipe.locationTag} onSelect={(locationTag) => setRecipe((current) => ({ ...current, locationTag }))} names={(choice) => `Location tags ${choice.slice(-1)}`} buttonContent={(_, index) => String(index + 1)} />
          <ChoiceGroup label="ORBIT" choices={orbitChoices} selected={recipe.orbit} onSelect={(orbit) => setRecipe((current) => ({ ...current, orbit }))} names={(choice) => `Orbit ${choice.slice(-1)}`} buttonContent={(_, index) => String(index + 1)} />
          <ChoiceGroup label="SURFACE" choices={surfaceChoices} selected={recipe.surface} onSelect={(surface) => setRecipe((current) => ({ ...current, surface }))} names={(choice) => choice === "dot-orb" ? "Dot orb" : "Terrestrial"} buttonContent={(choice) => choice === "dot-orb" ? "DOT ORB" : "TERRESTRIAL"} />
          <ChoiceGroup label="CITY UI" choices={cityUiChoices} selected={recipe.cityUi} onSelect={(cityUi) => setRecipe((current) => ({ ...current, cityUi }))} names={(choice) => choice.toUpperCase()} buttonContent={(choice) => choice.toUpperCase()} />
          <RangeControl label="DOT DENSITY" min={0.25} max={2} step={0.05} value={recipe.dotDensity} displayValue={`${Math.round(recipe.dotDensity * 100)}%`} onChange={(dotDensity) => setRecipe((current) => ({ ...current, dotDensity }))} />
        </div>}
        {page === "style" && <div className="animation-lab-composer-page-content is-style">
          <ChoiceGroup label="GLOBE COLOR" choices={colorChoices} selected={recipe.globeColor} onSelect={(globeColor) => setRecipe((current) => ({ ...current, globeColor }))} names={(choice) => colorName(choice, "globe")} buttonContent={colorButton} />
          <ChoiceGroup label="SHADING" choices={shadingChoices} selected={recipe.surfaceShading} onSelect={(surfaceShading) => setRecipe((current) => ({ ...current, surfaceShading }))} names={(choice) => choice === 0 ? "OFF" : `${Math.round(choice * 100)}%`} buttonContent={(choice) => choice === 0 ? "OFF" : `${Math.round(choice * 100)}%`} />
          <ChoiceGroup label="ORBIT COLOR" choices={colorChoices} selected={recipe.orbitColor} onSelect={(orbitColor) => setRecipe((current) => ({ ...current, orbitColor }))} names={(choice) => colorName(choice, "orbit")} buttonContent={colorButton} />
          <ChoiceGroup label="RADIOACTIVE FIELD" choices={fieldChoices} selected={recipe.particleField} onSelect={(particleField) => setRecipe((current) => ({ ...current, particleField }))} names={(choice) => choice === "off" ? "Off" : choice === "pbds-lab" ? "PBDS Lab" : "Lychee"} buttonContent={(choice) => choice === "pbds-lab" ? "PBDS LAB" : choice.toUpperCase()} />
        </div>}
        {page === "interact" && <div className="animation-lab-composer-page-content is-interact">
          <nav className="animation-lab-composer-subpages" aria-label="Interaction controls">
            {(["hover", "drag"] as const).map((subpage) => <button key={subpage} type="button" className={`animation-lab-composer-subpage${interactPage === subpage ? " is-active" : ""}`} aria-pressed={interactPage === subpage} onClick={() => setInteractPage(subpage)}>{subpage.toUpperCase()}</button>)}
          </nav>
          {interactPage === "hover" ? <>
            <ChoiceGroup label="HOVER PHYSICS" choices={hoverChoices} selected={recipe.hoverPhysics} onSelect={(hoverPhysics) => setRecipe((current) => ({ ...current, hoverPhysics }))} names={(choice) => choice.toUpperCase()} buttonContent={(choice) => choice.toUpperCase()} />
            <RangeControl label="HOVER STRENGTH" min={0.25} max={2} step={0.05} value={recipe.hoverStrength} displayValue={`${recipe.hoverStrength.toFixed(2)}×`} onChange={(hoverStrength) => setRecipe((current) => ({ ...current, hoverStrength }))} />
          </> : <>
            <ChoiceGroup label="DRAG" choices={[true, false]} selected={recipe.dragEnabled} onSelect={(dragEnabled) => setRecipe((current) => ({ ...current, dragEnabled }))} names={(choice) => choice ? "Drag on" : "Drag off"} buttonContent={(choice) => choice ? "ON" : "OFF"} />
            <ChoiceGroup label="DRAG TILT" choices={["source", "on", "off"] as const} selected={recipe.dragTilt} onSelect={(dragTilt) => setRecipe((current) => ({ ...current, dragTilt }))} names={(choice) => `Drag tilt ${choice}`} buttonContent={(choice) => choice.toUpperCase()} />
            <RangeControl label="DRAG SENSITIVITY" min={0.25} max={2} step={0.05} value={recipe.dragSensitivity} displayValue={`${recipe.dragSensitivity.toFixed(2)}×`} onChange={(dragSensitivity) => setRecipe((current) => ({ ...current, dragSensitivity }))} />
            <RangeControl label="DRAG INERTIA" min={0} max={1} step={0.05} value={recipe.dragInertia} displayValue={`${Math.round(recipe.dragInertia * 100)}%`} onChange={(dragInertia) => setRecipe((current) => ({ ...current, dragInertia }))} />
          </>}
        </div>}
      </aside>
      <div className="animation-lab-composer-preview">
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
