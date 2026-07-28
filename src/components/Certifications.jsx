import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Database, CheckSquare, Layers } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'CRUD Operations - MongoDB',
      issuer: 'MongoDB Academy',
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      credentialId: 'Verified Academy ID',
      link: 'https://www.credly.com/badges/c410d8df-2e1e-444e-aa4b-8ff38d696d21/public_url',
    },
    {
      title: 'Java Problem Solving',
      issuer: 'CodeChef Certified',
      icon: <Award className="w-5 h-5 text-primary" />,
      credentialId: 'Problem Solving Module',
      link: 'https://drive.google.com/file/d/1EWxnuX0N9NqK5cFnbje2Fmc5RnNo6nVB/view?usp=sharing',
    },
    {
      title: 'MySQL Certification',
      issuer: 'CodeChef Certified',
      icon: <CheckSquare className="w-5 h-5 text-accent" />,
      credentialId: 'Database Syntax Module',
      link: 'https://drive.google.com/file/d/1EKmTgTcwSJTTYHvlUovO-5kwrIMfFI_B/view?usp=sharing',
    },
    {
      title: 'TCS iON Young Professional',
      issuer: 'TCS iON',
      icon: <Layers className="w-5 h-5 text-orange-400" />,
      credentialId: 'Career Skills Program',
      link: 'https://drive.google.com/file/d/18mi7iS4P2_z9j1nc0rEYIBGgqbVigsYd/view?usp=sharing',
    },
  ];

  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">Certifications</p>
          <h2 className="section-heading mb-4">
            Verified credentials
          </h2>
          <p className="section-subtitle">
            Industry-recognized certifications validating my technical skills.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-5 rounded-xl border border-borderSubtle bg-surface/40 hover:border-borderHover hover:bg-surfaceLight/30 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                {/* Icon wrapper */}
                <div className="mb-4 inline-block p-2.5 bg-primary/10 rounded-lg group-hover:bg-primary/15 transition-colors">
                  {cert.icon}
                </div>

                {/* Cert Name */}
                <h3 className="text-sm font-bold text-textPrimary mb-1 tracking-wide leading-snug">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <span className="text-xs font-mono text-primary font-semibold block mb-3">
                  {cert.issuer}
                </span>
              </div>

              {/* Footer Credentials */}
              <div className="pt-4 border-t border-borderSubtle flex items-center justify-between">
                <div className="flex items-center space-x-1 text-[10px] text-textSecondary font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{cert.credentialId}</span>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono text-primary hover:text-accent transition-colors"
                >
                  Verify
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
