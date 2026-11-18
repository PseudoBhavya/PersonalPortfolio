'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Copy,
  Check,
  ArrowUpRight,
  ArrowUp,
} from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

export const ContactFooter: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = 'bhavyapandey446@gmail.com';
  const phone = '+91 8319549581';
  const github = 'https://github.com/PseudoBhavya';

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative pt-24 pb-14 px-4 sm:px-6 max-w-7xl mx-auto z-20">
      {/* Contact Banner Card */}
      <div className="relative rounded-3xl glass-surface p-8 sm:p-14 border border-white/10 overflow-hidden mb-16 shadow-2xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/30 border border-emerald-500/30 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>OPEN FOR FULL-TIME ROLES & AI COLLABORATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Let&apos;s build something exceptional together.
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-10 max-w-2xl">
            Whether you are looking to hire a Full Stack Developer, need architectural consulting on
            multi-agent Gemini workflows, or want to collaborate on high-impact computer vision
            systems — my inbox is always open.
          </p>

          {/* Contact Direct Action Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Email Block */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between group hover:border-white/20 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                  PRIMARY EMAIL
                </span>
                <Mail className="w-4 h-4 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
              </div>
              <div className="font-mono text-xs text-white truncate mb-4 select-all">
                {email}
              </div>
              <button
                onClick={() => copyToClipboard(email, 'email')}
                className="w-full py-2 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 font-mono text-xs text-zinc-300 hover:text-white flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY EMAIL ADDRESS</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone Block */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between group hover:border-white/20 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                  TELEPHONE / WHATSAPP
                </span>
                <Phone className="w-4 h-4 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
              </div>
              <div className="font-mono text-xs text-white truncate mb-4 select-all">
                {phone}
              </div>
              <button
                onClick={() => copyToClipboard(phone, 'phone')}
                className="w-full py-2 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 font-mono text-xs text-zinc-300 hover:text-white flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">COPIED NUMBER</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY PHONE NUMBER</span>
                  </>
                )}
              </button>
            </div>

            {/* GitHub Block */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between group hover:border-white/20 transition-all sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                  VERSION CONTROL
                </span>
                <GithubIcon className="w-4 h-4 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
              </div>
              <div className="font-mono text-xs text-white truncate mb-4">
                github.com/PseudoBhavya
              </div>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-xl bg-white text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-zinc-200 transition-all shadow-md active:scale-95"
              >
                <span>OPEN REPOSITORIES</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Status & Bottom Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10 font-mono text-xs text-zinc-500">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-zinc-400 tracking-wider">
            ALL SYSTEMS NOMINAL <span className="text-zinc-600">{'//'}</span> LATENCY &lt;14MS
          </span>
        </div>

        <div className="text-center sm:text-right text-zinc-400">
          DESIGNED & ENGINEERED BY <span className="text-white font-semibold">BHAVYA PANDEY</span>
        </div>

        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="p-2.5 rounded-full glass-surface text-zinc-400 hover:text-white hover:border-white/30 transition-all flex items-center gap-1.5 text-xs font-mono"
        >
          <ArrowUp className="w-4 h-4" />
          <span className="hidden sm:inline">TOP</span>
        </button>
      </div>
    </footer>
  );
};
