import { useMemo, type ReactNode } from "react";

import type { LlmDay2026Content } from "@/content/llmday2026";

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

type UseLlmDay2026SlidesParams = {
  content: LlmDay2026Content;
};

export function useLlmDay2026Slides({
  content,
}: UseLlmDay2026SlidesParams) {
  const slideContent = content.slides;
  const slideRegistry = content.slideRegistry;

  const slideIdOrder = useMemo(
    () => slideRegistry.map((slide) => slide.id),
    [slideRegistry],
  );

  const slideTitles = useMemo(
    () => slideRegistry.map((slide) => slide.title),
    [slideRegistry],
  );

  const slideElementsById = useMemo<Record<string, ReactNode>>(
    () => ({
      [slideContent.hero.id]: <SlideHero key={slideContent.hero.id} slide={slideContent.hero} />,
      [slideContent.agenda.id]: <SlideAgenda key={slideContent.agenda.id} slide={slideContent.agenda} />,
      [slideContent.who.id]: <SlideWho key={slideContent.who.id} slide={slideContent.who} />,
      [slideContent.frame.id]: <SlideFrame key={slideContent.frame.id} slide={slideContent.frame} />,
      [slideContent.magicRequirements.id]: (
        <SlideMagicRequirements
          key={slideContent.magicRequirements.id}
          slide={slideContent.magicRequirements}
        />
      ),
      [slideContent.goal.id]: <SlideGoal key={slideContent.goal.id} slide={slideContent.goal} />,
      [slideContent.dontDoThis.id]: (
        <SlideDontDoThis key={slideContent.dontDoThis.id} slide={slideContent.dontDoThis} />
      ),
      [slideContent.doThis.id]: <SlideDoThis key={slideContent.doThis.id} slide={slideContent.doThis} />,
      [slideContent.howToDoThis.id]: (
        <SlideHowToDoThis key={slideContent.howToDoThis.id} slide={slideContent.howToDoThis} />
      ),
      [slideContent.examplesIntro.id]: (
        <SlideExamplesIntro key={slideContent.examplesIntro.id} slide={slideContent.examplesIntro} />
      ),
      [slideContent.clay.id]: <SlideClay key={slideContent.clay.id} slide={slideContent.clay} />,
      [slideContent.systemArchitecture.id]: (
        <SlideSystemArchitecture key={slideContent.systemArchitecture.id} slide={slideContent.systemArchitecture} />
      ),
      [slideContent.placeholderTwo.id]: (
        <SlidePlaceholder
          key={slideContent.placeholderTwo.id}
          title={slideContent.placeholderTwo.title}
          subtitle={slideContent.placeholderTwo.subtitle}
        />
      ),
      [slideContent.placeholderGeneric.id]: (
        <SlidePlaceholder
          key={slideContent.placeholderGeneric.id}
          title={slideContent.placeholderGeneric.title}
          subtitle={slideContent.placeholderGeneric.subtitle}
        />
      ),
      [slideContent.complianceWorkflow.id]: (
        <SlideComplianceWorkflow key={slideContent.complianceWorkflow.id} slide={slideContent.complianceWorkflow} />
      ),
      [slideContent.okgo.id]: <SlideOkGo key={slideContent.okgo.id} slide={slideContent.okgo} />,
      [slideContent.flowchartManual.id]: (
        <SlideFlowchart
          key={slideContent.flowchartManual.id}
          slide={slideContent.flowchartManual}
          automated={false}
          diagramCopy={content.diagrams.legacyRevenueFlow}
        />
      ),
      [slideContent.flowchartAutomated.id]: (
        <SlideFlowchart
          key={slideContent.flowchartAutomated.id}
          slide={slideContent.flowchartAutomated}
          automated
          diagramCopy={content.diagrams.legacyRevenueFlow}
        />
      ),
      [slideContent.directvManual.id]: (
        <SlideDirectvManual key={slideContent.directvManual.id} slide={slideContent.directvManual} />
      ),
      [slideContent.rubeGoldberg.id]: (
        <SlideRubeGoldberg key={slideContent.rubeGoldberg.id} slide={slideContent.rubeGoldberg} />
      ),
      [slideContent.aiAmplified.id]: (
        <SlideAiAmplified key={slideContent.aiAmplified.id} slide={slideContent.aiAmplified} />
      ),
      [slideContent.placeholderEight.id]: (
        <SlidePlaceholder
          key={slideContent.placeholderEight.id}
          title={slideContent.placeholderEight.title}
          subtitle={slideContent.placeholderEight.subtitle}
        />
      ),
      [slideContent.designPattern.id]: (
        <SlideDesignPattern key={slideContent.designPattern.id} slide={slideContent.designPattern} />
      ),
      [slideContent.close.id]: <SlideClose key={slideContent.close.id} slide={slideContent.close} />,
    }),
    [content.diagrams.legacyRevenueFlow, slideContent],
  );

  const slides = useMemo(
    () =>
      slideRegistry.map((slide) => {
        const element = slideElementsById[slide.id];

        if (!element) {
          throw new Error(`Missing slide renderer for slide id "${slide.id}"`);
        }

        return element;
      }),
    [slideElementsById, slideRegistry],
  );

  return {
    slides,
    slideTitles,
    slideIdOrder,
  };
}
