import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlus, FaMinus } from 'react-icons/fa'

export default function FAQ() {
  const { t } = useTranslation()
  const items = t('faq.items', { returnObjects: true })
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-12">
          <span className="eyebrow">{t('faq.eyebrow')}</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy">{t('faq.title')}</h2>
        </div>

        <div className="space-y-4">
          {items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="border border-navy/10 rounded-xl2 overflow-hidden bg-surface"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-medium text-navy">{item.q}</span>
                  <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-gold text-navy' : 'bg-navy/5 text-navy'}`}>
                    {isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-navy/65 leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
