import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink, Bot, Mail, ShoppingBag, ChevronDown,
  Sparkles, BrainCircuit, Database, FolderGit2,
} from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

/* ---------- Abstract cinematic preview visuals (no fabricated screenshots) ---------- */
const ProjectVisual = ({ variant = 'commerce', icon: Icon, chips = [], className = '' }) => {
  const palettes = {
    commerce: 'from-blue-600/25 via-indigo-500/15 to-cyan-400/20',
    bot: 'from-cyan-500/20 via-blue-600/20 to-indigo-500/15',
    mail: 'from-indigo-500/20 via-blue-500/15 to-cyan-400/15',
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${palettes[variant] || palettes.commerce}`} />
      <div className="absolute inset-0 ai-grid opacity-70" />
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute -bottom-16 -left-10 w-56 h-56 rounded-full bg-blue-600/15 blur-3xl" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-cyan-300/[0.05] to-transparent animate-beam" />
      </div>

      <svg className="absolute inset-0 w-full h-full opacity-30" aria-hidden="true">
        {[
          [12, 30], [28, 18], [45, 26], [62, 14], [80, 24], [90, 40],
          [18, 62], [38, 55], [58, 66], [76, 58], [88, 72], [30, 82], [70, 84],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={`${x}%`} cy={`${y}%`} r="2" fill="#22D3EE" opacity="0.7" />
            {i % 3 === 0 && (
              <line
                x1={`${x}%`} y1={`${y}%`}
                x2={`${[12,28,45,62,80,90,18,38,58,76,88,30,70][(i+2)%13]}%`}
                y2={`${[30,18,26,14,24,40,62,55,66,58,72,82,84][(i+2)%13]}%`}
                stroke="rgba(34,211,238,0.25)" strokeWidth="0.6"
              />
            )}
          </g>
        ))}
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="p-5 rounded-2xl glass-panel border border-cyan-400/20 shadow-[0_0_40px_rgba(34,211,238,0.12)]">
          <Icon className="w-10 h-10 text-cyan-300" />
        </div>
      </div>

      {chips.map((c, i) => (
        <span
          key={c}
          className="absolute glass-panel rounded-full px-2.5 py-1 text-[10px] font-mono text-slate-300 border border-white/[0.08]"
          style={{
            top: `${12 + (i % 3) * 30}%`,
            left: i % 2 === 0 ? '6%' : 'auto',
            right: i % 2 === 0 ? 'auto' : '6%',
          }}
        >
          {c}
        </span>
      ))}
    </div>
  );
};

/* ---------- Expandable details ---------- */
const ProjectDetails = ({ items, tech, links, extra }) => (
  <motion.div
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: 'auto', opacity: 1 }}
    exit={{ height: 0, opacity: 0 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    className="overflow-hidden"
  >
    <div className="pt-6 mt-6 border-t border-white/[0.07] space-y-5">
      {extra}
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-textSecondary mb-3">Key capabilities</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
          {items.map((it, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <span className="leading-relaxed">{it}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {tech.map((t) => (
          <span key={t} className="px-2.5 py-1 text-[11px] font-medium text-slate-300 bg-white/[0.04] rounded-md border border-white/[0.07]">
            {t}
          </span>
        ))}
      </div>
      {links && links.length > 0 && (
        <div className="flex items-center gap-4 pt-1">
          {links.map((l) => {
            const internal = l.href.startsWith('#');
            return (
              <a
                key={l.href}
                href={l.href}
                {...(internal ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                className="inline-flex items-center gap-1.5 text-sm text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                {l.icon}
                <span>{l.label}</span>
              </a>
            );
          })}
        </div>
      )}
    </div>
  </motion.div>
);

const ToggleButton = ({ open, onClick }) => (
  <button
    onClick={onClick}
    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 hover:text-cyan-200 transition-colors"
    aria-expanded={open}
  >
    {open ? 'Hide details' : 'View details'}
    <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
      <ChevronDown className="w-3.5 h-3.5" />
    </motion.span>
  </button>
);

/* ---------- Timeline data ---------- */
const projects = [
  {
    era: 'Recent',
    kind: 'Internship Project',
    featured: true,
    title: 'ShopMATE',
    subtitle: 'AI-powered MERN-stack e-commerce application',
    icon: ShoppingBag,
    variant: 'commerce',
    chips: ['Gemini', 'Pinecone', 'RAG', 'MERN'],
    purpose:
      'A guided internship project where AI is woven through the shopping experience — from product copy to visual understanding to support.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Google Gemini API', 'Pinecone', 'RAG'],
    capabilities: [
      'AI product-description generation via Google Gemini API',
      'Image-based extraction of product names, descriptions and categories',
      'RAG customer-support chatbot over refund & return policies',
      'Gemini Embeddings + Pinecone vector semantic retrieval',
      'Multimodal AI integration for product imagery',
      'Full MERN stack: React, Node.js, Express.js, MongoDB',
    ],
    links: [
      { href: '#experience', label: 'About the internship', icon: <ExternalLink className="w-3.5 h-3.5" /> },
    ],
    extra: (
      <p className="text-xs text-textSecondary leading-relaxed">
        Completed as a guided project during my one-month AI &amp; Deep
        Learning internship at PurpleLane.
      </p>
    ),
    accent: 'from-cyan-400/50 via-blue-500/30 to-transparent',
  },
  {
    era: 'Recent',
    kind: 'Personal Project',
    featured: false,
    title: 'AI Powered Finance Tracker Agent',
    subtitle: 'AI Automation',
    icon: Bot,
    variant: 'bot',
    chips: ['n8n', 'Groq', 'Telegram'],
    purpose:
      'Telegram bot that classifies expenses with an LLM and logs them to Google Sheets automatically.',
    tech: ['n8n', 'Groq LLM', 'Google Sheets API', 'Telegram API'],
    capabilities: [
      'Telegram Bot Integration',
      'LLM Based Classification',
      'Google Sheets Automation',
      'Webhook Processing',
    ],
    github: 'https://github.com/venkataramana01/n8n-FinanceTracker-automation',
    accent: 'from-blue-400/50 via-cyan-500/25 to-transparent',
  },
  {
    era: 'Recent',
    kind: 'Personal Project',
    featured: false,
    title: 'AI Email Responder & Morning Digest',
    subtitle: 'AI Workflow',
    icon: Mail,
    variant: 'mail',
    chips: ['n8n', 'Groq', 'Gmail'],
    purpose:
      'Automated Gmail workflow that drafts professional replies and sends a daily email digest.',
    tech: ['n8n', 'Groq LLM', 'Gmail API', 'Node.js', 'MongoDB'],
    capabilities: [
      'Gmail Integration',
      'AI Reply Generation',
      'Automated Scheduling',
      'Email Logging',
    ],
    github: 'https://github.com/venkataramana01/n8n-email-automation',
    accent: 'from-indigo-400/50 via-blue-500/25 to-transparent',
  },
];

/* ---------- Timeline item ---------- */
const TimelineProject = ({ proj, index }) => {
  const [open, setOpen] = useState(false);
  const Icon = proj.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Node on the spine */}
      <div className="absolute left-[22px] lg:left-1/2 top-32 -translate-x-1/2 z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.15 }}
          className="w-11 h-11 rounded-full glass-panel border border-cyan-400/30 flex items-center justify-center shadow-[0_0_24px_rgba(34,211,238,0.18)]"
        >
          <Icon className="w-5 h-5 text-cyan-300" />
        </motion.div>
        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400/70 hidden lg:block" />
      </div>

      {/* Card — alternates sides on desktop */}
      <div className="ml-14 lg:ml-0">
        <div className="lg:grid lg:grid-cols-2">
          <article
            className={`glass-panel rounded-3xl overflow-hidden relative group ${
              index % 2 === 0 ? 'lg:col-start-2 lg:pl-16' : 'lg:col-start-1 lg:pr-16 lg:row-start-1'
            }`}
          >
            <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r ${proj.accent} opacity-80`} />

            <ProjectVisual
              variant={proj.variant}
              icon={proj.icon}
              chips={proj.chips}
              className="w-full aspect-[16/8] border-b border-white/[0.06]"
            />

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] bg-cyan-400/10 border border-cyan-400/25 text-cyan-300">
                  {proj.era}
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] bg-white/[0.05] border border-white/[0.1] text-slate-300">
                  {proj.kind}
                </span>
                {proj.featured && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] bg-blue-500/15 border border-blue-400/30 text-blue-300">
                    <Sparkles className="w-3 h-3" /> Featured
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold text-textPrimary tracking-tight mb-1 group-hover:text-white transition-colors">
                {proj.title}
              </h3>
              <p className="text-sm font-medium text-cyan-200/80 mb-3">{proj.subtitle}</p>
              <p className="text-sm text-textSecondary leading-relaxed max-w-xl mb-5">
                {proj.purpose}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {proj.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-[11px] font-medium text-slate-400 bg-white/[0.04] rounded border border-white/[0.06]">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-5">
                <ToggleButton open={open} onClick={() => setOpen((v) => !v)} />
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                )}
              </div>

              <AnimatePresence initial={false}>
                {open && (
                  <ProjectDetails
                    items={proj.capabilities}
                    tech={proj.tech}
                    links={proj.links}
                    extra={proj.extra}
                  />
                )}
              </AnimatePresence>
            </div>
          </article>
        </div>
      </div>
    </motion.div>
  );
};

