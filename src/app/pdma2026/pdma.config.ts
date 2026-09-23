import { createElement, type ReactNode } from "react";
import type { Pdma2026Content } from "@/content/pdma2026";
import { pdmaGeometry } from "./pdmaGeometry";

export type PdmaTitleConfig = {
  white?: string; magenta?: ReactNode; subtitle?: ReactNode; size: number; leading?: number; tracking?: number;
  subtitleSize?: number; subtitleLeading?: number; subtitleOffset?: number; subtitleX?: number; subtitleTracking?: number;
  exactSubtitleSize?: boolean; titleColor?: string; subtitleColor?: string; magentaRowShift?: number; magentaX?: number; sameRow?: boolean;
};
export type Pdma2026SlideKey = `slide-${"01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13" | "14" | "15"}`;
export type PdmaHeaderLabels = readonly [string, string, string];
export type Pdma2026SlideComponent = string;
export type PdmaQaScope = "targeted" | "full";
export type PdmaSlideContract = { required: readonly string[]; forbidden: readonly string[] };
export type PdmaSlideDoc = { title: string; component: string; geometry: string };
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
  runtimeAssets: Record<Pdma2026SlideKey, readonly string[]>;
  slideDocs: Record<Pdma2026SlideKey, PdmaSlideDoc>;
  slideContracts: Record<Pdma2026SlideKey, PdmaSlideContract>;
  slides: readonly Pdma2026SlideDefinition[];
};

const standard = { size: 82, leading: 88, tracking: -2.4 };
const assetRoot = "/pdma2026";
const routes = { presentation: "/pdma2026/", exercise: "/pdma2026/exercise" } as const;
const slide = (number: number) => `${assetRoot}/slide-${String(number).padStart(2, "0")}`;
const lines = (...values: string[]): ReactNode => values.flatMap((value, index) => index === 0 ? [value] : [createElement("br", { key: index }), value]);
const assetRoots: Pdma2026Config["assetRoots"] = {
  asterisk: `${slide(1)}/canonical-asterisk.svg`,
  slide01: { particleOverlay: `${slide(1)}/slide-01-particle-overlay.png`, planetBack: `${slide(1)}/slide-01-planet-back.png`, planetForeground: `${slide(1)}/slide-01-planet-foreground.png`, heroAsterisk: `${slide(1)}/slide-01-asterisk-hero.png` },
  slide06: { nebula: `${slide(6)}/figma-nebula.png`, planet: `${slide(6)}/figma-planet.png`, secondaryMoon: `${slide(6)}/figma-secondary-moon.png`, smallMoon: `${slide(6)}/figma-small-moon.png`, rings: `${slide(6)}/figma-rings.png`, connectors: `${slide(6)}/connectors.svg` },
  slide08Root: slide(8), slide09Root: slide(9), slide10Root: slide(10), slide11Root: slide(11), slide13Root: slide(13), slide14Root: slide(14), slide15Root: slide(15),
};

