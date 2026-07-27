"use client"

import { useRef, useState, useEffect } from 'react';
import { Building2, Users, UserCheck } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useAdaptiveDiagramMotion } from '@/components/case-study/useAdaptiveDiagramMotion';
import type { LucideIcon } from 'lucide-react';

type NylPoint = { x: number; y: number };
type NylPath = NylPoint[];

type NylSharpParticleCanvasProps = {
  path: NylPath;
  containerRef: React.RefObject<HTMLElement>;
};

type NylParticle = {
  t: number;
  speed: number;
};

const NYL_DOT_COUNT = 6;
const NYL_DOT_SPEED = 0.3125;
const NYL_DOT_RADIUS = 4;
const NYL_DOT_COLOR = 'rgba(68,122,203,1)';

function NylSharpParticleCanvas({
  path,
  containerRef,
}: NylSharpParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<NylParticle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const drawingCanvas: HTMLCanvasElement = canvas;
    const drawingContext: CanvasRenderingContext2D = ctx;

    particlesRef.current = Array.from({ length: NYL_DOT_COUNT }, () => ({
        t: Math.random(),
        speed: (0.001058 + Math.random() * 0.001587) * NYL_DOT_SPEED,
      }));
    let lastFrameTime = 0;

    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    function draw(now: number) {
      const frameDelta = lastFrameTime === 0 ? 1000 / 60 : Math.min(1000 / 15, now - lastFrameTime);
      lastFrameTime = now;
      const frameScale = frameDelta / (1000 / 60);

      drawingContext.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);

      drawingContext.save();
      drawingContext.strokeStyle = 'rgba(34,34,34,0.07)';
      drawingContext.lineWidth = 1;
      drawingContext.beginPath();
      drawingContext.moveTo(path[0].x, path[0].y);
      drawingContext.lineTo(path[1].x, path[1].y);
      drawingContext.stroke();
      drawingContext.restore();

      for (const particle of particlesRef.current) {
        particle.t += particle.speed * frameScale;
        if (particle.t > 1) particle.t = 0;

        const position = {
          x: path[0].x + (path[1].x - path[0].x) * particle.t,
          y: path[0].y + (path[1].y - path[0].y) * particle.t,
        };
        drawingContext.beginPath();
        drawingContext.arc(position.x, position.y, NYL_DOT_RADIUS, 0, Math.PI * 2);
        drawingContext.fillStyle = NYL_DOT_COLOR;
        drawingContext.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, [path, containerRef]);

  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }} />;
}

const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0  },
};
const cardTransition = { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } as const;
const staggerParent = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

type Role = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  pill?: string;
  tinted?: boolean;
};

type Step = {
  id: string;
  title: string;
  status: string;
  active?: boolean;
};

type NylRbacWorkflowProps = {
  variant?: "light" | "dark";
  className?: string;
};

const roles: Role[] = [
  {
    title: 'Back Office',
    subtitle: 'Primary content creators responsible for drafting and initial system entries.',
    icon: Building2,
    pill: 'Create Content',
  },
  {
    title: 'Field Agents',
    subtitle: 'Regional representatives who initiate change requests and localized updates.',
    icon: Users,
    pill: 'Request Changes',
  },
  {
    title: 'Home Office',
    subtitle: 'The ultimate authority for quality assurance and production deployment.',
    icon: UserCheck,
    pill: 'Review & Publish',
  },
];

