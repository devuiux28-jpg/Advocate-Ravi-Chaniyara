import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { FaGavel, FaUsers, FaCalendarAlt, FaChartLine } from 'react-icons/fa'

const STATS = [
  { icon: FaGavel, value: 500, suffix: '+', key: 'cases' },
  { icon: FaUsers, value: 1000, suffix: '+', key: 'clients' },
  { icon: FaCalendarAlt, value: 10, suffix: '+', key: 'experience' },
  { icon: FaChartLine, value: 98, suffix: '%', key: 'success' }
]

export default function Stats() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-royal-dark bg-navy-gradient">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="text-center text-white"
              >
                <Icon className="text-gold text-2xl mx-auto mb-3" />
                <div className="font-heading font-extrabold text-3xl md:text-4xl">
                  <CountUp end={stat.value} duration={2.2} suffix={stat.suffix} enableScrollSpy scrollSpyOnce />
                </div>
                <p className="text-white/70 text-sm mt-1">{t(`stats.${stat.key}`)}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
