import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Cpu, Database, Mail, Clock, ShieldCheck, Eye, Layers, Settings, FileSpreadsheet, ArrowRight } from 'lucide-react';

const Showcase = () => {
  const [activeWorkflow, setActiveWorkflow] = useState(0);

  const workflows = [
    {
      title: 'Telegram Finance Tracker Agent',
      desc: 'Automatically parses and classifies financial messages sent via Telegram bot, extract categories, values, and updates a Google Sheets database in real-time.',
      trigger: 'Telegram Message Received',
      nodes: [
        { label: 'Telegram Bot', icon: <MessageSquare className="w-5 h-5 text-[#0088cc]" />, desc: 'User transaction text input' },
        { label: 'n8n Webhook', icon: <Settings className="w-5 h-5 text-[#ff6d5a]" />, desc: 'Ingestion & formatting' },
        { label: 'Groq LLM', icon: <Cpu className="w-5 h-5 text-neonCyan" />, desc: 'NER Extraction & classification' },
        { label: 'Google Sheets', icon: <FileSpreadsheet className="w-5 h-5 text-[#0f9d58]" />, desc: 'Structured logging API' },
      ],
      details: [
        'Recognizes amount, currency, merchant, and expense category.',
        'Uses Groq LLM (Llama 3) for JSON parsing with 98% accuracy.',
        'Runs fully serverless on webhook endpoints in n8n.',
        'Auto-responds to Telegram with confirmation and sheet link.'
      ]
    },
    {
      title: 'AI Email Responder Workflow',
      desc: 'Ingests inbound emails, classifies sentiment and urgency, queries context, drafts professional responses, and logs transaction history.',
      trigger: 'Inbound Gmail Received',
      nodes: [
        { label: 'Gmail Trigger', icon: <Mail className="w-5 h-5 text-red-500" />, desc: 'Polls incoming inquiries' },
        { label: 'n8n Router', icon: <Settings className="w-5 h-5 text-[#ff6d5a]" />, desc: 'Filters and parses contents' },
        { label: 'Groq Brain', icon: <Cpu className="w-5 h-5 text-neonPurple" />, desc: 'Drafts response & checks tone' },
        { label: 'Draft / Send', icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />, desc: 'Queues email in drafts folder' },
      ],
      details: [
        'Analyzes email intent and classifies priority level.',
        'Applies RAG or custom system instructions for context replies.',
        'Creates replies in drafts to guarantee human-in-the-loop safety.',
        'Stores email metadata inside MongoDB for audit logging.'
      ]
    },
    {
      title: 'Morning Email Digest Automation',
      desc: 'A scheduled background cron job that aggregates and summarizes unread emails, prioritizing actions and sending a sleek newsletter digest at 8:00 AM.',
      trigger: 'Cron Trigger (Daily 8 AM)',
      nodes: [
        { label: 'Cron Scheduler', icon: <Clock className="w-5 h-5 text-amber-500" />, desc: 'Time-based workflow execution' },
        { label: 'Gmail Scanner', icon: <Mail className="w-5 h-5 text-red-500" />, desc: 'Fetches unread emails' },
        { label: 'Groq Summarizer', icon: <Cpu className="w-5 h-5 text-neonCyan" />, desc: 'Condenses threads into points' },
        { label: 'Digest Sender', icon: <Mail className="w-5 h-5 text-neonPurple" />, desc: 'Sends compact brief to inbox' },
      ],
      details: [
        'Saves up to 45 minutes of manual scrolling every morning.',
        'Highlights important action items and flags urgent senders.',
        'Separates spam/updates from core professional conversations.',
        'Outputs a beautifully formatted daily HTML digest.'
      ]
    }
  ];

  return (
    <section id="showcase" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full radial-glow-purple glow-circle"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-white mb-2">
            &lt;AI Automation Showcase /&gt;
          </h2>
          <div className="h-[3px] w-20 bg-gradient-to-r from-neonCyan to-neonPurple rounded mx-auto md:mx-0"></div>
          <p className="mt-4 text-slate-400 max-w-2xl text-center md:text-left">
            Production-ready workflows running on automated nodes, designed to connect APIs, LLMs, and databases.
          </p>
        </div>

        {/* Layout: Sidebar Controls + Workflow Diagram Viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls - Left Column */}
          <div className="lg:col-span-4 flex flex-col space-y-4 justify-start">
            {workflows.map((w, idx) => (
              <button
                key={idx}
                onClick={() => setActiveWorkflow(idx)}
                className={`p-5 text-left rounded-xl border transition-all duration-300 ${
                  activeWorkflow === idx
                    ? 'bg-glass border-neonCyan shadow-[0_0_15px_rgba(0,240,255,0.1)] text-white'
                    : 'bg-glass-heavy border-darkBorder hover:border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-neonPurple font-semibold uppercase tracking-wider">
                    Pipeline_0{idx + 1}
                  </span>
                  <span className="font-mono text-[10px] text-slate-500 flex items-center">
                    <Clock className="w-3 h-3 mr-1" /> Active
                  </span>
                </div>
                <h3 className="font-sans font-bold text-base leading-tight mb-2">
                  {w.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {w.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Workflow Diagram & Details Viewer - Right Column */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="p-6 md:p-8 bg-glass border border-darkBorder rounded-2xl flex-1 flex flex-col justify-between relative overflow-hidden">
              
              {/* Outer shadow rings */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full radial-glow-cyan glow-circle"></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeWorkflow}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8 text-left"
                >
                  {/* Top info */}
                  <div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[10px] uppercase mb-3">
                      Trigger: {workflows[activeWorkflow].trigger}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {workflows[activeWorkflow].title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
                      {workflows[activeWorkflow].desc}
                    </p>
                  </div>

                  {/* SVG Flow Diagram */}
                  <div className="py-6 px-4 bg-black/40 border border-darkBorder/60 rounded-xl overflow-x-auto">
                    <div className="min-w-[650px] flex items-center justify-between relative px-4">
                      
                      {/* Animated connecting arrows (behind nodes) */}
                      <div className="absolute inset-0 top-1/2 -translate-y-1/2 flex items-center justify-around pointer-events-none px-12 z-0">
                        {[1, 2, 3].map((i) => (
                          <svg key={i} className="w-24 h-4 overflow-visible" fill="none">
                            <path
                              d="M 0 8 L 96 8"
                              stroke="url(#arrowGrad)"
                              strokeWidth="2"
                              className="animate-dash"
                            />
                            <defs>
                              <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#9d4edd" />
                                <stop offset="100%" stopColor="#00f0ff" />
                              </linearGradient>
                            </defs>
                          </svg>
                        ))}
                      </div>

                      {/* Nodes */}
                      {workflows[activeWorkflow].nodes.map((node, nIdx) => (
                        <div key={nIdx} className="flex flex-col items-center text-center relative z-10 w-32">
                          <div className="relative p-4 bg-[#121217] rounded-xl border border-darkBorder hover:border-neonCyan transition-all duration-300 group">
                            {node.icon}
                            {/* Glow behind icon */}
                            <div className="absolute inset-0 bg-neonCyan/5 blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          </div>
                          <span className="font-mono text-xs font-bold text-white mt-3 block">
                            {node.label}
                          </span>
                          <span className="text-[10px] text-slate-500 mt-1 leading-tight line-clamp-2 max-w-[110px]">
                            {node.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Flow Achievements / Metrics */}
                  <div>
                    <h4 className="font-mono text-xs text-neonPurple font-bold uppercase tracking-wider mb-4 flex items-center">
                      <Layers className="w-3.5 h-3.5 mr-2" /> Key Features & Logic
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {workflows[activeWorkflow].details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start text-xs text-slate-400">
                          <span className="text-neonCyan mr-2 font-mono">&gt;</span>
                          <span className="leading-normal">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Showcase;
