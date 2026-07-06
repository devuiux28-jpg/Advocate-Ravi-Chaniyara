import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

export default function About() {
  const { t } = useTranslation()
  const qualifications = t('about.qualifications.items', { returnObjects: true })
  const timeline = t('about.timeline', { returnObjects: true })

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/advocate-profile.png"
              alt="Advocate Ravi Chaniyara"
              className="rounded-xl2 shadow-soft w-full h-auto"
              loading="lazy"
            />
            <div className="grid sm:grid-cols-2 gap-5 mt-8">
              <div className="card p-5">
                <h4 className="font-heading font-semibold text-royal mb-1">{t('about.mission.title')}</h4>
                <p className="text-sm text-navy/70">{t('about.mission.text')}</p>
              </div>
              <div className="card p-5">
                <h4 className="font-heading font-semibold text-royal mb-1">{t('about.vision.title')}</h4>
                <p className="text-sm text-navy/70">{t('about.vision.text')}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">{t('about.eyebrow')}</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-5">{t('about.title')}</h2>
            <p className="text-navy/70 leading-relaxed mb-8">{t('about.intro')}</p>

            <h4 className="font-heading font-semibold text-navy mb-3">{t('about.qualifications.title')}</h4>
            <ul className="grid sm:grid-cols-2 gap-3 mb-10">
              {qualifications.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-navy/75">
                  <FaCheckCircle className="text-gold mt-0.5 shrink-0" /> {item}
                </li>
              ))}
            </ul>

            <div className="relative pl-6 border-l-2 border-gold/40 space-y-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[1.94rem] top-1 w-3.5 h-3.5 rounded-full bg-gold border-4 border-white shadow" />
                  <span className="text-royal font-heading font-bold text-sm">{item.year}</span>
                  <p className="text-navy/70 text-sm mt-1">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
