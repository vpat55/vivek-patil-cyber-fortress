
import React from 'react';
import { Shield, Database, Code, Lock, GraduationCap, Award, Archive, Phone } from 'lucide-react';

const SectionNavigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    <div className="fixed top-4 left-0 right-0 z-30 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black/95 border border-green-400/30 rounded-lg backdrop-blur-sm shadow-lg shadow-green-400/10">
          <div className="flex flex-wrap items-center justify-center gap-1 p-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-1 px-2 py-1.5 border border-green-400/30 text-green-400 font-mono text-xs hover:bg-green-400/10 hover:border-green-400/60 hover:shadow-sm hover:shadow-green-400/20 transition-all duration-200 rounded group"
                >
                  <IconComponent size={12} className="group-hover:text-green-300" />
                  <span className="hidden sm:inline group-hover:text-green-300">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionNavigation;
