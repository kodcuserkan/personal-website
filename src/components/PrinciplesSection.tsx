import { motion } from 'framer-motion';
import { Rocket, Eye, RefreshCw, Minimize2, Brain, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const iconMap: Record<string, React.ElementType> = {
  rocket: Rocket,
  eye: Eye,
  'refresh-cw': RefreshCw,
  'minimize-2': Minimize2,
  brain: Brain,
  'check-circle': CheckCircle,
};

export function PrinciplesSection() {
  const { t } = useLanguage();

  return (
    <section id="principles" className="py-24 relative" aria-labelledby="principles-title">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          id="principles-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight"
        >
          {t.principles.title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t.principles.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Rocket;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200"
              >
                <Icon className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-sm text-white/70">{item.text}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}