import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { SCREENSHOTS } from '../data/screenshotsData';
import type { ScreenshotItem } from '../types/landing';

interface LightboxModalProps {
  screenshot: ScreenshotItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  screenshot,
  onClose,
  onNext,
  onPrev
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!screenshot) return null;

  const currentIndex = SCREENSHOTS.findIndex((s) => s.id === screenshot.id);
  const moduleNumber = currentIndex !== -1 ? String(currentIndex + 1).padStart(2, '0') : '01';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/45 backdrop-blur-md animate-in fade-in duration-150">
      {/* Glassmorphic Light Modal Window with Rounded-2xl */}
      <div className="relative w-full max-w-6xl max-h-[94vh] glass-card-elevated rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-white">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-xs font-black text-slate-800 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200/80 shadow-xs">
              #{moduleNumber}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#003873] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200/80 shadow-xs">
              {screenshot.badge}
            </span>
            <h3 className="font-bold text-sm sm:text-base text-[#0f172a] truncate max-w-xs sm:max-w-md">
              {screenshot.title}
            </h3>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={onPrev}
              className="p-1.5 rounded-lg bg-white/80 hover:bg-white text-slate-700 border border-slate-200 shadow-xs transition-colors cursor-pointer"
              title="Previous (Left Arrow)"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={onNext}
              className="p-1.5 rounded-lg bg-white/80 hover:bg-white text-slate-700 border border-slate-200 shadow-xs transition-colors cursor-pointer"
              title="Next (Right Arrow)"
            >
              <ChevronRight size={16} />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/80 hover:bg-rose-50 text-rose-600 border border-slate-200 shadow-xs transition-colors ml-2 cursor-pointer"
              title="Close (Esc)"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6 space-y-6 container-scrollbar">
          {/* Main Screenshot in Studio Bezel */}
          <div className="rounded-xl overflow-hidden border border-slate-200/80 bg-white shadow-inner">
            <img
              src={screenshot.image}
              alt={screenshot.title}
              className="w-full h-auto object-contain max-h-[58vh] mx-auto block"
            />
          </div>

          {/* Operational Details & Specifications (Matching Video 00:06 Case Study Metadata) */}
          <div className="glass-card rounded-xl p-5 space-y-5 border border-white">
            {/* Metadata Badges Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pb-4 border-b border-slate-200/70 text-xs">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Module Index</span>
                <span className="font-extrabold text-[#003873] text-sm mt-0.5 block">#{moduleNumber} of 21</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Functional Domain</span>
                <span className="font-bold text-slate-800 text-xs sm:text-sm mt-0.5 block">{screenshot.badge}</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Cataloged Controls</span>
                <span className="font-bold text-slate-800 text-xs sm:text-sm mt-0.5 block">{screenshot.options.length} Interactive Points</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Access Tier</span>
                <span className="font-bold text-emerald-700 text-xs sm:text-sm mt-0.5 block">17-Token RBAC Scoped</span>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#0f172a]">
                Operational Purpose & Technical Rationale
              </p>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                {screenshot.description}
              </p>
            </div>

            {screenshot.options && screenshot.options.length > 0 && (
              <div className="space-y-3 pt-2 border-t border-slate-200/80">
                <p className="text-xs font-bold uppercase tracking-wider text-[#003873]">
                  Granular Controls Cataloged on This Screen
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {screenshot.options.map((opt, oIdx) => (
                    <div
                      key={oIdx}
                      className="p-3 bg-white/80 border border-slate-200/70 rounded-lg shadow-xs"
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <CheckCircle2 size={13} className="text-[#003873] flex-shrink-0" />
                        <span className="font-bold text-xs text-[#0f172a]">
                          {opt.name}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 pl-5 leading-relaxed">
                        {opt.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
