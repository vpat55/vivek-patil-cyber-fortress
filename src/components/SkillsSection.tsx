
import React from 'react';

const SkillsSection = () => {
  const skills = [
    { name: 'Penetration Testing', level: 95, color: 'border-green-400' },
    { name: 'Network Security', level: 90, color: 'border-cyan-400' },
    { name: 'Ethical Hacking', level: 92, color: 'border-red-400' },
    { name: 'Vulnerability Assessment', level: 88, color: 'border-yellow-400' },
    { name: 'Incident Response', level: 85, color: 'border-purple-400' },
    { name: 'Malware Analysis', level: 80, color: 'border-orange-400' }
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-mono text-green-400 mb-8 text-center">
          <span className="border-l-4 border-green-400 pl-4">SKILLS_MATRIX.db</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="border border-green-400 p-6 bg-black/50 hover:bg-green-400/5 transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
              <span className="font-mono text-green-300 text-sm">{skill.name.toUpperCase()}</span>
              <span className="font-mono text-green-400 text-xs">{skill.level}%</span>
            </div>
            
            <div className="relative">
              <div className="w-full bg-gray-800 h-2 border border-green-400">
                <div 
                  className={`h-full bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-1000 ${skill.color}`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-green-400/20 animate-pulse opacity-50" />
            </div>

            <div className="mt-3 font-mono text-xs text-green-500">
              <span className="text-cyan-400">root@skills:</span>
              <span className="text-green-400">~$ assess --skill {skill.name.toLowerCase().replace(' ', '_')}</span>
              <div className="text-green-300 mt-1">PROFICIENCY_LEVEL: {skill.level >= 90 ? 'EXPERT' : skill.level >= 80 ? 'ADVANCED' : 'INTERMEDIATE'}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 border-2 border-green-400 p-6 bg-black/70">
        <div className="font-mono text-green-400 mb-4">CERTIFICATION_STATUS.log</div>
        <div className="grid md:grid-cols-3 gap-4 font-mono text-xs">
          <div className="text-green-300">✓ CEH - Certified Ethical Hacker</div>
          <div className="text-green-300">✓ CISSP - Security Professional</div>
          <div className="text-green-300">✓ OSCP - Offensive Security</div>
          <div className="text-cyan-400">◦ CISM - In Progress</div>
          <div className="text-cyan-400">◦ SANS GPEN - Planned</div>
          <div className="text-cyan-400">◦ Bug Bounty Hunter</div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
