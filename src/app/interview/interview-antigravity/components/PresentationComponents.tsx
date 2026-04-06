// @ts-nocheck
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, Quote, User, Database, Shield, RotateCcw } from 'lucide-react';
import { cn } from '../lib/utils';

// --- StatBar ---
export const StatBar = ({ stats }: { stats: { label: string; value: string }[] }) => (
  <div className="grid grid-cols-4 gap-4 mb-8">
    {stats.map((stat, i) => (
      <div key={i} className="bg-white/50 backdrop-blur-sm border border-border-light p-4 rounded-finox card-shadow">
        <div className="text-2xl font-extrabold text-accent">{stat.value}</div>
        <div className="text-[10px] font-bold text-text-muted tracking-widest">{stat.label}</div>
      </div>
    ))}
  </div>
);

// --- PhaseCarousel (Horizontal Stepper) ---
export const PhaseCarousel = ({ phases, currentPhase = 0 }: { phases: { title: string; desc: string }[], currentPhase?: number }) => (
  <div className="flex items-start justify-between w-full relative pt-8">
    {/* Connecting Line */}
    <div className="absolute top-12 left-0 w-full h-0.5 bg-border-light -z-10" />
    
    {phases.map((phase, i) => (
      <div key={i} className="flex flex-col items-center text-center px-4 flex-1">
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs mb-4 transition-all duration-500",
          i <= currentPhase ? "bg-accent text-white scale-110 shadow-lg shadow-accent/20" : "bg-white border border-border-light text-text-muted"
        )}>
          {i + 1}
        </div>
        <h4 className={cn("font-bold text-sm mb-2", i <= currentPhase ? "text-text-main" : "text-text-muted")}>{phase.title}</h4>
        <p className="text-[10px] text-text-muted leading-tight max-w-[120px]">{phase.desc}</p>
      </div>
    ))}
  </div>
);

// --- ClientQuote ---
export const ClientQuote = ({ quote, author, role, company }: { quote: string; author: string; role: string; company: string }) => (
  <div className="bg-accent/5 border border-accent/10 p-8 rounded-finox-lg relative mt-auto">
    <Quote className="absolute -top-4 -left-4 w-10 h-10 text-accent/20" />
    <p className="text-lg text-text-main mb-6 leading-relaxed">"{quote}"</p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-white border border-border-light flex items-center justify-center overflow-hidden">
        <User className="w-6 h-6 text-text-muted" />
      </div>
      <div>
        <div className="font-bold text-text-main">{author}</div>
        <div className="text-xs text-text-muted">{role} · <span className="text-accent font-bold">{company}</span></div>
      </div>
    </div>
  </div>
);

