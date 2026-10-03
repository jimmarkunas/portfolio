import type { ReactNode } from "react";
import { PdmaScenarioExercise } from "../exercise/PdmaScenarioExercise";

/** Small deck-local interactive slot registry. Specs store IDs, never React values. */
export const pdma2026SlotIds = ["pdma-scenario-exercise"] as const;
export const resolvePdma2026Slot = (slotId: string): ReactNode => {
  if (slotId === "pdma-scenario-exercise") return <PdmaScenarioExercise />;
  throw new Error(`[presentation pdma2026] unknown interactive slot '${slotId}'`);
};
