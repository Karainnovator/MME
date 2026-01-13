'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Battery, Zap, Monitor, Radio, Code, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useConfigurator } from '@/hooks/use-configurator';
import { CONFIGURATOR_PARTS, BIKE_MODELS, CONTACT } from '@/lib/constants';
import { useTranslations } from 'next-intl';

// Icon mapping
const iconMap = {
  helpCircle: HelpCircle,
  battery: Battery,
  zap: Zap,
  monitor: Monitor,
  radio: Radio,
  code: Code,
} as const;

export default function RepairConfigurator() {
  const t = useTranslations();
  const { model, selectedPart, pricing, setModel, setPart } = useConfigurator();

  return (
    <section id="configurator" className="relative px-6 py-20 md:px-8 md:py-24 lg:px-12 lg:py-32 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-xs font-bold tracking-widest text-gold uppercase mb-4">
            {t('configuratorLabel')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('configuratorTitle')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('configuratorSubtitle')}
          </p>
        </motion.div>

        {/* Two Column Layout - Stack on mobile/tablet, side-by-side on desktop */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {/* Main Panel - Left (2/3) */}
          <div className="lg:col-span-2">
            <Card className="bg-surface-elevated border-border/50 p-4 sm:p-6 md:p-8 relative">
              {/* Progress Indicator */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex gap-2">
                <div className={`size-2 rounded-full ${model ? 'bg-green-500' : 'bg-muted'}`} />
                <div className={`size-2 rounded-full ${selectedPart ? 'bg-green-500' : 'bg-muted'}`} />
              </div>

              <div className="space-y-6 sm:space-y-8">
            {/* Step 1 - Model Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4 sm:space-y-6"
            >
              <h3 className="text-xl sm:text-2xl font-semibold">{t('configuratorModelQuestion')}</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {BIKE_MODELS.map((bike) => {
                  const isSelected = model === bike.id;
                  return (
                    <motion.button
                      key={bike.id}
                      onClick={() => setModel(bike.id as 's3' | 'x3')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`
                        relative p-4 sm:p-6 md:p-8 rounded-xl border-2 transition-all text-center
                        ${
                          isSelected
                            ? 'border-gold bg-gold/5 shadow-lg glow-gold-sm'
                            : 'border-border hover:border-gold/50 hover:bg-gold/5'
                        }
                      `}
                    >
                      {/* Bike Icon - Small white version */}
                      <div className="mb-3 sm:mb-4 flex justify-center">
                        <svg
                          viewBox="0 0 100 60"
                          className="w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* S3 - Simple Bike Outline */}
                          {bike.id === 's3' && (
                            <g stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                              <circle cx="20" cy="42" r="12" />
                              <circle cx="80" cy="42" r="12" />
                              <path d="M20 42 L40 22 L60 22 L80 42" />
                              <path d="M40 22 L50 42 L60 22" />
                              <path d="M20 42 L50 42 L80 42" />
                              <path d="M60 22 L65 15 L75 12" />
                              <path d="M40 22 L38 12" />
                              <ellipse cx="38" cy="10" rx="6" ry="2" />
                            </g>
                          )}

                          {/* X3 - Same but smaller wheels for compact look */}
                          {bike.id === 'x3' && (
                            <g stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                              <circle cx="22" cy="42" r="10" />
                              <circle cx="78" cy="42" r="10" />
                              <path d="M22 42 L42 24 L58 24 L78 42" />
                              <path d="M42 24 L50 42 L58 24" />
                              <path d="M22 42 L50 42 L78 42" />
                              <path d="M58 24 L63 17 L72 14" />
                              <path d="M42 24 L40 14" />
                              <ellipse cx="40" cy="12" rx="5" ry="2" />
                            </g>
                          )}
                        </svg>
                      </div>

                      <div>
                        <h4 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{bike.name}</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">{bike.description}</p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Step 2 - Problem Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4 sm:space-y-6"
            >
              <h3 className="text-xl sm:text-2xl font-semibold">{t('configuratorProblemQuestion')}</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {CONFIGURATOR_PARTS.map((part) => {
                  const isSelected = selectedPart === part.id;
                  const Icon = iconMap[part.icon as keyof typeof iconMap];

                  return (
                    <motion.button
                      key={part.id}
                      onClick={() => setPart(part.id as any)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`
                        relative p-4 sm:p-5 md:p-6 rounded-xl border-2 transition-all text-center
                        ${
                          isSelected
                            ? 'border-gold bg-gold/10 shadow-lg glow-gold-sm'
                            : 'border-border hover:border-gold/50 hover:bg-gold/5'
                        }
                      `}
                    >
                      {/* Icon */}
                      <div className="flex justify-center mb-3 sm:mb-4">
                        <div className={`
                          size-10 sm:size-12 rounded-lg flex items-center justify-center
                          ${isSelected ? 'bg-gold/20 text-gold' : 'bg-muted/50 text-muted-foreground'}
                        `}>
                          <Icon className="size-5 sm:size-6" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-0.5 sm:space-y-1">
                        <h4 className="font-semibold text-base sm:text-lg">{part.name}</h4>
                        <p className="text-xs sm:text-sm font-medium text-gold">{part.price}</p>
                        {part.code && <p className="text-xs text-muted-foreground">{part.code}</p>}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
              </div>
            </Card>
          </div>

          {/* Price Summary Sidebar - Right (1/3) - Stacks below on mobile/tablet */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:sticky lg:top-24"
            >
              <Card className="bg-surface-elevated border-gold/20">
                <div className="p-4 sm:p-5 md:p-6 space-y-4 sm:space-y-5 md:space-y-6">
                  {/* Header */}
                  <div>
                    <h3 className="text-xs font-bold tracking-widest text-gold uppercase mb-3 sm:mb-4">
                      {t('configuratorEstimatedCost')}
                    </h3>

                    {/* Animated Price */}
                    <AnimatePresence mode="wait">
                      {pricing ? (
                        <motion.div
                          key={pricing.total}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3 }}
                          className="text-4xl sm:text-5xl font-bold text-gold"
                        >
                          €{pricing.total}
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-2xl sm:text-3xl font-bold text-muted-foreground"
                        >
                          {t('configuratorSelectPart')}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Breakdown */}
                  <AnimatePresence>
                    {pricing && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3"
                      >
                        {/* Diagnose Line */}
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <div className="size-2 rounded-full bg-blue-500" />
                            <span className="text-foreground">{t('configuratorDiagnose')} €{pricing.diagnose}</span>
                          </div>
                        </div>

                        {/* Labor Line */}
                        {pricing.labor > 0 && (
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <div className="size-2 rounded-full bg-purple-500" />
                              <span className="text-foreground">{t('configuratorLabor')} €{pricing.labor}</span>
                            </div>
                          </div>
                        )}

                        {/* Part Line */}
                        {pricing.part > 0 && (
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <div className="size-2 rounded-full bg-gold" />
                              <span className="text-foreground">{t('configuratorPart')} €{pricing.part}</span>
                            </div>
                          </div>
                        )}

                        {/* Visual Price Bar */}
                        <div className="pt-4">
                          <div className="h-2 rounded-full overflow-hidden bg-muted flex">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${(pricing.diagnose / pricing.total) * 100}%` }}
                              transition={{ duration: 0.5, ease: 'easeOut' }}
                              className="bg-blue-500"
                            />
                            {pricing.labor > 0 && (
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${(pricing.labor / pricing.total) * 100}%` }}
                                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                                className="bg-purple-500"
                              />
                            )}
                            {pricing.part > 0 && (
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${(pricing.part / pricing.total) * 100}%` }}
                                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                                className="bg-gold"
                              />
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* CTA Button */}
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-gold hover:bg-gold-dark text-black font-semibold glow-gold-sm hover-lift text-sm sm:text-base"
                    disabled={!pricing}
                  >
                    <a href={`tel:${CONTACT.phoneClean}`} className="flex items-center justify-center gap-2">
                      <Phone className="size-4 sm:size-5" />
                      <span className="truncate">{t('configuratorCallForAppointment')}</span>
                    </a>
                  </Button>

                  {/* Note */}
                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    {t('configuratorExactPriceNote')}
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
