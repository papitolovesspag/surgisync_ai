import React from 'react';
import { 
  AlertTriangle, 
  Clock, 
  DollarSign, 
  TrendingDown, 
  XCircle, 
  CheckCircle, 
  Layers, 
  ArrowRight,
  ShieldAlert,
  ServerOff
} from 'lucide-react';

export default function ClinicalProblem() {
  return (
    <section id="problem" className="py-24 bg-slate-900/60 dark:bg-slate-950 relative border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>The Surgical Bottleneck & Financial Drain</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The Multi-Million Dollar Disconnect Between{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-amber-400 to-sky-400">
              OR Schedules and Sterile Supply
            </span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Operating Rooms represent the financial lifeblood of hospitals—generating over 60% of total revenue. 
            Yet legacy Sterile Processing Departments (SPD) remain an analog blindspot, costing health networks 
            millions in delayed procedures and expired inventory.
          </p>
        </div>

        {/* 3 Core Impact Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1 */}
          <div className="relative p-7 rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/60 border border-slate-700/60 shadow-lg group hover:border-rose-500/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-5 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-3xl font-extrabold text-white mb-2">$62 – $100+</div>
            <div className="text-sm font-semibold text-rose-400 uppercase tracking-wide font-mono mb-3">Cost Per Delayed OR Minute</div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Surgeries are routinely delayed or cancelled while surgical teams scramble for missing clamps, 
              dull blades, or backlogged autoclave trays. Every minute idle incinerates hospital operating margin.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative p-7 rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/60 border border-slate-700/60 shadow-lg group hover:border-amber-500/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
              <DollarSign className="w-6 h-6" />
            </div>
            <div className="text-3xl font-extrabold text-white mb-2">$3M – $5M</div>
            <div className="text-sm font-semibold text-amber-400 uppercase tracking-wide font-mono mb-3">Expired Implants & Supplies / Facility</div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Static, outdated surgeon preference cards cause over-ordering of specialized implants, sutures, and single-use kits 
              that sit on sterile holding shelves until expiration without dynamic demand feedback.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative p-7 rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/60 border border-slate-700/60 shadow-lg group hover:border-sky-500/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-5 group-hover:scale-110 transition-transform">
              <ServerOff className="w-6 h-6" />
            </div>
            <div className="text-3xl font-extrabold text-white mb-2">The EHR Blindspot</div>
            <div className="text-sm font-semibold text-sky-400 uppercase tracking-wide font-mono mb-3">Epic & Cerner Logistics Void</div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Hospital ERPs manage patient charts and schedules, but have zero real-time visibility into wash chamber cycles, 
              decontamination bottlenecks, or instrument integrity inside sealed packs.
            </p>
          </div>

        </div>

        {/* Head-to-Head Comparison: Legacy Manual Barcode vs SurgiSync Operational Intelligence */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl">
          <div className="px-6 py-4 bg-slate-800/80 border-b border-slate-700 flex items-center justify-between">
            <span className="font-mono text-sm font-semibold text-slate-300">OPERATIONAL WORKFLOW COMPARISON</span>
            <span className="text-xs font-mono text-teal-400">Clinical Impact Analysis</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            
            {/* Legacy Approach */}
            <div className="p-6 sm:p-8 space-y-5 bg-rose-950/10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-rose-500/20 text-rose-400">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Legacy SPD & Barcode Scans</h3>
                  <p className="text-xs text-rose-400/80 font-mono">Manual • High Friction • Reactive</p>
                </div>
              </div>

              <ul className="space-y-3.5 text-sm text-slate-400">
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Manual visual check:</strong> Technicians manually cross-check 100+ metal instruments against laminated paper count sheets. Human fatigue causes 4–7% error rates.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Static First-In-First-Out (FIFO) Autoclave:</strong> Trays washed in arrival order rather than prioritizing the emergency vascular case starting in 45 minutes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Frozen Preference Cards:</strong> Unused supplies opened and wasted routine to "play it safe", racking up millions in surgical scrap.</span>
                </li>
              </ul>
            </div>

            {/* SurgiSync Approach */}
            <div className="p-6 sm:p-8 space-y-5 bg-teal-950/10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-teal-500/20 text-teal-400">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">SurgiSync Intelligence Kernel</h3>
                  <p className="text-xs text-teal-400 font-mono">Automated • Touchless • Predictive</p>
                </div>
              </div>

              <ul className="space-y-3.5 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Instant Multimodal Vision:</strong> Overhead cameras verify 100+ instruments in under 3 seconds against 3D CAD specs, flagging micro-fractures and missing items before wrapping.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Multi-Agent Autoclave Dispatch:</strong> Reorders sterilization queues dynamically when an OR case runs long or an urgent trauma case is added to EHR.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Reinforcement Learning Cards:</strong> Dynamically optimizes preference cards per surgeon & procedure, reducing unneeded sterile openings by up to 34%.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
