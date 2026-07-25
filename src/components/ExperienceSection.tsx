import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 relative" aria-labelledby="experience-title">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          id="experience-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight"
        >
          {t.experience.title}
        </motion.h2>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 via-indigo-500/20 to-transparent"></div>
          <div className="space-y-8">
            {t.experience.roles.map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative pl-8"
              >
                <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-cyan-400/60 -translate-x-1/2"></div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-white">{role.company}</h3>
                  <span className="text-xs text-white/30 font-mono px-2 py-0.5 rounded border border-white/10">
                    {role.period}
                  </span>
                </div>
                <div className="text-sm text-cyan-400/70 mb-1">{role.role}</div>
                <p className="text-sm text-white/40 leading-relaxed">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}