import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Terminal, TerminalSquare, Play, Sparkles } from 'lucide-react';
import DarkVeil from './DarkVeil';
import Lanyard from './Lanyard';
import profilePic from '../assets/profile.jpg';

// Helper to generate the front image of the ID card dynamically
const generateIdCardFront = (profileImg) => {
  if (typeof document === 'undefined') return null;
  const canvas = document.createElement('canvas');
  canvas.width = 600;
  canvas.height = 850;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  if (profileImg) {
    // 1. Image Enhancement Filters (High Contrast B&W)
    ctx.filter = 'contrast(1.18) brightness(1.03)';

    // 2. Draw the image (Aspect Fill)
    const aspect = profileImg.width / profileImg.height;
    const canvasAspect = canvas.width / canvas.height;
    let dw, dh, dx, dy;
    if (aspect > canvasAspect) {
      dh = canvas.height;
      dw = dh * aspect;
      dx = (canvas.width - dw) / 2;
      dy = 0;
    } else {
      dw = canvas.width;
      dh = dw / aspect;
      dx = 0;
      dy = (canvas.height - dh) / 2;
    }
    ctx.drawImage(profileImg, dx, dy, dw, dh);
    ctx.filter = 'none'; // Reset filter

    // 3. Subtle Vignette Shading
    ctx.save();
    const vignette = ctx.createRadialGradient(300, 425, 250, 300, 425, 600);
    vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
    vignette.addColorStop(1, 'rgba(0, 0, 0, 0.45)');
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, 600, 850);
    ctx.restore();

    // 4. Thin glowing cyan border
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 6;
    ctx.strokeRect(3, 3, 594, 844);
  } else {
    // Fallback: Gradient with initials
    const grad = ctx.createLinearGradient(0, 0, 0, 850);
    grad.addColorStop(0, '#060608');
    grad.addColorStop(0.5, '#0f0f15');
    grad.addColorStop(1, '#1b0f2b');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 600, 850);

    ctx.strokeStyle = 'rgba(0, 240, 255, 0.4)';
    ctx.lineWidth = 12;
    ctx.strokeRect(6, 6, 588, 838);

    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.font = 'bold 80px "Space Grotesk", sans-serif';
    ctx.fillText('VR', 300, 450);
  }

  return canvas.toDataURL('image/png');
};

// Helper to generate the back image of the ID card dynamically
const generateIdCardBack = (profileImg) => {
  if (typeof document === 'undefined') return null;
  const canvas = document.createElement('canvas');
  canvas.width = 600;
  canvas.height = 850;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  if (profileImg) {
    // 1. Image Enhancement Filters (High Contrast B&W)
    ctx.filter = 'contrast(1.18) brightness(1.03)';

    // 2. Draw the image (Aspect Fill)
    const aspect = profileImg.width / profileImg.height;
    const canvasAspect = canvas.width / canvas.height;
    let dw, dh, dx, dy;
    if (aspect > canvasAspect) {
      dh = canvas.height;
      dw = dh * aspect;
      dx = (canvas.width - dw) / 2;
      dy = 0;
    } else {
      dw = canvas.width;
      dh = dw / aspect;
      dx = 0;
      dy = (canvas.height - dh) / 2;
    }
    ctx.drawImage(profileImg, dx, dy, dw, dh);
    ctx.filter = 'none'; // Reset filter

    // 3. Subtle Vignette Shading
    ctx.save();
    const vignette = ctx.createRadialGradient(300, 425, 250, 300, 425, 600);
    vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
    vignette.addColorStop(1, 'rgba(0, 0, 0, 0.45)');
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, 600, 850);
    ctx.restore();

    // 4. Thin glowing purple border
    ctx.strokeStyle = '#9d4edd';
    ctx.lineWidth = 6;
    ctx.strokeRect(3, 3, 594, 844);
  } else {
    // Fallback: Gradient with initials
    const grad = ctx.createLinearGradient(0, 0, 0, 850);
    grad.addColorStop(0, '#1b0f2b');
    grad.addColorStop(1, '#060608');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 600, 850);

    ctx.strokeStyle = 'rgba(157, 78, 221, 0.4)';
    ctx.lineWidth = 12;
    ctx.strokeRect(6, 6, 588, 838);

    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.font = 'bold 80px "Space Grotesk", sans-serif';
    ctx.fillText('VR', 300, 450);
  }

  return canvas.toDataURL('image/png');
};


const Hero = () => {
  const [profileImg, setProfileImg] = React.useState(null);

  React.useEffect(() => {
    const img = new Image();
    img.src = profilePic;
    img.onload = () => {
      setProfileImg(img);
    };
  }, []);

  const cardFrontImage = React.useMemo(() => generateIdCardFront(profileImg), [profileImg]);
  const cardBackImage = React.useMemo(() => generateIdCardBack(profileImg), [profileImg]);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden ai-grid"
    >
      {/* DarkVeil Shader Background */}
      <div className="absolute inset-0 w-full h-full -z-10 opacity-30 pointer-events-none">
        <DarkVeil 
          speed={0.3} 
          hueShift={-45} 
          noiseIntensity={0.02} 
          scanlineIntensity={0.08} 
          scanlineFrequency={0.8}
          warpAmount={0.2}
          resolutionScale={0.75}
        />
      </div>

      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full radial-glow-cyan glow-circle"></div>
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] rounded-full radial-glow-purple glow-circle"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Tag / Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-neonCyan/10 border border-neonCyan/30 text-neonCyan font-mono text-xs"
            >
              <Sparkles className="w-3.5 h-3.5 animate-spin" />
              <span>Available for Internships & Entry-Level Roles</span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants} className="space-y-2">
              <span className="text-slate-400 font-mono text-sm tracking-widest block uppercase">
                // System.out.println("Hello World");
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Achuta Leela Satya Sai{' '}
                <span className="bg-gradient-to-r from-neonCyan via-neonIndigo to-neonPurple bg-clip-text text-transparent text-glow-cyan">
                  Venkata Ramana
                </span>
              </h1>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl font-bold text-slate-200"
            >
              AI Full Stack Developer building intelligent applications and automation workflows
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed"
            >
              Aspiring Full Stack Developer and AI Automation Builder experienced in developing
              scalable web applications, API integrations, and AI-powered workflows using modern technologies.
            </motion.p>

            {/* Buttons Group */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative inline-flex items-center space-x-2 px-6 py-3.5 bg-neonCyan text-black font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="/resume/Venkata_Ramana_Achuta_Resume.pdf"
                download="Venkata_Ramana_Achuta_Resume.pdf"
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#121217] hover:bg-[#1a1a24] text-slate-200 hover:text-white font-semibold rounded-lg border border-darkBorder hover:border-slate-500 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-neonPurple" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-transparent text-slate-300 hover:text-white font-semibold rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Interactive 3D Physics Lanyard Card Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 relative w-full h-[550px]"
          >
            {/* 3D Lanyard Badge */}
            <Lanyard 
              position={[0, 0, 20]} 
              gravity={[0, -40, 0]} 
              frontImage={cardFrontImage}
              backImage={cardBackImage}
              lanyardWidth={4.5}
            />

            {/* Accent Glow rings in back */}
            <div className="absolute -inset-4 bg-gradient-to-r from-neonCyan to-neonPurple rounded-xl blur-2xl opacity-10 -z-10 animate-pulse-slow"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
