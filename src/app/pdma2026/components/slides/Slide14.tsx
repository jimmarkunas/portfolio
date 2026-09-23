import { pdmaAssets } from "../../pdmaAssets";
import { B, Img, MAGENTA, MUTED, Stage, T } from "../pdmaPrimitives";
import { pdmaGeometry } from "../../pdmaGeometry";
import { slide14Rows } from "../../content/slide-content";
const LINE = "#44464a";
const S14 = pdmaAssets.slide14Root;
export function Slide14(){
  const g = pdmaGeometry.slide14;
  const rows = slide14Rows.map(([n, title, body, icon]) => [n, title, body, `${S14}/${icon}`] as const);
  return <Stage>
    {rows.map(([n,title,body,icon],i)=>{const y=g.rows.startY+i*g.rows.pitch;return <div key={n}>{i>0&&<B x={g.intro.x} y={y-26} w={840} h={1} bg={LINE}/>}<T x={g.intro.x} y={y+17} w={55} size={18} weight={500} color={MUTED} line={22} tracking={.9}>{n}</T><Img src={i===3?`${S14}/cda5a.svg`:`${S14}/5cb15.svg`} x={120} y={y} w={64} h={64}/><Img src={icon} x={136} y={y+16} w={32} h={32}/><T x={214} y={y+18} w={165} size={22} weight={600} color={i===3?MAGENTA:"#f5f5f2"} line={26} tracking={.88}>{title}</T><B x={382} y={y+7} w={1} h={52} bg={LINE}/><T x={414} y={y+11} w={420} size={22} color="#f5f5f2" line={30}>{body}</T></div>})}
    <T geometry={g.exerciseLabel} weight={600} color={MUTED}>IDEAS{"\n"}THROUGH{"\n"}STRUCTURE{"\n"}TO IMPACT</T><B geometry={g.exerciseRule} bg={MAGENTA}/><Img src={`${S14}/b1b9e.svg`} x={815} y={425} w={260} h={210}/>
    <a href="/pdma2026/exercise" target="_blank" rel="noopener noreferrer" aria-label="Open the PDMA live productization exercise" title="Open live exercise" style={{position:"absolute",left:1172,top:326,width:636,height:539,transform:"rotate(1.8deg)",transformOrigin:"center",background:"#14181c",border:"1px solid #44464a",borderRadius:16,boxShadow:"0 18px 30px rgba(0,0,0,.52)",textDecoration:"none",color:"inherit",cursor:"pointer"}}><B x={0} y={0} w={620} h={118} bg="rgba(26,30,34,.72)"/><T x={35} y={27} w={130} size={13} weight={600} tracking={.78}>PDMA 2026</T><T x={399} y={27} w={180} size={12} weight={500} color={MUTED} tracking={.96} align="right">CONFIDENTIAL   •   DRAFT</T><T x={37} y={91} w={250} size={17} weight={600} color={MUTED} tracking={.85}>AI INITIATIVE</T><T x={37} y={123} w={500} size={36} weight={700} line={40}>PRODUCTIZATION BRIEF</T><B x={37} y={184} w={64} h={3} bg={MAGENTA}/>{["OPPORTUNITY","VALUE","AUTHORITY","A.G.E.N.T.S.","OUTPUT","NEXT STEPS"].map((l,i)=><div key={l}><T x={37} y={215+i*42} w={160} size={13} weight={600} tracking={.91}>{l}</T><B x={214} y={217+i*42} w={i%2?300:280} h={7} bg="rgba(103,107,112,.8)" radius={3}/><B x={214} y={233+i*42} w={i%2?215:190} h={7} bg="rgba(103,107,112,.58)" radius={3}/></div>)}<B x={37} y={469} w={544} h={1} bg={LINE}/><T x={37} y={483} w={210} size={12} weight={500} color={MUTED} tracking={.96}>FROM IDEA TO IMPACT</T><T x={469} y={483} w={112} size={12} weight={500} color={MUTED} tracking={.96} align="right">PDMA 2026</T></a>
    <B x={55} y={890} w={3} h={58} bg={MAGENTA}/><T x={82} y={897} w={1580} size={29} weight={600}>ARE YOU READY TO PRODUCTIZE YOUR AI?</T>
  </Stage>;
}
