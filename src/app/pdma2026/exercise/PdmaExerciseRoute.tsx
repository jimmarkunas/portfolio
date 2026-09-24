"use client";

import { EmbeddedAppFrame } from "@/app/pdma2026-templates/components/shared/EmbeddedAppFrame";
import { PdmaSlideCanvas } from "../PdmaPresentationShell";
import { PdmaScenarioExercise } from "./PdmaScenarioExercise";

/**
 * Standalone rehearsal/testing container for the PDMA exercise: the same component and the
 * same EmbeddedAppFrame the deck uses, on the shell's uniformly scaled 1920×1080 plane.
 */
export function PdmaExerciseRoute() {
  return <main className="pdma-presentation">
    <div className="pdma-stage">
      <PdmaSlideCanvas>
        <div className="pdmax-route">
          <EmbeddedAppFrame label="PDMA productization exercise"><PdmaScenarioExercise /></EmbeddedAppFrame>
        </div>
      </PdmaSlideCanvas>
    </div>
  </main>;
}
