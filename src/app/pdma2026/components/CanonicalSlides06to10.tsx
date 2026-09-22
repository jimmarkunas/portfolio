import type { CSSProperties, ReactNode } from "react";
import { PdmaSlideCanvas } from "../PdmaPresentationShell";

const FONT = "Inter, ui-sans-serif, system-ui, sans-serif";
const WHITE = "#f2f2f5";
const WHITE2 = "#f5f5f2";
const MAGENTA = "#ff2fae";
const MUTED = "#7a7d85";
const LINE = "#44464a";

function Stage({ children, background = "#090909" }: { children: ReactNode; background?: string }) {
  return <PdmaSlideCanvas><div style={{ position: "absolute", inset: 0, width: 1920, height: 1080, overflow: "hidden", background, color: WHITE, fontFamily: FONT }}>{children}</div></PdmaSlideCanvas>;
}
function T({ x, y, w, size, weight = 400, color = WHITE, line, tracking, children, align = "left", style }: { x:number; y:number; w?:number; size:number; weight?:number; color?:string; line?:number|string; tracking?:number; children:ReactNode; align?:CSSProperties["textAlign"]; style?:CSSProperties }) {
  return <div style={{ position:"absolute", left:x, top:y, width:w, margin:0, fontFamily:FONT, fontSize:size, fontWeight:weight, color, lineHeight: typeof line === "number" ? `${line}px` : (line ?? "normal"), letterSpacing:tracking, textAlign:align, whiteSpace:"pre-wrap", ...style }}>{children}</div>;
}
function B({ x, y, w, h, bg, border, radius = 0, opacity = 1, style }: { x:number; y:number; w:number; h:number; bg?:string; border?:string; radius?:number; opacity?:number; style?:CSSProperties }) {
  return <div style={{ position:"absolute", left:x, top:y, width:w, height:h, boxSizing:"border-box", background:bg, border, borderRadius:radius, opacity, ...style }} />;
}
function Img({ src, x, y, w, h, opacity = 1, fit = "contain", style }: { src:string; x:number; y:number; w:number; h:number; opacity?:number; fit?:CSSProperties["objectFit"]; style?:CSSProperties }) {
  return <img alt="" src={src} style={{ position:"absolute", left:x, top:y, width:w, height:h, opacity, objectFit:fit, maxWidth:"none", display:"block", ...style }} />;
}
function CanonicalChrome({ fill, labels, footer }: { fill:number; labels:[string,string,string]; footer:string }) {
  return <>
    <B x={0} y={0} w={1920} h={100} bg="#090909" />
    <T x={30} y={25} size={20} weight={600} tracking={.8}>PDMA 2026</T>
    <B x={205} y={36} w={1275} h={2} bg={LINE} />
    <B x={205} y={35} w={fill} h={3} bg={MAGENTA} />
    <T x={1506} y={27} size={15} weight={600} color={MUTED} tracking={3}>{labels[0]}</T>
    <T x={1602} y={27} size={15} weight={600} color={MAGENTA} tracking={2}>•</T>
    <T x={1632} y={27} size={15} weight={600} color={MUTED} tracking={3}>{labels[1]}</T>
    <T x={1762} y={27} size={15} weight={600} color={MAGENTA} tracking={2}>•</T>
    <T x={1792} y={27} size={15} weight={600} color={MUTED} tracking={3}>{labels[2]}</T>
    <B x={0} y={985} w={1920} h={95} bg="#090909" />
    <T x={26} y={1030} size={15} weight={600} color={MUTED} tracking={4}>{footer}</T>
    <B x={431} y={1042} w={1395} h={2} bg={LINE} />
    <Img src="/pdma2026/slide-02/canonical-asterisk.svg" x={1841} y={1013} w={52} h={52} />
  </>;
}

