import React from 'react';
import { 
  Database, 
  Cpu, 
  ShieldCheck, 
  Server, 
  CheckCircle, 
  Lock, 
  Share2, 
  HardDrive,
  Network,
  Users
} from 'lucide-react';

export default function PlatformArchitecture() {
  const features = [
    {
      icon: <Network className="w-6 h-6 text-teal-400" />,
      title: "Epic & Cerner Bi-Directional Connectors",
      description: "Direct HL7 FHIR v4 and SMART-on-FHIR APIs ingest real-time surgical schedules, add-on emergency cases, and procedure duration updates without manual entry.",
      badge: "FHIR R4 / HL7"
    },
    {
      icon: <Cpu className="w-6 h-6 text-sky-400" />,
      title: "On-Premises Edge Vision Appliance",
      description: "Inference runs locally on enterprise edge appliances installed inside the SPD. High-throughput optical auditing executes in < 0.6 seconds with zero cloud latency.",
      badge: "Air-Gapped Ready"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "HIPAA & SOC 2 Type II Certified",
      description: "Enterprise security architecture engineered for strict hospital IT governance. End-to-end AES-256 encryption at rest and in transit with zero PHI leakage.",
      badge: "SOC 2 Type II"
    },
    {
      icon: <Users className="w-6 h-6 text-teal-300" />,
      title: "Technician-First Frictionless UX",
      description: "Designed specifically to overcome SPD staff burnout. Technicians use simple overhead laser projection and instant green/red status lightbars without barcode juggling.",
      badge: "Zero-Training UI"
    },
  ];

  return (
    <section id="technology" className="py-24 bg-slate-900/90 dark:bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-teal-400 text-xs font-mono mb-4">
            <Server className="w-3.5 h-3.5" />
            <span>Enterprise Infrastructure & Governance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered for Strict Hospital IT &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-400">
              Clinical Reliability
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            SurgiSync deploys seamlessly alongside existing hospital health systems. 
            No overhaul of existing sterilization autoclaves or core EHR infrastructure required.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 relative group shadow-lg"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Enterprise Integration Architecture Diagram Box */}
        <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 relative overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-mono text-teal-400 uppercase tracking-wider">Interoperability Architecture</span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-3">
                Seamless Coexistence with Epic Hyperspace & Oracle Cerner
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Rather than replacing hospital ERPs or instrument tracking databases, SurgiSync operates as an active intelligence layer. 
                It listens to OR schedule changes in real-time, inspects physical trays with computer vision, and sends verified readiness tokens back to the surgeon's board.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
              <div className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-center">
                <div className="text-teal-400 font-bold text-sm">Epic</div>
                <div className="text-slate-400 text-[10px]">EHR Sync</div>
              </div>
              <div className="text-slate-600 font-bold">⇄</div>
              <div className="px-5 py-3 rounded-xl bg-teal-950 border border-teal-500 text-center shadow-lg shadow-teal-500/10">
                <div className="text-white font-bold text-sm">SurgiSync Kernel</div>
                <div className="text-teal-300 text-[10px]">Computer Vision & ML</div>
              </div>
              <div className="text-slate-600 font-bold">⇄</div>
              <div className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-center">
                <div className="text-sky-400 font-bold text-sm">SPD Autoclaves</div>
                <div className="text-slate-400 text-[10px]">Wash & Pack</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
