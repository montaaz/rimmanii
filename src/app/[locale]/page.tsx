'use client';

import Header from '@/components/Header';
import HomeSlider from '@/components/HomeSlider';
import VideoSection from '@/components/VideoSection';
import CatalogLevels from '@/components/CatalogLevels';
import StatsCounter from '@/components/StatsCounter';
import MediaLogos from '@/components/MediaLogos';
import AboutSection from '@/components/AboutSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import Footer from '@/components/Footer';
import { BackToTop, WhatsAppButton } from '@/components/FloatingWidgets';

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Header />
      
      <div className="pt-0">
        <HomeSlider />
        <VideoSection />
        <CatalogLevels />
        <StatsCounter />
        <MediaLogos />
        <AboutSection />
        <TestimonialsCarousel />
      </div>

      <Footer />

      {/* Floating Widgets */}
      <BackToTop />
      <WhatsAppButton />
    </main>
  );
}



