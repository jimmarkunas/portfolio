import { TakeawayBand } from "@/app/pdma2026-templates/components/shared/TakeawayBand";
import { TemplateSlide } from "@/app/pdma2026-templates/components/TemplateSlide";
import type { IdeaToSpecContent } from "../presentationTypes";

function SpecPanel({ panel, tone }: { panel: IdeaToSpecContent["before"]; tone: "before" | "after" }) {
  return <article className={`pdmat-spec__panel pdmat-spec__panel--${tone}`}>
    <p className="pdmat-spec__label">{panel.label}</p>
    <h2 className="pdmat-spec__title">{panel.title}</h2>
    <p className="pdmat-spec__quote">{panel.quote}</p>
    <i className="pdmat-spec__rule" aria-hidden="true" />
    <ul className="pdmat-spec__items">{panel.items.map((item) => <li key={item}><img src={panel.marker} alt="" /><span>{item}</span></li>)}</ul>
  </article>;
}

export function IdeaToSpecSlide({ content }: { content: IdeaToSpecContent }) {
  return <TemplateSlide kind={content.kind} title={content.chrome.title}>
    <section className="pdmat-template pdmat-spec">
      <aside className="pdmat-spec__side"><p>{content.sideStatement}</p><i aria-hidden="true" /></aside>
      <SpecPanel panel={content.before} tone="before" />
      <div className="pdmat-spec__bridge">
        <img src={content.bridge.art} alt="" />
        <p>{content.bridge.label}</p>
        <i aria-hidden="true" />
      </div>
      <SpecPanel panel={content.after} tone="after" />
      <div className="pdmat-spec__footer">
        <TakeawayBand text={content.takeaway} className="pdmat-spec__takeaway" />
        <ul className="pdmat-spec__outcomes">{content.outcomes.map((outcome, index) => <li key={outcome.value} className={index > 0 ? "has-divider" : undefined}><strong>{outcome.value}</strong><span>{outcome.label}</span></li>)}</ul>
      </div>
    </section>
  </TemplateSlide>;
}
