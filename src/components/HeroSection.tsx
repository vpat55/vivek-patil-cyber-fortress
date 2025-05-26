import React, { useState, useEffect } from 'react';

interface HeroSectionProps {
  onEnterSystem: () => void;
}

const HeroSection = ({ onEnterSystem }: HeroSectionProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const texts = [
    'Cybersecurity Expert',
    'Ethical Hacker',
    'Digital Defender',
    'Security Researcher'
  ];

  useEffect(() => {
    const currentText = texts[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-20">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 font-mono text-green-400 glitch" data-text="VIVEK PATIL">
            VIVEK PATIL
          </h1>
          <div className="text-2xl md:text-4xl font-mono text-green-300 h-12">
            <span className="border-r-2 border-green-400 animate-pulse">
              {displayText}
            </span>
            <span className="animate-ping text-green-400">|</span>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center space-x-4">
          <button 
            onClick={onEnterSystem}
            className="px-6 py-3 border-2 border-green-400 text-green-400 font-mono hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            ENTER SYSTEM
          </button>
          <button className="px-6 py-3 border-2 border-red-500 text-red-500 font-mono hover:bg-red-500 hover:text-black transition-all duration-300 transform hover:scale-105">
            ACCESS DENIED
          </button>
        </div>
      </div>

      <div className="absolute top-4 left-4 font-mono text-xs text-green-500 opacity-70">
        <div>root@vivek-portfolio:~$ whoami</div>
        <div>vivek_patil</div>
        <div>root@vivek-portfolio:~$ status</div>
        <div>ONLINE - SECURE CONNECTION ESTABLISHED</div>
      </div>
    </section>
  );
};

export default HeroSection;
