import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  CreditCard,
  Layers,
  GraduationCap,
  Award,
  ShieldCheck,
  Maximize2,
  Volume2,
  Sparkles,
  QrCode
} from 'lucide-react';
import { playReminderChime } from '../utils/audio';

interface FeatureBentoProps {
  onOpenGallery: (imageId?: string) => void;
  onTriggerToast: (title: string, description: string, type?: 'reminder' | 'success') => void;
}

export const FeatureBento: React.FC<FeatureBentoProps> = ({
  onOpenGallery,
  onTriggerToast
}) => {
  const [activePlan, setActivePlan] = useState<'lump' | 'installments'>('installments');
  const [certVerified, setCertVerified] = useState<boolean>(false);

  const handleTestChime = () => {
    playReminderChime();
    onTriggerToast(
      '60-Second Audio Chime Triggered',
      'Follow-up due: Pooja Parab with Rohit K. (Lead Tag: Hot Lead).',
      'reminder'
    );
  };

  const handleVerifyCert = () => {
    setCertVerified(true);
    onTriggerToast(
      'QR Verification Authenticated',
      'Certificate #OM-17000: Student Pooja Parab. Fee balance: ₹0. Attendance: 92%. Status: Valid.',
      'success'
    );
  };

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="max-w-[1780px] 2xl:max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section Header with Scroll Sliding Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/80 text-[11px] font-bold text-[#1C72B9] uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles size={12} className="text-[#FA8A35]" />
            <span>ENGINEERED CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0f172a] leading-tight">
            Every tool an institution needs. Built into the core.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Eliminate fragmented third-party plugins. ibraine CRM integrates admissions, fees, batch scheduling, and credentials natively.
          </p>
        </motion.div>

        {/* Glassmorphic Bento Grid - Rounded-2xl */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: 60-Second Reminder Engine (Span 2) */}
          <div className="lg:col-span-2 glass-card-elevated rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg border border-white/95 glass-hover">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#003873] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200 shadow-xs">
                  Zero Lead Decay
                </span>
                <button
                  onClick={handleTestChime}
                  className="px-3 py-1.5 rounded-lg glass-card hover:bg-white text-[#003873] text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs border border-white"
                >
                  <Volume2 size={14} className="text-[#003873] animate-pulse" />
                  <span>Test Audio Chime</span>
                </button>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] tracking-tight">
                60-Second Follow-up Polling Engine & Smart IST Reminders
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Background polling synchronizes with Indian Standard Time. When a scheduled follow-up arrives, audio chimes and visual badges trigger instantly, ensuring counsellors call prospects within 60 seconds.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-slate-200/80 bg-white shadow-inner">
              <img
                src="/screenshots/lead_detail_drawer.png"
                alt="Lead Detail Drawer with Reminders"
                className="w-full h-56 sm:h-64 object-cover object-top block"
              />
              <button
                onClick={() => onOpenGallery('lead-detail-drawer')}
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg glass-card text-[#0f172a] text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer hover:bg-white"
              >
                <Maximize2 size={12} className="text-[#003873]" />
                <span>Inspect Drawer UI</span>
              </button>
            </div>
          </div>

          {/* Card 2: 8-Stage Fee Installments */}
          <div className="glass-card-elevated rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg border border-white/95 glass-hover">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#003873] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200 shadow-xs">
                  Financial Integrity
                </span>
                <CreditCard size={18} className="text-[#003873]" />
              </div>

              <h3 className="text-xl font-bold text-[#0f172a] tracking-tight">
                Down Payment + 8 Milestone Installments & Auto Receipts
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Enforce mandatory bank UTR numbers for UPI/NEFT. System compiles branded official receipts automatically: Receipt_&lt;Student&gt;_&lt;ID&gt;.pdf.
              </p>

              {/* Interactive Plan Selector */}
              <div className="pt-2">
                <div className="flex p-1 glass-card border border-white rounded-lg text-xs font-bold">
                  <button
                    onClick={() => setActivePlan('lump')}
                    className={`flex-1 py-1.5 rounded-md transition-all cursor-pointer ${
                      activePlan === 'lump' ? 'bg-white text-[#003873] shadow-sm' : 'text-slate-500'
                    }`}
                  >
                    Lump Sum
                  </button>
                  <button
                    onClick={() => setActivePlan('installments')}
                    className={`flex-1 py-1.5 rounded-md transition-all cursor-pointer ${
                      activePlan === 'installments' ? 'bg-white text-[#003873] shadow-sm' : 'text-slate-500'
                    }`}
                  >
                    8 Milestones
                  </button>
                </div>
                <div className="mt-2 text-[11px] text-slate-500 flex justify-between font-semibold">
                  <span>{activePlan === 'lump' ? 'Full Paid: ₹35,000 (100%)' : 'Milestone 1: ₹13,000 Paid (37%)'}</span>
                  <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    UTR Validated
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-slate-200/80 bg-white shadow-inner">
              <img
                src="/screenshots/admission_drawer.png"
                alt="Admission Installments Ledger"
                className="w-full h-44 object-cover object-top block"
              />
              <button
                onClick={() => onOpenGallery('admission-drawer')}
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg glass-card text-[#0f172a] text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer hover:bg-white"
              >
                <Maximize2 size={12} className="text-[#003873]" />
                <span>View Receipt Flow</span>
              </button>
            </div>
          </div>

          {/* Card 3: Dynamic Form Builder */}
          <div className="glass-card-elevated rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg border border-white/95 glass-hover">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#003873] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200 shadow-xs">
                  No-Code Builder
                </span>
                <Layers size={18} className="text-[#003873]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] tracking-tight">
                Dynamic Form Builder with Mobile/Desktop Live Sync
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Build workshop forms, scholarship tests, and event registrations with 12+ dynamic fields and instant public links (/public-form/:id).
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-slate-200/80 bg-white shadow-inner">
              <img
                src="/screenshots/custom_form_builder.png"
                alt="Custom Form Builder Canvas"
                className="w-full h-48 object-cover object-top block"
              />
              <button
                onClick={() => onOpenGallery('custom-form-builder')}
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg glass-card text-[#0f172a] text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer hover:bg-white"
              >
                <Maximize2 size={12} className="text-[#003873]" />
                <span>View Builder</span>
              </button>
            </div>
          </div>

          {/* Card 4: Academic Batches & Syllabus */}
          <div className="glass-card-elevated rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg border border-white/95 glass-hover">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#003873] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200 shadow-xs">
                  Academic Pacing
                </span>
                <GraduationCap size={18} className="text-[#003873]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] tracking-tight">
                Training Chart Checklist & Daily Attendance Registers
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Faculty tracks completed syllabus modules to compute real-time syllabus completion percentages and enforce the 75% attendance threshold.
              </p>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-slate-200/80 bg-white shadow-inner">
              <img
                src="/screenshots/courses_catalog.png"
                alt="Courses Catalog"
                className="w-full h-48 object-cover object-top block"
              />
              <button
                onClick={() => onOpenGallery('courses-catalog')}
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg glass-card text-[#0f172a] text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer hover:bg-white"
              >
                <Maximize2 size={12} className="text-[#003873]" />
                <span>View Courses</span>
              </button>
            </div>
          </div>

          {/* Card 5: QR Certificates with Live Verification Simulation */}
          <div className="glass-card-elevated rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg border border-white/95 glass-hover">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#003873] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200 shadow-xs">
                  Tamper-Proof
                </span>
                <Award size={18} className="text-[#003873]" />
              </div>

              <h3 className="text-xl font-bold text-[#0f172a] tracking-tight">
                1,485+ Certificates Issued with Public QR Verification
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Requires ₹0 fee balance and 75% attendance. Generates unique serials (OM-17000) with public QR codes verifiable online at /certificate/show.php.
              </p>

              {/* Interactive Verification Simulation */}
              <div className="pt-2">
                <button
                  onClick={handleVerifyCert}
                  className="w-full py-2 px-3 rounded-xl glass-card hover:bg-white border border-white text-xs font-bold text-[#003873] flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                >
                  <QrCode size={14} className="text-[#003873]" />
                  <span>{certVerified ? '✓ Verified: OM-17000 (Authentic)' : 'Simulate QR Scan'}</span>
                </button>
              </div>
            </div>

            <div className="mt-6 relative rounded-xl overflow-hidden border border-slate-200/80 bg-white shadow-inner">
              <img
                src="/screenshots/certificates_manager.png"
                alt="Certificates Manager"
                className="w-full h-44 object-cover object-top block"
              />
              <button
                onClick={() => onOpenGallery('certificates-manager')}
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg glass-card text-[#0f172a] text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer hover:bg-white"
              >
                <Maximize2 size={12} className="text-[#003873]" />
                <span>Inspect QR Portal</span>
              </button>
            </div>
          </div>

          {/* Card 6: 17-Token Granular RBAC (Span 3) */}
          <div className="lg:col-span-3 glass-card-elevated rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row gap-8 items-center justify-between shadow-lg border border-white/95 glass-hover">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#003873] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200 shadow-xs">
                  Access Control & Compliance
                </span>
                <ShieldCheck size={18} className="text-[#003873]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] tracking-tight">
                17-Token Granular RBAC Security & Immutable Audit Logs
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Configure module-by-module permission switches for every staff member. Every change to remarks, tags, and fee milestones is logged in /change-history with exact user attribution and before/after diffs.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['view dashboard', 'view leads', 'add enquiry', 'view admission', 'manage salary', 'change history'].map((token, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg text-xs font-semibold glass-card text-slate-700 border border-white shadow-xs">
                    ✓ {token}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full md:w-96 lg:w-[480px] relative rounded-xl overflow-hidden border border-slate-200/80 bg-white shadow-inner flex-shrink-0">
              <img
                src="/screenshots/permissions_drawer.png"
                alt="RBAC Permission Toggle Drawer"
                className="w-full h-52 object-cover object-top block"
              />
              <button
                onClick={() => onOpenGallery('permissions-drawer')}
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg glass-card text-[#0f172a] text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer hover:bg-white"
              >
                <Maximize2 size={12} className="text-[#003873]" />
                <span>View RBAC Drawer</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
