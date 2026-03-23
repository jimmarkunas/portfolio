import { useState, useRef, useEffect } from "react";

var TIPS = {
  developers: { title: "Developers", body: "Your engineering team builds and maintains integrations across the platform." },
  pwa:  { title: "PWA Storefront", body: "Progressive web app delivering fast, app-like shopping in the browser." },
  cms:  { title: "CMS / DXP", body: "Content management and digital experience platform for editorial and personalization." },
  hc:   { title: "Headless Commerce", body: "Decoupled commerce engine for catalog, cart, checkout, and order management." },
  api:  { title: "API Layer", body: "Central integration hub — REST, GraphQL, and Webhooks." },
  quivers: { title: "Quivers", body: "Unified commerce platform connecting brands and specialty retailers." },
  epicor:  { title: "Epicor", body: "ERP for back-office operations including inventory and distribution." },
  stripe:  { title: "Stripe", body: "Payment infrastructure for transactions, subscriptions, and fraud prevention." },
  pos:  { title: "POS", body: "In-store point-of-sale synced in real time with the commerce platform." },
  web:  { title: "Web App", body: "Fully responsive browser storefront consuming the API layer." },
  mob:  { title: "Mobile App", body: "Native iOS & Android experience with push notifications." },
  dist: { title: "Content Distribution", body: "Device layer — laptops, phones, and tablets." },
  shoppers: { title: "Shoppers", body: "End consumers engaging across all touchpoints." },
};

