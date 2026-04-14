import type {
  LlmDay2026Content,
  LlmDay2026SlideKey,
  LlmDay2026Slides,
} from "@/content/llmday2026";

export interface LlmDay2026SlideRegistryEntry {
  key: LlmDay2026SlideKey;
  id: string;
  title: string;
}

function getSlideTitle(key: LlmDay2026SlideKey, slides: LlmDay2026Slides): string {
  switch (key) {
    case "hero":
      return `${slides.hero.title} ${slides.hero.highlight}`;
    default:
      return slides[key].title;
  }
}

export function buildLlmDay2026SlideRegistry(
  slides: LlmDay2026Content["slides"],
  slideOrder: LlmDay2026Content["slideOrder"],
): LlmDay2026SlideRegistryEntry[] {
  return slideOrder.map((key) => ({
    key,
    id: slides[key].id,
    title: getSlideTitle(key, slides),
  }));
}
