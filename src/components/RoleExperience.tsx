import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Maximize2, UserCheck, Sparkles } from 'lucide-react';
import { ROLE_VIEWS } from '../data/screenshotsData';
import type { RoleView } from '../types/landing';

interface RoleExperienceProps {
  onOpenGallery: (imageId?: string) => void;
  onTriggerToast: (title: string, description: string, type?: 'reminder' | 'success') => void;
}

export const RoleExperience: React.FC<RoleExperienceProps> = ({
  onOpenGallery,
  onTriggerToast
}) => {
  const [activeRole, setActiveRole] = useState<RoleView>(ROLE_VIEWS[0]);

  const handleSimulateRole = () => {
    onTriggerToast(
      `Logged in as ${activeRole.roleTitle}`,
      `Permissions scoped according to 17-token RBAC matrix. ${activeRole.tagline}`,
      'success'
    );
  };

  return (
    <section id="roles" className="py-24 relative">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg glass-card text-xs font-bold text-[#003873] uppercase tracking-wider mb-3">
            <Sparkles size={12} />
            <span>Role-Based Workflows</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0f172a]">
            Tailored experiences for every department.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            From the front-desk telecaller to the institutional director, each team member operates with specialized views and permissions.
          </p>
        </div>

        {/* Liquid Sliding Role Switcher in Glass Pill */}
        <div className="flex items-center gap-1.5 overflow-x-auto p-2 glass-card rounded-2xl mb-8 border border-white/90 shadow-sm">
          {ROLE_VIEWS.map((role) => {
            const isSelected = activeRole.id === role.id;
            return (
              <button
                key={role.id}
                onClick={() => setActiveRole(role)}
                className={`relative px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-colors whitespace-nowrap cursor-pointer z-10 ${
                  isSelected ? 'text-[#003873]' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeRolePill"
                    className="absolute inset-0 bg-white rounded-xl shadow-sm border border-slate-200/80 -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {role.roleTitle}
              </button>
            );
          })}
        </div>

        {/* Selected Role Glass View with Rounded-2xl */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center glass-card-elevated rounded-2xl p-6 sm:p-10 border border-white/95 shadow-xl">
          {/* Screenshot with Animated Transition */}
          <div className="lg:col-span-7">
            <div className="glass-window p-2.5 sm:p-3.5 border border-white/95 rounded-2xl">
              <div className="relative rounded-xl overflow-hidden bg-white min-h-[260px] flex items-center justify-center border border-slate-200/70 shadow-inner">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeRole.id}
                    src={activeRole.screenshot}
                    alt={activeRole.roleTitle}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-auto object-cover block"
                  />
                </AnimatePresence>

                <button
                  onClick={() => onOpenGallery(activeRole.id)}
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg glass-card text-[#0f172a] text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer hover:bg-white"
                >
                  <Maximize2 size={12} className="text-[#003873]" />
                  <span>Inspect Interface</span>
                </button>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#003873] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200/80 shadow-xs">
                  {activeRole.badge}
                </span>
                <button
                  onClick={handleSimulateRole}
                  className="text-xs font-bold text-[#003873] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <UserCheck size={13} />
                  <span>Simulate View</span>
                </button>
              </div>

              <h3 className="text-2xl font-bold text-[#0f172a] tracking-tight mt-2">
                {activeRole.roleTitle}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mt-2">
                {activeRole.tagline}
              </p>
            </div>

            {/* Superpowers */}
            <div className="space-y-2.5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#0f172a]">
                Workflow Superpowers
              </p>
              {activeRole.superpowers.map((power, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 size={14} className="text-[#003873] flex-shrink-0 mt-0.5" />
                  <span>{power}</span>
                </div>
              ))}
            </div>

            {/* Key Metrics Tracked */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/80">
              {activeRole.primaryMetrics.map((m, idx) => (
                <div key={idx} className="glass-card p-3 rounded-xl border border-white shadow-xs">
                  <p className="text-lg font-extrabold text-[#003873] tracking-tight">
                    {m.value}
                  </p>
                  <p className="text-[11px] font-bold text-[#0f172a] mt-0.5 leading-tight">
                    {m.label}
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5">
                    {m.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
