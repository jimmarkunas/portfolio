"use client"

import {
  CoverSlide,
  EvidenceSlide,
  MetricSlide,
  PresentationDeck,
  StatementSlide,
  SystemFlowSlide,
  type PresentationSlide,
} from "@/components/pbds/presentation"

const slides: PresentationSlide[] = [
  {
    id: "cover",
    content: (
      <CoverSlide
        title="He gets there before the problem does."
        subtitle="Product. Transformation. AI. Execution."
        footer="JIM MARKUNAS · PBDS 2.0"
      />
    ),
  },
  {
    id: "statement",
    content: (
      <StatementSlide
        tone="dark"
        statement="Complexity hidden in plain sight. Outcomes in sight."
        support="The brand should make systems, constraints, decisions, and proof legible before decoration enters the room."
      />
    ),
  },
  {
    id: "metric",
    content: (
      <MetricSlide
        title="The outcome has to survive the room."
        body="Use the metric pattern when verified proof is the point—not as decoration around the story."
        metric="$120M"
        metricLabel="YoY uplift"
        metricDetail="DIRECTV product transformation"
      />
    ),
  },
  {
    id: "evidence",
    content: (
      <EvidenceSlide
        tone="dark"
        title="Make the claim. Show the receipts."
        body="Evidence is part of the composition grammar. It should never be buried behind a flourish."
        items={[
          {
            kicker: "ARCHITECTURE",
            title: "Make the system legible.",
            body: "Reduce complexity until the constraint, decision, and path forward can be seen at a glance.",
            source: "TRIPLE-LOCK TRANSFORMATION",
          },
          {
            kicker: "ORCHESTRATION",
            title: "Align people to the decision.",
            body: "Treat stakeholder alignment as part of the product system—not as meeting overhead.",
            source: "TRIPLE-LOCK TRANSFORMATION",
          },
          {
            kicker: "MOMENTUM",
            title: "Leave measurable evidence.",
            body: "Every transformation should end with objective proof that the system is materially better.",
            source: "TRIPLE-LOCK TRANSFORMATION",
          },
        ]}
      />
    ),
  },
  {
    id: "system-flow",
    content: (
      <SystemFlowSlide
        title="From hidden constraint to measurable outcome."
        steps={["Spot it", "Kill it", "Reimagine it", "Lead it", "Prove it"]}
      />
    ),
  },
]

export function PbdsDeckDemo() {
  return <PresentationDeck slides={slides} />
}
