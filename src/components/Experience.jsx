import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, Bot, Code2, Sparkles } from 'lucide-react';

const Experience = () => {
  const timelineData = [
    {
      year: '2026',
      title: 'Advanced Full Stack & AI Development',
      organization: 'Independent Engineering & Scale',
      icon: <Sparkles className="w-5 h-5 text-neonCyan" />,
      desc: 'Developing enterprise-grade AI automation networks, implementing Retrieval-Augmented Generation (RAG) concepts, fine-tuning agents, and scaling React-Node server architectures.',
      details: [
        'Researching autonomous multi-agent task routing pipelines.',
        'Integrating advanced vector search engines and unstructured DB stores.',
        'Structuring scalable full-stack boilerplates for AI startup needs.'
      ]
    },
    {
      year: '2025',
      title: 'AI Automation Developer',
      organization: 'n8n + LLM Workflows Project Hub',
      icon: <Bot className="w-5 h-5 text-neonPurple" />,
      desc: 'Engineered serverless automation frameworks that orchestrate API endpoints, integrate LLM agents, and manage automated notifications and data classifications.',
      details: [
        'Developed end-to-end classification triggers saving operational hours.',
        'Orchestrated Llama 3 models via Groq APIs for real-time document summary.',
        'Configured Telegram and Gmail webhooks within multi-step n8n pipelines.'
      ]
    },
    {
      year: '2025',
      title: 'Web Development Intern',
      organization: 'TechIntern',
      icon: <Briefcase className="w-5 h-5 text-neonIndigo" />,
      desc: 'Collaborated on frontend UI architectures, optimizing responsiveness, structuring modular React components, and executing REST API connections.',
      details: [
        'Enhanced page performance metrics and load times by refactoring styles.',
        'Built dynamic forms with robust client-side validation logic.',
        'Collaborated with senior engineers in Git-based code reviews and sprints.'
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full radial-glow-cyan glow-circle"></div>

      <div className="max-w-4xl mx-auto z-10 relative">
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-white mb-2">
            &lt;Learning Timeline /&gt;
          </h2>
          <div className="h-[3px] w-20 bg-gradient-to-r from-neonCyan to-neonPurple rounded mx-auto md:mx-0"></div>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-darkBorder pl-8 md:pl-10 space-y-12 ml-4">
          
          {/* Vertical line glow */}
          <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-neonCyan via-neonPurple to-darkBorder"></div>

          {timelineData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative text-left group"
            >
              {/* Bullet Node */}
              <div className="absolute -left-[53px] md:-left-[57px] top-1.5 p-2 bg-[#060608] border border-darkBorder group-hover:border-neonCyan rounded-xl transition-colors duration-300 z-10">
                <div className="relative">
                  {item.icon}
                  <div className="absolute inset-0 bg-neonCyan/20 blur rounded opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>

              {/* Content Panel */}
              <div className="p-6 bg-glass border border-darkBorder rounded-2xl group-hover:border-slate-700 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 bg-neonCyan/10 border border-neonCyan/30 text-neonCyan font-mono text-xs font-bold rounded-full">
                    {item.year}
                  </span>
                  <span className="text-xs text-slate-500 font-mono flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1" /> Estimated / Logged
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-sans group-hover:text-neonCyan transition-colors">
                  {item.title}
                </h3>
                <h4 className="text-sm font-mono text-neonPurple font-semibold mb-4">
                  {item.organization}
                </h4>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {item.desc}
                </p>

                {/* Sub Bullet details */}
                <ul className="space-y-2">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start text-xs text-slate-400">
                      <span className="text-neonCyan font-mono mr-2">&gt;&gt;</span>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