const steps: Step[] = [
  { id: '01', title: 'Draft', status: 'Creation' },
  { id: '02', title: 'Submit', status: 'Validation' },
  { id: '03', title: 'Review', status: 'QA Analysis' },
  { id: '04', title: 'Decision', status: 'Authorization' },
  { id: '05', title: 'Publish', status: 'Production', active: true },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

function RoleCard({ title, subtitle, icon: Icon, pill, tinted = false }: Role) {
  return (
    <div
      className={cn(
        'flex h-full w-full flex-col items-center border-b border-[var(--page-bg)] px-8 pb-10 pt-5 text-center last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 md:px-10 md:pb-12 md:pt-6',
        tinted ? 'bg-[var(--surface-soft)]' : 'bg-[var(--surface)]'
      )}
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[18px] bg-[var(--page-bg)] text-[var(--ink)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h4 className="type-h6 mb-2 font-bold tracking-tight text-[var(--ink)]">{title}</h4>
      {pill && (
        <span className="type-p5 mb-3 inline-block rounded-full bg-[var(--accent-pill-bg)] px-3 py-1 font-bold uppercase tracking-widest text-[var(--accent)]">
          {pill}
        </span>
      )}
      <p className="type-p4 max-w-[240px] text-[var(--muted)]">{subtitle}</p>
    </div>
  );
}

function FlowNode({ id, title, status, active = false }: Step) {
  return (
    <div className="relative z-10 flex flex-col items-center gap-4">
      <div
        className={cn(
          'type-p2 flex h-20 w-20 items-center justify-center rounded-[24px] font-bold shadow-[0_10px_30px_rgba(34,34,34,0.08)]',
          active
            ? 'bg-[var(--active-step-bg)] text-[var(--active-step-text)]'
            : 'border-2 border-[var(--page-bg)] bg-[var(--surface)] text-[var(--ink)]'
        )}
      >
        {id}
      </div>
      <div className="text-center">
        <p className="type-p4 font-bold text-[var(--ink)]">{title}</p>
        <p className="type-p5 mt-1 font-bold uppercase text-[var(--muted)]">
          {status}
        </p>
      </div>
    </div>
  );
}

function FlowLine() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Path is resolved at paint time by ParticleCanvas via containerRef dimensions.
  // We pass a unit-space path [0%→100%] as pixel coords after mount using a
  // ResizeObserver inside ParticleCanvas itself — so we give nominal coords and
  // let the canvas resize handler correct them. Instead, we measure here.
  const Y = 40; // matches top-10 (2.5rem = 40px) center of nodes

  // We pass a stable ref; ParticleCanvas uses ResizeObserver internally.
  // But paths prop is evaluated once — so we use a state-driven approach.
  const [paths, setPaths] = useState<{ x: number; y: number }[][]>([]);

  useEffect(() => {
    if (!containerRef.current) return;
    const update = () => {
      const el = containerRef.current;
      if (!el) return;
      const w = el.offsetWidth;
      const pad = 40;
      setPaths([[{ x: pad, y: Y }, { x: w - pad, y: Y }]]);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0" style={{ pointerEvents: 'none' }}>
      {/* Static line */}
      <div className="absolute left-10 right-10 bg-[var(--line)]" style={{ top: Y, height: 1 }} />
      {/* Particle dots */}
      {paths.length > 0 && (
        <NylSharpParticleCanvas
          path={paths[0]}
          containerRef={containerRef as React.RefObject<HTMLElement>}
        />
      )}
    </div>
  );
}

export default function NylRbacWorkflow({
  variant = "light",
  className,
}: NylRbacWorkflowProps) {
  const { shouldReduceMotion } = useAdaptiveDiagramMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { once: true, amount: 0.05 });
  const animate = shouldReduceMotion || inView ? 'visible' : 'hidden';
  const isDark = variant === "dark";

  return (
    <div
      ref={rootRef}
      className={cn("w-full overflow-hidden font-sans", isDark ? "bg-transparent" : "bg-white", className)}
      style={{
        ['--ink' as string]: isDark ? '#F3F3F3' : '#222222',
        ['--secondary-dark' as string]: isDark ? '#A7AFB8' : '#4b5154',
        ['--muted' as string]: isDark ? '#A8A8A8' : '#7b7b7b',
        ['--white' as string]: isDark ? '#fefefe' : '#ffffff',
        ['--page-bg' as string]: isDark ? '#34373C' : '#f3f3f3',
        ['--surface' as string]: isDark ? '#232528' : '#ffffff',
        ['--surface-soft' as string]: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(243,243,243,0.55)',
        ['--accent' as string]: '#447ACB',
        ['--accent-pill-bg' as string]: isDark ? 'rgba(68,122,203,0.18)' : '#EEF2FA',
        ['--active-step-bg' as string]: isDark ? '#447ACB' : '#222222',
        ['--active-step-text' as string]: '#ffffff',
        ['--line' as string]: '#959595',
      }}
    >
      <div className="flex flex-col">
        {/* Mobile two-column layout */}
        <div className="flex sm:hidden">
          {/* Left: role rows */}
          <motion.div
            className="flex flex-1 flex-col border-r border-[var(--page-bg)]"
            variants={staggerParent}
            initial="hidden"
            animate={animate}
          >
            {roles.map((role) => (
              <motion.div
                key={role.title}
                className="flex items-center gap-3 border-b border-[var(--page-bg)] px-4 py-4 last:border-b-0"
                variants={shouldReduceMotion ? undefined : cardVariants}
                transition={cardTransition}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[var(--page-bg)] text-[var(--ink)]">
                  <role.icon size={18} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="type-p4 font-bold text-[var(--ink)]">{role.title}</span>
                  {role.pill && (
                    <span className="type-p5 font-bold uppercase tracking-widest text-[#447ACB]">{role.pill}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: flow stepper */}
          <motion.div
            className="flex flex-1 flex-col bg-[var(--surface-soft)] px-4 py-4"
            variants={staggerParent}
            initial="hidden"
            animate={animate}
          >
            <div className="relative flex flex-col">
              <div className="absolute bottom-5 left-5 top-5 w-px bg-[#959595]" />
              {steps.map((step, i) => (
                <motion.div
                  key={step.id}
                  className={cn('relative flex items-center gap-3', i < steps.length - 1 ? 'mb-4' : '')}
                  variants={shouldReduceMotion ? undefined : cardVariants}
                  transition={cardTransition}
                >
                  <div className={cn(
                    'type-p5 relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] font-bold shadow-[0_4px_12px_rgba(34,34,34,0.08)]',
                    step.active ? 'bg-[var(--active-step-bg)] text-[var(--active-step-text)]' : 'bg-[var(--surface)] text-[var(--ink)]'
                  )}>
                    {step.id}
                  </div>
                  <div>
                    <p className="type-p4 font-bold leading-tight text-[var(--ink)]">{step.title}</p>
                    <p className="type-p5 font-bold uppercase text-[var(--muted)]">{step.status}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Desktop role grid */}
        <motion.div
          className="hidden sm:grid sm:grid-cols-3"
          variants={staggerParent}
          initial="hidden"
          animate={animate}
        >
          {roles.map((role) => (
            <motion.div key={role.title} variants={shouldReduceMotion ? undefined : cardVariants} transition={cardTransition}>
              <RoleCard {...role} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="relative hidden flex-col overflow-hidden bg-[var(--surface-soft)] px-8 pb-8 pt-8 md:pb-12 md:pt-12 sm:flex"
          variants={cardVariants}
          initial="hidden"
          animate={animate}
          transition={{ ...cardTransition, delay: 0.3 }}
        >
          <div className="mb-8 flex items-center gap-3 md:mb-12">
            <div className="h-6 w-1.5 rounded-full bg-[var(--ink)]" />
            <h3 className="type-p4 font-bold uppercase text-[var(--ink)]">
              System Architecture Flow
            </h3>
          </div>

          {/* Desktop flow row */}
          <motion.div
            className="relative hidden items-start justify-between sm:flex"
            variants={staggerParent}
            initial="hidden"
            animate={animate}
          >
            <FlowLine />
            {steps.map((step) => (
              <motion.div key={step.id} variants={shouldReduceMotion ? undefined : cardVariants} transition={cardTransition}>
                <FlowNode {...step} />
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile stepper — hidden, replaced by two-col layout above */}
          <motion.div
            className="relative hidden flex-col sm:hidden"
            variants={staggerParent}
            initial="hidden"
            animate={animate}
          >
            {/* Vertical connecting line */}
            <div className="absolute bottom-6 left-6 top-6 w-px bg-[var(--line)]" style={{ transform: 'translateX(-0.5px)' }} />
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                className={cn('relative flex items-center gap-4', i < steps.length - 1 ? 'mb-5' : '')}
                variants={shouldReduceMotion ? undefined : cardVariants}
                transition={cardTransition}
              >
                <div className={cn(
                  'type-p3 relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] font-bold shadow-[0_4px_16px_rgba(34,34,34,0.08)]',
                  step.active ? 'bg-[var(--active-step-bg)] text-[var(--active-step-text)]' : 'border-2 border-[var(--page-bg)] bg-[var(--surface)] text-[var(--ink)]'
                )}>
                  {step.id}
                </div>
                <div>
                  <p className="type-p3 font-bold text-[var(--ink)]">{step.title}</p>
                  <p className="type-p5 font-bold uppercase text-[var(--muted)]">{step.status}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
