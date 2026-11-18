'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Arsenal', href: '#skills' },
    { name: 'About & Journey', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo Dock */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="pointer-events-auto flex items-center gap-3 px-3.5 py-2 rounded-full glass-surface text-white text-xs tracking-wider uppercase font-mono font-medium border border-white/10 hover:border-white/20 transition-all group"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-200 group-hover:text-white transition-colors">
              BP <span className="text-zinc-500">{'//'}</span> BHAVYA PANDEY
            </span>
          </motion.a>

          {/* Desktop Navigation Links */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hidden md:flex items-center gap-1 p-1.5 rounded-full glass-surface pointer-events-auto border border-white/10"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white hover:bg-white/[0.06] rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </motion.nav>

          {/* Right Action Icons & Status */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden sm:flex items-center gap-2 pointer-events-auto"
          >
            <a
              href="https://github.com/PseudoBhavya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-full glass-surface text-zinc-400 hover:text-white hover:border-white/20 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-black text-xs font-mono font-semibold tracking-wider hover:bg-zinc-200 transition-colors shadow-sm"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden pointer-events-auto p-2 rounded-full glass-surface text-zinc-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-50 p-6 rounded-2xl glass-surface border border-white/10 md:hidden flex flex-col gap-4 shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                NAVIGATION TERMINAL
              </span>
              <span className="text-zinc-500">v3.0.0</span>
            </div>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm font-mono text-zinc-200 hover:text-white hover:bg-white/[0.08] transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <a
                href="https://github.com/PseudoBhavya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white"
              >
                <GithubIcon className="w-4 h-4" />
                <span>PseudoBhavya</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-1.5 bg-white text-black text-xs font-mono font-semibold rounded-md"
              >
                CONTACT
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
