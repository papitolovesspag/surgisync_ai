import React from 'react';

export default function Logo({ className = "w-9 h-9", showText = true, textSize = "text-xl" }) {
  return (
    <div className="flex items-center gap-3 select-none">
      <div className={`relative ${className} flex-shrink-0 group`}>
        {/* Glow behind logo */}
        <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-teal-500 rounded-xl blur-sm opacity-50 group-hover:opacity-80 transition duration-300"></div>
        
        {/* Logo SVG Icon */}
        <svg 
          viewBox="0 0 64 64" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="relative w-full h-full rounded-xl shadow-inner bg-slate-900 border border-teal-500/30 p-1"
        >
          <defs>
            <linearGradient id="logoSurgiGrad" x1="4" y1="4" x2="60" y2="60" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="50%" stopColor="#0d9488" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
            <linearGradient id="logoPulseGrad" x1="16" y1="32" x2="48" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
          </defs>

          {/* Precision Cross Reticles */}
          <circle cx="32" cy="32" r="22" stroke="url(#logoSurgiGrad)" strokeWidth="1.8" strokeDasharray="3 3" opacity="0.35" />
          
          {/* Interlocking Sync Arcs */}
          <path d="M 32 12 A 20 20 0 0 1 52 32" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M 32 52 A 20 20 0 0 1 12 32" stroke="#14b8a6" strokeWidth="3.5" strokeLinecap="round" />
          
          {/* Synchronized Pulse Wave */}
          <path d="M 18 32 H 25 L 29 21 L 35 43 L 39 32 H 46" stroke="url(#logoPulseGrad)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Nodes */}
          <circle cx="32" cy="12" r="2.5" fill="#38bdf8" />
          <circle cx="32" cy="52" r="2.5" fill="#14b8a6" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`font-bold tracking-tight text-slate-900 dark:text-white ${textSize}`}>
              Surgi<span className="text-teal-600 dark:text-teal-400">Sync</span>
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>
          <span className="text-[10px] uppercase font-semibold tracking-widest text-slate-500 dark:text-slate-400 -mt-1">
            Clinical AI Logistics
          </span>
        </div>
      )}
    </div>
  );
}
