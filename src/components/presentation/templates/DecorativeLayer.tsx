"use client";

import { createContext, useContext, type CSSProperties, type ReactNode } from "react";
import { PresentationDecorativePlane } from "@/components/presentation/PresentationCanvas";
import { PBDSOrb, type PBDSOrbProps } from "@/components/pbds/orb/PBDSOrb";
import { orbPresets, type PBDSOrbPresetName } from "@/components/pbds/orb/orbPresets";

export type DecorImage = {
  src: string;
  x: number;
  y: number;
  w: number;
  h: number;
  opacity?: number;
  ambient?: string;
  side?: "left" | "right" | "center" | "field";
};
export type DecorFade = { fade: "bottom"; y: number; h: number };
export type DecorOrb = {
  orb: PBDSOrbPresetName;
  radius?: number;
  viewport?: { x: number; y: number; w: number; h: number };
  fullPlane?: boolean;
  visualScale?: number;
  offsetX?: number;
  offsetY?: number;
  interactive?: boolean;
  props?: Omit<PBDSOrbProps, "preset" | "radius" | "interactive">;
};
export type DecorItem = DecorImage | DecorFade | DecorOrb;
export type DecorativeRecipeMap = Readonly<Record<string, readonly DecorItem[]>>;
export const isDecorImage = (item: DecorItem): item is DecorImage => "src" in item;
export const isDecorOrb = (item: DecorItem): item is DecorOrb => "orb" in item;

const DecorationRecipesContext = createContext<DecorativeRecipeMap>({});
export function PresentationDecorationRecipesProvider({ recipes, children }: { recipes: DecorativeRecipeMap; children: ReactNode }) {
  return <DecorationRecipesContext.Provider value={recipes}>{children}</DecorationRecipesContext.Provider>;
}

/** Shared renderer for caller-owned recipes. It never selects or defines deck artwork. */
export function DecorativeLayer({ recipeId, items: explicitItems }: { recipeId?: string; items?: readonly DecorItem[] }) {
  const recipes = useContext(DecorationRecipesContext);
  const items = explicitItems ?? (recipeId ? recipes[recipeId] : undefined) ?? [];
  if (recipeId && !explicitItems && !recipes[recipeId]) throw new Error(`Unknown presentation decoration recipe: ${recipeId}`);
  const orbSide = (preset: PBDSOrbPresetName) => orbPresets[preset].cropPosition === "orb-left" ? "left" : "right";
  return <PresentationDecorativePlane><div className="pdmat-deco" aria-hidden="true" data-decorative-variant={explicitItems ? "custom" : recipeId ?? "none"}>
    {items.map((item) => isDecorOrb(item) ? <div key={`orb-${item.orb}`} className={`pdmat-deco-orb${item.fullPlane ? "" : ` pdmat-deco-orb--${orbSide(item.orb)}`}`} style={item.viewport ? { inset: "auto", left: `calc(${item.viewport.x}px + ${orbSide(item.orb) === "right" ? "var(--pdma-art-extra)" : "0px"})`, top: item.viewport.y, width: item.viewport.w, height: item.viewport.h } : item.visualScale || item.offsetX || item.offsetY ? { transform: `${item.offsetX || item.offsetY ? `translate(${item.offsetX ?? 0}px, ${item.offsetY ?? 0}px)` : ""}${item.visualScale ? ` scale(${item.visualScale})` : ""}`, transformOrigin: "0 0" } : undefined}>
      <PBDSOrb {...item.props} preset={item.orb} radius={item.radius} interactive={item.interactive} />
    </div> : isDecorImage(item) ? <img
      key={item.src}
      className={`pdmat-deco-item pdmat-deco-item--${item.side ?? (item.w >= 1500 ? "field" : item.x + item.w / 2 < 640 ? "left" : item.x + item.w / 2 > 1280 ? "right" : "center")}${item.ambient ? ` pdmat-deco-item--${item.ambient}` : ""}`}
      src={item.src} alt="" draggable={false}
      style={{ "--x": `${item.x}px`, "--y": `${item.y}px`, "--w": `${item.w}px`, "--h": `${item.h}px`, "--o": item.opacity ?? 1 } as CSSProperties}
    /> : <span key={`fade-${item.fade}`} className={`pdmat-deco-fade pdmat-deco-fade--${item.fade}`} style={{ "--y": `${item.y}px`, "--h": `${item.h}px` } as CSSProperties} />)}
  </div></PresentationDecorativePlane>;
}
