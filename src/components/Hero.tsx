import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronRight,
  Maximize2,
  Lock,
  Volume2,
  Sparkles,
  ArrowRight,
  Bell,
  CreditCard,
  MessageSquare
} from 'lucide-react';
import { HOTSPOTS } from '../data/screenshotsData';
import { playReminderChime } from '../utils/audio';

// Isolated high-performance clock that never re-renders parent Hero
const LiveClock = memo(() => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        })
      );
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return <span>{time ? `${time} IST` : 'IST Active'}</span>;
});
LiveClock.displayName = 'LiveClock';

interface HeroProps {
  onOpenGallery: (imageId?: string) => void;
  onTriggerToast: (title: string, description: string, type?: 'reminder' | 'success') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenGallery, onTriggerToast }) => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const handleTestChime = () => {
    playReminderChime();
    onTriggerToast(
      '60-Second IST Chime Triggered',
      'Audible chime sounded. Follow-up call due with Rahul M. (Andheri Center).',
      'reminder'
    );
  };

  return (
    <section id="overview" className="relative pt-28 pb-20 overflow-hidden w-full">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header Content */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          {/* Glass Telemetry Pill with Rounded-xl */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-card text-xs font-semibold text-[#0f172a] shadow-xs">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[#003873] font-bold">ibraine Enterprise v3.5</span>
            <span className="text-slate-300">•</span>
            <span className="font-mono text-[11px] text-slate-500">
              <LiveClock />
            </span>
          </div>

          {/* Monumental Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#0f172a] leading-[1.05]">
            The operating system for modern education.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Eliminate inquiry decay, automate 60-second follow-up chimes, collect verified tuition installments, and synchronize multi-center academic cohorts.
          </p>

          {/* Action Controls */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#queues"
              className="px-6 py-2.5 rounded-xl font-bold text-sm text-white bg-[#003873] hover:bg-[#002852] transition-all shadow-md shadow-[#003873]/20 flex items-center gap-1.5 active:scale-98 cursor-pointer"
            >
              <span>Explore 6 Workqueues</span>
              <ArrowRight size={14} />
            </a>

            <button
              onClick={handleTestChime}
              className="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-[#003873] glass-card hover:bg-white transition-all flex items-center gap-2 cursor-pointer shadow-xs active:scale-98"
              title="Click to hear the real notification chime"
            >
              <Volume2 size={15} className="text-[#003873]" />
              <span>Simulate 60s Chime</span>
            </button>

            <button
              onClick={() => onOpenGallery('dashboard-analytics')}
              className="group text-sm font-semibold text-slate-700 hover:text-[#003873] flex items-center gap-1 px-3 py-2 cursor-pointer transition-colors"
            >
              <span>View 21 screens</span>
              <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Masterpiece Showcase: Expansive Full-Width Panoramic Glass Window */}
        <div className="mt-12 max-w-[1400px] mx-auto relative">
          {/* Main Glass Window Frame */}
          <div className="glass-window p-2.5 sm:p-3.5 border border-white/95 rounded-2xl relative shadow-xl">
            {/* Top Chrome Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-white/90 backdrop-blur-md rounded-t-xl border-b border-slate-200/80 mb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57] inline-block shadow-2xs"></span>
                <span className="w-3 h-3 rounded-full bg-[#febc2e] inline-block shadow-2xs"></span>
                <span className="w-3 h-3 rounded-full bg-[#28c840] inline-block shadow-2xs"></span>
              </div>

              {/* URL Address Pill */}
              <div className="flex items-center gap-1.5 px-4 py-1 rounded-lg bg-slate-100/80 border border-slate-200/60 text-[11px] text-slate-500 max-w-md w-full justify-center">
                <Lock size={10} className="text-emerald-600" />
                <span className="truncate font-medium text-slate-700">https://crm.ibraine.com/dashboard</span>
              </div>

              <div className="flex items-center gap-2 text-[11px] font-bold text-[#003873]">
                <Sparkles size={12} />
                <span className="hidden sm:inline">Andheri • Borivali • Online</span>
              </div>
            </div>

            {/* Main Screenshot with Hotspots - Expansive Wide */}
            <div className="relative rounded-xl overflow-hidden bg-white border border-slate-200/80 shadow-inner">
              <img
                src="/screenshots/dashboard_analytics.png"
                alt="ibraine CRM Dashboard"
                className="w-full h-auto object-cover block"
                loading="eager"
              />

              {/* Hotspot Radar Pins */}
              {HOTSPOTS.map((hotspot) => {
                const isActive = activeHotspot === hotspot.id;
                return (
                  <div
                    key={hotspot.id}
                    style={{ top: hotspot.top, left: hotspot.left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                  >
                    <button
                      onClick={() => setActiveHotspot(isActive ? null : hotspot.id)}
                      onMouseEnter={() => setActiveHotspot(hotspot.id)}
                      className="relative flex items-center justify-center focus:outline-none cursor-pointer group p-1"
                      aria-label={hotspot.title}
                    >
                      <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-[#003873] opacity-40"></span>
                      <span className="relative flex h-4 w-4 rounded-full bg-[#003873] border-2 border-white shadow-lg items-center justify-center">
                        <span className="w-1 h-1 rounded-full bg-white"></span>
                      </span>
                    </button>

                    {/* Popover Callout */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-1/2 -translate-x-1/2 top-7 w-64 p-3.5 rounded-xl glass-card-elevated border border-white shadow-2xl text-left z-30"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#003873] bg-blue-50 px-1.5 py-0.5 rounded-md">
                              {hotspot.badge}
                            </span>
                            <span className="font-bold text-xs text-[#0f172a]">
                              {hotspot.metric}
                            </span>
                          </div>
                          <h4 className="font-bold text-[#0f172a] text-xs mb-1">
                            {hotspot.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 leading-relaxed">
                            {hotspot.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Enlarge Button */}
              <button
                onClick={() => onOpenGallery('dashboard-analytics')}
                className="absolute bottom-3 right-3 z-10 px-3 py-1.5 rounded-lg glass-card text-slate-800 text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer hover:bg-white"
              >
                <Maximize2 size={12} className="text-[#003873]" />
                <span>Enlarge HD View</span>
              </button>
            </div>
          </div>

          {/* Floating Glass Widget 1: Live Lead Influx Pill (Top Right) */}
          <div className="hidden lg:flex absolute -top-4 -right-4 z-30 p-3 rounded-xl glass-card-elevated shadow-xl border border-white max-w-xs items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
              <MessageSquare size={16} />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-[#0f172a]">New Lead: Rohit K.</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              </div>
              <p className="text-[10px] text-slate-500">Source: WhatsApp Click-to-Chat (Andheri)</p>
            </div>
          </div>

          {/* Floating Glass Widget 2: Fee Realized Card (Bottom Left) */}
          <div className="hidden lg:flex absolute -bottom-5 -left-4 z-30 p-3.5 rounded-xl glass-card-elevated shadow-xl border border-white max-w-xs items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#003873] flex-shrink-0">
              <CreditCard size={18} />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-[#0f172a]">Fee Realized: ₹13,000</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1 rounded border border-emerald-200">
                  UTR OK
                </span>
              </div>
              <p className="text-[10px] text-slate-500 mt-0.5">Receipt #368 generated for Dhiren D.</p>
            </div>
          </div>

          {/* Floating Glass Widget 3: 60s Reminder Waveform (Bottom Right) */}
          <div className="hidden lg:flex absolute -bottom-5 right-8 z-30 p-3 rounded-xl glass-card-elevated shadow-xl border border-white items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 flex-shrink-0">
              <Bell size={16} />
            </div>
            <div className="flex items-center gap-3">
              <div>
                <span className="text-xs font-bold text-[#0f172a] block">60s Audio Chime</span>
                <span className="text-[10px] text-slate-500">Follow-up due: Pooja P.</span>
              </div>
              <div className="flex items-end gap-0.5 h-5 bg-amber-50/80 px-2 py-1 rounded-md border border-amber-200/60">
                <span className="w-1 bg-amber-500 rounded-full animate-audio-1"></span>
                <span className="w-1 bg-amber-500 rounded-full animate-audio-2"></span>
                <span className="w-1 bg-amber-500 rounded-full animate-audio-3"></span>
                <span className="w-1 bg-amber-500 rounded-full animate-audio-4"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Luminous Glass Metrics Strip with Rounded-2xl - Expanded */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 glass-card-elevated rounded-2xl max-w-[1400px] mx-auto border border-white mt-14 text-center shadow-lg">
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              8,117
            </p>
            <p className="text-xs font-semibold text-slate-500 mt-1">
              Active Inquiries Triaged
            </p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#003873] tracking-tight">
              ₹84.4L
            </p>
            <p className="text-xs font-semibold text-slate-500 mt-1">
              Liquid Realized Tuition
            </p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              354
            </p>
            <p className="text-xs font-semibold text-slate-500 mt-1">
              Closed Admissions
            </p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#003873] tracking-tight">
              1,485+
            </p>
            <p className="text-xs font-semibold text-slate-500 mt-1">
              QR Verified Certificates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
