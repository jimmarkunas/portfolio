import type {
  Slide6AnchorRef,
  Slide6ConnectorLayout,
  Slide6NodeId,
  Slide6NodeLayout,
  Slide6Point,
} from "./slide6Diagram.types";
import {
  buildConnectorPath as buildConnectorPathShared,
  buildConnectorPoints as buildConnectorPointsShared,
  createNodeMap as createNodeMapShared,
  getDiagramBounds as getDiagramBoundsShared,
  getNodeAnchorPoint as getNodeAnchorPointShared,
  getScaleToFit as getScaleToFitShared,
  offsetConnectors as offsetConnectorsShared,
  offsetNodes as offsetNodesShared,
  pointsToPath as pointsToPathShared,
  type DiagramBounds,
  type DiagramNodeMap,
} from "./sharedDiagram.utils";

export type Slide6NodeMap = DiagramNodeMap<Slide6NodeId, Slide6NodeLayout>;
export type Slide6Bounds = DiagramBounds;

export function createNodeMap(nodes: Slide6NodeLayout[]): Slide6NodeMap {
  return createNodeMapShared(nodes);
}

export function getNodeAnchorPoint(node: Slide6NodeLayout, anchor: Slide6AnchorRef): Slide6Point {
  return getNodeAnchorPointShared(node, anchor);
}

export function buildConnectorPoints(connector: Slide6ConnectorLayout, nodeMap: Slide6NodeMap): Slide6Point[] {
  return buildConnectorPointsShared(connector, nodeMap);
}

export function pointsToPath(points: Slide6Point[]): string {
  return pointsToPathShared(points);
}

export function buildConnectorPath(connector: Slide6ConnectorLayout, nodeMap: Slide6NodeMap): string {
  return buildConnectorPathShared(connector, nodeMap);
}

export function getScaleToFit(
  containerWidth: number,
  containerHeight: number,
  contentWidth: number,
  contentHeight: number,
): number {
  return getScaleToFitShared(containerWidth, containerHeight, contentWidth, contentHeight);
}

export function getDiagramBounds(nodes: Slide6NodeLayout[], connectors: Slide6ConnectorLayout[]): Slide6Bounds {
  return getDiagramBoundsShared(nodes, connectors);
}

export function offsetNodes(nodes: Slide6NodeLayout[], offsetX: number, offsetY: number): Slide6NodeLayout[] {
  return offsetNodesShared(nodes, offsetX, offsetY);
}

export function offsetConnectors(
  connectors: Slide6ConnectorLayout[],
  offsetX: number,
  offsetY: number,
): Slide6ConnectorLayout[] {
  return offsetConnectorsShared(connectors, offsetX, offsetY);
}
