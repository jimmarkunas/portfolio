import type { ReactNode } from "react";
import type { Pdma2026Content } from "@/content/pdma2026";
import { Slide02 } from "./components/Slide02";
import { Slide01, Slide03, Slide04, Slide05 } from "./components/Batch01Slides";
import { Slide06 } from "./components/CanonicalSlides06to10";
import { Slide07 } from "./components/slides/Slide07";
import { Slide09 } from "./components/slides/Slide09";
import { Slide10 } from "./components/slides/Slide10";
import { Slide08 } from "./components/CanonicalSlide08";
import { Slide11, Slide12, Slide13, Slide14, Slide15 } from "./components/CanonicalSlides11to15";

export type PdmaTitleConfig = {
  white?: string; magenta?: ReactNode; subtitle?: ReactNode; size: number; leading?: number; tracking?: number;
  subtitleSize?: number; subtitleLeading?: number; subtitleOffset?: number; subtitleX?: number; subtitleTracking?: number;
  exactSubtitleSize?: boolean; titleColor?: string; subtitleColor?: string; magentaRowShift?: number; magentaX?: number; sameRow?: boolean;
};
export type Pdma2026SlideKey = `slide-${"01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13" | "14" | "15"}`;
export type Pdma2026SlideManifestEntry = { key: Pdma2026SlideKey; id: string; tocTitle: string; footerLabel: string; title: PdmaTitleConfig; render: () => ReactNode };

