import { pdmaAssets } from "../../pdmaAssets";
import { B, Img, MAGENTA, MUTED, Stage, T } from "../pdmaPrimitives";
import { pdmaGeometry } from "../../pdmaGeometry";
const S15 = pdmaAssets.slide15Root;
export function Slide15(){return <Stage>
  <Img src={`${S15}/9e4d6.svg`} x={1060} y={-70} w={840} h={610}/><Img src={`${S15}/38dc4.svg`} x={1330} y={170} w={720} h={950}/><Img src={`${S15}/f3a10.png`} x={0} y={288} w={1920} h={684} opacity={.68} fit="cover"/><Img src={`${S15}/c47cc-printed.png`} x={1140} y={86} w={731} h={860} fit="cover"/>

  <B x={75} y={441} w={1042} h={273} bg="transparent" border={`1px solid ${MAGENTA}`} radius={12}/><T x={111} y={489} w={560} size={17} weight={600} color={MAGENTA} tracking={2}>SPECIAL GIFT FROM PDMA + JIM</T><T x={110} y={526} w={610} size={32} weight={800}>A.G.E.N.T.S. PRODUCTIZATION KIT</T><T x={111} y={575} w={610} size={18} line={28}>A free worksheet for operationalizing this approach in your enterprise.</T><a className="pdma-slide15-download" href="https://github.com/jimmarkunas/agents-enterprise-ai-operating-model" target="_blank" rel="noreferrer">DOWNLOAD THE KIT</a><B x={722} y={476} w={2} h={210} bg={MAGENTA}/><T x={766} y={493} w={340} size={20} weight={600} line={24}>TAKE IT BACK TO YOUR TEAM.</T><T x={800} y={540} w={300} size={21} weight={600} color={MAGENTA} tracking={2} line={32}>DOWNLOAD IT{"\n"}USE IT{"\n"}ADAPT IT{"\n"}SHARE IT</T>
  <B x={75} y={812} w={3} h={80} bg={MAGENTA}/><T x={103} y={820} w={760} size={34} weight={600}>AUTOMATE THE WORK.</T><T x={103} y={862} w={1280} size={34} weight={600} color={MAGENTA}>NEVER AUTOMATE AWAY ACCOUNTABILITY.</T>
  <a href="https://github.com/jimmarkunas/agents-enterprise-ai-operating-model" target="_blank" rel="noreferrer" aria-label="Open the Agents Enterprise AI Operating Model GitHub repository" style={{ position: "absolute", left: 925, top: 895, width: 185, height: 185, display: "block", background: "#fff", padding: 8, boxSizing: "border-box", zIndex: 3 }}><Img src={`${S15}/agents-enterprise-ai-operating-model-qr.png`} x={8} y={8} w={169} h={169} fit="contain" /></a>
  <Img src={`${S15}/6213d.svg`} x={1416} y={588} w={252} h={252}/>
  </Stage>}
