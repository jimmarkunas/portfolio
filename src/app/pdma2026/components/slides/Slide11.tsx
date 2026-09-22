import { pdmaAssets } from "../../pdmaAssets";
import { B, Img, LINE, MAGENTA, MUTED, Stage, T, WHITE, WHITE2 } from "./canonicalShared";
const S11 = pdmaAssets.slide11Root;
export function Slide11(){
  const cards=[
    [60,330,"A","AUTHORITY","What may AI decide and do?",true],[60,494,"G","GUARDRAILS","What constraints must be built into the product?",false],[60,658,"E","EVIDENCE","What operational record must the product create?",false],
    [1300,330,"N","NETWORK & INTEGRATIONS","What systems, data, and permissions may it touch?",false],[1300,494,"T","TRANSFER & ESCALATION","When must a human intervene?",false],[1300,658,"S","SUCCESS & ACCOUNTABILITY","What KPI defines success + which human owns the outcome?",false]
  ] as const;
  return <Stage>

    <Img src={`${S11}/6fbf9.svg`} x={681} y={272} w={558} h={558}/>
    {[[614,390,`${S11}/76b8a.svg`],[781.65,400.37,`${S11}/76b8a.svg`],[614,554,`${S11}/76b8a.svg`],[729.14,552.85,`${S11}/76b8a.svg`],[614,718,`${S11}/76b8a.svg`],[781.65,689.63,`${S11}/76b8a.svg`],[1294,390,`${S11}/76b8a.svg`],[1126.35,400.37,`${S11}/76b8a.svg`],[1294,554,`${S11}/76b8a.svg`],[1178.86,552.85,`${S11}/76b8a.svg`],[1294,718,`${S11}/76b8a.svg`],[1126.35,689.63,`${S11}/76b8a.svg`]].map(([x,y,src],i)=><Img key={i} src={String(src)} x={Number(x)} y={Number(y)} w={12} h={12}/>)}
    <B x={620} y={395} w={168} h={2} bg="#b81773" style={{transform:"rotate(3.7deg)",transformOrigin:"left"}}/><B x={620} y={560} w={115} h={2} bg="#b81773"/><B x={620} y={724} w={172} h={2} bg="#b81773" style={{transform:"rotate(-9deg)",transformOrigin:"left"}}/><B x={1132} y={405} w={168} h={2} bg="#b81773" style={{transform:"rotate(-3.7deg)",transformOrigin:"right"}}/><B x={1185} y={560} w={115} h={2} bg="#b81773"/><B x={1130} y={696} w={172} h={2} bg="#b81773" style={{transform:"rotate(9deg)",transformOrigin:"right"}}/>
    <div style={{position:"absolute",left:735,top:326,width:450,height:450}}><Img src={`${S11}/6fbf9.svg`} x={0} y={0} w={450} h={450}/><T x={199} y={44} w={52} size={52} weight={800} color={MAGENTA} align="center">1</T><T x={35} y={169} w={380} size={32} weight={600} align="center" line={39}>PRODUCTIZATION{"\n"}STANDARD</T><B x={180} y={274} w={90} h={3} bg={MAGENTA} radius={2}/><T x={55} y={301} w={340} size={15} weight={600} align="center" tracking={5} line={24}>SAME QUESTIONS.{"\n"}SAFER PRODUCTS.{"\n"}HIGHER CONFIDENCE.</T></div>
    {cards.map(([x,y,l,title,q,active])=><div key={l} style={{position:"absolute",left:x,top:y,width:560,height:132,background:active?"#130911":"#0e0c0e",border:`${active?1.6:1.2}px solid rgba(184,23,115,${active?1:.78})`,borderRadius:14,boxShadow:`0 0 14px rgba(255,47,174,${active?.13:.07})`}}><T x={26} y={32} w={68} size={54} weight={800} color={MAGENTA} align="center">{l}</T><B x={123} y={26} w={2} h={76} bg="rgba(255,47,174,.65)"/><T x={153} y={24} w={365} size={21} weight={600} tracking={.6}>{title}</T><T x={153} y={61} w={365} size={18} line={24}>{q}</T></div>)}
    <B x={55} y={824} w={1810} h={2} bg={LINE}/><T x={55} y={842} w={240} size={15} weight={600} color={MAGENTA} tracking={2}>USE A.G.E.N.T.S. TO</T><T x={300} y={834} w={1480} size={23} weight={600}>write better requirements, define operating boundaries, and make production behavior explicit.</T><B x={55} y={878} w={1810} h={2} bg={LINE}/><B x={55} y={910} w={3} h={48} bg={MAGENTA}/><T x={82} y={906} w={1600} size={29} weight={600}>6 QUESTIONS • 1 PRODUCTIZATION STANDARD</T>
  </Stage>;
}
