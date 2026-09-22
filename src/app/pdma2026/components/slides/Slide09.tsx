import { B, Img, MAGENTA, MUTED, Stage, T, WHITE, WHITE2 } from "../pdmaSlidePrimitives";
import { pdmaAssets } from "../../pdmaAssets";

const S9 = pdmaAssets.slide09Root;
export function Slide09(){
  const sources=[
    ["CRM","Customer data",`${S9}/ddd5d.svg`],
    ["PRODUCT USAGE","Behavioral data",`${S9}/cda12.svg`],
    ["SUPPORT","Support tickets",`${S9}/e2600.svg`],
    ["ACCOUNT HEALTH","Billing & health data",`${S9}/defdd.svg`],
  ];
  return <Stage>
    <div style={{position:"absolute",left:45,top:360,width:585,height:365,background:"#15181b",border:"1px solid #2d3136",borderRadius:14}}><T x={25} y={23} w={300} size={16} weight={600} color={MAGENTA} line={20}>BUSINESS PROBLEM</T><T x={25} y={69} w={515} size={28} weight={600} line={34}>Customer retention teams spend too{"\n"}much time manually identifying{"\n"}churn risk across fragmented{"\n"}enterprise systems.</T><B x={25} y={225} w={532} h={1} bg={MUTED}/><T x={25} y={247} w={300} size={15} weight={600} color={MUTED} line={18}>PRIMARY VALUE DRIVER</T><T x={25} y={279} w={360} size={26} weight={600} color={MAGENTA} line={30}>INCREASE REVENUE</T><T x={25} y={320} w={390} size={20} weight={600} line={24}>+ STREAMLINE OPERATIONS</T></div>
    {sources.map(([a,b,icon],i)=><div key={a} style={{position:"absolute",left:700,top:360+i*78,width:300,height:64,background:"#1a1c1f",border:"1px solid #2d3136",borderRadius:10}}><B x={13} y={9} w={44} h={44} bg="#240e1d" radius={8}/><Img src={icon} x={20} y={16} w={30} h={30}/><T x={71} y={9} w={190} size={17} weight={600} line={21}>{a}</T><T x={71} y={33} w={190} size={15} color={MUTED} line={18}>{b}</T><Img src={`${S9}/a0c4b.svg`} x={295} y={27} w={10} h={10}/></div>)}
    <Img src={`${S9}/885aa.svg`} x={1000} y={392} w={110} h={133}/><Img src={`${S9}/d98bc.svg`} x={1000} y={470} w={110} h={55}/><Img src={`${S9}/ca18f.svg`} x={1000} y={525} w={110} h={23}/><Img src={`${S9}/394fd.svg`} x={1000} y={525} w={110} h={101}/><Img src={`${S9}/1b2ef.svg`} x={1104} y={519} w={12} h={12}/>
    <div style={{position:"absolute",left:1110,top:400,width:300,height:250,background:"#240e1d",border:`1px solid ${MAGENTA}`,borderRadius:14,boxShadow:"0 0 18px rgba(255,47,174,.18)"}}><Img src={`${S9}/86e75.svg`} x={123} y={17} w={52} h={52}/><T x={91} y={57} w={140} size={24} weight={600} line={28}>IDENTIFY</T><T x={51} y={107} w={200} size={20} line={24}>Detect meaningful{"\n"}churn-risk patterns{"\n"}across enterprise{"\n"}customer data.</T></div>
    <div style={{position:"absolute",left:1530,top:400,width:320,height:250,background:"#1a1c1f",border:`1px solid ${MAGENTA}`,borderRadius:14}}><Img src={`${S9}/563bf.svg`} x={133} y={17} w={52} h={52}/><T x={85} y={57} w={180} size={24} weight={600} line={28}>RECOMMEND</T><T x={47} y={107} w={230} size={20} line={24}>Recommend an approved{"\n"}intervention to the{"\n"}responsible team.</T></div>
    <B x={1410} y={524} w={92} h={3} bg={MAGENTA}/><T x={1484} y={505} size={38} color={MAGENTA}>→</T>
    <T x={930} y={710} w={560} size={15} weight={600} color={MUTED} line={18}>PRODUCT SIGNAL  →  PROBLEM  →  RECOMMENDED INTERVENTION</T><T x={45} y={770} w={230} size={16} weight={600} color={MAGENTA} line={20}>PRODUCT QUESTION</T><B x={298} y={766} w={1} h={36} bg={MUTED}/><T x={330} y={760} w={900} size={29} weight={600} line={36}>How much authority should this agent have?</T><B x={45} y={820} w={1810} h={1} bg={MUTED}/><B x={45} y={895} w={4} h={52} bg={MAGENTA}/><T x={72} y={894} w={1680} size={29} weight={600} line={37}>HOW DO WE TURN THIS BUSINESS CASE INTO A PRODUCTION-READY ENTERPRISE PRODUCT?</T>
  </Stage>;
}
