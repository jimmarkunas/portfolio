import type { CSSProperties, ReactNode } from "react";
import { PdmaSlideCanvas } from "../PdmaPresentationShell";
const FONT="Inter, ui-sans-serif, system-ui, sans-serif", WHITE="#f5f5f2", MAGENTA="#ff2fae", MUTED="#909295", LINE="#44464a";
const S="https://www.figma.com/api/mcp/asset/9efb3016-e735-4409-8e2c-e8f7c8c69b11";
function T({x,y,w,size,weight=400,color=WHITE,tracking,children}:{x:number;y:number;w?:number;size:number;weight?:number;color?:string;tracking?:number;children:ReactNode}){return <div style={{position:"absolute",left:x,top:y,width:w,fontFamily:FONT,fontSize:size,fontWeight:weight,color,letterSpacing:tracking,lineHeight:"normal",whiteSpace:"pre-wrap"}}>{children}</div>}
function B({x,y,w,h,bg}:{x:number;y:number;w:number;h:number;bg:string}){return <div style={{position:"absolute",left:x,top:y,width:w,height:h,background:bg}}/>}
function I({src,x,y,w,h,fit="contain",style}:{src:string;x:number;y:number;w:number;h:number;fit?:CSSProperties["objectFit"];style?:CSSProperties}){return <img alt="" src={src} style={{position:"absolute",left:x,top:y,width:w,height:h,objectFit:fit,maxWidth:"none",display:"block",...style}}/>}
export function Slide08(){
 const stages=[
  {n:"01",title:"OBSERVE",body:"AI sees the state\nof the product\nor process.",nx:432,ny:480,tx:387,ty:514,bx:372,by:560,ellipse:`${S}/59d08.svg`,ex:445,ey:637,icon:`${S}/91b4d.svg`,ix:463,iy:654,active:false},
  {n:"02",title:"RECOMMEND",body:"AI proposes what\nshould happen.",nx:680,ny:375,tx:612,ty:410,bx:619,by:456,ellipse:`${S}/379c2.svg`,ex:670,ey:534,icon:`${S}/d17aa.svg`,ix:687,iy:551,active:false},
  {n:"03",title:"PREPARE",body:"AI stages the action\nfor human review.",nx:949,ny:329,tx:907,ty:364,bx:877,by:411,ellipse:`${S}/379c2.svg`,ex:924,ey:485,icon:`${S}/9244f.svg`,ix:940,iy:502,active:false},
  {n:"04",title:"DECIDE",body:"AI chooses the action\nwithin defined rules.",nx:1217,ny:368,tx:1186,ty:403,bx:1139,by:449,ellipse:`${S}/d8145.svg`,ex:1176,ey:530,icon:`${S}/8b919.svg`,ix:1194,iy:549,active:true},
  {n:"05",title:"EXECUTE",body:"AI acts within\ndefined limits.",nx:1463,ny:479,tx:1422,ty:514,bx:1416,by:560,ellipse:`${S}/ca1fd.svg`,ex:1401,ey:637,icon:`${S}/97008.svg`,ix:1419,iy:655,active:true}
 ];
 return <PdmaSlideCanvas><div style={{position:"absolute",inset:0,width:1920,height:1080,overflow:"hidden",background:"#050505",color:WHITE,fontFamily:FONT}}>
  <B x={0} y={0} w={1920} h={78} bg="#090909"/><T x={67} y={22} w={150} size={18} weight={700}>PDMA 2026</T><B x={223} y={40} w={1213} h={1} bg={LINE}/><B x={223} y={39} w={318} h={3} bg={MAGENTA}/><T x={1471} y={23} w={380} size={14} weight={600} color={MUTED} tracking={3}>OBSERVE  •  DECIDE  •  EXECUTE</T>
  <T x={64} y={118} w={900} size={66} weight={800}>HOW MUCH AUTHORITY</T><T x={64} y={182} w={1100} size={66} weight={800} color={MAGENTA}>SHOULD THE ROBOTS HAVE?</T><T x={66} y={261} w={900} size={26}>The farther AI moves from observing to acting, the more deliberately{"\n"}the Product Manager has to design the boundary.</T>
  <I src={`${S}/7149b.png`} x={140} y={137} w={1632} h={918} fit="cover"/>
  <div style={{position:"absolute",left:730,top:587,width:460,height:460,maskImage:`url(${S}/3dc3f.svg)`,WebkitMaskImage:`url(${S}/3dc3f.svg)`,maskSize:"460px 460px",WebkitMaskSize:"460px 460px",maskRepeat:"no-repeat",WebkitMaskRepeat:"no-repeat"}}><I src={`${S}/59b40.png`} x={0} y={0} w={460} h={460} fit="cover"/></div>
  {stages.map(s=><div key={s.n}><T x={s.nx} y={s.ny} w={90} size={18} weight={600} color={s.active?MAGENTA:MUTED}>{s.n}</T><T x={s.tx} y={s.ty} w={220} size={25} weight={700} color={s.active?MAGENTA:WHITE}>{s.title}</T><T x={s.bx} y={s.by} w={235} size={18}>{s.body}</T><I src={s.ellipse} x={s.ex} y={s.ey} w={s.n==="04"?75:s.n==="05"?74:s.n==="01"?73:71} h={s.n==="04"?75:s.n==="05"?74:s.n==="01"?73:71}/><I src={s.icon} x={s.ix} y={s.iy} w={38} h={38}/></div>)}
  <T x={155} y={694} w={270} size={16} weight={500} color={MUTED} tracking={4}>OBSERVATION{"\n"}HUMAN IN THE LOOP</T><B x={390} y={735} w={305} h={2} bg="#73767b"/><T x={1490} y={694} w={300} size={16} weight={500} color={MUTED} tracking={4}>DECISION &amp; EXECUTION{"\n"}AI TAKES ACTION</T><B x={1190} y={735} w={540} h={2} bg="#73767b"/>
  <T x={160} y={838} w={250} size={18} weight={600} tracking={4}>MORE AUTONOMY</T><B x={406} y={854} w={365} h={2} bg="#73767b"/><T x={775} y={834} size={30} color={MAGENTA}>→</T><T x={834} y={838} w={300} size={18} weight={600} tracking={4}>MORE CONSEQUENCE</T><B x={1118} y={854} w={310} h={2} bg="#73767b"/><T x={1408} y={834} size={30} color={MAGENTA}>→</T><T x={1471} y={838} w={360} size={18} weight={600} tracking={4}>MORE PRODUCT DESIGN</T>
  <B x={65} y={896} w={1794} h={2} bg={LINE}/><B x={65} y={923} w={4} h={54} bg={MAGENTA}/><T x={100} y={934} w={1680} size={25} weight={700}>THE FARTHER RIGHT YOU GO, THE MORE PRODUCT DESIGN HAS TO ACCOUNT FOR THE CONSEQUENCES.</T>
  <B x={0} y={985} w={1920} h={95} bg="#090909"/><T x={67} y={1028} w={470} size={13} weight={500} color={MUTED} tracking={5}>AUTHORITY IS A PRODUCT DECISION</T><B x={478} y={1044} w={1319} h={2} bg={LINE}/><I src="/pdma2026/slide-02/canonical-asterisk.svg" x={1812} y={1002} w={52} h={52}/>
 </div></PdmaSlideCanvas>
}
