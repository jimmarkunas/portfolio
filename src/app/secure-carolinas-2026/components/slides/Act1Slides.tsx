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
import { secureCarolinas2026Copy } from '@/content/secure-carolinas-2026/presentationContent';

// ==========================================
// Slide 1 — Title
// ==========================================
export const Slide01Title: React.FC = () => {
  return (
    <div className="sc26-slide-wrapper justify-center py-4">
      <div className="max-w-5xl mx-auto w-full flex flex-col justify-center space-y-6 lg:space-y-8 my-auto">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex items-start justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <img
              src="/images/logo/ujcg-logo-blue.png"
              alt="Jim Markunas logo"
              aria-hidden="true"
              className="h-16 w-16 shrink-0"
            />
          <div className="space-y-1.5 pt-0.5">
            <div className="type-p5 tracking-[0.22em] uppercase text-[#71717A]">
              Secure Carolinas 2026 // Keynote
            </div>
            <div className="h-px w-20 bg-[#E4E4E7]" aria-hidden="true" />
            </div>
          </div>
          <span className="type-p5 text-[#71717A] tracking-[0.2em] uppercase hidden sm:inline">
            {secureCarolinas2026Copy.acts.act2}
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
            {secureCarolinas2026Copy.slides.title.title}
          </h1>
          <p className="sc26-type-h2 text-[#52525B] font-light max-w-3xl">
            {secureCarolinas2026Copy.slides.title.subtitle}
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
          className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#F0F0F2] text-xs text-[#71717A]"
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

        <div className="flex items-center gap-3 pt-2 text-[11px] uppercase tracking-[0.24em] text-[#71717A]">
          <span>{secureCarolinas2026Copy.slides.title.actLabel}</span>
          <span aria-hidden="true">•</span>
          <span>SHIFT IN ATTACK SURFACE</span>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// Slide 2 — Copilots Were Mostly an Information Problem
// ==========================================
export const Slide02Copilots: React.FC = () => {
  const copilotSteps = secureCarolinas2026Copy.slides.copilots.steps;

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel={secureCarolinas2026Copy.acts.act1}
        title={secureCarolinas2026Copy.slides.copilots.title}
        subtitle={secureCarolinas2026Copy.slides.copilots.subtitle}
      />

      <div className="my-auto flex flex-col gap-8">
        <div className="sc26-surface-card px-8 py-10 lg:px-10 lg:py-12">
          <div className="flex items-center justify-between gap-3 lg:gap-5">
            {copilotSteps.map((step, index) => (
              <React.Fragment key={step.label}>
                <div
                  className={`flex min-h-[150px] min-w-0 flex-1 items-center justify-center rounded-2xl border px-4 text-center transition-all lg:min-h-[180px] lg:px-6 ${
                    step.highlight
                      ? 'min-h-[200px] lg:min-h-[260px] border-[#3B71CA] bg-[#EFF6FF] shadow-sm ring-2 ring-[#3B71CA]/20'
                      : 'border-[#E4E4E7] bg-[#F8F8F9]'
                  }`}
                >
                  <span
                    className={`max-w-full break-words text-xl font-semibold leading-tight lg:text-3xl ${
                      step.highlight ? 'text-[#3B71CA]' : 'text-[#18181B]'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {index < copilotSteps.length - 1 && (
                  <ArrowRight className="h-7 w-7 shrink-0 text-[#A1A1AA] lg:h-9 lg:w-9" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="sc26-surface-card-accent flex items-center justify-center px-8 py-7 text-center lg:py-8">
          <p className="flex items-center gap-3 text-2xl font-semibold leading-tight text-[#18181B] lg:text-3xl">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3B71CA] shrink-0 animate-ping" />
            <span>
              <span className="text-[#3B71CA]">{secureCarolinas2026Copy.slides.copilots.calloutLead}</span>{' '}
              remained the execution boundary.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// Slide 3 — Agents Move the Execution Boundary
// ==========================================
export const Slide03Agents: React.FC = () => {
  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel={secureCarolinas2026Copy.acts.act1}
        title={secureCarolinas2026Copy.slides.agents.title}
        subtitle={secureCarolinas2026Copy.slides.agents.subtitle}
      />

      <div className="space-y-8 my-auto">
        <div className="sc26-surface-card p-8 lg:p-10">
          <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 lg:gap-4">
            {secureCarolinas2026Copy.slides.agents.flow.map((step, index) => (
              <React.Fragment key={step.label}>
                <div
                  className={`flex min-h-[180px] min-w-0 items-center justify-center rounded-2xl border px-3 text-center lg:min-h-[220px] lg:px-5 ${
                    step.highlight
                      ? 'border-[#3B71CA] bg-[#EFF6FF] shadow-sm ring-2 ring-[#3B71CA]/20'
                      : 'border-[#E4E4E7] bg-[#F8F8F9]'
                  }`}
                >
                  <span
                    className={`max-w-full break-words text-[1.9rem] font-semibold tracking-[0.05em] leading-none lg:text-[3.1rem] ${
                      step.highlight ? 'text-[#3B71CA]' : 'text-[#18181B]'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {index < secureCarolinas2026Copy.slides.agents.flow.length - 1 && (
                  <ArrowRight className="h-7 w-7 shrink-0 text-[#A1A1AA] lg:h-9 lg:w-9" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="sc26-surface-card p-6 lg:p-8">
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-mono font-bold tracking-[0.22em] text-[#18181B] lg:text-sm">
            {secureCarolinas2026Copy.slides.agents.capabilities.map((item) => (
              <span key={item} className="rounded-full border border-[#E4E4E7] bg-white px-4 py-2">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="sc26-surface-card-accent p-4 lg:p-5 flex items-center justify-center">
          <p className="flex items-center gap-3 text-sm font-semibold leading-tight text-[#18181B] lg:text-base">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3B71CA] shrink-0 animate-ping" />
            <span>
              {secureCarolinas2026Copy.slides.agents.callout}{' '}
              <span className="text-[#3B71CA]">It became an operator.</span>
            </span>
          </p>
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
        actLabel={secureCarolinas2026Copy.acts.act1}
        title={secureCarolinas2026Copy.slides.attackSurface.title}
        subtitle={secureCarolinas2026Copy.slides.attackSurface.subtitle}
        extraBadge={secureCarolinas2026Copy.slides.attackSurface.headerBadge}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto">
        {/* Traditional Column */}
        <div className="lg:col-span-5 sc26-surface-card p-6 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#F0F0F2]">
            <div>
              <span className="sc26-type-mono-tag text-[#71717A] font-semibold block">{secureCarolinas2026Copy.slides.attackSurface.traditionalLabel}</span>
              <h3 className="text-base font-bold text-[#18181B]">{secureCarolinas2026Copy.slides.attackSurface.traditionalHeading}</h3>
            </div>
            <Lock className="w-4 h-4 text-[#71717A]" />
          </div>

          <div className="space-y-2">
            {secureCarolinas2026Copy.slides.attackSurface.traditional.map((item, idx) => (
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
              <span className="sc26-type-mono-tag text-[#3B71CA] font-semibold block">{secureCarolinas2026Copy.slides.attackSurface.agenticLabel}</span>
              <h3 className="text-base font-bold text-[#18181B]">{secureCarolinas2026Copy.slides.attackSurface.agenticHeading}</h3>
            </div>
            <ShieldAlert className="w-5 h-5 text-[#3B71CA]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {secureCarolinas2026Copy.slides.attackSurface.agentic.map((item, idx) => (
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
          <strong className="font-semibold text-[#18181B]">{secureCarolinas2026Copy.slides.attackSurface.coreTakeawayLabel}</strong> {secureCarolinas2026Copy.slides.attackSurface.coreTakeaway}
        </p>
      </div>
    </div>
  );
};
