
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Biometric Authentication System',
      description: 'Advanced biometric security system with fingerprint and facial recognition',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'Flask'],
      status: 'COMPLETED',
      type: 'SECURITY_SYSTEM'
    },
    {
      title: 'Threat Intelligence Platform',
      description: 'Real-time threat detection and analysis platform for cybersecurity monitoring',
      tech: ['Python', 'Machine Learning', 'API Integration', 'Dashboard'],
      status: 'ACTIVE',
      type: 'THREAT_ANALYSIS'
    },
    {
      title: 'Smart Resume Analyzer',
      description: 'AI-powered resume analysis and job matching system with NLP capabilities',
      tech: ['Python', 'NLP', 'Machine Learning', 'Flask'],
      status: 'DEPLOYED',
      type: 'AI_TOOL'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-mono text-green-400 mb-8 text-center">
          <span className="border-l-4 border-green-400 pl-4">PROJECTS.archive</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border-2 border-green-400 bg-black/70 hover:bg-green-400/5 transition-all duration-300 group">
            <div className="border-b border-green-400 p-4 bg-green-400/10">
              <div className="flex justify-between items-center">
                <div className="font-mono text-green-400 text-lg">{project.title}</div>
                <div className={`px-2 py-1 text-xs font-mono border ${
                  project.status === 'ACTIVE' ? 'border-green-400 text-green-400' :
                  project.status === 'DEPLOYED' ? 'border-cyan-400 text-cyan-400' :
                  project.status === 'COMPLETED' ? 'border-blue-400 text-blue-400' :
                  'border-red-400 text-red-400'
                }`}>
                  {project.status}
                </div>
              </div>
              <div className="text-green-300 font-mono text-xs mt-1">{project.type}</div>
            </div>

            <div className="p-6">
              <p className="text-green-200 mb-4 font-mono text-sm">{project.description}</p>
              
              <div className="mb-4">
                <div className="font-mono text-green-400 text-xs mb-2">TECH_STACK:</div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 border border-green-400 text-green-300 font-mono text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                <button className="flex items-center space-x-2 px-4 py-2 border border-green-400 text-green-400 font-mono text-xs hover:bg-green-400 hover:text-black transition-all duration-300">
                  <Github size={16} />
                  <span>SOURCE</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 border border-cyan-400 text-cyan-400 font-mono text-xs hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  <ExternalLink size={16} />
                  <span>DEMO</span>
                </button>
              </div>

              <div className="mt-4 pt-4 border-t border-green-400/30">
                <div className="font-mono text-xs text-green-500">
                  <span className="text-cyan-400">vivek@projects:</span>
                  <span className="text-green-400">~$ ./deploy_{project.title.toLowerCase().replace(/\s+/g, '_')}.sh</span>
                  <div className="text-green-300 mt-1">Deployment status: {project.status}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
