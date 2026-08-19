import { useMemo, type ReactNode } from "react";

import type {
  SecureCarolinas2026Content,
  SecureCarolinas2026SlideKey,
} from "@/content/secure-carolinas-2026";

import {
  Slide01Title,
  Slide02Copilots,
  Slide03Agents,
  Slide04AttackSurface,
} from "../components/slides/Act1Slides";
import { Slide05Question } from "../components/slides/act2/Slide05Question";
import { Slide06Authority } from "../components/slides/act2/Slide06Authority";
import { Slide07Guardrails } from "../components/slides/act2/Slide07Guardrails";
import { Slide08Evidence } from "../components/slides/act2/Slide08Evidence";
import { Slide09Network } from "../components/slides/act2/Slide09Network";
import { Slide10Transfer } from "../components/slides/act2/Slide10Transfer";
import { Slide11Success } from "../components/slides/act2/Slide11Success";
import {
  Slide12MeetAgent,
  Slide13DecisionBoard,
} from "../components/slides/Act3Slides";
import {
  Slide14DefinedPartialUnclear,
  Slide15ProductionDecision,
} from "../components/slides/Act4Slides";
import { buildSecureCarolinas2026SlideRegistry } from "../secureCarolinas2026SlideRegistry";

function assertNever(value: never): never {
  throw new Error(`Unhandled Secure Carolinas slide key: ${String(value)}`);
}

function renderSlide(key: SecureCarolinas2026SlideKey): ReactNode {
  switch (key) {
    case "title": return <Slide01Title />;
    case "copilots": return <Slide02Copilots />;
    case "agents": return <Slide03Agents />;
    case "attackSurface": return <Slide04AttackSurface />;
    case "question": return <Slide05Question />;
    case "authority": return <Slide06Authority />;
    case "guardrails": return <Slide07Guardrails />;
    case "evidence": return <Slide08Evidence />;
    case "network": return <Slide09Network />;
    case "transfer": return <Slide10Transfer />;
    case "success": return <Slide11Success />;
    case "meetAgent": return <Slide12MeetAgent />;
    case "decisionBoard": return <Slide13DecisionBoard />;
    case "readinessStatus": return <Slide14DefinedPartialUnclear />;
    case "productionDecision": return <Slide15ProductionDecision />;
    default: return assertNever(key);
  }
}

export function useSecureCarolinas2026Slides({
  content,
}: {
  content: SecureCarolinas2026Content;
}) {
  const registry = useMemo(
    () => buildSecureCarolinas2026SlideRegistry(content.slides, content.slideOrder),
    [content.slideOrder, content.slides],
  );

  const slides = useMemo(() => registry.map(({ key }) => renderSlide(key)), [registry]);

  return {
    slides,
    slideTitles: registry.map((item) => item.title),
    slideIdOrder: registry.map((item) => item.id),
  };
}
