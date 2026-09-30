import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  Inbox,
  Clock,
  CalendarCheck,
  Flame,
  AlertCircle,
  Receipt,
  Maximize2,
  CheckCircle2,
  ChevronRight,
  Play,
  Sparkles
} from 'lucide-react';

interface CommandCenterProps {
  onOpenGallery: (imageId?: string) => void;
  onTriggerToast: (title: string, description: string, type?: 'reminder' | 'success') => void;
}

export const InteractiveCommandCenter: React.FC<CommandCenterProps> = ({
  onOpenGallery,
  onTriggerToast
}) => {
  const [activeQueue, setActiveQueue] = useState<number>(0);

  const queues = [
    {
      id: 'lead-captures',
      title: '1. Lead Influx & Triage Queue',
      tabLabel: 'Lead Captures',
      icon: <Inbox size={14} />,
      badge: 'Inbound Triage',
      screenshot: '/screenshots/dashboard_queues.png',
      actionLabel: 'Simulate WhatsApp Outreach',
      actionToast: {
        title: 'WhatsApp Outreach Initiated',
        desc: 'Pre-filled candidate greeting sent via API for Inbound Lead #8117 (Response time: 42s).'
      },
      summary: 'Instant monitoring of inbound inquiries from website brochure downloads, contact forms, Meta ads, and Google campaigns.',
      options: [
        {
          name: 'Direct WhatsApp Trigger',
          type: 'Action Button',
          location: 'Row Actions Column',
          whatItDoes: 'Launches WhatsApp Web or mobile app with candidate phone pre-filled for under-60-second outreach.'
        },
        {
          name: 'Telephony Click-to-Call',
          type: 'Dialer Button',
          location: 'Row Actions Column',
          whatItDoes: 'Initiates immediate telephony dialer on desktop softphones or mobile browsers.'
        },
        {
          name: 'Branch / Location Tag',
          type: 'Location Badge',
          location: 'Table Column 5',
          whatItDoes: 'Automatically tags student location preference to Andheri, Borivali, or Online Virtual branch.'
        },
        {
          name: 'Open Lead Drawer',
          type: 'Slide-Over Trigger',
          location: 'Row Actions Column',
          whatItDoes: 'Opens the slide-over drawer to review remarks, update pipeline tags, and set IST reminders.'
        }
      ]
    },
    {
      id: 'followups-queue',
      title: '2. Daily Follow-up Queue (Date Filtered)',
      tabLabel: 'Follow-up Queue',
      icon: <Clock size={14} />,
      badge: 'Sales Execution',
      screenshot: '/screenshots/leads_directory.png',
      actionLabel: 'Simulate In-Drawer Remark Update',
      actionToast: {
        title: 'Remark Logged with Zero Scroll Drift',
        desc: 'Updated status to "Demo Scheduled" for Rahul M. Scroll position and pagination preserved.'
      },
      summary: 'The primary daily calling workbench for sales counsellors, enhanced with dedicated date filters and scroll preservation.',
      options: [
        {
          name: 'Today Date Filter',
          type: 'Filter Segment',
          location: 'Queue Header Bar',
          whatItDoes: 'Isolates all follow-up calls scheduled for today (00:00 to 23:59 IST) for immediate execution.'
        },
        {
          name: 'Tomorrow & Overdue Filters',
          type: 'Filter Segments',
          location: 'Queue Header Bar',
          whatItDoes: 'Tomorrow enables proactive day-ahead planning; Overdue flags missed calls requiring urgent recovery.'
        },
        {
          name: 'In-Drawer Scroll Preservation',
          type: 'State Preservation',
          location: 'Table Engine',
          whatItDoes: 'Updating remarks or changing dates in the side drawer preserves your exact scroll position and table pagination.'
        },
        {
          name: 'Smart IST Time Pill',
          type: 'Status Badge',
          location: 'Follow-up Column',
          whatItDoes: 'Displays exact scheduled call time in IST, color-coding on-time calls versus overdue calls.'
        }
      ]
    },
    {
      id: 'sessions-queue',
      title: '3. Scheduled Counseling Sessions',
      tabLabel: 'Sessions',
      icon: <CalendarCheck size={14} />,
      badge: 'Demo Scheduling',
      screenshot: '/screenshots/appointments_manager.png',
      actionLabel: 'Simulate Meeting Confirmation',
      actionToast: {
        title: 'Demo Session Confirmed',
        desc: 'Google Meet link and classroom room assignment synced for 4:00 PM IST.'
      },
      summary: 'Tracks planned in-person center tours and virtual Google Meet demo sessions with assigned faculty instructors.',
      options: [
        {
          name: 'Session Mode Badge',
          type: 'Mode Identifier',
          location: 'Table Column 3',
          whatItDoes: 'Differentiates between physical classroom demo visits and virtual video conference counseling.'
        },
        {
          name: 'Assigned Faculty / Counsellor',
          type: 'Staff Badge',
          location: 'Table Column 4',
          whatItDoes: 'Assigns subject matter expert or senior counsellor responsible for conducting the session.'
        },
        {
          name: 'Status Workflow Dropdown',
          type: 'Workflow Selector',
          location: 'Actions Column',
          whatItDoes: 'Updates status between Scheduled, In-Progress, Completed, Student No-Show, or Rescheduled.'
        }
      ]
    },
    {
      id: 'hot-leads',
      title: '4. Hot Leads Pipeline',
      tabLabel: 'Hot Leads',
      icon: <Flame size={14} />,
      badge: 'High-Intent Pipeline',
      screenshot: '/screenshots/lead_detail_drawer.png',
      actionLabel: 'Simulate Fast Conversion to Admission',
      actionToast: {
        title: 'Transferred to Admission Dossier',
        desc: 'Pre-filled student personal details into enrollment form (Saved 10 minutes of manual entry).'
      },
      summary: 'Concentrated high-probability conversion queue featuring prospects with frequent interactions and high purchase intent.',
      options: [
        {
          name: 'Priority Intent Tag',
          type: 'Highlight Pill',
          location: 'Tag Column',
          whatItDoes: 'Automatically highlights leads that have engaged 2+ times in the last 48 hours for immediate triage.'
        },
        {
          name: 'Counsellor Re-Assignment',
          type: 'Staff Dropdown',
          location: 'Table Column 6',
          whatItDoes: 'Enables branch managers to assign hot leads to top-performing closers instantly.'
        },
        {
          name: 'Fast Convert to Admission',
          type: 'Primary Action',
          location: 'Lead Drawer Footer',
          whatItDoes: 'Transfers student personal details directly into the formal Admission Form, saving 10 minutes per enrollment.'
        }
      ]
    },
    {
      id: 'pending-payments',
      title: '5. Pending Fee Receivables',
      tabLabel: 'Pending Payments',
      icon: <AlertCircle size={14} />,
      badge: 'Tuition Recovery',
      screenshot: '/screenshots/admission_drawer.png',
      actionLabel: 'Simulate Milestone Collection',
      actionToast: {
        title: 'Fee Milestone Recorded',
        desc: '₹11,000 received via UPI. Bank UTR validated. Receipt_Dhiren_368.pdf generated.'
      },
      summary: 'Real-time receivables monitoring showing overdue student installment milestones, overdue amounts, and due dates.',
      options: [
        {
          name: 'Overdue Milestone Counter',
          type: 'Milestone Badge',
          location: 'Table Column 2',
          whatItDoes: 'Identifies the specific unpaid milestone (e.g. Installment #2 of 4) due from the student.'
        },
        {
          name: 'Overdue Balance in Rupees',
          type: 'Currency Display',
          location: 'Table Column 3',
          whatItDoes: 'Displays exact rupee balance past due (e.g. ₹11,000 overdue out of ₹35,000 total course fee).'
        },
        {
          name: 'Days Overdue Ageing',
          type: 'Ageing Counter',
          location: 'Table Column 4',
          whatItDoes: 'Categorizes risk into 1-15 days, 16-30 days, or 30+ days overdue for escalated financial reminders.'
        }
      ]
    },
    {
      id: 'revenue-details',
      title: '6. Audited Collections Ledger',
      tabLabel: 'Revenue Details',
      icon: <Receipt size={14} />,
      badge: 'Financial Audit',
      screenshot: '/screenshots/reports_analytics.png',
      actionLabel: 'Simulate Ledger Audit Verification',
      actionToast: {
        title: 'Ledger Audit Passed',
        desc: '100% of collection records verified against bank account statements. Zero unverified drift.'
      },
      summary: 'Chronological financial ledger tracking every cash, UPI, bank transfer, and card payment with mandatory UTR audit numbers.',
      options: [
        {
          name: 'Receipt Serial Code',
          type: 'Unique Identifier',
          location: 'Table Column 1',
          whatItDoes: 'Unique serial receipt identifier generated sequentially by the system.'
        },
        {
          name: 'Payment Mode Classification',
          type: 'Payment Tag',
          location: 'Table Column 3',
          whatItDoes: 'Tags transaction as Cash, Google Pay / UPI, NEFT / NetBanking, POS Card, or Bank Cheque.'
        },
        {
          name: 'Mandatory Bank UTR Code',
          type: 'Audit Text Field',
          location: 'Table Column 4',
          whatItDoes: 'Records official bank UTR reference number, preventing unverified or duplicate cash entries.'
        }
      ]
    }
  ];

  const current = queues[activeQueue];

  const handleSimulateAction = () => {
    if (current.id === 'hot-leads') {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
    onTriggerToast(
      current.actionToast.title,
      current.actionToast.desc,
      'success'
    );
  };

  return (
    <section id="queues" className="py-24 relative overflow-hidden">
      <div className="max-w-[1780px] 2xl:max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section Header with Scroll Sliding Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/80 text-[11px] font-bold text-[#1C72B9] uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles size={12} className="text-[#FA8A35]" />
            <span>OPERATIONAL COMMAND CENTER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0f172a] leading-tight">
            Six dedicated workqueues. Zero lost opportunities.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Switch between incoming leads, scheduled calls, demo sessions, tuition debt collection, and financial audits with continuous scroll preservation.
          </p>
        </motion.div>

        {/* Glassmorphic Segmented Control with Liquid Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-1.5 overflow-x-auto p-1.5 ibraine-card rounded-2xl mb-8 border border-slate-200/80 shadow-xs"
        >
          {queues.map((q, idx) => {
            const isSelected = activeQueue === idx;
            return (
              <button
                key={q.id}
                onClick={() => setActiveQueue(idx)}
                className={`relative px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors whitespace-nowrap cursor-pointer z-10 ${
                  isSelected ? 'text-[#1C72B9]' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeQueuePill"
                    className="absolute inset-0 bg-white rounded-xl shadow-xs border border-slate-200/90 -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {q.icon}
                <span>{q.tabLabel}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Master Glassmorphic Workspace Frame with Rounded-2xl & Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start ibraine-card rounded-2xl p-6 sm:p-8 lg:p-10"
        >
          {/* Animated Screenshot Glass Frame */}
          <div className="lg:col-span-7 space-y-3">
            <div className="p-2 sm:p-3 bg-slate-50/80 border border-slate-200/80 rounded-2xl shadow-inner">
              <div className="relative rounded-xl overflow-hidden bg-white min-h-[300px] flex items-center justify-center border border-slate-200/70 shadow-sm">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.id}
                    src={current.screenshot}
                    alt={current.title}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-auto object-cover block"
                  />
                </AnimatePresence>

                <button
                  onClick={() => onOpenGallery(current.id)}
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md text-[#0f172a] text-xs font-semibold flex items-center gap-1.5 shadow-md border border-slate-200/80 transition-all cursor-pointer hover:bg-white"
                >
                  <Maximize2 size={12} className="text-[#1C72B9]" />
                  <span>Inspect High-Res</span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 px-1 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>ibraine CRM • Operations Command Center</span>
              </span>
              <span className="text-[#1C72B9] font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60">{current.badge}</span>
            </div>
          </div>

          {/* Option-by-Option Breakdown */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#1C72B9] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200/80 mb-2 shadow-2xs">
                {current.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] tracking-tight">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                {current.summary}
              </p>
            </div>

            {/* Interactive Simulation Action Button */}
            <button
              onClick={handleSimulateAction}
              className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-50 border border-[#1C72B9]/40 hover:border-[#1C72B9] text-[#1C72B9] text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-2xs cursor-pointer active:scale-98"
            >
              <Play size={12} className="fill-[#1C72B9]" />
              <span>{current.actionLabel}</span>
            </button>

            {/* Granular Option Breakdown in Cards */}
            <div className="space-y-2 pt-2 border-t border-slate-200/80">
              <p className="text-xs font-bold uppercase tracking-wider text-[#0f172a] mb-2.5">
                Key Controls on This Screen
              </p>
              {current.options.map((opt, oIdx) => (
                <div
                  key={oIdx}
                  className="p-3 bg-slate-50/70 hover:bg-white rounded-xl border border-slate-200/70 hover:border-blue-200 shadow-2xs transition-all"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-bold text-xs text-[#0f172a] flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-[#1C72B9]" />
                      {opt.name}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200/60">
                      {opt.type}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-5">
                    {opt.whatItDoes}
                  </p>
                  <p className="text-[10px] text-slate-400 pl-5 mt-1">
                    Location: <span className="text-slate-700 font-medium">{opt.location}</span>
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() => onOpenGallery(current.id)}
              className="w-full py-3 rounded-xl font-bold text-xs text-white bg-[#0f172a] hover:bg-black flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-md shadow-black/10 active:scale-98"
            >
              <span>Inspect full screen specifications</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
