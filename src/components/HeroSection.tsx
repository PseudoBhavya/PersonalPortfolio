'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Dither } from './Dither';
import { DitherVeil } from './DitherVeil';

interface HeroSectionProps {
  veilImageSrc?: string;
  onEnterWorkspace?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  veilImageSrc = '/veil-image.jpg',
  onEnterWorkspace,
}) => {
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    if (!onEnterWorkspace) return;

    let triggered = false;
    const triggerEnter = () => {
      if (!triggered) {
        triggered = true;
        onEnterWorkspace();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 30) {
        triggerEnter();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartY.current !== null) {
        const deltaY = touchStartY.current - e.touches[0].clientY;
        if (deltaY > 50) {
          triggerEnter();
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [onEnterWorkspace]);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black select-none flex items-center justify-center">
      {/* =========================================================================
          LAYER 1 (z-0 — Fine-Grained Dither Background)
          Full-screen fixed WebGL2 animated monochrome dithered waves with compact,
          dense scaling rather than oversized blobs.
          ========================================================================= */}
      <div className="fixed inset-0 z-0 pointer-events-auto opacity-70">
        <Dither
          waveColor="#8e8e93"
          backgroundColor="#000000"
          ditherMode="bayer"
          colorNum={3}
          pixelSize={2}
          waveSpeed={0.03}
          waveFrequency={5.5}
          waveAmplitude={0.18}
          mouseEffect="erase"
          mouseRadius={0.25}
          scale={0.65}
          contrast={1.15}
          brightness={-0.08}
          mouseStrength={0.8}
          trail={0.35}
          enableMouseInteraction={true}
          clickRipple={true}
          intro={true}
          disableAnimation={false}
        />
      </div>

      {/* =========================================================================
          LAYER 2 (z-10 — Compact, Borderless Dither Veil Centerpiece)
          Pure borderless 1-bit visual mask with 100% alpha transparency and soft
          radial mask feathering to eliminate any rectangular seam.
          ========================================================================= */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-auto">
        <div
          className="relative w-[260px] h-[320px] md:w-[300px] md:h-[360px] overflow-hidden bg-transparent"
          style={{
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 55%, transparent 80%)',
            maskImage: 'radial-gradient(ellipse at center, black 55%, transparent 80%)',
          }}
        >
          <DitherVeil
            src={veilImageSrc}
            pattern="floyd"
            pixelSize={2}
            inkColor="#000000"
            paperColor="#f4f4f5"
            rimColor="#ffffff"
            rim={0.015}
            revealRadius={140}
            softness={0.6}
            linger={0.9}
            fit="cover"
            palette="duotone"
            levels={2}
            contrast={1.25}
            brightness={0.02}
            clickBurst={true}
            wander={false}
          />
        </div>
      </div>

      {/* =========================================================================
          LAYER 3 (z-20 — Refined, Compact Foreground Typography & Enter Action)
          Pointer-events-none text overlay with subtle soft radial glow behind it.
          Only interactive elements have pointer-events-auto.
          ========================================================================= */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none p-6">
        {/* Soft radial backdrop to maintain razor-sharp legibility without boxes */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 45%, transparent 75%)',
          }}
        />

        {/* Refined typography & interactive CTA */}
        <div className="relative flex flex-col items-center justify-center text-center">
          {/* Line 1: Monospace uppercase muted tracking */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-mono text-[10px] md:text-xs uppercase tracking-[0.28em] text-[#a1a1aa] mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          >
            WELCOME TO MY DIGITAL WORKSPACE
          </motion.p>

          {/* Line 2: Single-line crisp white heading */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#ffffff] whitespace-nowrap drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]"
          >
            Bhavya Pandey
          </motion.h1>

          {/* Line 3: Clean silver subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-sm md:text-base font-normal tracking-wide text-[#d4d4d8] mt-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
          >
            Full Stack Developer
          </motion.p>

          {/* Minimalist interactive Entry Trigger */}
          {onEnterWorkspace && (
            <motion.button
              onClick={onEnterWorkspace}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="pointer-events-auto mt-6 flex items-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/15 text-xs uppercase tracking-[0.2em] text-zinc-200 hover:text-white hover:border-white/25 px-5 py-2.5 rounded-full transition-all duration-300 active:scale-95 group cursor-pointer shadow-lg"
              aria-label="Enter Workspace"
            >
              <span>Enter Workspace</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};
