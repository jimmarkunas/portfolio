import { useMemo, type ReactNode } from "react";
import type { UsaiiContent } from "@/content/usaii";
import { buildUsaiiSlideRegistry } from "../usaiiSlideRegistry";
import { ReferenceSlide } from "../components/ReferenceSlide";
import { UsaiiFixedStage } from "../components/UsaiiFixedStage";

export function useUsaiiSlides({ content }: { content: UsaiiContent }) {
  const registry = useMemo(() => buildUsaiiSlideRegistry(content.slides, content.slideOrder), [content]);
  const slides = useMemo<ReactNode[]>(() => registry.map(({ key }) => {
    const item = content.slides[key];
    return <UsaiiFixedStage><ReferenceSlide src={item.image} alt={item.title} /></UsaiiFixedStage>;
  }), [content, registry]);
  return {
    slides,
    slideTitles: registry.map((item) => item.title),
    slideIdOrder: registry.map((item) => item.id),
  };
}
