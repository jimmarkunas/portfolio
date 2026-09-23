import { pdmaAssets } from "../../pdmaAssets";
import { B, Img, MAGENTA, MUTED, Stage, T } from "../pdmaSlidePrimitives";
import { pdmaGeometry } from "../../pdmaGeometry";
const LINE = "#44464a";
const S13 = pdmaAssets.slide13Root;
export function Slide13(){
  const g = pdmaGeometry.slide13;
  const before=["Unclear business value","No operating boundaries","Missing data and system context","No success criteria","High risk of rework"];
  const after=["Clear business value and success metrics","Defined authority and operating boundaries","Identified data sources and integrations","Evidence and decision record requirements","Ready for build, test, and operationalize"];
  return <Stage>
    <T x={1710} y={144} w={165} size={16} weight={600} color={MUTED} tracking={4} line={25}>CLARITY{"\n"}TURNS IDEAS{"\n"}INTO IMPACT.</T><B x={1710} y={243} w={64} h={3} bg={MAGENTA} radius={2}/>
    <div style={{position:"absolute",left:70,top:315,width:750,height:515,background:"#15181b",border:"1.4px solid #44464a",borderRadius:16}}><T x={40} y={27} w={180} size={16} weight={600} color={MUTED} tracking={4}>BEFORE</T><T x={40} y={75} w={620} size={36} weight={600}>A Vague Prompt</T><T x={40} y={130} w={650} size={26} color="#cccfd6" line={38}>“Build an AI agent that helps retain{"\n"}customers and recommend improvements.”</T><B x={40} y={221} w={660} h={1} bg={LINE}/>{before.map((x,i)=><div key={x}><Img src={`${S13}/de293.svg`} x={40} y={250+i*48} w={34} h={34}/><T x={92} y={252+i*48} w={590} size={22} color="#cccfd6">{x}</T></div>)}</div>
    <Img src={`${S13}/f941e.svg`} x={895} y={448} w={124} h={100}/><T x={853} y={605} w={214} size={15} weight={600} color={MUTED} align="center" tracking={4} line={26}>A.G.E.N.T.S.{"\n"}TURNS IDEAS{"\n"}INTO BUILDABLE{"\n"}PRODUCTS.</T><B x={932} y={720} w={56} h={3} bg={MAGENTA} radius={2}/>
    <div style={{position:"absolute",left:1100,top:315,width:750,height:515,background:"#240a1c",border:`1.6px solid ${MAGENTA}`,borderRadius:16,boxShadow:"0 0 24px rgba(255,47,174,.12)"}}><T x={40} y={27} w={180} size={16} weight={600} color={MAGENTA} tracking={4}>AFTER</T><T x={40} y={75} w={650} size={38} weight={600}>A Production-Ready Spec</T><T x={40} y={128} w={660} size={24} line={32}>“Build a Retention Agent that identifies statistically{"\n"}significant retention problems and recommends{"\n"}approved interventions.”</T><B x={40} y={228} w={660} h={1} bg={LINE}/>{after.map((x,i)=><div key={x}><Img src={`${S13}/a91e2.svg`} x={40} y={252+i*48} w={34} h={34}/><T x={92} y={254+i*48} w={590} size={22}>{x}</T></div>)}</div>
    <B x={55} y={860} w={1810} h={2} bg={LINE}/><B x={55} y={897} w={3} h={52} bg={MAGENTA}/><T x={82} y={891} w={980} size={29} weight={600}>SAME IDEA. COMPLETELY DIFFERENT PRODUCT.</T>{[[1286,"LESS","REWORK"],[1483,"FASTER","DELIVERY"],[1680,"HIGHER","CONFIDENCE"]].map(([x,a,b],i)=><div key={String(a)}><T x={Number(x)} y={887} w={140} size={20} weight={600} color={MAGENTA} align="center" tracking={1}>{a}</T><T x={Number(x)} y={914} w={140} size={14} weight={600} color={MUTED} align="center" tracking={2}>{b}</T>{i<2&&<B x={Number(x)+170} y={883} w={1} h={48} bg={LINE}/>}</div>)}
  </Stage>;
}
