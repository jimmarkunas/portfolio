"use client";

import { useId } from "react";

import Modal from "@/components/case-study/Modal";
import type { Tip } from "@/components/case-study/useModal";
import { useModal } from "@/components/case-study/useModal";

type DiagramNode = {
  id: string;
  title: string;
  subtitle: string;
  x: number;
  y: number;
  w: number;
  h: number;
  fill: string;
  border: string;
  titleColor: string;
  subtitleColor: string;
};

const RETENTION_TOOLTIPS: Record<string, Tip> = {
  salesforce: {
    label: "Salesforce CRM",
    title: "Where the customer relationship lives",
    body: "Salesforce holds every contact record, support case, and customer interaction. The churn monitor agent reads this data continuously - flagging accounts that have gone quiet, opened too many cases, or stopped engaging.",
  },
  snowflake: {
    label: "Snowflake",
    title: "Where the usage and billing data lives",
    body: "Snowflake is the data lake - product usage frequency, billing history, contract value, and cohort behavior over time. The churn monitor and offer engine both query this to understand not just who the customer is, but how they're actually using the product.",
  },
  tableau: {
    label: "Tableau",
    title: "Where humans see what's happening",
    body: "Tableau surfaces retention KPIs - churn rate by segment, offer acceptance rates, agent intervention outcomes. It's the feedback layer that lets the team validate whether the agents are working and where to tune them.",
  },
  "churn-monitor": {
    label: "Churn monitor agent",
    title: "Catches at-risk accounts before anyone calls to cancel",
    body: "Runs daily against Salesforce and Snowflake. Scores every active account on a churn risk model - factoring in login frequency, support volume, billing changes, and engagement drop-off. Flags high-risk accounts and passes them to the offer engine. Low-confidence scores go to a human rep instead.",
  },
  "offer-engine": {
    label: "Offer engine agent",
    title: "Picks the right retention offer for each customer",
    body: "Takes the flagged segment from the churn monitor and matches it against historical conversion data. Outputs a ranked offer recommendation - discount, bundle upgrade, service credit, or proactive outreach - with a predicted conversion rate. The action agent executes the top recommendation.",
  },
  "action-agent": {
    label: "Action agent",
    title: "Does the thing - or hands it to a human",
    body: "Triggers the retention action: sends the outreach email, applies the offer in Salesforce, or queues the account for a CS rep call. If the confidence gate threshold isn't met - complex account, high contract value, unusual pattern - it escalates to a human with the offer recommendation pre-attached. Every outcome is written back to Salesforce.",
  },
  "retained-customer": {
    label: "Retained customer",
    title: "Offer accepted, case closed",
    body: "The customer receives a targeted retention offer matched to their behavior and history. Acceptance rate improves because the offer is relevant, timed correctly, and delivered before the customer has mentally checked out. Outcome is logged in Salesforce and fed back into the churn model.",
  },
  "human-escalation": {
    label: "Human escalation",
    title: "The agent knows when to step back",
    body: "Not every account should be handled by an agent. High-value contracts, unusual churn signals, or low model confidence all route to a human CS rep. The rep receives the account summary, risk score, and the agent's recommended offer - so they're not starting from scratch.",
  },
  "feedback-loop": {
    label: "dashed return arrow",
    title: "Every outcome makes the model smarter",
    body: "Win or lose, every retention attempt is written back to Salesforce and flows back into Snowflake. The churn model retrains on real outcomes - which offers converted, which segments churned anyway, which escalations were resolved. The system improves with every cycle.",
  },
  guardrail: {
    label: "guardrail: confidence gate",
    title: "The agent never fires blind",
    body: "Before the action agent executes, it checks its own confidence score. If the model isn't sure - ambiguous signal, edge-case account, insufficient history - the workflow routes to human escalation instead of auto-firing an offer. This is the design feature that makes the system safe to run at scale.",
  },
};

const CANVAS_W = 680;
const CANVAS_H = 480;
const CONNECTOR_BASE = "#959595";
const CHART_SCALE = 1;
const OFFSET_X = -30;
const OFFSET_Y = 0;

const COLUMN_LABELS = [
  { id: "platforms", label: "Platforms", x: 110 },
  { id: "agents", label: "Agents", x: 340 },
  { id: "output", label: "Output", x: 570 },
] as const;

