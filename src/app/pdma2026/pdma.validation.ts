import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { pdmaConfig } = require("jiti")(import.meta.url)("./pdma.config.ts") as typeof import("./pdma.config");

/** Derived validation view. Edit pdma.config.ts, never this file. */
export const pdmaValidation = {
  slideKeys: pdmaConfig.slides.map(({ key }) => key),
  runtimeAssets: Object.fromEntries(pdmaConfig.slides.map(({ key }) => [key, pdmaConfig.runtimeAssets[key]])),
  routeLinks: pdmaConfig.routes,
  docs: pdmaConfig.slideDocs,
  contracts: pdmaConfig.slideContracts,
  rendering: pdmaConfig.rendering,
  canvas: pdmaConfig.canvas,
  slides: pdmaConfig.slides,
} as const;

export type PdmaValidationSlideKey = typeof pdmaValidation.slideKeys[number];
