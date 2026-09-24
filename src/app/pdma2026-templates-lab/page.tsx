import type { Metadata } from "next";

import "../pdma2026/styles/base.css";
import "../pdma2026-templates/styles/templates.css";
import "./lab.css";
import TemplateLabPresentation from "./TemplateLabPresentation";

export const metadata: Metadata = {
  title: "PDMA 2026 Templates Lab",
  description: "Temporary A/B lab for PDMA 2026 template decoration experiments.",
  robots: { index: false, follow: false },
};

export default function Pdma2026TemplatesLabPage() {
  return <div className="pdma2026-page pdma2026-templates-lab"><TemplateLabPresentation /></div>;
}
