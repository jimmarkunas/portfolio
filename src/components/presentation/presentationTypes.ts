/** Shared semantic plane for PBDS presentations. */
export const PRESENTATION_LOGICAL_CANVAS = { width: 1920, height: 1080 } as const;

/** Serializable title data with compatibility fields for existing accepted layouts. */
export type PresentationTitleConfig = {
  white?: string; magenta?: string; subtitle?: string; size: number; leading?: number; tracking?: number;
  subtitleSize?: number; subtitleLeading?: number; subtitleOffset?: number; subtitleX?: number; subtitleTracking?: number;
  exactSubtitleSize?: boolean; titleColor?: string; subtitleColor?: string; magentaRowShift?: number; magentaX?: number; sameRow?: boolean; plusMagenta?: boolean;
  /** Characters of `white` drawn in magenta. */
  magentaGlyphs?: string;
};

export type PresentationHeaderLabels = readonly [string, string, string];
export type PresentationSlideId = string;
export type PresentationSlideChrome = {
  tocTitle: string;
  headerLabels: PresentationHeaderLabels;
  footerLabel: string;
  title: PresentationTitleConfig;
};

export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | readonly JsonValue[] | { readonly [key: string]: JsonValue };

export type PresentationTemplateKind =
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
export type TemplateKind = PresentationTemplateKind;

export type PresentationCompositionSpec =
  | { readonly type: "template"; readonly templateId: PresentationTemplateKind; readonly content: JsonValue }
  | { readonly type: "deck-local"; readonly compositionId: string; readonly content: JsonValue };

export type PresentationSlideSpec = {
  readonly id: PresentationSlideId;
  readonly tocTitle: string;
  readonly headerLabels: PresentationHeaderLabels;
  readonly footerLabel: string;
  readonly title: PresentationTitleConfig;
  readonly composition: PresentationCompositionSpec;
  readonly decoration?: { readonly recipeId: string };
  readonly assetIds?: readonly string[];
  readonly routeLinks?: readonly { readonly label: string; readonly href: string }[];
  readonly slots?: Readonly<Record<string, string>>;
};

export type PresentationSpec = {
  readonly schemaVersion: 1;
  readonly id: string;
  readonly chromeId: string;
  readonly metadata: { readonly title: string; readonly brandLabel: string };
  readonly navigationCopyId: string;
  readonly slides: readonly PresentationSlideSpec[];
};

/** Decoration is selected by a consumer-owned registered recipe ID. */
export type PresentationDecorationRecipeId = string;
export type DecorativeVariant = PresentationDecorationRecipeId;

/** Shared chrome semantics for one template slide. */
export type TemplateChrome = {
  tocTitle: string;
  headerLabels: PresentationHeaderLabels;
  footerLabel: string;
  title: PresentationTitleConfig;
};

type TemplateBase<K extends TemplateKind> = {
  kind: K;
  chrome: TemplateChrome;
  decorativeVariant: DecorativeVariant;
};

export type PresentationIconId =
  | "bar-chart-3" | "box" | "chart-column" | "check" | "circle-help" | "clipboard-list"
  | "database" | "eye" | "file-text" | "git-branch" | "headset" | "layers-3"
  | "lightbulb" | "link" | "settings" | "shield" | "user-round" | "users-round" | "zap";
export type IconSource = { iconId: PresentationIconId } | { src: string };

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
  question: { label: string; body: string; followUp?: string } & IconSource;
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
