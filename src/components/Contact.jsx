import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Copy, Check, MessageSquare, Terminal } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  const copyEmail = () => {
    navigator.clipboard.writeText('venkataramanaachuta1@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    // Simulate API request send
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black/10">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full radial-glow-cyan glow-circle"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-white mb-2">
            &lt;Get In Touch /&gt;
          </h2>
          <div className="h-[3px] w-20 bg-gradient-to-r from-neonCyan to-neonPurple rounded mx-auto md:mx-0"></div>
          <p className="mt-4 text-slate-400 max-w-lg text-center md:text-left">
            Have a project in mind, an internship opportunity, or want to discuss AI integrations? Drop a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info Side - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div className="p-6 bg-glass border border-darkBorder rounded-2xl relative overflow-hidden flex-1 flex flex-col justify-between">
              
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-slate-400 font-mono text-xs mb-6">
                  <Terminal className="w-4 h-4 text-neonPurple" />
                  <span>direct_communication_channels</span>
                </div>

                {/* Email Channel */}
                <div className="p-4 bg-[#121217] border border-darkBorder rounded-xl hover:border-neonCyan transition-all duration-300 group">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block tracking-wider mb-2">
                    Primary Email
                  </span>
                  <div className="flex items-center justify-between gap-4">
                    <a
                      href="mailto:venkataramanaachuta1@gmail.com"
                      className="text-sm font-medium text-slate-200 group-hover:text-neonCyan transition-colors font-mono truncate"
                    >
                      venkataramanaachuta1@gmail.com
                    </a>
                    <button
                      onClick={copyEmail}
                      className="p-2 bg-glass border border-darkBorder rounded hover:border-slate-500 hover:text-white text-slate-400 transition-all shrink-0"
                      title="Copy to clipboard"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* LinkedIn Channel */}
                <div className="p-4 bg-[#121217] border border-darkBorder rounded-xl hover:border-neonPurple transition-all duration-300 group">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block tracking-wider mb-2">
                    Professional Network
                  </span>
                  <div className="flex items-center justify-between gap-4">
                    <a
                      href="https://www.linkedin.com/in/venkata-ramana-achuta-8374a62a1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-slate-200 group-hover:text-neonPurple transition-colors font-mono truncate"
                    >
                      linkedin.com/in/venkata-ramana-achuta-8374a62a1
                    </a>
                    <a
                      href="https://www.linkedin.com/in/venkata-ramana-achuta-8374a62a1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-glass border border-darkBorder rounded hover:border-slate-500 hover:text-white text-slate-400 transition-all shrink-0"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* GitHub Channel (Easily Editable Placeholder) */}
                <div className="p-4 bg-[#121217] border border-darkBorder rounded-xl hover:border-slate-500 transition-all duration-300 group">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block tracking-wider mb-2">
                    GitHub Code Base
                  </span>
                  <div className="flex items-center justify-between gap-4">
                    <a
                      href="https://github.com/venkataramana01"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-slate-400 group-hover:text-slate-200 transition-colors font-mono truncate"
                    >
                      github.com/venkataramana01
                    </a>
                    <a
                      href="https://github.com/venkataramana01"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-glass border border-darkBorder rounded hover:border-slate-500 hover:text-white text-slate-400 transition-all shrink-0"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Status footer */}
              <div className="pt-6 border-t border-darkBorder/60 text-xs text-slate-500 font-mono flex items-center justify-between">
                <span>Latency: 24ms</span>
                <span className="text-emerald-400 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mr-1.5"></span>
                  Online
                </span>
              </div>
            </div>
          </motion.div>

          {/* Form Side - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="p-6 md:p-8 bg-glass border border-darkBorder rounded-2xl relative overflow-hidden h-full flex flex-col justify-center">
              
              <div className="flex items-center space-x-2 mb-6">
                <MessageSquare className="w-5 h-5 text-neonCyan" />
                <h3 className="text-lg font-bold text-white font-sans">Send Secure Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-[#0d0d12]/60 border border-darkBorder hover:border-slate-600 focus:border-neonCyan focus:ring-1 focus:ring-neonCyan text-sm text-slate-100 rounded-lg outline-none transition-all duration-300 font-sans"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 bg-[#0d0d12]/60 border border-darkBorder hover:border-slate-600 focus:border-neonCyan focus:ring-1 focus:ring-neonCyan text-sm text-slate-100 rounded-lg outline-none transition-all duration-300 font-sans"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Message Body
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Describe your project details, timeline, or inquiries..."
                    className="w-full px-4 py-3 bg-[#0d0d12]/60 border border-darkBorder hover:border-slate-600 focus:border-neonCyan focus:ring-1 focus:ring-neonCyan text-sm text-slate-100 rounded-lg outline-none transition-all duration-300 font-sans resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full inline-flex items-center justify-center space-x-2 py-3.5 bg-neonCyan text-black font-bold rounded-lg hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] disabled:opacity-55 disabled:cursor-not-allowed transition-all duration-300 transform active:scale-95"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span>Transmitting Payload...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Transmission</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 text-xs font-mono rounded"
                  >
                    ✔ Transmission received successfully! I will reach out shortly.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
