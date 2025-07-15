
import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showSubtitle, setShowSubtitle] = useState(false);

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

  // Show subtitle after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSubtitle(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-20">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 font-mono text-green-400 glitch" data-text="VIVEK PATIL">
            VIVEK PATIL
          </h1>
          
          <div className={`subtitle text-2xl md:text-3xl font-mono text-green-300 mb-6 transform transition-all duration-800 ${showSubtitle ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            Mobile Developer
          </div>
          
          <div className="text-2xl md:text-4xl font-mono text-green-300 h-12">
            <span className="border-r-2 border-green-400 animate-pulse">
              {displayText}
            </span>
            <span className="animate-ping text-green-400">|</span>
          </div>
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
