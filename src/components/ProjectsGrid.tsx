'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  X,
  CheckCircle2,
  Terminal,
} from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

export interface Project {
  id: string;
  title: string;
  category: 'ai' | 'fullstack' | 'algorithms';
  badge: string;
  badgeType: 'emerald' | 'amber' | 'blue' | 'purple';
  tagline: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
  highlights: string[];
  metrics: string;
  architectureNotes: string;
}

const PROJECTS: Project[] = [
  {
    id: 'devdebug-ai',
    title: 'DevDebug AI',
    category: 'ai',
    badge: 'FLAGSHIP // PRODUCTION',
    badgeType: 'emerald',
    tagline: 'AI-Powered Career & Portfolio Optimization Platform',
    description:
      'Engineered a hybrid ATS resume evaluation and Gemini AI portfolio scoring platform. Provides actionable feedback on technical stack alignment, code sample clarity, and ATS parsing readiness with real-time score tracking.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Context API', 'Gemini AI API', 'Vercel'],
    github: 'https://github.com/PseudoBhavya',
    demo: 'https://github.com/PseudoBhavya',
    highlights: [
      'Dual scoring engine: Algorithmic ATS keyword density + Gemini 1.5 contextual reasoning.',
      'Score-history tracking dashboard with historical benchmark comparisons.',
      'Optimized client-side Context API state management with zero layout shift.',
    ],
    metrics: '94% ATS Parse Accuracy // 1.2s avg inference response time',
    architectureNotes:
      'Next.js App Router edge routes stream prompt-engineered JSON schemas from Gemini API directly into a reactive scoring canvas.',
  },
  {
    id: 'gravitas-ai',
    title: 'GravitasAI',
    category: 'ai',
    badge: 'NATIONAL HACKATHON // CIT COIMBATORE',
    badgeType: 'amber',
    tagline: 'Multi-Agent Autonomous AI Productivity Engine',
    description:
      'Conceived and deployed in 24 hours at a National-Level Hackathon (CIT Coimbatore). Coordinates a triad of specialized Gemini AI agents to autonomously ingest incoming messages, summarize content, evaluate cognitive workload, and synthesize a prioritized execution queue.',
    stack: ['React.js', 'Node.js', 'Express.js', 'Gemini API', 'REST APIs', 'Tailwind CSS'],
    github: 'https://github.com/PseudoBhavya',
    demo: 'https://github.com/PseudoBhavya',
    highlights: [
      'Tri-Agent Architecture: Email Classifier/Summarizer, Workload Assessor, and Task Prioritizer.',
      'Constructed robust fallback mechanisms for batch token throughput limits under hackathon pressure.',
      'Integrated real-time task drag-and-drop dashboard synchronized with Node.js backend.',
    ],
    metrics: '24-Hour Sprint Build // 3 Specialized Autonomous Agents',
    architectureNotes:
      'Chained agent pipeline where Agent A’s structured JSON payload feeds into Agent B’s heuristics engine, generating deterministic priority scores.',
  },
  {
    id: 'dil-se-tadka',
    title: 'DilSeTadka',
    category: 'fullstack',
    badge: 'ENTERPRISE ARCHITECTURE',
    badgeType: 'blue',
    tagline: 'Full Stack Restaurant & Hotel Booking Platform',
    description:
      'Engineered an enterprise-grade booking and table allocation platform with dual frontend interfaces (customer reservation portal + administrative control center) backed by Spring Boot and a 3NF normalized MySQL database.',
    stack: ['React.js', 'Spring Boot', 'Java', 'MySQL', 'REST APIs', 'RBAC Auth'],
    github: 'https://github.com/PseudoBhavya',
    demo: 'https://github.com/PseudoBhavya',
    highlights: [
      'Role-Based Access Control (RBAC) securing customer, staff, and admin tiers.',
      'Normalized 3NF relational schema preventing race conditions in peak slot reservations.',
      'Comprehensive CRUD endpoints adhering strictly to RESTful architectural principles.',
    ],
    metrics: 'Dual-Frontend Portal // Zero double-booking concurrency safety',
    architectureNotes:
      'Spring Data JPA transaction management coupled with atomic slot locking prevents conflicting reservations during simultaneous checkout surges.',
  },
  {
    id: 'sorted',
    title: 'Sorted',
    category: 'algorithms',
    badge: 'CAPSTONE PLATFORM',
    badgeType: 'purple',
    tagline: 'Interactive Algorithm Visualization & Benchmarking Suite',
    description:
      'A multi-platform computational capstone visualizing 11 sorting, searching, graph traversal (Dijkstra, A*), and dynamic programming algorithms with synchronized source tracking, pitch-mapped audio cues, and Pandas statistical benchmarking.',
    stack: ['Python', 'Streamlit', 'Flask', 'PyQt6', 'Pandas', 'Web Audio API'],
    github: 'https://github.com/PseudoBhavya',
    demo: 'https://github.com/PseudoBhavya',
    highlights: [
      'Visualizes 11 core algorithms including Dijkstra, A* Search, QuickSort, and MergeSort.',
      'Sound synthesis using Web Audio API: pitch mapped exponentially to array element magnitudes.',
      'Comparative runtime analysis generating automated Pandas & Matplotlib performance graphs.',
    ],
    metrics: '11 Algorithms Visualized // Sub-millisecond step-frame stepping',
    architectureNotes:
      'Decoupled generator-based step execution loop allows pausing, reverse-stepping, and synchronized code line highlights in both GUI and Web modes.',
  },
  {
    id: 'cubesnap',
    title: 'CubeSnap',
    category: 'algorithms',
    badge: 'MOBILE // COMPUTER VISION',
    badgeType: 'emerald',
    tagline: "Rubik's Cube Solver & Speedcuber Suite",
    description:
      'Cross-platform mobile application that computes near-optimal 3x3 Rubik’s cube solutions in under 22 moves using the two-phase Kociemba algorithm, paired with competition scramble generation and an inspection timer.',
    stack: ['Flutter', 'Dart', 'Kociemba Algorithm', 'Mobile CV'],
    github: 'https://github.com/PseudoBhavya',
    demo: 'https://github.com/PseudoBhavya',
    highlights: [
      'Implemented two-phase Kociemba algorithm reaching solutions within 20–22 moves.',
      'Intuitive 3D facelet color input with real-time permutation validation.',
      'Speedcuber WCA-compliant timer with millisecond precision and scramble generation.',
    ],
    metrics: '<22 Average Move Count // <150ms solution computation',
    architectureNotes:
      'Pruning tables precomputed and cached in-memory allow instantaneous pruning of the two-phase group coset search tree on mobile processors.',
  },
];

