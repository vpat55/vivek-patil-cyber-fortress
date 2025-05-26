
import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      level: 'B.Tech IT (Pursuing)',
      institution: 'Parul University',
      location: 'Vadodara, Gujarat',
      score: 'CGPA: 7.3',
      year: '2022 - Present',
      icon: <GraduationCap className="text-green-400" size={24} />
    },
    {
      level: 'HSC (12th)',
      institution: 'Agnal Multipurpose College',
      location: 'Mumbai',
      score: '79%',
      year: '2020 - 2022',
      icon: <Award className="text-cyan-400" size={24} />
    },
    {
      level: 'SSC (10th)',
      institution: 'Fr. Agnal Multipurpose School',
      location: 'Mumbai',
      score: '77.20%',
      year: '2018 - 2020',
      icon: <Award className="text-blue-400" size={24} />
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-mono text-green-400 mb-8 text-center">
          <span className="border-l-4 border-green-400 pl-4">EDUCATION_RECORDS.db</span>
        </h2>
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="border-2 border-green-400 bg-black/50 hover:bg-green-400/5 transition-all duration-300">
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 border border-green-400 bg-black/70">
                  {edu.icon}
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-mono text-green-300 mb-2 md:mb-0">{edu.level}</h3>
                    <div className="flex items-center space-x-2 text-green-500 font-mono text-sm">
                      <Calendar size={16} />
                      <span>{edu.year}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="font-mono text-green-200">
                      <span className="text-cyan-400">INSTITUTION:</span> {edu.institution}
                    </div>
                    <div className="font-mono text-green-200">
                      <span className="text-cyan-400">LOCATION:</span> {edu.location}
                    </div>
                    <div className="font-mono text-green-200">
                      <span className="text-cyan-400">PERFORMANCE:</span> 
                      <span className="text-green-400 font-bold ml-2">{edu.score}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-green-400/30">
                <div className="font-mono text-xs text-green-500">
                  <span className="text-cyan-400">root@education:</span>
                  <span className="text-green-400">~$ query --record {edu.level.toLowerCase().replace(/[^a-z0-9]/g, '_')}</span>
                  <div className="text-green-300 mt-1">STATUS: {edu.level.includes('Pursuing') ? 'IN_PROGRESS' : 'COMPLETED'}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border border-yellow-500 p-4 bg-yellow-500/10">
        <div className="font-mono text-yellow-400 text-sm">
          <div>📚 ACADEMIC ACHIEVEMENT NOTICE</div>
          <div className="text-xs mt-2 text-yellow-300">
            Consistently maintaining strong academic performance while developing practical cybersecurity skills.
            Currently focusing on advanced IT concepts and security specializations.
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
