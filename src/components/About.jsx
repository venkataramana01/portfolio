import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Mail, Globe, MapPin, Cpu, Layers, Workflow } from 'lucide-react';
import profilePic from '../assets/profile.jpg';

const interests = [
  { icon: <Cpu className="w-4 h-4" />, label: 'Full-Stack Engineering' },
  { icon: <Layers className="w-4 h-4" />, label: 'AI & LLM Systems' },
  { icon: <Workflow className="w-4 h-4" />, label: 'Workflow Automation' },
  { icon: <MapPin className="w-4 h-4" />, label: 'Andhra Pradesh, India' },
];

const details = [
  {
    icon: <GraduationCap className="w-4 h-4 text-cyan-300" />,
    label: 'Education',
    value: 'B.Tech Computer Science — Sasi Institute',
    sub: 'CGPA: 8.9',
  },
  {
    icon: <Mail className="w-4 h-4 text-cyan-300" />,
    label: 'Email',
    value: 'venkataramanaachuta1@gmail.com',
    link: 'mailto:venkataramanaachuta1@gmail.com',
  },
  {
    icon: <Globe className="w-4 h-4 text-cyan-300" />,
    label: 'Codolio',
    value: 'codolio.com/profile/venkataramana',
    link: 'https://codolio.com/profile/venkataramana',
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full bg-indigo-600/[0.05] blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500/15 to-cyan-400/10 blur-xl pointer-events-none" />
              <div className="relative rounded-3xl glass-panel p-2.5">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-midnight">
                  <img
                    src={profilePic}
                    alt="Venkata Ramana Achuta"
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex items-center justify-between px-3 py-2.5">
                  <span className="text-xs font-mono text-textSecondary">based in india · est. curious</span>
                  <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Open to work
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Identity */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <p className="text-electric text-xs font-semibold tracking-[0.25em] uppercase mb-4">About</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-textPrimary tracking-tight leading-[1.05] mb-6">
              Curious builder,<br />
              <span className="text-gradient-cinematic">lifelong learner</span>
            </h2>

            <p className="text-textSecondary text-base sm:text-lg leading-relaxed max-w-xl">
              I'm a Computer Science student who loves the space where software
              engineering meets intelligence — designing systems that don't just
              respond, but reason.
            </p>
            <p className="mt-3 text-textSecondary text-base leading-relaxed max-w-xl">
              Most of my energy goes into full-stack products and AI-powered
              workflows: LLM integrations, RAG pipelines, and automation that
              quietly saves hours of human work.
            </p>

            {/* Interest chips */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {interests.map((it, i) => (
                <motion.span
                  key={it.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm text-slate-200 border border-white/[0.08]"
                >
                  <span className="text-cyan-300">{it.icon}</span>
                  {it.label}
                </motion.span>
              ))}
            </div>

            {/* Details */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {details.map((d, i) => (
                <motion.div
                  key={d.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400/30 hover:bg-white/[0.05] transition-all duration-300 h-full flex flex-col"
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="p-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20 shrink-0">
                      {d.icon}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-textSecondary">
                      {d.label}
                    </span>
                  </div>
                  <div className="flex-1">
                    {d.link ? (
                      <a
                        href={d.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-textPrimary hover:text-cyan-300 transition-colors block leading-snug break-words"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-textPrimary block leading-snug break-words">
                        {d.value}
                      </span>
                    )}
                    {d.sub && (
                      <span className="text-xs text-textSecondary block mt-1.5">{d.sub}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
