import type { ReactNode } from "react";
import type { TemplateContent } from "@/components/presentation/presentationTypes";
import { CompareContrastTemplate } from "./CompareContrastTemplate";
import { DecisionSpectrumTemplate } from "./DecisionSpectrumTemplate";
import { EmbeddedAppTemplate } from "./EmbeddedAppTemplate";
import { EndCardTemplate } from "./EndCardTemplate";
import { ExerciseTemplate } from "./ExerciseTemplate";
import { FlowScenarioTemplate } from "./FlowScenarioTemplate";
import { HubEcosystemTemplate } from "./HubEcosystemTemplate";
import { ScorecardTemplate } from "./ScorecardTemplate";
import { StructuredActionTemplate } from "./StructuredActionTemplate";
import { TitleTemplate } from "./TitleTemplate";

export function renderTemplate(content: TemplateContent, { app }: { app?: ReactNode } = {}): ReactNode {
  switch (content.kind) {
    case "title": return <TitleTemplate content={content} />;
    case "end-card": return <EndCardTemplate content={content} />;
    case "exercise": return <ExerciseTemplate content={content} />;
    case "embedded-app": return <EmbeddedAppTemplate content={content} app={app} />;
    case "compare-contrast": return <CompareContrastTemplate content={content} />;
    case "flow-scenario": return <FlowScenarioTemplate content={content} />;
    case "decision-spectrum": return <DecisionSpectrumTemplate content={content} />;
    case "hub-ecosystem": return <HubEcosystemTemplate content={content} />;
    case "scorecard": return <ScorecardTemplate content={content} />;
    case "structured-content-action": return <StructuredActionTemplate content={content} />;
  }
}
