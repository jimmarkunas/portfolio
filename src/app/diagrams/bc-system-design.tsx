import { useState, useEffect } from "react";

const uxFeatures = [
  { label: "Personalization", tip: "Deliver tailored experiences to each shopper based on behavior, preferences, and purchase history." },
  { label: "Advanced Merchandising", tip: "Control product sorting, placement, and promotional logic to maximize conversion and AOV." },
  { label: "User Generated Content", tip: "Incorporate reviews, ratings, and community content to build trust and drive engagement." },
  { label: "Behavior Based Promotions", tip: "Trigger dynamic discounts and offers based on real-time shopper actions and segments." },
  { label: "Front-end Coding/Scripting", tip: "Extend and customize the storefront with custom JavaScript, CSS, and UI components." },
  { label: "Pixel Tracking", tip: "Capture granular event data for ad retargeting, analytics, and conversion attribution." },
];

const coreModules = [
  { label: "Omnichannel", tip: "Unify commerce across web, mobile, in-store, and social channels for a seamless customer journey." },
  { label: "Marketing Promotions", tip: "Manage coupons, discounts, loyalty programs, and campaign-level promotional rules." },
  { label: "Product Catalog & Content", tip: "Centralize product data, rich media, descriptions, and categorization across all channels." },
  { label: "Orders", tip: "Handle order lifecycle from placement through fulfillment, returns, and post-purchase workflows." },
  { label: "Cart / Checkout", tip: "Optimize the path to purchase with flexible cart logic, shipping options, and payment methods." },
  { label: "Customer Data", tip: "Store and activate unified customer profiles, purchase history, and segmentation data." },
];

const integrations = [
  { label: "ERP", tip: "Sync financials, inventory, and operations with your Enterprise Resource Planning system." },
  { label: "OMS", tip: "Coordinate order routing, fulfillment, and inventory allocation via your Order Management System." },
  { label: "PIM", tip: "Push enriched product data from your Product Information Management system to all channels." },
  { label: "CRM", tip: "Bi-directionally sync customer records and interactions with your CRM platform." },
  { label: "CMS", tip: "Pull content, pages, and assets from your Content Management System into the storefront." },
  { label: "POS", tip: "Connect in-store Point of Sale systems for unified inventory and customer data." },
];

const layerTips = {
  storefront: "The presentation layer renders the customer-facing UI, consuming APIs and CMS content to build fast, flexible storefronts.",
  reporting: "Aggregates data across all modules to provide real-time dashboards, KPIs, and actionable business insights.",
  api: "A bidirectional REST API layer that connects the commerce platform to all downstream systems in real time.",
};

function useAnimate(delay = 0) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, []);
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(18px)",
    transition: "opacity 0.45s ease, transform 0.45s ease",
  };
}

// Tooltip rendered via a fixed portal-like div at root level
let setGlobalTooltip = null;

function HoverCard({ children, className, tip }) {
  const [hovered, setHovered] = useState(false);

  const handleEnter = (e) => {
    setHovered(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setGlobalTooltip?.({
      text: tip,
      x: rect.left + rect.width / 2,
      y: rect.top - 12,
    });
  };

  const handleLeave = () => {
    setHovered(false);
    setGlobalTooltip?.(null);
  };

  return (
    <div
      className={className}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        transform: hovered ? "scale(1.04)" : "scale(1)",
        transition: "transform 0.18s ease, box-shadow 0.18s ease",
        boxShadow: hovered ? "0 6px 20px rgba(59,130,246,0.22)" : undefined,
        cursor: "default",
      }}
    >
      {children}
    </div>
  );
}

function GlobalTooltip({ tooltip }) {
  if (!tooltip) return null;
  const { text, x, y } = tooltip;
  return (
    <div
      style={{
        position: "fixed",
        left: x,
        top: y,
        transform: "translate(-50%, -100%)",
        zIndex: 99999,
        maxWidth: 240,
        pointerEvents: "none",
      }}
      className="bg-gray-900 text-white text-xs rounded-xl px-4 py-3 shadow-2xl leading-relaxed"
    >
      {text}
      <div style={{
        position: "absolute",
        bottom: -6,
        left: "50%",
        transform: "translateX(-50%)",
        borderLeft: "6px solid transparent",
        borderRight: "6px solid transparent",
        borderTop: "6px solid #111827",
      }} />
    </div>
  );
}