const runtimeAssets: Pdma2026Config["runtimeAssets"] = {
  "slide-01": ["/pdma2026/slide-01/title-atmosphere.png", "/pdma2026/slide-01/title-asterisk-scene.png"],
  "slide-02": ["/pdma2026/slide-02/slide-02-ai-sphere.png", "/pdma2026/slide-02/slide-02-human-sphere.png", "/pdma2026/slide-02/slide-02-particle-field.png", "/pdma2026/slide-02/diagram-cpu.svg", "/pdma2026/slide-02/diagram-brain.svg"],
  "slide-03": ["/pdma2026/slide-03/02283.png", "/pdma2026/slide-03/44753.png"], "slide-04": ["/pdma2026/slide-04/0c14e.png", "/pdma2026/slide-04/bd2f1.png"], "slide-05": ["/pdma2026/slide-05/51d1a.png", "/pdma2026/slide-05/9f2f3.png"],
  "slide-06": ["/pdma2026/slide-06"], "slide-07": [], "slide-08": ["/pdma2026/slide-08"], "slide-09": ["/pdma2026/slide-09"], "slide-10": ["/pdma2026/slide-10"], "slide-11": ["/pdma2026/slide-11"], "slide-12": ["/pdma2026/slide-12"], "slide-13": ["/pdma2026/slide-13"], "slide-14": ["/pdma2026/slide-14"], "slide-15": ["/pdma2026/slide-15"],
};
const slideDocs: Pdma2026Config["slideDocs"] = Object.fromEntries([
  ["slide-01", ["THE NEW PM OPERATING SYSTEM", "src/app/pdma2026/components/slides/Slide01.tsx", "pdmaGeometry.slide01"]], ["slide-02", ["WHAT SHIFTS. WHAT STAYS.", "src/app/pdma2026/components/Slide02.tsx", "pdmaGeometry.slide02"]], ["slide-03", ["COPILOTS GENERATE OUTPUTS. AGENTS TAKE ACTION.", "src/app/pdma2026/components/slides/Slide03.tsx", "pdmaGeometry.slide03"]], ["slide-04", ["DON'T AUTOMATE EVERYTHING.", "src/app/pdma2026/components/slides/Slide04.tsx", "pdmaGeometry.slide04"]], ["slide-05", ["DON'T AUTOMATE AMBIGUITY.", "src/app/pdma2026/components/slides/Slide05.tsx", "pdmaGeometry.slide05"]], ["slide-06", ["UNDERSTAND THE ENVIRONMENT. NAME THE OWNERS.", "src/app/pdma2026/components/CanonicalSlide06Exact.tsx", "pdmaGeometry.slide06"]], ["slide-07", ["BEFORE YOU BUILD IT, PROVE THE VALUE.", "src/app/pdma2026/components/slides/Slide07.tsx", "pdmaGeometry.slide07"]], ["slide-08", ["HOW MUCH AUTHORITY SHOULD THE ROBOTS HAVE?", "src/app/pdma2026/components/CanonicalSlide08.tsx", "pdmaGeometry.slide08"]], ["slide-09", ["LIVE SCENARIO: RETENTION AGENT.", "src/app/pdma2026/components/slides/Slide09.tsx", "pdmaGeometry.slide09"]], ["slide-10", ["DESIGN PRODUCTION READINESS INTO THE FEATURE.", "src/app/pdma2026/components/slides/Slide10.tsx", "pdmaGeometry.slide10"]], ["slide-11", ["A.G.E.N.T.S.", "src/app/pdma2026/components/slides/Slide11.tsx", "pdmaGeometry.slide11"]], ["slide-12", ["TURN THE FRAMEWORK INTO PRODUCT.", "src/app/pdma2026/components/slides/Slide12.tsx", "pdmaGeometry.slide12"]], ["slide-13", ["AN IDEA + AI ≠ PRODUCT SPEC.", "src/app/pdma2026/components/slides/Slide13.tsx", "pdmaGeometry.slide13"]], ["slide-14", ["NOW YOU DO IT.", "src/app/pdma2026/components/slides/Slide14.tsx", "pdmaGeometry.slide14"]], ["slide-15", ["TURN AI CAPABILITY INTO PRODUCT VALUE.", "src/app/pdma2026/components/slides/Slide15.tsx", "pdmaGeometry.slide15"]],
].map(([key, [title, component, geometry]]) => [key, { title, component, geometry }])) as Pdma2026Config["slideDocs"];
const slideContracts: Pdma2026Config["slideContracts"] = Object.fromEntries([
  ["slide-01", ["pdma-s01"]], ["slide-02", ["pdma-s02"]], ["slide-03", ["pdma-s03", "s03-panel-copilot", "s03-panel-agent", "s03-panel-divider"]], ["slide-04", ["pdma-s04"]], ["slide-05", ["pdma-s05"]], ...Array.from({ length: 10 }, (_, index) => [`slide-${String(index + 6).padStart(2, "0")}`, []]),
].map(([key, required]) => [key, { required, forbidden: ["pdma-alt-slide", "pdma-header", "pdma-footer"] }])) as Pdma2026Config["slideContracts"];

