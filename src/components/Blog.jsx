import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaTag, FaArrowRight } from 'react-icons/fa'

const IMAGES = [
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?q=80&w=800&auto=format&fit=crop'
]

export default function Blog() {
  const { t } = useTranslation()
  const items = t('blog.items', { returnObjects: true })

  return (
    <section id="blog" className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">{t('blog.eyebrow')}</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy">{t('blog.title')}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="card overflow-hidden flex flex-col"
            >
              <img src={IMAGES[i % IMAGES.length]} alt={item.title} className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-navy/50 mb-3">
                  <span className="flex items-center gap-1"><FaCalendarAlt /> {item.date}</span>
                  <span className="flex items-center gap-1"><FaTag /> {item.category}</span>
                </div>
                <h3 className="font-heading font-semibold text-navy mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-navy/65 leading-relaxed flex-1">{item.excerpt}</p>
                <a href="#contact" className="mt-4 text-sm font-semibold text-royal hover:text-gold-dark inline-flex items-center gap-1.5 w-fit">
                  {t('blog.readMore')} <FaArrowRight size={12} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
