"use client";

import { PBDSKineticSphere as SharedSphere } from "@/components/pbds/orb/PBDSKineticSphere";
import type { PBDSKineticSphereProps } from "@/components/pbds/orb/orbTypes";
export type { PBDSKineticSphereProps, InteractionMode, CropPosition, OrbSkinStyle } from "@/components/pbds/orb/orbTypes";

/** Historical experiment adapter: one shared renderer, original spring-in behavior. */
export function PBDSKineticSphere(props: PBDSKineticSphereProps) {
  return <SharedSphere initialMotion="spring-in" {...props} />;
}
