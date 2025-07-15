
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import EducationSection from '../components/EducationSection';
import CertificationsSection from '../components/CertificationsSection';
import MatrixBackground from '../components/MatrixBackground';
import AdminTrigger from '../components/AdminTrigger';
import SectionNavigation from '../components/SectionNavigation';
import { AdminProvider } from '../contexts/AdminContext';

const Index = () => {
  return (
    <AdminProvider>
      <div className="min-h-screen bg-black text-green-400 relative overflow-hidden">
        <MatrixBackground />
        <AdminTrigger />
        <SectionNavigation />
        <div className="relative z-10 pt-20">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <EducationSection />
          <CertificationsSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
    </AdminProvider>
  );
};

export default Index;
