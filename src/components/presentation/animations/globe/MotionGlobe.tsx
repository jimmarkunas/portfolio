"use client";

import { useEffect, useMemo, useRef } from "react";
import { GlobeCore } from "./GlobeCore";
import { DEFAULT_PLACES, type GlobeConfig, type GlobeAnimationRecipe } from "./globeTypes";
import { globeBodyPresets, locationTagPresets, orbitPresets } from "./globePresets";

export function MotionGlobe({ recipe }: { recipe: GlobeAnimationRecipe }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<GlobeCore | null>(null);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const body = globeBodyPresets[recipe.globe];
  const tag = locationTagPresets[recipe.locationTag];
  const orbit = orbitPresets[recipe.orbit];
  const config = useMemo<GlobeConfig>(() => ({
    ...body,
    ...orbit,
    places: DEFAULT_PLACES,
    density: body.density,
    quality: "auto",
    routesOn: true,
    replayOnScroll: true,
    formation: recipe.particleField === "lychee" ? "drift" : body.formation,
  }), [body, orbit, recipe.particleField]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const core = new GlobeCore(host, config);
    coreRef.current = core;
    return () => {
      coreRef.current = null;
      core.dispose();
    };
    // One renderer instance owns all preset updates and is disposed with this slide.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const core = coreRef.current;
    if (!core) return;
    core.apply(config);
  }, [config]);

  useEffect(() => {
    coreRef.current?.setPlaces(DEFAULT_PLACES, tag.marker === "pin" ? tag.placeLift : 0);
    coreRef.current?.setPlaceNodes(labelRefs.current);
  }, [recipe.locationTag, tag]);

  useEffect(() => {
    coreRef.current?.buildField();
  }, [body.density]);

  useEffect(() => {
    coreRef.current?.buildRoutes();
  }, [orbit]);

  useEffect(() => {
    coreRef.current?.replayEntrance();
  }, [config.formation, config.entranceSeconds]);

  return <div className="motion-globe" style={{ background: body.palette.backdrop }}>
    <div ref={hostRef} className="motion-globe__webgl" aria-hidden="true" />
    <div className="motion-globe__labels" aria-label="Global locations">
      {DEFAULT_PLACES.map((place, index) => (
        <div
          key={place.label}
          ref={(node) => { labelRefs.current[index] = node; }}
          className={`motion-globe__tag motion-globe__tag--${tag.marker}`}
          style={{
            color: tag.labelInk,
            background: tag.labelFill,
            boxShadow: `0 2px 10px rgba(0,0,0,.22), 0 0 0 1px ${tag.accent}55`,
            fontFamily: tag.labelFont.fontFamily,
            fontSize: tag.labelFont.fontSize,
            fontWeight: tag.labelFont.fontWeight,
            letterSpacing: tag.labelFont.letterSpacing,
          }}
        >
          <span className="motion-globe__marker" style={{ background: tag.accent, color: tag.accentInk }} aria-hidden="true">
            {tag.marker === "pin" ? <i /> : <b />}
          </span>
          <span>{place.label}</span>
        </div>
      ))}
    </div>
  </div>;
}
