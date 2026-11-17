import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: 'smooth' });
};

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`glass-panel rounded-full flex items-center gap-1 px-3 py-2 transition-shadow duration-500 ${
          scrolled ? 'shadow-[0_12px_40px_rgba(2,6,23,0.55)]' : ''
        }`}
        aria-label="Primary"
      >
        <button
          onClick={() => go('home')}
          className="flex items-center gap-2 px-3 py-1.5 mr-1"
          aria-label="Back to top"
        >
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-[11px] font-bold text-white shadow-[0_0_18px_rgba(56,189,248,0.45)]">
            VR
          </span>
          <span className="hidden sm:block text-sm font-semibold text-textPrimary tracking-wide">
            venkata<span className="text-electric">.dev</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`relative px-3.5 py-2 text-[13px] font-medium rounded-full transition-colors duration-200 ${
                active === id ? 'text-white' : 'text-textSecondary hover:text-textPrimary'
              }`}
            >
              {active === id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.08]"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{label}</span>
            </button>
          ))}
        </div>

        <a
          href="/resume/Venkata%20Ramana%20Achuta.pdf"
          download="Venkata Ramana Achuta.pdf"
          className="hidden md:inline-flex ml-2 px-4 py-2 text-[13px] font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.3)]"
        >
          Resume
        </a>

        <button
          className="md:hidden ml-1 p-2 text-textSecondary hover:text-textPrimary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 inset-x-4 glass-panel rounded-2xl p-3 flex flex-col"
          >
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => go(id)}
                className={`text-left px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                  active === id ? 'text-white bg-white/[0.07]' : 'text-textSecondary hover:text-textPrimary hover:bg-white/[0.04]'
                }`}
              >
                {label}
              </button>
            ))}
            <a
              href="/resume/Venkata%20Ramana%20Achuta.pdf"
              download="Venkata Ramana Achuta.pdf"
              className="mt-1 px-4 py-3 text-sm font-semibold text-center text-white rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
