import { B, Img, MAGENTA, MUTED, Stage, T, WHITE, WHITE2 } from "../pdmaPrimitives";
import { pdmaAssets } from "../../pdmaAssets";
import { pdmaGeometry } from "../../pdmaGeometry";

const S10 = pdmaAssets.slide10Root;
export function Slide10(){
  const g = pdmaGeometry.slide10;
  const cards=[
    ["01","GUARDRAILS","What must the product\nprevent or constrain?",`${S10}/0c0c4.svg`,false],
    ["02","HUMAN INTERVENTION","When must a person review,\napprove, or take over?",`${S10}/75654.svg`,true],
    ["03","SUCCESS MEASURES","What proves the feature\ncreates the intended\noutcome?",`${S10}/27fd2.svg`,false],
  ] as const;
  return <Stage>
    <Img src="/pdma2026/slide-10/0581d3e2-5eaa-4fa2-aa65-7272161757da.png" geometry={g.backgrounds.one} fit="cover"/><Img src="/pdma2026/slide-10/0fe576ac-b4aa-42eb-9c74-288c239abc05.png" geometry={g.backgrounds.two} fit="cover"/><div style={{position:"absolute",left:g.backgrounds.gradient.x,top:g.backgrounds.gradient.y,width:g.backgrounds.gradient.width,height:g.backgrounds.gradient.height,background:"linear-gradient(90deg,#090909 0%,rgba(9,9,9,.92) 72%,rgba(9,9,9,.12) 100%)"}}/>
    {cards.map(([n,title,body,icon,active],i)=>{const c=g.cards;return <div key={n} style={{position:"absolute",left:c.x[i],top:c.y,width:c.width,height:c.height,background:active?"#250c20":"#16191c",border:`1.5px solid ${active?MAGENTA:"#4a4d50"}`,borderRadius:10,opacity:.93}}><T geometry={c.number} weight={500} color="#939598" tracking={3}>{n}</T><Img src={icon} geometry={c.icon}/><T geometry={c.title} weight={700} color={active?MAGENTA:WHITE2}>{title}</T><B geometry={c.rule} bg={MAGENTA}/><T geometry={c.body} color={WHITE2}>{body}</T></div>})}
    <T geometry={g.operationalize} weight={600} color={MAGENTA}>OPERATIONALIZE IT AS PRODUCT WORK</T><B geometry={g.workflowRule} bg="#5d6064"/>
    {[["01","BACKLOG","Capture the requirements."],["02","PRD","Define behavior and\nboundaries."],["03","ACCEPTANCE CRITERIA","Make them testable."],["04","PRODUCTION","Prove they work."]].map(([n,t,d],i)=>{const w=g.workflow;return <div key={n}><T x={w.x[i]} y={w.number.y} w={w.number.width} size={w.number.size} weight={500} color="#939598" tracking={3}>{n}</T><T x={w.x[i]+w.title.dx} y={w.title.y} w={w.title.width} size={w.title.size} weight={700} color={i===3?MAGENTA:WHITE2}>{t}</T><T x={w.x[i]+w.description.dx} y={w.description.y} w={w.description.width} size={w.description.size} color={WHITE2}>{d}</T>{i<3&&<T x={w.x[i]+w.arrow.dx} y={w.arrow.y} size={w.arrow.size} color="#939598">→</T>}</div>})}
    <B geometry={g.takeaway.container} bg="#120a10" border={`1.5px solid ${MAGENTA}`} radius={8} opacity={.96}/><B geometry={g.takeaway.accent} bg={MAGENTA}/><T geometry={g.takeaway.copy} weight={700} color={WHITE2}>IF IT MATTERS IN PRODUCTION, IT BELONGS IN THE PRODUCT DEFINITION.</T><T geometry={g.takeaway.right} weight={500} color="#939598">REAL FEATURES.{"\n"}REAL OUTCOMES.</T>
  </Stage>;
}
