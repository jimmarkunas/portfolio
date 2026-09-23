export type PdmaSlideGeometry = Readonly<{
  canvas: Readonly<{ width: number; height: number }>;
}>;

export const pdmaSlideGeometry: PdmaSlideGeometry = {
  canvas: { width: 1920, height: 1080 },
};
