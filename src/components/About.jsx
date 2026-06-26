import React from 'react';
import { motion } from 'framer-motion';import { Brain, Bot, Code, GraduationCap, Mail, Globe, Award } from 'lucide-react';


const About = () => {
  const cards = [
    {
      icon: <Brain className="w-8 h-8 text-neonCyan" />,
      title: 'Problem Solver',
      desc: 'Algorithms enthusiast with 1000+ solved coding problems and strong computational logic.',
      glow: 'border-glow-cyan',
    },
    {
      icon: <Bot className="w-8 h-8 text-neonPurple" />,
      title: 'AI Automation Builder',
      desc: 'Designing agentic workflows, LLM integrations, and custom n8n pipelines.',
      glow: 'border-glow-purple',
    },
    {
      icon: <Code className="w-8 h-8 text-neonIndigo" />,
      title: 'Full Stack Developer',
      desc: 'Developing fast, responsive, and data-driven web applications in React, Node, and MongoDB.',
      glow: 'border-glow-indigo',
    },
  ];

  const profileDetails = [
    {
      icon: <GraduationCap className="w-5 h-5 text-neonCyan" />,
      label: 'Education',
      value: 'B.Tech Computer Science & Technology',
      sub: 'Sasi Institute of Technology & Engineering (CGPA: 8.9)',
    },
    {
      icon: <Mail className="w-5 h-5 text-neonPurple" />,
      label: 'Email',
      value: 'venkataramanaachuta1@gmail.com',
      link: 'mailto:venkataramanaachuta1@gmail.com',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-neonIndigo" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      label: 'LinkedIn',
      value: 'linkedin.com/in/venkata-ramana-achuta-8374a62a1',
      link: 'https://www.linkedin.com/in/venkata-ramana-achuta-8374a62a1',
    },

    {
      icon: <Globe className="w-5 h-5 text-emerald-400" />,
      label: 'Portfolio Profile',
      value: 'codolio.com/profile/venkataramana',
      link: 'https://codolio.com/profile/venkataramana',
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] rounded-full radial-glow-purple glow-circle"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-white mb-2">
            &lt;About Me /&gt;
          </h2>
          <div className="h-[3px] w-20 bg-gradient-to-r from-neonCyan to-neonPurple rounded mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Profile Card & Info - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 bg-glass border border-darkBorder rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 bg-neonCyan/5 text-neonCyan border-b border-l border-darkBorder font-mono text-xs rounded-bl-xl">
                INFO
              </div>
              <h3 className="text-lg font-bold text-white mb-6 font-mono flex items-center space-x-2">
                <span>Developer Profile</span>
              </h3>

              <div className="space-y-6">
                {profileDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="p-2.5 bg-[#121217] rounded-lg border border-darkBorder mt-1">
                      {detail.icon}
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-mono text-slate-500 uppercase block tracking-wider">
                        {detail.label}
                      </span>
                      {detail.link ? (
                        <a
                          href={detail.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-slate-200 hover:text-neonCyan hover:underline transition-all block mt-0.5"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <span className="text-sm font-medium text-slate-200 block mt-0.5">
                          {detail.value}
                        </span>
                      )}
                      {detail.sub && (
                        <span className="text-xs text-slate-400 block mt-0.5">{detail.sub}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Minor highlights widget */}
            <div className="p-5 bg-gradient-to-r from-neonCyan/5 to-neonPurple/5 border border-darkBorder/80 rounded-xl flex items-center space-x-4">
              <Award className="w-10 h-10 text-neonCyan animate-pulse shrink-0" />
              <div className="text-left">
                <div className="text-sm font-bold text-slate-200">Continuous Learner</div>
                <div className="text-xs text-slate-400">
                  Focusing on cutting-edge Agentic AI architectures and React performance patterns.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Intro Text & Specializations - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="text-left space-y-4">
              <p className="text-lg text-slate-300 leading-relaxed font-sans font-medium">
                I'm a Computer Science student passionate about building scalable full-stack applications and AI-powered solutions.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I specialize in Java, JavaScript, MongoDB, AI automation workflows, and LLM integrations. I enjoy transforming complex ideas into practical software solutions. By combining full-stack architectures with advanced automation, I construct systems that process data, handle real-time decisions, and save human hours.
              </p>
            </div>

            {/* Core cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cards.map((card, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className={`p-5 bg-glass border border-darkBorder rounded-xl text-left transition-all duration-300 hover:shadow-lg ${
                    card.glow === 'border-glow-cyan'
                      ? 'hover:border-neonCyan hover:shadow-neonCyan/10'
                      : card.glow === 'border-glow-purple'
                      ? 'hover:border-neonPurple hover:shadow-neonPurple/10'
                      : 'hover:border-neonIndigo hover:shadow-neonIndigo/10'
                  }`}
                >
                  <div className="mb-4 inline-block p-3 bg-[#121217] rounded-lg border border-darkBorder">
                    {card.icon}
                  </div>
                  <h4 className="text-base font-bold text-slate-100 mb-2 font-mono">{card.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
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