export function Slide06(){
  const inv=[
    ["SYSTEMS","What applications and\nplatforms are involved?","icon-systems.svg",27,24,34.736,36.544],
    ["DATA","What information does the\nproduct depend on?","icon-data.svg",37.529,29.129,27.543,36.539],
    ["PEOPLE","Who uses, owns, or\nsupports the workflow?","icon-people.svg",28.618,29.217,48.965,36.185],
    ["DEPENDENCIES","What breaks if one\npart fails?","icon-dependencies.svg",32.13,28.228,39.237,40.145],
  ] as const;
  const own=[
    ["SYSTEM OWNER","Who owns the system\nthe agent touches?","icon-system-owner.svg",37.63,43.932,29.341,35.369],
    ["DECISION OWNER","Who owns the authority\nbeing delegated?","icon-decision-owner.svg",28,37,48.6,48.6],
    ["OUTCOME OWNER","Who is accountable\nfor the result?","icon-outcome-owner.svg",34.932,43.932,34.736,34.736],
  ] as const;
  return <Stage><CanonicalChrome fill={510} labels={["SYSTEMS","DATA","OWNERSHIP"]} footer="AUTOMATION DOES NOT ERASE OWNERSHIP" />
    <div style={{position:"absolute",left:0,top:76,width:1920,height:909,overflow:"hidden",background:"#040405"}}>
      <Img src="/pdma2026/slide-06/figma-nebula.png" x={-120} y={0} w={980} h={909} opacity={.78} fit="cover" />
      <Img src="/pdma2026/slide-06/figma-planet.png" x={-590} y={-20} w={1020} h={1020} />
      <Img src="/pdma2026/slide-06/figma-secondary-moon.png" x={370} y={350} w={128} h={128} />
      <Img src="/pdma2026/slide-06/figma-small-moon.png" x={468} y={470} w={44} h={44} />
      <Img src="/pdma2026/slide-06/figma-rings.png" x={1020} y={-18} w={820} h={340} opacity={.82} fit="cover" />
      <T x={58} y={338} w={230} size={17} weight={500} color="#94969e" line={29} tracking={6}>MORE{"\n"}AWARENESS{"\n"}BETTER{"\n"}AUTONOMY</T><B x={58} y={468} w={48} h={3} bg={MAGENTA}/>
      <T x={64} y={42} w={1110} size={64} weight={800} color="#f2f2f2" line={70}>UNDERSTAND THE ENVIRONMENT.</T>
      <T x={64} y={110} w={820} size={64} weight={800} color={MAGENTA} line={70}>NAME THE OWNERS.</T>
      <T x={114} y={199} w={1050} size={29} color="#f2f2f2" line={36}>AI inherits systems, data, permissions, dependencies, and failure modes —{"\n"}while autonomous actions still cross human ownership boundaries.</T>
      <T x={598} y={288} w={400} size={17} weight={600} color={MAGENTA} tracking={5}>DO THE INVENTORY</T>
      <T x={1415} y={288} w={360} size={17} weight={600} color={MAGENTA} tracking={5}>NAME THE OWNERS</T>
      <Img src="/pdma2026/slide-06/connectors.svg" x={1118} y={374} w={291} h={366}/>
      <B x={1277} y={513} w={28} h={28} bg="rgba(255,47,174,.2)" radius={99}/><B x={1285} y={521} w={14} h={14} bg="#f2f2f2" border={`3px solid ${MAGENTA}`} radius={99}/>
      {inv.map(([title,body,icon,ix,iy,iw,ih],i)=><div key={title} style={{position:"absolute",left:598,top:322+i*122,width:520,height:104,boxSizing:"border-box",background:"rgba(14,17,20,.88)",border:"1.5px solid rgba(255,47,174,.65)",borderRadius:12}}>
        <Img src={`/pdma2026/slide-06/${icon}`} x={ix} y={iy} w={iw} h={ih}/><T x={137} y={18} w={310} size={22} weight={700} color="#f2f2f2" tracking={1.5}>{title}</T><T x={137} y={48} w={315} size={18} color="#f2f2f2" line={25}>{body}</T><T x={462} y={32} w={45} size={34} color={MAGENTA}>→</T><B x={514} y={47} w={10} h={10} bg="#f2f2f2" border={`2px solid ${MAGENTA}`} radius={99}/>
      </div>)}
      {own.map(([title,body,icon,ix,iy,iw,ih],i)=><div key={title} style={{position:"absolute",left:1415,top:322+i*152,width:430,height:140,boxSizing:"border-box",background:"rgba(31,3,20,.86)",border:"1.5px solid rgba(255,47,174,.8)",borderRadius:12}}>
        <Img src={`/pdma2026/slide-06/${icon}`} x={ix} y={iy} w={iw} h={ih}/><T x={135} y={25} w={245} size={20} weight={700} color={MAGENTA} tracking={1.2}>{title}</T><B x={135} y={58} w={210} h={1.5} bg="rgba(255,47,174,.55)"/><T x={135} y={73} w={240} size={18} color="#f2f2f2" line={25}>{body}</T><B x={-6} y={65} w={10} h={10} bg="#f2f2f2" border={`2px solid ${MAGENTA}`} radius={99}/>
      </div>)}
      <B x={48} y={820} w={1820} h={1.5} bg="rgba(92,94,102,.9)"/><B x={48} y={850} w={3} h={44} bg={MAGENTA}/><T x={78} y={850} w={1320} size={26} weight={700} color="#f2f2f2">AUTOMATION CHANGES EXECUTION. IT DOES NOT ERASE OWNERSHIP.</T>
    </div>
  </Stage>;
}

