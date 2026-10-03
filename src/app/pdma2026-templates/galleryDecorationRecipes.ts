import type { DecorativeRecipeMap } from "@/components/presentation/templates/DecorativeLayer";
import { templateDecorationRecipes } from "@/components/presentation/templates/templateDecorationRecipes";

/** Frozen gallery-example artwork, matching the accepted examples without importing PDMA recipes. */
export const galleryDecorationRecipes: DecorativeRecipeMap = {
  ...templateDecorationRecipes,
  "title-hero": [
    { src: "/pdma2026/slide-01/slide-01-planet-back.png", x: 780, y: 115, w: 930, h: 698, ambient: "drift-back", side: "right" },
    { src: "/pdma2026/slide-01/slide-01-planet-foreground.png", x: 1060, y: 250, w: 780, h: 780, ambient: "drift-front", side: "right" },
    { src: "/pdma2026/slide-01/slide-01-asterisk-hero.png", x: 960, y: 150, w: 760, h: 760, ambient: "drift-hero", side: "right" },
  ],
  "compare-edge-planets": [
    { src: "/pdma2026/slide-03/02283.png", x: -165, y: 251, w: 760, h: 760, opacity: 0.9 },
    { src: "/pdma2026/slide-03/44753.png", x: 1260, y: 242, w: 830, h: 830 },
  ],
  "spectrum-horizon": [
    { src: "/pdma2026/slide-08/slide-08-planet-horizon.png", x: 0, y: 300, w: 1920, h: 640 },
    { src: "/pdma2026/slide-08/slide-08-authority-arc.png", x: 0, y: 260, w: 1920, h: 640 },
  ],
};
