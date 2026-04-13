import React, { useMemo } from "react";

import type { InterviewsContent } from "@/content/interviews";

import Slide5HybridDiagram from "../components/slides/Slide5HybridDiagram";
import Slide6JiraDiagram from "../components/slides/Slide6JiraDiagram";
import Slide7RiskLandscape from "../components/slides/Slide7RiskLandscape";
import Slide8StatusReport from "../components/slides/Slide8StatusReport";
import Slide8ComposableStack from "../components/slides/Slide8ComposableStack";
import SlideGreatestPm from "../components/slides/SlideGreatestPm";
import SlideOutcomes from "../components/slides/SlideOutcomes";
import SlidePmPopQuiz from "../components/slides/SlidePmPopQuiz";
import SlideRescuePlan from "../components/slides/SlideRescuePlan";
import SlideServices from "../components/slides/SlideServices";
import SlideThankYou from "../components/slides/SlideThankYou";
import SlideWho from "../components/slides/SlideWho";
import SlideWhyJim from "../components/slides/SlideWhyJim";
import {
  buildInterviewSlideRegistry,
  PM_POP_QUIZ_SLIDE_ID,
} from "../interviewSlideRegistry";

type UseInterviewSlidesParams = {
  slideContent: InterviewsContent["slides"];
  pmPopQuizCategories: InterviewsContent["slides"]["services"]["categories"];
  revealedPmPopQuizCategories: string[];
  onTogglePmPopQuizCategoryReveal: (categoryId: string) => void;
};

export function useInterviewSlides({
  slideContent,
  pmPopQuizCategories,
  revealedPmPopQuizCategories,
  onTogglePmPopQuizCategoryReveal,
}: UseInterviewSlidesParams) {
  const slideRegistry = useMemo(
    () => buildInterviewSlideRegistry(slideContent),
    [slideContent],
  );

  const slideIdOrder = useMemo(
    () => slideRegistry.map((slide) => slide.id),
    [slideRegistry],
  );

  const slideTitles = useMemo(
    () => slideRegistry.map((slide) => slide.title),
    [slideRegistry],
  );

  const slideElements = useMemo(
    () => [
      <SlideWho key={slideContent.who.id} slide={slideContent.who} />,
      <SlideOutcomes key={slideContent.outcomes.id} slide={slideContent.outcomes} />,
      <SlideServices key={slideContent.services.id} slide={slideContent.services} />,
      <SlideGreatestPm key={slideContent.greatestPm.id} slide={slideContent.greatestPm} />,
      <Slide5HybridDiagram key={slideContent.hybridAgile.id} slide={slideContent.hybridAgile} />,
      <Slide6JiraDiagram key={slideContent.jiraTickets.id} slide={slideContent.jiraTickets} />,
      <Slide7RiskLandscape key={slideContent.riskLandscape.id} slide={slideContent.riskLandscape} />,
      <Slide8StatusReport key={slideContent.statusReport.id} slide={slideContent.statusReport} />,
      <Slide8ComposableStack key={slideContent.composableStack.id} slide={slideContent.composableStack} />,
      <SlideWhyJim key={slideContent.whyJim.id} slide={slideContent.whyJim} />,
      <SlideRescuePlan key={slideContent.rescuePlan.id} slide={slideContent.rescuePlan} />,
      <SlideThankYou key={slideContent.thankYou.id} slide={slideContent.thankYou} />,
      <SlidePmPopQuiz
        key={PM_POP_QUIZ_SLIDE_ID}
        categories={pmPopQuizCategories}
        revealedCategoryIds={revealedPmPopQuizCategories}
        onToggleCategoryReveal={onTogglePmPopQuizCategoryReveal}
      />,
    ],
    [
      onTogglePmPopQuizCategoryReveal,
      pmPopQuizCategories,
      revealedPmPopQuizCategories,
      slideContent.composableStack,
      slideContent.greatestPm,
      slideContent.hybridAgile,
      slideContent.jiraTickets,
      slideContent.outcomes,
      slideContent.rescuePlan,
      slideContent.riskLandscape,
      slideContent.services,
      slideContent.statusReport,
      slideContent.thankYou,
      slideContent.who,
      slideContent.whyJim,
    ],
  );

  const slideElementsById = useMemo(
    () =>
      slideElements.reduce<Record<string, React.ReactNode>>((acc, slide) => {
        if (!React.isValidElement(slide) || slide.key === null) {
          return acc;
        }

        acc[String(slide.key)] = slide;
        return acc;
      }, {}),
    [slideElements],
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
