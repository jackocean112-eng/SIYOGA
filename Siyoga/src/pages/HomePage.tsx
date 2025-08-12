import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import HeroSection from '../components/HomePage/HeroSection';
import ExperienceCategories from '../components/HomePage/ExperienceCategories';
import InteractiveMap from '../components/HomePage/InteractiveMap';
import PopularDestinations from '../components/HomePage/PopularDestinations';
import ContactSection from '../components/HomePage/ContactSection';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <HeroSection />
      <ExperienceCategories />
      <InteractiveMap />
      <PopularDestinations />
      <ContactSection />
    </MainLayout>
  );
};

export default HomePage;
