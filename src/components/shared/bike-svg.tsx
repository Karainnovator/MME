'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { Hotspot } from './hotspot';

export type BikeComponent = 'battery' | 'frontWheel' | 'display' | 'button' | 'eshifter' | 'backWheel';

interface BikeSvgProps {
  className?: string;
  selectedComponent?: BikeComponent | null;
  onSelectComponent?: (component: BikeComponent) => void;
}

// Hotspot positions - Desktop values
const HOTSPOT_POSITIONS = {
  battery: { top: '35%', left: '46%' },
  frontWheel: { top: '70%', left: '80%' },
  display: { top: '35%', left: '58%' },
  button: { top: '22%', left: '82%' },
  eshifter: { top: '50%', left: '44%' },
  backWheel: { top: '70%', left: '20%' },
} as const;

// Mobile hotspot positions
const HOTSPOT_POSITIONS_MOBILE = {
  battery: { top: '32%', left: '46%' },
  frontWheel: { top: '62%', left: '80%' },
  display: { top: '32%', left: '58%' },
  button: { top: '20%', left: '82%' },
  eshifter: { top: '48%', left: '44%' },
  backWheel: { top: '62%', left: '20%' },
} as const;

// Map component ID to translation key
const COMPONENT_LABEL_MAP: Record<BikeComponent, string> = {
  battery: 'componentBattery',
  frontWheel: 'componentFrontWheel',
  display: 'componentDisplay',
  button: 'componentButton',
  eshifter: 'componentEshifter',
  backWheel: 'componentBackWheel',
};

export function BikeSvg({ className, selectedComponent = null, onSelectComponent }: BikeSvgProps) {
  const t = useTranslations();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const positions = isMobile ? HOTSPOT_POSITIONS_MOBILE : HOTSPOT_POSITIONS;

  return (
    <div className={cn('relative w-full h-full min-h-[280px] sm:min-h-[320px] md:min-h-[360px]', className)}>
      {/* VanMoof Bike SVG - Exact from reference HTML */}
      <svg
        viewBox="0 0 500 320"
        className="w-full h-full touch-manipulation"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="VanMoof S3 bike diagram"
      >
        <defs>
          <linearGradient id="frameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37"/>
            <stop offset="100%" stopColor="#967826"/>
          </linearGradient>
        </defs>

        {/* Wheels */}
        <circle cx="100" cy="230" r="60" stroke="#2a2a2a" strokeWidth="8" fill="none"/>
        <circle cx="100" cy="230" r="55" stroke="#1a1a1a" strokeWidth="3" fill="none"/>
        <circle cx="100" cy="230" r="8" fill="#333"/>

        <circle cx="400" cy="230" r="60" stroke="#2a2a2a" strokeWidth="8" fill="none"/>
        <circle cx="400" cy="230" r="55" stroke="#1a1a1a" strokeWidth="3" fill="none"/>
        <circle cx="400" cy="230" r="8" fill="#333"/>

        {/* Main frame */}
        <path d="M100 230 L200 120 L350 120 L400 230" stroke="url(#frameGrad)" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M200 120 L250 230 L350 120" stroke="url(#frameGrad)" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M100 230 L250 230" stroke="url(#frameGrad)" strokeWidth="8" fill="none" strokeLinecap="round"/>
        <path d="M250 230 L400 230" stroke="url(#frameGrad)" strokeWidth="8" fill="none" strokeLinecap="round"/>

        {/* Handlebar */}
        <path d="M350 120 L365 95 L400 85" stroke="url(#frameGrad)" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>

        {/* Seat post & seat */}
        <path d="M200 120 L185 75" stroke="url(#frameGrad)" strokeWidth="6" fill="none" strokeLinecap="round"/>
        <ellipse cx="185" cy="68" rx="30" ry="10" fill="#2a2a2a"/>

        {/* Battery (integrated in frame) */}
        <rect x="210" y="110" width="100" height="28" rx="6" fill="#161616" stroke="#333" strokeWidth="2"/>
        <rect x="215" y="115" width="40" height="4" rx="2" fill="#D4AF37" opacity="0.5"/>

        {/* Display */}
        <rect x="365" y="78" width="28" height="18" rx="3" fill="#161616" stroke="#D4AF37" strokeWidth="2"/>
        <rect x="370" y="83" width="18" height="8" rx="1" fill="#0a0a0a"/>

        {/* Motor hub (rear) */}
        <circle cx="400" cy="230" r="20" fill="#1a1a1a" stroke="#333" strokeWidth="3"/>
        <circle cx="400" cy="230" r="12" fill="#111" stroke="#444" strokeWidth="1"/>

        {/* Front sensor area */}
        <circle cx="100" cy="230" r="15" fill="#1a1a1a" stroke="#333" strokeWidth="2"/>
      </svg>

      {/* Interactive Hotspots */}
      {Object.entries(positions).map(([id, position]) => (
        <Hotspot
          key={id}
          id={id as BikeComponent}
          label={t(COMPONENT_LABEL_MAP[id as BikeComponent])}
          position={{ top: position.top, left: position.left }}
          isActive={selectedComponent === id}
          onClick={() => onSelectComponent?.(id as BikeComponent)}
        />
      ))}
    </div>
  );
}
