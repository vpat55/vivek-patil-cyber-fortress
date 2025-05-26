
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import EducationSection from '../components/EducationSection';
import MatrixBackground from '../components/MatrixBackground';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleEnterSystem = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="min-h-screen bg-black text-green-400 relative overflow-hidden">
      <MatrixBackground />
      <div className="relative z-10">
        <HeroSection onEnterSystem={handleEnterSystem} />
        {isAuthenticated && (
          <>
            <AboutSection />
            <SkillsSection />
            <EducationSection />
            <ProjectsSection />
            <ContactSection />
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
