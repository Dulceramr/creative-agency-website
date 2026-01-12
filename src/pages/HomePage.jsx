import { useState } from 'react';
import Header from '../components/layout/Header';
import HeroSection from '../components/sections/HeroSection';
import DesignStrategy from '../components/sections/DesignStrategy';
import ApproachSection from '../components/sections/ApproachSection';
import CarouselSection from '../components/sections/CarouselSection';
import CTASection from '../components/sections/CTASection';
import ContactModal from '../components/ui/ContactModal';
import './HomePage.scss';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScheduleCall = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Header onScheduleCall={handleScheduleCall} />
      
      <main>
        <HeroSection onScheduleCall={handleScheduleCall} />
        <DesignStrategy onScheduleCall={handleScheduleCall}/>
        <ApproachSection />
        <CarouselSection />
        <CTASection onScheduleCall={handleScheduleCall} />
      </main>
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default HomePage;