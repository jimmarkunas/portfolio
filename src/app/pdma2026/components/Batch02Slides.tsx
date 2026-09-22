import { PdmaSlideCanvas } from "../PdmaPresentationShell";
import { PdmaSlideBody } from "./PdmaSlideBody";
import { BarChart3, Coins, Settings2 } from "lucide-react";
function Chrome({ footer, labels, fill }: { footer: string; labels: [string,string,string]; fill: string }) { return <><header className="pdma-header"><span className="pdma-event">PDMA 2026</span><div className="pdma-track"><span className="pdma-fill" style={{width:fill}}/></div><span className="pdma-nav pdma-nav-ownership">{labels[0]}</span><b className="pdma-nav pdma-nav-bullet-1">•</b><span className="pdma-nav pdma-nav-judgment">{labels[1]}</span><b className="pdma-nav pdma-nav-bullet-2">•</b><span className="pdma-nav pdma-nav-automation">{labels[2]}</span></header><footer className="pdma-footer"><span className="pdma-footer-statement">{footer}</span><span className="pdma-footer-rule"/><img className="pdma-asterisk" src="/pdma2026/slide-02/canonical-asterisk.svg" alt=""/></footer></>; }
const s06Text = { fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", color: "#f2f2f5" } as const;
const s06Inventory = [
  ["SYSTEMS", "What applications and platforms are involved?", "icon-systems.svg", 48.6],
  ["DATA", "What information does the product depend on?", "icon-data.svg", 48.6],
  ["PEOPLE", "Who uses, owns, or supports the workflow?", "icon-people.svg", 52.2],
  ["DEPENDENCIES", "What breaks if one part fails?", "icon-dependencies.svg", 50.4],
] as const;
const s06Owners = [
  ["SYSTEM OWNER", "Who owns the system the agent touches?", "icon-system-owner.svg"],
  ["DECISION OWNER", "Who owns the authority being delegated?", "icon-decision-owner.svg"],
  ["OUTCOME OWNER", "Who is accountable for the result?", "icon-outcome-owner.svg"],
] as const;
const s06Card = { position: "absolute", boxSizing: "border-box", border: "1px solid #ff2fae", borderRadius: 10 } as const;
export function Slide06(){return <PdmaSlideCanvas><div className="pdma-slide-surface pdma-s06"><PdmaSlideBody className="pdma-slide-body-06"><div className="pdma-slide06-exact" style={{position:"absolute",left:0,top:76,width:1920,height:909,overflow:"hidden",pointerEvents:"none",background:"#090909"}}>
  <img src="/pdma2026/slide-06/figma-nebula.png" alt="" style={{position:"absolute",left:-120,top:0,width:980,height:909}} />
  <img src="/pdma2026/slide-06/figma-planet.png" alt="" style={{position:"absolute",left:-590,top:-20,width:1020,height:1020}} />
  <img src="/pdma2026/slide-06/figma-secondary-moon.png" alt="" style={{position:"absolute",left:370,top:350,width:128,height:128}} />
  <img src="/pdma2026/slide-06/figma-small-moon.png" alt="" style={{position:"absolute",left:468,top:470,width:44,height:44}} />
  <img src="/pdma2026/slide-06/figma-rings.png" alt="" style={{position:"absolute",left:1020,top:-18,width:820,height:340}} />
  <div style={{...s06Text,position:"absolute",left:58,top:338,width:230,height:116,fontSize:16,lineHeight:"28px",letterSpacing:5}}>MORE<br/>AWARENESS<br/>BETTER<br/>AUTONOMY<div style={{position:"absolute",left:0,top:130,width:48,height:3,background:"#ff2fae"}} /></div>
  <strong style={{...s06Text,position:"absolute",left:598,top:288,width:400,height:21,color:"#ff2fae",fontSize:17,lineHeight:"21px",letterSpacing:5}}>DO THE INVENTORY</strong>
  <strong style={{...s06Text,position:"absolute",left:1415,top:288,width:360,height:21,color:"#ff2fae",fontSize:17,lineHeight:"21px",letterSpacing:5}}>NAME THE OWNERS</strong>
  <img src="/pdma2026/slide-06/connectors.svg" alt="" style={{position:"absolute",left:1118,top:374,width:291,height:366}} />
  <div style={{position:"absolute",left:1277,top:513,width:28,height:28,background:"rgba(255,47,174,.18)",borderRadius:"50%"}} />
  <div style={{position:"absolute",left:1285,top:521,width:14,height:14,background:"#ff2fae",borderRadius:"50%"}} />
  {s06Inventory.map(([title,body,icon,iconWidth],index)=><div key={title} style={{...s06Card,left:598,top:322+index*122,width:520,height:104,background:"rgba(12,15,18,.78)"}}>
    <img src={`/pdma2026/slide-06/${icon}`} alt="" style={{position:"absolute",left:27,top:24,width:iconWidth,height:48.6}} />
    <b style={{...s06Text,position:"absolute",left:137,top:18,width:310,height:27,fontSize:21,lineHeight:"27px",letterSpacing:1}}>{title}</b>
    <span style={{...s06Text,position:"absolute",left:137,top:48,width:315,height:50,fontSize:17,lineHeight:"21px"}}>{body}</span>
    <span style={{position:"absolute",left:462,top:32,width:45,height:41,color:"#ff2fae",fontSize:28,lineHeight:"41px",textAlign:"center"}}>→</span>
    <span style={{position:"absolute",left:514,top:47,width:10,height:10,borderRadius:"50%",background:"#ff2fae"}} />
  </div>)}
  {s06Owners.map(([title,body,icon],index)=><div key={title} style={{...s06Card,left:1415,top:322+index*152,width:430,height:140,background:"rgba(36,14,29,.86)"}}>
    <img src={`/pdma2026/slide-06/${icon}`} alt="" style={{position:"absolute",left:28,top:37,width:48.6,height:48.6}} />
    <b style={{...s06Text,position:"absolute",left:135,top:25,width:245,height:24,color:"#ff2fae",fontSize:18,lineHeight:"24px",letterSpacing:2}}>{title}</b>
    <div style={{position:"absolute",left:135,top:58,width:210,height:1.5,background:"#9b3c72"}} />
    <span style={{...s06Text,position:"absolute",left:135,top:73,width:240,height:50,fontSize:17,lineHeight:"22px"}}>{body}</span>
    <span style={{position:"absolute",left:-6,top:65,width:10,height:10,borderRadius:"50%",background:"#ff2fae"}} />
  </div>)}
  <div style={{position:"absolute",left:48,top:820,width:1820,height:1.5,background:"#44464a"}} />
  <div style={{position:"absolute",left:48,top:850,width:3,height:44,background:"#ff2fae"}} />
  <strong style={{...s06Text,position:"absolute",left:78,top:850,width:1320,height:31,fontSize:24,lineHeight:"31px",fontWeight:600}}>AUTOMATION CHANGES EXECUTION. IT DOES NOT ERASE OWNERSHIP.</strong>
</div></PdmaSlideBody></div></PdmaSlideCanvas>}
const valueRows=[["ACQUIRE","LABOR","FASTER"],["CONVERT","COST-TO-SERVE","SIMPLER"],["RETAIN","REWORK","SCALABLE"],["EXPAND","WASTE","LESS MANUAL"]] as const;
const slide07Columns: Array<[string,string,typeof BarChart3]> = [["INCREASE REVENUE","Does it help us grow top-line value?",BarChart3],["DECREASE COST","Does it remove meaningful cost from the system?",Coins],["STREAMLINE OPERATIONS","Does it make work materially easier to run?",Settings2]];
export function Slide07(){return <PdmaSlideCanvas><div className="pdma-slide-surface pdma-s07"><PdmaSlideBody className="pdma-slide-body-07"><div className="s07-matrix"><aside><b>DECISION RULE</b><i/><strong>PICK ONE<br/>PRIMARY<br/>VALUE DRIVER.</strong><i/><span>Use this scorecard to evaluate your concept. A strong product should clearly map to one primary value driver.</span></aside>{slide07Columns.map(([title,desc,Icon],index)=><section className={index===0?"is-selected":""} key={title}><Icon className="s07-header-icon" aria-hidden="true"/><h2>{title}</h2><p>{desc}</p>{valueRows.map((row,i)=><div className="s07-row" key={row[index]}><b>{row[index]}</b><i/></div>)}</section>)}</div><div className="s07-takeaway"><i/>IF YOU CAN’T IDENTIFY ONE OF THESE OUTCOMES, YOU DON’T HAVE A PRODUCT.</div></PdmaSlideBody></div></PdmaSlideCanvas>}
const authorityStages = [["01","OBSERVE","AI sees the state of the product or process."],["02","RECOMMEND","AI proposes what should happen."],["03","PREPARE","AI stages the action for human review."],["04","DECIDE","AI chooses the action within defined rules."],["05","EXECUTE","AI acts within defined limits."]] as const;
export function Slide08(){return <div className="pdma-slide-surface pdma-b2 pdma-b2-08"><Chrome fill="53.333%" footer="AUTHORITY IS A PRODUCT DECISION" labels={["OBSERVE","DECIDE","EXECUTE"]}/><h1>HOW MUCH AUTHORITY<br/><em>SHOULD THE ROBOTS HAVE?</em></h1><p>The farther AI moves from observing to acting, the more deliberately<br/>the Product Manager has to design the boundary.</p><div className="authority-ladder"><div className="authority-arc"/><div className="authority-dial"><i/></div><div className="authority-boundary left">OBSERVATION<br/>HUMAN IN THE LOOP</div><div className="authority-boundary right">DECISION &amp; EXECUTION<br/>AI TAKES ACTION</div><ol>{authorityStages.map(([n,t,d],i)=><li className={i>2?"is-accent":""} key={n}><small>{n}</small><b>{t}</b><span>{d}</span><i aria-hidden="true">{i===0?"◉":i===1?"▤":i===2?"⚙":i===3?"✓":"ϟ"}</i></li>)}</ol><div className="authority-continuum"><b>MORE AUTONOMY</b><span>→</span><strong>MORE CONSEQUENCE</strong><span>→</span><b>MORE PRODUCT DESIGN</b></div></div><div className="authority-takeaway">THE FARTHER RIGHT YOU GO, THE MORE PRODUCT DESIGN HAS TO ACCOUNT FOR THE CONSEQUENCES.</div></div>}
const sourceRows = [["CRM","Customer data","♧"],["PRODUCT USAGE","Behavioral data","▥"],["SUPPORT","Support tickets","♧"],["ACCOUNT HEALTH","Billing & health data","▤"]] as const;
export function Slide09(){return <div className="pdma-slide-surface pdma-b2 pdma-b2-09"><Chrome fill="60%" footer="TURN THE BUSINESS CASE INTO A PRODUCT" labels={["VALUE","SIGNAL","ACTION"]}/><h1>LIVE SCENARIO:<br/><em>RETENTION AGENT.</em></h1><p>A real enterprise business case: detect churn risk across CRM, product-usage, and support data before it is too late to act.</p><article className="scenario-problem"><b>BUSINESS PROBLEM</b><strong>Customer retention teams spend too<br/>much time manually identifying<br/>churn risk across fragmented<br/>enterprise systems.</strong><hr/><small>PRIMARY VALUE DRIVER</small><em>INCREASE REVENUE</em><span>+ STREAMLINE OPERATIONS</span></article><div className="sources">{sourceRows.map(([a,b,icon])=><div key={a}><i>{icon}</i><b>{a}</b><span>{b}</span></div>)}</div><svg className="scenario-connectors" viewBox="0 0 560 190" aria-hidden="true"><path d="M0 2C120 2 98 188 240 188M0 80C130 80 90 188 240 188M0 134C120 134 105 188 240 188M0 188C120 188 102 6 240 6"/><circle cx="240" cy="188" r="6"/></svg><article className="scenario-step identify"><i>♧</i><b>IDENTIFY</b><span>Detect meaningful<br/>churn-risk patterns<br/>across enterprise<br/>customer data.</span></article><article className="scenario-step recommend"><i>◎</i><b>RECOMMEND</b><span>Recommend an approved<br/>intervention to the<br/>responsible team.</span></article><div className="scenario-arrow">→</div><div className="scenario-rail"><i/>PRODUCT SIGNAL&nbsp; → &nbsp;PROBLEM&nbsp; → &nbsp;RECOMMENDED INTERVENTION<i/></div><div className="scenario-question"><b>PRODUCT QUESTION</b><span>How much authority should this agent have?</span></div><div className="scenario-takeaway">HOW DO WE TURN THIS BUSINESS CASE INTO A PRODUCTION-READY ENTERPRISE PRODUCT?</div></div>}
