import type { Metadata } from "next";

import "../pdma2026/styles/base.css";
import "./styles/templates.css";
import TemplatePresentation from "./TemplatePresentation";

export const metadata: Metadata = {
  title: "PDMA 2026 Templates",
  description: "PDMA 2026 presentation template system.",
  robots: { index: false, follow: false },
};

export default function Pdma2026TemplatesPage() {
  return <div className="pdma2026-page"><TemplatePresentation /></div>;
}
