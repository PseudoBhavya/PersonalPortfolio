'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface DeskWorkspaceProps {
  onBack: () => void;
}

export interface DeskObject {
  id: string;
  name: string;
  label: string;
  left: number;
  top: number;
  width: number;
  height: number;
  borderRadius?: string;
  tooltipPosition?: 'top' | 'bottom';
}

/**
 * Exact percentage coordinates calculated directly from the 2752x1536 photograph:
 * - Laptop: box (0, 150) to (971, 1264)
 * - Rubik's Cube: box (1238, 391) to (1491, 629)
 * - Keyboard: box (990, 786) to (1857, 1078)
 * - Headphones on Stand: box (1706, 207) to (2152, 798)
 * - Desk Globe: box (2215, 76) to (2710, 622)
 * - Teal Notebook & Pen: box (2215, 683) to (2696, 1228)
 */
export const DESK_OBJECTS: DeskObject[] = [
  {
    id: 'laptop',
    name: 'Laptop',
    label: 'My Projects',
    left: 0.0,
    top: 9.8,
    width: 35.3,
    height: 72.5,
    borderRadius: '20px',
    tooltipPosition: 'top',
  },
  {
    id: 'rubiks-cube',
    name: "Rubik's Cube",
    label: 'Play With Me',
    left: 45.0,
    top: 25.5,
    width: 9.2,
    height: 15.5,
    borderRadius: '14px',
    tooltipPosition: 'top',
  },
  {
    id: 'keyboard',
    name: 'Mechanical Keyboard',
    label: 'My Tech Stack',
    left: 36.0,
    top: 51.2,
    width: 31.5,
    height: 19.0,
    borderRadius: '12px',
    tooltipPosition: 'top',
  },
  {
    id: 'headphones',
    name: 'Headphones',
    label: 'Ambient Sound',
    left: 62.0,
    top: 13.5,
    width: 16.2,
    height: 38.5,
    borderRadius: '28px',
    tooltipPosition: 'top',
  },
  {
    id: 'globe',
    name: 'Desk Globe',
    label: 'My Journey',
    left: 80.5,
    top: 5.0,
    width: 18.0,
    height: 35.5,
    borderRadius: '50%',
    tooltipPosition: 'bottom', // Globe is near the top edge; bottom avoids viewport clipping
  },
  {
    id: 'notebook',
    name: 'Teal Notebook & Pen',
    label: 'About Me',
    left: 80.5,
    top: 44.5,
    width: 17.5,
    height: 35.5,
    borderRadius: '16px',
    tooltipPosition: 'top',
  },
];

const DESK_IMAGE = '/desk-bg.jpg';

export const DeskWorkspace: React.FC<DeskWorkspaceProps> = ({ onBack }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black select-none flex items-center justify-center">
      {/* Top-left "← Back" Navigation Pill */}
      <motion.button
        onClick={onBack}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="absolute top-6 left-6 z-40 flex items-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/15 text-xs uppercase tracking-[0.2em] text-zinc-300 hover:text-white px-4 py-2 rounded-full transition-all duration-300 active:scale-95 group cursor-pointer shadow-2xl"
        aria-label="Back to Hero"
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
        <span>Back</span>
      </motion.button>

      {/* Locked Aspect-Ratio Container (2752 / 1536 ≈ 1.791666) */}
      {/* Ensures all hotspots stay 100% locked to photograph pixels on all screens */}
      <div
        className="relative overflow-hidden flex-shrink-0"
        style={{
          width: 'max(100vw, calc(100vh * 2752 / 1536))',
          height: 'max(100vh, calc(100vw * 1536 / 2752))',
        }}
      >
        {/* Base Desk Image: softly dims on object hover for maximum tactile focus */}
        <div
          className="absolute inset-0 transition-[filter] duration-250 ease-out"
          style={{
            filter: hoveredId ? 'brightness(0.82) contrast(1.02)' : 'brightness(1.0)',
          }}
        >
          <Image
            src={DESK_IMAGE}
            alt="Desk Workspace"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover select-none pointer-events-none"
            draggable={false}
          />
        </div>

        {/* Interactive Hotspots Layer */}
        {DESK_OBJECTS.map((obj) => {
          const isHovered = hoveredId === obj.id;

          return (
            <div
              key={obj.id}
              onMouseEnter={() => setHoveredId(obj.id)}
              onMouseLeave={() => setHoveredId((current) => (current === obj.id ? null : current))}
              style={{
                position: 'absolute',
                left: `${obj.left}%`,
                top: `${obj.top}%`,
                width: `${obj.width}%`,
                height: `${obj.height}%`,
                zIndex: isHovered ? 30 : 10,
              }}
              className="cursor-pointer group select-none"
            >
              {/* Organic Soft Spotlight Glow behind the Object (No hard rectangular lines) */}
              <motion.div
                initial={false}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1.08 : 0.96,
                }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="absolute inset-[-15%] pointer-events-none"
                style={{
                  background:
                    obj.id === 'globe'
                      ? 'radial-gradient(circle at center, rgba(251, 191, 36, 0.22) 0%, rgba(255, 255, 255, 0.08) 45%, transparent 75%)'
                      : 'radial-gradient(ellipse at center, rgba(251, 191, 36, 0.20) 0%, rgba(255, 255, 255, 0.08) 50%, transparent 80%)',
                  filter: 'blur(12px)',
                }}
              />

              {/* Feathered Photographic Highlight Layer (Seamlessly blends into desk, NO wireframe borders) */}
              <motion.div
                initial={false}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? -4 : 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 420,
                  damping: 26,
                  mass: 0.7,
                }}
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{
                  borderRadius: obj.borderRadius || '16px',
                  WebkitMaskImage:
                    obj.id === 'globe'
                      ? 'radial-gradient(circle at center, black 72%, transparent 98%)'
                      : 'radial-gradient(ellipse at center, black 75%, transparent 98%)',
                  maskImage:
                    obj.id === 'globe'
                      ? 'radial-gradient(circle at center, black 72%, transparent 98%)'
                      : 'radial-gradient(ellipse at center, black 75%, transparent 98%)',
                  filter: 'drop-shadow(0 10px 20px rgba(245, 158, 11, 0.35))',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={DESK_IMAGE}
                  alt={obj.name}
                  className="absolute max-w-none select-none pointer-events-none"
                  draggable={false}
                  style={{
                    width: `${100 / (obj.width / 100)}%`,
                    height: `${100 / (obj.height / 100)}%`,
                    left: `-${(obj.left / obj.width) * 100}%`,
                    top: `-${(obj.top / obj.height) * 100}%`,
                    filter: 'brightness(1.15) contrast(1.05)',
                  }}
                />
              </motion.div>

              {/* Minimalist Floating Tooltip (Apple-inspired dark glassmorphism) */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: obj.tooltipPosition === 'bottom' ? -6 : 6,
                      scale: 0.95,
                    }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{
                      opacity: 0,
                      y: obj.tooltipPosition === 'bottom' ? -4 : 4,
                      scale: 0.95,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 460,
                      damping: 28,
                    }}
                    className={`absolute left-1/2 -translate-x-1/2 z-40 pointer-events-none ${
                      obj.tooltipPosition === 'bottom'
                        ? 'top-full mt-3.5'
                        : 'bottom-full mb-3.5'
                    }`}
                  >
                    <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-xl border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.95)] animate-pulse" />
                      <span className="font-mono text-xs uppercase tracking-wider text-zinc-100 whitespace-nowrap font-medium">
                        {obj.label}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};
