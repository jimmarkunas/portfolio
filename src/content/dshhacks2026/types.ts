import type { LlmDay2026Content } from "@/content/llmday2026";
import type { PresentationBrandLogo, PresentationNavigationCopy } from "@/lib/presentation";

export interface BulletInsightEntry {
  id: string;
  title: string;
  description: string;
}

export interface LoopStepEntry {
  id: string;
  label: string;
  description: string;
}

export interface SequenceStepEntry {
  id: string;
  step: string;
  title: string;
  description: string;
}

export interface HypothesisEntry {
  id: string;
  name: string;
  description: string;
  status: "PASS" | "FAIL";
}

export interface SpectrumExampleEntry {
  id: string;
  level: string;
  quote: string;
  badge: string;
  tone: "red" | "amber" | "emerald";
}

export interface FormulaPartEntry {
  id: string;
  label: string;
  text: string;
  tone: "emerald" | "blue" | "indigo" | "amber";
}

export interface MetricEntry {
  id: string;
  value: string;
  label: string;
  tone: "white" | "red" | "amber" | "emerald";
  featured?: boolean;
}

export interface LegendEntry {
  id: string;
  label: string;
  tone: "red" | "amber" | "emerald" | "indigo";
}

export interface HomeworkRuleEntry {
  id: string;
  label: string;
  description: string;
}

export interface QuestionEntry {
  id: string;
  text: string;
}

export type SharedRubeGoldbergSlide = LlmDay2026Content["slides"]["rubeGoldberg"];
export type SharedAiAmplifiedSlide = LlmDay2026Content["slides"]["aiAmplified"];

export interface DshHacks2026Slides {
  hero: {
    id: string;
    title: string;
    eyebrow: string;
    titleLead: string;
    titleMain: string;
    subtitle: string;
    presenter: string;
    venue: string;
    website: string;
  };
  wrongThing: {
    id: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    bullets: BulletInsightEntry[];
    loopSteps: LoopStepEntry[];
    loopOutcome: string;
    loopCaption: string;
  };
  ideaLast: {
    id: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    wrongSequenceTitle: string;
    wrongSequenceSubtitle: string;
    wrongSteps: SequenceStepEntry[];
    wrongFooter: string;
    rightSequenceTitle: string;
    rightSequenceSubtitle: string;
    rightSteps: SequenceStepEntry[];
    rightFooter: string;
    closingPrefix: string;
    closingBadge: string;
  };
  focusGroup: {
    id: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    bullets: BulletInsightEntry[];
    outerRingLabel: string;
    outerRingCaption: string;
    middleRingLabel: string;
    middleRingCaption: string;
    centerLabel: string;
    centerCaption: string;
    arrowLabel: string;
  };
  painProduct: {
    id: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    bullets: BulletInsightEntry[];
    lowSignalLabel: string;
    highSignalLabel: string;
    examples: SpectrumExampleEntry[];
  };
  designBrief: {
    id: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    bullets: BulletInsightEntry[];
    complaintLabel: string;
    complaintQuote: string;
    complaintStatus: string;
    briefLabel: string;
    briefParts: FormulaPartEntry[];
    briefStatus: string;
  };
  directvCaseStudy: {
    id: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    metrics: MetricEntry[];
    bullets: BulletInsightEntry[];
  };
  rubeGoldberg: SharedRubeGoldbergSlide;
  aiAmplified: SharedAiAmplifiedSlide;
  cpsCaseStudy: {
    id: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    metrics: MetricEntry[];
    bullets: BulletInsightEntry[];
  };
  placeholder: {
    id: string;
    title: string;
    subtitle: string;
  };
  ideasPlural: {
    id: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    bullets: BulletInsightEntry[];
    rootLabel: string;
    rootTitle: string;
    hypotheses: HypothesisEntry[];
    footerLabel: string;
  };
  technologyConstraint: {
    id: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    bullets: BulletInsightEntry[];
    correctLabel: string;
    correctSteps: string[];
    correctCaption: string;
    incorrectLabel: string;
    incorrectSteps: string[];
    incorrectCaption: string;
  };
  realProductsSequence: {
    id: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    stages: SequenceStepEntry[];
    legends: LegendEntry[];
  };
  homework: {
    id: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    rules: HomeworkRuleEntry[];
    quote: string;
    cardEyebrow: string;
    cardTitle: string;
    questions: QuestionEntry[];
    footerLeft: string;
    footerRight: string;
  };
}

export type DshHacks2026SlideKey = keyof DshHacks2026Slides;

export interface DshHacks2026Content {
  brandLogo: PresentationBrandLogo;
  navigation: PresentationNavigationCopy;
  slideOrder: DshHacks2026SlideKey[];
  slides: DshHacks2026Slides;
}
