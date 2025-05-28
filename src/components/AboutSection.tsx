
import React from 'react';
import { Download, Shield, Terminal, Code } from 'lucide-react';

const AboutSection = () => {
  const handleResumeDownload = () => {
    // Create a downloadable resume file
    const resumeContent = `
VIVEK PATIL - CYBERSECURITY EXPERT
Email: vw0640800@gmail.com
Phone: +91 9579064701
GitHub: https://github.com/vpat55
LinkedIn: https://www.linkedin.com/in/vivek-patil-330a2532a

EDUCATION:
- B.Tech IT, Parul University, Vadodara, Gujarat (CGPA: 7.3) - Current
- HSC, Agnal Multipurpose College (79%)
- SSC, Fr. Agnal Multipurpose School, Mumbai (77.20%)

SKILLS:
- Penetration Testing
- Network Security
- Ethical Hacking
- Programming: Python, Java, C++, JavaScript, HTML, CSS
- Tools: Kali Linux, PowerShell

CERTIFICATIONS:
- Introduction to Cyber Security
- Cyber Security Fundamentals
- Cyber Security Analyst Job Simulations
- Mobile App Development
- Using Android Programming

PROJECTS:
- Biometric Authentication System
- Threat Intelligence Platform
- Smart Resume Analyzer and Job Match Maker
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Vivek_Patil_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-mono text-green-400 mb-8 text-center">
          <span className="border-l-4 border-green-400 pl-4">ABOUT.exe</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="border-2 border-green-400 bg-black/70 p-6 hover:bg-green-400/5 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="text-green-400" size={24} />
              <h3 className="text-green-300 font-mono text-xl">PROFILE.init()</h3>
            </div>
            
            <p className="text-green-300 font-mono text-sm leading-relaxed mb-6">
              Hi, I'm Vivek Patil — a passionate Cybersecurity Expert dedicated to protecting digital 
              frontiers through ethical hacking, penetration testing, and security research. With a deep 
              understanding of network vulnerabilities and advanced cyber defense techniques, I strive to 
              secure digital assets and educate others on cybersecurity best practices.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-green-500 font-mono text-sm">
                <Terminal size={16} />
                <span>Current Focus: Advanced Penetration Testing</span>
              </div>
              <div className="flex items-center space-x-2 text-green-500 font-mono text-sm">
                <Code size={16} />
                <span>Specialization: Network Security & Ethical Hacking</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleResumeDownload}
            className="w-full border-2 border-cyan-400 text-cyan-400 font-mono py-3 px-6 hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <Download size={20} />
            <span>DOWNLOAD RESUME</span>
          </button>
        </div>

        <div className="flex justify-center">
          <div className="border-2 border-green-400 bg-black/70 p-4 hover:bg-green-400/5 transition-all duration-300 transform hover:scale-105">
            <img 
              src="/lovable-uploads/62d6a019-421d-470e-bfd3-635d07ebb821.png" 
              alt="Vivek Patil - Cybersecurity Expert" 
              className="w-64 h-64 object-cover rounded border-2 border-green-400"
            />
            <div className="mt-4 text-center">
              <div className="font-mono text-green-400 text-sm">
                <div>vivek@security:~$ whoami</div>
                <div className="text-green-300 mt-1">Cybersecurity Expert</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border border-cyan-500 p-6 bg-cyan-500/10">
        <div className="font-mono text-cyan-400">
          <div className="text-lg mb-2">🛡️ SECURITY CLEARANCE: VERIFIED</div>
          <div className="text-sm text-cyan-300">
            Dedicated to ethical hacking practices and responsible disclosure. 
            Committed to advancing cybersecurity through continuous learning and community contribution.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
