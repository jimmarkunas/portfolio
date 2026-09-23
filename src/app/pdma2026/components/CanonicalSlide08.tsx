import { PdmaSlideCanvas } from "../PdmaPresentationShell";
import { pdmaAssets } from "../pdmaAssets";
import { pdmaGeometry } from "../pdmaGeometry";
import { Stage, T, B, Img, MAGENTA, MUTED, WHITE } from "./pdmaPrimitives";
import { slide08Stages } from "../content/slide-content";
const S = pdmaAssets.slide08Root;
const stages = slide08Stages;
export function Slide08() { const g = pdmaGeometry.slide08; return <Stage background="#050505"><Img src={`${S}/7149b.png`} geometry={g.gauge} fit="cover"/><div style={{ position: "absolute", left: g.dial.x, top: g.dial.y, width: g.dial.width, height: g.dial.height, maskImage: `url(${S}/3dc3f.svg)`, WebkitMaskImage: `url(${S}/3dc3f.svg)`, maskSize: "460px 460px", WebkitMaskSize: "460px 460px", maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat" }}><Img src={`${S}/59b40.png`} geometry={g.dialImage} fit="cover"/></div>
  {stages.map((s, i) => { const sg = g.stages[i]; return <div key={s.n}><T geometry={sg.number} weight={600} color={s.active ? MAGENTA : MUTED}>{s.n}</T><T geometry={sg.title} weight={700} color={s.active ? MAGENTA : WHITE}>{s.title}</T><T geometry={sg.body}>{s.body}</T><Img src={`${S}/${s.ellipse}`} geometry={sg.ellipse}/><Img src={`${S}/${s.icon}`} geometry={sg.icon}/></div> })}
  <T geometry={g.observation} weight={500} color={MUTED}>OBSERVATION{"\n"}HUMAN IN THE LOOP</T><B geometry={g.leftBoundary} bg="#73767b"/><T geometry={g.decisionExecution} weight={500} color={MUTED}>DECISION &amp; EXECUTION{"\n"}AI TAKES ACTION</T><B geometry={g.rightBoundary} bg="#73767b"/>
  <T geometry={g.autonomy} weight={600} tracking={g.autonomy.tracking}>MORE AUTONOMY</T><B geometry={g.autonomyRule} bg="#73767b"/><T x={g.autonomyArrow.x} y={g.autonomyArrow.y} size={g.autonomyArrow.size} color={MAGENTA}>→</T><T geometry={g.consequence} weight={600} tracking={g.consequence.tracking}>MORE CONSEQUENCE</T><B geometry={g.consequenceRule} bg="#73767b"/><T x={g.consequenceArrow.x} y={g.consequenceArrow.y} size={g.consequenceArrow.size} color={MAGENTA}>→</T><T geometry={g.productDesign} weight={600} tracking={g.productDesign.tracking}>MORE PRODUCT DESIGN</T>
  <B geometry={g.takeawayRule} bg="#44464a"/><B geometry={g.takeawayAccent} bg={MAGENTA}/><T geometry={g.takeaway} weight={700}>THE FARTHER RIGHT YOU GO, THE MORE PRODUCT DESIGN HAS TO ACCOUNT FOR THE CONSEQUENCES.</T>
 </Stage> }
