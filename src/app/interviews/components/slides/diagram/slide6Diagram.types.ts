import type {
  Slide6NodeBodyLabelKey,
  Slide6NodeTypeLabelKey,
} from "@/content/interviews";

export type {
  Slide6DiagramLabels,
  Slide6NodeBodyLabelKey,
  Slide6NodeTypeLabelKey,
} from "@/content/interviews";

export type Slide6NodeId =
  | "epic"
  | "story-left"
  | "story-middle"
  | "story-right"
  | "ac-left"
  | "bug-left"
  | "ac-middle"
  | "bug-middle"
  | "ac-right"
  | "bug-right";

export type Slide6NodeTheme = "dark" | "light";

export type Slide6DotTone = "blue" | "dark" | "red";

export type Slide6AnchorSide = "top" | "right" | "bottom" | "left";

export type Slide6ConnectorMode = "straight" | "orthogonal";

export type Slide6OrthogonalPattern = "h-v" | "v-h" | "h-v-h" | "v-h-v";

export interface Slide6Point {
  x: number;
  y: number;
}

export interface Slide6CanvasConfig {
  width: number;
  height: number;
}

export interface Slide6NodeLayout {
  id: Slide6NodeId;
  x: number;
  y: number;
  w: number;
  h: number;
  theme: Slide6NodeTheme;
  dotTone: Slide6DotTone;
  typeLabelKey: Slide6NodeTypeLabelKey;
  bodyLabelKey: Slide6NodeBodyLabelKey;
  radius?: number;
}

export interface Slide6AnchorRef {
  nodeId: Slide6NodeId;
  side: Slide6AnchorSide;
  offset?: number;
}

export interface Slide6ConnectorRoute {
  pattern: Slide6OrthogonalPattern;
  midX?: number;
  midY?: number;
}

export interface Slide6ConnectorLayout {
  id: string;
  from: Slide6AnchorRef;
  to: Slide6AnchorRef;
  mode: Slide6ConnectorMode;
  route?: Slide6ConnectorRoute;
  stroke: string;
  strokeWidth: number;
}

export interface Slide6LayoutPreset {
  id: "desktop";
  canvas: Slide6CanvasConfig;
  nodes: Slide6NodeLayout[];
  connectors: Slide6ConnectorLayout[];
}
