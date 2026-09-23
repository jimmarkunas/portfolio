import { PdmaSlideCanvas } from "../../PdmaPresentationShell";
import { PdmaSlide } from "../PdmaSlideBody";
import { pdmaGeometry } from "../../pdmaGeometry";
import { ImageLayer, Layer, asset } from "./slideShared";

export function Slide04() {
  const g = pdmaGeometry.slide04;
  return <PdmaSlide surfaceClassName="pdma-s04" bodyClassName="pdma-slide-body-04"><ImageLayer className="s04-wide" geometry={g.wide} src={asset("slide-04", "0c14e.png")} /><ImageLayer className="s04-diagram" geometry={g.diagram} src={asset("slide-04", "bd2f1.png")} delay={.22} /><div className="s04-cards" style={{ left: g.cards.x, top: g.cards.y, width: g.cards.width, gap: g.cards.gap }}>{[["01","AUTOMATE","AI owns execution of bounded, repeatable work."],["02","AUGMENT","AI improves speed, synthesis, or quality while a human still decides."],["03","HUMAN-OWNED","Judgment, accountability, and authority stays human."]].map(([n,t,d],i)=><Layer key={n} delay={i*.1}><article style={{ width: g.cards.cardWidth, height: g.cards.cardHeight, paddingLeft: g.cards.paddingLeft, paddingBottom: g.cards.paddingBottom }}><small>{n}</small><h2>{t}</h2><p style={{ maxHeight: g.cards.copyMaxHeight }}>{d}</p><b style={{ left: g.cards.labelX, top: g.cards.labelY }}>{i===0?"EXECUTION":i===1?"DECISION":"ACCOUNTABILITY"}</b></article></Layer>)}</div><div className="s04-takeaway" style={{ left: g.takeaway.x, top: g.takeaway.y, width: g.takeaway.width, height: g.takeaway.height, paddingTop: g.takeaway.paddingTop }}><i/>THE GOAL: BUILD THE RIGHT OPERATING MODEL FOR THE WORK.</div></PdmaSlide>;
}
