import type { FlowScenarioTemplateContent, FlowStage } from "../../templateTypes";
import { Connector } from "../shared/Connector";
import { ContentCard } from "../shared/ContentCard";
import { IconCircle } from "../shared/IconCircle";
import { TakeawayBand } from "../shared/TakeawayBand";
import { TemplateSlide } from "../TemplateSlide";

const index = (position: number) => String(position).padStart(2, "0");

function StageNode({ stage, position, slot }: { stage: FlowStage; position: number; slot: "identify" | "recommend" }) {
  return <div className={`pdmat-flow__stage pdmat-flow__stage--${slot}`}>
    <p className="pdmat-flow__stage-head"><span className="pdmat-flow__index">{index(position)}</span><strong>{stage.title}</strong></p>
    <IconCircle source={stage} size={158} iconSize={64} tone="accent" glow className="pdmat-flow__stage-node" />
    <p className="pdmat-flow__stage-body">{stage.body}</p>
  </div>;
}

/** Synopsis → signal rows → glyph stages; the track owns every connector between them. */
export function FlowScenarioTemplate({ content }: { content: FlowScenarioTemplateContent }) {
  const { synopsis, signals, stages, question, takeaway } = content;
  const SynopsisIcon = "icon" in synopsis ? synopsis.icon : null;
  return <TemplateSlide kind={content.kind} title={content.chrome.title} decorativeVariant={content.decorativeVariant}>
    <section className="pdmat-template pdmat-flow">
      <div className="pdmat-flow__track">
        <Connector kind="flow" endDot className="pdmat-flow__link pdmat-flow__link--lead" />
        <ContentCard tone="outline" className="pdmat-flow__synopsis">
          <p className="pdmat-flow__index">{index(1)}</p>
          <h2 className="pdmat-flow__synopsis-label">{synopsis.label}</h2>
          <div className="pdmat-flow__problem">
            {SynopsisIcon && <SynopsisIcon aria-hidden="true" size={46} strokeWidth={1.6} />}
            <p>{synopsis.body}</p>
          </div>
          <hr className="pdmat-flow__synopsis-rule" />
          <p className="pdmat-flow__value-label">{synopsis.valueLabel}</p>
          <p className="pdmat-flow__value">{synopsis.primaryValue}</p>
          <p className="pdmat-flow__value-support">{synopsis.supportingValue}</p>
        </ContentCard>
        <Connector kind="flow" startDot arrow className="pdmat-flow__link pdmat-flow__link--signals" />
        <div className="pdmat-flow__signals">
          <p className="pdmat-flow__index">{index(2)}</p>
          <ul>{signals.map((signal) => <li key={signal.title}>
            <IconCircle source={signal} size={60} iconSize={28} tone="light" />
            <span><strong>{signal.title}</strong><span>{signal.body}</span></span>
          </li>)}</ul>
        </div>
        <Connector kind="flow" startDot arrow className="pdmat-flow__link pdmat-flow__link--identify" />
        <StageNode stage={stages[0]} position={3} slot="identify" />
        <Connector kind="flow" arrow className="pdmat-flow__link pdmat-flow__link--recommend" />
        <StageNode stage={stages[1]} position={4} slot="recommend" />
        <Connector kind="flow" endDot className="pdmat-flow__link pdmat-flow__link--tail" />
      </div>
      <div className="pdmat-flow__question">
        <IconCircle source={question} size={54} iconSize={30} tone="accent" />
        <i className="pdmat-flow__question-rule" aria-hidden="true" />
        <p><span className="pdmat-flow__question-label">{question.label}</span><span className="pdmat-flow__question-body">{question.body}</span>{question.followUp && <span className="pdmat-flow__question-follow-up">{question.followUp}</span>}</p>
      </div>
      <TakeawayBand text={takeaway} className="pdmat-flow__takeaway" />
    </section>
  </TemplateSlide>;
}
