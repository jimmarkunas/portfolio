import type {
  Slide5ConnectorRoute,
  Slide5AnchorRef,
  Slide5AnchorSide,
  Slide5ConnectorLayout,
  Slide5NodeId,
  Slide5NodeLayout,
  Slide5Point,
  Slide5ZoneLayout,
} from "./slide5Diagram.types";

export type Slide5NodeMap = Record<Slide5NodeId, Slide5NodeLayout>;

export interface Slide5Bounds {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
  width: number;
  height: number;
}

export function createNodeMap(nodes: Slide5NodeLayout[]): Slide5NodeMap {
  return nodes.reduce((acc, node) => {
    acc[node.id] = node;
    return acc;
  }, {} as Slide5NodeMap);
}

function offsetPointForSide(
  point: Slide5Point,
  side: Slide5AnchorSide,
  offset: number,
): Slide5Point {
  if (offset === 0) return point;

  if (side === "left" || side === "right") {
    return { x: point.x, y: point.y + offset };
  }

  return { x: point.x + offset, y: point.y };
}

export function getNodeAnchorPoint(node: Slide5NodeLayout, anchor: Slide5AnchorRef): Slide5Point {
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

export function buildConnectorPoints(
  connector: Slide5ConnectorLayout,
  nodeMap: Slide5NodeMap,
): Slide5Point[] {
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

function dedupeConsecutivePoints(points: Slide5Point[]): Slide5Point[] {
  if (points.length < 2) return points;

  const cleaned: Slide5Point[] = [points[0]];

  for (let i = 1; i < points.length; i += 1) {
    const prev = cleaned[cleaned.length - 1];
    const next = points[i];

    if (prev.x === next.x && prev.y === next.y) {
      continue;
    }

    cleaned.push(next);
  }

  return cleaned;
}

export function pointsToPath(points: Slide5Point[]): string {
  const cleaned = dedupeConsecutivePoints(points);
  if (cleaned.length === 0) return "";

  return cleaned.reduce((path, point, index) => {
    if (index === 0) {
      return `M ${point.x} ${point.y}`;
    }

    return `${path} L ${point.x} ${point.y}`;
  }, "");
}

export function buildConnectorPath(
  connector: Slide5ConnectorLayout,
  nodeMap: Slide5NodeMap,
): string {
  const points = buildConnectorPoints(connector, nodeMap);
  return pointsToPath(points);
}

export function getScaleToFit(
  containerWidth: number,
  containerHeight: number,
  canvasWidth: number,
  canvasHeight: number,
): number {
  if (containerWidth <= 0 || containerHeight <= 0 || canvasWidth <= 0 || canvasHeight <= 0) {
    return 1;
  }

  const widthScale = containerWidth / canvasWidth;
  const heightScale = containerHeight / canvasHeight;

  return Math.min(widthScale, heightScale);
}

function createInitialBounds(): Slide5Bounds {
  return {
    minX: Number.POSITIVE_INFINITY,
    minY: Number.POSITIVE_INFINITY,
    maxX: Number.NEGATIVE_INFINITY,
    maxY: Number.NEGATIVE_INFINITY,
    width: 0,
    height: 0,
  };
}

function expandBoundsWithPoint(bounds: Slide5Bounds, point: Slide5Point): void {
  bounds.minX = Math.min(bounds.minX, point.x);
  bounds.minY = Math.min(bounds.minY, point.y);
  bounds.maxX = Math.max(bounds.maxX, point.x);
  bounds.maxY = Math.max(bounds.maxY, point.y);
}

function expandBoundsWithRect(
  bounds: Slide5Bounds,
  x: number,
  y: number,
  w: number,
  h: number,
): void {
  expandBoundsWithPoint(bounds, { x, y });
  expandBoundsWithPoint(bounds, { x: x + w, y: y + h });
}

function finalizeBounds(bounds: Slide5Bounds): Slide5Bounds {
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

export function getDiagramBounds(
  zones: Slide5ZoneLayout[],
  nodes: Slide5NodeLayout[],
  connectors: Slide5ConnectorLayout[],
): Slide5Bounds {
  const bounds = createInitialBounds();
  const nodeMap = createNodeMap(nodes);

  zones.forEach((zone) => {
    expandBoundsWithRect(bounds, zone.x, zone.y, zone.w, zone.h);
  });

  nodes.forEach((node) => {
    expandBoundsWithRect(bounds, node.x, node.y, node.w, node.h);
  });

  connectors.forEach((connector) => {
    const points = buildConnectorPoints(connector, nodeMap);
    points.forEach((point) => expandBoundsWithPoint(bounds, point));
  });

  return finalizeBounds(bounds);
}

export function offsetNodes(
  nodes: Slide5NodeLayout[],
  offsetX: number,
  offsetY: number,
): Slide5NodeLayout[] {
  return nodes.map((node) => ({
    ...node,
    x: node.x + offsetX,
    y: node.y + offsetY,
  }));
}

export function offsetZones(
  zones: Slide5ZoneLayout[],
  offsetX: number,
  offsetY: number,
): Slide5ZoneLayout[] {
  return zones.map((zone) => ({
    ...zone,
    x: zone.x + offsetX,
    y: zone.y + offsetY,
  }));
}

function offsetConnectorRoute(
  route: Slide5ConnectorRoute | undefined,
  offsetX: number,
  offsetY: number,
): Slide5ConnectorRoute | undefined {
  if (!route) return undefined;

  return {
    ...route,
    midX: route.midX !== undefined ? route.midX + offsetX : undefined,
    midY: route.midY !== undefined ? route.midY + offsetY : undefined,
  };
}

export function offsetConnectors(
  connectors: Slide5ConnectorLayout[],
  offsetX: number,
  offsetY: number,
): Slide5ConnectorLayout[] {
  return connectors.map((connector) => ({
    ...connector,
    route: offsetConnectorRoute(connector.route, offsetX, offsetY),
  }));
}
