export interface ImageEntry {
  id: string;
  src: string;
  alt: string;
}

export interface LabeledTextEntry {
  id: string;
  text: string;
}

export interface NumberedTextEntry {
  id: string;
  label: string;
}

export interface StatEntry {
  id: string;
  label: string;
  sub: string;
}

export interface RequirementEntry {
  id: string;
  label: string;
  title: string;
  desc: string;
}

export interface WorkflowCardEntry {
  id: string;
  title: string;
  subtitle: string;
}

export interface RoleEntry {
  id: string;
  title: string;
  tag: string;
  desc: string;
}

export interface FlowNodeEntry {
  id: string;
  step: string;
  title: string;
  sub: string;
  emphasized?: boolean;
}

export interface ComplianceStepEntry {
  id: string;
  type: "AI AGENT" | "PERSON";
  title: string;
  desc: string;
}

export interface EngineModuleEntry {
  id: string;
  label: string;
}

export interface AgentOpportunityEntry {
  id: string;
  title: string;
  desc: string;
  tone: "blue" | "violet" | "green";
}

export interface ComplianceLegendEntry {
  id: string;
  label: string;
}

export interface ClayDiagramCopy {
  label: string;
  state: string;
  description: string;
}

export interface RoiWorkflowDiagramCopy {
  platformColumnLabel: string;
  agentColumnLabel: string;
  outputColumnLabel: string;
  outcomeLabel: string;
}

export interface LegacyFlowNodeEntry {
  id: string;
  label: string;
}

export interface LegacyFlowDiagramCopy {
  nodes: LegacyFlowNodeEntry[];
  automationTargetNodeIds: string[];
  automationLegendTitle: string;
  automationLegendDescription: string;
  peopleLegendTitle: string;
  peopleLegendDescription: string;
}

export interface AgentWorkflowRequirementEntry {
  id: string;
  label: string;
  lead: string;
  detail: string;
  caption?: string;
}

export interface AgentWorkflowDiagramCopy {
  step01Label: string;
  step01Title: string;
  step02Label: string;
  step02Title: string;
  step02Subtitle: string;
  step03Label: string;
  step03Title: string;
  step03Subtitle: string;
  pathALabel: string;
  pathATitle: string;
  pathBLabel: string;
  pathBTitle: string;
  pathBSubtitle: string;
  step04Label: string;
  step04Title: string;
  step04Subtitle: string;
  requirements: AgentWorkflowRequirementEntry[];
}

export interface LlmDay2026Slides {
  hero: {
    id: string;
    title: string;
    highlight: string;
    eyebrow: string;
    presenter: string;
    sponsor: string;
  };
  agenda: {
    id: string;
    title: string;
    subtitle: string;
    whyCareLabel: string;
    bullets: LabeledTextEntry[];
    whyCare: NumberedTextEntry[];
  };
  who: {
    id: string;
    title: string;
    subtitle: string;
    companies: {
      label: string;
      logos: ImageEntry[];
    };
    stats: StatEntry[];
  };
  frame: {
    id: string;
    title: string;
    copilotTitle: string;
    agentTitle: string;
    copilot: string[];
    agent: string[];
    kickerPrefix: string;
    kickerHighlight: string;
  };
  magicRequirements: {
    id: string;
    title: string;
    subtitle: string;
    items: RequirementEntry[];
  };
  goal: {
    id: string;
    title: string;
    line: string;
  };
  dontDoThis: {
    id: string;
    title: string;
    subtitle: string;
    items: LabeledTextEntry[];
    footer: string;
  };
  doThis: {
    id: string;
    title: string;
    subtitle: string;
    items: LabeledTextEntry[];
    footer: string;
  };
  howToDoThis: {
    id: string;
    title: string;
    subtitle: string;
    platformCards: WorkflowCardEntry[];
    agentCards: WorkflowCardEntry[];
    outputCards: WorkflowCardEntry[];
    diagram: RoiWorkflowDiagramCopy;
    guardrailLabel: string;
    footer: string;
  };
  examplesIntro: {
    id: string;
    title: string;
    line: string;
    subline: string;
  };
  clay: {
    id: string;
    title: string;
    subtitle: string;
    caption: string;
    diagram: ClayDiagramCopy;
  };
  systemArchitecture: {
    id: string;
    title: string;
    flowLabel: string;
    roles: RoleEntry[];
    flowNodes: FlowNodeEntry[];
  };
  placeholderTwo: {
    id: string;
    title: string;
    subtitle: string;
  };
  placeholderGeneric: {
    id: string;
    title: string;
    subtitle: string;
  };
  complianceWorkflow: {
    id: string;
    title: string;
    subtitle: string;
    steps: ComplianceStepEntry[];
    legend: ComplianceLegendEntry[];
  };
  okgo: {
    id: string;
    title: string;
    subtitle: string;
    caption: string;
    diagram: ClayDiagramCopy;
  };
  flowchartManual: {
    id: string;
    title: string;
    subtitle: string;
  };
  flowchartAutomated: {
    id: string;
    title: string;
    subtitle: string;
  };
  directvManual: {
    id: string;
    title: string;
    subtitle: string;
    modules: EngineModuleEntry[];
    moduleStatusLabel: string;
    quote: string;
  };
  rubeGoldberg: {
    id: string;
    title: string;
    subtitle: string;
    caption: string;
    chips: string[];
  };
  aiAmplified: {
    id: string;
    title: string;
    subtitle: string;
    agents: AgentOpportunityEntry[];
    footer: string;
  };
  placeholderEight: {
    id: string;
    title: string;
    subtitle: string;
  };
  designPattern: {
    id: string;
    title: string;
    footer: string;
    diagram: AgentWorkflowDiagramCopy;
  };
  close: {
    id: string;
    title: string;
    introPrefix: string;
    introHighlight: string;
    skillsIntro: string;
    points: string[];
    quote: string;
    footerLeft: string;
    footerRight: string;
  };
}

export interface LlmDay2026Content {
  brandLogo: ImageEntry;
  navigation: {
    previousAriaLabel: string;
    nextAriaLabel: string;
    openTocAriaLabel: string;
    toggleFullscreenAriaLabel: string;
    tocDialogAriaLabel: string;
    tocTitle: string;
    closeButtonLabel: string;
  };
  diagrams: {
    legacyRevenueFlow: LegacyFlowDiagramCopy;
  };
  slideRegistry: {
    id: string;
    title: string;
  }[];
  slides: LlmDay2026Slides;
}
