import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, Bot, Sparkles } from 'lucide-react';

const Experience = () => {
  const timelineData = [
    {
      year: '2026',
      title: 'Advanced Full Stack & AI Development',
      organization: 'Independent Engineering',
      icon: <Sparkles className="w-5 h-5 text-primary" />,
      desc: 'Developing enterprise-grade AI automation networks, implementing RAG concepts, fine-tuning agents, and scaling React-Node server architectures.',
      details: [
        'Researching autonomous multi-agent task routing pipelines.',
        'Integrating advanced vector search engines and unstructured DB stores.',
        'Structuring scalable full-stack boilerplates for AI startup needs.',
      ],
    },
    {
      year: '2025',
      title: 'AI Automation Developer',
      organization: 'n8n + LLM Workflows',
      icon: <Bot className="w-5 h-5 text-accent" />,
      desc: 'Engineered serverless automation frameworks that orchestrate API endpoints, integrate LLM agents, and manage automated notifications and data classifications.',
      details: [
        'Developed end-to-end classification triggers saving operational hours.',
        'Orchestrated Llama 3 models via Groq APIs for real-time document summary.',
        'Configured Telegram and Gmail webhooks within multi-step n8n pipelines.',
      ],
    },
    {
      year: '2025',
      title: 'Web Development Intern',
      organization: 'TechIntern',
      icon: <Briefcase className="w-5 h-5 text-primary" />,
      desc: 'Collaborated on frontend UI architectures, optimizing responsiveness, structuring modular React components, and executing REST API connections.',
      details: [
        'Enhanced page performance metrics and load times by refactoring styles.',
        'Built dynamic forms with robust client-side validation logic.',
        'Collaborated with senior engineers in Git-based code reviews and sprints.',
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">Experience</p>
          <h2 className="section-heading mb-4">
            My journey
          </h2>
          <p className="section-subtitle">
            A timeline of my professional growth and key milestones.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-borderSubtle ml-4 space-y-10">
          {timelineData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 group"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[21px] top-1.5 p-2 bg-darkBg border border-borderSubtle group-hover:border-primary/40 rounded-xl transition-all duration-300 z-10">
                {item.icon}
              </div>

              {/* Content */}
              <div className="p-6 glass-card rounded-2xl group-hover:border-borderHover transition-all duration-300">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-semibold rounded-full">
                    {item.year}
                  </span>
                  <span className="text-xs text-textSecondary font-medium flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1" />
                    {item.organization}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-textPrimary mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-textSecondary leading-relaxed mb-4">
                  {item.desc}
                </p>

                <ul className="space-y-2">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start text-sm text-textSecondary">
                      <span className="text-primary/60 mr-2 mt-1.5 w-1 h-1 rounded-full bg-primary/60 shrink-0" />
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
