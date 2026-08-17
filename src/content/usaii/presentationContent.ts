import type { UsaiiContent } from "./types";
import { usaiiSlideOrder } from "./types";

const slide = (id: string, title: string, image: string) => ({ id, title, image });

export const usaiiPresentationContent: UsaiiContent = {
  navigation: {
    previousAriaLabel: "Previous slide", nextAriaLabel: "Next slide", openTocAriaLabel: "Open slide table of contents",
    toggleFullscreenAriaLabel: "Toggle fullscreen", tocDialogAriaLabel: "Slide table of contents", tocTitle: "Slide Table of Contents", closeButtonLabel: "Close",
  },
  slideOrder: usaiiSlideOrder,
  slides: {
    title: slide("title", "How to Turn AI Agents Into Governed Digital Products", "/usaii/reference-v2/slide01.png"),
    agentDefinition: slide("agent-definition", "What Makes an Enterprise AI Agent?", "/usaii/reference-v2/slide02.png"),
    operatingModel: slide("operating-model", "The Enterprise Agent Operating Model", "/usaii/reference-v2/slide03.png"),
    authorityLadder: slide("authority-ladder", "Authority Is a Ladder, Not a Toggle", "/usaii/reference-v2/slide04.png"),
    evidenceAuditability: slide("evidence-auditability", "Evidence & Auditability", "/usaii/reference-v2/slide05.png"),
    enterpriseIntegration: slide("enterprise-integration", "Integration in the Real Enterprise", "/usaii/reference-v2/slide06.png"),
    transferEscalation: slide("transfer-escalation", "Transfer & Escalation", "/usaii/reference-v2/slide07.png"),
    valueMetrics: slide("value-metrics", "How to Measure Real Value", "/usaii/reference-v2/slide08.png"),
    accountability: slide("accountability", "Who Is Accountable?", "/usaii/reference-v2/slide09.png"),
    productionGate: slide("production-gate", "Production-Ready Agent Checklist", "/usaii/reference-v2/slide10.png"),
  },
};
