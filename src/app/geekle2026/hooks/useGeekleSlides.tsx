import { useMemo, type ReactNode } from "react";

import type { Geekle2026Content } from "@/content/presentations/geekle2026";

import {
  SlideAgenda,
  SlideAudienceContrast,
  SlideBuildPart1,
  SlideBuildPart2,
  SlideFinalize,
  SlideGoal,
  SlideHero,
  SlideModereGame,
  SlidePreSetup,
  SlideToolsNeeded,
} from "../components/slides/geekle-slides";

type UseGeekleSlidesParams = {
  content: Geekle2026Content;
};

export function useGeekleSlides({ content }: UseGeekleSlidesParams) {
  const slideContent = content.slides;
  const slideRegistry = content.slideRegistry;

  const slideTitles = useMemo(() => slideRegistry.map((slide) => slide.title), [slideRegistry]);

  const slideElementsById = useMemo<Record<string, ReactNode>>(
    () => ({
      [slideContent.hero.id]: <SlideHero key={slideContent.hero.id} slide={slideContent.hero} />,
      [slideContent.agenda.id]: <SlideAgenda key={slideContent.agenda.id} slide={slideContent.agenda} />,
      [slideContent.modereGame.id]: (
        <SlideModereGame key={slideContent.modereGame.id} slide={slideContent.modereGame} />
      ),
      [slideContent.audienceContrast.id]: (
        <SlideAudienceContrast
          key={slideContent.audienceContrast.id}
          slide={slideContent.audienceContrast}
        />
      ),
      [slideContent.goal.id]: <SlideGoal key={slideContent.goal.id} slide={slideContent.goal} />,
      [slideContent.toolsNeeded.id]: (
        <SlideToolsNeeded key={slideContent.toolsNeeded.id} slide={slideContent.toolsNeeded} />
      ),
      [slideContent.preSetup.id]: <SlidePreSetup key={slideContent.preSetup.id} slide={slideContent.preSetup} />,
      [slideContent.buildPart1.id]: (
        <SlideBuildPart1 key={slideContent.buildPart1.id} slide={slideContent.buildPart1} />
      ),
      [slideContent.buildPart2.id]: (
        <SlideBuildPart2 key={slideContent.buildPart2.id} slide={slideContent.buildPart2} />
      ),
      [slideContent.finalize.id]: <SlideFinalize key={slideContent.finalize.id} slide={slideContent.finalize} />,
    }),
    [slideContent],
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
  };
}
