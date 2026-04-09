// @ts-nocheck
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { slideContent } from './content';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3,
  Users,
  CheckCircle2,
  ArrowRight,
  Notebook,
  FileText,
  Monitor,
  Award,
  Briefcase,
  Layers,
  Activity,
  AlertTriangle,
  Target,
  Clock,
  Code,
  Database,
  Layout,
  Server,
  Cpu,
  Workflow,
  Mail,
  Linkedin,
  X
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Layers, Server, Database, Cpu, Shield, Zap, Target, Users, Globe
};
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { cn } from './lib/utils';
import { 
  StatBar, 
  PhaseCarousel, 
  ClientQuote, 
  BeforeAfter, 
  ArchitectureDiagram,
  TreeDiagram,
  DataFlowDiagram,
  DecisionSimulation,
  DataSilosDiagram,
  ReleaseBoundaryDiagram,
  InteractiveDeliveryModel,
  RiskHeatmap,
  PriorityMatrix,
  DeliveryProcessDiagram
} from './components/PresentationComponents';

// --- Data ---
const chartData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
  { name: 'Jul', value: 1100 },
];

// --- Components ---

const SlideContainer = ({ children, className, title, subhead }: { children: React.ReactNode; className?: string; title?: string; subhead?: string }) => (
  <div className={cn("w-full h-full flex flex-col pt-4 pb-12 px-12 relative overflow-hidden bg-white", className)}>
    <img 
      src="/interviews/ujcg-logo-blk-01.svg" 
      alt="Global Logo" 
      className="absolute top-6 right-8 h-10 w-auto object-contain opacity-80 z-50 pointer-events-none" 
    />
    {(title || subhead) && (
      <div className="mb-8">
        {title && <h2 className="text-4xl font-extrabold text-text-main tracking-tight mb-2 truncate pr-32">{title}</h2>}
        {subhead && <p className="text-text-muted text-lg font-medium">{subhead}</p>}
      </div>
    )}
    {children}
  </div>
);

