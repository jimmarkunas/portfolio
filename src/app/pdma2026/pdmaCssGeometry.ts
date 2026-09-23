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
};
