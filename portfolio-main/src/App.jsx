import React from 'react';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechConstellation from './components/TechConstellation';
import Experience from './components/Experience';
import About from './components/About';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyan-400/25 selection:text-white overflow-x-hidden bg-darkBg">
      <ParticlesBackground />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Projects />
        <TechConstellation />
        <Experience />
        <About />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
