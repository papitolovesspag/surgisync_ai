import React, { useState, useEffect } from 'react';
import { 
  Scan, 
  Cpu, 
  Activity, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Play, 
  Pause, 
  RotateCcw, 
  Flame, 
  Sparkles, 
  TrendingUp, 
  ArrowRight, 
  Sliders, 
  Check, 
  Eye, 
  Server, 
  ShieldCheck,
  Zap,
  Calendar,
  AlertTriangle
} from 'lucide-react';

export default function HowItWorksSimulator() {
  const [activeTab, setActiveTab] = useState(0); // 0: Tray Vision, 1: Autoclave Flow, 2: RL Preference Cards
  const [isPlaying, setIsPlaying] = useState(true);

  // Phase 1 State: Tray Vision
  const [hasAnomaly, setHasAnomaly] = useState(false);
  const [scanPosition, setScanPosition] = useState(0);

  // Phase 2 State: Autoclave Simulation Scenario
  const [selectedScenario, setSelectedScenario] = useState('standard');
  const [autoclaveStep, setAutoclaveStep] = useState(2);

  // Phase 3 State: RL Card Optimizer
  const [caseVolume, setCaseVolume] = useState(120);

  // Cycle scan animation line
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setScanPosition((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 50);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Tab auto rotation if playing
  useEffect(() => {
    if (!isPlaying) return;
    const tabInterval = setInterval(() => {
      // Optional slow tab rotation or keep on user command
    }, 15000);
    return () => clearInterval(tabInterval);
  }, [isPlaying]);

  const trayTools = [
    { 
      id: 'tool-1', 
      name: 'No. 4 Scalpel Handle (Blade #10)', 
      spec: 'CAD: ISO-7153-1-A', 
      confidence: '99.8%', 
      status: 'VERIFIED',
      top: '18%', 
      left: '12%', 
      width: '18%', 
      height: '34%' 
    },
    { 
      id: 'tool-2', 
      name: 'Mayo-Hegar Needle Holder 8"', 
      spec: 'CAD: ASTM-F899-CR', 
      confidence: hasAnomaly ? '0.0%' : '99.9%', 
      status: hasAnomaly ? 'MISSING_ANOMALY' : 'VERIFIED',
      top: '18%', 
      left: '36%', 
      width: '26%', 
      height: '38%' 
    },
    { 
      id: 'tool-3', 
      name: 'Weitlaner Self-Retaining Retractor', 
      spec: 'CAD: ASTM-F899-RET', 
      confidence: '99.4%', 
      status: 'VERIFIED',
      top: '18%', 
      left: '68%', 
      width: '24%', 
      height: '36%' 
    },
    { 
      id: 'tool-4', 
      name: 'Metzenbaum Curved Dissecting Scissors', 
      spec: 'CAD: ISO-7153-1-C', 
      confidence: '99.7%', 
      status: 'VERIFIED',
      top: '60%', 
      left: '15%', 
      width: '24%', 
      height: '32%' 
    },
    { 
      id: 'tool-5', 
      name: 'Russian Tissue Micro-Forceps 6"', 
      spec: 'CAD: ASTM-F899-TF', 
      confidence: '99.6%', 
      status: 'VERIFIED',
      top: '60%', 
      left: '46%', 
      width: '20%', 
      height: '32%' 
    },
    { 
      id: 'tool-6', 
      name: 'Volkmann Bone Curette Double-Ended', 
      spec: 'CAD: ASTM-F899-BC', 
      confidence: '99.9%', 
      status: 'VERIFIED',
      top: '60%', 
      left: '72%', 
      width: '20%', 
      height: '32%' 
    },
  ];

  const autoclaveQueues = {
    standard: [
      { id: 'BATCH-201', procedure: 'OR-04 Total Knee Arthroplasty', chamber: 'Chamber 1', timeRemaining: 'Completed', status: 'Ready', priority: 'High', color: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400' },
      { id: 'BATCH-202', procedure: 'OR-02 Robotic Prostatectomy', chamber: 'Chamber 2', timeRemaining: '14 min left', status: 'Sterilizing (134°C Steam)', priority: 'Standard', color: 'border-sky-500/50 bg-sky-500/10 text-sky-400' },
      { id: 'BATCH-203', procedure: 'OR-07 Spinal Fusion Tray', chamber: 'Chamber 3', timeRemaining: 'Pre-Vacuum Purge', status: 'Queued Next', priority: 'Standard', color: 'border-slate-700 bg-slate-800/80 text-slate-300' },
    ],
    emergency: [
      { id: 'BATCH-911', procedure: 'EMERGENCY: OR-01 Trauma Thoracotomy', chamber: 'Chamber 1', timeRemaining: 'Accelerated Pre-Emption', status: 'PRIORITY_OVERRIDE', priority: 'CRITICAL', color: 'border-rose-500/80 bg-rose-500/20 text-rose-300' },
      { id: 'BATCH-201', procedure: 'OR-04 Total Knee Arthroplasty', chamber: 'Chamber 2', timeRemaining: 'Re-routed (0m delay)', status: 'Active Steam', priority: 'High', color: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400' },
      { id: 'BATCH-202', procedure: 'OR-02 Robotic Prostatectomy', chamber: 'Chamber 3', timeRemaining: 'Rescheduled +10m', status: 'Queue Adjusted', priority: 'Standard', color: 'border-amber-500/50 bg-amber-500/10 text-amber-400' },
    ],
    delay: [
      { id: 'BATCH-204', procedure: 'OR-05 Craniotomy (Moved Up)', chamber: 'Chamber 1', timeRemaining: '18 min left', status: 'Advanced in Queue', priority: 'High', color: 'border-sky-500/50 bg-sky-500/10 text-sky-400' },
      { id: 'BATCH-201', procedure: 'OR-04 Case Delayed +45m by EHR', chamber: 'Holding Buffer', timeRemaining: 'Held at Pre-Wash', status: 'Dynamic Cool-Hold', priority: 'Preserved', color: 'border-amber-500/50 bg-amber-500/10 text-amber-400' },
      { id: 'BATCH-202', procedure: 'OR-02 Robotic Prostatectomy', chamber: 'Chamber 2', timeRemaining: '8 min left', status: 'Sterilizing', priority: 'Standard', color: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400' },
    ]
  };

  return (
    <section id="how-it-works" className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden">
      
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Operational Simulator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            How SurgiSync Operates in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-sky-400 to-cyan-300">
              Real-Time Clinical Workflow
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Experience our 3 core architectural pillars. Explore how computer vision, multi-agent queuing, 
            and reinforcement learning eliminate sterile supply friction before a patient enters the surgical suite.
          </p>
        </div>

        {/* 3-Tab Navigator */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-10 max-w-4xl mx-auto bg-slate-900/90 p-2 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-md">
          <button
            onClick={() => setActiveTab(0)}
            className={`w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
              activeTab === 0
                ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg shadow-teal-500/20 font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Scan className="w-4 h-4 text-teal-300" />
            <span>1. Multimodal Tray Vision</span>
          </button>

          <button
            onClick={() => setActiveTab(1)}
            className={`w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
              activeTab === 1
                ? 'bg-gradient-to-r from-sky-600 to-sky-700 text-white shadow-lg shadow-sky-500/20 font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Activity className="w-4 h-4 text-sky-300" />
            <span>2. Dynamic SPD Autoclave Flow</span>
          </button>

          <button
            onClick={() => setActiveTab(2)}
            className={`w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
              activeTab === 2
                ? 'bg-gradient-to-r from-cyan-600 to-teal-700 text-white shadow-lg shadow-cyan-500/20 font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Sliders className="w-4 h-4 text-cyan-300" />
            <span>3. RL Preference Card Optimizer</span>
          </button>
        </div>

        {/* Main Display Sandbox */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl p-6 sm:p-8 lg:p-10 relative">
          
          {/* ============================================================== */}
          {/* TAB 1: MULTIMODAL TRAY VISION AUDITING */}
          {/* ============================================================== */}
          {activeTab === 0 && (
            <div className="space-y-8 animate-in fade-in duration-300">
              
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-teal-500/10 text-teal-300 border border-teal-500/30 text-xs font-mono">
                      STATION-04 // CAM-ARRAY-TOP
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Overhead Computer Vision Pack Auditing
                    </h3>
                  </div>
                  <p className="text-sm text-slate-400 mt-1 max-w-2xl">
                    High-resolution multimodal cameras visually cross-check 100+ surgical instruments against master CAD specifications in under 3 seconds.
                  </p>
                </div>

                {/* Interactive Controls */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setHasAnomaly(!hasAnomaly)}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all border flex items-center gap-2 ${
                      hasAnomaly
                        ? 'bg-rose-500 text-white border-rose-400 shadow-lg shadow-rose-500/25 animate-pulse'
                        : 'bg-slate-800 text-slate-300 hover:text-white border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>{hasAnomaly ? 'Defect Mode Active: Missing Clamp' : 'Simulate Missing Instrument Defect'}</span>
                  </button>

                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
                    title={isPlaying ? "Pause Laser Scan" : "Resume Laser Scan"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-teal-400" />}
                  </button>
                </div>
              </div>

              {/* Simulated Tray Container */}
              <div className="relative rounded-2xl bg-slate-950 border-2 border-slate-800 p-6 sm:p-8 min-h-[420px] overflow-hidden select-none">
                
                {/* Simulated Metal Tray Grid & Texture */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
                
                {/* Stainless Steel Tray Rim */}
                <div className="absolute inset-2 sm:inset-4 rounded-xl border border-slate-700/60 pointer-events-none"></div>

                {/* Moving Animated Laser Scan Beam */}
                <div 
                  className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent shadow-[0_0_15px_#2dd4bf] pointer-events-none transition-all duration-75 z-20"
                  style={{ top: `${scanPosition}%` }}
                >
                  <div className="absolute right-6 -top-5 text-[10px] font-mono text-teal-300 bg-slate-900/90 px-2 py-0.5 rounded border border-teal-500/40">
                    CAD RAY // {(scanPosition * 1.8).toFixed(1)}mm
                  </div>
                </div>

                {/* Instruments on Tray with Bounding Boxes */}
                <div className="relative w-full h-80 sm:h-96">
                  {trayTools.map((tool) => {
                    const isError = tool.status === 'MISSING_ANOMALY';
                    return (
                      <div
                        key={tool.id}
                        className={`absolute rounded-xl transition-all duration-300 p-2 flex flex-col justify-between border ${
                          isError
                            ? 'border-rose-500 bg-rose-950/40 shadow-lg shadow-rose-500/20 animate-pulse'
                            : 'border-teal-500/40 bg-slate-900/70 hover:border-teal-400 hover:bg-slate-900/90'
                        }`}
                        style={{
                          top: tool.top,
                          left: tool.left,
                          width: tool.width,
                          height: tool.height,
                        }}
                      >
                        {/* Tool HUD Box Header */}
                        <div className="flex items-center justify-between text-[10px] font-mono">
                          <span className={isError ? 'text-rose-400 font-bold' : 'text-teal-400'}>
                            {tool.id.toUpperCase()}
                          </span>
                          <span className={`px-1.5 py-0.2 rounded ${isError ? 'bg-rose-500 text-white font-bold' : 'text-slate-400 bg-slate-800'}`}>
                            {tool.confidence}
                          </span>
                        </div>

                        {/* Center Icon/Representation */}
                        <div className="flex flex-col items-center justify-center my-auto">
                          {isError ? (
                            <div className="text-center text-rose-400">
                              <AlertCircle className="w-8 h-8 mx-auto mb-1 animate-bounce" />
                              <span className="text-[11px] font-bold font-mono tracking-tight">MISSING ITEM</span>
                            </div>
                          ) : (
                            <div className="text-center text-slate-300">
                              <div className="w-12 sm:w-16 h-1.5 bg-slate-400/60 rounded-full mx-auto mb-1"></div>
                              <span className="text-[10px] sm:text-xs font-semibold block truncate max-w-[140px]">
                                {tool.name}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Footer Spec Label */}
                        <div className="text-[9px] font-mono text-slate-400 truncate flex items-center justify-between">
                          <span>{tool.spec}</span>
                          {!isError && <CheckCircle2 className="w-3 h-3 text-teal-400" />}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Station Status Bottom Overlay */}
                <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-xs">
                    <span className={`w-2.5 h-2.5 rounded-full ${hasAnomaly ? 'bg-rose-500 animate-ping' : 'bg-emerald-500'}`}></span>
                    <span className="font-mono text-slate-300">
                      Audit Result: {hasAnomaly ? (
                        <strong className="text-rose-400">FAILED — MISSING CLAMP AT SLOT 2. STERILE SEAL INTERLOCKED.</strong>
                      ) : (
                        <strong className="text-emerald-400">114/114 INSTRUMENTS VERIFIED (0.64s). READY FOR STERILIZATION.</strong>
                      )}
                    </span>
                  </div>

                  <div className="text-[11px] font-mono text-slate-400">
                    Spatial Resolution: <span className="text-teal-400">0.08mm</span> • CAD Tolerance: <span className="text-teal-400">±0.2%</span>
                  </div>
                </div>

              </div>

              {/* Explanatory Technical Deep Dive Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="text-teal-400 font-mono text-xs mb-1 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Sub-Millimeter Edge Geometry
                  </div>
                  <p className="text-xs text-slate-400">
                    Identifies microscopic blade nicks, bent retractor teeth, and jaw misalignment that cause intraoperative failure.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="text-sky-400 font-mono text-xs mb-1 font-semibold flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    Zero Technician Barcode Lag
                  </div>
                  <p className="text-xs text-slate-400">
                    No individual tool barcode scanning required. Assembly technicians place the loaded tray under the camera array for instant pass/fail validation.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="text-emerald-400 font-mono text-xs mb-1 font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Automated Digital Certificate
                  </div>
                  <p className="text-xs text-slate-400">
                    Generates an unalterable digital audit log attached to the patient's EHR surgical encounter before entering the autoclave.
                  </p>
                </div>
              </div>

            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 2: DYNAMIC SPD AUTOCLAVE QUEUE PREDICTION */}
          {/* ============================================================== */}
          {activeTab === 1 && (
            <div className="space-y-8 animate-in fade-in duration-300">
              
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-sky-500/10 text-sky-300 border border-sky-500/30 text-xs font-mono">
                      AUTOCLAVE_MULTI_AGENT_SIM
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Predictive SPD Turnaround & Autoclave Queue Orchestration
                    </h3>
                  </div>
                  <p className="text-sm text-slate-400 mt-1 max-w-2xl">
                    Autonomous multi-agent simulation continuously models wash, ultrasonic, autoclave, and cool-down bottlenecks 
                    in sync with dynamic OR schedule shifts.
                  </p>
                </div>

                {/* Scenario Trigger Buttons */}
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setSelectedScenario('standard')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-colors ${
                      selectedScenario === 'standard'
                        ? 'bg-sky-600 text-white border-sky-500'
                        : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                    }`}
                  >
                    Nominal Schedule
                  </button>

                  <button
                    onClick={() => setSelectedScenario('emergency')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-colors ${
                      selectedScenario === 'emergency'
                        ? 'bg-rose-600 text-white border-rose-500 shadow-md shadow-rose-500/20'
                        : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                    }`}
                  >
                    + Urgent Trauma Case
                  </button>

                  <button
                    onClick={() => setSelectedScenario('delay')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-colors ${
                      selectedScenario === 'delay'
                        ? 'bg-amber-600 text-white border-amber-500'
                        : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                    }`}
                  >
                    OR Case Prolongation (+45m)
                  </button>
                </div>
              </div>

              {/* Dynamic Queue Visualization */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {autoclaveQueues[selectedScenario].map((item, index) => (
                  <div
                    key={item.id}
                    className={`p-5 rounded-2xl border transition-all duration-300 relative ${item.color} shadow-lg`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-3">
                      <span className="font-bold flex items-center gap-1.5">
                        <Flame className="w-3.5 h-3.5 text-amber-400" />
                        {item.chamber}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-black/40 font-semibold border border-white/10">
                        {item.priority}
                      </span>
                    </div>

                    <div className="font-semibold text-white text-base mb-1">{item.procedure}</div>
                    <div className="text-xs text-slate-300 font-mono mb-4">{item.id}</div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">Queue Status:</span>
                      <span className="font-bold">{item.status}</span>
                    </div>

                    <div className="mt-2 text-xs font-mono text-slate-300 flex items-center justify-between">
                      <span className="text-slate-400">Turnaround ETA:</span>
                      <span className="text-teal-300 font-bold">{item.timeRemaining}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Live Multi-Stage Progression Timeline */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-xs font-mono uppercase text-slate-400 mb-4 tracking-wider">
                  Live Stage Logistics Pipeline
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center text-xs font-mono">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-slate-400 mb-1">1. Decon Bay</div>
                    <div className="text-emerald-400 font-bold">14 Trays Clear</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-slate-400 mb-1">2. Ultrasonic</div>
                    <div className="text-sky-400 font-bold">Cycle 12 Running</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-teal-500/50 bg-teal-950/20">
                    <div className="text-teal-400 mb-1">3. Vision Audit</div>
                    <div className="text-white font-bold">0.64s Validation</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/40 bg-amber-950/20">
                    <div className="text-amber-400 mb-1">4. Autoclave</div>
                    <div className="text-white font-bold">3 Batches Active</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 col-span-2 sm:col-span-1">
                    <div className="text-slate-400 mb-1">5. OR Staged</div>
                    <div className="text-emerald-400 font-bold">100% On-Time</div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 3: RL PREFERENCE CARD OPTIMIZER */}
          {/* ============================================================== */}
          {activeTab === 2 && (
            <div className="space-y-8 animate-in fade-in duration-300">
              
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-teal-500/10 text-teal-300 border border-teal-500/30 text-xs font-mono">
                      REINFORCEMENT_LEARNING_ENGINE
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Dynamic Preference Card & Supply Pack Optimizer
                    </h3>
                  </div>
                  <p className="text-sm text-slate-400 mt-1 max-w-2xl">
                    Reinforcement learning algorithms dynamically trim over-ordered implants, specialty sutures, and single-use supplies 
                    without ever endangering clinical preparedness.
                  </p>
                </div>

                {/* Case Volume Slider Controller */}
                <div className="w-full lg:w-72 bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <div className="flex justify-between text-xs font-mono mb-1.5 text-slate-300">
                    <span>Monthly Surgeries:</span>
                    <span className="text-teal-400 font-bold">{caseVolume} cases</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="400"
                    step="10"
                    value={caseVolume}
                    onChange={(e) => setCaseVolume(Number(e.target.value))}
                    className="w-full accent-teal-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Side-by-Side Preference Pack Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Legacy Card */}
                <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                      LEGACY STATIC PREFERENCE CARD
                    </span>
                    <span className="text-xs text-rose-400 font-mono font-semibold">High Scrap Rate</span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2">Total Knee Arthroplasty (Standard)</h4>
                  <p className="text-xs text-slate-400 mb-6">
                    Cards untouched for 3+ years. Pack contains redundant suture packs and redundant trial implants "just in case".
                  </p>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                      <span className="text-slate-400">Total Pack Items:</span>
                      <span className="text-white font-bold">78 Items</span>
                    </div>
                    <div className="flex justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                      <span className="text-slate-400">Average Unopened / Discarded:</span>
                      <span className="text-rose-400 font-bold">24 Items (31% Waste)</span>
                    </div>
                    <div className="flex justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                      <span className="text-slate-400">Wasted Single-Use Cost / Case:</span>
                      <span className="text-rose-400 font-bold">$1,840.00</span>
                    </div>
                  </div>
                </div>

                {/* SurgiSync RL Card */}
                <div className="p-6 rounded-2xl bg-teal-950/20 border border-teal-500/40 shadow-xl shadow-teal-500/5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">
                      SURGISYNC DYNAMIC RL PACK
                    </span>
                    <span className="text-xs text-emerald-400 font-mono font-semibold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> 99.98% Confidence
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2">Total Knee Arthroplasty (Dynamic)</h4>
                  <p className="text-xs text-slate-400 mb-6">
                    Adjusted automatically based on surgeon historical usage patterns, implant inventory longevity, and patient BMI profile.
                  </p>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                      <span className="text-slate-400">Optimized Pack Items:</span>
                      <span className="text-white font-bold">54 Items</span>
                    </div>
                    <div className="flex justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                      <span className="text-slate-400">Clinical Utilization Rate:</span>
                      <span className="text-emerald-400 font-bold">98.6% (0 Unnecessary Openings)</span>
                    </div>
                    <div className="flex justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                      <span className="text-slate-400">Single-Use Waste Saved / Case:</span>
                      <span className="text-emerald-400 font-bold">$1,480.00 Saved</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Dynamic Cumulative Annual Savings Output */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-teal-950/50 via-slate-900 to-sky-950/50 border border-teal-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <div className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-1">
                    Projected Facility Savings Based on {caseVolume} monthly cases
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white">
                    ${((caseVolume * 1480 * 12)).toLocaleString()}
                    <span className="text-sm font-normal text-slate-400 ml-2">/ year saved in supply scrap</span>
                  </div>
                </div>

                <a
                  href="#pricing"
                  className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all duration-200 flex-shrink-0 flex items-center gap-2"
                >
                  <span>Model Your Hospital ROI</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
