import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ShieldAlert, 
  User, 
  Bot, 
  FileText, 
  CheckCircle2, 
  Zap, 
  Workflow, 
  Database, 
  CreditCard, 
  Mail, 
  Layers, 
  Lock, 
  AlertTriangle,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Fingerprint
} from 'lucide-react';
import { SlideHeader } from '../SlideHeader';

// ==========================================
// Slide 1 — Title
// ==========================================
export const Slide01Title: React.FC = () => {
  return (
    <div className="sc26-slide-wrapper justify-center py-4">
      <div className="max-w-5xl mx-auto w-full flex flex-col justify-center space-y-6 lg:space-y-8 my-auto">
        {/* Top Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex items-center gap-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#E4E4E7] rounded-full text-xs font-medium text-[#3F3F46] tracking-wider uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#3B71CA]" />
            <span className="font-mono text-[11px] font-semibold text-[#18181B]">
              SECURE CAROLINAS 2026 // KEYNOTE
            </span>
          </div>
          <span className="text-xs font-mono text-[#71717A] tracking-wider uppercase hidden sm:inline">
            A.G.E.N.T.S. OPERATING MODEL
          </span>
        </motion.div>

        {/* Main Title Group */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="space-y-3"
        >
          <h1 className="sc26-type-hero max-w-4xl text-[#18181B]">
            Is Your Enterprise Ready to Put AI Into Production?
          </h1>
          <p className="sc26-type-h2 text-[#52525B] font-light max-w-3xl">
            When Agentic AI Becomes an Attack Surface
          </p>
        </motion.div>

        {/* Opening Principle Artifact */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="sc26-surface-card-accent p-6 lg:p-8 relative overflow-hidden"
        >
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#3B71CA] uppercase tracking-wider mb-2.5">
            <Fingerprint className="w-3.5 h-3.5" /> Core Thesis
          </div>
          <blockquote className="text-lg lg:text-2xl text-[#18181B] font-normal leading-relaxed">
            “The dangerous moment isn't when the model gets smarter.{' '}
            <span className="text-[#3B71CA] font-semibold underline decoration-[#3B71CA]/30 decoration-2 underline-offset-4">
              It's when we give it permission to do things.
            </span>”
          </blockquote>
        </motion.div>

        {/* Presenter Footer Dossier */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.22 }}
          className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#F0F0F2] text-xs font-mono text-[#71717A]"
        >
          <div className="flex items-center gap-3">
            <span className="font-semibold text-[#18181B] text-sm">Jim Markunas</span>
            <span className="w-1 h-1 rounded-full bg-[#D4D4D8]" />
            <span>Digital Product & Program Security Leader</span>
          </div>

          <a
            href="https://greatestpmever.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#3B71CA] font-medium hover:underline px-3 py-1 bg-white border border-[#E4E4E7] rounded-full shadow-sm"
          >
            <span>greatestpmever.com</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

// ==========================================
// Slide 2 — Copilots Were Mostly an Information Problem
// ==========================================
export const Slide02Copilots: React.FC = () => {
  const steps = [
    { label: 'User', sub: 'Initiates Prompt', icon: <User className="w-4 h-4 text-[#3F3F46]" /> },
    { label: 'AI Model', sub: 'Generates Draft', icon: <Bot className="w-4 h-4 text-[#3B71CA]" /> },
    { label: 'Recommendation', sub: 'Information Output', icon: <FileText className="w-4 h-4 text-[#71717A]" /> },
    { label: 'Human', sub: 'Execution Boundary', icon: <User className="w-4 h-4 text-[#18181B]" />, highlight: true },
    { label: 'Action', sub: 'Manual Change', icon: <CheckCircle2 className="w-4 h-4 text-[#15803D]" /> },
  ];

  const examples = [
    { num: '01', title: 'Summarize a document', tag: 'Synthesizing internal reports and briefs' },
    { num: '02', title: 'Draft an email', tag: 'Drafting correspondence for user approval' },
    { num: '03', title: 'Answer a question', tag: 'Searching company documentation' },
    { num: '04', title: 'Generate code', tag: 'Assisting engineers in IDE autocompletion' },
    { num: '05', title: 'Recommend next steps', tag: 'Presenting support options to human agents' },
  ];

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel="ACT I — Shift in Attack Surface"
        title="Copilots Were Mostly an Information Problem"
        subtitle="Traditional generative AI mostly produced outputs for humans to evaluate."
        extraBadge="Paradigm 01"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto">
        {/* Left Column: Visual Progression Flow */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
          <div className="sc26-surface-card p-6 space-y-5">
            <div className="flex items-center justify-between pb-2 border-b border-[#F0F0F2]">
              <span className="sc26-type-mono-tag text-[#71717A] font-semibold">
                Traditional Copilot Pipeline
              </span>
              <span className="text-[11px] font-mono text-[#15803D] bg-[#15803D]/10 px-2 py-0.5 rounded">
                Gated Execution
              </span>
            </div>

            {/* Stepped Node Graph */}
            <div className="grid grid-cols-5 gap-2 items-center">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl border flex flex-col items-center text-center space-y-1.5 transition-all ${
                    s.highlight
                      ? 'bg-[#EFF6FF] border-[#3B71CA] shadow-sm ring-2 ring-[#3B71CA]/20'
                      : 'bg-[#F8F8F9] border-[#E4E4E7]'
                  }`}
                >
                  <div className="p-1.5 bg-white rounded-lg border border-[#E4E4E7] shadow-sm">
                    {s.icon}
                  </div>
                  <div className="text-[11px] font-bold text-[#18181B] truncate w-full">
                    {s.label}
                  </div>
                  <div className="text-[9px] font-mono text-[#71717A] truncate w-full">
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3.5 sc26-surface-panel text-xs text-[#52525B] leading-relaxed">
              In the copilot era, models acted purely as advisors. The output risk was naturally bounded because a human employee reviewed, verified, and committed every enterprise action.
            </div>
          </div>

          {/* Anchor Callout */}
          <div className="sc26-surface-card-accent p-4 lg:p-5 flex items-center gap-3.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#3B71CA] shrink-0 animate-ping" />
            <p className="text-sm lg:text-base font-semibold text-[#18181B]">
              <span className="text-[#3B71CA]">The human</span> remained the execution boundary.
            </p>
          </div>
        </div>

        {/* Right Column: Workload Examples */}
        <div className="lg:col-span-6 space-y-2.5">
          <div className="sc26-type-mono-tag text-[#71717A] font-semibold mb-1">
            Common Copilot Workloads
          </div>
          {examples.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * index }}
              className="sc26-surface-card p-3.5 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-md bg-[#F4F4F5] border border-[#E4E4E7] text-[11px] font-mono text-[#3F3F46] flex items-center justify-center font-bold">
                  {item.num}
                </span>
                <div>
                  <div className="text-xs lg:text-sm font-semibold text-[#18181B]">{item.title}</div>
                  <div className="text-[11px] text-[#71717A]">{item.tag}</div>
                </div>
              </div>
              <span className="text-[10px] font-mono font-medium text-[#71717A] px-2 py-0.5 bg-[#F4F4F5] border border-[#E4E4E7] rounded">
                Human Evaluated
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// Slide 3 — Agents Move the Execution Boundary
// ==========================================
export const Slide03Agents: React.FC = () => {
  const pipeline = [
    { name: 'Objective', desc: 'Goal assigned' },
    { name: 'Agent', desc: 'Autonomous Planner' },
    { name: 'Decision', desc: 'Strategy chosen' },
    { name: 'Tools', desc: 'Function Calling' },
    { name: 'Enterprise Systems', desc: 'DB, ERP, APIs' },
    { name: 'Direct Action', desc: 'Real-world impact' },
  ];

  const capabilities = [
    { label: 'Retrieve Data', icon: <Database className="w-4 h-4 text-[#3B71CA]" />, cat: 'Telemetry' },
    { label: 'Decide Strategy', icon: <Bot className="w-4 h-4 text-[#3B71CA]" />, cat: 'Planning' },
    { label: 'Call Tool APIs', icon: <Workflow className="w-4 h-4 text-[#3B71CA]" />, cat: 'Integration' },
    { label: 'Modify DB Records', icon: <Layers className="w-4 h-4 text-[#3B71CA]" />, cat: 'Persistence' },
    { label: 'Contact Customers', icon: <Mail className="w-4 h-4 text-[#3B71CA]" />, cat: 'External' },
    { label: 'Trigger Workflows', icon: <Zap className="w-4 h-4 text-[#3B71CA]" />, cat: 'Automation' },
    { label: 'Spend Money', icon: <CreditCard className="w-4 h-4 text-[#3B71CA]" />, cat: 'Financial' },
    { label: 'Continue Unprompted', icon: <CheckCircle2 className="w-4 h-4 text-[#3B71CA]" />, cat: 'Autonomy' },
  ];

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel="ACT I — Shift in Attack Surface"
        title="Agents Move the Execution Boundary"
        subtitle="Autonomous execution shifts the model from a passive advisor to an active operator."
        extraBadge="Paradigm 02"
      />

      <div className="space-y-5 my-auto">
        {/* Agentic Execution Architecture */}
        <div className="sc26-surface-card p-6 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#F0F0F2]">
            <span className="sc26-type-mono-tag text-[#71717A] font-semibold">
              The Autonomous Execution Pipeline
            </span>
            <span className="text-[11px] font-mono font-medium text-[#B91C1C] px-2.5 py-0.5 bg-[#B91C1C]/10 border border-[#B91C1C]/20 rounded-full">
              ● Human Boundary Removed
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-2.5 items-center">
            {pipeline.map((step, idx) => (
              <div
                key={idx}
                className="p-3 bg-[#F8F8F9] border border-[#E4E4E7] rounded-xl flex flex-col justify-center text-center relative hover:border-[#3B71CA]/40 transition-colors"
              >
                <span className="text-[10px] font-mono font-bold text-[#3B71CA]">0{idx + 1}</span>
                <span className="text-xs font-bold text-[#18181B] mt-0.5">{step.name}</span>
                <span className="text-[10px] text-[#71717A] mt-0.5">{step.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 8 Autonomous Capabilities */}
        <div className="space-y-2.5">
          <div className="sc26-type-mono-tag text-[#71717A] font-semibold">
            Delegated Autonomous Capabilities
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="sc26-surface-card p-3 flex items-center justify-between hover:border-[#3B71CA]/40 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-[#F4F4F5] rounded-lg border border-[#E4E4E7]">{cap.icon}</div>
                  <div>
                    <div className="text-xs font-bold text-[#18181B]">{cap.label}</div>
                    <div className="text-[10px] font-mono text-[#71717A]">{cap.cat}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Anchor Callout */}
        <div className="sc26-surface-card-accent p-4 lg:p-5 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#3B71CA] shrink-0" />
            <p className="text-sm lg:text-base font-semibold text-[#18181B]">
              The model didn't just become another user.{' '}
              <span className="text-[#3B71CA]">It became an operator.</span>
            </p>
          </div>
          <span className="hidden md:inline-block text-[11px] font-mono text-[#71717A] px-3 py-1 bg-white border border-[#E4E4E7] rounded-full">
            Autonomous Authority
          </span>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// Slide 4 — Your Attack Surface Is Now a Business Process
// ==========================================
export const Slide04AttackSurface: React.FC = () => {
  const traditional = [
    { name: 'Endpoints', desc: 'Laptops, mobile devices, hardware assets' },
    { name: 'Networks', desc: 'VPCs, firewalls, routing topologies' },
    { name: 'Applications', desc: 'Monoliths, microservices, frontends' },
    { name: 'Identities', desc: 'SSO, IAM roles, MFA credentials' },
    { name: 'APIs', desc: 'REST, GraphQL, microservice contracts' },
  ];

  const agentic = [
    { name: 'Delegated Authority', desc: 'Autonomous execution without manual sign-off' },
    { name: 'Business Rules', desc: 'Interpreted logic, edge conditions, policies' },
    { name: 'Tool Permissions', desc: 'Database writes, financial transfers, messaging' },
    { name: 'Workflow State', desc: 'Long-running multi-step memory & context' },
    { name: 'External Data', desc: 'Indirect prompt injection & untrusted payloads' },
    { name: 'Escalation Paths', desc: 'Failure handling and human handover points' },
    { name: 'Autonomous Decisions', desc: 'Reasoning loops acting on enterprise state' },
  ];

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel="ACT I — Shift in Attack Surface"
        title="Your Attack Surface Is Now a Business Process"
        subtitle="Security must evolve from perimeter infrastructure defense to governed autonomous execution logic."
        extraBadge="Enterprise Risk"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto">
        {/* Traditional Column */}
        <div className="lg:col-span-5 sc26-surface-card p-6 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#F0F0F2]">
            <div>
              <span className="sc26-type-mono-tag text-[#71717A] font-semibold block">Scope 01</span>
              <h3 className="text-base font-bold text-[#18181B]">Traditional Attack Surface</h3>
            </div>
            <Lock className="w-4 h-4 text-[#71717A]" />
          </div>

          <div className="space-y-2">
            {traditional.map((item, idx) => (
              <div key={idx} className="p-2.5 bg-[#F8F8F9] rounded-xl border border-[#EDEDF0] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#18181B]">{item.name}</span>
                <span className="text-[10px] text-[#71717A]">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Agentic Column */}
        <div className="lg:col-span-7 sc26-surface-card-accent p-6 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#3B71CA]/15">
            <div>
              <span className="sc26-type-mono-tag text-[#3B71CA] font-semibold block">Scope 02 (Expanded)</span>
              <h3 className="text-base font-bold text-[#18181B]">Agentic Attack Surface Adds</h3>
            </div>
            <ShieldAlert className="w-5 h-5 text-[#3B71CA]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {agentic.map((item, idx) => (
              <div key={idx} className="p-2.5 bg-white border border-[#E4E4E7] rounded-xl space-y-0.5 shadow-sm">
                <div className="text-xs font-bold text-[#18181B]">{item.name}</div>
                <div className="text-[10px] text-[#52525B] leading-tight">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Point Banner */}
      <div className="sc26-surface-card p-[18px] flex items-center gap-3.5">
        <div className="p-2 bg-[#F4F4F5] rounded-xl border border-[#E4E4E7]">
          <AlertTriangle className="w-4 h-4 text-[#B45309]" />
        </div>
        <p className="text-xs lg:text-sm text-[#18181B] font-normal leading-relaxed">
          <strong className="font-semibold text-[#18181B]">Core Takeaway:</strong> An agent can operate{' '}
          <span className="underline decoration-[#3B71CA] decoration-2 underline-offset-2 font-medium">
            exactly as designed
          </span>{' '}
          and still create a serious enterprise incident if the operating model is wrong.
        </p>
      </div>
    </div>
  );
};