export function Slide07(){
  const rows=[["ACQUIRE","LABOR","FASTER"],["CONVERT","COST-TO-SERVE","SIMPLER"],["RETAIN","REWORK","SCALABLE"],["EXPAND","WASTE","LESS MANUAL"]];
  const cols=[
    ["INCREASE REVENUE","Does it help us grow top-line value?"],
    ["DECREASE COST","Does it remove meaningful cost\nfrom the system?"],
    ["STREAMLINE OPERATIONS","Does it make work materially\neasier to run?"],
  ];
  return <Stage><CanonicalChrome fill={595} labels={["REVENUE","COST","OPERATIONS"]} footer="PROVE THE VALUE BEFORE YOU BUILD" />
    <T x={64} y={118} w={1760} size={76} weight={800} line={84}>BEFORE YOU BUILD IT,</T><T x={64} y={198} w={1760} size={76} weight={800} color={MAGENTA} line={84}>PROVE THE VALUE.</T><T x={66} y={296} w={1710} size={27} line={36}>Every Agentic Product should have a clear economic reason to exist. Pick one primary value driver.</T>
    <B x={60} y={380} w={1800} h={392} bg="#121518" border="1px solid #3a3f44" radius={14}/><B x={60} y={380} w={286} h={392} bg="#15181b" border="1px solid #3a3f44" radius={14}/><B x={346} y={380} w={504.667} h={392} bg="rgba(36,14,29,.92)" border={`1px solid ${MAGENTA}`}/>
    <T x={86} y={406} w={180} size={15} weight={600} color={MAGENTA} line={20} tracking={3}>DECISION RULE</T><B x={86} y={443} w={44} h={2} bg={MUTED}/><T x={86} y={468} w={190} size={31} weight={800} line={32}>PICK ONE{"\n"}PRIMARY{"\n"}VALUE DRIVER.</T><B x={86} y={590} w={44} h={2} bg={MUTED}/><T x={86} y={594} w={180} size={15} color={MUTED} line={20}>Use this scorecard to{"\n"}evaluate your concept.{"\n"}A strong product should{"\n"}clearly map to one{"\n"}primary value driver.</T>
    {[346,850.67,1355.33].map((x,i)=><B key={x} x={x} y={380} w={1} h={392} bg="#3a3f44"/>)}{[508,574,640,706].map(y=><B key={y} x={346} y={y} w={1514} h={1} bg="#3a3f44"/>)}
    {cols.map(([title,desc],i)=>{const x=[440,946.67,1455.33][i]; return <div key={title}><T x={x} y={405} w={360} size={i===2?24:25} weight={800} color={i===0?MAGENTA:WHITE} line={32}>{title}</T><T x={x} y={447} w={345} size={18} line={23}>{desc}</T></div>})}
    {rows.map((r,ri)=>r.map((label,ci)=>{const x=[366,870.67,1375.33][ci], y=529+ri*66, dot=[640.67,1147.33,1652][ci]; return <div key={label}><T x={x} y={y} w={220} size={16} weight={600} line={22} tracking={1.8}>{label}</T><div style={{position:"absolute",left:dot,top:y-2,width:24,height:24,borderRadius:"50%",border:`1.5px solid ${ri===0&&ci===0?MAGENTA:"#7a7d85"}`,boxSizing:"border-box"}}>{ri===0&&ci===0&&<B x={6} y={6} w={10} h={10} bg={MAGENTA} radius={99}/>}</div></div>}) )}
    <B x={60} y={830} w={1800} h={2} bg="#3a3f44"/><B x={64} y={865} w={3} h={46} bg={MAGENTA}/><T x={92} y={862} w={1660} size={27} weight={600} line={38}>IF YOU CAN&apos;T IDENTIFY ONE OF THESE OUTCOMES, YOU DON&apos;T HAVE A PRODUCT.</T>
  </Stage>;
}