const NODES: DiagramNode[] = [
  {
    id: "salesforce",
    title: "Salesforce CRM",
    subtitle: "contacts, cases, activity",
    x: 30,
    y: 52,
    w: 160,
    h: 52,
    fill: "var(--color-soft-white)",
    border: "var(--color-border)",
    titleColor: "var(--color-accent)",
    subtitleColor: "var(--color-muted)",
  },
  {
    id: "snowflake",
    title: "Snowflake",
    subtitle: "usage, billing, history",
    x: 30,
    y: 132,
    w: 160,
    h: 52,
    fill: "var(--color-soft-white)",
    border: "var(--color-border)",
    titleColor: "var(--color-accent)",
    subtitleColor: "var(--color-muted)",
  },
  {
    id: "tableau",
    title: "Tableau",
    subtitle: "retention dashboards",
    x: 30,
    y: 212,
    w: 160,
    h: 52,
    fill: "var(--color-soft-white)",
    border: "var(--color-border)",
    titleColor: "var(--color-accent)",
    subtitleColor: "var(--color-muted)",
  },
  {
    id: "churn-monitor",
    title: "Churn monitor agent",
    subtitle: "scores risk daily, flags accounts",
    x: 250,
    y: 52,
    w: 180,
    h: 52,
    fill: "var(--color-white)",
    border: "var(--color-border)",
    titleColor: "var(--color-ink)",
    subtitleColor: "var(--color-muted)",
  },
  {
    id: "offer-engine",
    title: "Offer engine agent",
    subtitle: "matches segment to best offer",
    x: 250,
    y: 152,
    w: 180,
    h: 52,
    fill: "var(--color-white)",
    border: "var(--color-border)",
    titleColor: "var(--color-ink)",
    subtitleColor: "var(--color-muted)",
  },
  {
    id: "action-agent",
    title: "Action agent",
    subtitle: "triggers outreach or escalates",
    x: 250,
    y: 252,
    w: 180,
    h: 52,
    fill: "var(--color-white)",
    border: "var(--color-border)",
    titleColor: "var(--color-ink)",
    subtitleColor: "var(--color-muted)",
  },
  {
    id: "retained-customer",
    title: "Retained customer",
    subtitle: "offer accepted, case closed",
    x: 490,
    y: 112,
    w: 160,
    h: 52,
    fill: "var(--color-soft-white)",
    border: "var(--color-border)",
    titleColor: "var(--color-secondary-dark)",
    subtitleColor: "var(--color-muted)",
  },
  {
    id: "human-escalation",
    title: "Human escalation",
    subtitle: "complex or high-value case",
    x: 490,
    y: 212,
    w: 160,
    h: 52,
    fill: "var(--color-soft-white)",
    border: "var(--color-border)",
    titleColor: "var(--color-secondary-dark)",
    subtitleColor: "var(--color-muted)",
  },
];

function toPercent(value: number, base: number) {
  return `${(value / base) * 100}%`;
}

function mapX(value: number) {
  return OFFSET_X + value * CHART_SCALE;
}

function mapY(value: number) {
  return OFFSET_Y + value * CHART_SCALE;
}

function mapW(value: number) {
  return value * CHART_SCALE;
}

function mapH(value: number) {
  return value * CHART_SCALE;
}

type FlowConnectorDef = {
  id: string;
  d: string;
  strokeWidth: number;
  strokeDasharray?: string;
  dotColor: string;
  dotCount?: number;
  dotDurationSeconds?: number;
};

function FlowDots({
  pathId,
  color,
  count = 2,
  durationSeconds = 4.8,
}: {
  pathId: string;
  color: string;
  count?: number;
  durationSeconds?: number;
}) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => {
        const stagger = (durationSeconds / count) * index;
        const opacity = 0.95 - index * 0.18;
        return (
          <circle key={`${pathId}-dot-${index}`} r="2.2" fill={color} opacity={Math.max(0.45, opacity)}>
            <animateMotion
              dur={`${durationSeconds}s`}
              begin={`-${stagger}s`}
              repeatCount="indefinite"
              rotate="auto"
            >
              <mpath href={`#${pathId}`} />
            </animateMotion>
          </circle>
        );
      })}
    </>
  );
}

function FlowConnector({
  pathId,
  connector,
}: {
  pathId: string;
  connector: FlowConnectorDef;
}) {
  return (
    <>
      <path
        id={pathId}
        d={connector.d}
        fill="none"
        stroke={CONNECTOR_BASE}
        strokeWidth={connector.strokeWidth}
        strokeDasharray={connector.strokeDasharray}
      />
      <FlowDots
        pathId={pathId}
        color={connector.dotColor}
        count={connector.dotCount}
        durationSeconds={connector.dotDurationSeconds}
      />
    </>
  );
}

function DiagramCard({ node, onToggle }: { node: DiagramNode; onToggle: (id: string) => void }) {
  return (
    <button
      type="button"
      onPointerDownCapture={(event) => event.stopPropagation()}
      onClick={() => onToggle(node.id)}
      className="absolute z-30 flex flex-col items-center justify-center gap-0.5 rounded-[var(--radius-sm)] border px-3 py-2 text-center"
      aria-label={`${node.title} details`}
      style={{
        left: toPercent(mapX(node.x), CANVAS_W),
        top: toPercent(mapY(node.y), CANVAS_H),
        width: toPercent(mapW(node.w), CANVAS_W),
        height: toPercent(mapH(node.h), CANVAS_H),
        backgroundColor: node.fill,
        borderColor: node.border,
      }}
    >
      <p
        className="text-sm font-medium leading-tight tracking-[-0.01em]"
        style={{ color: node.titleColor }}
      >
        {node.title}
      </p>
      <p
        className="text-[11px] leading-[1.35]"
        style={{ color: node.subtitleColor }}
      >
        {node.subtitle}
      </p>
    </button>
  );
}

