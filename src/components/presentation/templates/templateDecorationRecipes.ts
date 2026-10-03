import type { DecorativeRecipeMap } from "./DecorativeLayer";

const A = "/pdma2026-templates/assets";

/** Approved reusable template artwork. Placement values intentionally match the accepted baseline. */
export const templateDecorationRecipes: DecorativeRecipeMap = {
  "end-card-orb": [
    { src: `${A}/end-card/end-card-electric-orb-right-v1.png`, x: 315, y: 66, w: 1605, h: 903, side: "right" },
    { fade: "bottom", y: 860, h: 105 },
  ],
  "flow-dual-orbs": [
    { src: `${A}/flow-scenario/slide-09-left-orb-white-v1.png`, x: -316, y: 335, w: 537, h: 537 },
    { src: `${A}/flow-scenario/slide-09-right-orb-magenta-v1.png`, x: 1685, y: 30, w: 980, h: 980 },
  ],
  "hub-corner-orbs": [
    { src: `${A}/hub-ecosystem/slide-06-left-orb-white-v1.png`, x: 0, y: 610, w: 470, h: 470 },
    { src: `${A}/hub-ecosystem/slide-06-right-orb-magenta-v1.png`, x: 1480, y: 60, w: 440, h: 440 },
  ],
  "structured-dual-orbs": [
    { src: `${A}/structured-content-action/slide-10-left-orb-magenta-v1.png`, x: -106, y: 221, w: 750, h: 750 },
    { src: `${A}/structured-content-action/slide-10-right-orb-magenta-orbit-v1.png`, x: 1297, y: -55, w: 850, h: 850 },
  ],
  "embedded-dual-orbs": [
    { src: `${A}/embedded-app/embedded-app-left-orb-magenta-v1.png`, x: -112, y: 275, w: 1000, h: 1000 },
    { src: `${A}/embedded-app/embedded-app-right-orb-white-v1.png`, x: 917, y: -48, w: 1253, h: 1253 },
  ],
  none: [],
};