const S8="https://www.figma.com/api/mcp/asset/9efb3016-e735-4409-8e2c-e8f7c8c69b11";
export function Slide08(){
  const stages=[
    ["01","OBSERVE","AI sees the state\nof the product\nor process.",432,480,387,514,372,560,445,637,`${S8}/91b4d.svg`,463,654,false],
    ["02","RECOMMEND","AI proposes what\nshould happen.",680,375,612,410,619,456,670,534,`${S8}/d17aa.svg`,687,551,false],
    ["03","PREPARE","AI stages the action\nfor human review.",949,329,907,364,877,411,924,485,`${S8}/9244f.svg`,940,502,false],
    ["04","DECIDE","AI chooses the action\nwithin defined rules.",1217,368,1186,403,1139,449,1176,530,`${S8}/8b919.svg`,1194,549,true],
    ["05","EXECUTE","AI acts within\ndefined limits.",1463,479,1422,514,1416,560,1401,637,`${S8}/97008.svg`,1419,655,true],
  ] as const;
  const ell=[`${S8}/59d08.svg`,`${S8}/379c2.svg`,`${S8}/379c2.svg`,`${S8}/d8145.svg`,`${S8}/ca1fd.svg`];
  return <Stage background="#050505">
    <B x={0} y={0} w={1920} h={78} bg="#090909"/><T x={67} y={22} w={150} size={18} weight={700} color={WHITE2}>PDMA 2026</T><B x={223} y={40} w={1213} h={1} bg={LINE}/><B x={223} y={39} w={318} h={3} bg={MAGENTA}/><T x={1471} y={23} w={380} size={14} weight={600} color="#909295" tracking={3}>OBSERVE  •  DECIDE  •  EXECUTE</T>
    <T x={64} y={118} w={900} size={66} weight={800} color={WHITE2}>HOW MUCH AUTHORITY</T><T x={64} y={182} w={1100} size={66} weight={800} color={MAGENTA}>SHOULD THE ROBOTS HAVE?</T><T x={66} y={261} w={900} size={26} color={WHITE2}>The farther AI moves from observing to acting, the more deliberately{"\n"}the Product Manager has to design the boundary.</T>
    <Img src={`${S8}/7149b.png`} x={140} y={137} w={1632} h={918} fit="cover"/><div style={{position:"absolute",left:730,top:587,width:460,height:460,maskImage:`url(${S8}/3dc3f.svg)`,WebkitMaskImage:`url(${S8}/3dc3f.svg)`,maskSize:"460px 460px",WebkitMaskSize:"460px 460px",maskRepeat:"no-repeat",WebkitMaskRepeat:"no-repeat"}}><Img src={`${S8}/59b40.png`} x={0} y={0} w={460} h={460} fit="cover"/></div>
    {stages.map((s,i)=><div key={s[0]}><T x={s[3]} y={s[4]} w={90} size={18} weight={600} color={s[12]?MAGENTA:"#909295"}>{s[0]}</T><T x={s[5]} y={s[6]} w={220} size={25} weight={700} color={s[12]?MAGENTA:WHITE2}>{s[1]}</T><T x={s[7]} y={s[8]} w={235} size={18} color={WHITE2}>{s[2]}</T><Img src={ell[i]} x={s[9]} y={s[10]} w={i===0?73:i===3?75:i===4?74:71} h={i===0?73:i===3?75:i===4?74:71}/><Img src={s[11]} x={s[12] as unknown as number} y={0} w={0} h={0}/></div>)}
    <Img src={`${S8}/91b4d.svg`} x={463} y={654} w={38} h={38}/><Img src={`${S8}/d17aa.svg`} x={687} y={551} w={38} h={38}/><Img src={`${S8}/9244f.svg`} x={940} y={502} w={38} h={38}/><Img src={`${S8}/8b919.svg`} x={1194} y={549} w={38} h={38}/><Img src={`${S8}/97008.svg`} x={1419} y={655} w={38} h={38}/>
    <T x={155} y={694} w={270} size={16} weight={500} color="#909295" tracking={4}>OBSERVATION{"\n"}HUMAN IN THE LOOP</T><B x={390} y={735} w={305} h={2} bg="#73767b"/><T x={1490} y={694} w={300} size={16} weight={500} color="#909295" tracking={4}>DECISION &amp; EXECUTION{"\n"}AI TAKES ACTION</T><B x={1190} y={735} w={540} h={2} bg="#73767b"/>
    <T x={160} y={838} w={250} size={18} weight={600} color={WHITE2} tracking={4}>MORE AUTONOMY</T><B x={406} y={854} w={365} h={2} bg="#73767b"/><T x={775} y={834} w={40} size={30} color={MAGENTA}>→</T><T x={834} y={838} w={300} size={18} weight={600} color={WHITE2} tracking={4}>MORE CONSEQUENCE</T><B x={1118} y={854} w={310} h={2} bg="#73767b"/><T x={1408} y={834} w={40} size={30} color={MAGENTA}>→</T><T x={1471} y={838} w={360} size={18} weight={600} color={WHITE2} tracking={4}>MORE PRODUCT DESIGN</T>
    <B x={65} y={896} w={1794} h={2} bg="#44464a"/><B x={65} y={923} w={4} h={54} bg={MAGENTA}/><T x={100} y={934} w={1680} size={25} weight={700} color={WHITE2}>THE FARTHER RIGHT YOU GO, THE MORE PRODUCT DESIGN HAS TO ACCOUNT FOR THE CONSEQUENCES.</T>
    <B x={0} y={985} w={1920} h={95} bg="#090909"/><T x={67} y={1028} w={470} size={13} weight={500} color="#909295" tracking={5}>AUTHORITY IS A PRODUCT DECISION</T><B x={478} y={1044} w={1319} h={2} bg="#44464a"/><Img src="/pdma2026/slide-02/canonical-asterisk.svg" x={1812} y={1002} w={52} h={52}/>
  </Stage>;
}

