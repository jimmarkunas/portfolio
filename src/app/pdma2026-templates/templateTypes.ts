import type { LucideIcon } from "lucide-react";
import type { PdmaHeaderLabels, PdmaTitleConfig } from "@/app/pdma2026/presentation/presentationTypes";

export type TemplateKind =
  | "title"
  | "end-card"
  | "exercise"
  | "embedded-app"
  | "compare-contrast"
  | "flow-scenario"
  | "decision-spectrum"
  | "hub-ecosystem"
  | "scorecard"
  | "structured-content-action";

/** Decoration is selected by variant; template body structure never changes with it. */
export type DecorativeVariant =
  | "title-hero"
  | "end-card-orb"
  | "compare-edge-planets"
  | "flow-dual-orbs"
  | "spectrum-horizon"
  | "hub-corner-orbs"
  | "structured-dual-orbs"
  | "embedded-dual-orbs"
  | "none";

/** Shell chrome for one template slide. Consumed unchanged by PdmaPresentationShell. */
export type TemplateChrome = {
  tocTitle: string;
  headerLabels: PdmaHeaderLabels;
  footerLabel: string;
  title: PdmaTitleConfig;
  /** Live PDMA slide that owns this template's copy; null when the approved concept owns it. */
  sourceSlide: number | null;
};

type TemplateBase<K extends TemplateKind> = {
  kind: K;
  chrome: TemplateChrome;
  decorativeVariant: DecorativeVariant;
};

export type IconSource = { icon: LucideIcon } | { src: string };

export type TitleTemplateContent = TemplateBase<"title"> & {
  speaker: { name: string; role: string };
};

export type EndCardTemplateContent = TemplateBase<"end-card"> & {
  statement: { lead: string; emphasis: string };
  download: {
    /** Single destination consumed by both the QR code and the round CTA. */
    url: string;
    eyebrow: string;
    title: string;
    description: string;
    teamPrompt: string;
    actions: readonly string[];
    ctaLabel: string;
    qrAriaLabel: string;
  };
};

export type ExerciseRow = { number: string; title: string; body: string; glyph: string; emphasis: boolean };

export type ExerciseTemplateContent = TemplateBase<"exercise"> & {
  rows: readonly ExerciseRow[];
  supportingLabel: string;
  connectorArt: string;
  worksheet: {
    href: string;
    ariaLabel: string;
    brand: string;
    status: string;
    eyebrow: string;
    title: string;
    fields: readonly string[];
    footerLead: string;
    footerBrand: string;
  };
  takeaway: string;
};

export type EmbeddedAppTemplateContent = TemplateBase<"embedded-app"> & {
  frameLabel: string;
};

export type CompareProcessStep = { glyph: string; label: string };
export type ComparePanel = {
  heading: string;
  descriptor: string;
  steps: readonly CompareProcessStep[];
  accentIndex: number;
  boundary: string;
  capabilities?: readonly string[];
  tone: "neutral" | "accent";
};

export type CompareContrastTemplateContent = TemplateBase<"compare-contrast"> & {
  panels: readonly [ComparePanel, ComparePanel];
  takeaway: string;
};

export type FlowSignal = { title: string; body: string } & IconSource;
export type FlowStage = { title: string; body: string } & IconSource;

export type FlowScenarioTemplateContent = TemplateBase<"flow-scenario"> & {
  synopsis: {
    label: string;
    body: string;
    valueLabel: string;
    primaryValue: string;
    supportingValue: string;
  } & IconSource;
  signals: readonly FlowSignal[];
  stages: readonly [FlowStage, FlowStage];
  question: { label: string; body: string } & IconSource;
  takeaway: string;
};

export type SpectrumStage = { number: string; title: string; body: string; active: boolean; lift: number } & IconSource;

export type DecisionSpectrumTemplateContent = TemplateBase<"decision-spectrum"> & {
  stages: readonly SpectrumStage[];
  progression: readonly string[];
  takeaway: string;
};

export type HubCard = { title: string; body: string } & IconSource;

export type HubEcosystemTemplateContent = TemplateBase<"hub-ecosystem"> & {
  inventory: { heading: string; cards: readonly HubCard[] };
  core: { heading: string; label: string; emphasis: string };
  owners: { heading: string; cards: readonly HubCard[] };
  caption: readonly [string, string];
};

export type ScorecardColumn = { title: string; question: string; rows: readonly string[] };

export type ScorecardTemplateContent = TemplateBase<"scorecard"> & {
  decisionRule: { label: string; rule: string; supporting: string };
  columns: readonly ScorecardColumn[];
  highlight: { column: number; row: number };
  takeaway: string;
};

export type StructuredRequirement = { number: string; title: string; body: string; emphasis: boolean } & IconSource;
export type StructuredStep = { number: string; title: string; body: string; emphasis: boolean } & IconSource;

export type StructuredActionTemplateContent = TemplateBase<"structured-content-action"> & {
  requirements: readonly StructuredRequirement[];
  sectionLabel: string;
  steps: readonly StructuredStep[];
  takeaway: string;
  supportingTakeaway: string;
};

export type TemplateContent =
  | TitleTemplateContent
  | EndCardTemplateContent
  | ExerciseTemplateContent
  | EmbeddedAppTemplateContent
  | CompareContrastTemplateContent
  | FlowScenarioTemplateContent
  | DecisionSpectrumTemplateContent
  | HubEcosystemTemplateContent
  | ScorecardTemplateContent
  | StructuredActionTemplateContent;

export type TemplateContentOf<K extends TemplateKind> = Extract<TemplateContent, { kind: K }>;
