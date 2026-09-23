import { createElement, type ComponentType, type ReactNode } from "react";
import type { Pdma2026Content } from "@/content/pdma2026";
import { Slide02 } from "./components/Slide02";
import { Slide01 } from "./components/slides/Slide01";
import { Slide03 } from "./components/slides/Slide03";
import { Slide04 } from "./components/slides/Slide04";
import { Slide05 } from "./components/slides/Slide05";
import { Slide06 } from "./components/CanonicalSlide06Exact";
import { Slide07 } from "./components/slides/Slide07";
import { Slide08 } from "./components/CanonicalSlide08";
import { Slide09 } from "./components/slides/Slide09";
import { Slide10 } from "./components/slides/Slide10";
import { Slide11 } from "./components/slides/Slide11";
import { Slide12 } from "./components/slides/Slide12";
import { Slide13 } from "./components/slides/Slide13";
import { Slide14 } from "./components/slides/Slide14";
import { Slide15 } from "./components/slides/Slide15";
import { pdmaGeometry } from "./pdmaGeometry";
import { pdmaValidation } from "./pdma.validation";

export type PdmaTitleConfig = {
  white?: string; magenta?: ReactNode; subtitle?: ReactNode; size: number; leading?: number; tracking?: number;
  subtitleSize?: number; subtitleLeading?: number; subtitleOffset?: number; subtitleX?: number; subtitleTracking?: number;
  exactSubtitleSize?: boolean; titleColor?: string; subtitleColor?: string; magentaRowShift?: number; magentaX?: number; sameRow?: boolean;
};
export type Pdma2026SlideKey = `slide-${"01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13" | "14" | "15"}`;
export type PdmaHeaderLabels = readonly [string, string, string];
export type Pdma2026SlideComponent = ComponentType;
export type PdmaQaScope = "targeted" | "full";
export type Pdma2026SlideDefinition = {
  key: Pdma2026SlideKey; id: Pdma2026SlideKey; tocTitle: string; headerLabels: PdmaHeaderLabels; footerLabel: string;
  title: PdmaTitleConfig; component: Pdma2026SlideComponent; assets: readonly string[]; routeLinks?: readonly string[]; qa: PdmaQaScope;
};
export type Pdma2026Config = {
  canvas: { width: 1920; height: 1080 };
  routes: { presentation: string; exercise: string };
  assetRoots: { asterisk: string; slide01: { particleOverlay: string; planetBack: string; planetForeground: string; heroAsterisk: string }; slide06: { nebula: string; planet: string; secondaryMoon: string; smallMoon: string; rings: string; connectors: string }; slide08Root: string; slide09Root: string; slide10Root: string; slide11Root: string; slide13Root: string; slide14Root: string; slide15Root: string };
  geometry: typeof pdmaGeometry;
  qa: { defaultScope: PdmaQaScope; sharedChangeScope: PdmaQaScope };
  slides: readonly Pdma2026SlideDefinition[];
};

const standard = { size: 82, leading: 88, tracking: -2.4 };
const assetRoot = "/pdma2026";
const slide = (number: number) => `${assetRoot}/slide-${String(number).padStart(2, "0")}`;
const lines = (...values: string[]): ReactNode => values.flatMap((value, index) => index === 0 ? [value] : [createElement("br", { key: index }), value]);
const assetRoots: Pdma2026Config["assetRoots"] = {
  asterisk: `${slide(1)}/canonical-asterisk.svg`,
  slide01: { particleOverlay: `${slide(1)}/slide-01-particle-overlay.png`, planetBack: `${slide(1)}/slide-01-planet-back.png`, planetForeground: `${slide(1)}/slide-01-planet-foreground.png`, heroAsterisk: `${slide(1)}/slide-01-asterisk-hero.png` },
  slide06: { nebula: `${slide(6)}/figma-nebula.png`, planet: `${slide(6)}/figma-planet.png`, secondaryMoon: `${slide(6)}/figma-secondary-moon.png`, smallMoon: `${slide(6)}/figma-small-moon.png`, rings: `${slide(6)}/figma-rings.png`, connectors: `${slide(6)}/connectors.svg` },
  slide08Root: slide(8), slide09Root: slide(9), slide10Root: slide(10), slide11Root: slide(11), slide13Root: slide(13), slide14Root: slide(14), slide15Root: slide(15),
};