export default function App() {
  const [tooltip, setTooltip] = useState(null);
  setGlobalTooltip = setTooltip;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 font-sans">
      <GlobalTooltip tooltip={tooltip} />
      <div className="flex flex-col gap-4" style={{ width: "1440px" }}>

        {/* CONTAINED BOX */}
        <div className="bg-gray-100 rounded-2xl p-6 flex flex-col gap-4">

          {/* UX Features */}
          <div style={useAnimate(0)}>
            <p className="text-xs font-bold tracking-widest text-gray-500 uppercase text-center mb-3">User Experience</p>
            <div className="flex justify-center mb-3">
              <div className="w-10 h-10 rounded-full border-2 border-blue-400 flex items-center justify-center bg-white shadow">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                </svg>
              </div>
            </div>
            <div className="relative w-full" style={{ height: 48 }}>
              <svg width="100%" height="48" preserveAspectRatio="none">
                <line x1="8.33%" y1="2" x2="91.67%" y2="2" stroke="#9ca3af" strokeWidth="1.5"/>
                {[8.33, 25, 41.67, 58.33, 75, 91.67].map((x, i) => (
                  <g key={i}>
                    <line x1={`${x}%`} y1="2" x2={`${x}%`} y2="48" stroke="#9ca3af" strokeWidth="1.5"/>
                    <circle cx={`${x}%`} cy="46" r="3" fill="#9ca3af"/>
                  </g>
                ))}
              </svg>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {uxFeatures.map((f, i) => (
                <HoverCard key={f.label} tip={f.tip} className="bg-white border border-gray-200 rounded-lg px-2 py-6 text-xs text-center text-gray-700 font-medium shadow-sm leading-snug">
                  {f.label}
                </HoverCard>
              ))}
            </div>
          </div>

          {/* Storefront */}
          <div style={useAnimate(380)}>
            <HoverCard tip={layerTips.storefront} className="bg-indigo-100 border border-indigo-200 rounded-xl px-6 py-8 text-center shadow-sm">
              <p className="text-sm font-bold tracking-widest text-indigo-700 uppercase">Storefront Design</p>
              <p className="text-xs text-indigo-500 tracking-widest uppercase mt-0.5">(Presentation Layer)</p>
            </HoverCard>
          </div>

          {/* Reporting */}
          <div style={useAnimate(460)}>
            <HoverCard tip={layerTips.reporting} className="bg-gray-200 border border-gray-300 rounded-xl px-6 py-8 text-center shadow-sm">
              <p className="text-sm font-bold tracking-widest text-gray-600 uppercase">Reporting & Analytics</p>
            </HoverCard>
          </div>

          {/* Core Modules */}
          <div className="grid grid-cols-6 gap-2">
            {coreModules.map((m, i) => (
              <HoverCard key={m.label} tip={m.tip} className="bg-blue-400 rounded-xl px-2 py-10 text-center text-white text-xs font-semibold leading-snug shadow">
                <div style={useAnimate(520 + i * 60)}>{m.label}</div>
              </HoverCard>
            ))}
          </div>

        </div>

        {/* API Layer */}
        <div style={useAnimate(820)}>
          <HoverCard tip={layerTips.api} className="bg-blue-600 rounded-xl px-6 py-8 text-center shadow">
            <p className="text-sm font-bold tracking-widest text-white uppercase">2-Way REST API Layer</p>
          </HoverCard>
        </div>

        {/* Arrows */}
        <div className="grid grid-cols-6 gap-2 -my-1">
          {integrations.map((_, i) => (
            <div key={i} className="flex justify-center gap-2 text-gray-400 text-xs">
              <span>↑</span><span>↓</span>
            </div>
          ))}
        </div>

        {/* Integrations */}
        <div className="grid grid-cols-6 gap-2">
          {integrations.map((s, i) => (
            <HoverCard key={s.label} tip={s.tip} className="bg-white border border-gray-200 rounded-xl py-10 text-center text-sm font-bold text-gray-700 shadow-sm">
              <div style={useAnimate(880 + i * 50)}>{s.label}</div>
            </HoverCard>
          ))}
        </div>

      </div>
    </div>
  );
}
