import React from 'react';
import { motion } from 'motion/react';
import { 
  PackageCheck, 
  Search, 
  Database, 
  Truck, 
  CreditCard, 
  Bell, 
  AlertTriangle,
  Shield,
  FileText,
  Network,
  ArrowRightLeft,
  Award,
  CheckCircle2,
  Sliders,
  Check,
  AlertCircle
} from 'lucide-react';
import { SlideHeader } from '../SlideHeader';

// ==========================================
// Slide 12 — Meet the Agent (Customer Order Exception Agent)
// ==========================================
export const Slide12MeetAgent: React.FC = () => {
  const capabilities = [
    { label: 'Inspect Order', desc: 'Read order line items, status, payment state', icon: <Search className="w-4 h-4 text-[#3B71CA]" /> },
    { label: 'Check Inventory', desc: 'Query warehouse stocks, distribution ETAs', icon: <Database className="w-4 h-4 text-[#3B71CA]" /> },
    { label: 'Query CRM', desc: 'Review customer profile, lifetime value', icon: <FileText className="w-4 h-4 text-[#3B71CA]" /> },
    { label: 'Change Fulfillment', desc: 'Reroute carrier package, split shipments', icon: <Truck className="w-4 h-4 text-[#3B71CA]" /> },
    { label: 'Issue Credits', desc: 'Trigger refunds or store loyalty credits', icon: <CreditCard className="w-4 h-4 text-[#3B71CA]" /> },
    { label: 'Notify Customers', desc: 'Dispatch automated transactional email/SMS', icon: <Bell className="w-4 h-4 text-[#3B71CA]" /> },
    { label: 'Escalate Cases', desc: 'Route anomalous disputes to tier-2 team', icon: <AlertTriangle className="w-4 h-4 text-[#3B71CA]" /> },
  ];

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel="ACT III — Put a Real Agent Through the Model"
        title="Meet the Agent: Customer Order Exception Agent"
        subtitle="Scenario: An enterprise wants an autonomous AI agent to resolve eCommerce and fulfillment exceptions."
        extraBadge="Dossier & Scope"
      />

      <div className="space-y-5 my-auto">
        {/* Capabilities Panel */}
        <div className="sc26-surface-card p-6 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#F0F0F2]">
            <span className="sc26-type-mono-tag text-[#71717A] font-semibold">
              Agent Tool Registry & Permissions
            </span>
            <span className="text-[10px] font-mono text-[#3B71CA] px-3 py-1 bg-[#EFF6FF] rounded-full font-bold">
              Autonomous Exception Handler
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="p-3 bg-[#F8F8F9] rounded-xl border border-[#EDEDF0] space-y-1 hover:border-[#3B71CA]/40 transition-all">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-white rounded-md border border-[#E4E4E7] shadow-sm">{cap.icon}</div>
                  <span className="text-xs font-bold text-[#18181B]">{cap.label}</span>
                </div>
                <p className="text-[10px] text-[#71717A] leading-tight pt-0.5">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Operational Tension Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="sc26-surface-card p-5 space-y-1.5 border-[#15803D]/20">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-[#15803D] uppercase">
              <Check className="w-3.5 h-3.5" /> Initial Enterprise Perception
            </div>
            <div className="text-sm font-bold text-[#18181B]">“A high-value, obvious use case for an agent.”</div>
            <p className="text-xs text-[#71717A]">
              High volume, repetitive decisions, directly addresses customer wait times and support backlog.
            </p>
          </div>

          <div className="sc26-surface-card-accent p-5 space-y-1.5">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-[#3B71CA] uppercase">
              <AlertCircle className="w-3.5 h-3.5" /> The Governance Test
            </div>
            <div className="text-sm font-bold text-[#18181B]">“Is it actually ready for production?”</div>
            <p className="text-xs text-[#52525B]">
              Let's evaluate this exact agent through all 6 pillars of the A.G.E.N.T.S. framework.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// Slide 13 — Run the Agent Through A.G.E.N.T.S.
// ==========================================
export const Slide13DecisionBoard: React.FC = () => {
  const board = [
    {
      letter: 'A',
      name: 'Authority',
      rule: 'May issue credits ≤ $100. Higher amounts require mandatory human supervisor approval.',
      badge: 'Bounded Caps',
      icon: <Shield className="w-4 h-4 text-[#3B71CA]" />
    },
    {
      letter: 'G',
      name: 'Guardrails',
      rule: 'Cannot override fraud flags, regulated pricing tiers, or restricted SKU policies.',
      badge: 'Hard Policies',
      icon: <AlertTriangle className="w-4 h-4 text-[#3B71CA]" />
    },
    {
      letter: 'E',
      name: 'Evidence',
      rule: 'Every customer lookup, decision path, API payload, approval, and DB change logged.',
      badge: 'Full Telemetry',
      icon: <FileText className="w-4 h-4 text-[#3B71CA]" />
    },
    {
      letter: 'N',
      name: 'Network & Integrations',
      rule: 'Read OMS + inventory. Strictly limited write access to refund credits and case management.',
      badge: 'Least Privilege',
      icon: <Network className="w-4 h-4 text-[#3B71CA]" />
    },
    {
      letter: 'T',
      name: 'Transfer & Escalation',
      rule: 'Conflicting customer records or >$100 impact transfers with structured state & history.',
      badge: 'Zero-Loss Handover',
      icon: <ArrowRightLeft className="w-4 h-4 text-[#3B71CA]" />
    },
    {
      letter: 'S',
      name: 'Success & Accountability',
      rule: 'Operations Lead owns the agent. Evaluated on resolution time, accuracy, and escalations.',
      badge: 'Explicit Owner',
      icon: <Award className="w-4 h-4 text-[#3B71CA]" />
    },
  ];

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel="ACT III — Put a Real Agent Through the Model"
        title="Live Decision Board: Customer Order Exception Agent"
        subtitle="Applying the 6 pillars transforms ambiguous autonomy into bounded, auditable operations."
        extraBadge="Production Board"
      />

      <div className="space-y-5 my-auto">
        {/* 6 Pillars Production Decision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {board.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 * idx }}
              className="sc26-surface-card p-[18px] space-y-2 hover:border-[#3B71CA] transition-colors"
            >
              <div className="flex items-center justify-between pb-1.5 border-b border-[#F0F0F2]">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-[#EFF6FF] text-[#3B71CA] font-mono font-bold text-xs flex items-center justify-center border border-[#3B71CA]/20">
                    {item.letter}
                  </span>
                  <span className="text-xs font-bold text-[#18181B]">{item.name}</span>
                </div>
                <span className="text-[10px] font-mono font-medium text-[#71717A] px-2 py-0.5 bg-[#F4F4F5] rounded border border-[#E4E4E7]">
                  {item.badge}
                </span>
              </div>
              <p className="text-xs text-[#52525B] leading-relaxed font-medium pt-1">
                {item.rule}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Anchor Line Banner */}
        <div className="sc26-surface-card-accent p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#3B71CA]" />
            <p className="text-xs lg:text-sm font-semibold text-[#18181B]">
              Autonomy becomes manageable when the <span className="text-[#3B71CA]">boundaries are explicit</span>.
            </p>
          </div>
          <span className="text-[11px] font-mono text-[#3B71CA] font-bold">
            Operational Blueprint
          </span>
        </div>
      </div>
    </div>
  );
};
