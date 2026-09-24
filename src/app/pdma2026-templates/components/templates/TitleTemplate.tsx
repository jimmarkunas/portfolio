import type { TitleTemplateContent } from "../../templateTypes";
import type { DecorItem } from "../DecorativeLayer";
import { TemplateSlide } from "../TemplateSlide";

export function TitleTemplate({ content, decorItems }: { content: TitleTemplateContent; decorItems?: readonly DecorItem[] }) {
  const { speaker } = content;
  return <TemplateSlide kind={content.kind} title={content.chrome.title} decorativeVariant={content.decorativeVariant} decorItems={decorItems}>
    <section className="pdmat-template pdmat-title">
      <div className="pdmat-title__speaker">
        <i className="pdmat-title__rule" aria-hidden="true" />
        <strong className="pdmat-title__name">{speaker.name}</strong>
        <span className="pdmat-title__role">{speaker.role}</span>
      </div>
    </section>
  </TemplateSlide>;
}
