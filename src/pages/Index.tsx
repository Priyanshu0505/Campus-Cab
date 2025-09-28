import React from 'react';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import ServicesSection from '@/components/home/ServicesSection';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
