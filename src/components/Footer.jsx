import React from 'react';
import { ArrowUp, Terminal, Cpu } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-darkBorder bg-[#050507]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo / Branding */}
        <div className="flex items-center space-x-2 text-left">
          <div className="p-2 bg-[#121217] rounded-lg border border-darkBorder text-neonCyan">
            <Cpu className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold tracking-wide text-white text-sm leading-tight">
              Venkata Ramana Achuta
            </span>
            <span className="text-[9px] text-neonPurple font-mono tracking-wider font-semibold">
              AI_ENGINEER_PORTFOLIO
            </span>
          </div>
        </div>

        {/* Text Credits / Copyright */}
        <div className="text-center md:text-left">
          <p className="text-xs text-slate-500 font-mono">
            &copy; {new Date().getFullYear()} Achuta Leela Satya Sai Venkata Ramana. All rights reserved.
          </p>
          <p className="text-[10px] text-slate-600 font-mono mt-1">
            Built with React, Tailwind v3, Framer Motion, and Lucide (VibeCoding).
          </p>
        </div>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="p-3 bg-[#121217] hover:bg-[#1a1a24] text-slate-400 hover:text-neonCyan border border-darkBorder hover:border-neonCyan/40 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-neonCyan/5"
          title="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
};

export default Footer;
