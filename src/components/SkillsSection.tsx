'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Server,
  Brain,
  Terminal,
  Eye,
} from 'lucide-react';

interface SkillCategory {
  id: string;
  code: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  summary: string;
  skills: { name: string; level: string; note?: string }[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    code: 'FE-01',
    title: 'Frontend Engineering',
    icon: Code,
    accent: 'emerald',
    summary:
      'Component-driven architecture prioritizing sub-second FCP, pristine layout stability, and fluid 60fps micro-interactions.',
    skills: [
      { name: 'React.js', level: 'Advanced' },
      { name: 'Next.js (App Router)', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'JavaScript (ESNext)', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'Framer Motion', level: 'Intermediate' },
      { name: 'HTML5 / CSS3', level: 'Advanced' },
    ],
  },
  {
    id: 'backend',
    code: 'BE-02',
    title: 'Backend & Databases',
    icon: Server,
    accent: 'blue',
    summary:
      'Robust service layers, relational normalization, concurrent transaction safety, and granular role-based authorization.',
    skills: [
      { name: 'Node.js', level: 'Advanced' },
      { name: 'Express.js', level: 'Advanced' },
      { name: 'Spring Boot', level: 'Intermediate' },
      { name: 'REST APIs', level: 'Advanced' },
      { name: 'RBAC Authentication', level: 'Advanced' },
      { name: 'MySQL', level: 'Advanced' },
      { name: 'PostgreSQL', level: 'Intermediate' },
    ],
  },
  {
    id: 'ai-cv',
    code: 'AI-03',
    title: 'AI & Computer Vision',
    icon: Brain,
    accent: 'amber',
    summary:
      'Multi-agent prompt orchestration, LLM reasoning pipelines, and classic digital image processing / spatial transform kernels.',
    skills: [
      { name: 'Gemini API', level: 'Advanced' },
      { name: 'Multi-Agent Workflows', level: 'Advanced' },
      { name: 'Prompt Engineering', level: 'Advanced' },
      { name: 'Histogram Equalization', level: 'DIP Core' },
      { name: 'Spatial Filtering & Convolutions', level: 'DIP Core' },
      { name: 'Edge Detection (Sobel/Canny)', level: 'DIP Core' },
      { name: 'Morphological Operations', level: 'DIP Core' },
      { name: 'PCA Denoising', level: 'DIP Core' },
    ],
  },
  {
    id: 'languages',
    code: 'LP-04',
    title: 'Languages & Cross-Platform',
    icon: Terminal,
    accent: 'purple',
    summary:
      'Polyglot programming spanning high-performance systems code, mobile app development, and statistical analysis.',
    skills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'Java', level: 'Advanced' },
      { name: 'C++', level: 'Intermediate' },
      { name: 'Kotlin', level: 'Intermediate' },
      { name: 'Dart & Flutter', level: 'Intermediate' },
      { name: 'PyQt6 & Streamlit', level: 'Advanced' },
      { name: 'Pandas', level: 'Advanced' },
    ],
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto z-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8 gap-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>TECHNICAL ARSENAL // 02</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            Skill Matrix & Tooling
          </h2>
          <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
            Systematic overview of core competencies across full stack development, autonomous agent
            pipelines, and mathematical computer vision operations.
          </p>
        </div>

        {/* Status Chip */}
        <div className="glass-surface px-4 py-2.5 rounded-xl border border-white/10 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-mono text-xs text-zinc-300">
            CONTINUOUSLY COMPILED & BENCHMARKED
          </span>
        </div>
      </div>

      {/* Grid of 4 Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
        {SKILL_CATEGORIES.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-surface rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden group hover:border-white/20 transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white group-hover:text-emerald-400 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 block">
                      [{cat.code}]
                    </span>
                    <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                  </div>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-emerald-400 transition-colors" />
              </div>

              {/* Summary */}
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                {cat.summary}
              </p>

              {/* Skills Chips Grid */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/chip px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 hover:border-white/25 hover:bg-white/[0.07] transition-all flex items-center gap-2"
                  >
                    <span className="text-xs font-mono text-zinc-200 group-hover/chip:text-white transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400 group-hover/chip:text-emerald-400 transition-colors">
                      • {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Special Feature Spotlight: Computer Vision & Multi-Agent Heuristics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-surface rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-2">
              <Eye className="w-4 h-4" />
              <span>SPECIALIZED DOMAIN SPOTLIGHT</span>
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">
              Computer Vision & Multi-Agent Heuristics Pipeline
            </h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Bridging classical digital signal and image processing algorithms (spatial convolution kernels,
              histogram equalization, morphology, edge gradients) with modern Gemini generative AI
              function calling and multi-agent coordination topologies.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 lg:max-w-md">
            {[
              'Histogram Equalization',
              'Spatial 2D Filtering',
              'Sobel / Canny Edge Detection',
              'Morphological Dilation/Erosion',
              'PCA Dimensionality Denoising',
              'Multi-Agent LLM Orchestration',
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-zinc-300 flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
