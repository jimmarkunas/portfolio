import type { Metadata } from "next";

import "@/components/presentation/templates/templates.css";
import "./presentation/presentation.css";
import Pdma2026Presentation from "./presentation/Pdma2026Presentation";

export const metadata: Metadata = {
  title: "PDMA 2026 — PDMA Edition",
  description: "PDMA 2026 independently branded presentation edition.",
  robots: { index: false, follow: false },
};

export default function Pdma2026BrandedPage() {
  return <div className="pdma2026-page pdma2026-production pdma2026-2-page"><Pdma2026Presentation /></div>;
}