const slides: readonly Pdma2026SlideDefinition[] = [
  { key: "slide-01", id: "slide-01", tocTitle: "THE NEW PM OPERATING SYSTEM", headerLabels: ["JUDGMENT", "AUTHORITY", "ACCOUNTABILITY"], footerLabel: "HUMAN JUDGMENT COMPOUNDS", title: { white: "THE NEW PM", magenta: "OPERATING SYSTEM", subtitle: lines("What stays uniquely human.", "What shifts to AI."), size: 82, leading: 88, tracking: -2.4, subtitleSize: 30, subtitleLeading: 36 }, component: Slide01, assets: pdmaValidation.runtimeAssets["slide-01"], qa: "targeted" },
  { key: "slide-02", id: "slide-02", tocTitle: "WHAT SHIFTS. WHAT STAYS.", headerLabels: ["OWNERSHIP", "JUDGMENT", "AUTOMATION"], footerLabel: "DELEGATED WORK • HUMAN JUDGMENT", title: { ...standard, white: "WHAT SHIFTS.", magenta: "WHAT STAYS.", subtitle: "AI automates the grunt work. It does not change who owns the product outcome.", subtitleSize: 30, subtitleLeading: 36 }, component: Slide02, assets: pdmaValidation.runtimeAssets["slide-02"], qa: "targeted" },
  { key: "slide-03", id: "slide-03", tocTitle: "COPILOTS GENERATE OUTPUTS. AGENTS TAKE ACTION.", headerLabels: ["OUTPUTS", "AUTHORITY", "ACTION"], footerLabel: "AUTHORITY IS A PRODUCT DECISION", title: { ...standard, white: "COPILOTS GENERATE OUTPUTS.", magenta: "AGENTS TAKE ACTION.", subtitle: lines("When AI can act in enterprise systems, product design must account for", "authority, consequence, and control."), subtitleSize: 29, subtitleLeading: 42 }, component: Slide03, assets: pdmaValidation.runtimeAssets["slide-03"], qa: "targeted" },
  { key: "slide-04", id: "slide-04", tocTitle: "DON'T AUTOMATE EVERYTHING.", headerLabels: ["AUTOMATE", "AUGMENT", "HUMAN-OWNED"], footerLabel: "BUILD THE RIGHT OPERATING MODEL", title: { ...standard, white: "DON'T AUTOMATE", magenta: "EVERYTHING.", subtitle: lines("Decide what problem deserves automation,", "what outcome matters, and what tradeoffs you’re willing to accept."), subtitleSize: 31, subtitleLeading: 40 }, component: Slide04, assets: pdmaValidation.runtimeAssets["slide-04"], qa: "targeted" },
  { key: "slide-05", id: "slide-05", tocTitle: "DON'T AUTOMATE AMBIGUITY.", headerLabels: ["PROBLEM", "OWNER", "AUTHORITY"], footerLabel: "CONFUSION AT MACHINE SPEED", title: { ...standard, white: "DON'T AUTOMATE", magenta: "AMBIGUITY", tracking: -5 }, component: Slide05, assets: pdmaValidation.runtimeAssets["slide-05"], qa: "targeted" },
  { key: "slide-06", id: "slide-06", tocTitle: "UNDERSTAND THE ENVIRONMENT. NAME THE OWNERS.", headerLabels: ["SYSTEMS", "DATA", "OWNERSHIP"], footerLabel: "AUTOMATION DOES NOT ERASE OWNERSHIP", title: { white: "UNDERSTAND THE ENVIRONMENT.", magenta: "NAME THE OWNERS.", subtitle: lines("AI inherits systems, data, permissions, dependencies, and failure modes —", "while autonomous actions still cross human ownership boundaries."), size: 64, leading: 70, tracking: 0, subtitleSize: 29, subtitleLeading: 36, subtitleOffset: 17, subtitleX: 50, subtitleTracking: 0, exactSubtitleSize: true, titleColor: "#f2f2f2", subtitleColor: "#f2f2f2", magentaRowShift: -2 }, component: Slide06, assets: pdmaValidation.runtimeAssets["slide-06"], qa: "targeted" },
  { key: "slide-07", id: "slide-07", tocTitle: "BEFORE YOU BUILD IT, PROVE THE VALUE.", headerLabels: ["REVENUE", "COST", "OPERATIONS"], footerLabel: "PICK ONE PRIMARY VALUE DRIVER", title: { ...standard, white: "BEFORE YOU BUILD IT,", magenta: "PROVE THE VALUE.", subtitle: "Every Agentic Product should have a clear economic reason to exist. Pick one primary value driver.", subtitleSize: 27, subtitleLeading: 36 }, component: Slide07, assets: pdmaValidation.runtimeAssets["slide-07"], qa: "targeted" },
  { key: "slide-08", id: "slide-08", tocTitle: "HOW MUCH AUTHORITY SHOULD THE ROBOTS HAVE?", headerLabels: ["OBSERVE", "DECIDE", "EXECUTE"], footerLabel: "AUTHORITY IS A PRODUCT DECISION", title: { ...standard, white: "HOW MUCH AUTHORITY", magenta: "SHOULD THE ROBOTS HAVE?", subtitle: lines("The farther AI moves from observing to acting, the more deliberately", "the Product Manager has to design the boundary."), subtitleSize: 26 }, component: Slide08, assets: pdmaValidation.runtimeAssets["slide-08"], qa: "targeted" },
  { key: "slide-09", id: "slide-09", tocTitle: "LIVE SCENARIO: RETENTION AGENT.", headerLabels: ["VALUE", "SIGNAL", "ACTION"], footerLabel: "PRODUCTION-READY ENTERPRISE PRODUCT", title: { ...standard, white: "LIVE SCENARIO:", magenta: "RETENTION AGENT.", subtitle: "A real enterprise business case: detect churn risk across CRM, product-usage, and support data before it is too late to act.", subtitleSize: 29 }, component: Slide09, assets: pdmaValidation.runtimeAssets["slide-09"], qa: "targeted" },
  { key: "slide-10", id: "slide-10", tocTitle: "DESIGN PRODUCTION READINESS INTO THE FEATURE.", headerLabels: ["BACKLOG", "CONTROLS", "OUTCOMES"], footerLabel: "PRODUCTION READINESS STARTS IN THE BACKLOG", title: { ...standard, white: "DESIGN PRODUCTION READINESS", magenta: "INTO THE FEATURE.", subtitle: lines("Guardrails, human intervention, and success measures belong in the product", "requirements before development begins."), subtitleSize: 24 }, component: Slide10, assets: pdmaValidation.runtimeAssets["slide-10"], qa: "targeted" },
  { key: "slide-11", id: "slide-11", tocTitle: "A.G.E.N.T.S.", headerLabels: ["STANDARD", "PRODUCT", "GOVERN"], footerLabel: "6 QUESTIONS • 1 PRODUCTIZATION STANDARD", title: { ...standard, magenta: "A.G.E.N.T.S.", subtitle: "Six product questions that turn an Agentic AI idea into something a team can safely build, test, and operate.", subtitleSize: 29 }, component: Slide11, assets: pdmaValidation.runtimeAssets["slide-11"], qa: "targeted" },
  { key: "slide-12", id: "slide-12", tocTitle: "TURN THE FRAMEWORK INTO PRODUCT.", headerLabels: ["FRAMEWORK", "REQUIREMENTS", "PRODUCT"], footerLabel: "FRAMEWORK → REQUIREMENTS → BUILDABLE PRODUCT", title: { ...standard, white: "TURN THE FRAMEWORK", magenta: "INTO PRODUCT.", subtitle: "A.G.E.N.T.S. changes how you write your backlog.", subtitleSize: 24 }, component: Slide12, assets: pdmaValidation.runtimeAssets["slide-12"], qa: "targeted" },
  { key: "slide-13", id: "slide-13", tocTitle: "AN IDEA + AI ≠ PRODUCT SPEC.", headerLabels: ["IDEA", "REQUIREMENTS", "PRODUCT"], footerLabel: "LESS REWORK • FASTER DELIVERY • HIGHER CONFIDENCE", title: { ...standard, white: "AN IDEA + AI", magenta: "≠ PRODUCT SPEC.", subtitle: "Same starting point. Different outcomes.", subtitleSize: 30, sameRow: true, magentaX: 659 }, component: Slide13, assets: pdmaValidation.runtimeAssets["slide-13"], qa: "targeted" },
  { key: "slide-14", id: "slide-14", tocTitle: "NOW YOU DO IT.", headerLabels: ["APPLY", "DECIDE", "BUILD"], footerLabel: "USEFUL PM ARTIFACT • NOT JUST A QUIZ RESULT", title: { ...standard, white: "NOW YOU", magenta: "DO IT.", subtitle: "Turn an AI idea into a mini productization brief you can take back to work.", subtitleSize: 30 }, component: Slide14, assets: pdmaValidation.runtimeAssets["slide-14"], routeLinks: [pdmaValidation.routeLinks.exercise], qa: "targeted" },
  { key: "slide-15", id: "slide-15", tocTitle: "TURN AI CAPABILITY INTO PRODUCT VALUE.", headerLabels: ["VALUE", "AUTHORITY", "ACCOUNTABILITY"], footerLabel: "NEVER AUTOMATE AWAY ACCOUNTABILITY", title: { ...standard, white: "TURN AI CAPABILITY", magenta: "INTO PRODUCT VALUE.", subtitle: "Start with the business case. Define the authority. Productize the controls. Measure the outcome.", subtitleSize: 30 }, component: Slide15, assets: pdmaValidation.runtimeAssets["slide-15"], qa: "targeted" },
];

export const pdmaConfig: Pdma2026Config = { canvas: { width: 1920, height: 1080 }, routes: { presentation: pdmaValidation.routeLinks.presentation, exercise: pdmaValidation.routeLinks.exercise }, assetRoots, geometry: pdmaGeometry, qa: { defaultScope: "targeted", sharedChangeScope: "full" }, slides };

export function buildPdmaConfig(_content: Pdma2026Content): Pdma2026Config {
  return pdmaConfig;
}