// --- Slide 01: Intro ---
const IntroSlide = ({ slideKey = 'slide01' }: { slideKey?: string }) => {
  const data = slideContent[slideKey as keyof typeof slideContent] as any;
  return (
  <SlideContainer className="bg-gradient-to-br from-white via-bg-light to-accent/5 px-12 !pt-6 pb-12">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full flex flex-col text-left"
    >
      <div className="flex flex-col mb-12">
        <h2 className="text-4xl font-extrabold text-text-main tracking-tight mb-2">
          {data.name}
        </h2>
        <p className="text-text-muted text-lg font-medium">
          {data.subtitle}
        </p>
      </div>
      

      <div className="w-full text-center text-sm font-semibold text-ink tracking-widest mb-4 pt-[60px]">
        {data.eyebrow}
      </div>

      <div className="w-full overflow-hidden relative py-6 border-y border-border-light mb-12">
        <div className="flex gap-12 items-center justify-center transition-all duration-500">
          {data.logos?.map((logo: string, i: number) => (
            <img key={i} src={logo} alt="Client Logo" className="h-6 w-auto object-contain" />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8 w-full mt-auto">
        {data.stats.map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-finox border border-border-light card-shadow flex flex-col justify-center items-center text-center aspect-square">
            <div className="text-5xl font-extrabold text-ink mb-2">{stat.value}</div>
            <div className="text-sm font-bold text-text-muted tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  </SlideContainer>
)};

// --- Slide 02: PM Formula ---
const FormulaSlide = () => {
  const data = slideContent.slide02;
  return (
  <SlideContainer title={data.title} subhead={data.subhead}>
    <div className="grid grid-cols-2 gap-6 flex-1">
      {data.quads.map((quad, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white border border-border-light p-8 rounded-finox card-shadow flex flex-col group hover:border-accent/30 transition-all"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold", quad.color)}>
              {quad.title.split(' ')[0]}
            </div>
            <h3 className="text-xl font-extrabold text-text-main">{quad.title.split(' ').slice(1).join(' ')}</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {quad.skills.map((skill, j) => (
              <div key={j} className="flex items-center gap-2 text-sm font-bold text-text-muted">
                <div className="w-1.5 h-1.5 rounded-full bg-accent/30" />
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SlideContainer>
)};



// --- Slide 03: Credentials ---
const CredentialsSlide = () => (
  <SlideContainer title={slideContent.slide03.title} subhead={slideContent.slide03.subhead}>
    <div className="flex flex-row gap-10 flex-1 min-h-0 overflow-hidden">
      {/* Left Column: PMP Score Card */}
      <div className="flex-1 bg-white border border-border-light p-8 rounded-finox card-shadow flex flex-col min-h-0">
        <div className="flex items-center gap-3 mb-8 shrink-0">
          <Award className="text-accent w-8 h-8" />
          <h3 className="text-2xl font-extrabold text-text-main">PMP Score Card</h3>
        </div>
        <div className="flex-1 flex flex-col justify-start items-start overflow-hidden rounded-xl border border-border-light bg-bg-light/30 p-2 min-h-0">
           <img 
              src="/interviews/slide-03/pmi-score.png" 
              alt="PMI Score Card" 
              className="w-full h-auto object-contain scale-[1.05]" 
           />
        </div>
      </div>
      
      {/* Right Column: Metrics & Awards */}
      <div className="flex-1 flex flex-col gap-6 min-h-0 overflow-hidden">
        {/* Top: Metrics Card */}
        <div className="rounded-2xl overflow-hidden border border-border-light shadow-lg bg-white p-6 flex-[1.2] flex flex-col min-h-0">
          <div className="text-[10px] font-black text-accent tracking-widest mb-3 shrink-0">{slideContent.slide03.metricsTitle}</div>
          <div className="flex-1 flex items-center justify-center min-h-0 bg-bg-light/30 rounded-xl overflow-hidden p-4">
            <img 
              src="/interviews/slide-03/bc-metrics.png" 
              alt="Metrics" 
              className="max-w-full max-h-full object-contain rounded-lg" 
            />
          </div>
        </div>
        
        {/* Bottom: Awards List */}
        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar min-h-0">
          <div className="space-y-3">
            {slideContent.slide03.awards.map((award, i: number) => (
              <motion.div 
                key={award.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 bg-white border border-border-light rounded-xl flex items-center gap-3 card-shadow hover:border-accent/30 transition-all group shrink-0"
              >
                <div className="w-10 h-10 bg-bg-light border border-border-light rounded-lg flex items-center justify-center font-bold text-xs text-text-muted group-hover:bg-accent group-hover:text-white transition-all shrink-0">
                  {award.id}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-text-main text-sm truncate">{award.title}</div>
                  <div className="text-[10px] text-text-muted truncate leading-tight">{award.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SlideContainer>
);

// --- Slide 04: Enterprise Agile ---
const AgileSlide = () => (
  <SlideContainer title={slideContent.slide04.title} subhead={slideContent.slide04.subhead}>
    <DeliveryProcessDiagram />
  </SlideContainer>
);

// --- Slide 05: Delivery Model ---
const DeliveryModelSlide = () => (
  <SlideContainer title={slideContent.slide05.title} subhead={slideContent.slide05.subhead}>
    <div className="flex-1 flex flex-col justify-center">
      <InteractiveDeliveryModel phases={slideContent.slide05.phases} />
      <div className="mt-12 p-6 bg-bg-light border border-border-light rounded-finox text-center">
        <p className="text-sm text-text-muted">{slideContent.slide05.footerInfo}</p>
      </div>
    </div>
  </SlideContainer>
);

// --- Slide 06: Jira Structure ---
const JiraSlide = () => (
  <SlideContainer title={slideContent.slide06.title} subhead={slideContent.slide06.subhead}>
    <div className="flex-1 flex flex-col justify-center">
      <TreeDiagram data={slideContent.slide06.treeData} />
      <div className="grid grid-cols-3 gap-4 mt-12">
        {slideContent.slide06.definitions.map((def, i) => (
          <div key={i} className="p-4 bg-white border border-border-light rounded-finox">
            <div className="font-bold text-text-main text-xs mb-1">{def.title}</div>
            <p className="text-[10px] text-text-muted">{def.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideContainer>
);

// --- Slide 07: Risk Management ---
const RiskSlide = () => (
  <SlideContainer title={slideContent.slide07.title} subhead={slideContent.slide07.subhead}>
    <div className="flex-1 flex gap-12 items-center">
      <div className="w-1/2">
        <RiskHeatmap />
      </div>
      <div className="w-1/2 space-y-6">
        <div className="p-6 bg-white border border-border-light rounded-finox card-shadow">
          <h4 className="font-bold text-text-main mb-4">{slideContent.slide07.registerText.title}</h4>
          <p className="text-sm text-text-muted leading-relaxed">
            {slideContent.slide07.registerText.desc}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {slideContent.slide07.categories.map((cat, i) => (
            <div key={i} className={cn("p-4 rounded-finox border", cat.title === 'Critical' ? "bg-red-50 border-red-100" : "bg-green-50 border-green-100")}>
              <div className={cn("text-[10px] font-black mb-1", cat.title === 'Critical' ? "text-red-500" : "text-green-500")}>{cat.title}</div>
              <div className={cn("text-xs font-bold", cat.title === 'Critical' ? "text-red-700" : "text-green-700")}>{cat.action}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideContainer>
);

// --- Slide 08: Managing Priorities ---
const PrioritiesSlide = () => (
  <SlideContainer title={slideContent.slide08.title} subhead={slideContent.slide08.subhead}>
    <div className="flex-1 flex flex-col justify-center">
      <PriorityMatrix />
      <div className="mt-8 p-6 bg-bg-light border border-border-light rounded-finox text-center">
        <p className="text-sm text-text-muted">{slideContent.slide08.footerInfo}</p>
      </div>
    </div>
  </SlideContainer>
);

// --- Slide 09: Status Reporting ---
const StatusSlide = () => (
  <SlideContainer title={slideContent.slide09.title} subhead={slideContent.slide09.subhead}>
    <div className="flex-1 flex gap-8">
      <div className="w-2/3 bg-white border border-border-light rounded-finox-lg shadow-2xl overflow-hidden flex flex-col">
        <div className="bg-ink p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center text-white font-bold text-xs">AD</div>
            <div className="text-white font-bold text-sm">{slideContent.slide09.report.programName}</div>
          </div>
          <div className="px-3 py-1 bg-green-500/20 text-green-400 text-[10px] font-black tracking-widest rounded border border-green-500/30">{slideContent.slide09.report.status}</div>
        </div>
        <div className="p-6 grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h5 className="text-[10px] font-black text-text-muted tracking-widest mb-2">Key Accomplishments</h5>
              <div className="space-y-2">
                {slideContent.slide09.report.accomplishments.map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-text-main font-bold">
                    <CheckCircle2 className="w-3 h-3 text-green-500" /> {t}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-[10px] font-black text-text-muted tracking-widest mb-2">In-Progress</h5>
              <div className="space-y-2">
                {slideContent.slide09.report.inProgress.map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-text-main font-bold">
                    <Clock className="w-3 h-3 text-accent" /> {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h5 className="text-[10px] font-black text-text-muted tracking-widest mb-2">Upcoming Milestones</h5>
              <div className="space-y-2">
                {slideContent.slide09.report.upcoming.map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-text-muted font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-border-light" /> {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 bg-red-50 rounded-lg border border-red-100">
              <h5 className="text-[10px] font-black text-red-500 tracking-widest mb-2">Blockers / Risks</h5>
              <div className="text-[10px] text-red-700 font-bold leading-tight">
                {slideContent.slide09.report.blockers}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 flex flex-col justify-center gap-6">
        <div className="p-6 bg-bg-light border border-border-light rounded-finox">
          <h4 className="font-bold text-text-main mb-2">{slideContent.slide09.execView.title}</h4>
          <p className="text-xs text-text-muted leading-relaxed">
            {slideContent.slide09.execView.desc}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-white border border-border-light rounded-finox text-center">
            <div className="text-xl font-black text-accent">{slideContent.slide09.execView.sla}</div>
            <div className="text-[8px] font-bold text-text-muted">SLA Met</div>
          </div>
          <div className="p-4 bg-white border border-border-light rounded-finox text-center">
            <div className="text-xl font-black text-accent">{slideContent.slide09.execView.blockersCount}</div>
            <div className="text-[8px] font-bold text-text-muted">Blockers</div>
          </div>
        </div>
      </div>
    </div>
  </SlideContainer>
);

// --- Slide 10: Holistic Tech Map ---
const TechMapSlide = () => (
  <SlideContainer title={slideContent.slide10.title} subhead={slideContent.slide10.subhead}>
    <div className="flex-1 flex flex-col justify-center">
      <DataFlowDiagram layers={slideContent.slide10.layers} />
      <div className="grid grid-cols-4 gap-6 mt-12">
        {slideContent.slide10.features.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <div key={i} className="p-4 bg-white border border-border-light rounded-finox card-shadow">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                <Icon className="text-accent w-4 h-4" />
              </div>
              <h5 className="font-bold text-text-main text-xs mb-1">{item.title}</h5>
              <p className="text-[10px] text-text-muted leading-tight">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </SlideContainer>
);

// --- Slide 11: Boehringer Ingelheim ---
const BoehringerSlide = () => (
  <SlideContainer title={slideContent.slide11.title} subhead={slideContent.slide11.subhead}>
    <div className="flex-1 flex flex-col justify-center">
      <DataSilosDiagram 
        silos={slideContent.slide11.silos}
        unified={slideContent.slide11.unified}
      />
      <div className="grid grid-cols-2 gap-8 mt-12">
        <div className="p-6 bg-white border border-border-light rounded-finox card-shadow">
          <h4 className="font-bold text-text-main mb-2">{slideContent.slide11.challenge.title}</h4>
          <p className="text-xs text-text-muted leading-relaxed">
            {slideContent.slide11.challenge.desc}
          </p>
        </div>
        <div className="p-6 bg-accent text-white rounded-finox card-shadow">
          <h4 className="font-bold mb-2">{slideContent.slide11.result.title}</h4>
          <p className="text-xs text-white/80 leading-relaxed">
            {slideContent.slide11.result.desc}
          </p>
        </div>
      </div>
    </div>
  </SlideContainer>
);

// --- Slide 12: Modere ---
const ModereSlide = () => (
  <SlideContainer title={slideContent.slide12.title} subhead={slideContent.slide12.subhead}>
    <div className="flex-1 flex flex-col justify-center">
      <StatBar stats={slideContent.slide12.stats} />
      <DecisionSimulation steps={slideContent.slide12.simulation} />
    </div>
  </SlideContainer>
);

// --- Slide 13: BCG / LEGO ---
const LegoSlide = () => (
  <SlideContainer title={slideContent.slide13.title} subhead={slideContent.slide13.subhead}>
    <div className="flex-1 flex flex-col justify-center">
      <BeforeAfter 
        before={slideContent.slide13.before}
        after={slideContent.slide13.after}
      />
      <div className="mt-12">
        <ClientQuote 
          quote={slideContent.slide13.quote.text}
          author={slideContent.slide13.quote.author}
          role={slideContent.slide13.quote.role}
          company={slideContent.slide13.quote.company}
        />
      </div>
    </div>
  </SlideContainer>
);

// --- Slide 14: DIRECTV ---
const DirecTVSlide = () => (
  <SlideContainer title={slideContent.slide14.title} subhead={slideContent.slide14.subhead}>
    <div className="flex-1 flex flex-col justify-center">
      <div className="grid grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="p-6 bg-white border border-border-light rounded-finox card-shadow">
            <h4 className="font-bold text-text-main mb-4">{slideContent.slide14.transformation.title}</h4>
            <ul className="space-y-3">
              {slideContent.slide14.transformation.points.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-text-muted">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-bg-light border border-border-light p-8 rounded-finox-lg">
          <div className="text-center space-y-4">
            <div className="text-4xl font-black text-accent">{slideContent.slide14.savings.amount}</div>
            <div className="text-[10px] font-black text-text-muted tracking-widest">{slideContent.slide14.savings.label}</div>
            <div className="w-full h-2 bg-border-light rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '85%' }}
                transition={{ duration: 1.5 }}
                className="h-full bg-accent"
              />
            </div>
            <p className="text-xs text-text-muted">{slideContent.slide14.savings.desc}</p>
          </div>
        </div>
      </div>
    </div>
  </SlideContainer>
);

// --- Slide 15: Murad ---
const MuradSlide = () => (
  <SlideContainer title={slideContent.slide15.title} subhead={slideContent.slide15.subhead}>
    <div className="flex-1 flex flex-col justify-center">
      <ArchitectureDiagram nodes={slideContent.slide15.architecture.nodes as any} />
      <div className="grid grid-cols-3 gap-6 mt-12">
        {slideContent.slide15.architecture.features.map((feat, i) => (
          <div key={i} className="p-4 bg-white border border-border-light rounded-finox">
            <h5 className="font-bold text-xs mb-2">{feat.title}</h5>
            <p className="text-[10px] text-text-muted">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideContainer>
);

// --- Slide 16: American Apparel ---
const AmericanApparelSlide = () => (
  <SlideContainer title={slideContent.slide16.title} subhead={slideContent.slide16.subhead}>
    <div className="flex-1 flex flex-col justify-center">
      <DataFlowDiagram layers={slideContent.slide16.layers} />
      <div className="mt-12 p-6 bg-ink text-white rounded-finox text-center">
        <p className="text-sm font-bold">{slideContent.slide16.resultText}</p>
      </div>
    </div>
  </SlideContainer>
);

// --- Slide 17: Shopify ---
const ShopifySlide = () => (
  <SlideContainer title={slideContent.slide17.title} subhead={slideContent.slide17.subhead}>
    <div className="flex-1 flex flex-col justify-center">
      <TreeDiagram data={slideContent.slide17.treeData} />
      <div className="mt-12 grid grid-cols-3 gap-8">
        {slideContent.slide17.stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl font-black text-accent">{stat.value}</div>
            <div className="text-[10px] font-bold text-text-muted">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </SlideContainer>
);

// --- Slide 18: Adobe ---
const AdobeSlide = () => (
  <SlideContainer title={slideContent.slide18.title} subhead={slideContent.slide18.subhead}>
    <div className="flex-1 flex flex-col justify-center">
      <div className="grid grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h4 className="text-2xl font-bold text-text-main">{slideContent.slide18.experience.title}</h4>
          <p className="text-sm text-text-muted leading-relaxed">
            {slideContent.slide18.experience.desc}
          </p>
          <div className="flex gap-4">
            {slideContent.slide18.experience.tags.map((tag, i) => (
              <div key={i} className="px-4 py-2 bg-accent/10 text-accent rounded-full text-xs font-bold">{tag}</div>
            ))}
          </div>
        </div>
        <div className="bg-white border border-border-light p-8 rounded-finox-lg card-shadow">
          <div className="space-y-4">
            {slideContent.slide18.metrics.map((metric, i) => (
              <React.Fragment key={i}>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold">{metric.title}</span>
                  <span className="text-accent font-bold">{metric.value}</span>
                </div>
                <div className="w-full h-2 bg-bg-light rounded-full overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: metric.value }} />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SlideContainer>
);

// --- Slide 19: Publicis Sapient ---
const SapientSlide = () => (
  <SlideContainer title={slideContent.slide19.title} subhead={slideContent.slide19.subhead}>
    <div className="flex-1 flex flex-col justify-center">
      <div className="grid grid-cols-4 gap-6">
        {slideContent.slide19.clients.map((client, i) => (
          <div key={i} className="p-6 bg-white border border-border-light rounded-finox text-center font-bold text-text-muted hover:text-accent hover:border-accent transition-all cursor-default shadow-sm">
            {client}
          </div>
        ))}
      </div>
      <div className="mt-12 p-8 bg-bg-light border border-border-light rounded-finox-lg">
        <div className="flex gap-12">
          <div className="flex-1">
            <h4 className="font-bold text-text-main mb-4">{slideContent.slide19.delivery.title}</h4>
            <p className="text-xs text-text-muted leading-relaxed">
              {slideContent.slide19.delivery.desc}
            </p>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-text-main mb-4">{slideContent.slide19.management.title}</h4>
            <p className="text-xs text-text-muted leading-relaxed">
              {slideContent.slide19.management.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  </SlideContainer>
);

// --- Slide 20: Why Jim? ---
const WhyMeSlide = () => (
  <SlideContainer title={slideContent.slide20.title} subhead={slideContent.slide20.subhead}>
    <div className="flex-1 flex flex-col justify-center">
      <div className="grid grid-cols-3 gap-8">
        {slideContent.slide20.points.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <div key={i} className="p-6 bg-white border border-border-light rounded-finox card-shadow hover:-translate-y-2 transition-all duration-300">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Icon className="text-accent w-5 h-5" />
              </div>
              <h4 className="font-bold text-text-main mb-2">{item.title}</h4>
              <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </SlideContainer>
);

// --- Slide 21: The "Rescue" Checklist ---
const RescueChecklistSlide = () => (
  <SlideContainer title={slideContent.slide21.title} subhead={slideContent.slide21.subhead}>
    <div className="flex-1 flex flex-col justify-center">
      <PhaseCarousel 
        phases={slideContent.slide21.carouselPhases}
        currentPhase={3}
      />
      <div className="grid grid-cols-2 gap-8 mt-16">
        {slideContent.slide21.weeks.map((week, i) => (
          <div key={i} className="p-6 bg-white border border-border-light rounded-finox card-shadow">
            <h4 className="font-bold text-text-main mb-4">{week.title}</h4>
            <ul className="space-y-2">
              {week.points.map((item, j) => (
                <li key={j} className="flex items-center gap-2 text-xs text-text-muted">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" /> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </SlideContainer>
);

// --- Slide 22: Closing / Q&A ---
const ClosingSlide = () => (
  <SlideContainer title={slideContent.slide22.title} subhead={slideContent.slide22.subhead}>
    <div className="flex-1 flex flex-col items-center justify-center text-center space-y-12">
      <div className="space-y-4">
        <h2 className="text-5xl font-black text-text-main tracking-tight">{slideContent.slide22.name}</h2>
        <p className="text-xl text-accent font-bold">{slideContent.slide22.role}</p>
      </div>
      
      <div className="flex gap-8">
        <div className="flex items-center gap-3 px-6 py-3 bg-white border border-border-light rounded-full shadow-sm">
          <Mail className="w-5 h-5 text-accent" />
          <span className="font-bold text-sm">{slideContent.slide22.email}</span>
        </div>
        <div className="flex items-center gap-3 px-6 py-3 bg-white border border-border-light rounded-full shadow-sm">
          <Linkedin className="w-5 h-5 text-accent" />
          <span className="font-bold text-sm">{slideContent.slide22.linkedin}</span>
        </div>
      </div>
      
      <div className="pt-12">
        <div className="text-[10px] font-black text-text-muted tracking-widest mb-4">{slideContent.slide22.readyText}</div>
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center animate-bounce">
            <ArrowRight className="text-accent w-6 h-6 rotate-90" />
          </div>
        </div>
      </div>
    </div>
  </SlideContainer>
);

const slides = [
  { 
    id: '01', 
    title: slideContent.slide01.title,
    component: () => <IntroSlide slideKey="slide01" />,
    notes: slideContent.slide01.notes || [
      "Tell me about yourself / Walk me through your resume.",
      "Focus on the 'Rescue PM' brand: I inherit broken programs and ship them.",
      "Highlight the scale: 20+ years, $1.3B impact."
    ]
  },
  { 
    id: '01a', 
    title: slideContent.slide01a.title,
    component: () => <IntroSlide slideKey="slide01a" />,
    notes: slideContent.slide01a.notes || [
      "Tell me about yourself / Walk me through your resume.",
      "Focus on the 'Rescue PM' brand: I inherit broken programs and ship them.",
      "Highlight the scale: 20+ years, $1.3B impact."
    ]
  },
  { 
    id: '02', 
    title: slideContent.slide02.title,
    component: FormulaSlide,
    notes: [
      "What makes you different? / How technical are you?",
      "Explain the mix: BA rigor + Tech depth + Scrum agility.",
      "Credibility with engineers comes from the 30% Technical quadrant."
    ]
  },
  { 
    id: '03', 
    title: slideContent.slide03.title,
    component: CredentialsSlide,
    notes: slideContent.slide03.notes
  },
  { 
    id: '04', 
    title: slideContent.slide04.title,
    component: AgileSlide,
    notes: [
      "Agile vs. Waterfall? / How do you handle fixed delivery dates?",
      "Explain the 'Hybrid' model: Waterfall for planning/budget, Agile for execution.",
      "Release boundaries are where the two worlds meet."
    ]
  },
  { 
    id: '05', 
    title: slideContent.slide05.title,
    component: DeliveryModelSlide,
    notes: [
      "Walk me through how you run a project.",
      "Phase 01 (Diagnose) is critical for inherited 'broken' projects.",
      "The goal is repeatable, predictable delivery."
    ]
  },
  { 
    id: '06', 
    title: slideContent.slide06.title,
    component: JiraSlide,
    notes: [
      "How do you organize a Jira backlog? / How do you write user stories?",
      "Explain the hierarchy: Epic -> Story -> AC -> Sub-tasks.",
      "Use the Disney app as a concrete example of an Epic."
    ]
  },
  { 
    id: '07', 
    title: slideContent.slide07.title,
    component: RiskSlide,
    notes: [
      "How do you identify and mitigate risk?",
      "Technical, External, Organizational, and PM risks are tracked separately.",
      "The live risk register is reviewed every single sprint."
    ]
  },
  { 
    id: '08', 
    title: slideContent.slide08.title,
    component: PrioritiesSlide,
    notes: [
      "How do you prioritize across a program?",
      "Use the RACI matrix and the Important/Urgent split.",
      "LOE (Level of Effort) is balanced against business value."
    ]
  },
  { 
    id: '09', 
    title: slideContent.slide09.title,
    component: StatusSlide,
    notes: [
      "How do you structure status reporting? / How do you keep execs informed?",
      "The report is clear, consistent, and concise.",
      "Focus on: Completed, In-Progress, Upcoming, and Critical Risks."
    ]
  },
  { 
    id: '10', 
    title: slideContent.slide10.title,
    component: TechMapSlide,
    notes: [
      "How technical are you really? / What does a composable stack look like?",
      "Explain the 3-layer architecture: Experience, Commerce, and Systems.",
      "I speak the language of ERPs, OMS, PIMs, and CMSs."
    ]
  },
  { 
    id: '11', 
    title: slideContent.slide11.title,
    component: BoehringerSlide,
    notes: [
      "Case Study: Breaking Data Silos.",
      "Inherited 12 disconnected data sources for clinical trials.",
      "Unified into a single source of truth, reducing reconciliation time by 60%."
    ]
  },
  { 
    id: '12', 
    title: slideContent.slide12.title,
    component: ModereSlide,
    notes: [
      "Case Study: Global Scale & Expansion.",
      "Managed headless migration across 28 countries and 14 languages.",
      "Built a global platform that maintained brand standards while allowing local speed."
    ]
  },
  { 
    id: '13', 
    title: slideContent.slide13.title,
    component: LegoSlide,
    notes: [
      "Case Study: Rescuing Legacy Programs.",
      "Inherited a stalled $50M project and shipped the MVP in 6 months.",
      "Focus on unblocking engineers and removing organizational noise."
    ]
  },
  { 
    id: '14', 
    title: slideContent.slide14.title,
    component: DirecTVSlide,
    notes: [
      "Case Study: Automation & Efficiency.",
      "Automated 40% of manual QA, reducing release cycles by 2 days.",
      "Upskilled the team and integrated automated gates into Jira."
    ]
  },
  { 
    id: '15', 
    title: slideContent.slide15.title,
    component: MuradSlide,
    notes: [
      "Case Study: Architecture Overhaul.",
      "Moved from a legacy monolith to a performance-first composable stack.",
      "Resulted in a 30% increase in site speed and 15% better conversion."
    ]
  },
  { 
    id: '16', 
    title: slideContent.slide16.title,
    component: AmericanApparelSlide,
    notes: [
      "Case Study: Inventory & Logistics.",
      "Implemented real-time inventory tracking across global retail and e-commerce.",
      "Reduced stockouts by 20% through unified inventory management."
    ]
  },
  { 
    id: '17', 
    title: slideContent.slide17.title,
    component: ShopifySlide,
    notes: [
      "Case Study: The App Ecosystem.",
      "Built 5+ high-volume Shopify apps with over 100k installs.",
      "Focus on performance and scalability in the commerce ecosystem."
    ]
  },
  { 
    id: '18', 
    title: slideContent.slide18.title,
    component: AdobeSlide,
    notes: [
      "Case Study: Creative Cloud Integration.",
      "Integrated Adobe Sign into enterprise workflows for Fortune 500 clients.",
      "Built custom Creative Cloud extensions to bridge the gap between tools and workflows."
    ]
  },
  { 
    id: '19', 
    title: slideContent.slide19.title,
    component: SapientSlide,
    notes: [
      "Case Study: Agency Leadership.",
      "Led cross-functional teams for digital transformations at Disney, HBO, and more.",
      "Expertise in managing expectations and delivering in high-stakes environments."
    ]
  },
  { 
    id: '20', 
    title: slideContent.slide20.title,
    component: WhyMeSlide,
    notes: [
      "Summary: The Strategic Advantage.",
      "20+ years of experience blending technical depth with business acumen.",
      "Execution-focused leader ready to inherit and ship complex programs."
    ]
  },
  { 
    id: '21', 
    title: slideContent.slide21.title,
    component: RescueChecklistSlide,
    notes: [
      "My First 30 Days: Audit, Unblock, Stabilize, Scale.",
      "Focus on quick wins to build momentum and trust.",
      "Goal is to reach a predictable, high-velocity delivery state."
    ]
  },
  { 
    id: '22', 
    title: slideContent.slide22.title,
    component: ClosingSlide,
    notes: [
      "Thank you for your time.",
      "Open for questions and deeper technical discussion.",
      "Ready to hit the ground running."
    ]
  },
];

// --- Main App ---

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showTOC, setShowTOC] = useState(false);
  const [scale, setScale] = useState(1);
  const presentationRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Universal Scaling Logic
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const height = containerRef.current.offsetHeight;
        if (width > 0 && height > 0) {
          // Fixed 1280x720 slide canvas scaled to the largest fully-visible size.
          setScale(Math.min(width / 1280, height / 720));
        }
      }
    };
    
    // Initial scale check
    handleResize();
    
    window.addEventListener('resize', handleResize);
    // Intersection observer or resize observer is even better for some cases
    const observer = new ResizeObserver(handleResize);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  const tocRef = useRef<HTMLDivElement>(null);

  // Close TOC when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (tocRef.current && !tocRef.current.contains(event.target as Node)) {
        setShowTOC(false);
      }
    };

    if (showTOC) {
      // Small delay to prevent the click that opens the TOC from triggering this
      setTimeout(() => {
        window.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('touchstart', handleClickOutside);
      }, 0);
    }
    
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('touchstart', handleClickOutside);
    };
  }, [showTOC]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setShowNotes(false);
    setShowTOC(false);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setShowNotes(false);
    setShowTOC(false);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setShowTOC(false);
    setShowNotes(false);
  };

  const toggleFullscreen = useCallback(async () => {
    const target = presentationRef.current;
    if (!target) return;

    try {
      if (!document.fullscreenElement) {
        await target.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      // Keep slideshow behavior intact even when browser denies fullscreen.
    }
  }, []);

  useEffect(() => {
    const syncFullscreenState = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener('fullscreenchange', syncFullscreenState);
    syncFullscreenState();

    return () => {
      document.removeEventListener('fullscreenchange', syncFullscreenState);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key === 'arrowright' || key === ' ') {
        e.preventDefault();
        nextSlide();
      }
      if (key === 'arrowleft') {
        e.preventDefault();
        prevSlide();
      }
      if (key === 'f') {
        e.preventDefault();
        toggleFullscreen();
      }
      if (key === 'escape' && document.fullscreenElement) {
        e.preventDefault();
        document.exitFullscreen();
      }
      if (key === 'n') setShowNotes(prev => !prev);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, toggleFullscreen]);

  return (
    <div className="h-full w-full bg-bg-light overflow-hidden">
      {/* Presentation Wrapper */}
      <div ref={presentationRef} className="presentation-container relative h-full w-full grid grid-rows-[minmax(0,1fr)_auto]">
        
        {/* Aspect Ratio Container */}
        <div 
          ref={containerRef}
          className={cn(
            "bg-white overflow-hidden relative group transition-all duration-500 min-h-0",
            isFullscreen ? "border-none rounded-none" : "border border-border-light shadow-2xl rounded-finox-lg"
          )}
        >
          {/* Universal Scaling System */}
          <div className="scale-container">
            <div 
              className="scale-wrapper"
              style={{ 
                transform: `scale(${scale})`,
                transition: 'transform 0.2s ease-out'
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  {slides[currentSlide].component()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 h-2 bg-bg-light w-full z-50">
            <motion.div 
              className="h-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Presenter Notes Overlay (Moved outside overflow-hidden container) */}
        <AnimatePresence>
          {showNotes && (
            <motion.div
              key="notes-overlay"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="absolute bottom-24 left-4 right-4 z-50 w-auto max-h-[55vh] overflow-y-auto bg-[#0F172A] text-white p-6 rounded-2xl shadow-2xl border border-white/10 custom-scrollbar md:bottom-32 md:left-10 md:right-auto md:w-full md:max-h-[60vh] md:max-w-md"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-accent">
                  <Monitor className="w-3 h-3" />
                  Presenter Notes
                </div>
                <button 
                  onClick={() => setShowNotes(false)}
                  className="text-xs text-gray-400 hover:text-white transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A] rounded-md"
                >
                  Close
                </button>
              </div>
              <ul className="space-y-3">
                {(slides[currentSlide]?.notes || []).map((note, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {note}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-3 flex flex-col gap-2 px-4 md:mt-4 md:flex-row md:items-center md:justify-between md:px-0" style={{ paddingBottom: "max(env(safe-area-inset-bottom), 0px)" }}>
          {/* Keyboard Hints */}
          <div className="order-2 md:order-1 md:hidden text-[11px] font-bold text-text-muted tracking-wide text-center">
            Tap controls to navigate
          </div>
          <div className="hidden md:flex md:flex-1 items-center justify-start gap-6 text-xs text-text-muted font-bold tracking-widest">
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 bg-white border border-border-light rounded-lg shadow-sm">Space / →</span> Next
            </div>
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 bg-white border border-border-light rounded-lg shadow-sm">←</span> Prev
            </div>
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 bg-white border border-border-light rounded-lg shadow-sm">N</span> Notes
            </div>
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 bg-white border border-border-light rounded-lg shadow-sm">F</span> Fullscreen
            </div>
          </div>

          <div className="order-1 md:order-2 w-full flex flex-wrap items-center justify-center gap-3 md:w-auto md:flex-none md:justify-end md:gap-4">
            {/* Left Controls */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-3">
              <button 
                onClick={toggleFullscreen}
                className="flex items-center gap-2 px-4 py-3 bg-white border border-border-light rounded-2xl transition-all shadow-sm font-bold text-sm text-text-muted hover:bg-accent hover:border-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:px-5 md:py-2"
              >
                <Maximize2 className="w-5 h-5" />
                Fullscreen
              </button>

              <button 
                onClick={() => setShowNotes(prev => !prev)}
                className={cn(
                  "flex items-center gap-2 px-4 py-3 bg-white border border-border-light rounded-2xl text-sm font-bold shadow-sm transition-all text-text-muted hover:bg-accent hover:border-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:px-5 md:py-2",
                  showNotes ? "bg-accent/5 border-accent/30 text-accent ring-2 ring-accent/10" : ""
                )}
              >
                <FileText className="w-5 h-5" />
                Notes
              </button>
            </div>

            {/* Right Controls */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-3">
              <div className="relative">
                <button 
                  onClick={() => setShowTOC(prev => !prev)}
                  className={cn(
                    "flex items-center gap-2 bg-white border border-border-light px-4 py-3 rounded-2xl text-sm font-bold shadow-sm transition-all text-text-muted hover:bg-accent hover:border-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:px-5 md:py-2",
                    showTOC ? "bg-accent/5 border-accent/30 text-accent ring-2 ring-accent/10" : ""
                  )}
                >
                  {currentSlide + 1} / {slides.length}
                </button>

                {/* Table of Contents Popup (Anchored to dock TOC trigger) */}
                <AnimatePresence>
                  {showTOC && (
                    <motion.div
                      ref={tocRef}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute bottom-full left-1/2 mb-3 w-[min(480px,calc(100vw-2rem))] -translate-x-1/2 origin-bottom bg-white border border-border-light rounded-2xl shadow-2xl overflow-hidden p-2 flex flex-col max-h-[55vh] z-50 transition-all md:left-auto md:right-0 md:w-[480px] md:translate-x-0 md:max-h-[60vh] md:origin-bottom-right"
                    >
                      <div className="px-4 py-2 flex justify-between items-center border-b border-border-light mb-2">
                        <span className="text-[10px] font-bold text-text-muted tracking-widest">
                          Table of Contents
                        </span>
                        <button 
                          onClick={() => setShowTOC(false)}
                          className="p-1 hover:bg-bg-light rounded-lg text-text-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-2 overflow-y-auto px-1 custom-scrollbar">
                        {slides.map((slide, index) => (
                          <button
                            key={slide.id}
                            onClick={() => goToSlide(index)}
                            className={cn(
                              "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30",
                              currentSlide === index 
                                ? "bg-accent/5 text-accent" 
                                : "text-text-muted hover:bg-bg-light hover:text-text-main"
                            )}
                          >
                            <span className={cn(
                              "w-6 h-6 flex items-center justify-center rounded-lg text-[10px] font-bold border shrink-0",
                              currentSlide === index 
                                ? "bg-accent text-white border-accent" 
                                : "bg-bg-light border-border-light group-hover:border-accent/30"
                            )}>
                              {index + 1}
                            </span>
                            <span className="text-[11px] font-bold truncate leading-tight">{slide.title}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 md:w-10 md:h-10 flex items-center justify-center bg-white border border-border-light rounded-full transition-all shadow-sm text-text-muted hover:bg-accent hover:border-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 md:w-10 md:h-10 flex items-center justify-center bg-white border border-border-light rounded-full transition-all shadow-sm text-text-muted hover:bg-accent hover:border-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
