import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Code2, Users, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
     metric: '170+',
     label: 'Problems Solved',
     desc: 'Solved over 170 data structures & algorithm problems on leetcode.',
     icon: <Code2 className="w-6 h-6 text-neonCyan" />,
     tag: 'Competitive Coding',
   },
    {
      metric: '3333+',
      label: 'Problems Solved',
      desc: 'Solved over 3333 problems on CodeChef.',
      icon: <Code2 className="w-6 h-6 text-neonCyan" />,
      tag: 'Competitive Coding',
    },
    {
      metric: 'Gold',
      label: 'Badge Achievement',
      desc: 'Earned the coveted Gold Badge status for advanced coding consistency.',
      icon: <Award className="w-6 h-6 text-neonPurple" />,
      tag: 'CodeChef Elite',
    },
    {
      metric: 'NIT AP',
      label: 'Hackathon Competitor',
      desc: 'Participated in the hackathon at National Institute of Technology (NIT) Andhra Pradesh.',
      icon: <Trophy className="w-6 h-6 text-amber-500" />,
      tag: 'Innovation & Dev',
    },
    {
      metric: 'Leader',
      label: 'Conference Volunteer',
      desc: 'Contributed time and technical support as a volunteer for tech conferences.',
      icon: <Users className="w-6 h-6 text-emerald-400" />,
      tag: 'Community Service',
    },
  ];

  return (
    <section id="achievements" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black/5">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full radial-glow-cyan glow-circle"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-white mb-2">
            &lt;Performance Metrics /&gt;
          </h2>
          <div className="h-[3px] w-20 bg-gradient-to-r from-neonCyan to-neonPurple rounded mx-auto md:mx-0"></div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 bg-glass border border-darkBorder rounded-2xl text-left flex flex-col justify-between hover:border-slate-600 transition-all duration-300"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[9px] text-neonPurple font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-neonPurple/10 border border-neonPurple/30">
                    {ach.tag}
                  </span>
                  <div className="p-2 bg-[#121217] rounded-lg border border-darkBorder">
                    {ach.icon}
                  </div>
                </div>

                {/* Big Metric Display */}
                <div className="flex items-baseline space-x-1 mb-2">
                  <span className="text-3xl sm:text-4xl font-extrabold font-sans text-white tracking-tight text-glow-cyan">
                    {ach.metric}
                  </span>
                  <Star className="w-3.5 h-3.5 text-neonCyan fill-neonCyan animate-pulse" />
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-slate-200 mb-2 font-mono">
                  {ach.label}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed">
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
