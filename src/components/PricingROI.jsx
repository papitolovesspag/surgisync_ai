import React, { useState } from 'react';
import { 
  Check, 
  HelpCircle, 
  ArrowRight, 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  ShieldCheck, 
  Building2, 
  Hospital, 
  Network 
} from 'lucide-react';

export default function PricingROI() {
  const [isAnnual, setIsAnnual] = useState(true);

  // ROI Calculator Sliders
  const [orCount, setOrCount] = useState(14);
  const [casesPerDay, setCasesPerDay] = useState(3.5);
  const [delayMinutesSaved, setDelayMinutesSaved] = useState(12);

  // Calculations:
  // Cost per OR minute: $85 standard
  // 250 operating days per year
  const totalAnnualCases = Math.round(orCount * casesPerDay * 250);
  const delayMinutesAverted = Math.round(totalAnnualCases * (delayMinutesSaved / 60) * 60);
  const annualDelaySavings = Math.round(delayMinutesAverted * 85);
  // Average single-use supply scrap saved per case: $340
  const annualScrapSavings = Math.round(totalAnnualCases * 340);
  const totalAnnualBenefit = annualDelaySavings + annualScrapSavings;

  // Selected estimated tier based on OR count
  const estimatedAnnualCost = orCount <= 8 ? 65000 : orCount <= 24 ? 140000 : 240000;
  const netRoi = totalAnnualBenefit - estimatedAnnualCost;
  const roiMultiple = (totalAnnualBenefit / estimatedAnnualCost).toFixed(1);

  const pricingTiers = [
    {
      name: "Ambulatory & Community",
      subtitle: "For independent ASCs & community surgical facilities",
      icon: <Building2 className="w-5 h-5 text-teal-400" />,
      orLimit: "Up to 8 Operating Suites",
      priceAnnual: "$65,000",
      priceMonthly: "$5,900",
      priceDetail: "per facility / billed annually",
      highlight: false,
      badge: "Standard",
      features: [
        "Multimodal Computer Vision Tray Auditing (up to 4 pack stations)",
        "Core EHR Schedule Synchronization (HL7 / FHIR)",
        "Standard SPD turnaround & wash queue dashboard",
        "Sub-millimeter missing instrument detection",
        "Standard Business Hours Support & Dedicated Onboarding",
        "HIPAA Business Associate Agreement (BAA)"
      ],
      cta: "Request ASC Feasibility Study"
    },
    {
      name: "Regional Medical Center",
      subtitle: "For acute care hospitals & multi-specialty centers",
      icon: <Hospital className="w-5 h-5 text-sky-400" />,
      orLimit: "Up to 24 Operating Suites",
      priceAnnual: "$140,000",
      priceMonthly: "$12,800",
      priceDetail: "per facility / billed annually",
      highlight: true,
      badge: "Most Adopted",
      features: [
        "High-Precision Vision Auditing across unlimited SPD pack stations",
        "Multi-Agent Dynamic Autoclave & Turnaround Queue Prediction",
        "Reinforcement Learning Surgeon Preference Card Optimizer",
        "Bi-directional Epic Hyperspace & Oracle Cerner Connectors",
        "Real-time OR Delay & Instrument Missing Alert System",
        "24/7 Clinical Emergency Support with 99.9% Uptime SLA",
        "Dedicated Clinical Workflow Engineer"
      ],
      cta: "Start Hospital Pilot Evaluation"
    },
    {
      name: "Enterprise Health Network",
      subtitle: "For multi-hospital systems & academic medical networks",
      icon: <Network className="w-5 h-5 text-teal-300" />,
      orLimit: "Unlimited OR Suites & Facilities",
      priceAnnual: "$240,000+",
      priceMonthly: "Custom Quote",
      priceDetail: "or Value-Based Gain Sharing (10–15% verified savings)",
      highlight: false,
      badge: "Enterprise",
      features: [
        "Network-Wide Cross-Facility Tray Loaner & Supply Optimization",
        "Gain-Sharing / Value-Based pricing option available",
        "Custom EHR & In-House Sterile Management integration",
        "On-Premises High-Throughput Edge Appliance Clusters",
        "Custom CAD model training for proprietary instrument sets",
        "Executive Surgical Ops Quarterly Strategy Reviews",
        "Custom BAA, SLA & Dedicated Enterprise Account Director"
      ],
      cta: "Consult Enterprise Solutions"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono mb-4">
            <DollarSign className="w-3.5 h-3.5" />
            <span>Transparent Hospital Enterprise SaaS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Predictable Investment.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-sky-400 to-cyan-300">
              Immediate Surgical Margin.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Choose the deployment tier matched to your operating room footprint. 
            Most hospital partners recoup their entire annual investment within 90 days from recovered OR delays.
          </p>

          {/* Billing Switcher */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-2xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isAnnual ? 'bg-teal-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              Annual Enterprise Billing (Save ~15%)
            </button>
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                !isAnnual ? 'bg-teal-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              Quarterly / Monthly Terms
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 items-stretch">
          {pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                tier.highlight
                  ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-teal-950/40 border-2 border-teal-500 shadow-2xl shadow-teal-500/15 lg:-translate-y-2'
                  : 'bg-slate-900/80 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Highlight Badge */}
              {tier.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-teal-500 to-sky-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg">
                  Hospital Flagship
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                    {tier.icon}
                  </div>
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {tier.orLimit}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">{tier.name}</h3>
                <p className="text-xs text-slate-400 mb-6">{tier.subtitle}</p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-slate-800">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-white">
                      {isAnnual ? tier.priceAnnual : tier.priceMonthly}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {isAnnual ? '/ year' : '/ month'}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 font-mono">
                    {tier.priceDetail}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
                    Included Capabilities:
                  </div>
                  {tier.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Action */}
              <a
                href="#contact"
                className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                  tier.highlight
                    ? 'bg-gradient-to-r from-teal-500 to-sky-500 hover:from-teal-400 hover:to-sky-400 text-slate-950 shadow-lg shadow-teal-500/25'
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                }`}
              >
                <span>{tier.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* ============================================================== */}
        {/* INTERACTIVE HOSPITAL ROI CALCULATOR */}
        {/* ============================================================== */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono mb-2">
                <Calculator className="w-3.5 h-3.5" />
                <span>Interactive Facility Financial Model</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Calculate Your Health Facility's Projected Annual ROI
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-2 rounded-xl border border-slate-800">
              Benchmark: $85 / OR Delay Min • $340 Supply Scrap / Case
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Sliders */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Slider 1: OR Count */}
              <div>
                <div className="flex justify-between items-center text-sm font-mono mb-2">
                  <span className="text-slate-300">Active Operating Suites:</span>
                  <span className="text-teal-400 font-bold text-base">{orCount} OR Suites</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="40"
                  value={orCount}
                  onChange={(e) => setOrCount(Number(e.target.value))}
                  className="w-full accent-teal-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>4 (Small Center)</span>
                  <span>20 (Regional Hospital)</span>
                  <span>40 (Health Network)</span>
                </div>
              </div>

              {/* Slider 2: Cases Per Day */}
              <div>
                <div className="flex justify-between items-center text-sm font-mono mb-2">
                  <span className="text-slate-300">Average Procedures / OR / Day:</span>
                  <span className="text-sky-400 font-bold text-base">{casesPerDay} cases/day</span>
                </div>
                <input
                  type="range"
                  min="1.5"
                  max="6"
                  step="0.5"
                  value={casesPerDay}
                  onChange={(e) => setCasesPerDay(Number(e.target.value))}
                  className="w-full accent-sky-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>1.5 (Complex Long Cases)</span>
                  <span>3.5 (Typical Mixed)</span>
                  <span>6.0 (High Turn ASC)</span>
                </div>
              </div>

              {/* Slider 3: Delay Minutes Saved */}
              <div>
                <div className="flex justify-between items-center text-sm font-mono mb-2">
                  <span className="text-slate-300">Est. Idle Delay Minutes Saved / Procedure:</span>
                  <span className="text-emerald-400 font-bold text-base">{delayMinutesSaved} minutes</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="25"
                  value={delayMinutesSaved}
                  onChange={(e) => setDelayMinutesSaved(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>4 mins (Conservative)</span>
                  <span>12 mins (Hospital Average)</span>
                  <span>25 mins (High-Friction SPD)</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 font-mono">
                Annual Surgical Volume: <strong className="text-white">{totalAnnualCases.toLocaleString()}</strong> completed procedures modeled.
              </div>
            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-950 via-slate-950 to-teal-950/30 p-6 sm:p-8 rounded-2xl border border-teal-500/40 shadow-xl">
              <div className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-2">
                Estimated Net Financial Impact
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                ${totalAnnualBenefit.toLocaleString()}
                <span className="text-xs font-normal text-slate-400 ml-1.5 font-mono">/ year saved</span>
              </div>

              <div className="text-xs text-emerald-400 font-mono mb-6">
                ~{roiMultiple}x Estimated ROI Multiple on SurgiSync Tier
              </div>

              <div className="space-y-3 font-mono text-xs border-t border-slate-800 pt-4">
                <div className="flex justify-between text-slate-300">
                  <span>OR Delays Averted:</span>
                  <span className="font-bold text-white">${annualDelaySavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Supply Waste Trimmed:</span>
                  <span className="font-bold text-white">${annualScrapSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Est. Annual License:</span>
                  <span className="font-bold text-slate-400">-${estimatedAnnualCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-teal-300 pt-2 border-t border-slate-800 text-sm font-bold">
                  <span>Net Annual Hospital Gain:</span>
                  <span>+${netRoi.toLocaleString()}</span>
                </div>
              </div>

              <a
                href="#contact"
                className="mt-6 w-full py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider text-center block transition-colors"
              >
                Request Detailed Executive Pro-Forma
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
