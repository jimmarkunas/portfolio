import type { Metadata } from "next";

import "../pdma2026-templates/styles/templates.css";
import "./presentation/presentation.css";
import Pdma2026Presentation from "./presentation/Pdma2026Presentation";

export const metadata: Metadata = {
  title: "PDMA 2026",
  description: "PDMA 2026 presentation.",
  robots: { index: false, follow: false },
};

export default function Pdma2026Page() {
  return <div className="pdma2026-page"><Pdma2026Presentation /></div>;
}
