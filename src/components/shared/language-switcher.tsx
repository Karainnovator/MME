'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';

const LANGUAGES = [
  { code: 'nl', label: 'NL', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'en', label: 'EN', name: 'English', flag: '🇬🇧' },
] as const;

type LanguageCode = typeof LANGUAGES[number]['code'];

export function LanguageSwitcher() {
  const locale = useLocale() as LanguageCode;
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLanguage = LANGUAGES.find(l => l.code === locale)!;

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (code: LanguageCode) => {
    setRotation(prev => prev + 360);
    setIsOpen(false);
    // Navigate to the same page in the new locale
    router.replace(pathname, { locale: code });
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Main Button - Innovative Rotating Globe */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'relative flex items-center gap-2 px-3 py-2 rounded-full',
          'bg-surface-elevated/50 border border-border/50',
          'hover:border-gold/50 hover:bg-gold/5 transition-all duration-300',
          isOpen && 'border-gold/50 bg-gold/5'
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Animated Globe Icon */}
        <motion.div
          animate={{ rotate: rotation }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative"
        >
          <Globe className="size-4 text-gold" />
          {/* Orbiting dot */}
          <motion.div
            className="absolute -top-0.5 -right-0.5 size-1.5 bg-gold rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.8, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Current Language */}
        <span className="text-xs font-bold tracking-wider text-foreground">
          {currentLanguage.label}
        </span>

        {/* Expand indicator */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-muted-foreground"
        >
          <svg className="size-3" viewBox="0 0 12 12" fill="none">
            <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.button>

      {/* Dropdown - Innovative Arc Design */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 p-1 rounded-xl bg-surface-elevated border border-border/50 shadow-xl shadow-black/20 overflow-hidden min-w-[140px]"
          >
            {/* Gold accent line at top */}
            <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

            {LANGUAGES.map((lang, index) => {
              const isActive = locale === lang.code;
              return (
                <motion.button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={cn(
                    'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left',
                    'transition-all duration-200',
                    isActive
                      ? 'bg-gold/10 text-gold'
                      : 'hover:bg-white/5 text-muted-foreground hover:text-foreground'
                  )}
                >
                  {/* Flag with glow effect */}
                  <span className={cn(
                    'text-base transition-transform duration-200',
                    isActive && 'scale-110'
                  )}>
                    {lang.flag}
                  </span>

                  {/* Language info */}
                  <div className="flex-1 min-w-0">
                    <div className={cn(
                      'text-xs font-bold tracking-wide',
                      isActive ? 'text-gold' : 'text-foreground'
                    )}>
                      {lang.label}
                    </div>
                    <div className="text-[10px] text-muted-foreground truncate">
                      {lang.name}
                    </div>
                  </div>

                  {/* Active indicator - animated dot */}
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="size-2 bg-gold rounded-full glow-gold-sm"
                    />
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
