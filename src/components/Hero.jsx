import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import profilePic from '../assets/profile.jpg';
import Lanyard from './Lanyard';
import LightRays from './LightRays';
import FuzzyText from './FuzzyText';

const GithubIcon = ({ className }) => (
  <svg className={className || "w-4 h-4"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className || "w-4 h-4"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function generateCircuitBack() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 728;
  const ctx = canvas.getContext('2d');
  const W = 512, H = 728;

  // Black background
  ctx.fillStyle = '#0a0a0a';
  ctx.fillRect(0, 0, W, H);

  // Subtle grid
  ctx.strokeStyle = '#1a1a1a';
  ctx.lineWidth = 0.5;
  for (let x = 0; x < W; x += 20) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
  }
  for (let y = 0; y < H; y += 20) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }

  // Draw circuit traces
  const drawTrace = (x1, y1, x2, y2, via = false) => {
    ctx.strokeStyle = 'rgba(200, 200, 200, 0.6)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    // Right-angle routing
    const midX = x1 + (x2 - x1) * 0.5;
    ctx.lineTo(midX, y1);
    ctx.lineTo(midX, y2);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    if (via) {
      ctx.fillStyle = 'rgba(200, 200, 200, 0.8)';
      ctx.beginPath();
      ctx.arc(x2, y2, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  // Traces radiating from center
  const cx = 256, cy = 340;
  const traces = [
    { x1: cx, y1: cy, x2: 60, y2: 80 },
    { x1: cx, y1: cy, x2: 452, y2: 80 },
    { x1: cx, y1: cy, x2: 60, y2: 600 },
    { x1: cx, y1: cy, x2: 452, y2: 600 },
    { x1: cx, y1: cy, x2: 20, y2: 200 },
    { x1: cx, y1: cy, x2: 492, y2: 200 },
    { x1: cx, y1: cy, x2: 20, y2: 480 },
    { x1: cx, y1: cy, x2: 492, y2: 480 },
    { x1: cx, y1: cy, x2: 120, y2: 30 },
    { x1: cx, y1: cy, x2: 392, y2: 30 },
    { x1: cx, y1: cy, x2: 120, y2: 698 },
    { x1: cx, y1: cy, x2: 392, y2: 698 },
  ];
  traces.forEach(t => drawTrace(t.x1, t.y1, t.x2, t.y2, true));

  // Extra traces
  drawTrace(60, 80, 20, 160);
  drawTrace(452, 80, 492, 160);
  drawTrace(60, 600, 20, 520);
  drawTrace(452, 600, 492, 520);
  drawTrace(120, 30, 60, 30);
  drawTrace(392, 30, 452, 30);
  drawTrace(120, 698, 60, 698);
  drawTrace(392, 698, 452, 698);

  // Concentric ring around processor
  ctx.strokeStyle = 'rgba(180, 180, 180, 0.3)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(cx, cy, 120, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx, cy, 140, 0, Math.PI * 2);
  ctx.stroke();

  // Processor chip (square)
  const chipSize = 100;
  const chipX = cx - chipSize / 2;
  const chipY = cy - chipSize / 2;

  // Outer chip border
  ctx.strokeStyle = '#c0c0c0';
  ctx.lineWidth = 2;
  ctx.strokeRect(chipX, chipY, chipSize, chipSize);

  // Inner chip area
  ctx.fillStyle = '#1a1a1a';
  ctx.fillRect(chipX + 4, chipY + 4, chipSize - 8, chipSize - 8);

  // Chip pins (top, bottom, left, right)
  ctx.fillStyle = '#c0c0c0';
  for (let i = 0; i < 8; i++) {
    const px = chipX + 10 + i * 11;
    ctx.fillRect(px, chipY - 6, 3, 6);
    ctx.fillRect(px, chipY + chipSize, 3, 6);
  }
  for (let i = 0; i < 6; i++) {
    const py = chipY + 12 + i * 14;
    ctx.fillRect(chipX - 6, py, 6, 3);
    ctx.fillRect(chipX + chipSize, py, 6, 3);
  }

  // Chip core glow
  const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 40);
  grad.addColorStop(0, 'rgba(60, 130, 246, 0.15)');
  grad.addColorStop(1, 'rgba(60, 130, 246, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(chipX + 4, chipY + 4, chipSize - 8, chipSize - 8);

  // Name on the chip
  ctx.fillStyle = '#3B82F6';
  ctx.font = 'bold 14px "Space Grotesk", monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Venkata', cx, cy - 8);
  ctx.fillText('Ramana Achuta', cx, cy + 12);

  // Ticks around chip (decoration)
  ctx.strokeStyle = 'rgba(200, 200, 200, 0.4)';
  ctx.lineWidth = 0.5;
  for (let i = 0; i < 12; i++) {
    const angle = (i / 12) * Math.PI * 2;
    const r1 = 60;
    const r2 = 65;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(angle) * r1, cy + Math.sin(angle) * r1);
    ctx.lineTo(cx + Math.cos(angle) * r2, cy + Math.sin(angle) * r2);
    ctx.stroke();
  }

  return canvas.toDataURL('image/png');
}

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const circuitBack = useMemo(() => generateCircuitBack(), []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* LightRays background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#3B82F6"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      {/* Lanyard - anchored left, behind text */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Lanyard
          position={[-4, 0, 18]}
          gravity={[0, -40, 0]}
          fov={20}
          transparent={true}
          frontImage={profilePic}
          backImage={circuitBack}
          lanyardWidth={1}
        />
      </div>

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-blue-600/[0.03] blur-[80px] pointer-events-none" />

      <div className="section-container py-12 md:py-20 relative z-10 w-full pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-emerald-400">
                Open to opportunities
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-1">
              <FuzzyText
                baseIntensity={0.18}
                hoverIntensity={0.86}
                enableHover={true}
                fontSize="clamp(2rem, 6vw, 64px)"
                fontWeight={700}
                color="#F8FAFC"
                fuzzRange={30}
                className="block -ml-[50px] pointer-events-auto"
              >
                Venkata Ramana
              </FuzzyText>
              <FuzzyText
                baseIntensity={0.18}
                hoverIntensity={0.86}
                enableHover={true}
                fontSize="clamp(2rem, 6vw, 64px)"
                fontWeight={700}
                gradient={['#3B82F6', '#60A5FA', '#93C5FD']}
                fuzzRange={30}
                direction="horizontal"
                className="block -ml-[50px] pointer-events-auto"
              >
                Achuta
              </FuzzyText>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-lg sm:text-xl font-medium text-slate-300"
            >
              Software Engineer building intelligent applications and automation workflows
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base text-slate-400 max-w-xl leading-relaxed"
            >
              Computer Science student with a passion for building scalable full-stack applications 
              and AI-powered solutions. I specialize in turning complex ideas into practical software.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-2 pointer-events-auto"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="/resume/Venkata_Ramana_Achuta_Resume.pdf"
                download="Venkata_Ramana_Achuta_Resume.pdf"
                className="btn-secondary"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>

              <a
                href="https://github.com/venkataramana01"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <GithubIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/venkataramanaachuta/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <LinkedinIcon />
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
