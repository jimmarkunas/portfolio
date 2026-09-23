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
  slide06: {
    body: { x: 0, y: 76, width: 1920, height: 909 },
    nebula: { x: -120, y: 0, width: 980, height: 909 }, planet: { x: -590, y: -20, width: 1020, height: 1020 }, secondaryMoon: { x: 370, y: 350, width: 128, height: 128 }, smallMoon: { x: 468, y: 470, width: 44, height: 44 }, rings: { x: 1020, y: -18, width: 820, height: 340 },
    awareness: { x: 58, y: 338, width: 230, size: 17, line: 29, tracking: 6 }, awarenessRule: { x: 58, y: 468, width: 48, height: 3 },
    inventoryHeading: { x: 598, y: 288, width: 400, size: 17, tracking: 5 }, ownersHeading: { x: 1415, y: 288, width: 360, size: 17, tracking: 5 },
    connector: { x: 1118, y: 373, width: 291, height: 368 }, outerNode: { x: 1277, y: 513, width: 28, height: 28 }, innerNode: { x: 1285, y: 521, width: 14, height: 14 },
    inventoryCards: { x: 598, y: 322, width: 520, height: 104, pitch: 122, icon: [{ x: 27, y: 24, width: 34.74, height: 36.54 }, { x: 37.53, y: 29.13, width: 27.54, height: 36.54 }, { x: 28.62, y: 29.22, width: 48.97, height: 36.19 }, { x: 32.13, y: 28.23, width: 39.24, height: 40.15 }], title: { x: 137, y: 18, width: 310, size: 22, tracking: 1.5 }, body: { x: 137, y: 48, width: 315, size: 18, line: 25 }, arrow: { x: 462, y: 32, width: 45, size: 34 }, node: { x: 514, y: 47, width: 10, height: 10 } },
    ownerCards: { x: 1415, y: 322, width: 430, height: 140, pitch: 152, icon: [{ x: 37.63, y: 43.93, width: 29.34, height: 35.37 }, { x: 28, y: 37, width: 48.6, height: 48.6 }, { x: 34.93, y: 43.93, width: 34.74, height: 34.74 }], title: { x: 135, y: 25, width: 245, size: 20, tracking: 1.2 }, rule: { x: 135, y: 58, width: 210, height: 1.5 }, body: { x: 135, y: 73, width: 240, size: 18, line: 25 }, node: { x: -6, y: 65, width: 10, height: 10 } },
    takeawayRule: { x: 48, y: 820, width: 1820, height: 1.5 }, takeawayAccent: { x: 48, y: 850, width: 3, height: 44 }, takeaway: { x: 78, y: 850, width: 1320, size: 26 },
  },
  slide07: {
    matrix: { x: 60, y: 380, width: 1800, height: 392 }, decisionColumn: { x: 60, y: 380, width: 286, height: 392 }, highlightColumn: { x: 346, y: 380, width: 504.667, height: 392 },
    decisionRule: { label: { x: 86, y: 406, width: 180, size: 15, line: 20, tracking: 3 }, rule: { x: 86, y: 443, width: 44, height: 2 }, copy: { x: 86, y: 468, width: 190, size: 31, line: 32 }, supportingRule: { x: 86, y: 590, width: 44, height: 2 }, supportingCopy: { x: 86, y: 594, width: 180, size: 15, line: 20 } },
    columnDividers: [346, 850.67, 1355.33], rowDividers: [508, 574, 640, 706], columnHeading: [{ x: 440, y: 405, width: 360, size: 25, line: 32 }, { x: 946.67, y: 405, width: 360, size: 25, line: 32 }, { x: 1455.33, y: 405, width: 360, size: 24, line: 32 }], columnBody: { y: 447, width: 345, size: 18, line: 23 }, row: { x: [366, 870.67, 1375.33], y: 529, pitch: 66, width: 220, size: 16, line: 22, tracking: 1.8 }, selector: { x: [640.67, 1147.33, 1652], yOffset: -2, size: 24, innerX: 6, innerY: 6, innerSize: 10 }, takeawayRule: { x: 60, y: 830, width: 1800, height: 2 }, takeawayAccent: { x: 64, y: 865, width: 3, height: 46 }, takeaway: { x: 92, y: 862, width: 1660, size: 27, line: 38 },
  },
  slide08: {
    gauge: { x: 140, y: 137, width: 1632, height: 918 }, dial: { x: 730, y: 587, width: 460, height: 460 }, dialImage: { x: 0, y: 0, width: 460, height: 460 },
    stages: [{ number: { x: 432, y: 480, width: 90, size: 18 }, title: { x: 387, y: 514, width: 220, size: 25 }, body: { x: 372, y: 560, width: 235, size: 18 }, ellipse: { x: 445, y: 637, width: 73, height: 73 }, icon: { x: 463, y: 654, width: 38, height: 38 } }, { number: { x: 680, y: 375, width: 90, size: 18 }, title: { x: 612, y: 410, width: 220, size: 25 }, body: { x: 619, y: 456, width: 235, size: 18 }, ellipse: { x: 670, y: 534, width: 71, height: 71 }, icon: { x: 687, y: 551, width: 38, height: 38 } }, { number: { x: 949, y: 329, width: 90, size: 18 }, title: { x: 907, y: 364, width: 220, size: 25 }, body: { x: 877, y: 411, width: 235, size: 18 }, ellipse: { x: 924, y: 485, width: 71, height: 71 }, icon: { x: 940, y: 502, width: 38, height: 38 } }, { number: { x: 1217, y: 368, width: 90, size: 18 }, title: { x: 1186, y: 403, width: 220, size: 25 }, body: { x: 1139, y: 449, width: 235, size: 18 }, ellipse: { x: 1176, y: 530, width: 75, height: 75 }, icon: { x: 1194, y: 549, width: 38, height: 38 } }, { number: { x: 1463, y: 479, width: 90, size: 18 }, title: { x: 1422, y: 514, width: 220, size: 25 }, body: { x: 1416, y: 560, width: 235, size: 18 }, ellipse: { x: 1401, y: 637, width: 74, height: 74 }, icon: { x: 1419, y: 655, width: 38, height: 38 } }],
    observation: { x: 155, y: 694, width: 270, size: 16, tracking: 4 }, leftBoundary: { x: 390, y: 735, width: 305, height: 2 }, decisionExecution: { x: 1490, y: 694, width: 300, size: 16, tracking: 4 }, rightBoundary: { x: 1190, y: 735, width: 540, height: 2 }, autonomy: { x: 160, y: 838, width: 250, size: 18, tracking: 4 }, autonomyRule: { x: 406, y: 854, width: 365, height: 2 }, autonomyArrow: { x: 775, y: 834, size: 30 }, consequence: { x: 834, y: 838, width: 300, size: 18, tracking: 4 }, consequenceRule: { x: 1118, y: 854, width: 310, height: 2 }, consequenceArrow: { x: 1408, y: 834, size: 30 }, productDesign: { x: 1471, y: 838, width: 360, size: 18, tracking: 4 }, takeawayRule: { x: 65, y: 896, width: 1794, height: 2 }, takeawayAccent: { x: 65, y: 923, width: 4, height: 54 }, takeaway: { x: 100, y: 934, width: 1680, size: 25 },
  },
} as const;
