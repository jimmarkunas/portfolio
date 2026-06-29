import { useMemo, type ReactNode } from "react";

import type {
  DshHacks2026Content,
  DshHacks2026SlideKey,
} from "@/content/dshhacks2026";
import {
  SlideAiAmplified,
  SlidePlaceholder,
  SlideRubeGoldberg,
} from "@/app/llmday2026/components/slides/case-study-slides";

import {
  SlideDesignBrief,
  SlideFocusGroup,
  SlideHero,
  SlideIdeaLast,
  SlidePainProduct,
  SlideWrongThing,
} from "../components/slides/discovery-slides";
import {
  SlideCpsCaseStudy,
  SlideDirectvCaseStudy,
} from "../components/slides/case-study-slides";
import {
  SlideHomework,
  SlideIdeasPlural,
  SlideRealProductsSequence,
  SlideTechnologyConstraint,
} from "../components/slides/closing-slides";
import { buildDshHacks2026SlideRegistry } from "../dshhacks2026SlideRegistry";

type UseDshHacks2026SlidesParams = {
  content: DshHacks2026Content;
};

function assertNever(value: never): never {
  throw new Error(`Unhandled slide key: ${String(value)}`);
}

function renderSlide(key: DshHacks2026SlideKey, content: DshHacks2026Content): ReactNode {
  const slideContent = content.slides;

  switch (key) {
    case "hero":
      return <SlideHero slide={slideContent.hero} />;
    case "wrongThing":
      return <SlideWrongThing slide={slideContent.wrongThing} />;
    case "ideaLast":
      return <SlideIdeaLast slide={slideContent.ideaLast} />;
    case "focusGroup":
      return <SlideFocusGroup slide={slideContent.focusGroup} />;
    case "painProduct":
      return <SlidePainProduct slide={slideContent.painProduct} />;
    case "designBrief":
      return <SlideDesignBrief slide={slideContent.designBrief} />;
    case "directvCaseStudy":
      return <SlideDirectvCaseStudy slide={slideContent.directvCaseStudy} />;
    case "rubeGoldberg":
      return <SlideRubeGoldberg slide={slideContent.rubeGoldberg} />;
    case "aiAmplified":
      return <SlideAiAmplified slide={slideContent.aiAmplified} />;
    case "cpsCaseStudy":
      return <SlideCpsCaseStudy slide={slideContent.cpsCaseStudy} />;
    case "placeholder":
      return (
        <SlidePlaceholder
          title={slideContent.placeholder.title}
          subtitle={slideContent.placeholder.subtitle}
        />
      );
    case "ideasPlural":
      return <SlideIdeasPlural slide={slideContent.ideasPlural} />;
    case "technologyConstraint":
      return <SlideTechnologyConstraint slide={slideContent.technologyConstraint} />;
    case "realProductsSequence":
      return <SlideRealProductsSequence slide={slideContent.realProductsSequence} />;
    case "homework":
      return <SlideHomework slide={slideContent.homework} />;
    default:
      return assertNever(key);
  }
}

export function useDshHacks2026Slides({ content }: UseDshHacks2026SlidesParams) {
  const slideRegistry = useMemo(
    () => buildDshHacks2026SlideRegistry(content.slides, content.slideOrder),
    [content.slideOrder, content.slides],
  );

  const slideIdOrder = useMemo(() => slideRegistry.map((slide) => slide.id), [slideRegistry]);
  const slideTitles = useMemo(() => slideRegistry.map((slide) => slide.title), [slideRegistry]);

  const slides = useMemo(
    () => slideRegistry.map((slide) => renderSlide(slide.key, content)),
    [content, slideRegistry],
  );

  return {
    slides,
    slideTitles,
    slideIdOrder,
  };
}
