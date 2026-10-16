import type { Metadata } from "next";

import "@/components/presentation/templates/templates.css";
import { PdmaExerciseRoute } from "./PdmaExerciseRoute";

export const metadata: Metadata = {
  title: "PDMA 2026 Exercise — PDMA Edition",
  description: "PDMA 2026 productization exercise.",
  robots: { index: false, follow: false },
};

export default function Pdma2026BrandedExercisePage() {
  return <div className="pdma2026-page pdma2026-2-page"><PdmaExerciseRoute /></div>;
}
