import { useMemo, type ReactNode } from "react";

import type {
  LlmDay2026Content,
  LlmDay2026SlideKey,
} from "@/content/llmday2026";

import {
  SlideAiAmplified,
  SlideClay,
  SlideComplianceWorkflow,
  SlideDirectvManual,
  SlideFlowchart,
  SlideOkGo,
  SlidePlaceholder,
  SlideRubeGoldberg,
  SlideSystemArchitecture,
} from "../components/slides/case-study-slides";
import { SlideClose, SlideDesignPattern } from "../components/slides/closing-slides";
import {
  SlideAgenda,
  SlideFrame,
  SlideGoal,
  SlideHero,
  SlideMagicRequirements,
  SlideWho,
} from "../components/slides/intro-slides";
import {
  SlideDoThis,
  SlideDontDoThis,
  SlideExamplesIntro,
  SlideHowToDoThis,
} from "../components/slides/workflow-slides";
import { buildLlmDay2026SlideRegistry } from "../llmday2026SlideRegistry";

type UseLlmDay2026SlidesParams = {
  content: LlmDay2026Content;
};

function assertNever(value: never): never {
  throw new Error(`Unhandled slide key: ${String(value)}`);
}

function renderSlide(
  key: LlmDay2026SlideKey,
  content: LlmDay2026Content,
): ReactNode {
  const slideContent = content.slides;

  switch (key) {
    case "hero":
      return <SlideHero slide={slideContent.hero} />;
    case "agenda":
      return <SlideAgenda slide={slideContent.agenda} />;
    case "who":
      return <SlideWho slide={slideContent.who} />;
    case "frame":
      return <SlideFrame slide={slideContent.frame} />;
    case "magicRequirements":
      return <SlideMagicRequirements slide={slideContent.magicRequirements} />;
    case "goal":
      return <SlideGoal slide={slideContent.goal} />;
    case "dontDoThis":
      return <SlideDontDoThis slide={slideContent.dontDoThis} />;
    case "doThis":
      return <SlideDoThis slide={slideContent.doThis} />;
    case "howToDoThis":
      return <SlideHowToDoThis slide={slideContent.howToDoThis} />;
    case "examplesIntro":
      return <SlideExamplesIntro slide={slideContent.examplesIntro} />;
    case "clay":
      return <SlideClay slide={slideContent.clay} />;
    case "systemArchitecture":
      return <SlideSystemArchitecture slide={slideContent.systemArchitecture} />;
    case "placeholderTwo":
      return (
        <SlidePlaceholder
          title={slideContent.placeholderTwo.title}
          subtitle={slideContent.placeholderTwo.subtitle}
        />
      );
    case "placeholderGeneric":
      return (
        <SlidePlaceholder
          title={slideContent.placeholderGeneric.title}
          subtitle={slideContent.placeholderGeneric.subtitle}
        />
      );
    case "complianceWorkflow":
      return <SlideComplianceWorkflow slide={slideContent.complianceWorkflow} />;
    case "okgo":
      return <SlideOkGo slide={slideContent.okgo} />;
    case "flowchartManual":
      return (
        <SlideFlowchart
          slide={slideContent.flowchartManual}
          automated={false}
          diagramCopy={content.diagrams.legacyRevenueFlow}
        />
      );
    case "flowchartAutomated":
      return (
        <SlideFlowchart
          slide={slideContent.flowchartAutomated}
          automated
          diagramCopy={content.diagrams.legacyRevenueFlow}
        />
      );
    case "directvManual":
      return <SlideDirectvManual slide={slideContent.directvManual} />;
    case "rubeGoldberg":
      return <SlideRubeGoldberg slide={slideContent.rubeGoldberg} />;
    case "aiAmplified":
      return <SlideAiAmplified slide={slideContent.aiAmplified} />;
    case "placeholderEight":
      return (
        <SlidePlaceholder
          title={slideContent.placeholderEight.title}
          subtitle={slideContent.placeholderEight.subtitle}
        />
      );
    case "designPattern":
      return <SlideDesignPattern slide={slideContent.designPattern} />;
    case "close":
      return <SlideClose slide={slideContent.close} />;
    default:
      return assertNever(key);
  }
}

export function useLlmDay2026Slides({ content }: UseLlmDay2026SlidesParams) {
  const slideRegistry = useMemo(
    () => buildLlmDay2026SlideRegistry(content.slides, content.slideOrder),
    [content.slideOrder, content.slides],
  );

  const slideIdOrder = useMemo(
    () => slideRegistry.map((slide) => slide.id),
    [slideRegistry],
  );

  const slideTitles = useMemo(
    () => slideRegistry.map((slide) => slide.title),
    [slideRegistry],
  );

  const slides = useMemo(
    () =>
      slideRegistry.map((slide) => renderSlide(slide.key, content)),
    [content, slideRegistry],
  );

  return {
    slides,
    slideTitles,
    slideIdOrder,
  };
}