export const ProjectsGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'fullstack' | 'algorithms'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const getBadgeColors = (type: string) => {
    switch (type) {
      case 'emerald':
        return 'text-emerald-400 border-emerald-500/30 bg-emerald-950/30';
      case 'amber':
        return 'text-amber-400 border-amber-500/30 bg-amber-950/30';
      case 'purple':
        return 'text-purple-400 border-purple-500/30 bg-purple-950/30';
      case 'blue':
      default:
        return 'text-sky-400 border-sky-500/30 bg-sky-950/30';
    }
  };

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto z-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-white/10 pb-8 gap-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>PORTFOLIO SHOWCASE // 01</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            Selected Projects
          </h2>
          <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
            High-performance web applications, multi-agent AI ecosystems, and algorithmic software
            architectures built for scale and precision.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 glass-surface p-1.5 rounded-xl border border-white/10 self-start md:self-end">
          {[
            { id: 'all', label: 'ALL BUILDS' },
            { id: 'ai', label: 'AI & AGENTS' },
            { id: 'fullstack', label: 'FULL STACK' },
            { id: 'algorithms', label: 'ALGORITHMS & MOBILE' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as 'all' | 'ai' | 'fullstack' | 'algorithms')}
              className={`px-3.5 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all ${
                activeFilter === tab.id
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Bento Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project, index) => {
            const isLarge = index === 0 || index === 1;
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setSelectedProject(project)}
                className={`group relative rounded-2xl glass-surface glass-surface-hover p-6 sm:p-7 flex flex-col justify-between cursor-pointer border border-white/10 ${
                  isLarge ? 'md:col-span-1 lg:col-span-1 lg:row-span-1' : ''
                }`}
              >
                {/* 1-Bit Accent Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-mono font-medium tracking-widest border ${getBadgeColors(
                        project.badgeType
                      )}`}
                    >
                      {project.badge}
                    </span>
                    <span className="font-mono text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                      0{index + 1} <span className="text-zinc-600">{'//'}</span> 05
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs font-mono text-zinc-400 mb-4 tracking-wide">
                    {project.tagline}
                  </p>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Pills & Card Footer */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-zinc-300 font-mono text-[10px]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded bg-white/[0.02] text-zinc-500 font-mono text-[10px]">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                    <span className="flex items-center gap-1 text-[11px] text-zinc-500 group-hover:text-emerald-400">
                      <Terminal className="w-3.5 h-3.5" />
                      VIEW ARCHITECTURE
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <div className="p-1.5 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Project Architectural Deep-Dive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-surface rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full glass-surface text-zinc-400 hover:text-white hover:border-white/20 transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-6">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-mono font-medium tracking-widest border mb-3 ${getBadgeColors(
                    selectedProject.badgeType
                  )}`}
                >
                  {selectedProject.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="font-mono text-xs sm:text-sm text-zinc-400">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Full Description */}
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 pb-6 border-b border-white/10">
                {selectedProject.description}
              </p>

              {/* Key Technical Highlights */}
              <div className="mb-6">
                <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  KEY TECHNICAL HIGHLIGHTS
                </h4>
                <div className="space-y-2.5">
                  {selectedProject.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs sm:text-sm text-zinc-300 flex items-start gap-2.5"
                    >
                      <span className="font-mono text-emerald-400 text-xs mt-0.5">•</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics & Architecture */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="font-mono text-[10px] uppercase text-zinc-400 block mb-1">
                    BENCHMARK METRICS
                  </span>
                  <span className="font-mono text-xs text-emerald-300 font-semibold">
                    {selectedProject.metrics}
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="font-mono text-[10px] uppercase text-zinc-400 block mb-1">
                    DEPLOYMENT TARGET
                  </span>
                  <span className="font-mono text-xs text-white">
                    Vercel Edge / Cloud Services
                  </span>
                </div>
              </div>

              {/* Architecture Deep Dive */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 mb-8 font-mono text-xs text-zinc-400 leading-relaxed">
                <span className="text-zinc-200 block font-semibold mb-1">
                  SYSTEM ARCHITECTURE NOTE:
                </span>
                {selectedProject.architectureNotes}
              </div>

              {/* Tech Stack & Links */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
                  {selectedProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/10 text-zinc-300 font-mono text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl glass-surface text-white hover:border-white/30 font-mono text-xs uppercase font-semibold transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