const S9="https://www.figma.com/api/mcp/asset/ef254f86-3290-4a16-8451-b996471ad1d1";
export function Slide09(){
  const sources=[
    ["CRM","Customer data",`${S9}/ddd5d.svg`],
    ["PRODUCT USAGE","Behavioral data",`${S9}/cda12.svg`],
    ["SUPPORT","Support tickets",`${S9}/e2600.svg`],
    ["ACCOUNT HEALTH","Billing & health data",`${S9}/defdd.svg`],
  ];
  return <Stage><CanonicalChrome fill={420} labels={["VALUE","SIGNAL","ACTION"]} footer="TURN THE BUSINESS CASE INTO A PRODUCT" />
    <T x={64} y={118} w={650} size={76} weight={800}>LIVE SCENARIO:</T><T x={64} y={192} w={1150} size={76} weight={800} color={MAGENTA}>RETENTION AGENT.</T><T x={67} y={288} w={1680} size={29}>A real enterprise business case: detect churn risk across CRM, product-usage, and support data before it is too late to act.</T>
    <div style={{position:"absolute",left:45,top:360,width:585,height:365,background:"#15181b",border:"1px solid #2d3136",borderRadius:14}}><T x={25} y={23} w={300} size={16} weight={600} color={MAGENTA} line={20}>BUSINESS PROBLEM</T><T x={25} y={69} w={515} size={28} weight={600} line={34}>Customer retention teams spend too{"\n"}much time manually identifying{"\n"}churn risk across fragmented{"\n"}enterprise systems.</T><B x={25} y={225} w={532} h={1} bg={MUTED}/><T x={25} y={247} w={300} size={15} weight={600} color={MUTED} line={18}>PRIMARY VALUE DRIVER</T><T x={25} y={279} w={360} size={26} weight={600} color={MAGENTA} line={30}>INCREASE REVENUE</T><T x={25} y={320} w={390} size={20} weight={600} line={24}>+ STREAMLINE OPERATIONS</T></div>
    {sources.map(([a,b,icon],i)=><div key={a} style={{position:"absolute",left:700,top:360+i*78,width:300,height:64,background:"#1a1c1f",border:"1px solid #2d3136",borderRadius:10}}><B x={13} y={9} w={44} h={44} bg="#240e1d" radius={8}/><Img src={icon} x={20} y={16} w={30} h={30}/><T x={71} y={9} w={190} size={17} weight={600} line={21}>{a}</T><T x={71} y={33} w={190} size={15} color={MUTED} line={18}>{b}</T><Img src={`${S9}/a0c4b.svg`} x={295} y={27} w={10} h={10}/></div>)}
    <Img src={`${S9}/885aa.svg`} x={1000} y={392} w={110} h={133}/><Img src={`${S9}/d98bc.svg`} x={1000} y={470} w={110} h={55}/><Img src={`${S9}/ca18f.svg`} x={1000} y={525} w={110} h={23}/><Img src={`${S9}/394fd.svg`} x={1000} y={525} w={110} h={101}/><Img src={`${S9}/1b2ef.svg`} x={1104} y={519} w={12} h={12}/>
    <div style={{position:"absolute",left:1110,top:400,width:300,height:250,background:"#240e1d",border:`1px solid ${MAGENTA}`,borderRadius:14,boxShadow:"0 0 18px rgba(255,47,174,.18)"}}><Img src={`${S9}/86e75.svg`} x={123} y={17} w={52} h={52}/><T x={91} y={57} w={140} size={24} weight={600} line={28}>IDENTIFY</T><T x={51} y={107} w={200} size={20} line={24}>Detect meaningful{"\n"}churn-risk patterns{"\n"}across enterprise{"\n"}customer data.</T></div>
    <div style={{position:"absolute",left:1530,top:400,width:320,height:250,background:"#1a1c1f",border:`1px solid ${MAGENTA}`,borderRadius:14}}><Img src={`${S9}/563bf.svg`} x={133} y={17} w={52} h={52}/><T x={85} y={57} w={180} size={24} weight={600} line={28}>RECOMMEND</T><T x={47} y={107} w={230} size={20} line={24}>Recommend an approved{"\n"}intervention to the{"\n"}responsible team.</T></div>
    <B x={1410} y={524} w={92} h={3} bg={MAGENTA}/><T x={1484} y={505} size={38} color={MAGENTA}>→</T>
    <T x={930} y={710} w={560} size={15} weight={600} color={MUTED} line={18}>PRODUCT SIGNAL  →  PROBLEM  →  RECOMMENDED INTERVENTION</T><T x={45} y={770} w={230} size={16} weight={600} color={MAGENTA} line={20}>PRODUCT QUESTION</T><B x={298} y={766} w={1} h={36} bg={MUTED}/><T x={330} y={760} w={900} size={29} weight={600} line={36}>How much authority should this agent have?</T><B x={45} y={820} w={1810} h={1} bg={MUTED}/><B x={45} y={895} w={4} h={52} bg={MAGENTA}/><T x={72} y={894} w={1680} size={29} weight={600} line={37}>HOW DO WE TURN THIS BUSINESS CASE INTO A PRODUCTION-READY ENTERPRISE PRODUCT?</T>
  </Stage>;
}

