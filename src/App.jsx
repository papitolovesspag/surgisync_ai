import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClinicalProblem from './components/ClinicalProblem';
import HowItWorksSimulator from './components/HowItWorksSimulator';
import PlatformArchitecture from './components/PlatformArchitecture';
import PricingROI from './components/PricingROI';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('surgisync-theme');
    if (saved) return saved === 'dark';
    return true; // Default to dark mode for MedTech precision UI
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('surgisync-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('surgisync-theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 transition-colors duration-300">
      {/* Fixed Sticky Header */}
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      {/* Main Content Area */}
      <main>
        {/* 1. Overview / Landing Hero */}
        <Hero />

        {/* 2. The Clinical & Operational Problem */}
        <ClinicalProblem />

        {/* 3. Animation-Heavy How It Works Operational Simulator */}
        <HowItWorksSimulator />

        {/* 4. Enterprise Architecture & IT Governance */}
        <PlatformArchitecture />

        {/* 5. 3-Tier Pricing & Interactive Hospital ROI Calculator */}
        <PricingROI />

        {/* 6. About Us: Mission Statement & Sole Founder Section */}
        <AboutUs />

        {/* 7. Contact Us: Clean 1-Email & 1-Phone Verification Form */}
        <ContactUs />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
