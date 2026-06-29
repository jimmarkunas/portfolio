import type {
  DshHacks2026Content,
  DshHacks2026SlideKey,
} from "@/content/dshhacks2026";

export interface DshHacks2026SlideRegistryEntry {
  key: DshHacks2026SlideKey;
  id: string;
  title: string;
}

export function buildDshHacks2026SlideRegistry(
  slides: DshHacks2026Content["slides"],
  slideOrder: DshHacks2026Content["slideOrder"],
): DshHacks2026SlideRegistryEntry[] {
  return slideOrder.map((key) => ({
    key,
    id: slides[key].id,
    title: slides[key].title,
  }));
}
