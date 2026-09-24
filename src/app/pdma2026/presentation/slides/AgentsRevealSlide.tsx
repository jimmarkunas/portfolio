import type { CSSProperties } from "react";
import { FileText } from "lucide-react";
import { TakeawayBand } from "@/app/pdma2026-templates/components/shared/TakeawayBand";
import { TemplateSlide } from "@/app/pdma2026-templates/components/TemplateSlide";
import type { AgentsRevealContent } from "../presentationTypes";

/**
 * System tracks shared by the CSS grid and its connector layer, so every connector
 * starts at a card edge and lands on the hub ring for that card's row.
 */
const SYSTEM = { card: 470, lane: 96, hub: 498, row: 158, gap: 12 } as const;
const RING_RATIO = 225 / 558; // visible ring radius ÷ ring artwork size
const systemWidth = SYSTEM.card * 2 + SYSTEM.lane * 2 + SYSTEM.hub;
const systemHeight = SYSTEM.row * 3 + SYSTEM.gap * 2;
const center = { x: systemWidth / 2, y: systemHeight / 2 };
const radius = SYSTEM.hub * RING_RATIO;
const rows = [0, 1, 2].map((row) => row * (SYSTEM.row + SYSTEM.gap) + SYSTEM.row / 2);
const ringX = (y: number) => Math.sqrt(Math.max(0, radius ** 2 - (y - center.y) ** 2));
const connectors = rows.flatMap((y) => [
  { x1: SYSTEM.card, x2: center.x - ringX(y), y },
  { x1: center.x + ringX(y), x2: systemWidth - SYSTEM.card, y },
]);

function QuestionCard({ letter, title, question, active }: AgentsRevealContent["questions"][number]) {
  return <li className={`pdmat-agents__card${active ? " is-active" : ""}`}>
    <b className="pdmat-agents__letter">{letter}</b>
    <i className="pdmat-agents__bar" aria-hidden="true" />
    <span className="pdmat-agents__copy"><strong>{title}</strong><span>{question}</span></span>
  </li>;
}

export function AgentsRevealSlide({ content }: { content: AgentsRevealContent }) {
  const { questions, hub, usage, takeaway } = content;
  const system = { "--agents-card": `${SYSTEM.card}px`, "--agents-lane": `${SYSTEM.lane}px`, "--agents-hub": `${SYSTEM.hub}px`, "--agents-row": `${SYSTEM.row}px`, "--agents-gap": `${SYSTEM.gap}px`, "--agents-ring": `url("${hub.ring}")` } as CSSProperties;
  return <TemplateSlide kind={content.kind} title={content.chrome.title}>
    <section className="pdmat-template pdmat-agents">
      <div className="pdmat-agents__system" style={system}>
        <svg className="pdmat-agents__connectors" viewBox={`0 0 ${systemWidth} ${systemHeight}`} aria-hidden="true">
          {connectors.map(({ x1, x2, y }) => <g key={`${x1}-${y}`}>
            <line x1={x1} y1={y} x2={x2} y2={y} />
            <circle cx={x1} cy={y} r="5" /><circle cx={x2} cy={y} r="5" />
          </g>)}
        </svg>
        <ol className="pdmat-agents__bank pdmat-agents__bank--left">{questions.slice(0, 3).map((question) => <QuestionCard key={question.letter} {...question} />)}</ol>
        <div className="pdmat-agents__hub">
          <FileText aria-hidden="true" size={28} strokeWidth={2} />
          <strong className="pdmat-agents__count">{hub.count}</strong>
          <p className="pdmat-agents__standard">{hub.label}</p>
          <i className="pdmat-agents__hub-rule" aria-hidden="true" />
          <p className="pdmat-agents__proposition">{hub.proposition}</p>
        </div>
        <ol className="pdmat-agents__bank pdmat-agents__bank--right">{questions.slice(3).map((question) => <QuestionCard key={question.letter} {...question} />)}</ol>
      </div>
      <p className="pdmat-agents__usage"><span>{usage.label}</span><span>{usage.body}</span></p>
      <TakeawayBand text={takeaway} className="pdmat-agents__takeaway" />
    </section>
  </TemplateSlide>;
}
