'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin, CheckCircle2, Wrench, ArrowRight } from 'lucide-react';
import { LIVE_FEED_ITEMS } from '@/lib/constants';
import { useTranslations } from 'next-intl';

function StatusIcon({ status }: { status: string }) {
  if (status === 'completed') {
    return (
      <div className="relative">
        <div className="size-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
          <CheckCircle2 className="size-5 text-green-400" />
        </div>
      </div>
    );
  }
  return (
    <div className="relative">
      <div className="size-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
        <Wrench className="size-5 text-gold animate-pulse" />
      </div>
      <div className="absolute -top-0.5 -right-0.5 size-2.5 bg-gold rounded-full glow-gold-sm animate-pulse" />
    </div>
  );
}

export default function LiveFeed() {
  const t = useTranslations();

  return (
    <section className="relative px-6 py-20 md:px-8 md:py-24 lg:px-12 lg:py-32">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {t('liveFeedTitle')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('liveFeedSubtitle')}
            </p>
          </div>

          {/* Live Indicator */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-elevated border border-border/50">
            <div className="relative">
              <div className="size-2 bg-error rounded-full" />
              <div className="absolute inset-0 size-2 bg-error rounded-full animate-ping opacity-75" />
            </div>
            <span className="text-sm font-medium uppercase tracking-wider">{t('liveFeedLive')}</span>
          </div>
        </div>

        {/* Feed Cards */}
        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {LIVE_FEED_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="group relative"
            >
              <div className={`
                relative overflow-hidden rounded-2xl
                bg-surface-elevated/80 border transition-all duration-300
                ${item.status === 'in-progress'
                  ? 'border-gold/30 hover:border-gold/60'
                  : 'border-border/50 hover:border-green-500/30'}
                hover:shadow-xl hover:shadow-black/20
              `}>
                {/* Gold/green top accent line */}
                <div className={`h-px w-full ${
                  item.status === 'in-progress'
                    ? 'bg-gradient-to-r from-transparent via-gold/60 to-transparent'
                    : 'bg-gradient-to-r from-transparent via-green-500/40 to-transparent'
                }`} />

                <div className="p-5 sm:p-6">
                  {/* Top: Status icon + Model + Price */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <StatusIcon status={item.status} />
                      <div>
                        <p className="font-bold text-foreground">{item.model}</p>
                        <span className={`text-xs font-medium ${
                          item.status === 'completed' ? 'text-green-400' : 'text-gold'
                        }`}>
                          {item.status === 'completed' ? t('liveFeedCompleted') : t('liveFeedInProgress')}
                        </span>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-gold">{item.prijs}</span>
                  </div>

                  {/* Error → Solution flow */}
                  <div className="flex items-center gap-3 mb-4 p-3 rounded-xl bg-black/20 border border-border/30">
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">{t('liveFeedProblem')}</p>
                      <p className="font-mono text-sm font-semibold text-error truncate">{item.error}</p>
                    </div>
                    <ArrowRight className="size-4 text-muted-foreground shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">{t('liveFeedSolution')}</p>
                      <p className="text-sm font-medium text-foreground truncate">{item.solution}</p>
                    </div>
                  </div>

                  {/* Bottom: Time + Location */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Clock className="size-3" />
                      <span>{item.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="size-3" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
