'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { LIVE_FEED_ITEMS } from '@/lib/constants';

export default function LiveFeed() {
  return (
    <section className="relative px-6 py-20 md:px-8 md:py-24 lg:px-12 lg:py-32">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Recente reparaties
            </h2>
            <p className="text-lg text-muted-foreground">
              Real-time updates van onze werkplaats
            </p>
          </div>

          {/* Live Indicator */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="size-2 bg-error rounded-full animate-pulse-dot" />
              <div className="absolute inset-0 size-2 bg-error rounded-full animate-pulse opacity-75" />
            </div>
            <span className="text-sm font-medium uppercase tracking-wider">LIVE</span>
          </div>
        </div>

        {/* Feed Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {LIVE_FEED_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-card border rounded-xl p-6 space-y-4 transition-shadow hover:shadow-lg"
            >
              {/* Top Row - Model + Status */}
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-lg">{item.model}</h3>
                <Badge
                  variant={item.status === 'completed' ? 'default' : 'secondary'}
                  className={
                    item.status === 'completed'
                      ? 'bg-green-500/10 text-green-600 border-green-500/20 dark:bg-green-500/20 dark:text-green-400'
                      : 'bg-orange-500/10 text-orange-500 border-orange-500/20 dark:bg-orange-500/20 dark:text-orange-400'
                  }
                >
                  {item.status === 'completed' ? 'Voltooid' : 'In behandeling'}
                </Badge>
              </div>

              {/* Problem - Error Code */}
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground font-medium">Probleem:</p>
                <div className="font-mono text-error text-sm font-medium">
                  {item.error}
                </div>
              </div>

              {/* Solution/Status Description */}
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground font-medium">
                  {item.status === 'completed' ? 'Oplossing:' : 'Status:'}
                </p>
                <p className="text-sm text-foreground">{item.solution}</p>
              </div>

              {/* Bottom Row - Time + Location */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t border-border/50">
                <div className="flex items-center gap-1.5">
                  <Clock className="size-3.5" />
                  <span>{item.time}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="size-3.5" />
                  <span>{item.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