export function RoiWorkflowDiagram() {
  const flowIdPrefix = useId().replace(/[:]/g, "");
  const { activeKey, toggle, close } = useModal();
  const activeTip = activeKey ? (RETENTION_TOOLTIPS[activeKey] ?? null) : null;
  const connectors: FlowConnectorDef[] = [
    {
      id: "sf-to-churn",
      d: "M190 78 L248 78",
      strokeWidth: 1.5,
      dotColor: "#378ADD",
    },
    {
      id: "snowflake-to-churn-elbow",
      d: "M190 158 L220 158 L220 88 L248 88",
      strokeWidth: 1.5,
      dotColor: "#378ADD",
    },
    {
      id: "snowflake-to-offer",
      d: "M190 178 L248 178",
      strokeWidth: 1.5,
      dotColor: "#378ADD",
    },
    {
      id: "tableau-to-action-elbow",
      d: "M190 238 L220 238 L220 278 L248 278",
      strokeWidth: 1.5,
      dotColor: "#378ADD",
    },
    {
      id: "churn-to-offer",
      d: "M340 104 L340 150",
      strokeWidth: 1.5,
      dotColor: "#BA7517",
    },
    {
      id: "offer-to-action",
      d: "M340 204 L340 250",
      strokeWidth: 1.5,
      dotColor: "#BA7517",
    },
    {
      id: "action-to-retained",
      d: "M430 262 L460 262 L460 138 L488 138",
      strokeWidth: 1.5,
      dotColor: "#1D9E75",
    },
    {
      id: "action-to-human",
      d: "M430 278 L460 278 L460 238 L488 238",
      strokeWidth: 1.5,
      dotColor: "#888780",
    },
    {
      id: "feedback-loop",
      d: "M570 164 L570 368 L110 368 L110 106",
      strokeWidth: 1,
      strokeDasharray: "5 3",
      dotColor: "#378ADD",
      dotDurationSeconds: 6,
    },
    {
      id: "confidence-gate",
      d: "M340 304 L340 333",
      strokeWidth: 1,
      strokeDasharray: "3 2",
      dotColor: "#9CA3AF",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-[980px]">
      <Modal tip={activeTip} onClose={close} />
      <div className="relative mx-auto aspect-[680/480] w-full overflow-hidden">
        <svg
          className="pointer-events-none absolute inset-0 z-0 h-full w-full"
          viewBox="0 0 680 480"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <g transform={`translate(${OFFSET_X} ${OFFSET_Y}) scale(${CHART_SCALE} ${CHART_SCALE})`}>
            {connectors.map((connector) => (
              <FlowConnector
                key={connector.id}
                pathId={`${flowIdPrefix}-${connector.id}`}
                connector={connector}
              />
            ))}
          </g>
        </svg>

        {COLUMN_LABELS.map((column) => (
          <p
            key={column.id}
            className="absolute z-20 text-center text-sm font-medium tracking-[0.16em] text-white"
            style={{
              left: toPercent(mapX(column.x), CANVAS_W),
              top: toPercent(mapY(38), CANVAS_H),
              transform: "translate(-50%, -50%)",
            }}
          >
            {column.label}
          </p>
        ))}

        {NODES.map((node) => (
          <DiagramCard key={node.id} node={node} onToggle={toggle} />
        ))}

        <button
          type="button"
          onPointerDownCapture={(event) => event.stopPropagation()}
          onClick={() => toggle("guardrail")}
          aria-label="Guardrail confidence gate details"
          className="absolute z-20 rounded-[var(--radius-sm)] border bg-[rgb(246,238,223)] px-2"
          style={{
            left: toPercent(mapX(282), CANVAS_W),
            top: toPercent(mapY(335), CANVAS_H),
            width: toPercent(mapW(116), CANVAS_W),
            height: toPercent(mapH(24), CANVAS_H),
            backgroundColor: "var(--color-soft-white)",
            borderColor: "var(--color-border)",
          }}
        >
          <p
            className="pt-1.5 text-center text-[10px] font-medium leading-none tracking-[0.06em]"
            style={{ color: "var(--color-secondary-dark)" }}
          >
            guardrail: confidence gate
          </p>
        </button>

        <button
          type="button"
          onPointerDownCapture={(event) => event.stopPropagation()}
          onClick={() => toggle("feedback-loop")}
          aria-label="Feedback loop details"
          className="absolute z-20 text-center text-[10px] font-medium leading-none tracking-[0.06em] text-[rgb(115,114,108)]"
          style={{
            left: toPercent(mapX(340), CANVAS_W),
            top: toPercent(mapY(378), CANVAS_H),
            transform: "translate(-50%, -50%)",
          }}
        >
          outcome written back to Salesforce
        </button>

      </div>
    </div>
  );
}
