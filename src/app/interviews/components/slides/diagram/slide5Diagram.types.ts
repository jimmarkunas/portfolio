import type {
  Slide5AnimationTheme,
  Slide5AnimationThemeOverrides,
  Slide5AnimationThemePresetMap,
  Slide5DiagramLabels,
  Slide5DiagramTooltips,
  Slide5LegendLabelKey,
  Slide5NodeLabelKey,
  Slide5ThemePreset,
  Slide5TooltipContent,
  Slide5TooltipTheme,
  Slide5ZoneLabelKey,
} from "@/content/interviews/types";

export type {
  Slide5AnimationTheme,
  Slide5AnimationThemeOverrides,
  Slide5AnimationThemePresetMap,
  Slide5DiagramLabels,
  Slide5DiagramTooltips,
  Slide5LegendLabelKey,
  Slide5NodeLabelKey,
  Slide5ThemePreset,
  Slide5TooltipContent,
  Slide5TooltipTheme,
  Slide5ZoneLabelKey,
} from "@/content/interviews/types";

export type Slide5ZoneId = "planning" | "execution" | "delivery";

export type Slide5NodeId =
  | "planning-discovery"
  | "planning-jira"
  | "planning-schedule"
  | "planning-review"
  | "planning-kickoff"
  | "execution-grooming"
  | "execution-versioning"
  | "execution-standups"
  | "execution-sprint"
  | "delivery-qa"
  | "delivery-release";

export type Slide5CardTheme = "waterfall" | "agile";

export type Slide5AnchorSide = "top" | "right" | "bottom" | "left";

export type Slide5ConnectorMode = "straight" | "orthogonal";

export type Slide5OrthogonalPattern = "h-v" | "v-h" | "h-v-h" | "v-h-v";

export interface Slide5Point {
  x: number;
  y: number;
}

export interface Slide5CanvasConfig {
  width: number;
  height: number;
}

export interface Slide5ZoneBorder {
  style: "solid" | "dashed";
  width: number;
  color: string;
  radius?: number;
}

export interface Slide5ZoneLayout {
  id: Slide5ZoneId;
  x: number;
  y: number;
  w: number;
  h: number;
  labelKey: Slide5ZoneLabelKey;
  labelHeight: number;
  border?: Slide5ZoneBorder;
}

export interface Slide5NodeLayout {
  id: Slide5NodeId;
  x: number;
  y: number;
  w: number;
  h: number;
  theme: Slide5CardTheme;
  labelKey: Slide5NodeLabelKey;
  radius?: number;
}

export interface Slide5AnchorRef {
  nodeId: Slide5NodeId;
  side: Slide5AnchorSide;
  offset?: number;
}

export interface Slide5ConnectorRoute {
  pattern: Slide5OrthogonalPattern;
  midX?: number;
  midY?: number;
}

export interface Slide5ConnectorLayout {
  id: string;
  from: Slide5AnchorRef;
  to: Slide5AnchorRef;
  mode: Slide5ConnectorMode;
  route?: Slide5ConnectorRoute;
  stroke: string;
  strokeWidth: number;
}

export interface Slide5LegendItemLayout {
  id: string;
  labelKey: Slide5LegendLabelKey;
  theme: Slide5CardTheme;
}

export interface Slide5LegendLayout {
  x: number;
  y: number;
  itemSize: number;
  rowGap: number;
  labelOffsetX: number;
  items: Slide5LegendItemLayout[];
}

export interface Slide5LayoutPreset {
  id: "desktop";
  canvas: Slide5CanvasConfig;
  zones: Slide5ZoneLayout[];
  nodes: Slide5NodeLayout[];
  connectors: Slide5ConnectorLayout[];
  legend: Slide5LegendLayout;
}
