export const pdma2026ExerciseContent = {
  title: "Turn an AI idea into a productization brief.",
  subtitle: "Define the value, authority, A.G.E.N.T.S. controls, and the first backlog-ready next steps.",
  values: ["Increase revenue", "Decrease cost", "Streamline operations"] as const,
  authority: ["Observe", "Recommend", "Prepare", "Decide", "Execute"] as const,
  controls: [
    {
      letter: "A",
      name: "Authority",
      question: "How will decision rights stay explicit as the product operates?",
      descriptor: "Decision rights",
      choices: [
        { id: "human-owner", label: "Human owner decides", summary: "A named human owner retains final decision rights." },
        { id: "shared", label: "Shared authority", summary: "AI acts inside defined cases; a human owns exceptions and overrides." },
        { id: "bounded-ai", label: "Bounded AI authority", summary: "AI may decide or execute only inside explicit policy boundaries." },
      ],
    },
    {
      letter: "G",
      name: "Guardrails",
      question: "What boundary should stop the agent from creating unacceptable outcomes?",
      descriptor: "Operating limits",
      choices: [
        { id: "prohibited-actions", label: "Prohibited actions", summary: "Document actions the AI must never take." },
        { id: "approval-thresholds", label: "Approval thresholds", summary: "Require human approval when value, risk, or uncertainty crosses a threshold." },
        { id: "reversible-bounds", label: "Reversible bounds", summary: "Constrain execution to reversible, bounded actions with hard limits." },
      ],
    },
    {
      letter: "E",
      name: "Evidence",
      question: "What evidence must exist so a product team can trust and inspect the outcome?",
      descriptor: "Evidence model",
      choices: [
        { id: "source-linked", label: "Source-linked evidence", summary: "Every material recommendation cites the source evidence used." },
        { id: "logged-rationale", label: "Logged rationale", summary: "Store the evidence plus the rationale behind consequential actions." },
        { id: "audit-trail", label: "Full audit trail", summary: "Retain inputs, evidence, decisions, actions, and overrides for review." },
      ],
    },
    {
      letter: "N",
      name: "Network & Integrations",
      question: "How deeply should the product connect to operating systems?",
      descriptor: "System boundary",
      choices: [
        { id: "read-only", label: "Read-only context", summary: "Integrations expose context but cannot mutate operating systems." },
        { id: "prepare-writes", label: "Prepare writes", summary: "AI prepares changes; a human or deterministic workflow commits them." },
        { id: "scoped-write", label: "Scoped execution", summary: "AI can write only through narrowly scoped, authenticated integrations." },
      ],
    },
    {
      letter: "T",
      name: "Transfer & Escalation",
      question: "When should work leave the AI path and move to a human?",
      descriptor: "Escalation path",
      choices: [
        { id: "on-request", label: "On request", summary: "A person can take over at any point." },
        { id: "threshold", label: "Threshold escalation", summary: "Low confidence, high consequence, or exceptions trigger transfer." },
        { id: "mandatory-exception", label: "Mandatory exception route", summary: "Defined exception classes always transfer to a named human owner." },
      ],
    },
    {
      letter: "S",
      name: "Success & Accountability",
      question: "What will prove this product is producing real value after launch?",
      descriptor: "Outcome ownership",
      choices: [
        { id: "quality", label: "Quality metric", summary: "Track task quality and error rate against a defined baseline." },
        { id: "business-kpi", label: "Business KPI", summary: "Tie the product to the primary revenue, cost, or operations outcome." },
        { id: "owned-scorecard", label: "Owned scorecard", summary: "Track business KPI, quality, reliability, and a named accountable owner." },
      ],
    },
  ] as const,
} as const;

export type PdmaExerciseValue = typeof pdma2026ExerciseContent.values[number];
export type PdmaExerciseAuthority = typeof pdma2026ExerciseContent.authority[number];
export type PdmaExerciseControl = typeof pdma2026ExerciseContent.controls[number];
export type PdmaExerciseControlChoice = PdmaExerciseControl["choices"][number];
