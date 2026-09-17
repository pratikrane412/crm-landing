import React from 'react';
import { Mail, MapPin, Sparkles } from 'lucide-react';

interface CtaFooterProps {
  onOpenGallery: () => void;
}

export const CtaFooter: React.FC<CtaFooterProps> = ({ onOpenGallery }) => {
  return (
    <footer className="relative pt-12 pb-14">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Glass Closing CTA Banner with Rounded-2xl */}
        <section className="glass-card-elevated rounded-2xl p-10 sm:p-16 text-center border border-white/95 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(0,56,115,0.08)_0%,transparent_70%)] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(circle,rgba(16,185,129,0.06)_0%,transparent_70%)] pointer-events-none rounded-full" />

          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg glass-card text-xs font-bold text-[#003873] uppercase tracking-wider mb-1">
              <Sparkles size={12} />
              <span>Start Modernizing Today</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0f172a] leading-tight">
              The standard for educational operations.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Eliminate inquiry leakage, enforce financial audit compliance, and provide staff with an interface they actually enjoy using.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <a
                href="https://crm1.dmsoi.org/"
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3 rounded-xl font-bold text-sm text-white bg-[#003873] hover:bg-[#002852] transition-all shadow-lg shadow-[#003873]/25 cursor-pointer active:scale-98"
              >
                Access Production Portal
              </a>
              <button
                onClick={onOpenGallery}
                className="px-6 py-3 rounded-xl font-bold text-sm text-[#0f172a] glass-card hover:bg-white border border-white transition-all cursor-pointer shadow-sm active:scale-98"
              >
                Inspect 21 Screenshots
              </button>
            </div>
          </div>
        </section>

        {/* Glassmorphic Directory Footer with Rounded-2xl */}
        <div className="glass-card rounded-2xl mt-8 p-8 sm:p-12 text-xs text-slate-500 border border-white/90 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-10 border-b border-slate-200/80">
            {/* Column 1: Brand & Contact */}
            <div className="col-span-2 space-y-3">
              <div className="flex items-center">
                <img
                  src="/your_logo.png"
                  alt="ibraine"
                  className="h-8 w-auto object-contain max-w-[160px]"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <p className="text-slate-500 leading-relaxed max-w-sm">
                Enterprise educational management platform engineered for multi-center coaching institutes, training institutes, and vocational academies.
              </p>
              <div className="space-y-1.5 pt-2 text-[11px] text-slate-700 font-medium">
                <p className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-[#003873]" />
                  <span>Andheri East & West • Borivali • Virtual Online</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Mail size={13} className="text-[#003873]" />
                  <a href="mailto:contact@ibraine.com" className="hover:text-[#003873]">
                    contact@ibraine.com
                  </a>
                </p>
              </div>
            </div>

            {/* Column 2: Workqueues */}
            <div className="space-y-2">
              <p className="font-bold text-[#0f172a]">Workqueues</p>
              <ul className="space-y-1.5 font-medium">
                <li><a href="#queues" className="hover:text-[#003873]">Lead Captures</a></li>
                <li><a href="#queues" className="hover:text-[#003873]">Daily Follow-ups</a></li>
                <li><a href="#queues" className="hover:text-[#003873]">Demo Sessions</a></li>
                <li><a href="#queues" className="hover:text-[#003873]">Hot Leads</a></li>
                <li><a href="#queues" className="hover:text-[#003873]">Pending Payments</a></li>
                <li><a href="#queues" className="hover:text-[#003873]">Revenue Ledger</a></li>
              </ul>
            </div>

            {/* Column 3: Core Modules */}
            <div className="space-y-2">
              <p className="font-bold text-[#0f172a]">Core Modules</p>
              <ul className="space-y-1.5 font-medium">
                <li><a href="#features" className="hover:text-[#003873]">60s IST Reminders</a></li>
                <li><a href="#features" className="hover:text-[#003873]">Milestone Installments</a></li>
                <li><a href="#features" className="hover:text-[#003873]">Form Builder Canvas</a></li>
                <li><a href="#features" className="hover:text-[#003873]">Batch Management</a></li>
                <li><a href="#features" className="hover:text-[#003873]">QR Verification Portal</a></li>
                <li><a href="#features" className="hover:text-[#003873]">17-Token RBAC</a></li>
              </ul>
            </div>

            {/* Column 4: Roles & Portal */}
            <div className="space-y-2">
              <p className="font-bold text-[#0f172a]">Institutional</p>
              <ul className="space-y-1.5 font-medium">
                <li><a href="#roles" className="hover:text-[#003873]">Sales Counsellor</a></li>
                <li><a href="#roles" className="hover:text-[#003873]">Super Administrator</a></li>
                <li><a href="#roles" className="hover:text-[#003873]">Finance Officer</a></li>
                <li><a href="#roles" className="hover:text-[#003873]">Academic Trainer</a></li>
                <li><a href="#calculator" className="hover:text-[#003873]">ROI Simulator</a></li>
                <li>
                  <a
                    href="https://crm1.dmsoi.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#003873] font-bold text-[#003873]"
                  >
                    Portal Login ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright & Footnote */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 font-medium">
            <p>© {new Date().getFullYear()} ibraine. All rights reserved.</p>
            <p>Built for Indian higher education institutions • Self-hosted & audited</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
