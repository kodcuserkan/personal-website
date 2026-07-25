import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'expertise', label: t.nav.expertise },
    { id: 'ai-systems', label: t.nav.aiSystems },
    { id: 'work', label: t.nav.work },
    { id: 'experience', label: t.nav.experience },
    { id: 'principles', label: t.nav.principles },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-white font-bold text-sm tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded px-1"
        >
          Serkan Akman
        </button>

        <nav className="hidden md:flex items-center gap-1" role="navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="px-3 py-1.5 text-sm text-white/50 hover:text-white transition-colors rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            >
              {item.label}
            </button>
          ))}
          <div className="w-px h-5 bg-white/10 mx-2"></div>
          <LanguageSwitcher />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/5 px-6 py-4">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="px-3 py-2 text-sm text-white/50 hover:text-white transition-colors text-left rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}