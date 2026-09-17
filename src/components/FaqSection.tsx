import React, { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does the 60-second follow-up polling system prevent missed calls without overloading the server?',
      a: 'The CRM utilizes lightweight indexed timestamp queries. Every 60 seconds, the client synchronizes only reminders matching the authenticated staff member in Indian Standard Time (IST). When a reminder is due, an audible chime sounds and an amber badge alerts the counsellor, ensuring prospects receive a call in under a minute.'
    },
    {
      q: 'How does the fee milestone engine eliminate tuition defaults and unverified cash entries?',
      a: 'The CRM enforces strict financial accounting. Every non-cash transaction (GPay, UPI, NEFT, Cheques) requires a mandatory bank UTR or cheque reference number before the milestone status changes to "Paid". Once submitted, the system automatically compiles an official, unalterable PDF receipt (Receipt_<Student>_<ID>.pdf) and recalculates the balance in real time.'
    },
    {
      q: 'Can we customize installment schedules for students who need flexible payment dates?',
      a: 'Yes. During admission enrollment (or from the Admission View Drawer), staff can choose between Full Lumpsum and Installment Plans. The builder allows defining a Down Payment (Registration Fee) plus up to 8 customizable milestone installments, each with custom due dates and specific rupee target amounts.'
    },
    {
      q: 'How does the QR verification portal prevent certificate tampering and forgery?',
      a: 'Graduation certificates cannot be generated until two strict institutional criteria are met: [1] Student tuition balance must be ₹0, and [2] Minimum attendance threshold (75%) must be verified in the batch register. Each approved certificate receives a unique alphanumeric serial (e.g. OM-17000) and an encrypted QR code linking to /certificate/show.php, allowing employers to verify authenticity online.'
    },
    {
      q: 'What is the "in-drawer scroll preservation" feature on the Followup Queue table?',
      a: 'In high-volume calling shifts where counsellors handle 60+ calls daily, clicking a lead row slides open the Lead Drawer without navigating away. Logging remarks, changing tags, or rescheduling follow-up dates updates the database and table asynchronously while preserving your exact scroll position and active pagination.'
    },
    {
      q: 'Can staff members view or edit records from other branches?',
      a: 'Access is governed by the 17-token RBAC matrix and center scoping. Super Admins have unrestricted access across All Centers. Branch Admins, Counsellors, and Trainers are scoped to their assigned center unless granted cross-branch authority.'
    }
  ];

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg glass-card text-xs font-bold text-[#003873] uppercase tracking-wider mb-3">
            <Sparkles size={12} />
            <span>Questions & Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0f172a]">
            Frequently asked questions.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Essential information regarding deployment, security, and institutional compliance.
          </p>
        </div>

        {/* Clean Glassmorphic Accordion with Rounded-2xl */}
        <div className="glass-card-elevated rounded-2xl divide-y divide-slate-200/80 shadow-xl border border-white/95 overflow-hidden">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="transition-colors">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none hover:bg-white/50 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-[#0f172a]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#003873]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
