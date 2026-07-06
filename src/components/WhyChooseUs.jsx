import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FaUserGraduate, FaEye, FaWallet, FaBolt, FaThumbsUp, FaShieldAlt } from 'react-icons/fa'

const ICONS = [FaUserGraduate, FaEye, FaWallet, FaBolt, FaThumbsUp, FaShieldAlt]

export default function WhyChooseUs() {
  const { t } = useTranslation()
  const items = t('whyUs.items', { returnObjects: true })

  return (
    <section id="why-us" className="section-padding bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_20%_20%,white,transparent_35%)]" />
      <div className="container-custom relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">{t('whyUs.eyebrow')}</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">{t('whyUs.title')}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-xl2 p-7 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center text-navy text-lg mb-5">
                  <Icon />
                </div>
                <h3 className="font-heading font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/65 leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
