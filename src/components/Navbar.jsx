import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Cpu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Showcase', id: 'showcase' },
    { label: 'Projects', id: 'projects' },
    { label: 'Timeline', id: 'experience' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    // Intersection Observer to detect active section
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Detect when section is in the middle of viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060608]/85 border-b border-darkBorder py-4 bg-glass-heavy shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Branding */}
          <div
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="relative p-2 bg-[#121217] rounded-lg border border-darkBorder group-hover:border-neonCyan transition-all duration-300">
              <Cpu className="w-5 h-5 text-neonCyan group-hover:rotate-45 transition-transform duration-500" />
              <div className="absolute inset-0 bg-neonCyan/10 blur rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold tracking-wide text-white text-base leading-tight">
                Venkata Ramana Achuta
              </span>
              <span className="text-[10px] text-neonPurple font-mono tracking-wider font-semibold">
                AI_FULLSTACK_DEV
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 rounded-md font-sans ${
                  activeSection === item.id
                    ? 'text-neonCyan'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-neonCyan rounded-full shadow-[0_0_8px_#00f0ff]" />
                )}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-4 px-4 py-2 text-xs font-mono text-neonCyan border border-neonCyan/40 rounded bg-neonCyan/5 hover:bg-neonCyan/15 hover:border-neonCyan hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300"
            >
              &lt;Hire Me /&gt;
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-[#121217] transition-all duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 max-w-xs w-full bg-[#09090d]/98 border-l border-darkBorder p-6 transition-transform duration-300 ease-in-out z-50 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } bg-glass-heavy shadow-2xl`}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <Terminal className="w-5 h-5 text-neonPurple" />
            <span className="font-mono text-sm text-slate-300">Navigation</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-[#121217]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`py-2 text-left text-lg font-medium border-b border-white/5 transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-neonCyan pl-2 border-neonCyan/30'
                  : 'text-slate-400 hover:text-white pl-0'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="mt-6 w-full py-3 text-center text-sm font-mono text-neonCyan border border-neonCyan/30 rounded bg-neonCyan/5 hover:bg-neonCyan/15 transition-all duration-300"
          >
            &lt;Hire Me /&gt;
          </button>
        </div>
      </div>

      {/* Backdrop for Mobile Drawer */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        />
      )}
    </nav>
  );
};

export default Navbar;
