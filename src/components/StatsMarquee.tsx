import React from 'react';
import { Clock, CreditCard, Award, Sliders } from 'lucide-react';

export const StatsMarquee: React.FC = () => {
  const highlights = [
    {
      icon: <Clock size={16} className="text-[#003873]" />,
      title: '60-Second IST Reminders',
      desc: 'Audio chimes and visual badges trigger at scheduled call times.'
    },
    {
      icon: <CreditCard size={16} className="text-[#003873]" />,
      title: '8-Milestone Fee Plans',
      desc: 'Mandatory bank UTR auditing with automated branded PDF receipts.'
    },
    {
      icon: <Award size={16} className="text-[#003873]" />,
      title: 'Tamper-Proof QR Certificates',
      desc: 'Enforces ₹0 balance and 75% attendance before serial issuance.'
    },
    {
      icon: <Sliders size={16} className="text-[#003873]" />,
      title: '17-Token Granular RBAC',
      desc: 'Module-by-module permission control with immutable audit diffs.'
    }
  ];

  return (
    <section className="py-8 relative">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 glass-card p-4 sm:p-5 rounded-2xl shadow-sm glass-hover border border-white/90"
            >
              <div className="p-2.5 rounded-lg bg-blue-50/80 text-[#003873] border border-blue-200/60 flex-shrink-0 mt-0.5 shadow-xs">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-xs text-[#0f172a]">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
