'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Users,
  FileBadge,
  Gamepad2,
  Activity,
  Flame,
} from 'lucide-react';

export const AboutEducation: React.FC = () => {
  const highlights = [
    {
      title: 'National-Level Hackathon Participant',
      organization: 'CIT Coimbatore',
      description:
        'Engineered GravitasAI (a tri-agent Gemini AI productivity orchestrator) in an intense 24-hour sprint against elite engineering teams.',
      icon: Flame,
      badge: 'NATIONAL HACKATHON',
      accent: 'amber',
    },
    {
      title: 'Class Representative (CR)',
      organization: 'CHRIST University, Pune Lavasa Campus',
      description:
        'Liaison between faculty and 60+ undergraduates; drove curriculum synchronization, project reviews, and student-academic workflows.',
      icon: Users,
      badge: 'LEADERSHIP & GOVERNANCE',
      accent: 'emerald',
    },
    {
      title: 'UiPath Studio Automation Certified',
      organization: 'UiPath Academy',
      description:
        'Certified in enterprise Robotic Process Automation (RPA), selector optimization, error-handling state machines, and background process automation.',
      icon: FileBadge,
      badge: 'CERTIFIED RPA DEVELOPER',
      accent: 'blue',
    },
    {
      title: 'Core Member, Varsity Esports Club',
      organization: 'CHRIST University',
      description:
        'Organized campus-wide competitive esports brackets, streaming infrastructure, and tactical strategy sessions.',
      icon: Gamepad2,
      badge: 'COMMUNITY & TECH OPS',
      accent: 'purple',
    },
    {
      title: 'Department Football & Volleyball Representative',
      organization: 'CHRIST University Athletics',
      description:
        'Represented the Department of Computer Science across university tournaments, cultivating discipline, endurance, and on-field team leadership.',
      icon: Activity,
      badge: 'ATHLETICS & TEAMWORK',
      accent: 'emerald',
    },
  ];

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto z-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8 gap-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>BACKGROUND & TRACK RECORD // 03</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            Education & Leadership
          </h2>
          <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
            Academic foundation in computational sciences combined with competitive hackathon builds,
            departmental leadership, and verified automation credentials.
          </p>
        </div>

        <div className="glass-surface px-4 py-2 rounded-xl border border-white/10 font-mono text-xs text-zinc-300">
          LOCATION: PUNE / LAVASA, INDIA
        </div>
      </div>

      {/* Main Grid: Education Spotlight + Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Education Hero Card (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 glass-surface rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between relative overflow-hidden"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs tracking-wider border border-emerald-500/30 text-emerald-400 bg-emerald-950/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ENROLLED // 3RD YEAR
              </span>
              <GraduationCap className="w-6 h-6 text-zinc-400" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Bachelor of Computer Applications (BCA)
            </h3>
            <p className="text-sm font-mono text-emerald-400 mb-6">
              CHRIST (Deemed to be University), Pune Lavasa Campus
            </p>

            <p className="text-zinc-300 text-sm leading-relaxed mb-6">
              Rigorous curriculum emphasizing Object-Oriented Software Design, Data Structures &
              Algorithms, Relational Database Management Systems (RDBMS), Operating Systems, Web
              Technologies, and Applied Artificial Intelligence.
            </p>

            {/* Core Coursework Tags */}
            <div className="space-y-2 mb-6">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block">
                FOCUSED DOMAINS:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Data Structures & Algorithms',
                  'Database Systems (RDBMS)',
                  'Object-Oriented Programming (Java/C++)',
                  'Full Stack Web Development',
                  'Digital Image Processing',
                  'Cloud Architecture',
                ].map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-zinc-300 font-mono text-xs"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-zinc-400">
            <span>YEAR: 2023 — PRESENT</span>
            <span className="text-emerald-400">STATUS: IN GOOD STANDING</span>
          </div>
        </motion.div>

        {/* Highlights & Leadership Matrix (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-surface glass-surface-hover rounded-2xl p-5 sm:p-6 border border-white/10 flex items-start gap-4 transition-all"
              >
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-emerald-400 flex-shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h4 className="text-base font-bold text-white tracking-tight">
                      {item.title}
                    </h4>
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-zinc-400">
                      {item.badge}
                    </span>
                  </div>

                  <p className="font-mono text-xs text-zinc-400 mb-2">
                    {item.organization}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
