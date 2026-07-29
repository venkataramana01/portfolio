import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Bot, Code, GraduationCap, Mail, Globe, Award } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import CountUp from './CountUp';

const About = () => {
  const cards = [
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: 'Problem Solver',
      desc: 'Algorithms enthusiast with 1000+ solved coding problems and strong computational logic.',
    },
    {
      icon: <Bot className="w-6 h-6 text-accent" />,
      title: 'AI Automation Builder',
      desc: 'Designing agentic workflows, LLM integrations, and custom n8n pipelines.',
    },
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: 'Full Stack Developer',
      desc: 'Developing fast, responsive, and data-driven web applications in React, Node, and MongoDB.',
    },
  ];

  const highlights = [
    { number: '2+', value: 2, suffix: '+', label: 'Years Learning', desc: 'Continuous upskilling' },
    { number: '5+', value: 5, suffix: '+', label: 'Projects Built', desc: 'Full-stack & AI' },
    { number: '10+', value: 10, suffix: '+', label: 'Technologies', desc: 'Across the stack' },
  ];

  const profileDetails = [
    {
      icon: <GraduationCap className="w-4 h-4 text-primary" />,
      label: 'Education',
      value: 'B.Tech CSE — Sasi Institute',
      sub: 'CGPA: 8.9',
    },
    {
      icon: <Mail className="w-4 h-4 text-accent" />,
      label: 'Email',
      value: 'venkataramanaachuta1@gmail.com',
      link: 'mailto:venkataramanaachuta1@gmail.com',
    },
    {
      icon: <Globe className="w-4 h-4 text-emerald-400" />,
      label: 'Portfolio',
      value: 'codolio.com/profile/venkataramana',
      link: 'https://codolio.com/profile/venkataramana',
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">About</p>
          <h2 className="section-heading mb-4">
            A bit about me
          </h2>
          <p className="section-subtitle">
            Building scalable applications and intelligent automation systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Intro + Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Intro */}
            <div className="space-y-4">
              <p className="text-lg text-textSecondary leading-relaxed font-medium">
                I'm a Computer Science student passionate about building scalable full-stack applications and AI-powered solutions.
              </p>
              <p className="text-textSecondary leading-relaxed">
                I specialize in Java, JavaScript, MongoDB, AI automation workflows, and LLM integrations.
                I enjoy transforming complex ideas into practical software solutions. By combining full-stack
                architectures with advanced automation, I construct systems that process data, handle
                real-time decisions, and save human hours.
              </p>
            </div>

            {/* Highlight Stats */}
            <div className="grid grid-cols-3 gap-4">
              {highlights.map((h, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-4 rounded-xl bg-surface border border-borderSubtle text-center"
                >
                  <div className="text-2xl font-bold text-textPrimary">
                    {h.value != null ? (
                      <>
                        <CountUp
                          from={0}
                          to={h.value}
                          direction="up"
                          duration={2}
                          startWhen={true}
                          className="text-2xl font-bold text-textPrimary"
                        />
                        {h.suffix && <span>{h.suffix}</span>}
                      </>
                    ) : (
                      h.number
                    )}
                  </div>
                  <div className="text-xs font-semibold text-textPrimary mt-1">{h.label}</div>
                  <div className="text-[10px] text-textSecondary mt-0.5">{h.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Specialization Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-5 rounded-xl border border-borderSubtle bg-surface/50 hover:border-borderHover hover:bg-surfaceLight/30 transition-all duration-300 group"
                >
                  <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.15)">
                  <div className="mb-3 p-2.5 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/15 transition-colors">
                    {card.icon}
                  </div>
                  <h4 className="text-sm font-bold text-textPrimary mb-1.5">{card.title}</h4>
                  <p className="text-xs text-textSecondary leading-relaxed">{card.desc}</p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Profile Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="p-6 glass-card rounded-2xl relative overflow-hidden">
              <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.12)">
              <div className="absolute top-0 right-0 p-3 text-primary border-b border-l border-borderSubtle font-mono text-[10px] rounded-bl-xl bg-primary/5">
                INFO
              </div>
              <h3 className="text-sm font-bold text-textPrimary mb-6 font-mono">
                Developer Profile
              </h3>

              <div className="space-y-5">
                {profileDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-2 bg-surface rounded-lg border border-borderSubtle mt-0.5 shrink-0">
                      {detail.icon}
                    </div>
                    <div className="text-left min-w-0">
                      <span className="text-[10px] font-mono text-textSecondary uppercase block tracking-wider">
                        {detail.label}
                      </span>
                      {detail.link ? (
                        <a
                          href={detail.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-textPrimary hover:text-primary transition-colors block mt-0.5 truncate"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <span className="text-sm font-medium text-textPrimary block mt-0.5">
                          {detail.value}
                        </span>
                      )}
                      {detail.sub && (
                        <span className="text-xs text-textSecondary block mt-0.5">{detail.sub}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="pt-5 mt-5 border-t border-borderSubtle flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-textSecondary font-mono">
                  <Award className="w-3.5 h-3.5 text-primary" />
                  <span>Continuous Learner</span>
                </div>
                <span className="text-xs text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Open to work
                </span>
              </div>
              </SpotlightCard>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
