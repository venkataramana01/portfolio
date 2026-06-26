import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Bot, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-6 h-6 text-neonCyan" />,
      color: 'from-neonCyan/20 to-transparent border-neonCyan/30',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Python', level: 80 },
      ],
    },
    {
      title: 'Frontend Development',
      icon: <Layout className="w-6 h-6 text-neonPurple" />,
      color: 'from-neonPurple/20 to-transparent border-neonPurple/30',
      skills: [
        { name: 'React.js', level: 75 },
        { name: 'HTML5', level: 90 },
        { name: 'CSS3 / Tailwind', level: 90 },
      ],
    },
    {
      title: 'Backend & APIs',
      icon: <Server className="w-6 h-6 text-neonIndigo" />,
      color: 'from-neonIndigo/20 to-transparent border-neonIndigo/30',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'REST APIs', level: 75 },
      ],
    },
    {
      title: 'Database Management',
      icon: <Database className="w-6 h-6 text-emerald-400" />,
      color: 'from-emerald-400/20 to-transparent border-emerald-400/30',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 80 },
      ],
    },
    {
      title: 'AI & Automation',
      icon: <Bot className="w-6 h-6 text-rose-500" />,
      color: 'from-rose-500/20 to-transparent border-rose-500/30',
      skills: [
        { name: 'n8n & AI Workflows', level: 90 },
        { name: 'Agentic AI & LLMs', level: 85 },
        { name: 'Pandas & Scikit-learn', level: 35 },
      ],
    },
    {
      title: 'Tools & Integrations',
      icon: <Wrench className="w-6 h-6 text-amber-500" />,
      color: 'from-amber-500/20 to-transparent border-amber-500/30',
      skills: [
        { name: 'GitHub', level: 75 },
        { name: 'Google Sheets API', level: 85 },
        { name: 'Docker', level: 60 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black/20">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-10 w-[600px] h-[600px] rounded-full radial-glow-cyan glow-circle"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-white mb-2">
            &lt;Skills Engine /&gt;
          </h2>
          <div className="h-[3px] w-20 bg-gradient-to-r from-neonCyan to-neonPurple rounded mx-auto md:mx-0"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-6 bg-glass border border-darkBorder rounded-2xl relative overflow-hidden group hover:border-slate-700 transition-colors duration-300`}
            >
              {/* Subtle top edge glow gradient */}
              <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${category.color.split(' ')[0]}`}></div>
              
              {/* Card Title */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-[#121217] rounded-lg border border-darkBorder">
                  {category.icon}
                </div>
                <h3 className="font-mono text-base font-bold text-slate-200 tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-500">{skill.level}%</span>
                    </div>
                    {/* Progress Track */}
                    <div className="h-1.5 w-full bg-[#121217] rounded-full overflow-hidden border border-darkBorder">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${
                          idx % 3 === 0
                            ? 'from-neonCyan to-neonIndigo shadow-[0_0_8px_rgba(0,240,255,0.4)]'
                            : idx % 3 === 1
                            ? 'from-neonPurple to-neonIndigo shadow-[0_0_8px_rgba(157,78,221,0.4)]'
                            : 'from-neonIndigo to-emerald-400 shadow-[0_0_8px_rgba(99,102,241,0.4)]'
                        }`}
                      />
                    </div>
                  </div>
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
