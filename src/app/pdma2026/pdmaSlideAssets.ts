import type { Pdma2026SlideKey } from "./pdma.config";
import { pdmaConfig } from "./pdma.config";

export type PdmaSlideAssetMap = Readonly<Record<Pdma2026SlideKey, readonly string[]>>;

export const pdmaSlideAssets = Object.fromEntries(
  pdmaConfig.slides.map(({ key, assets }) => [key, assets]),
) as PdmaSlideAssetMap;
