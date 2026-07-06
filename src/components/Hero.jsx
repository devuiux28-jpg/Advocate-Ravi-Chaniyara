import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { FaGavel, FaUsers, FaSmile, FaHeadset, FaArrowRight, FaPhoneAlt } from 'react-icons/fa'

const STATS = [
  { icon: FaGavel, value: 10, suffix: '+', key: 'experience' },
  { icon: FaUsers, value: 500, suffix: '+', key: 'cases' },
  { icon: FaSmile, value: 1000, suffix: '+', key: 'clients' },
  { icon: FaHeadset, value: 24, prefix: '', suffix: 'x7', key: 'support' }
]

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background image + overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1920&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow !text-gold">Gujarat · Revenue & Land Law</span>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-heading font-bold text-white leading-tight mb-6">
            {t('hero.headline')}
          </h1>
          <p className="text-white/85 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
            {t('hero.subheading')}
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#contact" className="btn-primary">
              {t('hero.ctaPrimary')} <FaArrowRight />
            </a>
            <a href="#contact" className="btn-secondary">
              <FaPhoneAlt /> {t('hero.ctaSecondary')}
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STATS.map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl2 p-4 text-center"
                >
                  <Icon className="text-gold text-xl mx-auto mb-2" />
                  <div className="text-white font-heading font-bold text-xl">
                    <CountUp end={stat.value} duration={2} prefix={stat.prefix || ''} suffix={stat.suffix || ''} />
                  </div>
                  <div className="text-white/70 text-xs mt-1 leading-tight">{t(`hero.stats.${stat.key}`)}</div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="hidden lg:flex justify-center relative"
        >
          <div className="absolute -inset-8 bg-gold/10 rounded-full blur-3xl animate-float" />
          <img
            src="/first.png"
            alt="Advocate Ravi Chaniyara"
            className="relative rounded-xl2 shadow-soft border-4 border-white/10 w-full max-w-md object-cover aspect-[4/5]"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  )
}
