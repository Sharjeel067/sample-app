import { NextIntlClientProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

// Import all translations
import enHome from '../../locales/en/home.json';
import enLearnMore from '../../locales/en/learnmore.json';
import enGetStarted from '../../locales/en/getstarted.json';
import esHome from '../../locales/es/home.json';
import esLearnMore from '../../locales/es/learnmore.json';
import esGetStarted from '../../locales/es/getstarted.json';

// Define types for the locales
type SupportedLocales = 'en' | 'es';

// Define the messages type
type Messages = {
  [K in SupportedLocales]: {
    home: typeof enHome;
    learnmore: typeof enLearnMore;
    getstarted: typeof enGetStarted;
  }
};

const messages: Messages = {
  en: {
    home: enHome,
    learnmore: enLearnMore,
    getstarted: enGetStarted
  },
  es: {
    home: esHome,
    learnmore: esLearnMore,
    getstarted: esGetStarted
  }
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const locale = (router.locale || 'en') as SupportedLocales;
  
  return (
    <NextIntlClientProvider messages={messages[locale]} locale={locale}>
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}