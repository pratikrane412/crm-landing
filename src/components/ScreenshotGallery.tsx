import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { SCREENSHOTS } from '../data/screenshotsData';
import type { ScreenshotItem } from '../types/landing';
import {
  Maximize2,
  Search,
  Sparkles,
  ArrowUp,
  MousePointerClick,
  SlidersHorizontal,
  Expand,
  Minimize2,
  Layers
} from 'lucide-react';

interface ScreenshotGalleryProps {
  onSelectScreenshot: (screenshot: ScreenshotItem) => void;
}

export const ScreenshotGallery: React.FC<ScreenshotGalleryProps> = ({ onSelectScreenshot }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isContainerScroll, setIsContainerScroll] = useState<boolean>(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: 'All Screens (21)' },
    { id: 'dashboard', label: 'Dashboard & Telemetry' },
    { id: 'leads', label: 'Leads & Pipeline' },
    { id: 'academics', label: 'Batches & Attendance' },
    { id: 'finance', label: 'Fees & Receipts' },
    { id: 'forms', label: 'Form Builder' },
    { id: 'admin', label: 'RBAC & Audit' }
  ];

  const filteredScreenshots = SCREENSHOTS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.options.some((o) => o.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleScrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="py-24 relative">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg glass-card text-xs font-bold text-[#003873] uppercase tracking-wider mb-3">
            <Sparkles size={12} />
            <span>Photographic Verification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0f172a]">
            21 High-resolution production screens.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Every module captured directly from the live ibraine CRM. Tiles display architectural specifications first; hover any tile to reveal the production screenshot.
          </p>
        </div>

        {/* Master Studio Frame - Zero Border Radius, Flush Edge-to-Edge Grid */}
        <div className="bg-white rounded-none border border-slate-300 shadow-2xl overflow-hidden flex flex-col">
          {/* Studio Header (Sticky Controls with zero radius) */}
          <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50/90 backdrop-blur-md space-y-4 rounded-none">
            {/* Window Dots & View Mode Controller */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-400/90 border border-rose-500/30" />
                <span className="w-3 h-3 rounded-full bg-amber-400/90 border border-amber-500/30" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/90 border border-emerald-500/30" />
                <span className="text-xs font-bold text-slate-800 ml-2 tracking-tight flex items-center gap-1.5 uppercase">
                  <Layers size={13} className="text-[#003873]" />
                  <span>ibraine CRM Studio Gallery</span>
                </span>
                <span className="text-[10px] font-black text-[#003873] bg-blue-100/70 px-2 py-0.5 rounded-none border border-blue-200 ml-1">
                  21 MODULES
                </span>
              </div>

              {/* Action Controls & Container Scroll Toggle */}
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => setIsContainerScroll(!isContainerScroll)}
                  className="px-3 py-1.5 rounded-none bg-white hover:bg-slate-100 text-xs font-bold text-[#003873] border border-slate-300 shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                  title={isContainerScroll ? 'Expand grid to full page height' : 'Constrain to inner scroll container'}
                >
                  {isContainerScroll ? (
                    <>
                      <Expand size={13} />
                      <span className="hidden sm:inline">Expand Full Height</span>
                      <span className="sm:hidden">Expand</span>
                    </>
                  ) : (
                    <>
                      <Minimize2 size={13} />
                      <span className="hidden sm:inline">Container Scroll View</span>
                      <span className="sm:hidden">Container</span>
                    </>
                  )}
                </button>

                <div className="text-xs font-semibold text-slate-600 bg-white px-3 py-1.5 rounded-none border border-slate-200 hidden md:block">
                  Showing <span className="text-[#003873] font-bold">{filteredScreenshots.length}</span> of 21 screens
                </div>
              </div>
            </div>

            {/* Filter Chips & Keyword Search Bar */}
            <div className="flex flex-col lg:flex-row gap-3 items-center justify-between pt-1">
              {/* Keyword Search */}
              <div className="relative w-full lg:w-80 flex-shrink-0">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                <input
                  type="text"
                  placeholder="Search screens, tags, buttons, drawers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-2 text-xs bg-white border border-slate-300 rounded-none text-[#0f172a] focus:outline-none focus:border-[#003873] shadow-inner"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-xs font-bold p-1 cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Category Segmented Filter Buttons */}
              <div className="flex items-center gap-0 overflow-x-auto w-full lg:w-auto p-0 border border-slate-300 bg-white">
                {categories.map((c) => {
                  const isSelected = activeCategory === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setActiveCategory(c.id)}
                      className={`px-3 py-2 text-xs font-bold whitespace-nowrap cursor-pointer transition-colors border-r last:border-r-0 border-slate-200 ${
                        isSelected
                          ? 'bg-[#003873] text-white'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      {c.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Inner Scrollable Container Viewport with SCROLLBAR HIDDEN (no-scrollbar) */}
          <div
            ref={scrollContainerRef}
            className={`relative p-0 rounded-none no-scrollbar ${
              isContainerScroll
                ? 'h-[720px] sm:h-[780px] overflow-y-auto no-scrollbar'
                : 'overflow-visible'
            }`}
          >
            {/* 3-Column Visual Grid - Spacing: 0 (gap-0), Radius: 0 (rounded-none) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 rounded-none border-t border-l border-slate-300">
              {filteredScreenshots.map((item, index) => {
                const serialNum = String(index + 1).padStart(2, '0');
                const isPast8 = index >= 8;

                return (
                  <motion.div
                    key={item.id}
                    initial={isPast8 ? { opacity: 0, y: 60 } : false}
                    whileInView={isPast8 ? { opacity: 1, y: 0 } : undefined}
                    viewport={isPast8 ? { root: scrollContainerRef, once: true, amount: 0.12 } : undefined}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => onSelectScreenshot(item)}
                    className="group relative aspect-[16/11] sm:aspect-[4/3] w-full border-r border-b border-slate-300 bg-slate-900 rounded-none cursor-pointer overflow-hidden flex flex-col justify-between"
                  >
                    {/* 1ST (DEFAULT/RESTING): HIGH-RES PRODUCTION SCREENSHOT */}
                    <div className="relative w-full h-full overflow-hidden bg-slate-950 select-none">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-top block transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Top Resting Chips */}
                      <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none z-10">
                        <span className="text-[11px] font-mono font-black text-white bg-black/65 backdrop-blur-md px-2.5 py-1 rounded-none shadow-xs">
                          #{serialNum}
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-wider text-white bg-[#003873]/95 backdrop-blur-md px-2.5 py-1 rounded-none shadow-xs">
                          {item.badge}
                        </span>
                      </div>

                      {/* Bottom Resting Title Strip (Fades on Hover) */}
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/85 via-slate-950/45 to-transparent p-4 pt-8 text-white transition-opacity duration-300 group-hover:opacity-0 pointer-events-none z-10">
                        <h4 className="font-bold text-xs sm:text-sm truncate drop-shadow-sm">
                          {item.title}
                        </h4>
                        <p className="text-[10px] text-slate-300 mt-0.5">
                          {item.options.length} Verified Controls • Hover for details
                        </p>
                      </div>
                    </div>

                    {/* 2ND (ON HOVER): CLEAN EDITORIAL INFO CARD SHOWCASE (CANNYWORX STYLE) */}
                    <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out bg-white p-6 sm:p-7 flex flex-col justify-between text-center rounded-none shadow-2xl border border-slate-300">
                      {/* Top Header */}
                      <div className="flex items-start justify-between gap-2 w-full">
                        <span className="font-mono text-xs font-black text-slate-400 tracking-wider">
                          #{serialNum}
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#003873] bg-blue-50 px-2 py-0.5 border border-blue-200">
                          {item.badge}
                        </span>
                      </div>

                      {/* Center Typographical Presentation */}
                      <div className="my-auto space-y-2 max-w-sm mx-auto">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                          MODULE SPECIFICATION
                        </span>
                        <h3 className="text-lg sm:text-xl font-black text-[#0f172a] tracking-tight leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-600 line-clamp-2 sm:line-clamp-3 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Circular Action Button (Matching Cannyworx Video 00:03) */}
                        <div className="mt-3.5 flex flex-col items-center gap-1">
                          <div className="w-13 h-13 rounded-full bg-[#003873] text-white flex items-center justify-center shadow-xl transform scale-80 group-hover:scale-100 transition-all duration-300 hover:scale-110 active:scale-95">
                            <Maximize2 size={18} className="stroke-[2.5]" />
                          </div>
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#003873]">
                            Click to Inspect High-Res
                          </span>
                        </div>
                      </div>

                      {/* Bottom Controls Tag & Action Cue */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium w-full">
                        <span className="flex items-center gap-1.5 text-slate-600 font-semibold text-[11px]">
                          <SlidersHorizontal size={12} className="text-[#003873]" />
                          <span>{item.options.length} Controls Cataloged</span>
                        </span>
                        <span className="text-[11px] font-bold text-[#003873] flex items-center gap-1">
                          <span>View Specs</span>
                          <span>→</span>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Empty Search State */}
            {filteredScreenshots.length === 0 && (
              <div className="p-16 text-center bg-white my-8 rounded-none border border-slate-200">
                <p className="font-bold text-base text-[#0f172a]">No screenshots matched "{searchQuery}"</p>
                <p className="text-xs text-slate-500 mt-1.5">Try clearing your search query or choosing "All Screens".</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="mt-4 px-4 py-2 text-xs font-bold text-white bg-[#003873] hover:bg-[#002852] transition-colors cursor-pointer rounded-none"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* Sticky Docked Container Footer (Zero border radius) */}
          {isContainerScroll && (
            <div className="px-4 sm:px-6 py-3 bg-slate-50 border-t border-slate-300 flex items-center justify-between text-xs text-slate-500 font-medium rounded-none">
              <div className="flex items-center gap-2">
                <MousePointerClick size={14} className="text-[#003873] animate-pulse" />
                <span>
                  Scroll inside this frame to explore all 21 modules (Items past 8 glide up from bottom)
                </span>
              </div>

              <button
                onClick={handleScrollToTop}
                className="px-3 py-1.5 bg-white hover:bg-slate-100 text-[11px] font-bold text-[#003873] border border-slate-300 flex items-center gap-1 transition-colors cursor-pointer rounded-none shadow-xs"
              >
                <ArrowUp size={12} />
                <span>Scroll to Top</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
