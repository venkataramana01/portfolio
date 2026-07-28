import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Code2, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      metric: '3,333+',
      label: 'Problems Solved',
      desc: 'Solved over 3,333 problems on CodeChef across multiple difficulty levels.',
      icon: <Code2 className="w-5 h-5 text-primary" />,
      tag: 'CodeChef',
    },
    {
      metric: '170+',
      label: 'DSA Problems',
      desc: 'Solved 170+ data structures & algorithm problems on LeetCode.',
      icon: <Code2 className="w-5 h-5 text-accent" />,
      tag: 'LeetCode',
    },
    {
      metric: 'Gold',
      label: 'Badge Achievement',
      desc: 'Earned the coveted Gold Badge status for advanced coding consistency.',
      icon: <Award className="w-5 h-5 text-amber-400" />,
      tag: 'Elite Status',
    },
    {
      metric: 'NIT AP',
      label: 'Hackathon Competitor',
      desc: 'Participated in the hackathon at National Institute of Technology, Andhra Pradesh.',
      icon: <Trophy className="w-5 h-5 text-primary" />,
      tag: 'Innovation',
    },
  ];

  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">Achievements</p>
          <h2 className="section-heading mb-4">
            Performance metrics
          </h2>
          <p className="section-subtitle">
            Numbers that reflect my commitment to continuous learning and problem-solving.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-5 rounded-xl border border-borderSubtle bg-surface/40 hover:border-borderHover hover:bg-surfaceLight/30 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[9px] text-primary font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                    {ach.tag}
                  </span>
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/15 transition-colors">
                    {ach.icon}
                  </div>
                </div>

                {/* Big Metric Display */}
                <div className="flex items-baseline space-x-1 mb-2">
                  <span className="text-3xl sm:text-4xl font-extrabold font-sans text-textPrimary tracking-tight">
                    {ach.metric}
                  </span>
                  <Star className="w-3 h-3 text-primary fill-primary" />
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-textPrimary mb-2">
                  {ach.label}
                </h3>

                {/* Description */}
                <p className="text-xs text-textSecondary leading-relaxed">
                  {ach.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
