import type { UsaiiContent, UsaiiSlideKey } from "@/content/usaii";

export interface UsaiiSlideRegistryEntry {
  key: UsaiiSlideKey;
  id: string;
  title: string;
}

export function buildUsaiiSlideRegistry(
  slides: UsaiiContent["slides"],
  slideOrder: UsaiiContent["slideOrder"],
): UsaiiSlideRegistryEntry[] {
  return slideOrder.map((key) => ({
    key,
    id: slides[key].id,
    title: slides[key].title,
  }));
}
