"use client";

import { PresentationDeck } from "@/components/presentation/PresentationDeck";
import { secureCarolinas2026Content } from "@/content/secure-carolinas-2026";
import { useSecureCarolinas2026Slides } from "./hooks/useSecureCarolinas2026Slides";

export default function SecureCarolinas2026App() {
  const content = secureCarolinas2026Content;
  const { slides, slideTitles, slideIdOrder, slideKeys } = useSecureCarolinas2026Slides({ content });

  const getFooterActLabel = (index: number) => {
    const key = slideKeys[index];

    if (key === "title" || key === "copilots" || key === "agents" || key === "attackSurface") {
      return "ACT I • SHIFT IN ATTACK SURFACE";
    }

    if (key === "question" || key === "authority" || key === "guardrails" || key === "evidence" || key === "network" || key === "transfer" || key === "success") {
      return "ACT II • DEFINE THE BOUNDARY";
    }

    if (key === "meetAgent" || key === "decisionBoard") {
      return "ACT III • PUT A REAL AGENT THROUGH THE MODEL";
    }

    if (key === "readinessStatus" || key === "productionDecision" || key === "closingCta") {
      return "ACT IV • THE PRODUCTION READINESS GATE";
    }

    return "SECURE CAROLINAS 2026";
  };

  return (
    <PresentationDeck
      dialogId="secure-carolinas-2026-slide-toc"
      slides={slides}
      slideTitles={slideTitles}
      slideIdOrder={slideIdOrder}
      navigation={content.navigation}
      footerCenterContent={
        (currentSlide) => (
          <div className="type-footer-brand flex items-center gap-2 whitespace-nowrap text-[14px] leading-none uppercase tracking-[0.12em] text-finox-gray md:text-[16px]">
            <span>Jim Markunas</span>
            <span aria-hidden="true">•</span>
            <span>Secure Carolinas 2026</span>
            <span aria-hidden="true">|</span>
            <span>{getFooterActLabel(currentSlide)}</span>
          </div>
        )
      }
    />
  );
}
