export type PdmaSlideGeometry = Readonly<{
  canvas: Readonly<{ width: 1920; height: 1080 }>;
  slide03: Readonly<{
    panelTop: number;
    panelWidth: number;
    panelHeight: number;
    copilotLeft: number;
    agentLeft: number;
    dividerLeft: number;
    dividerTop: number;
    dividerHeight: number;
  }>;
}>;

export const pdmaSlideGeometry: PdmaSlideGeometry = {
  canvas: { width: 1920, height: 1080 },
  slide03: {
    panelTop: 428,
    panelWidth: 720,
    panelHeight: 380,
    copilotLeft: 304,
    agentLeft: 1028,
    dividerLeft: 936,
    dividerTop: 428,
    dividerHeight: 340,
  },
};
