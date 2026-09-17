import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onOpenGallery: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGallery }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_24px_rgba(0,56,115,0.05)] py-3'
          : 'bg-white/70 backdrop-blur-md border-b border-white/90 py-3.5'
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center group">
          <img
            src="/your_logo.png"
            alt="ibraine Logo"
            className="h-8 sm:h-9 w-auto object-contain max-w-[180px]"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-[13px] font-semibold text-slate-600">
          <a
            href="#overview"
            className="hover:text-[#003873] transition-colors py-1"
          >
            Overview
          </a>
          <a
            href="#queues"
            className="hover:text-[#003873] transition-colors py-1"
          >
            6 Workqueues
          </a>
          <a
            href="#features"
            className="hover:text-[#003873] transition-colors py-1"
          >
            Core Modules
          </a>
          <a
            href="#roles"
            className="hover:text-[#003873] transition-colors py-1"
          >
            Roles
          </a>
          <a
            href="#calculator"
            className="hover:text-[#003873] transition-colors py-1"
          >
            ROI Simulator
          </a>
          <button
            onClick={onOpenGallery}
            className="text-[#003873] hover:text-[#002852] font-bold transition-colors cursor-pointer flex items-center gap-1 py-1"
          >
            <span>Screenshots</span>
            <span className="px-1.5 py-0.2 rounded bg-blue-100/70 text-[11px]">21</span>
          </button>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://crm1.dmsoi.org/"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold text-slate-600 hover:text-[#003873] transition-colors flex items-center gap-1 px-2 py-1.5"
          >
            <span>Portal Login</span>
            <ExternalLink size={12} className="text-slate-400" />
          </a>

          <a
            href="#queues"
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#003873] hover:bg-[#002852] shadow-sm shadow-[#003873]/25 transition-all flex items-center gap-1.5 active:scale-98 cursor-pointer"
          >
            <span>Explore Workflows</span>
            <ArrowRight size={13} />
          </a>
        </div>

        {/* Mobile / Tablet Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/80 border border-slate-200 text-slate-700 hover:bg-white shadow-2xs"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-4 sm:px-6 pb-6 pt-2 bg-white/95 backdrop-blur-2xl border-b border-slate-200/90 shadow-xl space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-700">
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Overview
            </a>
            <a
              href="#queues"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              The 6 Workqueues
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Core Modules
            </a>
            <a
              href="#roles"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Roles & Experience
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              ROI Simulator
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

          <div className="pt-3 border-t border-slate-200/80 flex items-center gap-3">
            <a
              href="https://crm1.dmsoi.org/"
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-2 text-center text-xs font-semibold rounded-lg border border-slate-300 text-slate-700 bg-white"
            >
              Portal Login
            </a>
            <a
              href="#queues"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2 text-center text-xs font-bold rounded-lg bg-[#003873] text-white shadow-sm"
            >
              Explore Live
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
