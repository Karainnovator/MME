'use client';

import { Phone, Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { CONTACT } from '@/lib/constants';
import { useScrollPosition } from '@/hooks/use-scroll-position';
import { cn } from '@/lib/utils';
import { LanguageSwitcher } from '@/components/shared/language-switcher';
import { useState } from 'react';

export function Navigation() {
  const t = useTranslations();
  const { scrollY } = useScrollPosition();
  const isScrolled = scrollY > 10;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#diagnose', label: t('navDiagnose') },
    { href: '#configurator', label: t('navConfigurator') },
    { href: '#diensten', label: t('navDiensten') },
    { href: '#contact', label: t('navContact') },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full px-2 sm:px-4 py-2 sm:py-3">
      <header
        className={cn(
          'rounded-xl sm:rounded-2xl transition-all duration-300',
          isScrolled
            ? 'bg-background/80 backdrop-blur-xl border border-border shadow-lg'
            : 'bg-transparent border-none shadow-none'
        )}
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <a
              href="#"
              className="text-xl sm:text-2xl font-bold text-foreground hover:opacity-80 transition-opacity z-50"
              aria-label="MME Homepage"
            >
              MME<span className="text-gold">.</span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right side: Language Switcher + CTA + Mobile Menu */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* CTA Button - Hidden on very small screens, icon only on mobile */}
              <Button
                asChild
                size="sm"
                className="bg-gold hover:bg-gold/90 text-background rounded-full hover-lift h-9 sm:h-10 px-3 sm:px-4"
                aria-label={`Call ${CONTACT.phone}`}
              >
                <a href={`tel:${CONTACT.phoneClean}`}>
                  <Phone className="size-4" />
                  <span className="hidden sm:inline ml-2">{t('navCallDirect')}</span>
                </a>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden h-9 w-9 p-0"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="size-5" />
                ) : (
                  <Menu className="size-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <nav className="md:hidden border-t border-border mt-2 pt-4 pb-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2 px-2"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>
    </div>
  );
}
