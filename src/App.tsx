import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsMarquee } from './components/StatsMarquee';
import { InteractiveCommandCenter } from './components/InteractiveCommandCenter';
import { FeatureBento } from './components/FeatureBento';
import { RoleExperience } from './components/RoleExperience';
import { RoiCalculator } from './components/RoiCalculator';
import { ComparisonTable } from './components/ComparisonTable';
import { ScreenshotGallery } from './components/ScreenshotGallery';
import { FaqSection } from './components/FaqSection';
import { CtaFooter } from './components/CtaFooter';
import { LightboxModal } from './components/LightboxModal';
import { Toast, type ToastMessage } from './components/Toast';
import { SCREENSHOTS } from './data/screenshotsData';
import type { ScreenshotItem } from './types/landing';

export function App() {
  const [selectedScreenshot, setSelectedScreenshot] = useState<ScreenshotItem | null>(null);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const handleTriggerToast = (title: string, description: string, type: 'reminder' | 'success' | 'info' = 'info') => {
    const id = Date.now().toString();
    setToast({ id, title, description, type });
    setTimeout(() => {
      setToast((prev) => (prev?.id === id ? null : prev));
    }, 4000);
  };

  const handleOpenGallery = (imageId?: string) => {
    if (imageId) {
      const found = SCREENSHOTS.find((s) => s.id === imageId);
      if (found) {
        setSelectedScreenshot(found);
        return;
      }
    }
    const galleryEl = document.getElementById('gallery');
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNextScreenshot = () => {
    if (!selectedScreenshot) return;
    const currentIndex = SCREENSHOTS.findIndex((s) => s.id === selectedScreenshot.id);
    const nextIndex = (currentIndex + 1) % SCREENSHOTS.length;
    setSelectedScreenshot(SCREENSHOTS[nextIndex]);
  };

  const handlePrevScreenshot = () => {
    if (!selectedScreenshot) return;
    const currentIndex = SCREENSHOTS.findIndex((s) => s.id === selectedScreenshot.id);
    const prevIndex = (currentIndex - 1 + SCREENSHOTS.length) % SCREENSHOTS.length;
    setSelectedScreenshot(SCREENSHOTS[prevIndex]);
  };

  return (
    <div className="relative min-h-screen bg-ambient-aurora bg-tech-grid text-[#0f172a] flex flex-col selection:bg-[#003873] selection:text-white">
      {/* Dynamic Floating Toast */}
      <Toast toast={toast} onDismiss={() => setToast(null)} />

      {/* Navbar */}
      <Navbar onOpenGallery={() => handleOpenGallery()} />

      {/* Main Content with Full Expansive Width */}
      <main className="flex-grow w-full">
        <Hero
          onOpenGallery={handleOpenGallery}
          onTriggerToast={handleTriggerToast}
        />
        <StatsMarquee />
        <InteractiveCommandCenter
          onOpenGallery={handleOpenGallery}
          onTriggerToast={handleTriggerToast}
        />
        <FeatureBento
          onOpenGallery={handleOpenGallery}
          onTriggerToast={handleTriggerToast}
        />
        <RoleExperience
          onOpenGallery={handleOpenGallery}
          onTriggerToast={handleTriggerToast}
        />
        <RoiCalculator />
        <ComparisonTable />
        <ScreenshotGallery onSelectScreenshot={(item) => setSelectedScreenshot(item)} />
        <FaqSection />
      </main>

      {/* Closing CTA & Footer */}
      <CtaFooter onOpenGallery={() => handleOpenGallery()} />

      {/* Lightbox Modal */}
      <LightboxModal
        screenshot={selectedScreenshot}
        onClose={() => setSelectedScreenshot(null)}
        onNext={handleNextScreenshot}
        onPrev={handlePrevScreenshot}
      />
    </div>
  );
}

export default App;
