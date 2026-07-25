import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs text-emerald-400/80 font-mono uppercase tracking-wider">
                {t.hero.statusLabel}
              </span>
            </div>
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
            >
              {t.hero.headline}
            </h1>
            <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-xl">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleScrollTo('work')}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-medium text-sm hover:from-cyan-400 hover:to-indigo-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 shadow-lg shadow-cyan-500/20"
              >
                {t.hero.ctaPrimary}
              </button>
              <button
                onClick={() => handleScrollTo('contact')}
                className="px-6 py-3 rounded-lg border border-white/15 text-white/80 font-medium text-sm hover:border-white/30 hover:text-white hover:bg-white/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              >
                {t.hero.ctaSecondary}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8">
              <div className="flex items-center gap-2 mb-6">
                <Activity className="w-4 h-4 text-cyan-400" />
                <span className="text-xs text-white/40 font-mono uppercase tracking-wider">
                  {t.hero.infraCard.client}
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <InfraNode label={t.hero.infraCard.client} accent="from-violet-500/30 to-purple-500/30" />
                <div className="flex justify-center">
                  <div className="w-px h-4 bg-gradient-to-b from-white/20 to-transparent"></div>
                </div>
                <InfraNode label={t.hero.infraCard.middleware} accent="from-blue-500/30 to-cyan-500/30" />
                <div className="flex justify-center">
                  <div className="w-px h-4 bg-gradient-to-b from-white/20 to-transparent"></div>
                </div>
                <InfraNode label={t.hero.infraCard.inference} accent="from-cyan-500/30 to-emerald-500/30" />
                <div className="flex justify-center">
                  <div className="w-px h-4 bg-gradient-to-b from-white/20 to-transparent"></div>
                </div>
                <InfraNode label={t.hero.infraCard.systems} accent="from-indigo-500/30 to-violet-500/30" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfraNode({ label, accent }: { label: string; accent: string }) {
  return (
    <div className={`rounded-xl bg-gradient-to-r ${accent} border border-white/10 px-4 py-3 text-center`}>
      <span className="text-sm font-medium text-white/80 font-mono">{label}</span>
    </div>
  );
}