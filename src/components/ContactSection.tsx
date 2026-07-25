import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 relative" aria-labelledby="contact-title">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            id="contact-title"
            className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
          >
            {t.contact.title}
          </h2>
          <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto">
            {t.contact.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/serkan-akman-793a93128/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-medium text-sm hover:from-cyan-400 hover:to-indigo-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 shadow-lg shadow-cyan-500/20"
            >
              <span className="w-4 h-4 inline-flex items-center justify-center text-xs font-bold">in</span>
              {t.contact.linkedin}
            </a>
            <a
              href={`mailto:${t.contact.emailPlaceholder}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/15 text-white/80 font-medium text-sm hover:border-white/30 hover:text-white hover:bg-white/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            >
              <Mail className="w-4 h-4" />
              {t.contact.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}