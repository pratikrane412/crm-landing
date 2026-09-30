import React from 'react';
import { motion } from 'motion/react';
import { Clock, CreditCard, Award, Sliders, ArrowUpRight } from 'lucide-react';

export const StatsMarquee: React.FC = () => {
  const highlights = [
    {
      icon: <Clock size={16} className="text-[#1C72B9]" />,
      pill: 'Live IST Polling',
      pillColor: 'text-emerald-700 bg-emerald-50 border-emerald-200/80',
      dotColor: 'bg-emerald-500',
      title: '60-Second IST Reminders',
      desc: 'Audio chimes and visual badges trigger at exact scheduled call times with zero lead decay.'
    },
    {
      icon: <CreditCard size={16} className="text-[#FA8A35]" />,
      pill: 'Bank UTR Audited',
      pillColor: 'text-amber-700 bg-amber-50 border-amber-200/80',
      dotColor: 'bg-[#FA8A35]',
      title: '8-Milestone Fee Plans',
      desc: 'Mandatory bank UTR auditing with automated branded PDF receipts and installment debt aging.'
    },
    {
      icon: <Award size={16} className="text-[#1C72B9]" />,
      pill: 'Tamper-Proof QR',
      pillColor: 'text-blue-700 bg-blue-50 border-blue-200/80',
      dotColor: 'bg-[#1C72B9]',
      title: 'Authentic QR Certificates',
      desc: 'Enforces ₹0 balance and 75% attendance before serial issuance, preventing fraudulent student clearance.'
    },
    {
      icon: <Sliders size={16} className="text-[#FA8A35]" />,
      pill: '17-Token Matrix',
      pillColor: 'text-violet-700 bg-violet-50 border-violet-200/80',
      dotColor: 'bg-violet-500',
      title: 'Granular RBAC Security',
      desc: 'Module-by-module permission control with immutable audit diffs across all counsellor accounts.'
    }
  ];

  return (
    <section className="py-10 relative overflow-hidden">
      <div className="max-w-[1780px] 2xl:max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.55,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="ibraine-card p-4 sm:p-5 rounded-2xl relative overflow-hidden group cursor-default"
            >
              {/* Subtle top brand hairline */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#1C72B9]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-xl bg-slate-100/90 border border-slate-200/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${item.pillColor}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor} animate-pulse`} />
                  <span>{item.pill}</span>
                </span>
              </div>

              <div>
                <h4 className="font-bold text-sm text-[#0f172a] tracking-tight group-hover:text-[#1C72B9] transition-colors flex items-center justify-between">
                  <span>{item.title}</span>
                  <ArrowUpRight size={13} className="text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-1 font-normal">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
