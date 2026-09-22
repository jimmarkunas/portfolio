import type { CSSProperties, ReactNode } from "react";
import { PdmaSlideCanvas } from "../../PdmaPresentationShell";

export const FONT="Inter, ui-sans-serif, system-ui, sans-serif";
export const WHITE="#f2f2f5";
export const WHITE2="#f5f5f2";
export const MAGENTA="#ff2fae";
export const MUTED="#7a7d85";
export const LINE="#44464a";

export function Stage({children,background="#090909"}:{children:ReactNode;background?:string}){return <PdmaSlideCanvas><div style={{position:"absolute",inset:0,width:1920,height:1080,overflow:"hidden",background,color:WHITE,fontFamily:FONT}}>{children}</div></PdmaSlideCanvas>}
export function T({x,y,w,size,weight=400,color=WHITE,line,tracking,children,align="left",style}:{x:number;y:number;w?:number;size:number;weight?:number;color?:string;line?:number|string;tracking?:number;children:ReactNode;align?:CSSProperties["textAlign"];style?:CSSProperties}){return <div style={{position:"absolute",left:x,top:y,width:w,margin:0,fontFamily:FONT,fontSize:size,fontWeight:weight,color,lineHeight:typeof line==="number"?String(line)+"px":(line??"normal"),letterSpacing:tracking,textAlign:align,whiteSpace:"pre-wrap",...style}}>{children}</div>}
export function B({x,y,w,h,bg,border,radius=0,opacity=1,style}:{x:number;y:number;w:number;h:number;bg?:string;border?:string;radius?:number;opacity?:number;style?:CSSProperties}){return <div style={{position:"absolute",left:x,top:y,width:w,height:h,boxSizing:"border-box",background:bg,border,borderRadius:radius,opacity,...style}}/>}
export function Img({src,x,y,w,h,opacity=1,fit="contain",style}:{src:string;x:number;y:number;w:number;h:number;opacity?:number;fit?:CSSProperties["objectFit"];style?:CSSProperties}){return <img alt="" src={src} style={{position:"absolute",left:x,top:y,width:w,height:h,opacity,objectFit:fit,maxWidth:"none",display:"block",...style}}/>}
