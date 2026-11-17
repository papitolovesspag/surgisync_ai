import React from 'react';
import Logo from './Logo';
import { ArrowUp, ShieldCheck, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Logo textSize="text-2xl" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Predictive surgical readiness and sterile supply intelligence. 
              Bridging the gap between the Operating Room schedule and Sterile Processing throughput.
            </p>
            <div className="flex items-center gap-2 text-teal-400 text-xs font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span>HIPAA Compliant • SOC 2 Type II Ready • HL7 / FHIR</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-slate-200 font-semibold">
              Platform
            </div>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-teal-400 transition-colors">Overview</a></li>
              <li><a href="#problem" className="hover:text-teal-400 transition-colors">The Clinical Problem</a></li>
              <li><a href="#how-it-works" className="hover:text-teal-400 transition-colors">How It Works</a></li>
              <li><a href="#technology" className="hover:text-teal-400 transition-colors">Platform Architecture</a></li>
              <li><a href="#pricing" className="hover:text-teal-400 transition-colors">Pricing & ROI Model</a></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-slate-200 font-semibold">
              Company
            </div>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#about" className="hover:text-teal-400 transition-colors">Mission Statement</a></li>
              <li><a href="#about" className="hover:text-teal-400 transition-colors">Executive Leadership</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition-colors">Schedule Consultation</a></li>
            </ul>
          </div>

          {/* Col 4: Official Contact Recapped */}
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-slate-200 font-semibold">
              Official Contact
            </div>
            <div className="space-y-2 font-mono text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                <a href="mailto:henry@surgisync.site" className="hover:text-teal-400 transition-colors truncate">
                  henry@surgisync.site
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <a href="tel:+2348063204035" className="hover:text-sky-400 transition-colors">
                  +234 806 320 4035
                </a>
              </div>
              <div className="text-[11px] text-slate-500 pt-1">
                Executive & Operations Support
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-xs">
            © {new Date().getFullYear()} SurgiSync Health Systems Inc. All rights reserved. Clinical Enterprise SaaS.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-500 text-[11px]">Not affiliated with EHR vendors. Epic and Cerner are registered trademarks of their respective owners.</span>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors flex items-center gap-1"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
