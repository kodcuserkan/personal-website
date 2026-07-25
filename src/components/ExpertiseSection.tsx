import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Terminal, Smartphone, Server, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const iconMap: Record<string, React.ElementType> = {
  code: Code2,
  cpu: Cpu,
  database: Database,
  terminal: Terminal,
  smartphone: Smartphone,
  server: Server,
};

export function ExpertiseSection() {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="expertise" className="py-24 relative" aria-labelledby="expertise-title">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          id="expertise-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight"
        >
          {t.expertise.title}
        </motion.h2>
        <p className="text-white/40 text-lg mb-12 max-w-2xl">{t.expertise.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.expertise.cards.map((card, i) => {
            const Icon = iconMap[card.icon] || Code2;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 cursor-default"
              >
                <motion.div
                  animate={hoveredIndex === i ? { scale: 1.1 } : { scale: 1 }}
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-white/10 flex items-center justify-center mb-4"
                >
                  <Icon className="w-5 h-5 text-cyan-400" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-white/50 mb-4 leading-relaxed">{card.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {card.tags.map((tag, j) => (
                    <span key={j} className="text-xs text-white/30 font-mono px-2 py-0.5 rounded border border-white/5 bg-white/[0.02]">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs text-cyan-400/70 font-mono">
                  <motion.span
                    animate={hoveredIndex === i ? { x: 4 } : { x: 0 }}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}