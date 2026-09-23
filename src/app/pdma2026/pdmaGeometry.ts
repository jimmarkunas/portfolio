export type Point = { x: number; y: number };
export type Rect = Point & { width: number; height: number };
export type ImageGeometry = Point & { width: number; height?: number; opacity?: number };
export type TextGeometry = Point & { width?: number; size?: number; line?: number; tracking?: number };

export const pdmaGeometry = {
  canvas: { width: 1920, height: 1080 },
  slide01: {
    wide: { x: 415, y: 209, width: 1672, height: 941, opacity: .75 }, orb: { x: 1024, y: 219, width: 832, height: 832, opacity: .75 },
    speakerRule: { x: 84, y: 466, width: 78, height: 4 }, speakerName: { x: 84, y: 498 }, speakerRole: { x: 84, y: 549 },
  },
  slide02: {
    contentShiftY: 75,
    list: { y: 405, width: 600, height: 390, aiX: 72, humanX: 1326, itemStart: 93, itemPitch: 100, headingSize: 27, itemSize: 30, itemHeight: 74, tileSize: 74, tileMarginRight: 34, ruleY: 20, ruleX: 265, ruleWidth: 245 },
    circle: { y: 392, size: 360, aiX: 635, humanX: 905 }, cpu: { x: 755, y: 512, width: 120, height: 120 }, brain: { x: 1021, y: 508, width: 128, height: 128 },
    boundary: { y: 885, width: 1920, height: 100, gap: 28, contentShiftY: 12, dividerShiftY: 15 }, reveal: { x: 875, y: 572, size: 150 },
  },
  slide03: {
    leftPlanet: { x: -165, y: 135, width: 760, height: 760, opacity: .9 }, rightPlanet: { x: 1260, y: 105, width: 830, height: 830 },
    panel: { y: 428, width: 720, height: 380, copilotX: 304, agentX: 1028 }, divider: { x: 936, y: 428, height: 340 },
    process: { y: 107, width: 660, height: 115, stepWidth: 88, circleSize: 88, circleFontSize: 32, labelMarginTop: 12, labelMinHeight: 42, labelFontSize: 18, labelLineHeight: 20, arrowX: 102, arrowY: 19, arrowFontSize: 30 },
    heading: { size: 25, line: 40 }, descriptor: { size: 15, line: 24 },
    takeaway: { x: 0, y: 838, width: 1790, height: 80, accentX: 128, accentY: 33, accentWidth: 4, accentHeight: 54, copyX: 156, copyY: 32, copySize: 31, copyLine: 38 },
    boundary: { ruleY: 278, ruleWidth: 520, ruleHeight: 2, copyY: 300, copyFontSize: 25, copyLineHeight: 40 }, capabilities: { y: 340, width: 540, fontSize: 20, lineHeight: 32 },
  },
  slide04: {
    wide: { x: -8, y: 144, width: 1936, height: 821, opacity: .82 }, diagram: { x: 163, y: 276, width: 1583, height: 497 },
    cards: { x: 111, y: 697, width: 1698, gap: 55, cardWidth: 520, cardHeight: 240, paddingLeft: 34, paddingBottom: 48, copyMaxHeight: 96, labelX: 34, labelY: 196 },
    takeaway: { x: 64, y: 947, width: 1790, height: 58, paddingTop: 60 },
  },
  slide05: {
    wide: { x: 92, y: 386, width: 2172, opacity: .8 }, orb: { x: 1139, y: 197, width: 545 }, unclear: { x: 76, y: 449 }, equals: { x: 424, y: 729 }, confusion: { x: 76, y: 821 },
  },
} as const;
