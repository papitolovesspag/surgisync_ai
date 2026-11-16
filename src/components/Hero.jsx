import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Activity, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Clock, 
  TrendingUp, 
  Scan, 
  ChevronRight,
  Database
} from 'lucide-react';

export default function Hero() {
  const [activeOR, setActiveOR] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(100);

  const orSchedules = [
    {
      id: 'OR-04',
      procedure: 'Total Knee Arthroplasty',
      surgeon: 'Dr. V. Thorne, MD',
      scheduledTime: '08:30 AM',
      trayStatus: '100% CAD Verified',
      trayConfidence: '99.8%',
      instrumentsCount: 114,
      autoclaveQueue: 'Completed (Cycle #402)',
      wasteSaved: '$1,840.00',
      status: 'Ready for Incision',
      statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    },
    {
      id: 'OR-02',
      procedure: 'Minimally Invasive CABG',
      surgeon: 'Dr. R. Al-Mansoor, MD',
      scheduledTime: '09:15 AM',
      trayStatus: 'Vision Auditing (Station 3)',
      trayConfidence: '99.4%',
      instrumentsCount: 142,
      autoclaveQueue: 'Autoclave #1 (12m remaining)',
      wasteSaved: '$3,120.00',
      status: 'Prioritized in Queue',
      statusColor: 'text-sky-400 bg-sky-500/10 border-sky-500/20'
    },
    {
      id: 'OR-07',
      procedure: 'Anterior Cervical Discectomy',
      surgeon: 'Dr. S. Chen, MD',
      scheduledTime: '10:45 AM',
      trayStatus: 'Preference Card Dynamic Pack',
      trayConfidence: '99.9%',
      instrumentsCount: 88,
      autoclaveQueue: 'Pre-Vacuum Wash Staged',
      wasteSaved: '$940.00',
      status: 'RL Pack Optimized',
      statusColor: 'text-teal-400 bg-teal-500/10 border-teal-500/20'
    }
  ];

  // Periodic cycle through OR telemetry
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveOR((prev) => (prev + 1) % orSchedules.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [orSchedules.length]);

  const triggerManualScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          return 100;
        }
        return prev + 25;
      });
    }, 200);
  };

  const currentOR = orSchedules[activeOR];

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-teal-500/15 via-sky-500/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
      
      {/* Subtle Grid Backdrop */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Operational Status Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-800/80 dark:bg-slate-900/90 border border-slate-700/80 shadow-md backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span className="text-xs font-semibold text-slate-300 tracking-wide">
              Enterprise Surgical Readiness & Sterile Processing Intelligence
            </span>
            <span className="hidden sm:inline-block text-slate-600">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-teal-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              HIPAA & HL7/FHIR Ready
            </span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            Zero Missing Trays.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-sky-600 to-cyan-500 dark:from-teal-400 dark:via-sky-400 dark:to-cyan-300">
              Predictive Sterile Flow.
            </span>
            <br className="hidden sm:inline" /> Autonomous OR Readiness.
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
            SurgiSync bridges the high-stakes gap between the Operating Room and Sterile Processing. 
            Auditing 100+ surgical tools in seconds with computer vision, dynamically scheduling autoclave 
            queues, and eliminating millions in expired single-use implant waste.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-500 hover:to-sky-500 text-white font-semibold text-base shadow-lg shadow-teal-500/25 hover:shadow-teal-500/35 transition-all duration-200 group active:scale-95"
            >
              <span>Explore Interactive Architecture</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80 font-semibold text-base transition-all duration-200 shadow-sm"
            >
              <span>Calculate Facility ROI</span>
              <TrendingUp className="w-4 h-4 text-teal-500" />
            </a>
          </div>

          {/* Core Trust Indicators */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
            <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50">
              <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">60%+</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Hospital Revenue Protected</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50">
              <div className="text-xl sm:text-2xl font-bold text-teal-600 dark:text-teal-400">&lt; 3.0s</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">100+ Tool CAD Vision Audit</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50">
              <div className="text-xl sm:text-2xl font-bold text-sky-600 dark:text-sky-400">$3M–$5M</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Single-Use Waste Reduced</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50">
              <div className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400">0 min</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Missing Tray OR Idle Time</div>
            </div>
          </div>
        </div>

        {/* Live Interactive Telemetry Terminal Showcase */}
        <div className="relative max-w-5xl mx-auto">
          {/* Outer Frame with glow */}
          <div className="relative rounded-2xl bg-gradient-to-b from-slate-700/50 via-slate-800/50 to-slate-900/80 p-1 shadow-2xl backdrop-blur-xl border border-slate-700/60">
            
            {/* Header Bar of the Simulation Engine */}
            <div className="flex flex-wrap items-center justify-between px-5 py-3.5 bg-slate-900/95 dark:bg-slate-950/95 rounded-t-xl border-b border-slate-800 text-xs font-mono">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>
                <span className="text-slate-400 ml-2 font-medium">SURGISYNC_OPS // FACILITY_INTELLIGENCE_KERNEL</span>
              </div>

              <div className="flex items-center gap-3 mt-2 sm:mt-0">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-teal-400" />
                  EHR Feed: Epic Hyperspace (FHIR R4)
                </span>
                <span className="text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded text-[11px]">
                  LIVE CONNECTED
                </span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="bg-slate-950 p-5 sm:p-7 rounded-b-xl text-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Live OR Feed Selectors */}
              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  <span>Monitored Surgical Suites</span>
                  <span className="text-teal-400">Live Sync</span>
                </div>

                {orSchedules.map((item, idx) => {
                  const isSelected = activeOR === idx;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveOR(idx)}
                      className={`p-3.5 rounded-xl cursor-pointer transition-all border ${
                        isSelected 
                          ? 'bg-slate-900 border-teal-500/60 shadow-md shadow-teal-500/10' 
                          : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-sm font-bold text-white flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-teal-400 animate-pulse' : 'bg-slate-600'}`}></span>
                          {item.id}
                        </span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${item.statusColor}`}>
                          {item.status}
                        </span>
                      </div>
                      <div className="mt-1 text-xs text-slate-300 font-medium truncate">{item.procedure}</div>
                      <div className="mt-1 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                        <span>{item.surgeon}</span>
                        <span>{item.scheduledTime}</span>
                      </div>
                    </div>
                  );
                })}

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                  <span>SPD Station 04 Load</span>
                  <span className="font-mono text-emerald-400 font-semibold">68% (Optimal)</span>
                </div>
              </div>

              {/* Right Column: Active Suite Deep Telemetry */}
              <div className="lg:col-span-8 bg-slate-900/80 rounded-xl border border-slate-800/80 p-5 flex flex-col justify-between">
                
                {/* Header row of selected OR */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-white">{currentOR.procedure}</h3>
                        <span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20 text-xs font-mono">
                          {currentOR.id}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">
                        Lead: {currentOR.surgeon} • Target Incision: {currentOR.scheduledTime}
                      </p>
                    </div>

                    <button
                      onClick={triggerManualScan}
                      disabled={isScanning}
                      className="px-3 py-1.5 rounded-lg bg-teal-500/15 hover:bg-teal-500/25 border border-teal-500/30 text-teal-300 text-xs font-mono flex items-center gap-1.5 transition-colors disabled:opacity-50"
                    >
                      <Scan className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
                      <span>{isScanning ? 'Auditing CAD...' : 'Trigger Vision Audit'}</span>
                    </button>
                  </div>

                  {/* Telemetry Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 font-mono">
                    <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                      <div className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Scan className="w-3 h-3 text-teal-400" />
                        <span>Tray Vision Spec</span>
                      </div>
                      <div className="text-sm font-semibold text-emerald-400 mt-1 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{currentOR.trayConfidence} Match</span>
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">
                        {currentOR.instrumentsCount} instruments verified
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                      <div className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-sky-400" />
                        <span>Autoclave Flow</span>
                      </div>
                      <div className="text-sm font-semibold text-sky-300 mt-1 truncate">
                        {currentOR.autoclaveQueue}
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">
                        Dynamic queue priority #1
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                      <div className="text-[11px] text-slate-400 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-emerald-400" />
                        <span>RL Pack Savings</span>
                      </div>
                      <div className="text-sm font-semibold text-emerald-400 mt-1">
                        {currentOR.wasteSaved}
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">
                        Excess implants trimmed
                      </div>
                    </div>
                  </div>

                  {/* Visual Scanning Progress Bar */}
                  <div className="space-y-1.5 my-3">
                    <div className="flex justify-between text-[11px] font-mono text-slate-400">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                        Multimodal Camera Array (Overhead Station 03)
                      </span>
                      <span className="text-teal-400">{isScanning ? `${scanProgress}% Scanned` : 'Audit Complete (0.84s)'}</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-teal-500 to-sky-400 h-full rounded-full transition-all duration-300"
                        style={{ width: `${scanProgress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Bottom status alert banner */}
                <div className="mt-2 p-3 rounded-lg bg-teal-950/40 border border-teal-800/50 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span className="text-slate-300">
                      Tray <strong className="text-white">TK-ORTHO-09</strong> sealed. Zero missing clamps or micro-fractures detected.
                    </span>
                  </div>
                  <a href="#how-it-works" className="text-teal-400 hover:text-teal-300 font-mono text-[11px] flex items-center gap-1 flex-shrink-0">
                    <span>Inspect Algorithm</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
