import { motion } from 'framer-motion';
import { Code2, Cpu, Globe, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const statIcons = [Code2, Cpu, Globe, Users];

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 relative" aria-labelledby="about-title">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          id="about-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight"
        >
          {t.about.title}
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-white/60 leading-relaxed">{t.about.paragraph1}</p>
            <p className="text-white/60 leading-relaxed">{t.about.paragraph2}</p>
            <p className="text-white/60 leading-relaxed">{t.about.paragraph3}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            <StatCard
              icon={statIcons[0]}
              value={t.about.stats.years}
              label={t.about.stats.yearsDesc}
            />
            <StatCard
              icon={statIcons[1]}
              value={t.about.stats.fullstack}
              label={t.about.stats.fullstackDesc}
            />
            <StatCard
              icon={statIcons[2]}
              value={t.about.stats.aiLab}
              label={t.about.stats.aiLabDesc}
            />
            <StatCard
              icon={statIcons[3]}
              value={t.about.stats.remote}
              label={t.about.stats.remoteDesc}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5">
      <Icon className="w-5 h-5 text-cyan-400 mb-3" />
      <div className="text-xl font-bold text-white mb-1">{value}</div>
      <div className="text-xs text-white/40">{label}</div>
    </div>
  );
}