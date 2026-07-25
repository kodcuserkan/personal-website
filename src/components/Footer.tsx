import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-white font-semibold mb-1">{t.footer.name}</div>
            <div className="text-sm text-white/30">{t.footer.tagline}</div>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href="https://www.linkedin.com/in/serkan-akman-793a93128/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/30 hover:text-white transition-colors rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-sm font-bold"
              aria-label={t.footer.linkedin}
            >
              in
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-white/20 font-mono space-y-1">
          <div>{t.footer.built}</div>
          <div>{t.footer.copyright.replace('{year}', String(year))}</div>
        </div>
      </div>
    </footer>
  );
}