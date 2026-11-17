import React, { lazy, Suspense, useMemo } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowDown, Download, Mail } from 'lucide-react';
import profilePic from '../assets/profile.jpg';
const Lanyard = lazy(() => import('./Lanyard'));

const RESUME_URL = '/resume/Venkata%20Ramana%20Achuta.pdf';
const RESUME_NAME = 'Venkata Ramana Achuta.pdf';

const GithubIcon = ({ className }) => (
  <svg className={className || 'w-4 h-4'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className || 'w-4 h-4'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: 'smooth' });
};

// Circuit back generator for the ID card's reverse side
function generateCircuitBack() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 728;
  const ctx = canvas.getContext('2d');
  const W = 512, H = 728;
  ctx.fillStyle = '#0a0a0a';
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = '#1a1a1a';
  ctx.lineWidth = 0.5;
  for (let x = 0; x < W; x += 20) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
  for (let y = 0; y < H; y += 20) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
  const drawTrace = (x1, y1, x2, y2, via = false) => {
    ctx.strokeStyle = 'rgba(200, 200, 200, 0.6)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    const midX = x1 + (x2 - x1) * 0.5;
    ctx.lineTo(midX, y1); ctx.lineTo(midX, y2); ctx.lineTo(x2, y2);
    ctx.stroke();
    if (via) { ctx.fillStyle = 'rgba(200, 200, 200, 0.8)'; ctx.beginPath(); ctx.arc(x2, y2, 3, 0, Math.PI * 2); ctx.fill(); }
  };
  const cx = 256, cy = 340;
  [
    [cx,cy,60,80],[cx,cy,452,80],[cx,cy,60,600],[cx,cy,452,600],
    [cx,cy,20,200],[cx,cy,492,200],[cx,cy,20,480],[cx,cy,492,480],
    [cx,cy,120,30],[cx,cy,392,30],[cx,cy,120,698],[cx,cy,392,698],
  ].forEach(t => drawTrace(t[0],t[1],t[2],t[3],true));
  drawTrace(60,80,20,160); drawTrace(452,80,492,160);
  drawTrace(60,600,20,520); drawTrace(452,600,492,520);
  drawTrace(120,30,60,30); drawTrace(392,30,452,30);
  drawTrace(120,698,60,698); drawTrace(392,698,452,698);
  ctx.strokeStyle = 'rgba(180,180,180,0.3)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.arc(cx,cy,120,0,Math.PI*2); ctx.stroke();
  ctx.beginPath(); ctx.arc(cx,cy,140,0,Math.PI*2); ctx.stroke();
  const chipSize = 100, chipX = cx - chipSize/2, chipY = cy - chipSize/2;
  ctx.strokeStyle = '#c0c0c0'; ctx.lineWidth = 2;
  ctx.strokeRect(chipX, chipY, chipSize, chipSize);
  ctx.fillStyle = '#1a1a1a';
  ctx.fillRect(chipX+4, chipY+4, chipSize-8, chipSize-8);
  ctx.fillStyle = '#c0c0c0';
  for (let i=0;i<8;i++){const px=chipX+10+i*11;ctx.fillRect(px,chipY-6,3,6);ctx.fillRect(px,chipY+chipSize,3,6);}
  for (let i=0;i<6;i++){const py=chipY+12+i*14;ctx.fillRect(chipX-6,py,6,3);ctx.fillRect(chipX+chipSize,py,6,3);}
  const grad = ctx.createRadialGradient(cx,cy,0,cx,cy,40);
  grad.addColorStop(0,'rgba(60,130,246,0.15)'); grad.addColorStop(1,'rgba(60,130,246,0)');
  ctx.fillStyle = grad; ctx.fillRect(chipX+4,chipY+4,chipSize-8,chipSize-8);
  ctx.fillStyle = '#3B82F6';
  ctx.font = 'bold 14px "Space Grotesk", monospace';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Venkata', cx, cy-8); ctx.fillText('Ramana Achuta', cx, cy+12);
  ctx.strokeStyle = 'rgba(200,200,200,0.4)'; ctx.lineWidth = 0.5;
  for (let i=0;i<12;i++){
    const a=(i/12)*Math.PI*2,r1=60,r2=65;
    ctx.beginPath();ctx.moveTo(cx+Math.cos(a)*r1,cy+Math.sin(a)*r1);
    ctx.lineTo(cx+Math.cos(a)*r2,cy+Math.sin(a)*r2);ctx.stroke();
  }
  return canvas.toDataURL('image/png');
}

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const circuitBack = useMemo(() => generateCircuitBack(), []);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const { scrollY } = useScroll();
  const orbY = useTransform(scrollY, [0, 800], [0, 120]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient cinematic background */}
      <div className="absolute inset-0 ai-grid opacity-60 pointer-events-none" />
      <motion.div style={{ y: orbY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-[8%] w-[560px] h-[560px] rounded-full bg-blue-600/[0.13] blur-[130px]" />
        <div className="absolute top-[30%] right-[-10%] w-[480px] h-[480px] rounded-full bg-cyan-500/[0.09] blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[30%] w-[620px] h-[420px] rounded-full bg-indigo-600/[0.08] blur-[140px]" />
      </motion.div>
      {/* Animated gradient sheen */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-[-20%] animate-gradient-pan bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_60%)]" />
      </div>

      {/* Hero content */}
      <div className="section-container relative z-10 w-full pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          {/* Text column */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 relative z-30 pointer-events-none"
          >
            <motion.div
              variants={item}
              className="pointer-events-auto inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-emerald-300 tracking-wide">
                Open to opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[1.02] tracking-tight text-textPrimary"
            >
              Venkata Ramana
              <br />
              <span className="text-gradient-cinematic">Achuta</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 text-xl sm:text-2xl font-medium text-slate-200 tracking-tight"
            >
              Software Engineer crafting intelligent products
              <span className="text-electric"> &amp; AI-powered systems</span>
            </motion.p>

            <motion.p
              variants={item}
              className="mt-4 text-base sm:text-lg text-textSecondary max-w-xl leading-relaxed"
            >
              I build full-stack applications and automation workflows — turning
              complex ideas into software that learns, reasons, and ships.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3 pointer-events-auto">
              <button onClick={() => scrollToSection('projects')} className="btn-primary !px-6 !py-3 text-[15px]">
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a href={RESUME_URL} download={RESUME_NAME} className="btn-secondary !px-6 !py-3 text-[15px]">
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
              <button onClick={() => scrollToSection('contact')} className="btn-secondary !px-6 !py-3 text-[15px]">
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </button>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex items-center gap-3 pointer-events-auto">
              <a
                href="https://github.com/venkataramana01"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-2.5 rounded-full glass-panel text-textSecondary hover:text-white hover:border-cyan-400/40 transition-all duration-300"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/venkataramanaachuta/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-2.5 rounded-full glass-panel text-textSecondary hover:text-white hover:border-cyan-400/40 transition-all duration-300"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <span className="ml-2 text-xs text-textSecondary font-mono hidden sm:block">
                venkataramanaachuta1@gmail.com
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Full-screen draggable ID card overlay — sits above all hero content */}
      <div className="absolute inset-0 z-50 pointer-events-none">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-8 lg:right-24 top-[30%] w-[420px] h-[420px] rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-transparent blur-3xl pointer-events-none" />
          <Suspense
            fallback={
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-56 rounded-2xl glass-panel animate-pulse" />
              </div>
            }
          >
            <Lanyard
              frontImage={profilePic}
              backImage={circuitBack}
              imageFit="cover"
              cardColor="#ffffff"
              orientation="portrait"
              finish="glossy"
              cornerRadius={0.25}
              size={0.55}
              anchor="right"
              strapLength={0.42}
              strapColor="#111111"
              strapWidth={0.7}
              metal="silver"
              gravity={0.9}
              damping={0.55}
              elasticity={0.4}
              breeze={0.2}
              interactive={true}
              intro={true}
            />
          </Suspense>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollToSection('projects')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-textSecondary hover:text-cyan-300 transition-colors z-40"
        aria-label="Scroll to projects"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.25em]">Scroll</span>
        <motion.span
          animate={reduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default Hero;
