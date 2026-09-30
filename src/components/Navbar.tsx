import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenGallery: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGallery }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/75 backdrop-blur-2xl backdrop-saturate-200 border-b border-slate-200/60 shadow-[0_8px_32px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.9)]' 
          : 'bg-white/55 backdrop-blur-xl backdrop-saturate-150 border-b border-white/60 shadow-[0_4px_30px_rgba(0,0,0,0.03),inset_0_1px_0_0_rgba(255,255,255,0.8)]'
      }`}
      style={{
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(200%)' : 'blur(20px) saturate(160%)',
        backdropFilter: scrolled ? 'blur(24px) saturate(200%)' : 'blur(20px) saturate(160%)'
      }}
    >
      <div className="max-w-[1800px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 h-16 sm:h-18 flex items-center justify-between">
        {/* Brand Logo (Left) */}
        <a href="#" className="flex items-center group flex-shrink-0">
          <img
            src="/your_logo.png"
            alt="ibraine Logo"
            className="h-8 sm:h-8.5 w-auto object-contain max-w-[170px]"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        </a>

        {/* Center Navigation Links (Standard High-End Fixed Navbar) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium text-slate-700">
          <a
            href="#why-buy"
            className="hover:text-[#0072CE] transition-colors"
          >
            How it works
          </a>
          <a
            href="#queues"
            className="hover:text-[#0072CE] transition-colors"
          >
            Solutions
          </a>
          <a
            href="#features"
            className="hover:text-[#0072CE] transition-colors"
          >
            Features
          </a>
          <a
            href="#calculator"
            className="hover:text-[#0072CE] transition-colors"
          >
            Pricing
          </a>
          <button
            onClick={onOpenGallery}
            className="hover:text-[#0072CE] transition-colors cursor-pointer"
          >
            Screenshots
          </button>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="https://crm1.dmsoi.org/"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-block text-sm font-semibold text-slate-700 hover:text-[#0072CE] transition-colors"
          >
            Login
          </a>
          <a
            href="https://crm1.dmsoi.org/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#0f172a] hover:bg-black transition-all shadow-sm active:scale-98"
          >
            Start for free
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/80 border border-slate-200 text-slate-800 shadow-xs"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Glassmorphic Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-2xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-700">
              <a
                href="#why-buy"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                How it works
              </a>
              <a
                href="#queues"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Solutions (6 Workqueues)
              </a>
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Features & Modules
              </a>
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Pricing & ROI
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGallery();
                }}
                className="text-left px-3 py-2 rounded-lg text-[#003873] font-bold bg-blue-50/80"
              >
                Browse 21 Real Screenshots →
              </button>
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center gap-3">
              <a
                href="https://crm1.dmsoi.org/"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 text-center text-xs font-semibold rounded-full border border-slate-300 text-slate-700 bg-white"
              >
                Login
              </a>
              <a
                href="https://crm1.dmsoi.org/"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 text-center text-xs font-semibold rounded-full bg-[#0f172a] text-white hover:bg-black transition-all shadow-xs"
              >
                Start for free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
