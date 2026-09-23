import { pdmaAssets } from "../../pdmaAssets";
import { pdmaGeometry } from "../../pdmaGeometry";
import { B, Img, MAGENTA, Stage, T } from "../pdmaPrimitives";
import { slide11Cards } from "../../content/slide-content";
const S = pdmaAssets.slide11Root;
const cards = slide11Cards;
export function Slide11() {
  const g = pdmaGeometry.slide11;
  const rules = g.connectorRules as readonly { x:number; y:number; width:number; height:number; rotation?:number; origin?:string }[];
  return <Stage>
    <Img src={`${S}/6fbf9.svg`} geometry={g.central}/>
    {g.nodes.map((n,i)=><Img key={i} src={`${S}/76b8a.svg`} x={n.x} y={n.y} w={g.nodeSize.width} h={g.nodeSize.height}/>)}
    {rules.map((r,i)=><B key={i} x={r.x} y={r.y} w={r.width} h={r.height} bg="#b81773" style={{ transform:r.rotation ? `rotate(${r.rotation}deg)` : undefined, transformOrigin:r.origin }}/>) }
    <div style={{ position:"absolute", left:g.center.x, top:g.center.y, width:g.center.width, height:g.center.height }}><Img src={`${S}/6fbf9.svg`} x={0} y={0} w={450} h={450}/><T geometry={g.number} weight={800} color={MAGENTA} align="center">1</T><T geometry={g.title} weight={600} align="center">PRODUCTIZATION{"\n"}STANDARD</T><B geometry={g.rule} bg={MAGENTA}/><T geometry={g.copy} weight={600} align="center">SAME QUESTIONS.{"\n"}SAFER PRODUCTS.{"\n"}HIGHER CONFIDENCE.</T></div>
    {cards.map(([letter,title,question,active],i)=>{const c=g.cards;return <div key={letter} style={{ position:"absolute", left:c.x[i], top:c.y[i], width:c.width, height:c.height, background:active?"#130911":"#0e0c0e", border:`1px solid rgba(184,23,115,${active?1:.78})`, borderRadius:14 }}><T geometry={c.letter} weight={800} color={MAGENTA} align="center">{letter}</T><B geometry={c.divider} bg="rgba(255,47,174,.65)"/><T geometry={c.title} weight={600} tracking={.6}>{title}</T><T geometry={c.question} line={24}>{question}</T></div>})}
    <B geometry={g.footer.upperRule} bg="#44464a"/><T geometry={g.footer.label} weight={600} color={MAGENTA}>USE A.G.E.N.T.S. TO</T><T geometry={g.footer.supporting} weight={600}>write better requirements, define operating boundaries, and make production behavior explicit.</T><B geometry={g.footer.lowerRule} bg="#44464a"/><B geometry={g.footer.accent} bg={MAGENTA}/><T geometry={g.footer.copy} weight={600}>6 QUESTIONS • 1 PRODUCTIZATION STANDARD</T>
  </Stage>;
}
