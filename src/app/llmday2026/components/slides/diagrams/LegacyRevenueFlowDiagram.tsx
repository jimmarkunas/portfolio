import type { LlmDay2026Content } from "@/content/llmday2026";

const FRAME_WIDTH = 1368;
const FRAME_HEIGHT = 566;

type LegacyRevenueFlowDiagramProps = {
  automated: boolean;
  diagram: LlmDay2026Content["diagrams"]["legacyRevenueFlow"];
};

type NodeKind = "automation" | "people";

type DiagramNode = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  kind: NodeKind;
};

type ConnectorSegment = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

const NODES: DiagramNode[] = [
  { id: "node-311-call-center", x: 14, y: 80, w: 128, h: 64, kind: "people" },
  { id: "node-customer-report-online", x: 14, y: 183, w: 128, h: 64, kind: "people" },
  { id: "node-streetlight-alert", x: 14, y: 285, w: 128, h: 64, kind: "automation" },
  { id: "node-resource-mgmt-call", x: 14, y: 386, w: 128, h: 64, kind: "people" },
  { id: "node-ivr", x: 220, y: 133, w: 128, h: 64, kind: "automation" },
  { id: "node-sap-work-order-created", x: 220, y: 386, w: 128, h: 64, kind: "automation" },
  { id: "node-create-sap-work-order", x: 390, y: 133, w: 128, h: 64, kind: "people" },
  { id: "node-order-dispatch-crew", x: 559, y: 133, w: 128, h: 64, kind: "automation" },
  { id: "node-decision-simple-repair", x: 728, y: 133, w: 128, h: 64, kind: "people" },
  { id: "node-follow-order-created", x: 728, y: 248, w: 128, h: 64, kind: "automation" },
  { id: "node-order-sent-tech-crew", x: 728, y: 363, w: 128, h: 64, kind: "automation" },
  { id: "node-field-work-completed", x: 898, y: 133, w: 128, h: 64, kind: "people" },
  { id: "node-field-work-completed-lower", x: 898, y: 363, w: 128, h: 64, kind: "people" },
  { id: "node-outage-order-closed-mds", x: 1068, y: 133, w: 128, h: 64, kind: "automation" },
  { id: "node-outage-order-closed-mds-lower", x: 1068, y: 363, w: 128, h: 64, kind: "automation" },
  { id: "node-outage-order-closed-sap", x: 1237, y: 133, w: 128, h: 64, kind: "automation" },
  { id: "node-outage-order-closed-sap-lower", x: 1237, y: 363, w: 128, h: 64, kind: "people" },
];

const CONNECTORS: ConnectorSegment[] = [
  { id: "line-15", x: 142, y: 112, w: 30, h: 1 },
  { id: "line-16", x: 142, y: 215, w: 30, h: 1 },
  { id: "line-17", x: 172, y: 112, w: 1, h: 103 },
  { id: "line-18", x: 452, y: 197, w: 1, h: 120 },
  { id: "line-19", x: 619, y: 197, w: 1, h: 221 },
  { id: "line-20", x: 792, y: 197, w: 1, h: 51 },
  { id: "line-21", x: 792, y: 312, w: 1, h: 51 },
  { id: "arrow-1", x: 142, y: 418, w: 78, h: 1 },
  { id: "arrow-2", x: 172, y: 165, w: 48, h: 1 },
  { id: "arrow-3", x: 348, y: 165, w: 42, h: 1 },
  { id: "arrow-4", x: 348, y: 418, w: 271, h: 1 },
  { id: "arrow-5", x: 142, y: 317, w: 310, h: 1 },
  { id: "arrow-6", x: 518, y: 165, w: 41, h: 1 },
  { id: "arrow-7", x: 687, y: 165, w: 41, h: 1 },
  { id: "arrow-8", x: 856, y: 165, w: 42, h: 1 },
  { id: "arrow-9", x: 1026, y: 165, w: 42, h: 1 },
  { id: "arrow-10", x: 1196, y: 165, w: 41, h: 1 },
  { id: "arrow-11", x: 856, y: 395, w: 42, h: 1 },
  { id: "arrow-12", x: 1026, y: 395, w: 42, h: 1 },
  { id: "arrow-13", x: 1196, y: 395, w: 41, h: 1 },
];

const HORIZONTAL_CONNECTORS = CONNECTORS.filter((connector) => connector.w > connector.h);

