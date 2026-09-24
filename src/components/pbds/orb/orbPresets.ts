import type { PBDSKineticSphereProps } from "./orbTypes";

/**
 * Named PBDS orb configurations. `magentaRight` is the approved /pbds-orb-embed baseline;
 * values are the behavioral baseline and must not be "corrected" from older experiments.
 */
export const orbPresets = {
  magentaRight: {
    radius: 290,
    skinStyle: "canonical-magenta",
    accentColor: "#FF2FAE",
    primaryDotColor: "#FF2FAE",
    interactionMode: "repel",
    interactionStrength: 1.25,
    autoRotateSpeed: 0.0012,
    cropPosition: "orb-right",
    plasmaNoiseIntensity: 1,
    stippleDensity: 8500,
    ambientLuminance: 0.38,
    glowingStrokeIntensity: 0.2,
    strokeMode: "crescent",
    strokeShadowOpacity: 0,
    strokeWidth: 0.5,
    bodyOpacity: 0,
    interactive: true,
  },
  greyLeft: {
    radius: 290,
    skinStyle: "custom",
    accentColor: "#E2E8F0",
    primaryDotColor: "#E2E8F0",
    interactionMode: "repel",
    interactionStrength: 1.25,
    autoRotateSpeed: 0.0012,
    cropPosition: "orb-left",
    plasmaNoiseIntensity: 1,
    stippleDensity: 8500,
    ambientLuminance: 0.38,
    glowingStrokeIntensity: 0.14,
    // Tight metallic rim: narrow bloom, cooler core, minimal inner wash (renderer defaults 28 / 0.85 / 0.35).
    glowSpread: 12,
    coreHotness: 0.55,
    innerWashIntensity: 0.08,
    strokeMode: "crescent",
    strokeShadowOpacity: 0,
    strokeWidth: 0.7,
    bodyOpacity: 0,
    interactive: true,
  },
} as const satisfies Record<string, PBDSKineticSphereProps>;

export type PBDSOrbPresetName = keyof typeof orbPresets;
