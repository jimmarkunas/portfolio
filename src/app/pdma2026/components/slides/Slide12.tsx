import { B, Img, MAGENTA, Stage, T } from "../pdmaPrimitives";
import { pdmaGeometry } from "../../pdmaGeometry";
export function Slide12(){
  const g = pdmaGeometry.slide12;
  const framework=[["A","Authority"],["G","Guardrails"],["E","Evidence"],["N","Network & Integrations"],["T","Transfer & Escalation"],["S","Success & Accountability"]];
  const req=[["A","The agent may recommend a\nretention intervention, but cannot\npublish or launch it."],["G","Recommendations must stay within\napproved product surfaces and\nbusiness rules."],["E","Keep a clear record of the recommendation,\nthe inputs that drove it, and the final\ndecision."],["N","Agent has read/write access to Salesforce,\nbut cannot change customer payment data."],["T","CS Lead approval is required before an agent\ncan update a customer’s payment data."],["S","Measure retention lift, recommendation\naccuracy, false-positive rate, and human\noverride rate."]];
  return <Stage>
    <Img src="/pdma2026/slide-12/1d1865c5-5b25-4f1d-9106-9185a539fe56.png" x={0} y={0} w={1920} h={1080} fit="cover"/><B x={0} y={0} w={1920} h={1080} bg="rgba(4,4,4,.22)"/><B x={0} y={0} w={700} h={1080} bg="rgba(3,3,3,.9)"/>
    <Img src="/pdma2026/slide-12/4be2e216-d274-4069-b156-eb151877a784.png" x={655} y={205} w={520} h={690}/><Img src="/pdma2026/slide-12/6a40e039-f704-4242-b3aa-aed23760b6f0.png" x={1180} y={155} w={570} h={760}/>
    <B x={77} y={688} w={47} h={3} bg={MAGENTA}/><T x={77} y={720} w={300} size={13} weight={500} color="#7d7d85" tracking={4} line={24}>FROM PRINCIPLES{"\n"}TO REQUIREMENTS{"\n"}FROM POSSIBILITY{"\n"}TO PRODUCTION.</T>
    <T x={790} y={286} w={300} size={28} weight={600} color="#7d7d85" tracking={3}>A.G.E.N.T.S</T><T x={790} y={326} w={260} size={20} weight={500} color="#7d7d85" tracking={3}>FRAMEWORK</T>{framework.map(([l,n],i)=><div key={l}><T x={790} y={389+i*67} w={34} size={26} weight={700}>{l}</T><T x={846} y={391+i*67} w={255} size={18}>{n}</T><B x={790} y={427+i*67} w={300} h={1} bg="rgba(69,71,74,.65)"/></div>)}
    <T x={1138} y={500} w={64} size={38} color={MAGENTA}>→</T><T x={1250} y={215} w={455} size={20} weight={500} tracking={4}>PRODUCT REQUIREMENTS</T><B x={1248} y={255} w={455} h={1} bg="rgba(242,242,245,.45)"/>
    {req.map(([l,txt],i)=><div key={l}><T x={1252} y={285+i*87} w={35} size={28} weight={700} color={MAGENTA}>{l}</T><T x={1302} y={287+i*87} w={38} size={22}>→</T><T x={1360} y={283+i*87} w={350} size={16}>{txt}</T><B x={1248} y={353+i*87} w={455} h={1} bg="rgba(242,242,245,.28)"/></div>)}
  </Stage>;
}
