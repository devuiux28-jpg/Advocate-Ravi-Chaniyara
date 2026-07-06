import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FaStar, FaQuoteLeft, FaGoogle } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Testimonials() {
  const { t } = useTranslation()
  const items = t('testimonials.items', { returnObjects: true })

  return (
    <section id="testimonials" className="section-padding bg-surface">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="eyebrow">{t('testimonials.eyebrow')}</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-3">{t('testimonials.title')}</h2>
          <div className="flex items-center gap-2 text-sm text-navy/70">
            <FaGoogle className="text-royal" />
            {t('testimonials.googleRating')}:
            <span className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => <FaStar key={i} />)}
            </span>
            <span className="font-semibold">4.9/5</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="!pb-12"
          >
            {items.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="card p-7 h-full flex flex-col">
                  <FaQuoteLeft className="text-gold/40 text-3xl mb-4" />
                  <p className="text-navy/75 text-sm leading-relaxed flex-1 mb-6">&ldquo;{item.text}&rdquo;</p>
                  <div className="flex text-gold text-xs mb-2">
                    {Array.from({ length: 5 }).map((_, s) => <FaStar key={s} />)}
                  </div>
                  <div className="font-heading font-semibold text-navy text-sm">{item.name}</div>
                  <div className="text-navy/50 text-xs">{item.location}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
