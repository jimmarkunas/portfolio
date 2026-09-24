import type { ComponentType } from "react";

/** The single logical presentation plane. The shell scales it uniformly (contain). */
export const PDMA_LOGICAL_CANVAS = { width: 1920, height: 1080 } as const;

/** Title-block configuration consumed by PdmaTitleBlock (title/subtitle styling lives in the shell). */
export type PdmaTitleConfig = {
  white?: string; magenta?: string; subtitle?: string; size: number; leading?: number; tracking?: number;
  subtitleSize?: number; subtitleLeading?: number; subtitleOffset?: number; subtitleX?: number; subtitleTracking?: number;
  exactSubtitleSize?: boolean; titleColor?: string; subtitleColor?: string; magentaRowShift?: number; magentaX?: number; sameRow?: boolean; plusMagenta?: boolean;
  /** Characters of `white` drawn in magenta (e.g. "A.S" for the A.G.E.N.T.S. wordmark). */
  magentaGlyphs?: string;
};

export type PdmaHeaderLabels = readonly [string, string, string];

export type PdmaSlideKey = `slide-${"01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16"}`;

/** Chrome contract between a deck manifest and PdmaPresentationShell. */
export type PdmaSlideManifestEntry = {
  key: PdmaSlideKey;
  id: PdmaSlideKey;
  tocTitle: string;
  headerLabels: PdmaHeaderLabels;
  footerLabel: string;
  title: PdmaTitleConfig;
  component: ComponentType;
  assets: readonly string[];
  routeLinks?: readonly string[];
};

/** Shell chrome for one production slide (same contract the template gallery uses). */
export type PdmaSlideChrome = {
  tocTitle: string;
  headerLabels: PdmaHeaderLabels;
  footerLabel: string;
  title: PdmaTitleConfig;
  sourceSlide: number | null;
};

type PreservedBase<K extends string> = { kind: K; chrome: PdmaSlideChrome };
export type TextRun = { text: string; emphasis?: boolean };

export type ShiftBoundaryContent = PreservedBase<"shift-boundary"> & {
  lists: readonly [
    { side: "ai"; heading: string; items: readonly { label: string; glyph: string }[] },
    { side: "human"; heading: string; items: readonly { label: string; glyph: string }[] },
  ];
  boundary: readonly (readonly TextRun[])[];
};

export type WorkMapContent = PreservedBase<"work-map"> & {
  modes: readonly { number: string; title: string; body: string; label: string }[];
  takeaway: string;
};

export type AmbiguityGateContent = PreservedBase<"ambiguity-gate"> & {
  conditions: readonly string[];
  equals: string;
  result: string;
};

export type AgentsRevealContent = PreservedBase<"agents-reveal"> & {
  questions: readonly { letter: string; title: string; question: string }[];
};

export type FrameworkToProductContent = PreservedBase<"framework-to-product"> & {
  framework: { heading: string; rows: readonly { letter: string; label: string }[] };
  requirements: { heading: string; rows: readonly { letter: string; requirement: string }[] };
};

type SpecPanel = { label: string; title: string; quote: string; items: readonly string[]; marker: string };
export type IdeaToSpecContent = PreservedBase<"idea-to-spec"> & {
  sideStatement: string;
  before: SpecPanel;
  bridge: { art: string; label: string };
  after: SpecPanel;
  takeaway: string;
  outcomes: readonly { value: string; label: string }[];
};

export type PreservedSlideContent = ShiftBoundaryContent | WorkMapContent | AmbiguityGateContent | AgentsRevealContent | FrameworkToProductContent | IdeaToSpecContent;
