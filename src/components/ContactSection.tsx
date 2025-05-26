
import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      console.log('Message sent successfully!');
    }, 2000);
  };

  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-mono text-green-400 mb-8 text-center">
          <span className="border-l-4 border-green-400 pl-4">CONTACT_PROTOCOL.init</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="border-2 border-green-400 p-6 bg-black/70">
            <div className="font-mono text-green-400 mb-4">SECURE_COMMUNICATION_CHANNELS</div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 border border-green-400 hover:bg-green-400/10 transition-all duration-300 cursor-pointer">
                <Mail className="text-green-400" size={20} />
                <div>
                  <div className="font-mono text-green-300 text-sm">EMAIL_PROTOCOL</div>
                  <div className="font-mono text-green-500 text-xs">vivek.patil@cybersec.dev</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-3 border border-green-400 hover:bg-green-400/10 transition-all duration-300 cursor-pointer">
                <Github className="text-green-400" size={20} />
                <div>
                  <div className="font-mono text-green-300 text-sm">SOURCE_CODE_REPO</div>
                  <div className="font-mono text-green-500 text-xs">github.com/vivekpatil</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-3 border border-green-400 hover:bg-green-400/10 transition-all duration-300 cursor-pointer">
                <Linkedin className="text-green-400" size={20} />
                <div>
                  <div className="font-mono text-green-300 text-sm">PROFESSIONAL_NETWORK</div>
                  <div className="font-mono text-green-500 text-xs">linkedin.com/in/vivekpatil</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-3 border border-green-400 hover:bg-green-400/10 transition-all duration-300 cursor-pointer">
                <Twitter className="text-green-400" size={20} />
                <div>
                  <div className="font-mono text-green-300 text-sm">SOCIAL_UPDATES</div>
                  <div className="font-mono text-green-500 text-xs">@vivekpatil_sec</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-red-500 p-4 bg-red-500/10">
            <div className="font-mono text-red-400 text-sm">
              <div>🔒 SECURITY NOTICE</div>
              <div className="text-xs mt-2 text-red-300">
                All communications are encrypted and monitored for security purposes.
                Response time: 24-48 hours during business operations.
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 border-green-400 bg-black/70">
          <div className="border-b border-green-400 p-4 bg-green-400/10">
            <div className="font-mono text-green-400">SECURE_MESSAGE_TERMINAL</div>
            <div className="font-mono text-green-300 text-xs">Establishing encrypted connection...</div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block font-mono text-green-400 text-sm mb-2">USER_ID:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-black border border-green-400 text-green-300 font-mono px-3 py-2 focus:outline-none focus:border-cyan-400"
                placeholder="Enter your name..."
                required
              />
            </div>

            <div>
              <label className="block font-mono text-green-400 text-sm mb-2">EMAIL_ADDRESS:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-black border border-green-400 text-green-300 font-mono px-3 py-2 focus:outline-none focus:border-cyan-400"
                placeholder="your.email@domain.com"
                required
              />
            </div>

            <div>
              <label className="block font-mono text-green-400 text-sm mb-2">MESSAGE_PAYLOAD:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full bg-black border border-green-400 text-green-300 font-mono px-3 py-2 focus:outline-none focus:border-cyan-400 resize-none"
                placeholder="Type your secure message here..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 border-2 border-green-400 text-green-400 font-mono hover:bg-green-400 hover:text-black transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? 'TRANSMITTING...' : 'SEND_MESSAGE'}
            </button>

            <div className="pt-4 border-t border-green-400/30">
              <div className="font-mono text-xs text-green-500">
                <span className="text-cyan-400">root@contact:</span>
                <span className="text-green-400">~$ encrypt --message --send</span>
                <div className="text-green-300 mt-1">Connection status: SECURE | Encryption: AES-256</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
