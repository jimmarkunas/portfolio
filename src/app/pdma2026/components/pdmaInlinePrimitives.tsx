import type { CSSProperties, ReactNode } from "react";
import type { ImageGeometry, Point, Rect, TextGeometry } from "../pdmaGeometry";
import { PdmaSlideCanvas } from "../PdmaPresentationShell";

export const FONT = "Inter, ui-sans-serif, system-ui, sans-serif";
export const WHITE = "#f2f2f5";
export const WHITE2 = "#f5f5f2";
export const MAGENTA = "#ff2fae";
export const MUTED = "#7a7d85";

export function Stage({ children, background = "#090909" }: { children: ReactNode; background?: string }) {
  return <PdmaSlideCanvas><div style={{ position: "absolute", inset: 0, width: 1920, height: 1080, overflow: "hidden", background, color: WHITE, fontFamily: FONT }}>{children}</div></PdmaSlideCanvas>;
}

export function T({ geometry, x, y, w, size, weight = 400, color = WHITE, line, tracking, children, align = "left", style, className }: { geometry?:TextGeometry; x?:number; y?:number; w?:number; size?:number; weight?:number; color?:string; line?:number|string; tracking?:number; children:ReactNode; align?:CSSProperties["textAlign"]; style?:CSSProperties; className?:string }) {
  x ??= geometry?.x; y ??= geometry?.y; w ??= geometry?.width; size ??= geometry?.size; line ??= geometry?.line; tracking ??= geometry?.tracking;
  return <div className={className} style={{ position:"absolute", left:x, top:y, width:w, margin:0, fontFamily:FONT, fontSize:size, fontWeight:weight, color, lineHeight: typeof line === "number" ? `${line}px` : line, letterSpacing:tracking, textAlign:align, whiteSpace:"pre-wrap", ...style }}>{children}</div>;
}

export function B({ geometry, x, y, w, h, bg, border, radius = 0, opacity = 1, style }: { geometry?:Rect; x?:number; y?:number; w?:number; h?:number; bg?:string; border?:string; radius?:number; opacity?:number; style?:CSSProperties }) {
  x ??= geometry?.x; y ??= geometry?.y; w ??= geometry?.width; h ??= geometry?.height;
  return <div style={{ position:"absolute", left:x, top:y, width:w, height:h, boxSizing:"border-box", background:bg, border, borderRadius:radius, opacity, ...style }} />;
}

export function Img({ src, geometry, x, y, w, h, opacity, fit = "contain", style, className, alt = "" }: { src:string; geometry?:ImageGeometry; x?:number; y?:number; w?:number; h?:number; opacity?:number; fit?:CSSProperties["objectFit"]; style?:CSSProperties; className?:string; alt?:string }) {
  x ??= geometry?.x; y ??= geometry?.y; w ??= geometry?.width; h ??= geometry?.height; opacity ??= geometry?.opacity ?? 1;
  return <img className={className} alt={alt} src={src} style={{ position:"absolute", left:x, top:y, width:w, height:h, opacity, objectFit:fit, maxWidth:"none", display:"block", ...style }} />;
}
