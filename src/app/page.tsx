'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { DeskWorkspace } from '@/components/DeskWorkspace';

export default function Home() {
  const [view, setView] = useState<'hero' | 'workspace'>('hero');

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black text-white selection:bg-white selection:text-black">
      <AnimatePresence initial={false}>
        {view === 'hero' ? (
          <motion.div
            key="hero"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 h-screen w-screen overflow-hidden bg-black"
          >
            <HeroSection
              veilImageSrc="/veil-image.jpg"
              onEnterWorkspace={() => setView('workspace')}
            />
          </motion.div>
        ) : (
          <motion.div
            key="workspace"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 h-screen w-screen overflow-hidden bg-black"
          >
            <DeskWorkspace onBack={() => setView('hero')} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
