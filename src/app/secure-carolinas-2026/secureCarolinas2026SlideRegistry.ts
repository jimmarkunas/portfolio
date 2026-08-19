import type {
  SecureCarolinas2026Content,
  SecureCarolinas2026SlideKey,
} from "@/content/secure-carolinas-2026";

export type SecureCarolinas2026SlideRegistryEntry = {
  key: SecureCarolinas2026SlideKey;
  id: string;
  title: string;
};

export function buildSecureCarolinas2026SlideRegistry(
  slides: SecureCarolinas2026Content["slides"],
  slideOrder: SecureCarolinas2026Content["slideOrder"],
): SecureCarolinas2026SlideRegistryEntry[] {
  return slideOrder.map((key) => ({
    key,
    id: slides[key].id,
    title: slides[key].title,
  }));
}
