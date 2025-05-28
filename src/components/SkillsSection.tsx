
import React from 'react';
import { Code, Shield, Database, Terminal, Globe, Cpu } from 'lucide-react';

const SkillsSection = () => {
  const programmingLanguages = [
    { name: 'Python', level: 90, color: 'bg-yellow-500' },
    { name: 'Java', level: 85, color: 'bg-orange-500' },
    { name: 'C', level: 80, color: 'bg-blue-500' },
    { name: 'C++', level: 82, color: 'bg-blue-600' },
    { name: 'JavaScript', level: 88, color: 'bg-yellow-400' },
    { name: 'HTML', level: 95, color: 'bg-orange-600' },
    { name: 'CSS', level: 90, color: 'bg-blue-400' },
  ];

  const securityTools = [
    { name: 'Kali Linux', level: 92, color: 'bg-green-500' },
    { name: 'PowerShell', level: 85, color: 'bg-blue-700' },
    { name: 'Penetration Testing', level: 88, color: 'bg-red-500' },
    { name: 'Network Security', level: 90, color: 'bg-purple-500' },
    { name: 'Ethical Hacking', level: 87, color: 'bg-cyan-500' },
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-mono text-green-400 mb-8 text-center">
          <span className="border-l-4 border-green-400 pl-4">SKILL_MATRIX.db</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div id="programming" className="border-2 border-cyan-400 bg-black/70 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Code className="text-cyan-400" size={24} />
            <h3 className="text-cyan-300 font-mono text-xl">PROGRAMMING_LANGUAGES</h3>
          </div>
          
          <div className="space-y-4">
            {programmingLanguages.map((lang) => (
              <div key={lang.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-green-300 font-mono text-sm">{lang.name}</span>
                  <span className="text-green-400 font-mono text-xs">{lang.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${lang.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${lang.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="tools" className="border-2 border-red-400 bg-black/70 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="text-red-400" size={24} />
            <h3 className="text-red-300 font-mono text-xl">SECURITY_TOOLS</h3>
          </div>
          
          <div className="space-y-4">
            {securityTools.map((tool) => (
              <div key={tool.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-green-300 font-mono text-sm">{tool.name}</span>
                  <span className="text-green-400 font-mono text-xs">{tool.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${tool.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${tool.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 border border-green-500 p-6 bg-green-500/10">
        <div className="font-mono text-green-400">
          <div className="text-lg mb-2">🔧 SYSTEM STATUS: OPERATIONAL</div>
          <div className="text-sm text-green-300">
            All security protocols active. Continuous learning and skill enhancement in progress.
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
