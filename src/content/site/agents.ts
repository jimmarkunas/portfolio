export const agentsContent = {
  meta: {
    title: "A.G.E.N.T.S. Enterprise Agent Operating Model | Jim Markunas",
    description:
      "A.G.E.N.T.S. is Jim Markunas’ enterprise AI agent operating model for defining authority, guardrails, evidence, integrations, escalation, business value, and accountability.",
  },
  hero: {
    eyebrow: "ENTERPRISE AI AGENT OPERATING MODEL",
    title: "A.G.E.N.T.S.",
    subhead:
      "A practical operating model for moving enterprise AI agents from experimentation into governed production.",
    attribution: "Created by Jim Markunas",
    paragraphs: [
      "Enterprise agents create a different product problem from chatbots and conventional automation.",
      "Once software can evaluate changing conditions, choose among permitted actions, interact with business systems, and create real-world consequences, model capability is only part of the design problem.",
      "A.G.E.N.T.S. provides six operating questions for defining that responsibility before an agent is trusted with real work.",
    ],
    quote: "A chatbot can give you an answer. An agent can create a consequence.",
  },
  questions: [
    ["A", "Authority", "What may the agent do?", "Define its authority action by action: observe, recommend, prepare, decide, and execute."],
    ["G", "Guardrails", "What must constrain it?", "Define the policies, approvals, limits, prohibited actions, and hard stops that bound its authority."],
    ["E", "Evidence", "How will we know what it did?", "Preserve enough operational evidence to reconstruct consequential decisions and actions."],
    ["N", "Network & Integrations", "What systems may it touch?", "Define the systems, APIs, identities, data, permissions, and capabilities the agent may use."],
    ["T", "Transfer & Escalation", "When does a person take over?", "Define when the agent must stop, where the work goes, what context transfers, and whether the agent may resume."],
    ["S", "Success & Accountability", "Did it create value — and who owns the result?", "Measure the business outcome and identify the human owner accountable for that outcome."],
  ],
  stages: [
    ["FIND", "Identify the business opportunity, current process, relevant systems, friction, and potential value."],
    ["DEFINE", "Define the agent’s objective, information needs, decisions, actions, systems, and expected outcome."],
    ["GOVERN", "Apply the six A.G.E.N.T.S. controls before consequential authority is delegated."],
    ["PROVE", "Measure whether the agent produced the business result it was designed to improve."],
  ],
  authority: ["OBSERVE", "RECOMMEND", "PREPARE", "DECIDE", "EXECUTE"],
  evidence: ["SOURCE", "STATE", "CONSTRAINT", "DECISION", "ACTION", "OVERRIDE", "OUTCOME"],
  rules: [
    ["Refund ≤ $50", "May execute"],
    ["Refund > $50", "Prepare for human approval"],
    ["Payment already reversed", "Never refund again"],
    ["Conflicting payment state", "Stop and escalate"],
  ],
  valueCategories: ["Increase ROI / Revenue", "Decrease Cost", "Operational Efficiency / Streamlining"],
  finalQuestions: [
    "A — What may it do?",
    "G — What must constrain it?",
    "E — How will we know what it did?",
    "N — What systems may it touch?",
    "T — When does a person take over?",
    "S — Did it create value, and who owns the result?",
  ],
} as const
