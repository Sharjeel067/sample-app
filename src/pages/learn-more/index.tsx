import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowLeft, Zap, Shield, Puzzle, Globe, Clock, Users } from 'lucide-react';

export default function LearnMore() {
  const t = useTranslations('learnmore');

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: t('features.performanceTitle'),
      description: t('features.performanceDescription')
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t('features.securityTitle'),
      description: t('features.securityDescription')
    },
    {
      icon: <Puzzle className="w-6 h-6" />,
      title: t('features.architectureTitle'),
      description: t('features.architectureDescription')
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t('features.distributionTitle'),
      description: t('features.distributionDescription')
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t('features.updatesTitle'),
      description: t('features.updatesDescription')
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t('features.collaborationTitle'),
      description: t('features.collaborationDescription')
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
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-6">{t('hero.title')}</h1>
          <p className="text-lg text-gray-600 mb-12">
            {t('hero.description')}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="border rounded-lg p-6 bg-white">
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-blue-600">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Case Studies */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{t('caseStudies.title')}</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-4">
                  {t('caseStudies.subtitle')}
                </p>
                <ul className="space-y-4">
                  <li>{t('caseStudies.cases.techCorp')}</li>
                  <li>{t('caseStudies.cases.startupX')}</li>
                  <li>{t('caseStudies.cases.enterpriseCo')}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">{t('cta.title')}</h2>
            <p className="text-gray-600 mb-6">
              {t('cta.description')}
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                href="/get-started" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                {t('cta.startBuilding')}
              </Link>
              <Link 
                href="/contact" 
                className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50"
              >
                {t('cta.contactSales')}
              </Link>
            </div>
          </section>

          {/* Documentation Link */}
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              {t('documentation.prompt')}
            </p>
            <Link 
              href="/docs" 
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              {t('documentation.link')} →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}