const slides: readonly Pdma2026SlideDefinition[] = [
  { key: "slide-01", id: "slide-01", tocTitle: "THE NEW PM OPERATING SYSTEM", headerLabels: ["JUDGMENT", "AUTHORITY", "ACCOUNTABILITY"], footerLabel: "HUMAN JUDGMENT COMPOUNDS", title: { white: "THE NEW PM", magenta: "OPERATING SYSTEM", subtitle: lines("What stays uniquely human.", "What shifts to AI."), size: 82, leading: 88, tracking: -2.4, subtitleSize: 30, subtitleLeading: 36 }, component: "src/app/pdma2026/components/slides/Slide01.tsx", assets: runtimeAssets["slide-01"], qa: "targeted" },
  { key: "slide-02", id: "slide-02", tocTitle: "WHAT SHIFTS. WHAT STAYS.", headerLabels: ["OWNERSHIP", "JUDGMENT", "AUTOMATION"], footerLabel: "DELEGATED WORK • HUMAN JUDGMENT", title: { ...standard, white: "WHAT SHIFTS.", magenta: "WHAT STAYS.", subtitle: "AI automates the grunt work. It does not change who owns the product outcome.", subtitleSize: 30, subtitleLeading: 36 }, component: "src/app/pdma2026/components/Slide02.tsx", assets: runtimeAssets["slide-02"], qa: "targeted" },
  { key: "slide-03", id: "slide-03", tocTitle: "COPILOTS GENERATE OUTPUTS. AGENTS TAKE ACTION.", headerLabels: ["OUTPUTS", "AUTHORITY", "ACTION"], footerLabel: "AUTHORITY IS A PRODUCT DECISION", title: { ...standard, white: "COPILOTS GENERATE OUTPUTS.", magenta: "AGENTS TAKE ACTION.", subtitle: lines("When AI can act in enterprise systems, product design must account for", "authority, consequence, and control."), subtitleSize: 29, subtitleLeading: 42 }, component: "src/app/pdma2026/components/slides/Slide03.tsx", assets: runtimeAssets["slide-03"], qa: "targeted" },
  { key: "slide-04", id: "slide-04", tocTitle: "DON'T AUTOMATE EVERYTHING.", headerLabels: ["AUTOMATE", "AUGMENT", "HUMAN-OWNED"], footerLabel: "BUILD THE RIGHT OPERATING MODEL", title: { ...standard, white: "DON'T AUTOMATE", magenta: "EVERYTHING.", subtitle: lines("Decide what problem deserves automation,", "what outcome matters, and what tradeoffs you’re willing to accept."), subtitleSize: 31, subtitleLeading: 40 }, component: "src/app/pdma2026/components/slides/Slide04.tsx", assets: runtimeAssets["slide-04"], qa: "targeted" },
  { key: "slide-05", id: "slide-05", tocTitle: "DON'T AUTOMATE AMBIGUITY.", headerLabels: ["PROBLEM", "OWNER", "AUTHORITY"], footerLabel: "CONFUSION AT MACHINE SPEED", title: { ...standard, white: "DON'T AUTOMATE", magenta: "AMBIGUITY", tracking: -5 }, component: "src/app/pdma2026/components/slides/Slide05.tsx", assets: runtimeAssets["slide-05"], qa: "targeted" },
  { key: "slide-06", id: "slide-06", tocTitle: "UNDERSTAND THE ENVIRONMENT. NAME THE OWNERS.", headerLabels: ["SYSTEMS", "DATA", "OWNERSHIP"], footerLabel: "AUTOMATION DOES NOT ERASE OWNERSHIP", title: { white: "UNDERSTAND THE ENVIRONMENT.", magenta: "NAME THE OWNERS.", subtitle: lines("AI inherits systems, data, permissions, dependencies, and failure modes —", "while autonomous actions still cross human ownership boundaries."), size: 64, leading: 70, tracking: 0, subtitleSize: 29, subtitleLeading: 36, subtitleOffset: 17, subtitleX: 50, subtitleTracking: 0, exactSubtitleSize: true, titleColor: "#f2f2f2", subtitleColor: "#f2f2f2", magentaRowShift: -2 }, component: "src/app/pdma2026/components/CanonicalSlide06Exact.tsx", assets: runtimeAssets["slide-06"], qa: "targeted" },
  { key: "slide-07", id: "slide-07", tocTitle: "BEFORE YOU BUILD IT, PROVE THE VALUE.", headerLabels: ["REVENUE", "COST", "OPERATIONS"], footerLabel: "PICK ONE PRIMARY VALUE DRIVER", title: { ...standard, white: "BEFORE YOU BUILD IT,", magenta: "PROVE THE VALUE.", subtitle: "Every Agentic Product should have a clear economic reason to exist. Pick one primary value driver.", subtitleSize: 27, subtitleLeading: 36 }, component: "src/app/pdma2026/components/slides/Slide07.tsx", assets: runtimeAssets["slide-07"], qa: "targeted" },
  { key: "slide-08", id: "slide-08", tocTitle: "HOW MUCH AUTHORITY SHOULD THE ROBOTS HAVE?", headerLabels: ["OBSERVE", "DECIDE", "EXECUTE"], footerLabel: "AUTHORITY IS A PRODUCT DECISION", title: { ...standard, white: "HOW MUCH AUTHORITY", magenta: "SHOULD THE ROBOTS HAVE?", subtitle: lines("The farther AI moves from observing to acting, the more deliberately", "the Product Manager has to design the boundary."), subtitleSize: 26 }, component: "src/app/pdma2026/components/CanonicalSlide08.tsx", assets: runtimeAssets["slide-08"], qa: "targeted" },
  { key: "slide-09", id: "slide-09", tocTitle: "LIVE SCENARIO: RETENTION AGENT.", headerLabels: ["VALUE", "SIGNAL", "ACTION"], footerLabel: "PRODUCTION-READY ENTERPRISE PRODUCT", title: { ...standard, white: "LIVE SCENARIO:", magenta: "RETENTION AGENT.", subtitle: "A real enterprise business case: detect churn risk across CRM, product-usage, and support data before it is too late to act.", subtitleSize: 29 }, component: "src/app/pdma2026/components/slides/Slide09.tsx", assets: runtimeAssets["slide-09"], qa: "targeted" },
  { key: "slide-10", id: "slide-10", tocTitle: "DESIGN PRODUCTION READINESS INTO THE FEATURE.", headerLabels: ["BACKLOG", "CONTROLS", "OUTCOMES"], footerLabel: "PRODUCTION READINESS STARTS IN THE BACKLOG", title: { ...standard, white: "DESIGN PRODUCTION READINESS", magenta: "INTO THE FEATURE.", subtitle: lines("Guardrails, human intervention, and success measures belong in the product", "requirements before development begins."), subtitleSize: 24 }, component: "src/app/pdma2026/components/slides/Slide10.tsx", assets: runtimeAssets["slide-10"], qa: "targeted" },
  { key: "slide-11", id: "slide-11", tocTitle: "A.G.E.N.T.S.", headerLabels: ["STANDARD", "PRODUCT", "GOVERN"], footerLabel: "6 QUESTIONS • 1 PRODUCTIZATION STANDARD", title: { ...standard, magenta: "A.G.E.N.T.S.", subtitle: "Six product questions that turn an Agentic AI idea into something a team can safely build, test, and operate.", subtitleSize: 29 }, component: "src/app/pdma2026/components/slides/Slide11.tsx", assets: runtimeAssets["slide-11"], qa: "targeted" },
  { key: "slide-12", id: "slide-12", tocTitle: "TURN THE FRAMEWORK INTO PRODUCT.", headerLabels: ["FRAMEWORK", "REQUIREMENTS", "PRODUCT"], footerLabel: "FRAMEWORK → REQUIREMENTS → BUILDABLE PRODUCT", title: { ...standard, white: "TURN THE FRAMEWORK", magenta: "INTO PRODUCT.", subtitle: "A.G.E.N.T.S. changes how you write your backlog.", subtitleSize: 24 }, component: "src/app/pdma2026/components/slides/Slide12.tsx", assets: runtimeAssets["slide-12"], qa: "targeted" },
  { key: "slide-13", id: "slide-13", tocTitle: "AN IDEA + AI ≠ PRODUCT SPEC.", headerLabels: ["IDEA", "REQUIREMENTS", "PRODUCT"], footerLabel: "LESS REWORK • FASTER DELIVERY • HIGHER CONFIDENCE", title: { ...standard, white: "AN IDEA + AI", magenta: "≠ PRODUCT SPEC.", subtitle: "Same starting point. Different outcomes.", subtitleSize: 30, sameRow: true, magentaX: 659 }, component: "src/app/pdma2026/components/slides/Slide13.tsx", assets: runtimeAssets["slide-13"], qa: "targeted" },
  { key: "slide-14", id: "slide-14", tocTitle: "NOW YOU DO IT.", headerLabels: ["APPLY", "DECIDE", "BUILD"], footerLabel: "USEFUL PM ARTIFACT • NOT JUST A QUIZ RESULT", title: { ...standard, white: "NOW YOU", magenta: "DO IT.", subtitle: "Turn an AI idea into a mini productization brief you can take back to work.", subtitleSize: 30 }, component: "src/app/pdma2026/components/slides/Slide14.tsx", assets: runtimeAssets["slide-14"], routeLinks: [routes.exercise], qa: "targeted" },
  { key: "slide-15", id: "slide-15", tocTitle: "TURN AI CAPABILITY INTO PRODUCT VALUE.", headerLabels: ["VALUE", "AUTHORITY", "ACCOUNTABILITY"], footerLabel: "NEVER AUTOMATE AWAY ACCOUNTABILITY", title: { ...standard, white: "TURN AI CAPABILITY", magenta: "INTO PRODUCT VALUE.", subtitle: "Start with the business case. Define the authority. Productize the controls. Measure the outcome.", subtitleSize: 30 }, component: "src/app/pdma2026/components/slides/Slide15.tsx", assets: runtimeAssets["slide-15"], qa: "targeted" },
];

export const pdmaConfig: Pdma2026Config = { canvas: { width: 1920, height: 1080 }, routes, assetRoots, geometry: pdmaGeometry, qa: { defaultScope: "targeted", sharedChangeScope: "full" }, runtimeAssets, slideDocs, slideContracts, slides };

export function buildPdmaConfig(_content: Pdma2026Content): Pdma2026Config {
  return pdmaConfig;
}
