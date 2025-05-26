
import React from 'react';
import { Shield, Lock, Search, AlertTriangle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-mono text-green-400 mb-8 text-center">
          <span className="border-l-4 border-green-400 pl-4">ABOUT_ME.exe</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="border-2 border-green-400 p-6 bg-black/50 backdrop-blur-sm">
            <div className="font-mono text-green-300 mb-4">
              <span className="text-red-400">vivek@cybersec:</span>
              <span className="text-blue-400">~$</span>
              <span className="text-green-400"> cat about.txt</span>
            </div>
            <p className="text-green-200 leading-relaxed font-mono text-sm">
              Hi, I'm <span className="text-green-400 font-bold">Vivek Patil</span> — a passionate 
              <span className="text-cyan-400"> Cybersecurity Expert</span> dedicated to protecting 
              digital frontiers through ethical hacking, penetration testing, and security research. 
              With a deep understanding of network vulnerabilities and advanced cyber defense 
              techniques, I strive to secure digital assets and educate others on cybersecurity 
              best practices.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="border border-green-400 p-4 text-center hover:bg-green-400/10 transition-all duration-300">
              <Shield className="mx-auto mb-2 text-green-400" size={24} />
              <div className="font-mono text-xs text-green-300">DEFENSE</div>
            </div>
            <div className="border border-green-400 p-4 text-center hover:bg-green-400/10 transition-all duration-300">
              <Lock className="mx-auto mb-2 text-green-400" size={24} />
              <div className="font-mono text-xs text-green-300">SECURITY</div>
            </div>
            <div className="border border-green-400 p-4 text-center hover:bg-green-400/10 transition-all duration-300">
              <Search className="mx-auto mb-2 text-green-400" size={24} />
              <div className="font-mono text-xs text-green-300">RESEARCH</div>
            </div>
            <div className="border border-green-400 p-4 text-center hover:bg-green-400/10 transition-all duration-300">
              <AlertTriangle className="mx-auto mb-2 text-green-400" size={24} />
              <div className="font-mono text-xs text-green-300">PENTESTING</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border-2 border-green-400 p-6 bg-black/70">
            <div className="font-mono text-green-400 mb-4">SYSTEM_INFO.log</div>
            <div className="space-y-2 font-mono text-xs">
              <div><span className="text-cyan-400">NAME:</span> <span className="text-green-300">Vivek Patil</span></div>
              <div><span className="text-cyan-400">ROLE:</span> <span className="text-green-300">Cybersecurity Expert</span></div>
              <div><span className="text-cyan-400">CLEARANCE:</span> <span className="text-green-300">ETHICAL_HACKER</span></div>
              <div><span className="text-cyan-400">STATUS:</span> <span className="text-green-300">ACTIVE</span></div>
              <div><span className="text-cyan-400">SPECIALIZATION:</span> <span className="text-green-300">PENETRATION_TESTING</span></div>
              <div><span className="text-cyan-400">MISSION:</span> <span className="text-green-300">DIGITAL_PROTECTION</span></div>
            </div>
          </div>

          <div className="border border-red-500 p-4 bg-red-500/10">
            <div className="font-mono text-red-400 text-sm">
              <div>⚠️ SECURITY NOTICE ⚠️</div>
              <div className="text-xs mt-2">
                Unauthorized access attempts will be logged and reported.
                This system is protected by advanced security measures.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
