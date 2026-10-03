import type { ComponentType } from "react";
import type { PresentationSlideChrome, PresentationTitleConfig } from "@/components/presentation/presentationTypes";
export { PRESENTATION_LOGICAL_CANVAS as PDMA_LOGICAL_CANVAS } from "@/components/presentation/presentationTypes";

export type PdmaTitleConfig = PresentationTitleConfig;
export type PdmaSlideKey = `slide-${"01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16"}`;
export type PdmaSlideChrome = PresentationSlideChrome;
export type PdmaSlideManifestEntry = {
  key: PdmaSlideKey;
  id: PdmaSlideKey;
  tocTitle: string;
  headerLabels: readonly [string, string, string];
  footerLabel: string;
  title: PdmaTitleConfig;
  component: ComponentType;
  assets: readonly string[];
  routeLinks?: readonly string[];
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
  /** Retained canonical copy; the approved v1 composition does not render it. */
  sideStatement: string;
  before: SpecPanel;
  bridge: { art: string; label: string };
  after: SpecPanel;
  takeaway: string;
  outcomes: readonly { value: string; label: string }[];
};

export type PreservedSlideContent = ShiftBoundaryContent | WorkMapContent | AmbiguityGateContent | AgentsRevealContent | FrameworkToProductContent | IdeaToSpecContent;