const standard = { size: 82, leading: 88, tracking: -2.4 };
const footerLabels = ["HUMAN JUDGMENT COMPOUNDS", "THE NEW PM OPERATING SYSTEM", "AUTHORITY IS A PRODUCT DECISION", "BUILD THE RIGHT OPERATING MODEL"] as const;
const slides: readonly Omit<Pdma2026SlideManifestEntry, "footerLabel">[] = [
  { key: "slide-01", id: "slide-01", tocTitle: "THE NEW PM OPERATING SYSTEM", title: { white: "THE NEW PM", magenta: "OPERATING SYSTEM", subtitle: <>What stays uniquely human.<br />What shifts to AI.</>, size: 82, leading: 88, tracking: -2.4, subtitleSize: 30, subtitleLeading: 36 }, render: () => <Slide01 /> },
  { key: "slide-02", id: "slide-02", tocTitle: "WHAT SHIFTS. WHAT STAYS.", title: { ...standard, white: "WHAT SHIFTS.", magenta: "WHAT STAYS.", subtitle: <>AI automates the grunt work.<br />It does not change who owns the product outcome.</>, subtitleSize: 38 }, render: () => <Slide02 /> },
  { key: "slide-03", id: "slide-03", tocTitle: "COPILOTS GENERATE OUTPUTS. AGENTS TAKE ACTION.", title: { ...standard, white: "COPILOTS GENERATE OUTPUTS.", magenta: "AGENTS TAKE ACTION.", subtitle: <>When AI can act in enterprise systems, product design must account for<br />authority, consequence, and control.</>, subtitleSize: 29, subtitleLeading: 42 }, render: () => <Slide03 /> },
  { key: "slide-04", id: "slide-04", tocTitle: "DON'T AUTOMATE EVERYTHING.", title: { ...standard, white: "DON'T AUTOMATE", magenta: "EVERYTHING.", subtitle: <>Decide what problem deserves automation,<br />what outcome matters, and what tradeoffs you’re willing to accept.</>, subtitleSize: 31, subtitleLeading: 40 }, render: () => <Slide04 /> },
  { key: "slide-05", id: "slide-05", tocTitle: "DON'T AUTOMATE AMBIGUITY.", title: { ...standard, white: "DON'T AUTOMATE", magenta: "AMBIGUITY", tracking: -5 }, render: () => <Slide05 /> },
  { key: "slide-06", id: "slide-06", tocTitle: "UNDERSTAND THE ENVIRONMENT. NAME THE OWNERS.", title: { white: "UNDERSTAND THE ENVIRONMENT.", magenta: "NAME THE OWNERS.", subtitle: <>AI inherits systems, data, permissions, dependencies, and failure modes —<br />while autonomous actions still cross human ownership boundaries.</>, size: 64, leading: 70, tracking: 0, subtitleSize: 29, subtitleLeading: 36, subtitleOffset: 17, subtitleX: 50, subtitleTracking: 0, exactSubtitleSize: true, titleColor: "#f2f2f2", subtitleColor: "#f2f2f2", magentaRowShift: -2 }, render: () => <Slide06 /> },
  { key: "slide-07", id: "slide-07", tocTitle: "BEFORE YOU BUILD IT, PROVE THE VALUE.", title: { ...standard, white: "BEFORE YOU BUILD IT,", magenta: "PROVE THE VALUE.", subtitle: "Every Agentic Product should have a clear economic reason to exist. Pick one primary value driver.", subtitleSize: 27, subtitleLeading: 36 }, render: () => <Slide07 /> },
  { key: "slide-08", id: "slide-08", tocTitle: "HOW MUCH AUTHORITY SHOULD THE ROBOTS HAVE?", title: { ...standard, white: "HOW MUCH AUTHORITY", magenta: "SHOULD THE ROBOTS HAVE?", subtitle: <>The farther AI moves from observing to acting, the more deliberately<br />the Product Manager has to design the boundary.</>, subtitleSize: 26 }, render: () => <Slide08 /> },
  { key: "slide-09", id: "slide-09", tocTitle: "LIVE SCENARIO: RETENTION AGENT.", title: { ...standard, white: "LIVE SCENARIO:", magenta: "RETENTION AGENT.", subtitle: "A real enterprise business case: detect churn risk across CRM, product-usage, and support data before it is too late to act.", subtitleSize: 29 }, render: () => <Slide09 /> },
  { key: "slide-10", id: "slide-10", tocTitle: "DESIGN PRODUCTION READINESS INTO THE FEATURE.", title: { ...standard, white: "DESIGN PRODUCTION READINESS", magenta: "INTO THE FEATURE.", subtitle: <>Guardrails, human intervention, and success measures belong in the product<br />requirements before development begins.</>, subtitleSize: 24 }, render: () => <Slide10 /> },
  { key: "slide-11", id: "slide-11", tocTitle: "A.G.E.N.T.S.", title: { ...standard, magenta: "A.G.E.N.T.S.", subtitle: "Six product questions that turn an Agentic AI idea into something a team can safely build, test, and operate.", subtitleSize: 29 }, render: () => <Slide11 /> },
  { key: "slide-12", id: "slide-12", tocTitle: "TURN THE FRAMEWORK INTO PRODUCT.", title: { ...standard, white: "TURN THE FRAMEWORK", magenta: "INTO PRODUCT.", subtitle: "A.G.E.N.T.S. changes how you write your backlog.", subtitleSize: 24 }, render: () => <Slide12 /> },
  { key: "slide-13", id: "slide-13", tocTitle: "AN IDEA + AI ≠ PRODUCT SPEC.", title: { ...standard, white: "AN IDEA + AI", magenta: "≠ PRODUCT SPEC.", subtitle: "Same starting point. Different outcomes.", subtitleSize: 30, sameRow: true, magentaX: 659 }, render: () => <Slide13 /> },
  { key: "slide-14", id: "slide-14", tocTitle: "NOW YOU DO IT.", title: { ...standard, white: "NOW YOU", magenta: "DO IT.", subtitle: "Turn an AI idea into a mini productization brief you can take back to work.", subtitleSize: 30, sameRow: true, magentaX: 700 }, render: () => <Slide14 /> },
  { key: "slide-15", id: "slide-15", tocTitle: "TURN AI CAPABILITY INTO PRODUCT VALUE.", title: { ...standard, white: "TURN AI CAPABILITY", magenta: "INTO PRODUCT VALUE.", subtitle: "Start with the business case. Define the authority. Productize the controls. Measure the outcome.", subtitleSize: 30 }, render: () => <Slide15 /> },
];

export function buildPdma2026SlideManifest(_content: Pdma2026Content): Pdma2026SlideManifestEntry[] {
  return slides.map((slide, index) => ({ ...slide, footerLabel: footerLabels[Math.min(index, footerLabels.length - 1)] }));
}
