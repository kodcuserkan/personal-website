import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { translations } from '../content/translations';
import type { Language, TranslationContent } from '../content/translations';

const LANGUAGES: { code: Language; short: string }[] = [
  { code: 'en', short: 'EN' },
  { code: 'tr', short: 'TR' },
  { code: 'de', short: 'DE' },
  { code: 'sr', short: 'SR' },
  { code: 'fr', short: 'FR' },
  { code: 'it', short: 'IT' },
  { code: 'ar', short: 'AR' },
  { code: 'he', short: 'HE' },
];

const RTL_LANGUAGES = new Set<Language>(['ar', 'he']);

function isRtl(lang: Language): boolean {
  return RTL_LANGUAGES.has(lang);
}

function detectBrowserLanguage(): Language {
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('tr')) return 'tr';
  if (browserLang.startsWith('de')) return 'de';
  if (browserLang.startsWith('sr')) return 'sr';
  if (browserLang.startsWith('fr')) return 'fr';
  if (browserLang.startsWith('it')) return 'it';
  if (browserLang.startsWith('ar')) return 'ar';
  if (browserLang.startsWith('he')) return 'he';
  return 'en';
}

const LANG_PATTERN = '(en|tr|de|sr|fr|it|ar|he)';

function readLangFromUrl(): Language | null {
  const path = window.location.pathname;
  const match = path.match(new RegExp('^\\/' + LANG_PATTERN + '(\\/.*)?$'));
  if (match) return match[1] as Language;
  // Also handle stacked codes
  const stacked = path.match(new RegExp('^\\/' + LANG_PATTERN + '(?:\\/' + LANG_PATTERN + ')+'));
  if (stacked) return stacked[1] as Language;
  return null;
}

function writeLangToUrl(lang: Language) {
  const url = new URL(window.location.href);
  const langPattern = new RegExp('/(' + LANG_PATTERN + ')+', 'g');
  let rest = url.pathname.replace(langPattern, '').replace(/^\/+/, '').replace(/\/+$/, '');
  if (!rest) rest = '';
  if (lang === 'en') {
    url.pathname = '/' + rest;
  } else {
    url.pathname = '/' + lang + (rest ? '/' + rest : '');
  }
  history.pushState({ lang }, '', url.toString());
}

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationContent;
  languages: typeof LANGUAGES;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    const urlLang = readLangFromUrl();
    if (urlLang) return urlLang;
    const stored = localStorage.getItem('portfolio-lang');
    if (stored && LANGUAGES.some((l) => l.code === stored)) return stored as Language;
    return detectBrowserLanguage();
  });

  const setLang = useCallback((next: Language) => {
    setLangState(next);
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl(lang) ? 'rtl' : 'ltr';
    writeLangToUrl(lang);
  }, [lang]);

  useEffect(() => {
    const handler = () => {
      const urlLang = readLangFromUrl();
      if (urlLang) setLangState(urlLang);
    };
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);

  const t = translations[lang] as TranslationContent;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}