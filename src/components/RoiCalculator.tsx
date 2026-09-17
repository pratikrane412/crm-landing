import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

export const RoiCalculator: React.FC = () => {
  const [inquiries, setInquiries] = useState<number>(500);
  const [avgFee, setAvgFee] = useState<number>(25000);
  const [convRate, setConvRate] = useState<number>(5);

  const results = useMemo(() => {
    const currentRate = convRate / 100;
    const improvedRate = Math.min((convRate * 1.8) / 100, 0.5);

    const currentAnnual = inquiries * 12 * currentRate * avgFee;
    const improvedAnnual = inquiries * 12 * improvedRate * avgFee;
    const additionalAnnual = improvedAnnual - currentAnnual;

    return {
      improvedRatePercent: (improvedRate * 100).toFixed(1),
      currentAnnual,
      improvedAnnual,
      additionalAnnual
    };
  }, [inquiries, avgFee, convRate]);

  const formatINR = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section id="calculator" className="py-24 relative">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg glass-card text-xs font-bold text-[#003873] uppercase tracking-wider mb-3">
            <Sparkles size={12} />
            <span>Institutional Impact Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0f172a]">
            Calculate the return on faster follow-ups.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            By eliminating 5-minute inquiry decay and automating 60-second IST reminders, institutions typically see a 1.8x lift in consultation closures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Sliders Input Panel with Glassmorphism */}
          <div className="lg:col-span-7 glass-card-elevated rounded-2xl p-6 sm:p-10 space-y-8 flex flex-col justify-center border border-white/95 shadow-xl">
            {/* Slider 1 */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="inquiries" className="text-xs font-bold uppercase tracking-wider text-[#0f172a]">
                  Monthly student inquiries
                </label>
                <span className="font-extrabold text-base text-[#003873] bg-blue-50/90 px-3 py-1 rounded-lg border border-blue-200/80 shadow-xs">
                  {inquiries.toLocaleString('en-IN')} leads
                </span>
              </div>
              <input
                type="range"
                id="inquiries"
                min="50"
                max="2000"
                step="50"
                value={inquiries}
                onChange={(e) => setInquiries(Number(e.target.value))}
                className="w-full cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1.5 font-semibold">
                <span>50</span>
                <span>1,000</span>
                <span>2,000</span>
              </div>
            </div>

            {/* Slider 2 */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="avgFee" className="text-xs font-bold uppercase tracking-wider text-[#0f172a]">
                  Average course fee
                </label>
                <span className="font-extrabold text-base text-[#003873] bg-blue-50/90 px-3 py-1 rounded-lg border border-blue-200/80 shadow-xs">
                  {formatINR(avgFee)}
                </span>
              </div>
              <input
                type="range"
                id="avgFee"
                min="5000"
                max="100000"
                step="1000"
                value={avgFee}
                onChange={(e) => setAvgFee(Number(e.target.value))}
                className="w-full cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1.5 font-semibold">
                <span>₹5,000</span>
                <span>₹50,000</span>
                <span>₹1,00,000</span>
              </div>
            </div>

            {/* Slider 3 */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="convRate" className="text-xs font-bold uppercase tracking-wider text-[#0f172a]">
                  Current conversion rate
                </label>
                <span className="font-extrabold text-base text-[#003873] bg-blue-50/90 px-3 py-1 rounded-lg border border-blue-200/80 shadow-xs">
                  {convRate}%
                </span>
              </div>
              <input
                type="range"
                id="convRate"
                min="1"
                max="20"
                step="1"
                value={convRate}
                onChange={(e) => setConvRate(Number(e.target.value))}
                className="w-full cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1.5 font-semibold">
                <span>1%</span>
                <span>10%</span>
                <span>20%</span>
              </div>
            </div>
          </div>

          {/* Results Display Panel with Glassmorphism */}
          <div className="lg:col-span-5 glass-card-elevated rounded-2xl p-6 sm:p-10 flex flex-col justify-between shadow-xl border border-white/95">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#003873] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200 shadow-xs">
                  Projected Realization
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200 flex items-center gap-1 shadow-xs">
                  <ArrowUpRight size={13} />
                  <span>+80% Lift</span>
                </span>
              </div>

              {/* Animated Visual Comparison Bars */}
              <div className="mt-6 space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-500 mb-1.5">
                    <span>Current Annual Baseline</span>
                    <span>{formatINR(results.currentAnnual)}</span>
                  </div>
                  <div className="h-2.5 bg-slate-200/70 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-slate-400 rounded-full"
                      initial={false}
                      animate={{ width: `${(results.currentAnnual / results.improvedAnnual) * 100}%` }}
                      transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-[#003873] mb-1.5">
                    <span>Projected with ibraine CRM</span>
                    <span>{formatINR(results.improvedAnnual)}</span>
                  </div>
                  <div className="h-2.5 bg-blue-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#003873] to-blue-600 rounded-full"
                      initial={false}
                      animate={{ width: '100%' }}
                      transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>Projected Conversion Rate:</span>
                  <span className="font-bold text-[#0f172a]">{results.improvedRatePercent}% (vs {convRate}%)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/80 glass-card -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 sm:p-8 rounded-b-2xl border-x-0 border-b-0">
              <span className="text-xs font-bold uppercase tracking-wider text-[#003873]">
                Estimated Additional Annual Revenue
              </span>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight mt-1">
                +{formatINR(results.additionalAnnual)}
              </p>
              <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1 font-medium">
                <CheckCircle2 size={12} className="text-[#003873]" />
                <span>Audited against verified Indian installment milestone ledgers.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
