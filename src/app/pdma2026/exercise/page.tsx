import type { Metadata } from "next";

import "../../pdma2026-templates/styles/templates.css";
import { PdmaExerciseRoute } from "./PdmaExerciseRoute";

export const metadata: Metadata = {
  title: "PDMA 2026 Exercise",
  description: "PDMA 2026 productization exercise.",
  robots: { index: false, follow: false },
};

export default function Pdma2026ExercisePage() {
  return <div className="pdma2026-page"><PdmaExerciseRoute /></div>;
}
