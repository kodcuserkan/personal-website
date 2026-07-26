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

const HASH_LANG_RE = /^#\/(en|tr|de|sr|fr|it|ar|he)$/;

function readLangFromHash(): Language | null {
  const hash = window.location.hash;
  const match = hash.match(HASH_LANG_RE);
  if (match) return match[1] as Language;
  return null;
}

function writeLangToHash(lang: Language) {
  if (lang === 'en') {
    if (window.location.hash) {
      history.pushState(null, '', window.location.pathname + window.location.search);
    }
  } else {
    const newHash = '#' + lang;
    if (window.location.hash !== newHash) {
      history.pushState(null, '', window.location.pathname + window.location.search + newHash);
    }
  }
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
    const hashLang = readLangFromHash();
    if (hashLang) return hashLang;
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
    writeLangToHash(lang);
  }, [lang]);

  useEffect(() => {
    const handler = () => {
      const hashLang = readLangFromHash();
      if (hashLang) setLangState(hashLang);
    };
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
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