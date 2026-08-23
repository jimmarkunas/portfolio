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
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#447ACB] uppercase tracking-wider mb-2.5">
            <Fingerprint className="w-3.5 h-3.5" /> Core Thesis
          </div>
          <blockquote className="text-lg lg:text-2xl text-[#18181B] font-normal leading-relaxed">
            “The dangerous moment isn't when the model gets smarter.{' '}
            <span className="text-[#447ACB] font-semibold underline decoration-[#447ACB]/30 decoration-2 underline-offset-4">
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
            className="inline-flex items-center gap-1 text-[#447ACB] font-medium hover:underline px-3 py-1 bg-white border border-[#E4E4E7] rounded-full shadow-sm"
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

const executionFlowCardClass = (highlight: boolean) =>
  `flex min-w-0 flex-1 items-center justify-center rounded-2xl border px-4 text-center transition-all lg:px-6 ${
    highlight
      ? 'min-h-[210px] lg:min-h-[260px] border-[#447ACB] bg-[#EFF6FF] shadow-sm ring-2 ring-[#447ACB]/20'
      : 'min-h-[180px] lg:min-h-[220px] border-[#E4E4E7] bg-[#F8F8F9]'
  }`;

const executionFlowLabelClass = (highlight: boolean) =>
  `max-w-full break-words text-xl font-semibold leading-tight lg:text-3xl ${
    highlight ? 'text-[#447ACB]' : 'text-[#18181B]'
  }`;

const executionArrowClass = 'h-7 w-7 shrink-0 text-[#A1A1AA] lg:h-9 lg:w-9';
const executionCalloutClass = 'sc26-surface-card-accent flex items-center justify-center px-8 py-7 text-center lg:py-8';
const executionCalloutTextClass = 'flex items-center gap-3 text-2xl font-semibold leading-tight text-[#18181B] lg:text-3xl';

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
                <div className={executionFlowCardClass(step.highlight)}>
                  <span className={executionFlowLabelClass(step.highlight)}>
                    {step.label}
                  </span>
                </div>
                {index < copilotSteps.length - 1 && (
                  <ArrowRight className={executionArrowClass} aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className={executionCalloutClass}>
          <p className={executionCalloutTextClass}>
            <span className="w-2.5 h-2.5 rounded-full bg-[#447ACB] shrink-0 animate-ping" />
            <span>
              <span className="text-[#447ACB]">{secureCarolinas2026Copy.slides.copilots.calloutLead}</span>{' '}
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
  const agentSteps = secureCarolinas2026Copy.slides.agents.flow;

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel={secureCarolinas2026Copy.acts.act1}
        title={secureCarolinas2026Copy.slides.agents.title}
        subtitle={secureCarolinas2026Copy.slides.agents.subtitle}
      />

      <div className="my-auto flex flex-col gap-8">
        <div className="sc26-surface-card px-8 py-10 lg:px-10 lg:py-12">
          <div className="flex items-center justify-between gap-3 lg:gap-5">
            {agentSteps.map((step, index) => (
              <React.Fragment key={step.label}>
                <div className={executionFlowCardClass(step.highlight)}>
                  <span className={executionFlowLabelClass(step.highlight)}>
                    {step.label}
                  </span>
                </div>
                {index < agentSteps.length - 1 && (
                  <ArrowRight className={executionArrowClass} aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className={executionCalloutClass}>
          <p className={executionCalloutTextClass}>
            <span className="w-2.5 h-2.5 rounded-full bg-[#447ACB] shrink-0 animate-ping" />
            <span>
              {secureCarolinas2026Copy.slides.agents.callout}{' '}
              <span className="text-[#447ACB]">It became an operator.</span>
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
  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel={secureCarolinas2026Copy.acts.act1}
        title={secureCarolinas2026Copy.slides.attackSurface.title}
        subtitle={secureCarolinas2026Copy.slides.attackSurface.subtitle}
      />

      <div className="my-auto space-y-2.5 lg:space-y-3">
        <div className="sc26-surface-card p-3 lg:p-4">
          <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#BFD3FF] bg-[#EFF6FF] px-4 py-3.5 text-center lg:px-5 lg:py-4">
              <div className="text-[1.55rem] font-semibold tracking-[0.01em] text-[#447ACB] lg:text-[1.85rem]">
                {secureCarolinas2026Copy.slides.attackSurface.traditionalLabel}
              </div>
            </div>
            {secureCarolinas2026Copy.slides.attackSurface.traditional.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-[#E4E4E7] bg-[#F8F8F9] px-4 py-3.5 text-center lg:px-5 lg:py-4"
              >
                <div className="text-[1.55rem] font-semibold tracking-[0.01em] text-[#18181B] lg:text-[1.85rem]">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center py-0.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E4E4E7] bg-white text-xl font-semibold text-[#447ACB] lg:h-12 lg:w-12 lg:text-3xl">
            {secureCarolinas2026Copy.slides.attackSurface.plusLabel}
          </div>
        </div>

        <div className="sc26-surface-card-accent p-3 lg:p-4">
          <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
            {secureCarolinas2026Copy.slides.attackSurface.agentic.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-[#BFD3FF] bg-white px-4 py-3.5 text-center lg:px-5 lg:py-4"
              >
                <div className="text-[1.55rem] font-semibold tracking-[0.01em] text-[#18181B] lg:text-[1.85rem]">
                  {item.name}
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-[#BFD3FF] bg-[#EFF6FF] px-4 py-3.5 text-center lg:px-5 lg:py-4">
              <div className="text-[1.55rem] font-semibold tracking-[0.01em] text-[#447ACB] lg:text-[1.85rem]">
                {secureCarolinas2026Copy.slides.attackSurface.agenticLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
