import type {
  Slide5AnchorRef,
  Slide5ConnectorLayout,
  Slide5NodeId,
  Slide5NodeLayout,
  Slide5Point,
  Slide5ZoneLayout,
} from "./slide5Diagram.types";
import {
  buildConnectorPath as buildConnectorPathShared,
  buildConnectorPoints as buildConnectorPointsShared,
  createNodeMap as createNodeMapShared,
  getDiagramBounds as getDiagramBoundsShared,
  getNodeAnchorPoint as getNodeAnchorPointShared,
  getScaleToFit as getScaleToFitShared,
  offsetConnectors as offsetConnectorsShared,
  offsetNodes as offsetNodesShared,
  offsetRects as offsetRectsShared,
  pointsToPath as pointsToPathShared,
  type DiagramBounds,
  type DiagramNodeMap,
} from "./sharedDiagram.utils";

export type Slide5NodeMap = DiagramNodeMap<Slide5NodeId, Slide5NodeLayout>;
export type Slide5Bounds = DiagramBounds;

export function createNodeMap(nodes: Slide5NodeLayout[]): Slide5NodeMap {
  return createNodeMapShared(nodes);
}

export function getNodeAnchorPoint(node: Slide5NodeLayout, anchor: Slide5AnchorRef): Slide5Point {
  return getNodeAnchorPointShared(node, anchor);
}

export function buildConnectorPoints(connector: Slide5ConnectorLayout, nodeMap: Slide5NodeMap): Slide5Point[] {
  return buildConnectorPointsShared(connector, nodeMap);
}

export function pointsToPath(points: Slide5Point[]): string {
  return pointsToPathShared(points);
}

export function buildConnectorPath(connector: Slide5ConnectorLayout, nodeMap: Slide5NodeMap): string {
  return buildConnectorPathShared(connector, nodeMap);
}

export function getScaleToFit(
  containerWidth: number,
  containerHeight: number,
  canvasWidth: number,
  canvasHeight: number,
): number {
  return getScaleToFitShared(containerWidth, containerHeight, canvasWidth, canvasHeight);
}

export function getDiagramBounds(
  zones: Slide5ZoneLayout[],
  nodes: Slide5NodeLayout[],
  connectors: Slide5ConnectorLayout[],
): Slide5Bounds {
  return getDiagramBoundsShared(nodes, connectors, zones);
}

export function offsetNodes(
  nodes: Slide5NodeLayout[],
  offsetX: number,
  offsetY: number,
): Slide5NodeLayout[] {
  return offsetNodesShared(nodes, offsetX, offsetY);
}

export function offsetZones(
  zones: Slide5ZoneLayout[],
  offsetX: number,
  offsetY: number,
): Slide5ZoneLayout[] {
  return offsetRectsShared(zones, offsetX, offsetY);
}

export function offsetConnectors(
  connectors: Slide5ConnectorLayout[],
  offsetX: number,
  offsetY: number,
): Slide5ConnectorLayout[] {
  return offsetConnectorsShared(connectors, offsetX, offsetY);
}
