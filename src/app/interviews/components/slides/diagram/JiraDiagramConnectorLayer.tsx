import { useMemo } from "react";

import type {
  Slide6CanvasConfig,
  Slide6ConnectorLayout,
  Slide6NodeLayout,
} from "./slide6Diagram.types";
import { buildConnectorPath, createNodeMap } from "./slide6Diagram.utils";

interface JiraDiagramConnectorLayerProps {
  canvas: Slide6CanvasConfig;
  nodes: Slide6NodeLayout[];
  connectors: Slide6ConnectorLayout[];
}

export default function JiraDiagramConnectorLayer({
  canvas,
  nodes,
  connectors,
}: JiraDiagramConnectorLayerProps) {
  const nodeMap = useMemo(() => createNodeMap(nodes), [nodes]);

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-10"
      width={canvas.width}
      height={canvas.height}
      viewBox={`0 0 ${canvas.width} ${canvas.height}`}
      fill="none"
      aria-hidden="true"
    >
      {connectors.map((connector) => {
        const path = buildConnectorPath(connector, nodeMap);
        if (!path) return null;

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
