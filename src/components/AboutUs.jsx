import React from 'react';
import { 
  Target, 
  ShieldCheck, 
  HeartHandshake, 
  Award, 
  User, 
  Mail, 
  Quote, 
  Sparkles,
  CheckCircle2,
  Stethoscope
} from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-slate-900/50 dark:bg-slate-900 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-teal-400 text-xs font-mono mb-4">
            <Target className="w-3.5 h-3.5" />
            <span>Mission & Leadership</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Built to Eliminate Operational Waste in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-400">
              High-Stakes Surgical Care
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            SurgiSync was founded on a singular conviction: operating room delays caused by missing sterile instruments 
            and multi-million dollar expired supply waste are entirely preventable operational failures.
          </p>
        </div>

        {/* Mission & Services Statement Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          {/* Mission Statement */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-teal-400 text-xs font-mono mb-4 uppercase tracking-wider">
                <Quote className="w-4 h-4" />
                <span>Our Core Mission</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-snug">
                "To seamlessly connect surgical demand with sterile logistics—ensuring every operating suite opens on time with 100% instrument precision."
              </h3>

              <div className="space-y-4 text-sm text-slate-400 leading-relaxed">
                <p>
                  Sterile Processing Departments (SPDs) are the unsung engine of hospital revenue, cleaning and assembling tens of thousands of delicate surgical instruments every month. Yet they have been forced to rely on manual paper counts and disjointed barcode scans.
                </p>
                <p>
                  SurgiSync delivers the missing intelligence kernel: pairing high-throughput computer vision at assembly stations with multi-agent simulation that models autoclave throughput directly against live hospital EHR surgical calendars.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div>
                <span className="text-slate-500 block">Core Focus</span>
                <span className="text-white font-semibold">Healthcare × Logistics</span>
              </div>
              <div>
                <span className="text-slate-500 block">Surgical Accuracy</span>
                <span className="text-teal-400 font-semibold">99.8% CAD Match</span>
              </div>
              <div>
                <span className="text-slate-500 block">Technician UX</span>
                <span className="text-sky-400 font-semibold">Touchless Vision</span>
              </div>
            </div>
          </div>

          {/* Overall Objectives & Core Services */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-800 flex flex-col justify-between shadow-xl">
            <div>
              <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-4">
                What We Deliver
              </div>

              <h3 className="text-xl font-bold text-white mb-6">
                Our Three Operational Capabilities
              </h3>

              <div className="space-y-5 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center flex-shrink-0 font-bold font-mono">
                    01
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Multimodal Computer Vision Auditing</h4>
                    <p className="text-slate-400 mt-0.5">Instant optical inspection verifying 100+ surgical instruments against master CAD specifications in under 3 seconds.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0 font-bold font-mono">
                    02
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Dynamic Autoclave Flow Scheduling</h4>
                    <p className="text-slate-400 mt-0.5">Multi-agent simulation predicting SPD turnaround bottlenecks and re-prioritizing wash and sterilization queues based on EHR case delays.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 font-bold font-mono">
                    03
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Reinforcement Learning Preference Cards</h4>
                    <p className="text-slate-400 mt-0.5">Dynamic trimming of over-ordered implants, specialty sutures, and single-use supplies to halt multi-million dollar hospital scrap.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Full compliance with FDA 21 CFR Part 11 & HIPAA standards</span>
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* SOLE FOUNDER SECTION (STRICTLY ONE FOUNDER) */}
        {/* ============================================================== */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            
            {/* Founder Photo */}
            <div className="flex-shrink-0 text-center">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-2 border-teal-500/50 shadow-2xl bg-slate-900 group">
                <img 
                  src="/founder-henry.jpg" 
                  alt="Henry - Founder & CEO of SurgiSync" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"></div>
                {/* Subtle border shine */}
                <div className="absolute inset-0 border border-teal-400/20 rounded-2xl pointer-events-none"></div>
              </div>

              {/* Status Pill */}
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Executive Office</span>
              </div>
            </div>

            {/* Founder Biography & Details */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20 text-xs font-mono mb-2">
                Executive Leadership
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Henry
              </h3>

              <div className="text-sm font-semibold text-teal-400 font-mono mt-0.5 mb-4">
                Founder & Chief Executive Officer
              </div>

              <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
                <p>
                  Henry is the Founder and Chief Executive Officer of SurgiSync. Driven by a deep commitment to systemic efficiency in high-stakes clinical healthcare environments, Henry conceptualized and architected SurgiSync to bridge the critical operational divide between surgical operating suites and Sterile Processing Departments (SPD).
                </p>
                <p>
                  Specializing in the intersection of healthcare operations, computer vision automation, and dynamic supply chain intelligence, he leads SurgiSync’s mission to ensure that zero surgeries are delayed or cancelled due to missing instruments, while simultaneously reclaiming millions of dollars in preventable hospital inventory waste.
                </p>
              </div>

              {/* Direct Leadership Pillars */}
              <div className="mt-6 pt-5 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Clinical Patient Safety First</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Empowering Sterile Staff</span>
                </div>
              </div>

              {/* Social / Contact action */}
              <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <a
                  href="mailto:henry@surgisync.site"
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono border border-slate-700 flex items-center gap-2 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-teal-400" />
                  <span>henry@surgisync.site</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