/* ---------- Section ---------- */
const Projects = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-blue-600/[0.05] blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <p className="text-electric text-xs font-semibold tracking-[0.25em] uppercase mb-4 flex items-center gap-2">
            <Database className="w-3.5 h-3.5" /> Projects
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-textPrimary tracking-tight leading-[1.05]">
            Selected <span className="text-gradient-cinematic">work</span>
          </h2>
          <p className="mt-4 text-textSecondary text-base sm:text-lg leading-relaxed max-w-2xl">
            A timeline of systems I've designed and shipped — from AI-powered
            applications to automation pipelines.
          </p>
        </motion.div>

        {/* Timeline spine */}
        <div className="relative">
          <div className="absolute left-[22px] lg:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-cyan-400/50 via-blue-500/25 to-transparent" />
          <div className="space-y-16">
            {projects.map((p, i) => (
              <TimelineProject key={p.title} proj={p} index={i} />
            ))}
          </div>
        </div>

        {/* GitHub footer card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 ml-14 lg:ml-0 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-300">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-textPrimary">More on GitHub</h4>
              <p className="text-xs text-textSecondary mt-1 max-w-lg leading-relaxed">
                Additional repositories, experiments and code samples live on my profile.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/venkataramana01"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm shrink-0"
          >
            View Profile
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
