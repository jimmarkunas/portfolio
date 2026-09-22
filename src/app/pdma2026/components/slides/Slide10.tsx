import { B, Img, MAGENTA, MUTED, Stage, T, WHITE, WHITE2 } from "../pdmaSlidePrimitives";

const S10 = "https://www.figma.com/api/mcp/asset/7cf07793-539e-4b52-975d-d2cdd0a1aedc";
export function Slide10(){
  const cards=[
    [62,"01","GUARDRAILS","What must the product\nprevent or constrain?",`${S10}/0c0c4.svg`,false],
    [442,"02","HUMAN INTERVENTION","When must a person review,\napprove, or take over?",`${S10}/75654.svg`,true],
    [822,"03","SUCCESS MEASURES","What proves the feature\ncreates the intended\noutcome?",`${S10}/27fd2.svg`,false],
  ] as const;
  return <Stage>
    <Img src="/pdma2026/slide-10/0581d3e2-5eaa-4fa2-aa65-7272161757da.png" x={760} y={185} w={1160} h={720} opacity={.92} fit="cover"/><Img src="/pdma2026/slide-10/0fe576ac-b4aa-42eb-9c74-288c239abc05.png" x={1120} y={70} w={800} h={910} fit="cover"/><div style={{position:"absolute",left:0,top:70,width:1220,height:850,background:"linear-gradient(90deg,#090909 0%,rgba(9,9,9,.92) 72%,rgba(9,9,9,.12) 100%)"}}/>
    {cards.map(([x,n,title,body,icon,active])=><div key={n} style={{position:"absolute",left:x,top:420,width:360,height:250,background:active?"#250c20":"#16191c",border:`1.5px solid ${active?MAGENTA:"#4a4d50"}`,borderRadius:10,opacity:.93}}><T x={308} y={22} w={32} size={16} weight={500} color="#939598" tracking={3}>{n}</T><Img src={icon} x={28} y={24} w={54} h={54}/><T x={34} y={82} w={292} size={23} weight={700} color={active?MAGENTA:WHITE2}>{title}</T><B x={34} y={126} w={52} h={3} bg={MAGENTA}/><T x={34} y={148} w={292} size={19} color={WHITE2}>{body}</T></div>)}
    <T x={60} y={718} w={520} size={17} weight={600} color={MAGENTA} tracking={3}>OPERATIONALIZE IT AS PRODUCT WORK</T><B x={60} y={760} w={1140} h={2} bg="#5d6064"/>
    {[[62,"01","BACKLOG","Capture the requirements."],[392,"02","PRD","Define behavior and\nboundaries."],[690,"03","ACCEPTANCE CRITERIA","Make them testable."],[1010,"04","PRODUCTION","Prove they work."]].map(([x,n,t,d],i)=><div key={String(n)}><T x={Number(x)} y={770} w={40} size={15} weight={500} color="#939598" tracking={3}>{n}</T><T x={Number(x)+50} y={765} w={260} size={19} weight={700} color={i===3?MAGENTA:WHITE2}>{t}</T><T x={Number(x)+50} y={795} w={260} size={15} color={WHITE2}>{d}</T>{i<3&&<T x={Number(x)+285} y={777} size={28} color="#939598">→</T>}</div>)}
    <B x={50} y={870} w={1820} h={90} bg="#120a10" border={`1.5px solid ${MAGENTA}`} radius={8} opacity={.96}/><B x={65} y={890} w={4} h={52} bg={MAGENTA}/><T x={92} y={900} w={1350} size={25} weight={700} color={WHITE2}>IF IT MATTERS IN PRODUCTION, IT BELONGS IN THE PRODUCT DEFINITION.</T><T x={1655} y={894} w={150} size={12} weight={500} color="#939598" tracking={4}>REAL FEATURES.{"\n"}REAL OUTCOMES.</T>
  </Stage>;
}