function Tooltip(props) {
  var tip = props.tip;
  var pos = props.pos;
  var onClose = props.onClose;
  var show = !!tip;
  return (
    <div style={{
      position: "fixed", zIndex: 9999, width: 220,
      pointerEvents: show ? "auto" : "none",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(-4px)",
      transition: "opacity 140ms ease, transform 140ms ease",
      left: pos.x, top: pos.y,
    }}>
      <div style={{ background: "#111", borderRadius: 8, padding: "12px 14px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 5 }}>
          <span style={{ fontSize: 11, fontWeight: 500, color: "#fff" }}>{tip ? tip.title : ""}</span>
          <button
            onPointerDown={function(e) { e.stopPropagation(); onClose(); }}
            style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", fontSize: 12, padding: 2 }}
          >
            x
          </button>
        </div>
        <p style={{ fontSize: 11, lineHeight: 1.6, color: "rgba(255,255,255,0.5)", margin: 0 }}>
          {tip ? tip.body : ""}
        </p>
      </div>
    </div>
  );
}

function ParticleCanvas(props) {
  var paths = props.paths;
  var canvasRef = useRef(null);

  useEffect(function() {
    var c = canvasRef.current;
    if (!c || !paths || paths.length === 0) return;
    var ctx = c.getContext("2d");
    var W = c.offsetWidth;
    var H = c.offsetHeight;
    c.width = W;
    c.height = H;

    var particles = [];
    for (var i = 0; i < paths.length * 3; i++) {
      var pi = i % paths.length;
      particles.push({
        pi: pi,
        t: Math.random(),
        speed: 0.002 + Math.random() * 0.003,
        r: 1.2 + Math.random() * 1.4,
        hist: [],
      });
    }

    function getPoint(path, t) {
      var segs = [];
      var tot = 0;
      for (var i = 0; i < path.length - 1; i++) {
        var dx = path[i + 1].x - path[i].x;
        var dy = path[i + 1].y - path[i].y;
        var l = Math.sqrt(dx * dx + dy * dy);
        segs.push({ l: l, i: i });
        tot += l;
      }
      var tgt = t * tot;
      var acc = 0;
      for (var s = 0; s < segs.length; s++) {
        if (acc + segs[s].l >= tgt) {
          var f = (tgt - acc) / segs[s].l;
          var idx = segs[s].i;
          return {
            x: path[idx].x + f * (path[idx + 1].x - path[idx].x),
            y: path[idx].y + f * (path[idx + 1].y - path[idx].y),
          };
        }
        acc += segs[s].l;
      }
      return path[path.length - 1];
    }

    var animId;
    function draw() {
      ctx.clearRect(0, 0, W, H);

      for (var pi = 0; pi < paths.length; pi++) {
        var path = paths[pi];
        ctx.beginPath();
        ctx.moveTo(path[0].x, path[0].y);
        for (var j = 1; j < path.length; j++) {
          ctx.lineTo(path[j].x, path[j].y);
        }
        ctx.strokeStyle = "rgba(34,34,34,0.07)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      for (var k = 0; k < particles.length; k++) {
        var p = particles[k];
        p.t += p.speed;
        if (p.t > 1) {
          p.t = 0;
          p.pi = Math.floor(Math.random() * paths.length);
          p.hist = [];
        }
        var pt = getPoint(paths[p.pi], p.t);
        p.hist.push({ x: pt.x, y: pt.y });
        if (p.hist.length > 8) p.hist.shift();

        for (var h = 1; h < p.hist.length; h++) {
          ctx.beginPath();
          ctx.arc(p.hist[h].x, p.hist[h].y, p.r * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(68,122,203," + (h / p.hist.length * 0.3) + ")";
          ctx.fill();
        }

        var g = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, p.r * 2.5);
        g.addColorStop(0, "rgba(68,122,203,0.85)");
        g.addColorStop(1, "rgba(68,122,203,0)");
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    draw();
    return function() { cancelAnimationFrame(animId); };
  }, [paths]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
}

function Laptop() {
  return (
    <svg width="60" height="44" viewBox="0 0 90 64" fill="none" style={{ color: "#bbb", flexShrink: 0 }}>
      <rect x="4" y="2" width="82" height="50" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="9" y="7" width="72" height="40" rx="2" stroke="currentColor" strokeWidth="1" />
      <rect x="0" y="52" width="90" height="8" rx="4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Phone() {
  return (
    <svg width="24" height="44" viewBox="0 0 38 64" fill="none" style={{ color: "#bbb", flexShrink: 0 }}>
      <rect x="1" y="1" width="36" height="62" rx="6" stroke="currentColor" strokeWidth="1.5" />
      <rect x="5" y="9" width="28" height="44" rx="2" stroke="currentColor" strokeWidth="1" />
      <circle cx="19" cy="58" r="3" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function Tablet() {
  return (
    <svg width="34" height="44" viewBox="0 0 50 64" fill="none" style={{ color: "#bbb", flexShrink: 0 }}>
      <rect x="1" y="1" width="48" height="62" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="5" y="6" width="40" height="50" rx="2" stroke="currentColor" strokeWidth="1" />
      <circle cx="25" cy="60" r="2.5" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export default function App() {
  var [ak, setAk]     = useState(null);
  var [tp, setTp]     = useState({ x: 0, y: 0 });
  var [pths, setPths] = useState([]);
  var touch = useRef(false);

  var rRoot = useRef(null);
  var rDev  = useRef(null);
  var rHub  = useRef(null);
  var rPwa  = useRef(null);
  var rCms  = useRef(null);
  var rHc   = useRef(null);
  var rPos  = useRef(null);
  var rWeb  = useRef(null);
  var rMob  = useRef(null);
  var rDist = useRef(null);
  var rShop = useRef(null);
  var rT0   = useRef(null);
  var rT1   = useRef(null);
  var rT2   = useRef(null);

  var tileData = [
    { key: "quivers", lbl: "Quivers", lt: "Q", bg: "#1A1A2E", ref: rT0 },
    { key: "epicor",  lbl: "Epicor",  lt: "E", bg: "#0057A8", ref: rT1 },
    { key: "stripe",  lbl: "Stripe",  lt: "S", bg: "#635BFF", ref: rT2 },
  ];

  useEffect(function() {
    function calc() {
      if (!rRoot.current) return;
      var wR = rRoot.current.getBoundingClientRect();
      function g(r) {
        if (!r || !r.current) return null;
        var b = r.current.getBoundingClientRect();
        return {
          t: b.top - wR.top, b: b.bottom - wR.top,
          l: b.left - wR.left, r: b.right - wR.left,
          cx: (b.left + b.right) / 2 - wR.left,
          cy: (b.top + b.bottom) / 2 - wR.top,
        };
      }
      var dev = g(rDev), hub = g(rHub);
      var pwa = g(rPwa), cms = g(rCms), hc = g(rHc);
      var rp  = g(rPos), rw  = g(rWeb), rm = g(rMob);
      var rd  = g(rDist), rs = g(rShop);
      var t0  = g(rT0), t1 = g(rT1), t2 = g(rT2);
      if (!dev || !hub || !pwa) return;

      var p = [];
      p.push([{ x: hub.cx, y: dev.b }, { x: hub.cx, y: hub.t }]);
      if (pwa) p.push([{ x: pwa.r, y: pwa.cy }, { x: hub.l, y: pwa.cy }]);
      if (cms) p.push([{ x: cms.r, y: cms.cy }, { x: hub.l, y: cms.cy }]);
      if (hc)  p.push([{ x: hc.r,  y: hc.cy  }, { x: hub.l, y: hc.cy  }]);
      if (rp)  p.push([{ x: hub.r, y: rp.cy  }, { x: rp.l,  y: rp.cy  }]);
      if (rw)  p.push([{ x: hub.r, y: rw.cy  }, { x: rw.l,  y: rw.cy  }]);
      if (rm)  p.push([{ x: hub.r, y: rm.cy  }, { x: rm.l,  y: rm.cy  }]);
      if (rp && rw) p.push([{ x: rp.cx, y: rp.b }, { x: rp.cx, y: rw.t }]);
      if (rw && rm) p.push([{ x: rw.cx, y: rw.b }, { x: rw.cx, y: rm.t }]);
      if (rm && rd) p.push([{ x: rm.cx, y: rm.b }, { x: rm.cx, y: rd.t }]);
      if (rd && rs) p.push([{ x: rd.cx, y: rd.b }, { x: rd.cx, y: rs.t }]);
      if (hub && rd) p.push([{ x: hub.cx, y: hub.b }, { x: hub.cx, y: rd.t }]);

      var ts = [t0, t1, t2].filter(Boolean);
      if (hc && ts.length) {
        var barY = ts[0].t - 14;
        for (var i = 0; i < ts.length; i++) {
          p.push([
            { x: hc.cx, y: hc.b },
            { x: hc.cx, y: barY },
            { x: ts[i].cx, y: barY },
            { x: ts[i].cx, y: ts[i].t },
          ]);
        }
      }
      setPths(p);
    }
    calc();
    var ro = new ResizeObserver(calc);
    if (rRoot.current) ro.observe(rRoot.current);
    return function() { ro.disconnect(); };
  }, []);

  function gpos(e) {
    var cx = e.touches ? e.touches[0].clientX : e.clientX;
    var cy = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: Math.min(cx - 110, window.innerWidth - 240), y: cy + 14 };
  }

  function hit(key, e) {
    e.stopPropagation();
    if (e.type === "touchstart") touch.current = true;
    if (e.type === "mouseenter" && touch.current) return;
    if (e.type === "click" || e.type === "touchstart") {
      if (ak === key) { setAk(null); return; }
      setTp(gpos(e));
      setAk(key);
    } else if (e.type === "mouseenter") {
      setTp(gpos(e));
      setAk(key);
    }
  }

  function out() { if (!touch.current) setAk(null); }
  function close() { setAk(null); }

  useEffect(function() {
    function d() { setAk(null); }
    document.addEventListener("pointerdown", d);
    return function() { document.removeEventListener("pointerdown", d); };
  }, []);

  function on(key) {
    return {
      onMouseEnter: function(e) { hit(key, e); },
      onMouseLeave: out,
      onClick:      function(e) { hit(key, e); },
      onTouchStart: function(e) { hit(key, e); },
    };
  }

  function cs(key) {
    var a = ak === key;
    return {
      padding: "20px 24px",
      borderRadius: 8,
      cursor: "pointer",
      background: a ? "#f5f5f5" : "transparent",
      borderLeft: a ? "2px solid #222" : "2px solid transparent",
      transition: "all 140ms ease",
    };
  }

  var lbl = {
    fontSize: 10, letterSpacing: "0.16em",
    textTransform: "uppercase", color: "#aaa",
    marginBottom: 32, fontWeight: 400,
  };

  var tip = ak ? TIPS[ak] : null;

  return (
    <div style={{ fontFamily: '"Inter","Inter Display",ui-sans-serif,sans-serif', background: "#fff" }}>
      <Tooltip tip={tip} pos={tp} onClose={close} />
      <div
        ref={rRoot}
        style={{
          maxWidth: 1440, margin: "0 auto",
          padding: "100px 100px 120px",
          position: "relative", overflow: "hidden", background: "#fff",
        }}
      >
        <ParticleCanvas paths={pths} />

        {/* DEVELOPERS */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 72, position: "relative", zIndex: 1 }}>
          <button
            ref={rDev}
            {...on("developers")}
            style={{
              fontFamily: "inherit", fontSize: 11, letterSpacing: "0.16em",
              textTransform: "uppercase", cursor: "pointer",
              padding: "12px 32px", borderRadius: 2,
              border: "1px solid #222",
              background: ak === "developers" ? "#222" : "transparent",
              color: ak === "developers" ? "#fff" : "#222",
              transition: "all 140ms ease",
            }}
          >
            Developers
          </button>
        </div>

        {/* THREE COLUMN GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 260px 1fr", gap: 80, alignItems: "start", position: "relative", zIndex: 1 }}>

          {/* LEFT */}
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div style={{ width: 280 }}>
              <div style={lbl}>Content &amp; Commerce Platforms</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>

                <div ref={rPwa} {...on("pwa")} style={cs("pwa")}>
                  <div style={{ fontSize: 11, color: "#aaa", letterSpacing: "0.06em", marginBottom: 4 }}>01</div>
                  <div style={{ fontSize: 15, color: "#222", fontWeight: 400 }}>PWA Storefront</div>
                </div>

                <div ref={rCms} {...on("cms")} style={cs("cms")}>
                  <div style={{ fontSize: 11, color: "#aaa", letterSpacing: "0.06em", marginBottom: 4 }}>02</div>
                  <div style={{ fontSize: 15, color: "#222", fontWeight: 400 }}>CMS / DXP</div>
                </div>

                <div ref={rHc} {...on("hc")} style={cs("hc")}>
                  <div style={{ fontSize: 11, color: "#aaa", letterSpacing: "0.06em", marginBottom: 4 }}>03</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontSize: 15, color: "#222", fontWeight: 400 }}>Headless Commerce</div>
                    <span style={{ fontSize: 9, letterSpacing: "0.08em", color: "#aaa", textTransform: "uppercase", border: "1px solid #ddd", padding: "2px 6px", borderRadius: 2 }}>B</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* CENTER HUB */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={lbl}>API Layer</div>
            <div
              ref={rHub}
              {...on("api")}
              style={{
                width: "100%", border: "1px solid #e8e8e8", borderRadius: 8,
                padding: "32px 20px 24px", cursor: "pointer",
                position: "relative", marginTop: 4,
                background: ak === "api" ? "#fafafa" : "#fff",
                transition: "background 140ms ease",
                boxShadow: "0 1px 12px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "#fff", border: "1px solid #e8e8e8", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>
                ⚡
              </div>
              <div style={{ fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "#aaa", textAlign: "center", marginBottom: 16 }}>
                API Layer
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                <div style={{ fontSize: 12, color: "#555", textAlign: "center", padding: "8px 0", borderBottom: "1px solid #f0f0f0" }}>REST</div>
                <div style={{ fontSize: 12, color: "#555", textAlign: "center", padding: "8px 0", borderBottom: "1px solid #f0f0f0" }}>GraphQL</div>
                <div style={{ fontSize: 12, color: "#555", textAlign: "center", padding: "8px 0" }}>Webhooks</div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 20, paddingTop: 16, borderTop: "1px solid #f0f0f0" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                  onMouseEnter={function(e) { e.stopPropagation(); hit("quivers", e); }}
                  onMouseLeave={out}
                  onClick={function(e) { e.stopPropagation(); hit("quivers", e); }}
                  onTouchStart={function(e) { e.stopPropagation(); hit("quivers", e); }}>
                  <div ref={rT0} style={{ width: 28, height: 28, borderRadius: 6, background: "#1A1A2E", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 600, color: "#fff", cursor: "pointer" }}>Q</div>
                  <div style={{ fontSize: 7, letterSpacing: "0.08em", textTransform: "uppercase", color: "#bbb", marginTop: 4 }}>Quivers</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                  onMouseEnter={function(e) { e.stopPropagation(); hit("epicor", e); }}
                  onMouseLeave={out}
                  onClick={function(e) { e.stopPropagation(); hit("epicor", e); }}
                  onTouchStart={function(e) { e.stopPropagation(); hit("epicor", e); }}>
                  <div ref={rT1} style={{ width: 28, height: 28, borderRadius: 6, background: "#0057A8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 600, color: "#fff", cursor: "pointer" }}>E</div>
                  <div style={{ fontSize: 7, letterSpacing: "0.08em", textTransform: "uppercase", color: "#bbb", marginTop: 4 }}>Epicor</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                  onMouseEnter={function(e) { e.stopPropagation(); hit("stripe", e); }}
                  onMouseLeave={out}
                  onClick={function(e) { e.stopPropagation(); hit("stripe", e); }}
                  onTouchStart={function(e) { e.stopPropagation(); hit("stripe", e); }}>
                  <div ref={rT2} style={{ width: 28, height: 28, borderRadius: 6, background: "#635BFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 600, color: "#fff", cursor: "pointer" }}>S</div>
                  <div style={{ fontSize: 7, letterSpacing: "0.08em", textTransform: "uppercase", color: "#bbb", marginTop: 4 }}>Stripe</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div style={{ width: 280 }}>
              <div style={lbl}>Multi-Platform Shopping</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>

                <div ref={rPos} {...on("pos")} style={cs("pos")}>
                  <div style={{ fontSize: 11, color: "#aaa", letterSpacing: "0.06em", marginBottom: 4 }}>01</div>
                  <div style={{ fontSize: 15, color: "#222" }}>POS</div>
                  <div style={{ fontSize: 12, color: "#aaa", marginTop: 2 }}>In-store terminal</div>
                </div>

                <div ref={rWeb} {...on("web")} style={cs("web")}>
                  <div style={{ fontSize: 11, color: "#aaa", letterSpacing: "0.06em", marginBottom: 4 }}>02</div>
                  <div style={{ fontSize: 15, color: "#222" }}>Web App</div>
                  <div style={{ fontSize: 12, color: "#aaa", marginTop: 2 }}>Browser storefront</div>
                </div>

                <div ref={rMob} {...on("mob")} style={cs("mob")}>
                  <div style={{ fontSize: 11, color: "#aaa", letterSpacing: "0.06em", marginBottom: 4 }}>03</div>
                  <div style={{ fontSize: 15, color: "#222" }}>Mobile App</div>
                  <div style={{ fontSize: 12, color: "#aaa", marginTop: 2 }}>iOS &amp; Android</div>
                </div>

                <div
                  ref={rDist}
                  {...on("dist")}
                  style={{
                    marginTop: 16, padding: "20px 24px",
                    border: "1px solid #e8e8e8", borderRadius: 8,
                    display: "flex", justifyContent: "space-around", alignItems: "center",
                    cursor: "pointer",
                    background: ak === "dist" ? "#fafafa" : "#fff",
                    transition: "background 140ms ease",
                    boxShadow: "0 1px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  <Laptop />
                  <Phone />
                  <Tablet />
                </div>

                <div style={{ display: "flex", justifyContent: "center", paddingTop: 20 }}>
                  <button
                    ref={rShop}
                    {...on("shoppers")}
                    style={{
                      fontFamily: "inherit", fontSize: 11, letterSpacing: "0.16em",
                      textTransform: "uppercase", cursor: "pointer",
                      padding: "12px 32px", borderRadius: 2, border: "none",
                      background: ak === "shoppers" ? "#2F5EA4" : "#447ACB",
                      color: "#fff", transition: "background 140ms ease",
                    }}
                  >
                    Shoppers
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
