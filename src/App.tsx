import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureStrip } from './components/FeatureStrip';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { ServiceSection } from './components/ServiceSection';
import { SpecialBanner } from './components/SpecialBanner';
import { VideoSection } from './components/VideoSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { LifestyleSection } from './components/LifestyleSection';
import { Footer } from './components/Footer';
import { OrderDrawer } from './components/OrderDrawer';
import { CustomBowlModal } from './components/CustomBowlModal';
import { CustomCursor } from './components/CustomCursor';
import { ScrollToTop } from './components/ScrollToTop';
import { SaladItem } from './types';
import { SALAD_MENU } from './data/saladData';

export default function App() {
  const [selectedSaladForOrder, setSelectedSaladForOrder] = useState<SaladItem | null>(null);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  const [isCustomBowlModalOpen, setIsCustomBowlModalOpen] = useState(false);
  const [recentOrderCount, setRecentOrderCount] = useState(0);

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenOrder = (salad: SaladItem) => {
    setSelectedSaladForOrder(salad);
    setIsOrderDrawerOpen(true);
  };

  const handleHeroOrderNow = () => {
    // Open order for the signature Green Salad
    handleOpenOrder(SALAD_MENU[0]);
  };

  const handleCustomBowlCreated = (customSalad: SaladItem) => {
    setSelectedSaladForOrder(customSalad);
    setIsOrderDrawerOpen(true);
  };

  const handleCateringInquiry = () => {
    scrollToSection('contact');
  };

  const handleOrderSuccess = () => {
    setRecentOrderCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#17251C] flex flex-col font-sans selection:bg-[#4F8F3A] selection:text-white">
      {/* Sticky Header / Navbar */}
      <Navbar
        cartCount={recentOrderCount}
        onOpenCart={() => {
          if (!selectedSaladForOrder) {
            setSelectedSaladForOrder(SALAD_MENU[0]);
          }
          setIsOrderDrawerOpen(true);
        }}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onExploreMenu={() => scrollToSection('menu')}
          onOrderNow={handleHeroOrderNow}
        />

        {/* Hero Bottom Feature Strip */}
        <FeatureStrip />

        {/* About Section */}
        <AboutSection />

        {/* Video Story Section */}
        <VideoSection />

        {/* Menu Section */}
        <MenuSection onOrderSalad={handleOpenOrder} />

        {/* Service Section */}
        <ServiceSection
          onOpenCustomBowl={() => setIsCustomBowlModalOpen(true)}
          onCateringInquiry={handleCateringInquiry}
          onExploreMenu={() => scrollToSection('menu')}
        />

        {/* Special Promotional Banner */}
        <SpecialBanner onTrySalads={() => scrollToSection('menu')} />

        {/* Why Choose Us - Statistics */}
        <WhyChooseUs />

        {/* Contact Section */}
        <ContactSection />

        {/* Premium Lifestyle Dining Section Above Footer */}
        <LifestyleSection onExploreMenu={() => scrollToSection('menu')} />
      </main>

      {/* Dark Green Footer */}
      <Footer />

      {/* Interactive Order Customization Drawer */}
      <OrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        salad={selectedSaladForOrder}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Custom Salad Bowl Builder Modal */}
      <CustomBowlModal
        isOpen={isCustomBowlModalOpen}
        onClose={() => setIsCustomBowlModalOpen(false)}
        onAddCustomBowl={handleCustomBowlCreated}
      />

      {/* Interactive Custom Mouse Follower & Ripple Aura */}
      <CustomCursor />

      {/* Floating Scroll To Top Button with Circular Progress */}
      <ScrollToTop />
    </div>
  );
}
