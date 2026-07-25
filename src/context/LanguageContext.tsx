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
];

function detectBrowserLanguage(): Language {
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('tr')) return 'tr';
  if (browserLang.startsWith('de')) return 'de';
  if (browserLang.startsWith('sr')) return 'sr';
  if (browserLang.startsWith('fr')) return 'fr';
  if (browserLang.startsWith('it')) return 'it';
  return 'en';
}

function readLangFromUrl(): Language | null {
  const path = window.location.pathname;
  const match = path.match(/^\/(en|tr|de|sr|fr|it)(\/.*)?$/);
  if (match) return match[1] as Language;
  // Also handle stacked codes like /fr/sr/de
  const stacked = path.match(/^\/(en|tr|de|sr|fr|it)(?:\/(en|tr|de|sr|fr|it))+/);
  if (stacked) return stacked[1] as Language;
  return null;
}

function writeLangToUrl(lang: Language) {
  const url = new URL(window.location.href);
  // Strip ALL language code segments (with or without trailing slash)
  const langPattern = /(\/(en|tr|de|sr|fr|it))+/g;
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