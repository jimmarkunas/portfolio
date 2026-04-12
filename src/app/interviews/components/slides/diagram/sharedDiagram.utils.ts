export type DiagramAnchorSide = "top" | "right" | "bottom" | "left";
export type DiagramConnectorMode = "straight" | "orthogonal";
export type DiagramOrthogonalPattern = "h-v" | "v-h" | "h-v-h" | "v-h-v";

export interface DiagramPoint {
  x: number;
  y: number;
}

export interface DiagramBounds {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
  width: number;
  height: number;
}

export interface DiagramRect {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface DiagramNodeBase<NodeId extends string> {
  id: NodeId;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface DiagramAnchorRef<NodeId extends string> {
  nodeId: NodeId;
  side: DiagramAnchorSide;
  offset?: number;
}

export interface DiagramConnectorRoute {
  pattern: DiagramOrthogonalPattern;
  midX?: number;
  midY?: number;
}

export interface DiagramConnectorBase<NodeId extends string> {
  id: string;
  from: DiagramAnchorRef<NodeId>;
  to: DiagramAnchorRef<NodeId>;
  mode: DiagramConnectorMode;
  route?: DiagramConnectorRoute;
  stroke: string;
  strokeWidth: number;
}

export type DiagramNodeMap<NodeId extends string, NodeLayout extends DiagramNodeBase<NodeId>> = Record<
  NodeId,
  NodeLayout
>;

export function createNodeMap<NodeId extends string, NodeLayout extends DiagramNodeBase<NodeId>>(
  nodes: NodeLayout[],
): DiagramNodeMap<NodeId, NodeLayout> {
  return nodes.reduce((acc, node) => {
    acc[node.id] = node;
    return acc;
  }, {} as DiagramNodeMap<NodeId, NodeLayout>);
}

function offsetPointForSide(point: DiagramPoint, side: DiagramAnchorSide, offset: number): DiagramPoint {
  if (offset === 0) return point;

  if (side === "left" || side === "right") {
    return { x: point.x, y: point.y + offset };
  }

  return { x: point.x + offset, y: point.y };
}

export function getNodeAnchorPoint<NodeId extends string, NodeLayout extends DiagramNodeBase<NodeId>>(
  node: NodeLayout,
  anchor: DiagramAnchorRef<NodeId>,
): DiagramPoint {
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

export function buildConnectorPoints<NodeId extends string, NodeLayout extends DiagramNodeBase<NodeId>>(
  connector: DiagramConnectorBase<NodeId>,
  nodeMap: DiagramNodeMap<NodeId, NodeLayout>,
): DiagramPoint[] {
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

function dedupeConsecutivePoints(points: DiagramPoint[]): DiagramPoint[] {
  if (points.length < 2) return points;

  const cleaned: DiagramPoint[] = [points[0]];

  for (let i = 1; i < points.length; i += 1) {
    const prev = cleaned[cleaned.length - 1];
    const next = points[i];

    if (prev.x === next.x && prev.y === next.y) continue;

    cleaned.push(next);
  }

  return cleaned;
}

export function pointsToPath(points: DiagramPoint[]): string {
  const cleaned = dedupeConsecutivePoints(points);
  if (cleaned.length === 0) return "";

  return cleaned.reduce((path, point, index) => {
    if (index === 0) {
      return `M ${point.x} ${point.y}`;
    }

    return `${path} L ${point.x} ${point.y}`;
  }, "");
}

export function buildConnectorPath<NodeId extends string, NodeLayout extends DiagramNodeBase<NodeId>>(
  connector: DiagramConnectorBase<NodeId>,
  nodeMap: DiagramNodeMap<NodeId, NodeLayout>,
): string {
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

function createInitialBounds(): DiagramBounds {
  return {
    minX: Number.POSITIVE_INFINITY,
    minY: Number.POSITIVE_INFINITY,
    maxX: Number.NEGATIVE_INFINITY,
    maxY: Number.NEGATIVE_INFINITY,
    width: 0,
    height: 0,
  };
}

function expandBoundsWithPoint(bounds: DiagramBounds, point: DiagramPoint): void {
  bounds.minX = Math.min(bounds.minX, point.x);
  bounds.minY = Math.min(bounds.minY, point.y);
  bounds.maxX = Math.max(bounds.maxX, point.x);
  bounds.maxY = Math.max(bounds.maxY, point.y);
}

function expandBoundsWithRect(bounds: DiagramBounds, rect: DiagramRect): void {
  expandBoundsWithPoint(bounds, { x: rect.x, y: rect.y });
  expandBoundsWithPoint(bounds, { x: rect.x + rect.w, y: rect.y + rect.h });
}

function finalizeBounds(bounds: DiagramBounds): DiagramBounds {
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

export function getDiagramBounds<NodeId extends string, NodeLayout extends DiagramNodeBase<NodeId>>(
  nodes: NodeLayout[],
  connectors: DiagramConnectorBase<NodeId>[],
  extraRects: DiagramRect[] = [],
): DiagramBounds {
  const bounds = createInitialBounds();
  const nodeMap = createNodeMap(nodes);

  extraRects.forEach((rect) => expandBoundsWithRect(bounds, rect));

  nodes.forEach((node) => {
    expandBoundsWithRect(bounds, { x: node.x, y: node.y, w: node.w, h: node.h });
  });

  connectors.forEach((connector) => {
    const points = buildConnectorPoints(connector, nodeMap);
    points.forEach((point) => expandBoundsWithPoint(bounds, point));
  });

  return finalizeBounds(bounds);
}

export function offsetNodes<NodeLayout extends { x: number; y: number }>(
  nodes: NodeLayout[],
  offsetX: number,
  offsetY: number,
): NodeLayout[] {
  return nodes.map((node) => ({
    ...node,
    x: node.x + offsetX,
    y: node.y + offsetY,
  }));
}

export function offsetRects<RectLayout extends { x: number; y: number }>(
  rects: RectLayout[],
  offsetX: number,
  offsetY: number,
): RectLayout[] {
  return rects.map((rect) => ({
    ...rect,
    x: rect.x + offsetX,
    y: rect.y + offsetY,
  }));
}

function offsetConnectorRoute(
  route: DiagramConnectorRoute | undefined,
  offsetX: number,
  offsetY: number,
): DiagramConnectorRoute | undefined {
  if (!route) return undefined;

  return {
    ...route,
    midX: route.midX !== undefined ? route.midX + offsetX : undefined,
    midY: route.midY !== undefined ? route.midY + offsetY : undefined,
  };
}

export function offsetConnectors<ConnectorLayout extends { route?: DiagramConnectorRoute }>(
  connectors: ConnectorLayout[],
  offsetX: number,
  offsetY: number,
): ConnectorLayout[] {
  return connectors.map((connector) => ({
    ...connector,
    route: offsetConnectorRoute(connector.route, offsetX, offsetY),
  }));
}
