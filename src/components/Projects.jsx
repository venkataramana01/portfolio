import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Bot, Mail, Cpu, FolderGit2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI Powered Finance Tracker Agent',
      category: 'AI AUTOMATION & INTEGRATION',
      desc: 'An AI automation system connecting Telegram, Groq LLM, Google Sheets, and n8n to automatically classify messages and extract financial transactions.',
      features: [
        'Telegram Bot Integration',
        'LLM Based Classification',
        'Google Sheets Automation',
        'Webhook Processing',
      ],
      tech: ['n8n', 'Groq LLM', 'Google Sheets API', 'Telegram API'],
      icon: <Bot className="w-5 h-5 text-neonCyan" />,
      github: '#contact', // Redirects to contact placeholder
      demo: 'https://github.com/venkataramana01/n8n-FinanceTracker-automation',
    },
    {
      title: 'AI Email Responder & Morning Digest',
      category: 'AI AUTOMATION & WORKFLOW',
      desc: 'AI-powered email automation workflow that generates professional replies and creates daily email summaries.',
      features: [
        'Gmail Integration',
        'AI Reply Generation',
        'Automated Scheduling',
        'Email Logging',
      ],
      tech: ['n8n', 'Groq LLM', 'Gmail API', 'Node.js', 'MongoDB'],
      icon: <Mail className="w-5 h-5 text-neonPurple" />,
      github: '#contact',
      demo: 'https://github.com/venkataramana01/n8n-email-automation',
    },
    {
      title: 'UPS Failure Prediction System',
      category: 'MACHINE LEARNING',
      desc: 'Machine learning based predictive maintenance system to detect UPS failures before occurrence.',
      features: [
        'Random Forest Model',
        'Data Analysis',
        'Predictive Maintenance',
        'MongoDB Storage',
      ],
      tech: ['Python', 'Scikit-learn', 'Pandas', 'MongoDB', 'Node.js'],
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      github: '#contact',
      demo: 'https://github.com/venkataramana01/ML_Project',
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black/10">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] rounded-full radial-glow-purple glow-circle"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-white mb-2">
            &lt;Featured Projects /&gt;
          </h2>
          <div className="h-[3px] w-20 bg-gradient-to-r from-neonCyan to-neonPurple rounded mx-auto md:mx-0"></div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="p-6 bg-glass border border-darkBorder rounded-2xl flex flex-col justify-between hover:border-slate-600 transition-all duration-300 shadow-xl"
            >
              {/* Category & Icon */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] text-neonPurple font-bold tracking-widest uppercase">
                    {proj.category}
                  </span>
                  <div className="p-2 bg-[#121217] rounded-lg border border-darkBorder">
                    {proj.icon}
                  </div>
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl font-bold text-white mb-3 text-left font-sans group-hover:text-neonCyan transition-colors">
                  {proj.title}
                </h3>
                <p className="text-sm text-slate-400 text-left mb-6 leading-relaxed line-clamp-3">
                  {proj.desc}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  <span className="font-mono text-xs text-slate-500 block text-left">Key Highlights:</span>
                  <ul className="grid grid-cols-1 gap-1.5">
                    {proj.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center text-xs text-slate-300 text-left">
                        <span className="w-1.5 h-1.5 rounded-full bg-neonCyan mr-2"></span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies & Links */}
              <div className="space-y-6 pt-4 border-t border-darkBorder/60">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-1 bg-[#121217] border border-darkBorder text-[10px] font-mono text-slate-400 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card Action Links */}
                <div className="flex items-center justify-between">
                  <a
                    href={proj.github}
                    className="inline-flex items-center space-x-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span>View Repository</span>
                  </a>
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs font-mono text-neonCyan hover:text-white transition-colors"
                  >
                    <span>Live Showcase</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Code Repository Showcase Section (Easy to Update Placeholder) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-6 bg-glass-heavy border border-darkBorder rounded-2xl text-left"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-neonCyan/10 border border-neonCyan/30 rounded-xl text-neonCyan">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-sans">
                  Looking for more code repositories?
                </h4>
                <p className="text-xs text-slate-400 mt-1 max-w-xl">
                  Additional repositories and open-source contributions will be populated here. You can check my profile for immediate code samples or request specific repository access.
                </p>
              </div>
            </div>
            
            <a
              href="https://codolio.com/profile/venkataramana"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 font-mono text-xs font-semibold text-black bg-neonCyan rounded-lg hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all shrink-0"
            >
              Check Code Profiles
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
