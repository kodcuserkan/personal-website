import { motion } from 'framer-motion';
import { Database, Brain, Wrench, ShieldCheck, Eye, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const pipelineIcons = [Database, Brain, Wrench, ShieldCheck, Eye, Layers];

export function AILabSection() {
  const { t } = useLanguage();

  return (
    <section id="ai-systems" className="py-24 relative" aria-labelledby="aisystems-title">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          id="aisystems-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
        >
          {t.aiSystems.title}
        </motion.h2>
        <p className="text-white/50 text-lg mb-16 max-w-2xl">{t.aiSystems.subtitle}</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-sm font-mono text-white/30 uppercase tracking-wider mb-8">Pipeline</h3>
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            {Object.entries(t.aiSystems.pipeline).map(([key, label], i) => {
              const Icon = pipelineIcons[i] || Layers;
              return (
                <div key={key} className="flex items-center gap-2">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <Icon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-sm text-white/70 font-medium whitespace-nowrap">{label}</span>
                  </div>
                  {i < Object.keys(t.aiSystems.pipeline).length - 1 && (
                    <span className="text-white/20 text-lg">→</span>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.aiSystems.sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{section.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{section.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}