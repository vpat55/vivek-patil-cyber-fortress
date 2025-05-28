
import React from 'react';
import { Shield, Database, Code, Lock, GraduationCap, Award, Archive, Phone } from 'lucide-react';

const SectionNavigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'about', label: 'about.exe', icon: Shield },
    { id: 'skills', label: 'skill_matrix.db', icon: Database },
    { id: 'programming', label: 'programming_languages', icon: Code },
    { id: 'tools', label: 'security_tools', icon: Lock },
    { id: 'education', label: 'education_records.db', icon: GraduationCap },
    { id: 'certifications', label: 'certifications.vault', icon: Award },
    { id: 'projects', label: 'projects.archive', icon: Archive },
    { id: 'contact', label: 'contact_protocol.init', icon: Phone },
  ];

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-30 bg-black/90 border-2 border-green-400 rounded-lg p-3 backdrop-blur-sm">
      <div className="flex flex-wrap gap-2 justify-center">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex items-center space-x-1 px-3 py-2 border border-green-400/50 text-green-400 font-mono text-xs hover:bg-green-400/20 hover:border-green-400 transition-all duration-300 rounded"
            >
              <IconComponent size={14} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SectionNavigation;
