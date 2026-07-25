import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { TranslationContent } from '../content/translations';

export function WorkSection() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="work" className="py-24 relative" aria-labelledby="work-title">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          id="work-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight"
        >
          {t.work.title}
        </motion.h2>
        <p className="text-white/40 text-lg mb-12 max-w-2xl">{t.work.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {t.work.projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <span className="text-xs text-white/30 font-mono px-2 py-1 rounded-md border border-white/10">
                  {project.type}
                </span>
              </div>
              <p className="text-sm text-white/40 mb-4 leading-relaxed">{project.problem}</p>
              <button
                onClick={() => setSelectedProject(i)}
                className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded px-1"
              >
                {t.work.viewDetails}
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject !== null && (
          <ProjectModal
            project={t.work.projects[selectedProject]}
            onClose={() => setSelectedProject(null)}
            t={t}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectModal({
  project,
  onClose,
  t,
}: {
  project: TranslationContent['work']['projects'][number];
  onClose: () => void;
  t: TranslationContent;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/15 bg-slate-900/95 backdrop-blur-xl p-8"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <span className="text-xs text-white/30 font-mono">{project.type}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            aria-label={t.work.closeDetails}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-5">
          <div>
            <h4 className="text-sm font-semibold text-white/70 mb-2">Problem</h4>
            <p className="text-sm text-white/50 leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white/70 mb-2">Solution</h4>
            <p className="text-sm text-white/50 leading-relaxed">{project.solution}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white/70 mb-2">Technologies</h4>
            <p className="text-sm text-cyan-400/70 font-mono">{project.technologies}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white/70 mb-2">Result</h4>
            <p className="text-sm text-white/50 leading-relaxed">{project.result}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}