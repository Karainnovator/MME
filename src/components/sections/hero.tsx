'use client';

import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT } from '@/lib/constants';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="relative min-h-screen flex items-center px-4 pt-24 pb-16 sm:px-6 sm:pt-28 md:px-8 md:pt-32 md:pb-24 lg:px-12 lg:pb-32 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] sm:left-[30%] w-[70%] sm:w-[50%] h-[50%] bg-gold/[0.08] rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] sm:right-[30%] w-[60%] sm:w-[40%] h-[40%] bg-gold/[0.05] rounded-full blur-[80px] sm:blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-5 md:space-y-6 text-center lg:text-left"
          >
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold leading-[1.15] sm:leading-[1.1] tracking-tight px-2 sm:px-0">
              {t('heroTitle1')}
              <br />
              <span className="text-gradient-gold">{t('heroTitle2')}</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-[480px] mx-auto lg:mx-0 px-2 sm:px-0">
              {t('heroSubtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 px-2 sm:px-0 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-dark text-black font-semibold rounded-full px-6 sm:px-8 py-3 sm:py-4 h-auto hover-lift text-sm sm:text-base w-full sm:w-auto"
              >
                <a href={`tel:${CONTACT.phoneClean}`}>
                  <Phone className="size-4 sm:size-[18px]" />
                  {t('heroCtaCall')}
                </a>
              </Button>

              <Button
                asChild
                variant="ghost"
                size="lg"
                className="bg-surface-elevated border border-border hover:bg-surface-hover hover:border-border/50 rounded-full px-6 sm:px-8 py-3 sm:py-4 h-auto text-sm sm:text-base w-full sm:w-auto"
              >
                <a href="#configurator">
                  {t('heroCtaCalculate')}
                  <ArrowRight className="size-4 sm:size-[18px]" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center mt-8 lg:mt-0"
          >
            {/* VanMoof Bike SVG - Exact from reference HTML */}
            <svg
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px] h-auto translate-y-12 sm:translate-y-8 md:translate-y-8 translate-x-2 sm:translate-x-3 md:translate-x-4"
              viewBox="0 0 400 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <linearGradient id="bikeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4AF37"/>
                  <stop offset="100%" stopColor="#B38600"/>
                </linearGradient>
              </defs>

              {/* Wheels */}
              <circle cx="80" cy="180" r="50" stroke="#333" strokeWidth="4" fill="none"/>
              <circle cx="80" cy="180" r="45" stroke="#222" strokeWidth="2" fill="none"/>
              <circle cx="320" cy="180" r="50" stroke="#333" strokeWidth="4" fill="none"/>
              <circle cx="320" cy="180" r="45" stroke="#222" strokeWidth="2" fill="none"/>

              {/* Frame */}
              <path d="M80 180 L160 100 L280 100 L320 180" stroke="url(#bikeGradient)" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M160 100 L200 180 L280 100" stroke="url(#bikeGradient)" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M80 180 L200 180" stroke="url(#bikeGradient)" strokeWidth="6" fill="none" strokeLinecap="round"/>
              <path d="M200 180 L320 180" stroke="url(#bikeGradient)" strokeWidth="6" fill="none" strokeLinecap="round"/>

              {/* Handlebar */}
              <path d="M280 100 L290 80 L320 75" stroke="url(#bikeGradient)" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>

              {/* Seat */}
              <path d="M160 100 L150 70" stroke="url(#bikeGradient)" strokeWidth="5" fill="none" strokeLinecap="round"/>
              <ellipse cx="150" cy="65" rx="25" ry="8" fill="#333"/>

              {/* Battery (integrated) */}
              <rect x="170" y="95" width="80" height="20" rx="4" fill="#1a1a1a" stroke="#333" strokeWidth="2"/>

              {/* Display */}
              <rect x="290" y="70" width="20" height="12" rx="2" fill="#1a1a1a" stroke="#D4AF37" strokeWidth="1"/>

              {/* Motor hub */}
              <circle cx="320" cy="180" r="15" fill="#1a1a1a" stroke="#333" strokeWidth="2"/>

              {/* Error indicator (animated) */}
              <circle cx="210" cy="105" r="8" fill="#FF4444" filter="url(#glow)">
                <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite"/>
              </circle>
            </svg>

            {/* Error Detection Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-5 md:right-5 bg-card border border-border rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 min-w-[160px] sm:min-w-[180px] md:min-w-[200px] max-w-[180px] sm:max-w-[220px]"
            >
              <div className="space-y-2 sm:space-y-3">
                {/* Header */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="relative">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-error rounded-full animate-pulse"
                      style={{ boxShadow: '0 0 20px rgba(255, 68, 68, 0.3)' }}
                    />
                  </div>
                  <span className="text-[0.65rem] sm:text-xs font-semibold text-error uppercase tracking-[0.1em]">
                    {t('heroErrorDetected')}
                  </span>
                </div>

                {/* Error Details */}
                <p className="text-[0.7rem] sm:text-[0.75rem] md:text-[0.85rem] text-muted-foreground leading-snug">
                  {t('heroErrorExample')}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