// --- BeforeAfter ---
export const BeforeAfter = ({ before, after }: { before: string[]; after: string[] }) => (
  <div className="grid grid-cols-2 gap-8 mt-8">
    <div className="bg-red-50/50 border border-red-100 p-6 rounded-finox">
      <div className="text-[10px] font-bold text-red-500 tracking-widest mb-4">Before / The Challenge</div>
      <ul className="space-y-2">
        {before.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm text-red-700">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-red-400 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="bg-green-50/50 border border-green-100 p-6 rounded-finox">
      <div className="text-[10px] font-bold text-green-500 tracking-widest mb-4">After / The Solution</div>
      <ul className="space-y-2">
        {after.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm text-green-700">
            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// --- DataFlowDiagram ---
export const DataFlowDiagram = ({ layers }: { layers: { title: string; items: string[] }[] }) => (
  <div className="flex flex-col gap-8 w-full py-4">
    {layers.map((layer, i) => (
      <div key={i} className="relative">
        <div className="flex items-center gap-6">
          <div className="w-32 shrink-0 text-right">
            <div className="text-[10px] font-black text-accent tracking-widest mb-1">Layer {i + 1}</div>
            <div className="text-sm font-bold text-text-main">{layer.title}</div>
          </div>
          <div className="flex-1 flex gap-4">
            {layer.items.map((item, j) => (
              <motion.div
                key={j}
                whileHover={{ y: -5, borderColor: 'var(--color-accent)' }}
                className="flex-1 bg-white border border-border-light p-4 rounded-finox card-shadow text-center relative group cursor-default"
              >
                <div className="text-xs font-bold text-text-main">{item}</div>
                {/* Particle stream effect (simplified) */}
                {i < layers.length - 1 && (
                  <div className="absolute -bottom-8 left-1/2 w-px h-8 bg-dashed bg-accent/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
);

// --- DataSilosDiagram ---
export const DataSilosDiagram = ({ silos, unified }: { silos: string[]; unified: string }) => (
  <div className="flex items-center justify-center gap-12 py-8">
    <div className="grid grid-cols-2 gap-4">
      {silos.map((silo, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="p-3 bg-white border border-border-light rounded-lg text-[10px] font-bold text-text-muted shadow-sm flex items-center gap-2"
        >
          <Database className="w-3 h-3 text-text-muted" />
          {silo}
        </motion.div>
      ))}
    </div>
    <motion.div
      animate={{ x: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <ArrowRight className="w-8 h-8 text-accent" />
    </motion.div>
    <div className="p-8 bg-accent text-white rounded-finox-lg shadow-2xl border-4 border-white flex flex-col items-center gap-3">
      <Shield className="w-10 h-10" />
      <div className="text-sm font-black tracking-widest">{unified}</div>
    </div>
  </div>
);

// --- DecisionSimulation ---
export const DecisionSimulation = ({ steps }: { steps: { question: string; options: string[] }[] }) => {
  const [currentStep, setCurrentStep] = React.useState(0);

  return (
    <div className="w-full max-w-2xl mx-auto bg-bg-light border border-border-light rounded-finox-lg p-8 card-shadow">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-6"
        >
          <div className="text-[10px] font-black text-accent tracking-widest">Decision Point {currentStep + 1}</div>
          <h4 className="text-xl font-bold text-text-main leading-tight">{steps[currentStep].question}</h4>
          <div className="grid grid-cols-1 gap-3">
            {steps[currentStep].options.map((option, i) => (
              <button
                key={i}
                onClick={() => currentStep < steps.length - 1 && setCurrentStep(prev => prev + 1)}
                className="w-full p-4 bg-white border border-border-light rounded-finox text-left text-sm font-bold text-text-main hover:border-accent hover:bg-accent/5 transition-all flex justify-between items-center group"
              >
                {option}
                <ArrowRight className="w-4 h-4 text-border-light group-hover:text-accent transition-colors" />
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
      {currentStep > 0 && (
        <button 
          onClick={() => setCurrentStep(0)}
          className="mt-8 text-[10px] font-bold text-text-muted hover:text-accent tracking-widest flex items-center gap-2"
        >
          <RotateCcw className="w-3 h-3" /> Reset Simulation
        </button>
      )}
    </div>
  );
};

// --- TreeDiagram (Vertical Hierarchy) ---
export const TreeDiagram = ({ data }: { data: { label: string; children?: any[] } }) => {
  const renderNode = (node: any, isRoot = false) => (
    <div className="flex flex-col items-center gap-4">
      <div className={cn(
        "px-6 py-3 rounded-finox border font-bold text-sm shadow-sm transition-all",
        isRoot ? "bg-ink text-white border-ink" : "bg-white border-border-light text-text-main hover:border-accent/50"
      )}>
        {node.label}
      </div>
      {node.children && (
        <div className="flex gap-8 relative pt-4">
          {/* Horizontal connecting line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[calc(100%-4rem)] h-px bg-border-light" />
          {node.children.map((child: any, i: number) => (
            <div key={i} className="relative pt-4">
              {/* Vertical connecting line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-4 bg-border-light" />
              {renderNode(child)}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return <div className="w-full flex justify-center py-8 overflow-x-auto">{renderNode(data, true)}</div>;
};

// --- ReleaseBoundaryDiagram ---
export const ReleaseBoundaryDiagram = () => {
  const [scope, setScope] = React.useState(80);
  return (
    <div className="w-full max-w-3xl mx-auto p-8 bg-white border border-border-light rounded-finox-lg card-shadow">
      <div className="flex justify-between items-end mb-12">
        <div className="text-center space-y-2">
          <div className="text-[10px] font-black text-text-muted tracking-widest">Fixed Constraint</div>
          <div className="px-4 py-2 bg-ink text-white rounded-finox font-bold text-sm">Release Date</div>
        </div>
        <div className="flex-1 h-px bg-dashed bg-border-light mx-8 mb-4 relative">
          <motion.div 
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-accent font-sans"
          >
            The Tension
          </motion.div>
        </div>
        <div className="text-center space-y-2">
          <div className="text-[10px] font-black text-text-muted tracking-widest">Flexible Variable</div>
          <div className="px-4 py-2 bg-accent text-white rounded-finox font-bold text-sm">Scope / Features</div>
        </div>
      </div>
      
      <div className="space-y-8">
        <div>
          <div className="flex justify-between text-xs font-bold text-text-main mb-4">
            <span>Scope Management</span>
            <span className="text-accent">{scope}% of Backlog</span>
          </div>
          <input 
            type="range" 
            min="20" 
            max="100" 
            value={scope} 
            onChange={(e) => setScope(parseInt(e.target.value))}
            className="w-full h-2 bg-bg-light rounded-lg appearance-none cursor-pointer accent-accent"
          />
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div className={cn("p-4 rounded-finox border transition-all", scope > 90 ? "bg-red-50 border-red-200" : "bg-bg-light border-border-light")}>
            <div className="font-bold text-text-main text-xs mb-1">Must Have</div>
            <div className="w-full h-1.5 bg-accent rounded-full" />
          </div>
          <div className={cn("p-4 rounded-finox border transition-all", scope > 60 ? "bg-yellow-50 border-yellow-200" : "bg-bg-light border-border-light opacity-50")}>
            <div className="font-bold text-text-main text-xs mb-1">Should Have</div>
            <div className="w-full h-1.5 bg-accent/60 rounded-full" />
          </div>
          <div className={cn("p-4 rounded-finox border transition-all", scope > 30 ? "bg-green-50 border-green-200" : "bg-bg-light border-border-light opacity-30")}>
            <div className="font-bold text-text-main text-xs mb-1">Could Have</div>
            <div className="w-full h-1.5 bg-accent/30 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- InteractiveDeliveryModel ---
export const InteractiveDeliveryModel = ({ phases }: { phases: { title: string; desc: string; artifacts: string[] }[] }) => {
  const [hovered, setHovered] = React.useState<number | null>(null);
  return (
    <div className="flex gap-4 w-full py-8">
      {phases.map((phase, i) => (
        <div 
          key={i} 
          className="flex-1 relative group"
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        >
          <div className={cn(
            "h-32 flex flex-col items-center justify-center p-6 rounded-finox border transition-all duration-500 cursor-default",
            hovered === i ? "bg-accent border-accent scale-105 shadow-xl -translate-y-2" : "bg-white border-border-light"
          )}>
            <div className={cn("text-[10px] font-black mb-2 tracking-widest", hovered === i ? "text-white/70" : "text-accent")}>Phase 0{i + 1}</div>
            <div className={cn("font-bold text-sm text-center", hovered === i ? "text-white" : "text-text-main")}>{phase.title}</div>
          </div>
          
          <AnimatePresence>
            {hovered === i && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 w-full mt-4 p-4 bg-ink text-white rounded-finox shadow-2xl z-20"
              >
                <div className="text-[10px] font-black text-accent tracking-widest mb-3">Key Artifacts</div>
                <div className="space-y-2">
                  {phase.artifacts.map((art, j) => (
                    <div key={j} className="flex items-center gap-2 text-[10px] font-bold">
                      <CheckCircle2 className="w-3 h-3 text-accent" /> {art}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {i < phases.length - 1 && (
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
              <ArrowRight className="w-4 h-4 text-border-light" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// --- RiskHeatmap ---
export const RiskHeatmap = () => {
  const risks = [
    { id: 1, label: "API Latency", x: 80, y: 70, color: "bg-red-500" },
    { id: 2, label: "Vendor Delay", x: 60, y: 40, color: "bg-yellow-500" },
    { id: 3, label: "Scope Creep", x: 90, y: 30, color: "bg-orange-500" },
    { id: 4, label: "Resource Gap", x: 40, y: 80, color: "bg-red-400" },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto aspect-square bg-white border border-border-light rounded-finox-lg p-12 relative card-shadow">
      {/* Grid Labels */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-black text-text-muted tracking-widest">Impact</div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-black text-text-muted tracking-widest">Probability</div>
      
      {/* The Grid */}
      <div className="w-full h-full border-l-2 border-b-2 border-ink relative overflow-hidden">
        {/* Quadrant Backgrounds */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-50/50" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-green-50/50" />
        
        {/* Grid Lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-border-light/50" />
        <div className="absolute left-1/2 top-0 w-px h-full bg-border-light/50" />

        {risks.map((risk) => (
          <motion.div
            key={risk.id}
            drag
            dragConstraints={{ top: 0, left: 0, right: 400, bottom: 400 }}
            style={{ left: `${risk.x}%`, bottom: `${risk.y}%` }}
            className="absolute -translate-x-1/2 translate-y-1/2 cursor-move group"
          >
            <div className={cn("w-4 h-4 rounded-full shadow-lg border-2 border-white", risk.color)} />
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-ink text-white text-[8px] font-bold rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {risk.label}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="absolute top-4 right-4 text-[10px] font-bold text-red-500">Critical Zone</div>
      <div className="absolute bottom-4 left-16 text-[10px] font-bold text-green-500">Safe Zone</div>
    </div>
  );
};

// --- ArchitectureDiagram ---
export const ArchitectureDiagram = ({ nodes }: { nodes: { label: string; type: 'input' | 'process' | 'output' }[] }) => (
  <div className="flex items-center justify-center gap-8 py-12">
    {nodes.map((node, i) => (
      <React.Fragment key={i}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          className={cn(
            "px-6 py-4 rounded-finox border-2 font-bold text-sm shadow-xl transition-all relative group",
            node.type === 'input' ? "bg-white border-border-light text-text-main" :
            node.type === 'process' ? "bg-accent border-accent text-white" :
            "bg-ink border-ink text-white"
          )}
        >
          {node.label}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
        {i < nodes.length - 1 && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: i * 0.2 + 0.1 }}
            className="w-12 h-px bg-dashed bg-border-light relative"
          >
            <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-border-light" />
          </motion.div>
        )}
      </React.Fragment>
    ))}
  </div>
);

// --- PriorityMatrix ---
export const PriorityMatrix = () => {
  const [mode, setMode] = React.useState<'value' | 'loe'>('value');
  
  const tasks = [
    { label: "Checkout Refactor", value: 90, loe: 80 },
    { label: "Email Templates", value: 40, loe: 20 },
    { label: "API Documentation", value: 60, loe: 40 },
    { label: "Legacy DB Cleanup", value: 30, loe: 90 },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8">
      <div className="flex justify-center">
        <div className="bg-bg-light p-1 rounded-full flex gap-1">
          <button 
            onClick={() => setMode('value')}
            className={cn("px-6 py-2 rounded-full text-[10px] font-black tracking-widest transition-all", mode === 'value' ? "bg-accent text-white shadow-lg" : "text-text-muted hover:text-text-main")}
          >
            Business Value
          </button>
          <button 
            onClick={() => setMode('loe')}
            className={cn("px-6 py-2 rounded-full text-[10px] font-black tracking-widest transition-all", mode === 'loe' ? "bg-accent text-white shadow-lg" : "text-text-muted hover:text-text-main")}
          >
            Level of Effort
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 aspect-video">
        {[
          { title: "High Impact / Low Effort", color: "bg-green-50 border-green-100" },
          { title: "High Impact / High Effort", color: "bg-blue-50 border-blue-100" },
          { title: "Low Impact / Low Effort", color: "bg-gray-50 border-gray-100" },
          { title: "Low Impact / High Effort", color: "bg-red-50 border-red-100" },
        ].map((quad, i) => (
          <div key={i} className={cn("p-6 rounded-finox-lg border relative overflow-hidden", quad.color)}>
            <div className="text-[10px] font-black text-text-muted tracking-widest mb-4">{quad.title}</div>
            <div className="space-y-2">
              {tasks.filter(t => {
                const score = mode === 'value' ? t.value : (100 - t.loe);
                if (i === 0) return score > 70 && (mode === 'value' ? t.loe < 50 : t.value > 70);
                if (i === 1) return score > 70 && (mode === 'value' ? t.loe >= 50 : t.value <= 70);
                if (i === 2) return score <= 70 && (mode === 'value' ? t.loe < 50 : t.value > 70);
                return score <= 70 && (mode === 'value' ? t.loe >= 50 : t.value <= 70);
              }).map((task, j) => (
                <motion.div 
                  layout
                  key={j} 
                  className="px-3 py-2 bg-white border border-border-light rounded font-bold text-[10px] text-text-main shadow-sm"
                >
                  {task.label}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- DeliveryProcessDiagram ---
export const DeliveryProcessDiagram = () => {
  const LAYOUT = {
    topOffset: 55,
    planning: {
      x: 9,
      yCards: [76, 160, 244, 328, 412], // Fixed card offsets
      yCenters: [155, 239, 323, 407, 491], // Absolute Y positions (topOffset + yCard + 24)
    },    execution: {
      x: 380,
      width: 505,
      yCenterRow1: 157, // Absolute (55 + 78 + 24)
      yCenterRow2: 308, // Absolute (55 + 229 + 24)
    },
    delivery: {
      x: 1016,
      yCards: [76, 229],
      yCenters: [155, 308], // Absolute (55 + yCard + 24)
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center min-h-0 w-full h-full">
      <div data-layer="Content Frame" className="ContentFrame w-[1200px] h-[566px] relative scale-[0.85] transform-gpu">
        {/* Section Headers */}
        <div className="absolute left-[9px] top-[55px] w-40 h-11 flex justify-center items-center text-text-main text-2xl font-bold font-sans tracking-tight">Planning</div>
        <div className="absolute left-[380px] top-[55px] w-[505px] h-11 flex justify-center items-center text-text-main text-2xl font-bold font-sans tracking-tight">Execution</div>
        <div className="absolute left-[1016px] top-[55px] w-40 h-11 flex justify-center items-center text-text-main text-2xl font-bold font-sans tracking-tight">Delivery</div>

        {/* Planning Column Cards */}
        <div style={{ top: 55 + 76 }} className="absolute left-[9px] w-40 h-12 bg-white rounded-lg border border-ink flex justify-center items-center px-2.5">
          <div className="text-center text-text-main text-xs font-bold font-sans">Discovery & Scoping</div>
        </div>
        <div style={{ top: 55 + 160 }} className="absolute left-[9px] w-40 h-12 bg-ink rounded-lg border border-ink flex justify-center items-center px-2.5">
          <div className="text-center text-white text-xs font-bold font-sans">Write & Estimate JIRA Tickets</div>
        </div>
        <div style={{ top: 55 + 244 }} className="absolute left-[9px] w-40 h-12 bg-white rounded-lg border border-ink flex justify-center items-center px-2.5">
          <div className="text-center text-text-main text-xs font-bold font-sans">Project Schedule & Release Plan</div>
        </div>
        <div style={{ top: 55 + 328 }} className="absolute left-[9px] w-40 h-12 bg-white rounded-lg border border-ink flex justify-center items-center px-2.5">
          <div className="text-center text-text-main text-xs font-bold font-sans">Design Review & Go/No-Go</div>
        </div>
        <div style={{ top: 55 + 412 }} className="absolute left-[9px] w-40 h-12 bg-white rounded-lg border border-ink flex justify-center items-center px-2.5">
          <div className="text-center text-text-main text-xs font-bold font-sans">Project Kick-Off</div>
        </div>

        {/* Execution Box */}
        <div className="absolute w-[505px] h-80 left-[380px] top-[55px] border border-dashed border-ink bg-bg-light/20 rounded-xl">
          <div className="absolute left-[30px] top-[78px] w-40 h-12 bg-ink rounded-lg border border-ink flex justify-center items-center px-2.5">
            <div className="text-center text-white text-xs font-bold font-sans">Backlog Grooming</div>
          </div>
          <div className="absolute left-[305px] top-[78px] w-40 h-12 bg-white rounded-lg border border-ink flex justify-center items-center px-2.5">
            <div className="text-center text-text-main text-xs font-bold font-sans">Software Versioning</div>
          </div>
          <div className="absolute left-[30px] top-[229px] w-40 h-12 bg-ink rounded-lg border border-ink flex justify-center items-center px-2.5">
            <div className="text-center text-white text-xs font-bold font-sans">Daily Stand-Ups</div>
          </div>
          <div className="absolute left-[305px] top-[229px] w-40 h-12 bg-ink rounded-lg border border-ink flex justify-center items-center px-2.5">
            <div className="text-center text-white text-xs font-bold font-sans">Sprint Planning</div>
          </div>
          
          {/* Inner Execution Connectors */}
          <div className="absolute left-[190px] top-[102px] w-[115px] h-px bg-ink" />
          <div className="absolute left-[190px] top-[253px] w-[115px] h-px bg-ink" />
          <div className="absolute left-[110px] top-[128px] w-px h-[101px] bg-ink" />
          <div className="absolute left-[385px] top-[128px] w-px h-[101px] bg-ink" />
        </div>

        {/* Delivery Column Cards */}
        <div style={{ top: 55 + 76 }} className="absolute left-[1016px] w-40 h-12 bg-white rounded-lg border border-ink flex justify-center items-center px-2.5">
          <div className="text-center text-text-main text-xs font-bold font-sans">QA/Deployment</div>
        </div>
        <div style={{ top: 55 + 229 }} className="absolute left-[1016px] w-40 h-12 bg-white rounded-lg border border-ink flex justify-center items-center px-2.5">
          <div className="text-center text-text-main text-xs font-bold font-sans">Feature Release</div>
        </div>

        {/* Outer Connection Lines (Data-Driven Anchors) */}
        {/* Planning Vertical: From Discovery Center to Kick-Off Center at 89px */}
        <div style={{ top: LAYOUT.planning.yCenters[0], height: LAYOUT.planning.yCenters[4] - LAYOUT.planning.yCenters[0] }} 
             className="absolute left-[89px] w-px bg-ink -z-10" />
        {/* Kick-Off Horizontal Outflow: Perfectly Centered at 491px, starts from 89px */}
        <div style={{ top: LAYOUT.planning.yCenters[4] }} 
             className="absolute left-[89px] w-[165px] h-px bg-ink -z-10" />
        {/* Vertical Transition Line (Halfway point at 254px) */}
        <div style={{ top: LAYOUT.execution.yCenterRow1, height: LAYOUT.planning.yCenters[4] - LAYOUT.execution.yCenterRow1 }} 
             className="absolute left-[254px] w-px bg-ink -z-10" />
        {/* Horizontal Into Backlog Grooming (hit box at 410px) */}
        <div style={{ top: LAYOUT.execution.yCenterRow1 }} 
             className="absolute left-[254px] w-[156px] h-px bg-ink -z-10" />
        {/* Outflow from Execution (starts from 845px card edge) to Delivery Center (1096px) */}
        <div style={{ top: LAYOUT.execution.yCenterRow1 }} 
             className="absolute left-[845px] w-[251px] h-px bg-ink -z-10" />
        <div style={{ top: LAYOUT.execution.yCenterRow2 }} 
             className="absolute left-[845px] w-[251px] h-px bg-ink -z-10" />
        <div style={{ top: LAYOUT.execution.yCenterRow1, height: LAYOUT.execution.yCenterRow2 - LAYOUT.execution.yCenterRow1 }} 
             className="absolute left-[1096px] w-px bg-ink -z-10" />

      </div>
    </div>
  );
};
