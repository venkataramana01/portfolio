import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Wrench, Cloud, BrainCircuit } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 className="w-5 h-5 text-primary" />,
      skills: ['Java', 'JavaScript', 'Python'],
    },
    {
      title: 'Frontend',
      icon: <Layout className="w-5 h-5 text-primary" />,
      skills: ['React.js', 'HTML5', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      icon: <Server className="w-5 h-5 text-primary" />,
      skills: ['Node.js', 'Express.js', 'REST APIs'],
    },
    {
      title: 'Databases',
      icon: <Database className="w-5 h-5 text-primary" />,
      skills: ['MongoDB', 'MySQL'],
    },
    {
      title: 'AI & Automation',
      icon: <BrainCircuit className="w-5 h-5 text-primary" />,
      skills: ['n8n Workflows', 'LLM Integration', 'Agentic AI'],
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-5 h-5 text-primary" />,
      skills: ['Docker', 'AWS Basics', 'CI/CD'],
    },
    {
      title: 'Tools',
      icon: <Wrench className="w-5 h-5 text-primary" />,
      skills: ['GitHub', 'VS Code', 'Postman'],
    },
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">Skills</p>
          <h2 className="section-heading mb-4">
            Technologies I work with
          </h2>
          <p className="section-subtitle">
            A curated toolkit spanning the full stack, from systems programming to AI workflows.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-5 rounded-xl border border-borderSubtle bg-surface/40 hover:border-borderHover hover:bg-surfaceLight/30 transition-all duration-300 group"
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/15 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-sm font-semibold text-textPrimary tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 text-[12px] font-medium text-textSecondary bg-white/[0.04] rounded-md border border-borderSubtle hover:text-textPrimary hover:border-borderHover transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
