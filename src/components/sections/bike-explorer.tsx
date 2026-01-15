'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Battery, Zap, Monitor, Radio, Cpu, CircleDot } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { BikeSvg, BikeComponent } from '@/components/shared/bike-svg';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const COMPONENT_ICONS = {
  battery: Battery,
  frontWheel: Zap,
  display: Monitor,
  button: CircleDot,
  eshifter: Radio,
  backWheel: Cpu,
} as const;

// Map component ID to translation key prefix
const COMPONENT_TRANSLATION_MAP: Record<BikeComponent, string> = {
  battery: 'componentBattery',
  frontWheel: 'componentFrontWheel',
  display: 'componentDisplay',
  button: 'componentButton',
  eshifter: 'componentEshifter',
  backWheel: 'componentBackWheel',
};

export function BikeExplorer() {
  const t = useTranslations();
  const [selectedComponent, setSelectedComponent] = useState<BikeComponent | null>(null);

  const Icon = selectedComponent ? COMPONENT_ICONS[selectedComponent] : null;
  const translationPrefix = selectedComponent ? COMPONENT_TRANSLATION_MAP[selectedComponent] : null;

  return (
    <section
      id="diagnose"
      className="relative px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-12 lg:py-32 bg-gradient-to-b from-zinc-950 to-zinc-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-2 sm:mb-3"
          >
            <span className="text-gold text-xs sm:text-sm font-semibold uppercase tracking-widest">
              {t('explorerLabel')}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4"
          >
            {t('explorerTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto px-4"
          >
            {t('explorerSubtitle')}
          </motion.p>
        </div>

        {/* Two Column Layout - Stack on mobile, side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left Column - Info Panel (appears second on mobile, first on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedComponent || 'none'}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {!selectedComponent || !translationPrefix ? (
                      /* Default State - No Component Selected */
                      <div className="flex flex-col items-center justify-center py-8 sm:py-12 text-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 sm:mb-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-gold sm:w-8 sm:h-8"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                            <path d="M12 17h.01" />
                          </svg>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                          {t('explorerSelectComponent')}
                        </h3>
                        <p className="text-sm sm:text-base text-zinc-400 max-w-sm px-4">
                          {t('explorerSelectHint')}
                        </p>
                      </div>
                    ) : (
                      <>
                        {/* Icon + Title + Subtitle */}
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="p-2 sm:p-3 rounded-xl bg-gold/10 border border-gold/20 flex-shrink-0">
                            {Icon && <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                              {t(`${translationPrefix}`)}
                            </h3>
                            <p className="text-xs sm:text-sm text-zinc-400">
                              {t(`${translationPrefix}Subtitle`)}
                            </p>
                          </div>
                        </div>

                        {/* Error Badge */}
                        <div>
                          <Badge
                            variant="destructive"
                            className="text-sm font-mono px-3 py-1"
                          >
                            {t(`${translationPrefix}Error`)}
                          </Badge>
                        </div>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                          {t(`${translationPrefix}Description`)}
                        </p>

                        {/* Price Display */}
                        <div className="pt-4 border-t border-zinc-800">
                          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 mb-4">
                            <span className="text-xs sm:text-sm text-zinc-400">
                              {t('explorerRepairFrom')}
                            </span>
                            <span className="text-2xl sm:text-3xl font-bold text-gold">
                              {t(`${translationPrefix}Price`)}
                            </span>
                          </div>

                          {/* CTA Button */}
                          <Button
                            size="lg"
                            className="w-full bg-gold hover:bg-gold/90 text-zinc-950 font-semibold"
                          >
                            {t('explorerPlanRepair')}
                          </Button>
                        </div>

                        {/* Additional Info */}
                        <div className="pt-4 space-y-2">
                          <div className="flex items-center gap-2 text-sm text-zinc-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                            <span>{t('explorerFreeDiagnose')}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-zinc-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                            <span>{t('explorerWarranty')}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-zinc-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                            <span>{t('explorerFastService')}</span>
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Bike SVG (appears first on mobile, second on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative bg-zinc-900/30 rounded-xl sm:rounded-2xl border border-zinc-800 p-4 sm:p-6 md:p-8 backdrop-blur-sm">
              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent rounded-xl sm:rounded-2xl" />

              <BikeSvg
                selectedComponent={selectedComponent}
                onSelectComponent={setSelectedComponent}
                className="relative z-10 w-full h-auto"
              />
            </div>

            {/* Floating Instruction - Hidden on mobile for better UX */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="hidden sm:block absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              <div className="bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 text-sm text-zinc-400 shadow-lg">
                {t('explorerClickForDetails')}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