const LABEL_FALLBACKS: Record<string, string> = {
  "node-resource-mgmt-call": "Resource Mgmt. Call",
  "node-field-work-completed-lower": "Field Work Completed",
  "node-outage-order-closed-mds-lower": "Outage Order Closed (MDS)",
  "node-outage-order-closed-sap-lower": "Outage Order Closed (SAP)",
};

const LABEL_TEXT_FIT_OVERRIDES: Record<string, string> = {
  "node-order-dispatch-crew": "Order Dispatch to\nCrew",
  "node-field-work-completed": "Field Work\nCompleted",
  "node-field-work-completed-lower": "Field Work\nCompleted",
  "node-outage-order-closed-mds": "Outage Order\nClosed (MDS)",
  "node-outage-order-closed-mds-lower": "Outage Order\nClosed (MDS)",
  "node-outage-order-closed-sap": "Outage Order\nClosed (SAP)",
  "node-outage-order-closed-sap-lower": "Outage Order\nClosed (SAP)",
};

function asPercentX(px: number) {
  return `${(px / FRAME_WIDTH) * 100}%`;
}

function asPercentY(px: number) {
  return `${(px / FRAME_HEIGHT) * 100}%`;
}

function getNodeClass(kind: NodeKind) {
  if (kind === "automation") {
    return "border-[#F3F3F3] bg-[#F3F3F3] text-[#222222]";
  }

  return "border-[#F3F3F3] bg-[#222222] text-[#F3F3F3]";
}

function getLabel(id: string, contentMap: Map<string, string>) {
  return LABEL_TEXT_FIT_OVERRIDES[id] ?? contentMap.get(id) ?? LABEL_FALLBACKS[id] ?? id;
}

export function LegacyRevenueFlowDiagram({
  automated,
  diagram,
}: LegacyRevenueFlowDiagramProps) {
  const contentMap = new Map(diagram.nodes.map((node) => [node.id, node.label]));

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-[1368px] overflow-hidden bg-[#222222] [aspect-ratio:1368/566]">
        {CONNECTORS.map((connector) => (
          <div
            key={connector.id}
            className="absolute bg-[#959595]"
            style={{
              left: asPercentX(connector.x),
              top: asPercentY(connector.y),
              width: asPercentX(connector.w),
              height: asPercentY(connector.h),
            }}
          />
        ))}

        {automated
          ? HORIZONTAL_CONNECTORS.map((connector, index) => (
              <div
                key={`${connector.id}-dot-track`}
                className="pointer-events-none absolute"
                style={{
                  left: asPercentX(connector.x),
                  top: asPercentY(connector.y),
                  width: asPercentX(connector.w),
                  height: 1,
                }}
              >
                <div
                  className="llmday-flow-dot absolute top-1/2 h-[6px] w-[6px] -translate-y-1/2 rounded-full bg-[#F3F3F3]"
                  style={{
                    animationDuration: `${Math.max(1.1, connector.w / 70) * 2}s`,
                    animationDelay: `${index * 0.12}s`,
                  }}
                />
              </div>
            ))
          : null}

        {NODES.map((node) => (
          <div
            key={node.id}
            className={`absolute flex items-center justify-center rounded-lg border px-2.5 py-2 text-center text-sm font-medium leading-[1.25] whitespace-pre-line ${getNodeClass(node.kind)}`}
            style={{
              left: asPercentX(node.x),
              top: asPercentY(node.y),
              width: asPercentX(node.w),
              height: asPercentY(node.h),
            }}
          >
            {getLabel(node.id, contentMap)}
          </div>
        ))}

        <div className="absolute bottom-[5.4%] right-[3.2%] flex flex-col gap-5">
          <div className="flex items-center gap-3 whitespace-nowrap">
            <div className="h-5 w-5 shrink-0 rounded-[2px] border border-[#F3F3F3] bg-[#F3F3F3]" />
            <span className="text-sm font-medium text-[#F3F3F3]">Automation</span>
          </div>
          <div className="flex items-center gap-3 whitespace-nowrap">
            <div className="h-5 w-5 shrink-0 rounded-[2px] border border-[#F3F3F3] bg-transparent" />
            <span className="text-sm font-medium text-[#F3F3F3]">People</span>
          </div>
        </div>

        <style jsx>{`
          .llmday-flow-dot {
            left: 0;
            animation-name: llmday-flow-dot-ltr;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }

          @keyframes llmday-flow-dot-ltr {
            0% {
              left: 0;
              opacity: 0.3;
            }
            15% {
              opacity: 1;
            }
            100% {
              left: calc(100% - 6px);
              opacity: 0.3;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
