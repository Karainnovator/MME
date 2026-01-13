'use client';

/**
 * Language Switcher Component Example
 *
 * This is an example component showing how to implement language switching.
 * You can use this in your Navigation component.
 *
 * Usage:
 * import { LanguageSwitcher } from '@/components/language-switcher-example';
 */

import { useParams } from 'next/navigation';
import { useRouter, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const t = useTranslations();
  const currentLocale = params.locale as string;

  const switchLocale = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => switchLocale('nl')}
        disabled={currentLocale === 'nl'}
        className={`px-3 py-1 rounded transition-colors ${
          currentLocale === 'nl'
            ? 'bg-gold text-black font-semibold'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        aria-label="Switch to Dutch"
      >
        {t('langNL')}
      </button>
      <button
        onClick={() => switchLocale('en')}
        disabled={currentLocale === 'en'}
        className={`px-3 py-1 rounded transition-colors ${
          currentLocale === 'en'
            ? 'bg-gold text-black font-semibold'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        aria-label="Switch to English"
      >
        {t('langEN')}
      </button>
    </div>
  );
}

/**
 * Simpler version with just flags or locale codes
 */
export function SimpleLanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => router.replace(pathname, { locale: 'nl' })}
        className={`px-2 py-1 text-sm font-medium ${
          currentLocale === 'nl' ? 'text-gold' : 'text-gray-500'
        }`}
      >
        NL
      </button>
      <span className="text-gray-400">|</span>
      <button
        onClick={() => router.replace(pathname, { locale: 'en' })}
        className={`px-2 py-1 text-sm font-medium ${
          currentLocale === 'en' ? 'text-gold' : 'text-gray-500'
        }`}
      >
        EN
      </button>
    </div>
  );
}
