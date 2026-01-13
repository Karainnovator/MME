'use client';

import { CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

function Separator() {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gold glow-gold-sm" />
      <span className="text-xs sm:text-sm text-gold font-semibold tracking-wide">MME.</span>
      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gold glow-gold-sm" />
    </div>
  );
}

function TickerContent() {
  const t = useTranslations();

  const trustItems = [
    { text: t('trustGuarantee'), highlight: t('trustGuaranteeHighlight') },
    { text: t('trustService'), highlight: t('trustServiceHighlight') },
    { text: t('trustCount'), highlight: t('trustCountHighlight') },
    { text: t('trustTime'), highlight: t('trustTimeHighlight') },
    { text: t('trustSuccess'), highlight: t('trustSuccessHighlight') },
  ];

  return (
    <div className="flex items-center gap-6 sm:gap-8 md:gap-12 shrink-0 pr-6 sm:pr-8 md:pr-12">
      {trustItems.map((item, index) => {
        return (
          <div key={index} className="flex items-center gap-2 sm:gap-3">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gold shrink-0" />
            <span className="text-xs sm:text-sm md:text-base text-muted-foreground whitespace-nowrap">
              <span className="text-foreground font-semibold">{item.text}</span>
              {' '}
              {item.highlight}
            </span>
          </div>
        );
      })}
      <Separator />
    </div>
  );
}

export function TrustTicker() {
  return (
    <section className="bg-surface border-y border-border overflow-hidden py-3 sm:py-4">
      <div className="flex animate-ticker hover:pause">
        <TickerContent />
        <TickerContent />
      </div>
    </section>
  );
}
