import type { StructuredActionTemplateContent } from "../../templateTypes";
import { ContentCard } from "../shared/ContentCard";
import { FlowRail } from "../shared/FlowRail";
import { IconCircle } from "../shared/IconCircle";
import { TakeawayBand } from "../shared/TakeawayBand";
import { TemplateSlide } from "../TemplateSlide";

/** Three requirement cards → four-step operationalization rail → takeaway. */
export function StructuredActionTemplate({ content }: { content: StructuredActionTemplateContent }) {
  const { requirements, sectionLabel, steps, takeaway, supportingTakeaway } = content;
  return <TemplateSlide kind={content.kind} title={content.chrome.title} decorativeVariant={content.decorativeVariant}>
    <section className="pdmat-template pdmat-structured">
      <ul className="pdmat-structured__requirements">
        {requirements.map((requirement) => <li key={requirement.title}>
          <ContentCard tone={requirement.emphasis ? "accent" : "outline"} className={`pdmat-structured__card${requirement.emphasis ? " is-emphasis" : ""}`}>
            <span className="pdmat-structured__card-number">{requirement.number}</span>
            <IconCircle source={requirement} size={83} iconSize={38} tone={requirement.emphasis ? "accent" : "light"} className="pdmat-structured__card-icon" />
            <div className="pdmat-structured__card-copy"><h2>{requirement.title}</h2><i aria-hidden="true" /><p>{requirement.body}</p></div>
          </ContentCard>
        </li>)}
      </ul>
      <p className="pdmat-structured__section-label">{sectionLabel}</p>
      <FlowRail
        variant="rail"
        className="pdmat-structured__rail"
        steps={steps.map((step) => ({
          key: step.title,
          number: step.number,
          title: step.title,
          body: step.body,
          emphasis: step.emphasis,
          circle: <IconCircle source={step} size={74} iconSize={32} tone={step.emphasis ? "accent" : "light"} glow />,
        }))}
      />
      <TakeawayBand text={takeaway} aside={supportingTakeaway} className="pdmat-structured__takeaway" />
    </section>
  </TemplateSlide>;
}
