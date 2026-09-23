import { Img, MAGENTA, MUTED, Stage } from "../pdmaPrimitives";
import { pdmaAssets } from "../../pdmaAssets";
import { pdmaGeometry } from "../../pdmaGeometry";

const S = pdmaAssets.slide09Root;
const sources = [["CRM", "Customer data", "ddd5d.svg"], ["PRODUCT USAGE", "Behavioral data", "cda12.svg"], ["SUPPORT", "Support tickets", "e2600.svg"], ["ACCOUNT HEALTH", "Billing & health data", "defdd.svg"]] as const;
const surface = { background: "#1a1c1f", border: "1px solid #30343a", borderRadius: 10, boxSizing: "border-box" as const };
const bodyText = { fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", color: "#f2f2f5" };

function BusinessCard() {
  return <article style={{ ...surface, width: "100%", minHeight: 360, borderRadius: 14, background: "#15181b", padding: 28, display: "flex", flexDirection: "column", ...bodyText }}>
    <div style={{ color: MAGENTA, fontSize: 16, lineHeight: "20px", fontWeight: 600 }}>BUSINESS PROBLEM</div>
    <div style={{ marginTop: 28, fontSize: 26, lineHeight: "31px", fontWeight: 600 }}>
      Customer retention teams spend too<br />
      much time manually identifying<br />
      churn risk across fragmented<br />
      enterprise systems.
    </div>
    <div style={{ marginTop: 19, height: 1, background: MUTED, width: "100%" }} />
    <div style={{ marginTop: 19, color: MUTED, fontSize: 15, lineHeight: "18px", fontWeight: 600 }}>PRIMARY VALUE DRIVER</div>
    <div style={{ marginTop: 16, color: MAGENTA, fontSize: 26, lineHeight: "30px", fontWeight: 600 }}>INCREASE REVENUE</div>
    <div style={{ marginTop: 7, fontSize: 20, lineHeight: "24px", fontWeight: 600 }}>+ STREAMLINE OPERATIONS</div>
  </article>;
}

function SignalStack() {
  return <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", alignSelf: "stretch" }}>
    {sources.map(([title, description, icon]) => <article key={title} style={{ ...surface, width: 360, height: 78, padding: "12px 16px", display: "flex", alignItems: "center", position: "relative", overflow: "visible", ...bodyText }}>
      <div style={{ width: 40, height: 40, borderRadius: 8, background: "#240e1d", display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 40px" }}><Img src={`${S}/${icon}`} x={0} y={0} w={22} h={22} style={{ position: "static", objectFit: "contain" }} alt="" /></div>
      <div style={{ marginLeft: 14, display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}><div style={{ fontSize: 17, lineHeight: "21px", fontWeight: 600 }}>{title}</div><div style={{ color: MUTED, fontSize: 15, lineHeight: "18px" }}>{description}</div></div>
      <span aria-hidden="true" style={{ position: "absolute", right: -5, top: "50%", transform: "translateY(-50%)", width: 10, height: 10, borderRadius: 999, background: MAGENTA, zIndex: 3 }} />
    </article>)}
  </div>;
}

function ActionCard({ kind, icon, title, children }: { kind: "identify" | "recommend"; icon: string; title: string; children: React.ReactNode }) {
  return <article style={{ ...surface, width: "100%", minHeight: 320, borderRadius: 14, background: kind === "identify" ? "#240e1d" : "#1a1c1f", borderColor: MAGENTA, boxShadow: kind === "identify" ? "0 0 28px rgba(255,47,174,.10)" : undefined, padding: "28px 32px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", position: "relative", overflow: "visible", ...bodyText }}>
    {kind === "identify" && <span aria-hidden="true" style={{ position: "absolute", left: -5, top: "50%", transform: "translateY(-50%)", width: 10, height: 10, borderRadius: 999, background: MAGENTA, zIndex: 3 }} />}
    <Img src={`${S}/${icon}?v=2`} x={0} y={0} w={84} h={84} style={{ position: "static", objectFit: "contain", display: "block", marginBottom: 16, flex: "0 0 84px" }} alt="" />
    <div style={{ fontSize: 26, lineHeight: "30px", fontWeight: 700 }}>{title}</div>
    <div style={{ marginTop: 20, fontSize: 19, lineHeight: "25px", fontWeight: 400, maxWidth: 220, color: "#f2f2f5" }}>{children}</div>
  </article>;
}

function SignalConnectorLane() {
  return <svg aria-hidden="true" width="64" height="100%" viewBox="0 0 64 100" preserveAspectRatio="none" style={{ display: "block", pointerEvents: "none", overflow: "visible" }}>
    {[8.86, 36.29, 63.71, 91.14].map((y) => <path key={y} d={`M 0 ${y} C 24 ${y} 40 50 64 50`} fill="none" stroke={MAGENTA} strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />)}
  </svg>;
}

function ActionConnectorLane() {
  return <svg aria-hidden="true" width="64" height="100%" viewBox="0 0 64 100" preserveAspectRatio="none" style={{ display: "block", pointerEvents: "none", overflow: "visible" }}>
    <path d="M 0 50 H 58 M 52 48.5 L 58 50 L 52 51.5" fill="none" stroke={MAGENTA} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
  </svg>;
}

export function Slide09() {
  const g = pdmaGeometry.slide09;
  return <Stage><div style={{ position: "absolute", left: g.body.x, right: g.body.x, top: g.body.top, bottom: g.body.bottom, display: "flex", flexDirection: "column", ...bodyText }}>
    <section style={{ position: "relative", width: "100%", minHeight: g.mainFlow.minHeight, marginBottom: 42, display: "grid", gridTemplateColumns: "540px 40px 360px 64px 340px 64px 384px", columnGap: 0, alignItems: "stretch" }}>
      <BusinessCard />
      <div aria-hidden="true" />
      <SignalStack />
      <SignalConnectorLane />
      <ActionCard kind="identify" icon="86e75.svg" title="IDENTIFY">Detect meaningful<br />churn-risk patterns<br />across enterprise<br />customer data.</ActionCard>
      <ActionConnectorLane />
      <ActionCard kind="recommend" icon="563bf.svg" title="RECOMMEND">Recommend an approved<br />intervention to the<br />responsible team.</ActionCard>
    </section>
    <div style={{ width: "100%", minHeight: 64, marginBottom: 52, paddingBottom: 22, boxSizing: "border-box", display: "flex", alignItems: "center", borderBottom: "1px solid #3c3f45", ...bodyText }}>
      <div style={{ color: MAGENTA, fontSize: 30, lineHeight: "36px", fontWeight: 600, whiteSpace: "nowrap" }}>PRODUCT QUESTION</div>
      <div style={{ marginLeft: 36, width: 1, height: 44, background: MUTED, flex: "0 0 auto" }} />
      <div style={{ marginLeft: 34, fontSize: 30, lineHeight: "36px", fontWeight: 600, whiteSpace: "nowrap" }}>How much authority should this agent have?</div>
    </div>
    <div style={{ width: "100%", minHeight: 76, display: "flex", alignItems: "center", ...bodyText }}>
      <div style={{ width: 4, height: 56, background: MAGENTA, flex: "0 0 auto" }} />
      <div style={{ marginLeft: 26, fontSize: 29, lineHeight: "37px", fontWeight: 600, whiteSpace: "nowrap" }}>HOW DO WE TURN THIS BUSINESS CASE INTO A PRODUCTION-READY ENTERPRISE PRODUCT?</div>
    </div>
  </div></Stage>;
}
