import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  ShieldCheck, 
  CheckCircle2, 
  Hospital, 
  MessageSquare,
  Sparkles,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    workEmail: '',
    facilityName: '',
    orSuiteCount: '8-16 ORs',
    role: 'Surgical Services Director',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 }
        });
      } catch (err) {
        // ignore if confetti fails
      }
    }, 700);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-slate-100 relative">
      
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Facility Inquiry & Clinical Briefing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Initiate Your Hospital's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-400">
              Sterile Logistics Audit
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Connect directly with our clinical workflow engineering team to evaluate your Sterile Processing 
            throughput, CAD tray compatibility, and projected delay reductions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          
          {/* Left Column: ONLY ONE Email and ONE Phone Number (Strict Requirement) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Direct Contact Channels</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Our executive and clinical implementation team responds within 24 business hours to verified hospital and healthcare systems.
                </p>
              </div>

              {/* Only ONE Business Email */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">Official Contact Email</div>
                  <a 
                    href="mailto:henry@surgisync.site" 
                    className="text-base font-semibold text-white hover:text-teal-400 transition-colors block mt-0.5"
                  >
                    henry@surgisync.site
                  </a>
                  <div className="text-[10px] text-teal-400 font-mono mt-1">Verified Clinical Inquiries</div>
                </div>
              </div>

              {/* Only ONE Business Phone Number */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">Direct Business Phone</div>
                  <a 
                    href="tel:+2348063204035" 
                    className="text-base font-semibold text-white hover:text-sky-400 transition-colors block mt-0.5"
                  >
                    +234 806 320 4035
                  </a>
                  <div className="text-[10px] text-teal-400 font-mono mt-1">Executive Line</div>
                </div>
              </div>

              {/* Assurance Box */}
              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-teal-400" />
                  <span>Rapid response guarantee: &lt; 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  <span>HIPAA compliant correspondence & mutual NDA ready</span>
                </div>
              </div>
            </div>

            {/* Quick Pilot Evaluation Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-teal-950/40 to-slate-900 border border-teal-500/20 text-xs">
              <span className="font-mono text-teal-400 font-bold block mb-1">HOSPITAL PILOT PROGRAM</span>
              <p className="text-slate-300 leading-relaxed">
                We deploy a non-intrusive 60-day parallel vision trial at 2 active SPD pack stations to validate CAD precision with zero disruption to your daily surgical volume.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Hospital Inquiry Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Received Successfully</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. A SurgiSync Clinical Solutions Director has been assigned to your facility and will deliver your preliminary SPD assessment within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        workEmail: '',
                        facilityName: '',
                        orSuiteCount: '8-16 ORs',
                        role: 'Surgical Services Director',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Request Hospital Consultation</h3>
                  <p className="text-xs text-slate-400 mb-6">
                    Fill out the parameters below to configure a facility feasibility assessment.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Katherine Vance, MD"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Hospital / Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="kvance@healthsystem.org"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Facility / Health System *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Metro Health Medical Center"
                      value={formData.facilityName}
                      onChange={(e) => setFormData({ ...formData, facilityName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Operating Suites Count
                    </label>
                    <select
                      value={formData.orSuiteCount}
                      onChange={(e) => setFormData({ ...formData, orSuiteCount: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors"
                    >
                      <option value="1-7 ORs">1 - 7 OR Suites (Ambulatory)</option>
                      <option value="8-16 ORs">8 - 16 OR Suites (Regional)</option>
                      <option value="17-30 ORs">17 - 30 OR Suites (Large Acute)</option>
                      <option value="30+ ORs">30+ OR Suites (Health System)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Role in Surgical Operations
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors"
                  >
                    <option value="Surgical Services Director">Surgical Services Director / VP</option>
                    <option value="SPD Manager">Sterile Processing (SPD) Manager</option>
                    <option value="Chief Medical Officer">Chief Medical Officer / Surgeon</option>
                    <option value="Chief Operating Officer">Chief Operating Officer (COO)</option>
                    <option value="Hospital CIO / IT Director">Hospital CIO / Health IT Director</option>
                    <option value="Supply Chain Executive">Clinical Supply Chain Director</option>
                    <option value="Other">Other Operational Stakeholder</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Current Bottlenecks & Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe specific challenges with instrument tray turnover, autoclave bottlenecks, or EHR scheduling synchronization..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-teal-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-500 via-sky-500 to-teal-600 hover:from-teal-400 hover:to-sky-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-teal-500/25 transition-all duration-200 disabled:opacity-50"
                >
                  <Send className={`w-4 h-4 ${isSubmitting ? 'animate-bounce' : ''}`} />
                  <span>{isSubmitting ? 'Transmitting Secure Request...' : 'Schedule Hospital Briefing'}</span>
                </button>

                <p className="text-[11px] text-center text-slate-500 font-mono pt-1">
                  Protected under mutual Non-Disclosure Agreement (NDA). No PHI required.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
