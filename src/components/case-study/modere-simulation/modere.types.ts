export type DecisionOption = {
  label: string;
  description: string;
  outcome: string;
  revenueImpact: number;
  isCorrect: boolean;
  politicsQuote: string;
};

export type Decision = {
  id: string;
  title: string;
  scenario: string;
  options: DecisionOption[];
};

export type HistoryItem = DecisionOption & {
  stepTitle: string;
};

export type ResultsView = "outcome" | "architecture" | "analysis";

export type ModereSimulationProps = {
  className?: string;
  ctaHref?: string;
};

export type ResultTab = {
  value: ResultsView;
  label: string;
};

export type ArchitectureNode = {
  eyebrow: string;
  label: string;
};
