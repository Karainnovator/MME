'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '@/hooks/use-scroll-position';
import { CONTACT } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function MobileCTA() {
  const { scrollY } = useScrollPosition({ threshold: 500 });
  const isVisible = scrollY > 500;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          className={cn(
            'fixed bottom-6 left-6 right-6 z-50',
            'md:hidden' // Hidden on medium screens and up
          )}
        >
          <div className="bg-card border border-border rounded-2xl p-3 shadow-lg">
            <div className="flex gap-3">
              {/* Bel Button */}
              <a
                href={`tel:${CONTACT.phoneClean}`}
                className={cn(
                  'flex-1 flex items-center justify-center gap-2',
                  'bg-gold text-black rounded-xl py-3',
                  'font-semibold text-sm',
                  'hover:bg-gold/90 active:scale-95',
                  'transition-all duration-200'
                )}
                aria-label={`Call ${CONTACT.phone}`}
              >
                <Phone className="w-5 h-5" />
                <span>Bel</span>
              </a>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'flex-1 flex items-center justify-center gap-2',
                  'bg-secondary text-foreground border border-border rounded-xl py-3',
                  'font-semibold text-sm',
                  'hover:bg-secondary/80 active:scale-95',
                  'transition-all duration-200'
                )}
                aria-label="Contact via WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
