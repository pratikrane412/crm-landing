import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  const comparisonData = [
    { feature: '60-Second Real-Time Follow-up Chimes', om: true, generic: false },
    { feature: 'Down Payment + 8 Milestone Fee Installments', om: true, generic: false },
    { feature: 'Mandatory Bank UTR Verification & PDF Receipts', om: true, generic: false },
    { feature: 'Academic Batch Scheduling & Trainer Conflict Prevention', om: true, generic: false },
    { feature: 'Tamper-Proof QR Certificate Verification Engine', om: true, generic: false },
    { feature: 'Multi-Center Scoping (Andheri, Borivali, Online)', om: true, generic: false },
    { feature: 'Daily Classroom Attendance Registers (P/A/L/E)', om: true, generic: false },
    { feature: '17-Token Granular RBAC Permission Matrix', om: true, generic: false },
    { feature: 'Immutable Audit Trail (/change-history diffs)', om: true, generic: false },
    { feature: 'Zero Per-Seat License Fees (Self-Hosted on Linux VPS)', om: true, generic: false },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg glass-card text-xs font-bold text-[#003873] uppercase tracking-wider mb-3">
            <Sparkles size={12} />
            <span>Capability Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0f172a]">
            Why generic CRMs fall short for education.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Generic platforms require dozens of expensive third-party plugins to handle Indian fee milestones, attendance, and batch calendars. ibraine CRM handles it all natively.
          </p>
        </div>

        <div className="glass-card-elevated rounded-2xl overflow-hidden shadow-xl border border-white/95">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-white/80 border-b border-slate-200/80 text-xs font-bold text-[#0f172a]">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Capability
                  </th>
                  <th scope="col" className="px-6 py-4 text-center border-l border-slate-200/80 bg-blue-50/50 text-[#003873] font-extrabold">
                    ibraine CRM
                  </th>
                  <th scope="col" className="px-6 py-4 text-center border-l border-slate-200/80 text-slate-500">
                    Generic CRM
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white/40' : 'bg-slate-50/40'}>
                    <td className="px-6 py-3.5 font-semibold text-[#0f172a]">
                      {row.feature}
                    </td>
                    <td className="px-6 py-3.5 border-l border-slate-200/80 bg-blue-50/30 text-center">
                      <div className="flex justify-center">
                        <Check size={16} className="text-[#003873] stroke-[3]" />
                      </div>
                    </td>
                    <td className="px-6 py-3.5 border-l border-slate-200/80 text-center">
                      <div className="flex justify-center">
                        <X size={15} className="text-slate-400 stroke-[2.5]" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
