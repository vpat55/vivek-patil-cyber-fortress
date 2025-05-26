
import React from 'react';
import { Award, CheckCircle, Calendar } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'Introduction to Cyber Security',
      status: 'COMPLETED',
      type: 'SECURITY_FOUNDATION'
    },
    {
      title: 'Cyber Security Fundamentals',
      status: 'COMPLETED',
      type: 'CORE_SECURITY'
    },
    {
      title: 'Cyber Security Analyst Job Simulations',
      status: 'COMPLETED',
      type: 'PRACTICAL_TRAINING'
    },
    {
      title: 'Mobile App Development',
      status: 'COMPLETED',
      type: 'DEVELOPMENT'
    },
    {
      title: 'Using Android Programming',
      status: 'COMPLETED',
      type: 'MOBILE_DEV'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-mono text-green-400 mb-8 text-center">
          <span className="border-l-4 border-green-400 pl-4">CERTIFICATIONS.vault</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div key={index} className="border-2 border-green-400 bg-black/70 hover:bg-green-400/5 transition-all duration-300">
            <div className="border-b border-green-400 p-4 bg-green-400/10">
              <div className="flex justify-between items-center mb-2">
                <Award className="text-green-400" size={20} />
                <div className="px-2 py-1 text-xs font-mono border border-green-400 text-green-400">
                  {cert.status}
                </div>
              </div>
              <div className="text-green-300 font-mono text-xs">{cert.type}</div>
            </div>

            <div className="p-4">
              <h3 className="text-green-300 font-mono text-sm mb-4 leading-relaxed">{cert.title}</h3>
              
              <div className="flex items-center space-x-2 text-green-500 font-mono text-xs">
                <CheckCircle size={14} />
                <span>VERIFIED</span>
              </div>

              <div className="mt-4 pt-4 border-t border-green-400/30">
                <div className="font-mono text-xs text-green-500">
                  <span className="text-cyan-400">vivek@certs:</span>
                  <span className="text-green-400">~$ verify --certificate</span>
                  <div className="text-green-300 mt-1">Status: AUTHENTIC</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border border-cyan-500 p-4 bg-cyan-500/10">
        <div className="font-mono text-cyan-400 text-sm">
          <div>🏆 CERTIFICATION NOTICE</div>
          <div className="text-xs mt-2 text-cyan-300">
            All certifications are verified and contribute to comprehensive cybersecurity expertise.
            Continuous learning and skill development in progress.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
