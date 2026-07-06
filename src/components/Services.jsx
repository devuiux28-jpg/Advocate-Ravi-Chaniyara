import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  FaLandmark, FaMapMarkedAlt, FaExchangeAlt, FaSearchLocation, FaFileContract,
  FaTractor, FaGavel, FaFileSignature, FaBuilding, FaUserTie,
  FaBalanceScaleRight, FaHome, FaStamp, FaRegFileAlt, FaBullhorn,
  FaFileAlt, FaHandshake, FaUniversity, FaReceipt, FaCommentAlt
} from 'react-icons/fa'

const ICONS = [
  FaLandmark, FaMapMarkedAlt, FaExchangeAlt, FaSearchLocation, FaFileContract,
  FaTractor, FaGavel, FaFileSignature, FaBuilding, FaUserTie,
  FaBalanceScaleRight, FaHome, FaStamp, FaRegFileAlt, FaBullhorn,
  FaFileAlt, FaHandshake, FaUniversity, FaReceipt, FaCommentAlt
]

export default function Services() {
  const { t } = useTranslation()
  const items = t('services.items', { returnObjects: true })

  return (
    <section id="services" className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">{t('services.eyebrow')}</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">{t('services.title')}</h2>
          <p className="text-navy/70">{t('services.subtitle')}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                className="card p-6 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-gradient flex items-center justify-center text-gold text-xl mb-4">
                  <Icon />
                </div>
                <h3 className="font-heading font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-navy/65 leading-relaxed flex-1">{item.desc}</p>
                <a href="#contact" className="mt-4 text-sm font-semibold text-royal hover:text-gold-dark transition-colors inline-flex items-center gap-1">
                  {t('services.learnMore')} →
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
