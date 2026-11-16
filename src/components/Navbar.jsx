import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Sun, Moon, Menu, X, ArrowRight, ShieldCheck, Activity } from 'lucide-react';

export default function Navbar({ isDark, setIsDark }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'problem', 'how-it-works', 'technology', 'pricing', 'about', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#home', id: 'home' },
    { label: 'The Problem', href: '#problem', id: 'problem' },
    { label: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { label: 'Platform Tech', href: '#technology', id: 'technology' },
    { label: 'Pricing & ROI', href: '#pricing', id: 'pricing' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/20 dark:border-slate-800/80 shadow-lg shadow-black/5' 
          : 'bg-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <a href="#home" className="focus:outline-none">
            <Logo />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 font-semibold' 
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Live Telemetry Pill, Theme Toggle, CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Live Status Pill */}
            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs font-mono text-slate-600 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>EHR Flow: Active</span>
            </div>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 border border-slate-200 dark:border-slate-700/60 transition-colors shadow-sm"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Demo CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-500 hover:to-sky-500 text-white text-sm font-semibold shadow-md shadow-teal-500/20 hover:shadow-teal-500/30 transition-all duration-200 active:scale-95"
            >
              <span>Schedule Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/98 dark:bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200 shadow-2xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 px-2 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              SurgiSync Ops v2.4 Online
            </span>
            <span className="text-teal-400">HIPAA Compliant</span>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-teal-900/40 text-teal-300 font-semibold border-l-4 border-teal-400'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-sky-600 text-white font-medium shadow-md shadow-teal-500/20 text-sm"
            >
              <span>Schedule Hospital Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