const S10="https://www.figma.com/api/mcp/asset/7cf07793-539e-4b52-975d-d2cdd0a1aedc";
export function Slide10(){
  const cards=[
    [62,"01","GUARDRAILS","What must the product\nprevent or constrain?",`${S10}/0c0c4.svg`,false],
    [442,"02","HUMAN INTERVENTION","When must a person review,\napprove, or take over?",`${S10}/75654.svg`,true],
    [822,"03","SUCCESS MEASURES","What proves the feature\ncreates the intended\noutcome?",`${S10}/27fd2.svg`,false],
  ] as const;
  return <Stage>
    <Img src="/pdma2026/slide-10/0581d3e2-5eaa-4fa2-aa65-7272161757da.png" x={760} y={185} w={1160} h={720} opacity={.92} fit="cover"/><Img src="/pdma2026/slide-10/0fe576ac-b4aa-42eb-9c74-288c239abc05.png" x={1120} y={70} w={800} h={910} fit="cover"/><div style={{position:"absolute",left:0,top:70,width:1220,height:850,background:"linear-gradient(90deg,#090909 0%,rgba(9,9,9,.92) 72%,rgba(9,9,9,.12) 100%)"}}/>
    <B x={0} y={0} w={1920} h={78} bg="#090909"/><T x={52} y={22} w={150} size={18} weight={700} color={WHITE2}>PDMA 2026</T><B x={220} y={40} w={1230} h={1} bg={LINE}/><B x={220} y={39} w={405} h={3} bg={MAGENTA}/><T x={1490} y={23} w={390} size={14} weight={600} color="#939598" tracking={3}>BACKLOG  •  CONTROLS  •  OUTCOMES</T>
    <T x={55} y={110} w={520} size={16} weight={500} color="#939598" tracking={5}>FROM REQUIREMENTS TO REAL IMPACT</T><T x={64} y={118} w={1240} size={58} weight={800} color={WHITE2}>DESIGN PRODUCTION READINESS</T><T x={64} y={184} w={840} size={58} weight={800} color={MAGENTA}>INTO THE FEATURE.</T><T x={67} y={258} w={1120} size={24} color={WHITE2}>Guardrails, human intervention, and success measures belong in the product{"\n"}requirements before development begins.</T>
    {cards.map(([x,n,title,body,icon,active])=><div key={n} style={{position:"absolute",left:x,top:420,width:360,height:250,background:active?"#250c20":"#16191c",border:`1.5px solid ${active?MAGENTA:"#4a4d50"}`,borderRadius:10,opacity:.93}}><T x={308} y={22} w={32} size={16} weight={500} color="#939598" tracking={3}>{n}</T><Img src={icon} x={28} y={24} w={54} h={54}/><T x={34} y={82} w={292} size={23} weight={700} color={active?MAGENTA:WHITE2}>{title}</T><B x={34} y={126} w={52} h={3} bg={MAGENTA}/><T x={34} y={148} w={292} size={19} color={WHITE2}>{body}</T></div>)}
    <T x={60} y={718} w={520} size={17} weight={600} color={MAGENTA} tracking={3}>OPERATIONALIZE IT AS PRODUCT WORK</T><B x={60} y={760} w={1140} h={2} bg="#5d6064"/>
    {[[62,"01","BACKLOG","Capture the requirements."],[392,"02","PRD","Define behavior and\nboundaries."],[690,"03","ACCEPTANCE CRITERIA","Make them testable."],[1010,"04","PRODUCTION","Prove they work."]].map(([x,n,t,d],i)=><div key={String(n)}><T x={Number(x)} y={770} w={40} size={15} weight={500} color="#939598" tracking={3}>{n}</T><T x={Number(x)+50} y={765} w={260} size={19} weight={700} color={i===3?MAGENTA:WHITE2}>{t}</T><T x={Number(x)+50} y={795} w={260} size={15} color={WHITE2}>{d}</T>{i<3&&<T x={Number(x)+285} y={777} size={28} color="#939598">→</T>}</div>)}
    <B x={50} y={870} w={1820} h={90} bg="#120a10" border={`1.5px solid ${MAGENTA}`} radius={8} opacity={.96}/><B x={65} y={890} w={4} h={52} bg={MAGENTA}/><T x={92} y={900} w={1350} size={25} weight={700} color={WHITE2}>IF IT MATTERS IN PRODUCTION, IT BELONGS IN THE PRODUCT DEFINITION.</T><T x={1655} y={894} w={150} size={12} weight={500} color="#939598" tracking={4}>REAL FEATURES.{"\n"}REAL OUTCOMES.</T>
    <B x={0} y={985} w={1920} h={95} bg="#090909"/><T x={28} y={1028} w={560} size={13} weight={500} color="#939598" tracking={5}>PRODUCTION READINESS STARTS IN THE BACKLOG</T><B x={560} y={1044} w={1265} h={2} bg={LINE}/><Img src="/pdma2026/slide-02/canonical-asterisk.svg" x={1840} y={1002} w={52} h={52}/>
  </Stage>;
}
