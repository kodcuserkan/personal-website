import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function LanguageSwitcher() {
  const { lang, setLang, languages } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const currentShort = languages.find((l) => l.code === lang)?.short ?? 'EN';

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1 px-2 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-white/60 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 font-mono tracking-wider"
        aria-label="Select language"
        aria-expanded={open}
      >
        <Globe className="w-3.5 h-3.5" />
        <span>{currentShort}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div
          className="absolute right-0 top-full mt-1 min-w-[120px] rounded-lg border border-white/10 bg-slate-900/95 backdrop-blur-xl py-1 shadow-xl z-50"
          role="listbox"
          aria-label="Languages"
        >
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-3 py-1.5 text-xs font-mono tracking-wider transition-colors focus:outline-none ${
                l.code === lang
                  ? 'text-cyan-400 bg-white/5'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
              role="option"
              aria-selected={l.code === lang}
            >
              <span className="w-4">{l.code === lang ? '●' : '○'}</span>
              {l.short}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}