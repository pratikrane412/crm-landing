import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bell, CheckCircle2, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  title: string;
  description: string;
  type?: 'reminder' | 'success' | 'info';
}

interface ToastProps {
  toast: ToastMessage | null;
  onDismiss: () => void;
}

export const Toast: React.FC<ToastProps> = ({ toast, onDismiss }) => {
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="fixed top-20 right-4 sm:right-8 z-50 max-w-sm w-full bg-white/95 backdrop-blur-md border border-[#d2d2d7] rounded-lg p-3.5 shadow-xl flex items-start gap-3"
        >
          <div className="p-2 rounded bg-blue-50 text-[#003873] flex-shrink-0 mt-0.5">
            {toast.type === 'reminder' ? (
              <Bell size={16} className="animate-bounce" />
            ) : (
              <CheckCircle2 size={16} className="text-emerald-600" />
            )}
          </div>
          <div className="flex-1 pr-2">
            <h5 className="font-bold text-xs text-[#1d1d1f] tracking-tight">
              {toast.title}
            </h5>
            <p className="text-[11px] text-[#86868b] leading-relaxed mt-0.5">
              {toast.description}
            </p>
          </div>
          <button
            onClick={onDismiss}
            className="text-[#86868b] hover:text-[#1d1d1f] p-1 rounded transition-colors"
          >
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
