import createMiddleware from 'next-intl/middleware';
import { defineRouting } from 'next-intl/routing';

const routing = defineRouting({
  locales: ['nl', 'en'],
  defaultLocale: 'nl',
  localePrefix: 'always'
});

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(nl|en)/:path*']
};
