import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from 'react-icons/fa'

export default function FloatingButtons() {
  const { t } = useTranslation()
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={scrollToTop}
            aria-label={t('common.scrollTop')}
            className="w-11 h-11 rounded-full bg-navy text-white flex items-center justify-center shadow-soft hover:bg-royal transition-colors"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href="tel:+919016377078"
        aria-label={t('common.call')}
        className="w-12 h-12 rounded-full bg-royal text-white flex items-center justify-center shadow-soft hover:scale-110 transition-transform"
      >
        <FaPhoneAlt />
      </a>

      <a
        href="https://wa.me/919016377078"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('common.whatsapp')}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-soft hover:scale-110 transition-transform text-xl"
      >
        <FaWhatsapp />
      </a>
    </div>
  )
}
