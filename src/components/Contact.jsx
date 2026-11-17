import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Download, ArrowUpRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

const RESUME_URL = '/resume/Venkata%20Ramana%20Achuta.pdf';
const RESUME_NAME = 'Venkata Ramana Achuta.pdf';

const GithubIcon = ({ className }) => (
  <svg className={className || 'w-4 h-4'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className || 'w-4 h-4'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const channels = [
  {
    icon: <Mail className="w-4 h-4" />,
    label: 'Email',
    value: 'venkataramanaachuta1@gmail.com',
    href: 'mailto:venkataramanaachuta1@gmail.com',
  },
  {
    icon: <LinkedinIcon className="w-4 h-4" />,
    label: 'LinkedIn',
    value: 'in/venkataramanaachuta',
    href: 'https://www.linkedin.com/in/venkataramanaachuta/',
  },
  {
    icon: <GithubIcon className="w-4 h-4" />,
    label: 'GitHub',
    value: 'venkataramana01',
    href: 'https://github.com/venkataramana01',
  },
  {
    icon: <Download className="w-4 h-4" />,
    label: 'Resume',
    value: 'Download PDF',
    href: RESUME_URL,
    download: RESUME_NAME,
  },
];

const inputCls =
  'w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15] focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 text-sm text-slate-100 rounded-xl outline-none transition-all duration-200 placeholder:text-slate-600';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus('sending');

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'venkataramana.achuta@sasi.ac.in',
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(null), 5000);
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setStatus('error');
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Cinematic backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-blue-600/[0.07] blur-[140px]" />
        <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-darkBg to-transparent" />
        <div className="absolute inset-0 ai-grid opacity-40" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-cyan-300/[0.04] to-transparent animate-beam" />
        </div>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-electric text-xs font-semibold tracking-[0.3em] uppercase mb-5">Contact</p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] text-textPrimary">
            Have an idea?
            <br />
            <span className="text-gradient-cinematic">Let's build it.</span>
          </h2>
          <p className="mt-6 text-textSecondary text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Whether it's a full-stack product, an AI workflow, or just a good
            conversation about technology — my inbox is open.
          </p>
        </motion.div>

        {/* Channels */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              {...(c.download ? { download: c.download } : { target: '_blank', rel: 'noopener noreferrer' })}
              className="group inline-flex items-center gap-3 pl-4 pr-5 py-3 rounded-2xl glass-panel border border-white/[0.08] hover:border-cyan-400/40 hover:shadow-[0_0_28px_rgba(34,211,238,0.12)] transition-all duration-300"
            >
              <span className="p-2 rounded-xl bg-cyan-400/10 text-cyan-300 group-hover:bg-cyan-400/20 transition-colors">
                {c.icon}
              </span>
              <span className="text-left">
                <span className="block text-[10px] font-mono uppercase tracking-wider text-textSecondary">{c.label}</span>
                <span className="block text-sm font-medium text-textPrimary">{c.value}</span>
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-textSecondary group-hover:text-cyan-300 transition-colors" />
            </a>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="glass-panel rounded-3xl p-6 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
            <h3 className="text-lg font-semibold text-textPrimary mb-6">Send a message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-medium text-slate-400 block">Name</label>
                  <input
                    type="text" id="name" name="name" value={formData.name}
                    onChange={handleInputChange} required placeholder="Your name"
                    className={inputCls}
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-slate-400 block">Email</label>
                  <input
                    type="email" id="email" name="email" value={formData.email}
                    onChange={handleInputChange} required placeholder="name@company.com"
                    className={inputCls}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-medium text-slate-400 block">Message</label>
                <textarea
                  id="message" name="message" rows="5" value={formData.message}
                  onChange={handleInputChange} required
                  placeholder="Tell me about your project or opportunity..."
                  className={`${inputCls} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full btn-primary justify-center py-3.5 disabled:opacity-50 disabled:cursor-not-allowed !bg-gradient-to-r !from-blue-600 !to-cyan-500"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm rounded-xl"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-xl"
                >
                  Failed to send. Please try again or email me directly.
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
