import type { ReactNode } from "react";
import type {
  CompareContrastTemplateContent, DecisionSpectrumTemplateContent, EmbeddedAppTemplateContent,
  EndCardTemplateContent, ExerciseTemplateContent, FlowScenarioTemplateContent,
  HubEcosystemTemplateContent, PresentationTemplateKind, ScorecardTemplateContent,
  StructuredActionTemplateContent, TemplateContent, TitleTemplateContent,
} from "./presentationTypes";
import { CompareContrastTemplate } from "./templates/CompareContrastTemplate";
import { DecisionSpectrumTemplate } from "./templates/DecisionSpectrumTemplate";
import { EmbeddedAppTemplate } from "./templates/EmbeddedAppTemplate";
import { EndCardTemplate } from "./templates/EndCardTemplate";
import { ExerciseTemplate } from "./templates/ExerciseTemplate";
import { FlowScenarioTemplate } from "./templates/FlowScenarioTemplate";
import { HubEcosystemTemplate } from "./templates/HubEcosystemTemplate";
import { ScorecardTemplate } from "./templates/ScorecardTemplate";
import { StructuredActionTemplate } from "./templates/StructuredActionTemplate";
import { TitleTemplate } from "./templates/TitleTemplate";

export type SharedTemplateRenderOptions = { app?: ReactNode };
type Renderer = (content: TemplateContent, options: SharedTemplateRenderOptions) => ReactNode;

/** The one executable registry for the ten shared presentation templates. */
export const presentationTemplateRegistry: Readonly<Record<PresentationTemplateKind, Renderer>> = {
  title: (content) => <TitleTemplate content={content as TitleTemplateContent} />,
  "end-card": (content) => <EndCardTemplate content={content as EndCardTemplateContent} />,
  exercise: (content) => <ExerciseTemplate content={content as ExerciseTemplateContent} />,
  "embedded-app": (content, { app }) => <EmbeddedAppTemplate content={content as EmbeddedAppTemplateContent} app={app ?? null} />,
  "compare-contrast": (content) => <CompareContrastTemplate content={content as CompareContrastTemplateContent} />,
  "flow-scenario": (content) => <FlowScenarioTemplate content={content as FlowScenarioTemplateContent} />,
  "decision-spectrum": (content) => <DecisionSpectrumTemplate content={content as DecisionSpectrumTemplateContent} />,
  "hub-ecosystem": (content) => <HubEcosystemTemplate content={content as HubEcosystemTemplateContent} />,
  scorecard: (content) => <ScorecardTemplate content={content as ScorecardTemplateContent} />,
  "structured-content-action": (content) => <StructuredActionTemplate content={content as StructuredActionTemplateContent} />,
};

export function renderPresentationTemplate(templateId: PresentationTemplateKind, content: TemplateContent, options: SharedTemplateRenderOptions = {}) {
  return presentationTemplateRegistry[templateId](content, options);
}
