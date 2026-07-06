import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Process() {
  const { t } = useTranslation()
  const steps = t('process.steps', { returnObjects: true })

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow">{t('process.eyebrow')}</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy">{t('process.title')}</h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-navy-gradient text-white font-heading font-bold text-xl flex items-center justify-center shadow-soft mb-4 relative z-10 border-4 border-white">
                  {i + 1}
                </div>
                <h3 className="font-heading font-semibold text-navy text-sm mb-1.5">{step.title}</h3>
                <p className="text-xs text-navy/60 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
