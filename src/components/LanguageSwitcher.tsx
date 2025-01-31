import React from 'react';
import { useRouter } from 'next/router';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { pathname, query } = router;

  const switchLanguage = (locale: string) => {
    // Use router.push with locale option
    router.push(
      { pathname, query },
      router.asPath,
      { locale, scroll: false }
    );
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-gray-600" />
      <select
        onChange={(e) => switchLanguage(e.target.value)}
        value={router.locale}
        className="bg-transparent text-sm text-gray-600 hover:text-gray-900 cursor-pointer"
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;