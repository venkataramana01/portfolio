import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Cpu, Mail, Clock, ShieldCheck, Layers, Settings, FileSpreadsheet } from 'lucide-react';

const Showcase = () => {
  const [activeWorkflow, setActiveWorkflow] = useState(0);

  const workflows = [
    {
      title: 'Telegram Finance Tracker Agent',
      desc: 'Automatically parses and classifies financial messages sent via Telegram bot, extracts categories, values, and updates a Google Sheets database in real-time.',
      trigger: 'Telegram Message Received',
      nodes: [
        { label: 'Telegram Bot', icon: <MessageSquare className="w-5 h-5 text-[#0088cc]" />, desc: 'User transaction text input' },
        { label: 'n8n Webhook', icon: <Settings className="w-5 h-5 text-[#ff6d5a]" />, desc: 'Ingestion & formatting' },
        { label: 'Groq LLM', icon: <Cpu className="w-5 h-5 text-primary" />, desc: 'NER Extraction & classification' },
        { label: 'Google Sheets', icon: <FileSpreadsheet className="w-5 h-5 text-[#0f9d58]" />, desc: 'Structured logging API' },
      ],
      details: [
        'Recognizes amount, currency, merchant, and expense category.',
        'Uses Groq LLM (Llama 3) for JSON parsing with 98% accuracy.',
        'Runs fully serverless on webhook endpoints in n8n.',
        'Auto-responds to Telegram with confirmation and sheet link.',
      ],
    },
    {
      title: 'AI Email Responder Workflow',
      desc: 'Ingests inbound emails, classifies sentiment and urgency, queries context, drafts professional responses, and logs transaction history.',
      trigger: 'Inbound Gmail Received',
      nodes: [
        { label: 'Gmail Trigger', icon: <Mail className="w-5 h-5 text-red-500" />, desc: 'Polls incoming inquiries' },
        { label: 'n8n Router', icon: <Settings className="w-5 h-5 text-[#ff6d5a]" />, desc: 'Filters and parses contents' },
        { label: 'Groq Brain', icon: <Cpu className="w-5 h-5 text-accent" />, desc: 'Drafts response & checks tone' },
        { label: 'Draft / Send', icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />, desc: 'Queues email in drafts' },
      ],
      details: [
        'Analyzes email intent and classifies priority level.',
        'Applies RAG or custom system instructions for context replies.',
        'Creates replies in drafts to guarantee human-in-the-loop safety.',
        'Stores email metadata inside MongoDB for audit logging.',
      ],
    },
    {
      title: 'Morning Email Digest Automation',
      desc: 'A scheduled background cron job that aggregates and summarizes unread emails, prioritizing actions and sending a compact digest at 8:00 AM.',
      trigger: 'Cron Trigger (Daily 8 AM)',
      nodes: [
        { label: 'Cron Scheduler', icon: <Clock className="w-5 h-5 text-amber-500" />, desc: 'Time-based workflow execution' },
        { label: 'Gmail Scanner', icon: <Mail className="w-5 h-5 text-red-500" />, desc: 'Fetches unread emails' },
        { label: 'Groq Summarizer', icon: <Cpu className="w-5 h-5 text-primary" />, desc: 'Condenses threads into points' },
        { label: 'Digest Sender', icon: <Mail className="w-5 h-5 text-accent" />, desc: 'Sends compact brief to inbox' },
      ],
      details: [
        'Saves up to 45 minutes of manual scrolling every morning.',
        'Highlights important action items and flags urgent senders.',
        'Separates spam/updates from core professional conversations.',
        'Outputs a beautifully formatted daily HTML digest.',
      ],
    },
  ];

  return (
    <section id="showcase" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">Showcase</p>
          <h2 className="section-heading mb-4">
            AI Automation Workflows
          </h2>
          <p className="section-subtitle">
            Production-ready workflows running on automated nodes, designed to connect APIs, LLMs, and databases.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Workflow Selector */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            {workflows.map((w, idx) => (
              <button
                key={idx}
                onClick={() => setActiveWorkflow(idx)}
                className={`p-5 text-left rounded-xl border transition-all duration-300 ${
                  activeWorkflow === idx
                    ? 'bg-surface border-primary/30 shadow-[0_0_20px_rgba(59,130,246,0.08)]'
                    : 'bg-surface/40 border-borderSubtle hover:border-borderHover hover:bg-surface/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-semibold uppercase tracking-wider ${
                    activeWorkflow === idx ? 'text-primary' : 'text-textSecondary'
                  }`}>
                    Pipeline {idx + 1}
                  </span>
                  <span className="text-[10px] text-textSecondary flex items-center">
                    <Clock className="w-3 h-3 mr-1" /> Active
                  </span>
                </div>
                <h3 className="font-semibold text-sm text-textPrimary leading-tight mb-1.5">
                  {w.title}
                </h3>
                <p className="text-xs text-textSecondary line-clamp-2 leading-relaxed">
                  {w.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Workflow Detail View */}
          <div className="lg:col-span-8">
            <div className="p-6 md:p-8 glass-card rounded-2xl h-full flex flex-col relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeWorkflow}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-8 text-left"
                >
                  {/* Trigger & Title */}
                  <div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-[11px] font-semibold uppercase mb-3">
                      Trigger: {workflows[activeWorkflow].trigger}
                    </span>
                    <h3 className="text-xl font-bold text-textPrimary mb-2">
                      {workflows[activeWorkflow].title}
                    </h3>
                    <p className="text-sm text-textSecondary leading-relaxed">
                      {workflows[activeWorkflow].desc}
                    </p>
                  </div>

                  {/* Node Flow */}
                  <div className="py-6 px-4 bg-surface/50 border border-borderSubtle rounded-xl overflow-x-auto">
                    <div className="min-w-[600px] flex items-center justify-between relative px-4">
                      <div className="absolute inset-0 top-1/2 -translate-y-1/2 flex items-center justify-around pointer-events-none px-12 z-0">
                        {[1, 2, 3].map((i) => (
                          <svg key={i} className="w-20 h-4 overflow-visible" fill="none">
                            <path
                              d="M 0 8 L 80 8"
                              stroke="rgba(59,130,246,0.25)"
                              strokeWidth="1.5"
                              className="animate-dash"
                            />
                          </svg>
                        ))}
                      </div>

                      {workflows[activeWorkflow].nodes.map((node, nIdx) => (
                        <div key={nIdx} className="flex flex-col items-center text-center relative z-10 w-28">
                          <div className="p-3.5 bg-surface rounded-xl border border-borderSubtle hover:border-primary/20 transition-all duration-200">
                            {node.icon}
                          </div>
                          <span className="text-xs font-semibold text-textPrimary mt-2.5 block">
                            {node.label}
                          </span>
                          <span className="text-[10px] text-textSecondary mt-1 leading-tight line-clamp-2 max-w-[100px]">
                            {node.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-xs text-textSecondary font-semibold uppercase tracking-wider mb-3 flex items-center">
                      <Layers className="w-3.5 h-3.5 mr-2" /> Key Features
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {workflows[activeWorkflow].details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start text-sm text-textSecondary">
                          <span className="text-primary/60 mr-2 mt-1.5 w-1 h-1 rounded-full bg-primary/60 shrink-0" />
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
