import React from 'react';
import { motion } from 'motion/react';
import {
  CreditCard,
  Server,
  Zap,
  Award,
  CheckCircle2,
  Volume2,
  Lock,
  Sparkles
} from 'lucide-react';

interface HeroProps {
  onOpenGallery: (imageId?: string) => void;
  onTriggerToast: (title: string, description: string, type?: 'reminder' | 'success') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenGallery, onTriggerToast }) => {
  return (
    <section id="overview" className="relative w-full overflow-hidden bg-transparent">
      {/* ========================================================================= */}
      {/* 1. HERO VIEWPORT (Full Screen 100vh, Aura Anchored to Exact Bottom Edge) */}
      {/* ========================================================================= */}
      <div className="relative min-h-screen lg:h-screen w-full flex flex-col justify-center items-center pt-20 pb-6 sm:pt-24 sm:pb-8 lg:pt-20 lg:pb-6 overflow-hidden">
        
        {/* Subtle Architectural Precision Grid */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-25"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(15, 23, 42, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(15, 23, 42, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '44px 44px',
            maskImage: 'radial-gradient(ellipse 85% 70% at 50% 55%, black 25%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse 85% 70% at 50% 55%, black 25%, transparent 85%)'
          }}
        />

        {/* Top Gentle Warm Luster (Dual ibraine Azure & Orange) */}
        <div 
          className="absolute top-0 inset-x-0 h-[260px] pointer-events-none z-0"
          style={{
            background: 'radial-gradient(ellipse 900px 220px at 50% -10%, rgba(28, 114, 185, 0.06) 0%, rgba(250, 138, 53, 0.03) 50%, transparent 75%)'
          }}
        />

        {/* Primary Radiant Warm Horizon Aura — Anchored to the Exact Bottom Edge of the 100vh Viewport (ibraine Theme) */}
        <div 
          className="absolute bottom-0 inset-x-0 h-[500px] pointer-events-none overflow-hidden z-0"
          style={{
            background: `radial-gradient(ellipse 1300px 460px at 50% 100%, 
              rgba(250, 138, 53, 0.20) 0%, 
              rgba(28, 114, 185, 0.08) 36%, 
              rgba(254, 215, 170, 0.04) 62%, 
              transparent 80%)`
          }}
        >
          {/* Luminous Warm Horizon Core Dome (Soft ambient warmth, refined and light) */}
          <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-[1050px] h-[420px] rounded-full bg-gradient-to-t from-[#FA8A35]/24 via-[#1C72B9]/12 to-transparent blur-[110px] animate-aura-orange" />
          
          {/* Soft Left Blue Wing (Reflecting ibraine Blue) */}
          <div className="absolute -bottom-20 left-[16%] w-[480px] h-[320px] rounded-full bg-[#1C72B9]/12 blur-[95px]" />

          {/* Soft Right Warm Wing (Reflecting ibraine Orange) */}
          <div className="absolute -bottom-20 right-[16%] w-[480px] h-[320px] rounded-full bg-[#FA8A35]/14 blur-[95px]" />
        </div>

        {/* Laser-Thin Luminous Horizon Accent Line at bottom edge */}
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#1C72B9]/30 via-[#FA8A35]/30 to-transparent pointer-events-none z-0" />

        {/* Main Hero 2-Column Split Content (Vertically Centered in 100vh, Perfectly Calibrated Scale) */}
        <div className="flex-1 flex items-center justify-center w-full max-w-[1780px] 2xl:max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center w-full">
            
            {/* LEFT COLUMN: Authority Copy, Headlines & CTAs */}
            <div className="lg:col-span-5 xl:col-span-4 text-left flex flex-col items-start justify-center pr-0 lg:pr-2">
              {/* Eyebrow Link with ibraine Orange Radar Pulse */}
              <motion.div 
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mb-3 sm:mb-4"
              >
                <a
                  href="#why-buy"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xs text-xs sm:text-sm font-medium text-slate-700 hover:text-[#1C72B9] hover:border-blue-200 transition-all group cursor-pointer"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FA8A35] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FA8A35]" />
                  </span>
                  <span>The one-time purchase CRM for education</span>
                  <span className="text-slate-400 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </motion.div>

              {/* Refined Proportional Headline (Authoritative Human UI Scale) */}
              <motion.h1 
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl lg:text-[46px] xl:text-[50px] text-[#0f172a] font-bold tracking-tight leading-[1.08] select-none text-left"
              >
                Built for education.
                <br />
                <span className="text-[#1C72B9]">
                  Owned for life.
                </span>
              </motion.h1>

              {/* Subtitle Paragraph (Balanced Measure, High Readability) */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm sm:text-base xl:text-[16px] text-[#334155] max-w-lg leading-[1.65] font-normal mt-4 sm:mt-5 text-left"
              >
                Unlike traditional subscription CRMs that charge ₹2,500 per counsellor every single month, ibraine CRM is a perpetual one-time purchase with zero recurring fees. 100% self-hosted on your private server with unlimited staff seats, native 8-milestone fee installment tracking with bank UTR audits, and automated 60-second follow-up polling.
              </motion.p>

              {/* Dual Action Pill Buttons (Aligned Flush Left) */}
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-3 sm:gap-3.5 mt-6 sm:mt-7 relative z-20"
              >
                <a
                  href="https://crm1.dmsoi.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-full font-semibold text-xs sm:text-sm text-white bg-[#0f172a] hover:bg-black transition-all shadow-md shadow-black/10 cursor-pointer active:scale-98 flex items-center gap-2 group"
                >
                  <span>Access Live Portal</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>

                <a
                  href="#why-buy"
                  className="px-6 py-3 rounded-full font-semibold text-xs sm:text-sm text-slate-800 bg-white/95 backdrop-blur-md border border-slate-300/80 hover:bg-white transition-all shadow-xs hover:shadow-md cursor-pointer active:scale-98"
                >
                  Why Institutes Choose Us
                </a>
              </motion.div>

              {/* Verified Trust Strip Flush with Left Grid Line */}
              <motion.div 
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-5 pt-4 border-t border-slate-200/80 text-xs font-semibold text-slate-600"
              >
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0" />
                  <span>₹0 Monthly Rent Forever</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0" />
                  <span>100% Private Linux VPS</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0" />
                  <span>Unlimited Staff Seats</span>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Production Dashboard Showcase (Expanded to 8-cols, beautifully proportioned) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 xl:col-span-8 relative w-full max-w-[97%] xl:max-w-[96%] 2xl:max-w-[97%] ml-auto select-none"
            >
              {/* Soft Ambient Colored Glow behind dashboard frame with gentle breathing pulse */}
              <div 
                className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-[#FA8A35]/12 via-[#1C72B9]/14 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none animate-pulse" 
                style={{ animationDuration: '4s' }}
              />
              
              {/* Premium Mac/Browser Window Frame — Crisp 1:1 Pixel Mapping */}
              <div className="relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden ring-1 ring-slate-900/5">
                {/* Minimalist Window Header Bar */}
                <div className="flex items-center justify-between px-4 sm:px-5 py-2.5 bg-slate-50/95 border-b border-slate-200/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-slate-600 tracking-tight flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>ibraine CRM • Operations Command Center</span>
                  </div>
                  <div className="w-12 hidden sm:block" />
                </div>

                {/* Dashboard Screenshot (Full Resolution, 100% Crystal Clear, Zero Blur) */}
                <div className="relative bg-white overflow-hidden">
                  <img
                    src="/dashboard_preview.png"
                    alt="ibraine CRM Production Operations Dashboard"
                    className="w-full h-auto object-contain block"
                    loading="eager"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. INSTITUTIONAL ADVANTAGE BENTO SHOWCASE (Below the Hero Viewport Fold) */}
      {/* ========================================================================= */}
      <div id="why-buy" className="max-w-[1780px] 2xl:max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-20 sm:py-28 border-t border-slate-200/80 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50/90 border border-blue-200/80 text-[#1C72B9] text-[11px] font-bold tracking-widest uppercase mb-4 shadow-2xs">
              <Sparkles size={12} className="text-[#FA8A35]" />
              <span>INSTITUTIONAL ADVANTAGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f172a] tracking-tight leading-tight">
              Why education institutes buy ibraine CRM
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
              Eliminate recurring software rent, maintain 100% data sovereignty on private servers, and automate native student admissions workflows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Card 1: Zero Monthly SaaS Rent (Span 7) */}
            <motion.div 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 ibraine-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#1C72B9]/10 to-transparent rounded-bl-full pointer-events-none -z-0" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#1C72B9]">
                      <CreditCard size={22} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#1C72B9] bg-blue-50/90 px-2.5 py-0.5 rounded border border-blue-200/70 inline-block">
                        One-Time Asset
                      </span>
                      <h3 className="font-bold text-xl text-[#0f172a] tracking-tight mt-1">
                        Zero Monthly SaaS Rent
                      </h3>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    Save ₹13.5L / 3 Yrs
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Conventional monthly CRMs penalize your growth by charging ₹1,500–₹4,000 per user every month. ibraine CRM is a perpetual one-time purchase with <strong className="text-slate-900 font-semibold">₹0 recurring subscriptions</strong> and unlimited seats for all counsellors, faculty, and branch managers.
                </p>

                {/* Interactive Comparison Visual */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50/90 p-4 rounded-2xl border border-slate-200/80">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200/70 shadow-2xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 block mb-1">
                      Generic Multi-Tenant SaaS (15 Staff)
                    </span>
                    <div className="text-xs text-slate-500">₹2,500 × 15 staff × 36 mos</div>
                    <div className="mt-2 text-2xl font-black text-rose-500 line-through">
                      ₹13,50,000
                    </div>
                    <span className="text-[11px] text-rose-600 font-semibold block mt-1">
                      ✕ Lost in recurring software rent
                    </span>
                  </div>

                  <div className="p-3.5 bg-gradient-to-br from-blue-50/80 to-white rounded-xl border border-blue-200 shadow-2xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1C72B9] block mb-1">
                      ibraine CRM (Unlimited Staff)
                    </span>
                    <div className="text-xs text-slate-500">One-Time Perpetual License</div>
                    <div className="mt-2 text-2xl font-black text-emerald-600">
                      ₹0 / month
                    </div>
                    <span className="text-[11px] text-emerald-700 font-semibold block mt-1">
                      ✓ Permanent institutional asset owned by you
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600 relative z-10">
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle2 size={15} className="text-emerald-600" />
                  <span>Permanent Commercial License</span>
                </span>
                <span className="text-slate-500 hidden sm:inline">Break-even in &lt; 3 months</span>
              </div>
            </motion.div>

            {/* Card 2: 60s Real-Time Lead Polling (Span 5) */}
            <motion.div 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 ibraine-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-bl from-[#FA8A35]/10 to-transparent rounded-bl-full pointer-events-none -z-0" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#FA8A35]">
                      <Zap size={22} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#EA580C] bg-orange-50/80 px-2.5 py-0.5 rounded border border-orange-200/60 inline-block">
                        Zero Lead Decay
                      </span>
                      <h3 className="font-bold text-xl text-[#0f172a] tracking-tight mt-1">
                        60s Real-Time Lead Polling
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Meta, Google Ads & landing page inquiries are polled every 60 seconds in IST. When scheduled calls arrive, an audible chime rings on the counsellor's desk.
                </p>

                {/* Interactive Simulated Chime Widget */}
                <div className="mt-5 p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-md">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pb-2 border-b border-slate-800">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      LIVE IST QUEUE
                    </span>
                    <span>NEXT POLL: 14s</span>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span className="w-6 h-6 rounded-full bg-[#1C72B9] text-white flex items-center justify-center text-[10px]">PM</span>
                        <span>Pooja M. — Digital Marketing</span>
                      </div>
                      <div className="text-[11px] text-slate-400 ml-7">Meta Lead Ads • 42s ago</div>
                    </div>

                    <div className="flex items-center gap-1 h-5 px-2 bg-slate-800/80 rounded-lg">
                      <span className="w-1 bg-[#1C72B9] rounded-full animate-audio-1" />
                      <span className="w-1 bg-[#FA8A35] rounded-full animate-audio-2" />
                      <span className="w-1 bg-[#1C72B9] rounded-full animate-audio-3" />
                      <span className="w-1 bg-[#FA8A35] rounded-full animate-audio-4" />
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 font-mono">Chime Alert Armed</span>
                    <button
                      onClick={() => onTriggerToast('Audible IST Chime Triggered', 'Simulated 60-second follow-up chime for Pooja M.', 'reminder')}
                      className="text-xs font-bold text-white bg-[#1C72B9] hover:bg-[#155a94] px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-sm"
                    >
                      <Volume2 size={12} />
                      <span>Test Chime</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600 relative z-10">
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle2 size={15} className="text-emerald-600" />
                  <span>Zero Counsellor Delay</span>
                </span>
                <span className="text-slate-500">Sub-60s Triage</span>
              </div>
            </motion.div>

            {/* Card 3: 100% Private Linux VPS (Span 5) */}
            <motion.div 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 ibraine-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-bl from-[#1C72B9]/10 to-transparent rounded-bl-full pointer-events-none -z-0" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#1C72B9]">
                      <Server size={22} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#1C72B9] bg-blue-50/80 px-2.5 py-0.5 rounded border border-blue-200/60 inline-block">
                        Data Sovereignty
                      </span>
                      <h3 className="font-bold text-xl text-[#0f172a] tracking-tight mt-1">
                        100% Private Linux VPS
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full">
                    Root Access
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Student phone numbers, parent records, and fee ledgers never leak into shared public multi-tenant clouds. Deploy on your own private VPS with complete sovereignty.
                </p>

                {/* Sleek Terminal / Infrastructure Status Card */}
                <div className="mt-5 p-4 bg-[#0a0f1d] text-slate-200 rounded-2xl border border-slate-800 font-mono text-xs shadow-md">
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-800 text-[11px] text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span>ssh root@vps.institute.in</span>
                  </div>

                  <div className="mt-3 space-y-1.5 text-[11px]">
                    <div className="text-emerald-400">✓ PostgreSQL 16 • On-Premise Encrypted</div>
                    <div className="text-slate-300">✓ Zero Multi-Tenant Cloud Snooping</div>
                    <div className="text-slate-300">✓ Automated Midnight Snapshot: 02:00 AM IST</div>
                    <div className="text-slate-400">✓ SSL Domain: crm.yourinstitute.com</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600 relative z-10">
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle2 size={15} className="text-emerald-600" />
                  <span>100% Data Confidentiality</span>
                </span>
                <span className="text-slate-500">Your Private IP</span>
              </div>
            </motion.div>

            {/* Card 4: 8-Milestone Fee Plans (Span 7) */}
            <motion.div 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 ibraine-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#FA8A35]/10 to-transparent rounded-bl-full pointer-events-none -z-0" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#FA8A35]">
                      <Award size={22} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#EA580C] bg-orange-50/80 px-2.5 py-0.5 rounded border border-orange-200/60 inline-block">
                        Built for Education
                      </span>
                      <h3 className="font-bold text-xl text-[#0f172a] tracking-tight mt-1">
                        8-Milestone Fee Installment Plans
                      </h3>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-[#1C72B9] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                    Bank UTR Verified
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Track up to 8 installment milestones with mandatory bank UTR numbers for UPI/NEFT collections. Automatically generate GST PDF receipts and enforce ₹0 balance before issuing QR-verified completion certificates.
                </p>

                {/* Interactive Installment Timeline Ledger */}
                <div className="mt-5 p-4 bg-slate-50/90 rounded-2xl border border-slate-200/80 space-y-2.5">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200">
                    <span className="font-bold text-slate-800">Student: Aryan Sharma — Full Stack Cohort</span>
                    <span className="font-mono text-slate-500 font-semibold">Total: ₹45,000</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    <div className="p-2.5 bg-white rounded-xl border border-emerald-200 shadow-2xs">
                      <div className="text-[10px] text-slate-500 font-medium">Installment 1 (Token)</div>
                      <div className="font-bold text-slate-800">₹15,000</div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 block mt-1 truncate">
                        ✓ UTR: ICIC982410
                      </span>
                    </div>

                    <div className="p-2.5 bg-white rounded-xl border border-emerald-200 shadow-2xs">
                      <div className="text-[10px] text-slate-500 font-medium">Installment 2 (Batch Start)</div>
                      <div className="font-bold text-slate-800">₹15,000</div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 block mt-1 truncate">
                        ✓ UTR: HDFC410921
                      </span>
                    </div>

                    <div className="p-2.5 bg-white rounded-xl border border-blue-200 shadow-2xs flex flex-col justify-between">
                      <div>
                        <div className="text-[10px] text-slate-500 font-medium">Installment 3 (Final)</div>
                        <div className="font-bold text-slate-800">₹15,000</div>
                      </div>
                      <button
                        onClick={() => onTriggerToast('Bank UTR Verified', '₹15,000 NEFT milestone confirmed. PDF receipt generated.', 'success')}
                        className="mt-1 text-[10px] font-bold text-[#1C72B9] bg-blue-50 hover:bg-blue-100 px-1.5 py-0.5 rounded border border-blue-200 transition-colors text-center cursor-pointer"
                      >
                        Verify UTR Audit →
                      </button>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-700 font-medium">
                    <span className="flex items-center gap-1">
                      <Lock size={12} className="text-[#FA8A35]" />
                      <span>QR Certificate & Hall Ticket locked until balance = ₹0</span>
                    </span>
                    <span className="text-emerald-700 font-bold hidden sm:inline">Auto PDF Receipts</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600 relative z-10">
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle2 size={15} className="text-emerald-600" />
                  <span>Audit-Proof UPI/NEFT Ledger</span>
                </span>
                <span className="text-slate-500">₹0 Balance Enforcement</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };
