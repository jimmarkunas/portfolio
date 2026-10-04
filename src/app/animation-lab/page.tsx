import type { Metadata } from "next";

import "../pdma2026/styles/base.css";
import "@/components/presentation/templates/templates.css";
import "./animation-lab.css";
import AnimationLabPresentation from "./AnimationLabPresentation";

export const metadata: Metadata = {
  title: "Animation Lab",
  description: "Interactive portfolio animation development lab.",
  robots: { index: false, follow: false },
};

export default function AnimationLabPage() {
  return <div className="animation-lab-page"><AnimationLabPresentation /></div>;
}
