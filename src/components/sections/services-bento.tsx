'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Wrench, Repeat2, FlaskConical, CircleCheck, Code, LucideIcon } from 'lucide-react';
import { SERVICES } from '@/lib/constants';

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  wrench: Wrench,
  repeat: Repeat2,
  flask: FlaskConical,
  check: CircleCheck,
  code: Code,
};

// Grid span classes based on size
const sizeClasses = {
  large: 'col-span-12 md:col-span-8',
  medium: 'col-span-12 md:col-span-4',
  small: 'col-span-12 md:col-span-4',
};

export default function ServicesBento() {
  const t = useTranslations();

  return (
    <section id="diensten" className="section-padding">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16 px-4"
        >
          <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20">
            <span className="text-xs font-semibold tracking-wider text-gold uppercase">
              {t('servicesLabel')}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-4">
            {t('servicesTitle')}
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-3 sm:gap-4 md:gap-6 px-4">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            const isLarge = service.size === 'large';
            const gridClass = sizeClasses[service.size];

            // Map service ID to translation key prefix
            const translationKeyMap: Record<string, string> = {
              reparatie: 'servicesRepair',
              overdracht: 'servicesTransfer',
              diagnose: 'servicesDiagnose',
              rijklaar: 'servicesReady',
              software: 'servicesSoftware',
            };

            const keyPrefix = translationKeyMap[service.id];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`${gridClass} group relative`}
              >
                <div className="relative h-full bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 overflow-hidden transition-all duration-300 hover:border-gold hover:shadow-xl hover:shadow-gold/10">
                  {/* Gold accent line - appears on hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-3 sm:mb-4">
                      <div className="size-12 sm:size-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-lg">
                        <Icon className="size-6 sm:size-7 text-black" />
                      </div>
                    </div>

                    {/* Title */}
                    <p className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                      {t(`${keyPrefix}Title`)}
                    </p>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 flex-grow">
                      {t(`${keyPrefix}Description`)}
                    </p>

                    {/* Stats for large card */}
                    {isLarge && (
                      <div className="mt-auto pt-3 sm:pt-4 border-t border-border/50">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl sm:text-3xl font-bold text-gradient-gold">
                            500+
                          </span>
                          <span className="text-xs sm:text-sm text-muted-foreground">
                            {t(`${keyPrefix}Stat`)}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Background glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8 sm:mt-10 md:mt-12 px-4"
        >
          <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
            {t('servicesNotSure')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium text-sm sm:text-base"
          >
            {t('servicesContactUs')}
            <svg
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
