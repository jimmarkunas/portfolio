export interface ImageEntry {
  id: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface StatEntry {
  id: string;
  label: string;
  sub: string;
}

export interface TextListEntry {
  id: string;
  text: string;
}

export interface ServiceCategoryEntry {
  id: string;
  title: string;
  percent: string | null;
  items: TextListEntry[];
}

export interface DarkModeTextEntry {
  id: string;
  text: string;
  dark: boolean;
}

export interface AwardEntry {
  id: string;
  title: string;
  desc: string;
}

export interface ToolEntry {
  id: string;
  name: string;
  cost: string;
}

export interface CircleEntry {
  id: string;
  label: string;
  value: string;
}

export interface RiskColumnEntry {
  id: string;
  title: string;
  items: string[];
}

export interface RiskMatrixPointEntry {
  id: string;
  xPercent: number;
  yPercent: number;
  color: string;
}

export interface ComposableStackLayerEntry {
  id: string;
  title: string;
  items: string[];
}

export interface ComposableStackFeatureEntry {
  id: string;
  icon: "Layers" | "Server" | "Database" | "Cpu";
  title: string;
  desc: string;
}

export interface WhyJimPointEntry {
  id: string;
  icon: "Shield" | "Cpu" | "Target" | "Users" | "Zap" | "Globe";
  title: string;
  desc: string;
}

export interface RescuePlanPhaseEntry {
  id: string;
  title: string;
  desc: string;
}

export interface RescuePlanWeekEntry {
  id: string;
  title: string;
  points: string[];
}

export interface StatusReportEntry {
  programName: string;
  status: string;
  accomplishments: string[];
  inProgress: string[];
  upcoming: string[];
  blockers: string;
}

export interface StatusExecutiveViewEntry {
  title: string;
  desc: string;
  sla: string;
  blockersCount: string;
}

export type Slide5ZoneLabelKey = "planning" | "execution" | "delivery";

export type Slide5NodeLabelKey =
  | "planningDiscovery"
  | "planningJira"
  | "planningSchedule"
  | "planningReview"
  | "planningKickoff"
  | "executionGrooming"
  | "executionVersioning"
  | "executionStandups"
  | "executionSprint"
  | "deliveryQa"
  | "deliveryRelease";

export type Slide5LegendLabelKey = "waterfall" | "agile";

export interface Slide5TooltipContent {
  label?: string;
  title: string;
  body: string;
}

export type Slide5DiagramTooltips = Record<string, Slide5TooltipContent>;

export interface Slide5TooltipTheme {
  overlayColor: string;
  backgroundColor: string;
  borderColor: string;
  shadow: string;
  labelColor: string;
  titleColor: string;
  dividerColor: string;
  bodyColor: string;
  closeBorderColor: string;
  closeColor: string;
}

export interface Slide5AnimationTheme {
  particleColor: string;
  particleSpeedMultiplier: number;
  particlesPerPath: number;
  dashedBorderColor: string;
  dashedBorderWidth: number;
  dashedBorderDasharray: string;
  dashedBorderOpacity: number;
  dashedBorderRadius: number;
  dashedBorderInset: number;
  dashedBorderDurationSeconds: number;
  tooltip: Slide5TooltipTheme;
}

export interface Slide5AnimationThemeOverrides
  extends Partial<Omit<Slide5AnimationTheme, "tooltip">> {
  tooltip?: Partial<Slide5TooltipTheme>;
}

export type Slide5ThemePreset = "laptop" | "projector";

export type Slide5AnimationThemePresetMap = Record<
  Slide5ThemePreset,
  Slide5AnimationThemeOverrides
>;

export interface Slide5DiagramLabels {
  zones: Record<Slide5ZoneLabelKey, string>;
  nodes: Record<Slide5NodeLabelKey, string>;
  legend: Record<Slide5LegendLabelKey, string>;
}

export type Slide6NodeTypeLabelKey = "epic" | "story" | "ac" | "bug";

export type Slide6NodeBodyLabelKey =
  | "epicBody"
  | "storyLeftBody"
  | "storyMiddleBody"
  | "storyRightBody"
  | "acLeftBody"
  | "bugLeftBody"
  | "acMiddleBody"
  | "bugMiddleBody"
  | "acRightBody"
  | "bugRightBody";

export interface Slide6DiagramLabels {
  nodeTypes: Record<Slide6NodeTypeLabelKey, string>;
  nodes: Record<Slide6NodeBodyLabelKey, string>;
}

export interface InterviewsContent {
  brandLogo: ImageEntry;
  navigation: {
    previousAriaLabel: string;
    nextAriaLabel: string;
    openTocAriaLabel: string;
    toggleFullscreenAriaLabel: string;
    tocDialogAriaLabel: string;
    tocTitle: string;
    closeButtonLabel: string;
  };
  slideTitles: string[];
  slides: {
    who: {
      id: string;
      title: string;
      subtitle: string;
      companies: {
        label: string;
        logos: ImageEntry[];
      };
      stats: StatEntry[];
    };
    outcomes: {
      id: string;
      title: string;
      subtitle: string;
      projects: {
        label: string;
        logos: ImageEntry[];
      };
      stats: StatEntry[];
    };
    services: {
      id: string;
      title: string;
      subtitle: string;
      categories: ServiceCategoryEntry[];
    };
    greatestPm: {
      id: string;
      title: string;
      subtitle: string;
      pmpScoreCardTitle: string;
      pmpImage: ImageEntry;
      pmpOverlayText: string;
      metricsTitle: string;
      metricsImage: ImageEntry;
      awards: AwardEntry[];
    };
    hybridAgile: {
      id: string;
      title: string;
      subtitle: string;
      diagram: Slide5DiagramLabels;
      tooltips: Slide5DiagramTooltips;
      themePreset?: Slide5ThemePreset;
      themes?: Slide5AnimationThemePresetMap;
      theme?: Slide5AnimationThemeOverrides;
    };
    jiraTickets: {
      id: string;
      title: string;
      subtitle: string;
      diagram: Slide6DiagramLabels;
    };
    riskLandscape: {
      id: string;
      title: string;
      subtitle: string;
      columns: RiskColumnEntry[];
      matrix: {
        xAxisLabel: string;
        yAxisLabel: string;
        safeZoneLabel: string;
        criticalZoneLabel: string;
        points: RiskMatrixPointEntry[];
      };
    };
    statusReport: {
      id: string;
      title: string;
      subtitle: string;
      report: StatusReportEntry;
      execView: StatusExecutiveViewEntry;
    };
    composableStack: {
      id: string;
      title: string;
      subtitle: string;
      layers: ComposableStackLayerEntry[];
      features: ComposableStackFeatureEntry[];
    };
    titleSlide: {
      id: string;
      eyebrow: string;
      titlePrefix: string;
      titleHighlight: string;
      titleSuffix: string;
      byline: string;
      sponsor: string;
    };
    cover: {
      id: string;
      title: string;
      description: string;
      reasonLabel: string;
      reasons: TextListEntry[];
    };
    boehringer: {
      id: string;
      title: string;
      subtitle: string;
      silos: string[];
      unified: string;
      challenge: {
        title: string;
        desc: string;
      };
      result: {
        title: string;
        desc: string;
      };
    };
    modere: {
      id: string;
      title: string;
      caseStudyLabel: string;
      paragraphs: TextListEntry[];
      goalLabel: string;
      goalText: string;
    };
    engineers: {
      id: string;
      title: string;
      titleTop: string;
      titleMiddle: string;
      titleBottom: string;
      circles: CircleEntry[];
    };
    goal: {
      id: string;
      title: string;
      description: string;
    };
    tools: {
      id: string;
      title: string;
      items: ToolEntry[];
    };
    preSetup: {
      id: string;
      title: string;
      steps: TextListEntry[];
    };
    buildPart1: {
      id: string;
      titlePrefix: string;
      titleHighlight: string;
      steps: TextListEntry[];
    };
    buildPart2: {
      id: string;
      titlePrefix: string;
      titleHighlight: string;
      subtitle: string;
      stepPrefix: string;
      steps: TextListEntry[];
    };
    finalize: {
      id: string;
      title: string;
      firstStepNumber: string;
      firstStepLabel: string;
      secondStepNumber: string;
      secondStepLabel: string;
      completionText: string;
    };
    whyJim: {
      id: string;
      title: string;
      subtitle: string;
      points: WhyJimPointEntry[];
    };
    rescuePlan: {
      id: string;
      title: string;
      subtitle: string;
      carouselPhases: RescuePlanPhaseEntry[];
      weeks: RescuePlanWeekEntry[];
    };
    thankYou: {
      id: string;
      title: string;
      subtitle: string;
      name: string;
      role: string;
      email: string;
      linkedin: string;
      readyText: string;
    };
  };
}

export type ProductDeliverySlideKey =
  | "who"
  | "outcomes"
  | "services"
  | "greatestPm"
  | "hybridAgile"
  | "jiraTickets"
  | "riskLandscape"
  | "statusReport"
  | "composableStack";

export type LegacyModernizationSlideKey =
  | "titleSlide"
  | "cover"
  | "boehringer"
  | "modere"
  | "engineers"
  | "goal"
  | "tools"
  | "preSetup"
  | "buildPart1"
  | "buildPart2"
  | "finalize";

export type LeadershipCloseSlideKey = "whyJim" | "rescuePlan" | "thankYou";

export type InterviewSlideSubset<K extends keyof InterviewsContent["slides"]> = Pick<
  InterviewsContent["slides"],
  K
>;
