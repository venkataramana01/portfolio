import React from 'react';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';
import Ribbons from './components/Ribbons';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Showcase from './components/Showcase';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-neonCyan/30 selection:text-white overflow-x-hidden">
      {/* Dynamic interactive particle canvas background */}
      <ParticlesBackground />

      {/* Global cursor-trailing neon ribbons */}
      <div className="fixed inset-0 w-screen h-screen pointer-events-none z-20 overflow-hidden">
        <Ribbons
          baseThickness={6}
          colors={['#00f0ff', '#9d4edd', '#6366f1']}
          speedMultiplier={0.5}
          maxAge={600}
          pointCount={35}
          enableFade={true}
          enableShaderEffect={true}
          backgroundColor={[0, 0, 0, 0]}
        />
      </div>

      {/* Sticky navigation bar */}
      <Navbar />

      {/* Main content grid and sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Showcase />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      {/* Footer credits and links */}
      <Footer />
    </div>
  );
}

export default App;

