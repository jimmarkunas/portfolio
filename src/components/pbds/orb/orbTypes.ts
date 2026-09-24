export type InteractionMode = "repel" | "attract" | "swirl";
export type CropPosition = "center" | "orb-right" | "orb-left" | "orb-horizon";
export type OrbSkinStyle = "canonical-magenta" | "canonical-white" | "obsidian-ice" | "custom";

export interface PBDSKineticSphereProps {
  radius?: number;
  interactionMode?: InteractionMode;
  interactionStrength?: number;
  autoRotateSpeed?: number;
  cropPosition?: CropPosition;
  skinStyle?: OrbSkinStyle;
  accentColor?: string;
  primaryDotColor?: string;
  shadowDotColor?: string;
  className?: string;
  interactive?: boolean;
  plasmaNoiseIntensity?: number;
  stippleDensity?: number;
  ambientLuminance?: number;
  glowingStrokeIntensity?: number;
  glowSpread?: number;
  coreHotness?: number;
  innerWashIntensity?: number;
  dotHarmonization?: "unified" | "subtle-specular" | "split-tone";
  strokeMode?: "crescent" | "tapered" | "full" | "none";
  strokeShadowOpacity?: number;
  strokeWidth?: number;
  bodyOpacity?: number;
  /** Atmospheric-limb pass colors (color only; alpha/geometry/coreHotness unchanged). Unset → accent glow color. */
  outerGlowColor?: string;
  midGlowColor?: string;
  hotCoreColor?: string;
  /** Scales the existing plasma's brightness, size and outward reach. 1 = current output; practical 0.5–1.5. */
  solarFlareIntensity?: number;
}
