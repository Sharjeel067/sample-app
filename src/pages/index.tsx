import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <div className="min-h-screen">
      {/* Header with Language Switcher */}
      <header className="p-4 border-b">
        <div className="max-w-7xl mx-auto flex justify-end">
          <LanguageSwitcher />
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          {t('title')}
        </h1>
        <p className="text-lg mb-6">
          {t('description')}
        </p>
        <div className="flex items-center gap-2">
          <Link
            href="/get-started"
            className="text-blue-600 hover:underline"
          >
            {t('cta.getStarted')}
          </Link>
          <span>|</span>
          <Link
            href="/learn-more"
            className="text-blue-600 hover:underline"
          >
            {t('cta.learnMore')} →
          </Link>
        </div>
      </main>
    </div>
  );
}