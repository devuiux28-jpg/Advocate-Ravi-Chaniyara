import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'

export default function CookieConsent() {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('advocate_cookie_consent')
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('advocate_cookie_consent', 'true')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-navy text-white p-4 sm:p-5"
        >
          <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/80">{t('common.cookieText')}</p>
            <button onClick={accept} className="btn-primary !px-6 !py-2.5 text-sm shrink-0">
              {t('common.cookieAccept')}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
