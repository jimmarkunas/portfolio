export const C = {
  ink:    "#222222",
  sec:    "#4B5154",
  muted:  "#7B7B7B",
  accent: "#447ACB",
  border: "#E5E7EB",
  bg:     "#F3F3F3",
  white:  "#FFFFFF",
};

export const DUR    = 2.2;
export const DELAYS = [0, DUR / 3, (DUR / 3) * 2];

export function bpath(sx: number, sy: number, ex: number, ey: number) {
  const d = (ex - sx) * 0.5;
  return `M${sx},${sy} C${sx + d},${sy} ${ex - d},${ey} ${ex},${ey}`;
}
