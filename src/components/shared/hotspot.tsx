'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface HotspotProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
  position: {
    top: string;
    left: string;
  };
}

export function Hotspot({ id, label, isActive, onClick, position }: HotspotProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const handleTouchStart = () => {
    setIsTouched(true);
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    // Keep tooltip visible for a short time after touch
    setTimeout(() => {
      setIsTouched(false);
      setIsHovered(false);
    }, 300);
  };

  return (
    <motion.div
      className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
      style={{
        top: position.top,
        left: position.left,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Tooltip Label */}
      <motion.div
        initial={{ opacity: 0, y: 4 }}
        animate={{
          opacity: isHovered || isActive ? 1 : 0,
          y: isHovered || isActive ? 0 : 4,
        }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 sm:mb-2 pointer-events-none z-20"
      >
        <div className="bg-zinc-900/95 text-white px-3 py-1.5 sm:px-2.5 sm:py-1 rounded-md text-xs sm:text-xs font-medium whitespace-nowrap shadow-lg border border-gold/30">
          {label}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
            <div className="border-[5px] border-transparent border-t-zinc-900/95" />
          </div>
        </div>
      </motion.div>

      {/* Pulsing Ring (subtle) */}
      {!isActive && (
        <motion.div
          className="absolute inset-[-4px] rounded-full border border-gold/50"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{
            scale: [1, 1.6],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      )}

      {/* Hotspot Button - Larger touch target for mobile (32px on mobile, 24px on desktop) */}
      <motion.button
        onClick={onClick}
        aria-label={`Select ${label} component`}
        aria-pressed={isActive}
        className={cn(
          'relative w-8 h-8 sm:w-7 sm:h-7 md:w-6 md:h-6 rounded-full border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-1 focus-visible:ring-offset-zinc-950 flex items-center justify-center cursor-pointer touch-manipulation',
          isActive
            ? 'bg-gold border-gold shadow-[0_0_20px_rgba(212,175,55,0.5)]'
            : 'bg-gold/30 border-gold hover:bg-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] active:bg-gold active:shadow-[0_0_20px_rgba(212,175,55,0.4)]'
        )}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Inner Dot */}
        <div
          className={cn(
            'w-2.5 h-2.5 sm:w-2 sm:h-2 rounded-full transition-colors duration-200',
            isActive ? 'bg-zinc-950' : 'bg-gold'
          )}
        />
      </motion.button>

      {/* Active state outer ring */}
      {isActive && (
        <motion.div
          className="absolute inset-[-6px] rounded-full border border-gold/40"
          animate={{
            scale: [1, 1.2],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      )}
    </motion.div>
  );
}
