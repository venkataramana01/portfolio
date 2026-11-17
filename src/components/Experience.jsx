import React from 'react';
import { motion } from 'framer-motion';
import { Brain, GraduationCap, Sparkles, Bot, Briefcase } from 'lucide-react';

const nodeBase =
  'absolute left-[22px] lg:left-8 top-9 -translate-x-1/2 z-10 w-11 h-11 rounded-full glass-panel border flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.12)]';

const TimelineNode = ({ icon, borderClass = 'border-cyan-400/30' }) => (
  <div className={`${nodeBase} ${borderClass}`}>{icon}</div>
);

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/[0.04] blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <p className="text-electric text-xs font-semibold tracking-[0.25em] uppercase mb-4">Experience</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-textPrimary tracking-tight leading-[1.05]">
            Where I've <span className="text-gradient-cinematic">been</span>
          </h2>
        </motion.div>

        {/* Timeline spine */}
        <div className="relative">
          <div className="absolute left-[22px] lg:left-8 top-4 bottom-4 w-px bg-gradient-to-b from-cyan-400/50 via-blue-500/25 to-transparent" />

          <div className="space-y-10">
            {/* --- Featured: PurpleLane --- */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <TimelineNode icon={<Brain className="w-5 h-5 text-cyan-300" />} />
              <div className="ml-14 lg:ml-24">
                <article className="glass-panel rounded-3xl p-6 sm:p-8 relative overflow-hidden group">
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-cyan-400/60 via-blue-400/30 to-transparent" />
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] bg-cyan-400/10 border border-cyan-400/30 text-cyan-300">
                      Internship
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] bg-white/[0.05] border border-white/[0.1] text-slate-300">
                      One-month on-campus
                    </span>
                  </div>
                  <p className="text-xs font-mono text-textSecondary uppercase tracking-wider mb-1">PurpleLane</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-textPrimary mb-5">AI &amp; Deep Learning Intern</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                    {[
                      'Hands-on work on ShopMATE — a guided MERN-stack e-commerce project',
                      'AI product-description generation with Google Gemini API',
                      'Image-based product-detail extraction',
                      'RAG customer-support chatbot (Gemini Embeddings + Pinecone)',
                    ].map((p, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </motion.div>

            {/* --- Featured: Amazon ML Summer School --- */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="relative"
            >
              <TimelineNode icon={<GraduationCap className="w-5 h-5 text-blue-300" />} borderClass="border-blue-400/30" />
              <div className="ml-14 lg:ml-24">
                <article className="glass-panel rounded-3xl p-6 sm:p-8 relative overflow-hidden group">
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-blue-400/60 via-cyan-400/25 to-transparent" />
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] bg-blue-400/10 border border-blue-400/30 text-blue-300">
                      Program
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] bg-white/[0.05] border border-white/[0.1] text-slate-300">
                      First two weeks
                    </span>
                  </div>
                  <p className="text-xs font-mono text-textSecondary uppercase tracking-wider mb-1">Amazon</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-textPrimary mb-5">ML Summer School 2026 — Participant</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                    {[
                      'Supervised learning & deep neural networks',
                      'Dimensionality reduction techniques',
                      'Unsupervised learning fundamentals',
                      'Practical ML concepts and applications',
                    ].map((p, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </motion.div>

            {/* --- Earlier entries --- */}
            {[
              {
                year: '2026',
                title: 'Advanced Full Stack & AI Development',
                org: 'Independent Engineering',
                desc: 'AI automation networks, RAG concepts, and React-Node architectures.',
                icon: <Sparkles className="w-5 h-5 text-primary" />,
              },
              {
                year: '2025',
                title: 'AI Automation Developer',
                org: 'n8n + LLM Workflows',
                desc: 'Serverless automation frameworks orchestrating LLM agents and APIs.',
                icon: <Bot className="w-5 h-5 text-accent" />,
              },
              {
                year: '2025',
                title: 'Web Development Intern',
                org: 'TechIntern',
                desc: 'Frontend UI architecture, React components, and REST API integration.',
                icon: <Briefcase className="w-5 h-5 text-primary" />,
              },
            ].map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative"
              >
                <TimelineNode icon={e.icon} borderClass="border-white/[0.12]" />
                <div className="ml-14 lg:ml-24">
                  <div className="glass-panel rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 hover:border-cyan-400/20 transition-colors">
                    <span className="text-xs font-mono font-semibold text-cyan-300/80 w-12 shrink-0">{e.year}</span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-textPrimary">{e.title}</p>
                      <p className="text-xs text-textSecondary">
                        {e.org} — {e.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
