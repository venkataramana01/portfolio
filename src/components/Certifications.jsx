import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Database, CheckSquare, Layers } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'CRUD Operations - MongoDB',
      issuer: 'MongoDB Academy',
      icon: <Database className="w-6 h-6 text-emerald-400" />,
      credentialId: 'Verified Academy ID',
      link: 'https://www.credly.com/badges/c410d8df-2e1e-444e-aa4b-8ff38d696d21/public_url',
    },
    {
      title: 'Java Problem Solving',
      issuer: 'CodeChef Certified',
      icon: <Award className="w-6 h-6 text-neonCyan" />,
      credentialId: 'Problem Solving Module',
      link: 'https://drive.google.com/file/d/1EWxnuX0N9NqK5cFnbje2Fmc5RnNo6nVB/view?usp=sharing',
    },
    {
      title: 'MySQL Certification',
      issuer: 'CodeChef Certified',
      icon: <CheckSquare className="w-6 h-6 text-neonPurple" />,
      credentialId: 'Database Syntax Module',
      link: 'https://drive.google.com/file/d/1EKmTgTcwSJTTYHvlUovO-5kwrIMfFI_B/view?usp=sharing',
    },
    {
      title: 'TCS iON Young Professional',
      issuer: 'TCS iON',
      icon: <Layers className="w-6 h-6 text-orange-400" />,
      credentialId: 'Career Skills Program',
      link: 'https://drive.google.com/file/d/18mi7iS4P2_z9j1nc0rEYIBGgqbVigsYd/view?usp=sharing',
    },
  ];

  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black/10">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] rounded-full radial-glow-purple glow-circle"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-white mb-2">
            &lt;Certifications /&gt;
          </h2>
          <div className="h-[3px] w-20 bg-gradient-to-r from-neonCyan to-neonPurple rounded mx-auto md:mx-0"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-5 bg-glass border border-darkBorder rounded-xl flex flex-col justify-between text-left hover:border-slate-600 transition-all duration-300"
            >
              <div>
                {/* Icon wrapper */}
                <div className="mb-4 inline-block p-3 bg-[#121217] rounded-lg border border-darkBorder">
                  {cert.icon}
                </div>
                
                {/* Cert Name */}
                <h3 className="text-base font-bold text-white mb-1 tracking-wide leading-snug">
                  {cert.title}
                </h3>
                
                {/* Issuer */}
                <span className="text-xs font-mono text-neonPurple font-semibold block mb-3">
                  {cert.issuer}
                </span>
              </div>

              {/* Footer Credentials */}
              <div className="pt-4 border-t border-darkBorder/60 flex items-center justify-between">
                <div className="flex items-center space-x-1 text-[10px] text-slate-500 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{cert.credentialId}</span>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono text-neonCyan hover:underline hover:text-white transition-colors"
                >
                  Verify Code
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
