import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowLeft, CheckCircle } from 'lucide-react';

interface Step {
  titleKey: string;
  descriptionKey: string;
  commandKey: string;
}

export default function GetStarted() {
  const t = useTranslations('getstarted');

  const steps: Step[] = [
    {
      titleKey: 'steps.install.title',
      descriptionKey: 'steps.install.description',
      commandKey: 'steps.install.command'
    },
    {
      titleKey: 'steps.configure.title',
      descriptionKey: 'steps.configure.description',
      commandKey: 'steps.configure.command'
    },
    {
      titleKey: 'steps.create.title',
      descriptionKey: 'steps.create.description',
      commandKey: 'steps.create.command'
    }
  ];

  return (
    <div className="min-h-screen p-8">
      {/* Navigation */}
      <nav className="mb-8">
        <Link 
          href="/" 
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('navigation.backToHome')}
        </Link>
      </nav>

      {/* Main Content */}
      <main>
        <h1 className="text-4xl font-bold mb-6">{t('hero.title')}</h1>
        <p className="text-lg text-gray-600 mb-12">
          {t('hero.description')}
        </p>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="border rounded-lg p-6 bg-white">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-semibold mb-2">
                    {index + 1}. {t(step.titleKey)}
                  </h2>
                  <p className="text-gray-600 mb-4">{t(step.descriptionKey)}</p>
                  <div className="bg-gray-50 rounded p-3 font-mono text-sm">
                    {t(step.commandKey)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Steps */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">{t('nextSteps.title')}</h2>
          <p className="text-gray-600 mb-6">{t('nextSteps.description')}</p>
          <div className="space-y-2">
            <Link
              href="/docs"
              className="block text-blue-600 hover:underline"
            >
              {t('nextSteps.links.documentation')}
            </Link>
            <Link
              href="/examples"
              className="block text-blue-600 hover:underline"
            >
              {t('nextSteps.links.examples')}
            </Link>
            <Link
              href="/tutorials"
              className="block text-blue-600 hover:underline"
            >
              {t('nextSteps.links.tutorials')}
            </Link>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">{t('help.title')}</h2>
          <p className="text-gray-600 mb-4">{t('help.description')}</p>
          <div className="space-y-2">
            <Link
              href="/discord"
              className="block text-blue-600 hover:underline"
            >
              {t('help.links.discord')}
            </Link>
            <Link
              href="/github"
              className="block text-blue-600 hover:underline"
            >
              {t('help.links.github')}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}