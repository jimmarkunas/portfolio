import type { SecureCarolinas2026Content, SecureCarolinas2026SlideMeta } from "./types";
import { secureCarolinas2026SlideOrder } from "./types";

const slide = (
  id: string,
  title: string,
  subtitle: string,
  act: SecureCarolinas2026SlideMeta["act"],
  actLabel: string,
): SecureCarolinas2026SlideMeta => ({ id, title, subtitle, act, actLabel });

const ACT_I = "ACT I — Shift in Attack Surface";
const ACT_II = "ACT II — A.G.E.N.T.S. Operating Model";
const ACT_III = "ACT III — Put a Real Agent Through the Model";
const ACT_IV = "ACT IV — The Production Readiness Gate";

export const secureCarolinas2026Content: SecureCarolinas2026Content = {
  navigation: {
    previousAriaLabel: "Previous slide",
    nextAriaLabel: "Next slide",
    openTocAriaLabel: "Open slide table of contents",
    toggleFullscreenAriaLabel: "Toggle fullscreen",
    tocDialogAriaLabel: "Slide table of contents",
    tocTitle: "Slide Table of Contents",
    closeButtonLabel: "Close",
  },
  slideOrder: secureCarolinas2026SlideOrder,
  slides: {
    title: slide("title", "Is Your Enterprise Ready to Put AI Into Production?", "When Agentic AI Becomes an Attack Surface", "ACT_I", ACT_I),
    copilots: slide("copilots", "Copilots Were Mostly an Information Problem", "Traditional generative AI mostly produced outputs for humans to evaluate.", "ACT_I", ACT_I),
    agents: slide("agents", "Agents Move the Execution Boundary", "Autonomous execution shifts the model from advisor to operator.", "ACT_I", ACT_I),
    attackSurface: slide("attack-surface", "Your Attack Surface Is Now a Business Process", "Security moves from perimeter defense to governed execution logic.", "ACT_I", ACT_I),
    question: slide("question-before-production", "The Question Before Production", "What must be true before we allow an AI agent to act on behalf of the enterprise?", "ACT_II", ACT_II),
    authority: slide("authority", "A — Authority", "What is this agent actually allowed to decide and do?", "ACT_II", ACT_II),
    guardrails: slide("guardrails", "G — Guardrails", "Under what conditions may the agent exercise that authority?", "ACT_II", ACT_II),
    evidence: slide("evidence", "E — Evidence", "Can we reconstruct what happened?", "ACT_II", ACT_II),
    network: slide("network-integrations", "N — Network & Integrations", "What can the agent reach — and therefore affect?", "ACT_II", ACT_II),
    transfer: slide("transfer-escalation", "T — Transfer & Escalation", "What happens when the agent should stop?", "ACT_II", ACT_II),
    success: slide("success-accountability", "S — Success & Accountability", "How do we know this agent should continue operating — and who owns the result?", "ACT_II", ACT_II),
    meetAgent: slide("meet-agent", "Meet the Agent: Customer Order Exception Agent", "High volume, repetitive decisions, directly addresses customer wait times.", "ACT_III", ACT_III),
    decisionBoard: slide("decision-board", "Live Decision Board: Customer Order Exception Agent", "Applying the 6 pillars transforms ambiguous autonomy into bounded operations.", "ACT_III", ACT_III),
    readinessStatus: slide("readiness-status", "Defined. Partial. Unclear.", "Every A.G.E.N.T.S. domain receives an unambiguous readiness status.", "ACT_IV", ACT_IV),
    productionDecision: slide("production-decision", "The Production Decision", "If any A.G.E.N.T.S. control is unclear, the agent is not ready.", "ACT_IV", ACT_IV),
    closingCta: slide(
      "closing-cta",
      "Put A.G.E.N.T.S. to Work.",
      "Free enterprise AI operating model + production readiness check.",
      "ACT_IV",
      ACT_IV,
    ),
  },
};
