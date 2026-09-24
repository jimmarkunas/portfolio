import type { DecorItem } from "@/app/pdma2026-templates/components/DecorativeLayer";
import { TemplateSlide } from "@/app/pdma2026-templates/components/TemplateSlide";
import type { AmbiguityGateContent } from "../presentationTypes";

/** Reflective floor + tangled orb artwork. Decorative only. */
export const ambiguityDecor: readonly DecorItem[] = [
  { src: "/pdma2026/slide-05/51d1a.png", x: 92, y: 454, w: 2172, h: 724, opacity: 0.7, ambient: "floor-fade" },
  { src: "/pdma2026/slide-05/9f2f3.png", x: 1139, y: 197, w: 545, h: 545 },
];

export function AmbiguityGateSlide({ content }: { content: AmbiguityGateContent }) {
  return <TemplateSlide kind={content.kind} title={content.chrome.title} decorItems={ambiguityDecor}>
    <section className="pdmat-template pdmat-ambiguity">
      <div className="pdmat-ambiguity__equation">
        <p className="pdmat-ambiguity__conditions">{content.conditions.map((condition) => <span key={condition}>{condition}</span>)}</p>
        <p className="pdmat-ambiguity__equals">{content.equals}</p>
      </div>
      <p className="pdmat-ambiguity__result">{content.result}</p>
    </section>
  </TemplateSlide>;
}
