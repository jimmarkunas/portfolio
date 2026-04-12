import { useMemo } from "react";

import type {
  Slide5CanvasConfig,
  Slide5ConnectorLayout,
  Slide5NodeLayout,
} from "./slide5Diagram.types";
import { buildConnectorPath, createNodeMap } from "./slide5Diagram.utils";

interface DiagramConnectorLayerProps {
  canvas: Slide5CanvasConfig;
  nodes: Slide5NodeLayout[];
  connectors: Slide5ConnectorLayout[];
}

export default function DiagramConnectorLayer({
  canvas,
  nodes,
  connectors,
}: DiagramConnectorLayerProps) {
  const nodeMap = useMemo(() => createNodeMap(nodes), [nodes]);

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0"
      width={canvas.width}
      height={canvas.height}
      viewBox={`0 0 ${canvas.width} ${canvas.height}`}
      fill="none"
      aria-hidden="true"
    >
      {connectors.map((connector) => {
        const path = buildConnectorPath(connector, nodeMap);

        if (!path) {
          return null;
        }

        return (
          <path
            key={connector.id}
            d={path}
            stroke={connector.stroke}
            strokeWidth={connector.strokeWidth}
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        );
      })}
    </svg>
  );
}
