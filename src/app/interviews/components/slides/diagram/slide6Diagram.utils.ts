import type {
  Slide6AnchorRef,
  Slide6AnchorSide,
  Slide6ConnectorLayout,
  Slide6ConnectorRoute,
  Slide6NodeId,
  Slide6NodeLayout,
  Slide6Point,
} from "./slide6Diagram.types";

export type Slide6NodeMap = Record<Slide6NodeId, Slide6NodeLayout>;

export interface Slide6Bounds {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
  width: number;
  height: number;
}

export function createNodeMap(nodes: Slide6NodeLayout[]): Slide6NodeMap {
  return nodes.reduce((acc, node) => {
    acc[node.id] = node;
    return acc;
  }, {} as Slide6NodeMap);
}

function offsetPointForSide(point: Slide6Point, side: Slide6AnchorSide, offset: number): Slide6Point {
  if (offset === 0) return point;

  if (side === "left" || side === "right") {
    return { x: point.x, y: point.y + offset };
  }

  return { x: point.x + offset, y: point.y };
}

export function getNodeAnchorPoint(node: Slide6NodeLayout, anchor: Slide6AnchorRef): Slide6Point {
  const offset = anchor.offset ?? 0;

  switch (anchor.side) {
    case "top":
      return offsetPointForSide({ x: node.x + node.w / 2, y: node.y }, anchor.side, offset);
    case "right":
      return offsetPointForSide({ x: node.x + node.w, y: node.y + node.h / 2 }, anchor.side, offset);
    case "bottom":
      return offsetPointForSide({ x: node.x + node.w / 2, y: node.y + node.h }, anchor.side, offset);
    case "left":
      return offsetPointForSide({ x: node.x, y: node.y + node.h / 2 }, anchor.side, offset);
    default:
      return { x: node.x, y: node.y };
  }
}

export function buildConnectorPoints(connector: Slide6ConnectorLayout, nodeMap: Slide6NodeMap): Slide6Point[] {
  const fromNode = nodeMap[connector.from.nodeId];
  const toNode = nodeMap[connector.to.nodeId];

  if (!fromNode || !toNode) {
    return [];
  }

  const start = getNodeAnchorPoint(fromNode, connector.from);
  const end = getNodeAnchorPoint(toNode, connector.to);

  if (connector.mode === "straight") {
    return [start, end];
  }

  const route = connector.route;
  const pattern = route?.pattern ?? "h-v";

  if (pattern === "h-v") {
    return [start, { x: end.x, y: start.y }, end];
  }

  if (pattern === "v-h") {
    return [start, { x: start.x, y: end.y }, end];
  }

  if (pattern === "h-v-h") {
    const midX = route?.midX ?? (start.x + end.x) / 2;
    return [start, { x: midX, y: start.y }, { x: midX, y: end.y }, end];
  }

  const midY = route?.midY ?? (start.y + end.y) / 2;
  return [start, { x: start.x, y: midY }, { x: end.x, y: midY }, end];
}

function dedupeConsecutivePoints(points: Slide6Point[]): Slide6Point[] {
  if (points.length < 2) return points;

  const cleaned: Slide6Point[] = [points[0]];

  for (let i = 1; i < points.length; i += 1) {
    const prev = cleaned[cleaned.length - 1];
    const next = points[i];

    if (prev.x === next.x && prev.y === next.y) continue;

    cleaned.push(next);
  }

  return cleaned;
}

export function pointsToPath(points: Slide6Point[]): string {
  const cleaned = dedupeConsecutivePoints(points);
  if (cleaned.length === 0) return "";

  return cleaned.reduce((path, point, index) => {
    if (index === 0) {
      return `M ${point.x} ${point.y}`;
    }

    return `${path} L ${point.x} ${point.y}`;
  }, "");
}

export function buildConnectorPath(connector: Slide6ConnectorLayout, nodeMap: Slide6NodeMap): string {
  const points = buildConnectorPoints(connector, nodeMap);
  return pointsToPath(points);
}

export function getScaleToFit(
  containerWidth: number,
  containerHeight: number,
  contentWidth: number,
  contentHeight: number,
): number {
  if (containerWidth <= 0 || containerHeight <= 0 || contentWidth <= 0 || contentHeight <= 0) {
    return 1;
  }

  return Math.min(containerWidth / contentWidth, containerHeight / contentHeight);
}

function createInitialBounds(): Slide6Bounds {
  return {
    minX: Number.POSITIVE_INFINITY,
    minY: Number.POSITIVE_INFINITY,
    maxX: Number.NEGATIVE_INFINITY,
    maxY: Number.NEGATIVE_INFINITY,
    width: 0,
    height: 0,
  };
}

function expandBoundsWithPoint(bounds: Slide6Bounds, point: Slide6Point): void {
  bounds.minX = Math.min(bounds.minX, point.x);
  bounds.minY = Math.min(bounds.minY, point.y);
  bounds.maxX = Math.max(bounds.maxX, point.x);
  bounds.maxY = Math.max(bounds.maxY, point.y);
}

function expandBoundsWithRect(bounds: Slide6Bounds, x: number, y: number, w: number, h: number): void {
  expandBoundsWithPoint(bounds, { x, y });
  expandBoundsWithPoint(bounds, { x: x + w, y: y + h });
}

function finalizeBounds(bounds: Slide6Bounds): Slide6Bounds {
  if (
    !Number.isFinite(bounds.minX) ||
    !Number.isFinite(bounds.minY) ||
    !Number.isFinite(bounds.maxX) ||
    !Number.isFinite(bounds.maxY)
  ) {
    return {
      minX: 0,
      minY: 0,
      maxX: 0,
      maxY: 0,
      width: 0,
      height: 0,
    };
  }

  return {
    ...bounds,
    width: Math.max(0, bounds.maxX - bounds.minX),
    height: Math.max(0, bounds.maxY - bounds.minY),
  };
}

export function getDiagramBounds(nodes: Slide6NodeLayout[], connectors: Slide6ConnectorLayout[]): Slide6Bounds {
  const bounds = createInitialBounds();
  const nodeMap = createNodeMap(nodes);

  nodes.forEach((node) => {
    expandBoundsWithRect(bounds, node.x, node.y, node.w, node.h);
  });

  connectors.forEach((connector) => {
    const points = buildConnectorPoints(connector, nodeMap);
    points.forEach((point) => expandBoundsWithPoint(bounds, point));
  });

  return finalizeBounds(bounds);
}

export function offsetNodes(nodes: Slide6NodeLayout[], offsetX: number, offsetY: number): Slide6NodeLayout[] {
  return nodes.map((node) => ({
    ...node,
    x: node.x + offsetX,
    y: node.y + offsetY,
  }));
}

function offsetConnectorRoute(
  route: Slide6ConnectorRoute | undefined,
  offsetX: number,
  offsetY: number,
): Slide6ConnectorRoute | undefined {
  if (!route) return undefined;

  return {
    ...route,
    midX: route.midX !== undefined ? route.midX + offsetX : undefined,
    midY: route.midY !== undefined ? route.midY + offsetY : undefined,
  };
}

export function offsetConnectors(
  connectors: Slide6ConnectorLayout[],
  offsetX: number,
  offsetY: number,
): Slide6ConnectorLayout[] {
  return connectors.map((connector) => ({
    ...connector,
    route: offsetConnectorRoute(connector.route, offsetX, offsetY),
  }));
}
