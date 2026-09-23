export type PdmaCssGeometry = Readonly<{
  slide01: Readonly<{
    wide: Readonly<{ left: 415; top: 209; width: 1672; height: 941; opacity: 0.75 }>;
    orb: Readonly<{ left: 1024; top: 219; width: 832; height: 832; opacity: 0.75 }>;
    speakerRule: Readonly<{ left: 84; top: 466; width: 78; height: 4 }>;
    speakerName: Readonly<{ left: 84; top: 498 }>;
    speakerRole: Readonly<{ left: 84; top: 549 }>;
  }>;
  slide02: Readonly<{
    list: Readonly<{ top: 405; width: 600; height: 390; aiLeft: 72; humanLeft: 1326; itemStart: 93; itemPitch: 100 }>;
    circle: Readonly<{ top: 392; size: 360; aiLeft: 635; humanLeft: 905 }>;
    cpu: Readonly<{ left: 755; top: 512; width: 120; height: 120 }>;
    brain: Readonly<{ left: 1021; top: 508; width: 128; height: 128 }>;
    boundary: Readonly<{ top: 885; borderTop: "0" }>;
    reveal: Readonly<{ left: 875; top: 572; size: 150 }>;
  }>;
  slide03: Readonly<{
    process: Readonly<{ top: 107; width: 660; height: 115; stepWidth: 88; circleSize: 88; circleFontSize: 32; labelMarginTop: 12; labelMinHeight: 42; labelFontSize: 18; labelLineHeight: 20; arrowLeft: 102; arrowTop: 19; arrowFontSize: 30 }>;
    boundary: Readonly<{ ruleTop: 278; ruleWidth: 520; ruleHeight: 2; copyTop: 300; copyFontSize: 25; copyLineHeight: 40 }>;
    capabilities: Readonly<{ top: 340; width: 540; fontSize: 20; lineHeight: 32 }>;
  }>;
  slide04: Readonly<{
    wide: Readonly<{ left: -8; top: 144; width: 1936; height: 821; opacity: 0.82 }>;
    diagram: Readonly<{ left: 163; top: 276; width: 1583; height: 497 }>;
    cards: Readonly<{ left: 111; top: 697; width: 1698; gap: 55; articleWidth: 520; articleHeight: 240; articlePaddingLeft: 34; articlePaddingBottom: 48; copyMaxHeight: 96; labelLeft: 34; labelTop: 196 }>;
    takeaway: Readonly<{ left: 64; top: 947; width: 1790; height: 58; paddingTop: 60 }>;
  }>;
}>;

export const pdmaCssGeometry: PdmaCssGeometry = {
  slide01: {
    wide: { left: 415, top: 209, width: 1672, height: 941, opacity: 0.75 },
    orb: { left: 1024, top: 219, width: 832, height: 832, opacity: 0.75 },
    speakerRule: { left: 84, top: 466, width: 78, height: 4 },
    speakerName: { left: 84, top: 498 },
    speakerRole: { left: 84, top: 549 },
  },
  slide02: {
    list: { top: 405, width: 600, height: 390, aiLeft: 72, humanLeft: 1326, itemStart: 93, itemPitch: 100 },
    circle: { top: 392, size: 360, aiLeft: 635, humanLeft: 905 },
    cpu: { left: 755, top: 512, width: 120, height: 120 },
    brain: { left: 1021, top: 508, width: 128, height: 128 },
    boundary: { top: 885, borderTop: "0" },
    reveal: { left: 875, top: 572, size: 150 },
  },
  slide03: {
    process: { top: 107, width: 660, height: 115, stepWidth: 88, circleSize: 88, circleFontSize: 32, labelMarginTop: 12, labelMinHeight: 42, labelFontSize: 18, labelLineHeight: 20, arrowLeft: 102, arrowTop: 19, arrowFontSize: 30 },
    boundary: { ruleTop: 278, ruleWidth: 520, ruleHeight: 2, copyTop: 300, copyFontSize: 25, copyLineHeight: 40 },
    capabilities: { top: 340, width: 540, fontSize: 20, lineHeight: 32 },
  },
  slide04: {
    wide: { left: -8, top: 144, width: 1936, height: 821, opacity: 0.82 },
    diagram: { left: 163, top: 276, width: 1583, height: 497 },
    cards: { left: 111, top: 697, width: 1698, gap: 55, articleWidth: 520, articleHeight: 240, articlePaddingLeft: 34, articlePaddingBottom: 48, copyMaxHeight: 96, labelLeft: 34, labelTop: 196 },
    takeaway: { left: 64, top: 947, width: 1790, height: 58, paddingTop: 60 },
  },
};
