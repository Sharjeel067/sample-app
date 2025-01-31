// i18n-config.ts
export const i18n = {
    locales: ['en','es'], // List all supported locales
    defaultLocale: 'en', // Default locale
  };
  
  export type Locale = (typeof i18n)['locales'][number];
  