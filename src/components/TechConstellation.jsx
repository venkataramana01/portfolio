import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const CLUSTERS = [
  {
    key: 'languages', label: 'Languages', cx: 175, cy: 150, rx: 125, ry: 82, rot: -90,
    color: '#60A5FA',
    nodes: ['Java', 'JavaScript', 'Python', 'SQL'],
  },
  {
    key: 'frontend', label: 'Frontend', cx: 600, cy: 95, rx: 135, ry: 78, rot: -60,
    color: '#22D3EE',
    nodes: ['React.js', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    key: 'backend', label: 'Backend', cx: 1030, cy: 165, rx: 120, ry: 75, rot: -120,
    color: '#93C5FD',
    nodes: ['Spring Boot', 'Node.js', 'Express.js'],
  },
  {
    key: 'ai', label: 'AI & Machine Learning', cx: 1030, cy: 445, rx: 125, ry: 88, rot: 90,
    color: '#22D3EE',
    nodes: ['Generative AI', 'Gemini API', 'RAG', 'Embeddings', 'Machine Learning'],
  },
  {
    key: 'databases', label: 'Databases', cx: 640, cy: 535, rx: 125, ry: 72, rot: 30,
    color: '#60A5FA',
    nodes: ['MySQL', 'MongoDB', 'Pinecone'],
  },
  {
    key: 'tools', label: 'Tools', cx: 185, cy: 485, rx: 105, ry: 68, rot: 150,
    color: '#7DD3FC',
    nodes: ['Git', 'GitHub', 'VS Code'],
  },
];

// Meaningful cross-cluster connections (by node label)
const INTER_EDGES = [
  ['JavaScript', 'React.js'],
  ['JavaScript', 'Node.js'],
  ['Java', 'Spring Boot'],
  ['Python', 'Machine Learning'],
  ['Node.js', 'MongoDB'],
  ['Express.js', 'MongoDB'],
  ['RAG', 'Pinecone'],
  ['Embeddings', 'Pinecone'],
  ['Gemini API', 'Generative AI'],
];

const TechConstellation = () => {
  const [hovered, setHovered] = useState(null); // node label

  const { nodes, edges } = useMemo(() => {
    const nodes = [];
    const nodeToCluster = {};
    const edges = [];

    CLUSTERS.forEach((c) => {
      c.nodes.forEach((label, i) => {
        const angle = ((c.rot + (360 / c.nodes.length) * i) * Math.PI) / 180;
        nodes.push({
          id: `${c.key}-${label}`,
          label,
          cluster: c.key,
          color: c.color,
          x: c.cx + c.rx * Math.cos(angle),
          y: c.cy + c.ry * Math.sin(angle),
        });
        nodeToCluster[label] = c.key;
      });
      // intra-cluster path edges
      for (let i = 0; i < c.nodes.length - 1; i++) {
        edges.push({ a: `${c.key}-${c.nodes[i]}`, b: `${c.key}-${c.nodes[i + 1]}`, kind: 'intra' });
      }
    });

    const byLabel = {};
    nodes.forEach((n) => { byLabel[n.label] = n.id; });
    INTER_EDGES.forEach(([a, b]) => {
      if (byLabel[a] && byLabel[b]) edges.push({ a: byLabel[a], b: byLabel[b], kind: 'inter' });
    });

    return { nodes, edges, nodeToCluster };
  }, []);

  const nodeById = useMemo(() => Object.fromEntries(nodes.map((n) => [n.id, n])), [nodes]);


  // Simpler active check: highlight edges touching hovered node OR inside hovered node's cluster
  const hoveredCluster = hovered ? nodeById[hovered]?.cluster : null;
  const edgeActive = (edge) => {
    if (!hovered) return false;
    if (edge.a === hovered || edge.b === hovered) return true;
    const ca = nodeById[edge.a]?.cluster;
    const cb = nodeById[edge.b]?.cluster;
    return ca === hoveredCluster && cb === hoveredCluster;
  };
  const nodeActive = (n) => !hovered || n.id === hovered || n.cluster === hoveredCluster;

  return (
    <section id="technologies" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[600px] h-[500px] rounded-full bg-cyan-500/[0.04] blur-[130px] pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-electric text-xs font-semibold tracking-[0.25em] uppercase mb-4">Technologies</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-textPrimary tracking-tight leading-[1.05]">
            Tech <span className="text-gradient-cinematic">constellation</span>
          </h2>
          <p className="mt-4 text-textSecondary text-base sm:text-lg leading-relaxed max-w-2xl">
            The tools and technologies I work with — hover a node to trace its connections.
          </p>
        </motion.div>

        {/* Desktop: constellation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="hidden md:block glass-panel rounded-3xl p-4 sm:p-6 overflow-hidden"
        >
          <svg viewBox="0 0 1200 680" className="w-full h-auto select-none" role="img" aria-label="Technology constellation">
            <defs>
              <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* edges */}
            {edges.map((e, i) => {
              const a = nodeById[e.a];
              const b = nodeById[e.b];
              const active = edgeActive(e);
              const dim = hovered && !active;
              return (
                <line
                  key={i}
                  x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                  stroke={active ? '#22D3EE' : 'rgba(96,165,250,0.22)'}
                  strokeWidth={active ? 1.6 : 0.8}
                  strokeDasharray={e.kind === 'inter' ? '10 10' : undefined}
                  className={active || e.kind === 'inter' ? 'animate-dash' : undefined}
                  opacity={dim ? 0.15 : active ? 0.9 : 0.5}
                  style={{ transition: 'opacity .3s, stroke .3s' }}
                />
              );
            })}

            {/* cluster labels */}
            {CLUSTERS.map((c, ci) => (
              <text
                key={c.key}
                x={c.cx}
                y={c.cy + c.ry + 34}
                textAnchor="middle"
                className="fill-slate-400 const-label"
                style={{ fontSize: 12, letterSpacing: '0.22em', fontWeight: 600, textTransform: 'uppercase', animationDelay: `${ci * 0.12}s` }}
              >
                {c.label}
              </text>
            ))}

            {/* nodes */}
            {nodes.map((n, ni) => {
              const active = nodeActive(n);
              const dim = hovered && !active;
              return (
                <g
                  key={n.id}
                  onMouseEnter={() => setHovered(n.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ cursor: 'pointer' }}
                  opacity={dim ? 0.35 : 1}
                >
                  <circle
                    cx={n.x} cy={n.y}
                    r={active ? 18 : 13}
                    fill="url(#nodeGlow)"
                    className="node-glow"
                    style={{ animationDelay: `${(ni % 6) * 0.45}s`, transition: 'all .3s' }}
                  />
                  <circle
                    cx={n.x} cy={n.y}
                    r={n.id === hovered ? 7 : 5}
                    fill="#0B1220"
                    stroke={n.color}
                    strokeWidth={n.id === hovered ? 2 : 1.4}
                    style={{ transition: 'all .25s' }}
                  />
                  <text
                    x={n.x}
                    y={n.y - 14}
                    textAnchor="middle"
                    className={n.id === hovered ? 'fill-white' : 'fill-slate-300'}
                    style={{ fontSize: n.id === hovered ? 13.5 : 12, fontWeight: n.id === hovered ? 700 : 500, transition: 'all .2s', pointerEvents: 'none' }}
                  >
                    {n.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </motion.div>

        {/* Mobile: grouped chips */}
        <div className="md:hidden space-y-4">
          {CLUSTERS.map((c, i) => (
            <motion.div
              key={c.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-panel rounded-2xl p-5"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: c.color }}>
                {c.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {c.nodes.map((n) => (
                  <span key={n} className="px-3 py-1.5 text-xs font-medium text-slate-300 bg-white/[0.04] rounded-lg border border-white/[0.07]">
                    {n}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechConstellation;
