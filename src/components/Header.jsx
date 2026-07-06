import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBalanceScale, FaBars, FaTimes } from 'react-icons/fa'
import LanguageSwitcher from './LanguageSwitcher.jsx'

const NAV_ITEMS = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'services', href: '#services' },
  { key: 'whyUs', href: '#why-us' },
  { key: 'faq', href: '#faq' },
  { key: 'blog', href: '#blog' },
  { key: 'contact', href: '#contact' }
]

export default function Header() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-card py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home') }} className="flex items-center gap-2 group">
          <span className={`text-2xl transition-colors ${scrolled ? 'text-royal' : 'text-gold'}`}>
            <FaBalanceScale />
          </span>
          <span className={`font-heading font-bold text-lg leading-tight transition-colors ${scrolled ? 'text-navy' : 'text-white'}`}>
            Advocate Ravi Chaniyara
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
              className={`text-sm font-medium transition-colors hover:text-gold ${scrolled ? 'text-navy' : 'text-white'}`}
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher dark={!scrolled} />
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }} className="btn-primary !px-5 !py-2.5 text-sm">
            {t('nav.bookConsultation')}
          </a>
        </div>

        <button
          className={`lg:hidden text-2xl ${scrolled ? 'text-navy' : 'text-white'}`}
          onClick={() => setMobileOpen(true)}
          aria-label={t('common.openMenu')}
        >
          <FaBars />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-navy z-[70] flex flex-col p-6 lg:hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-heading font-bold text-white text-lg">Advocate Ravi Chaniyara</span>
              <button onClick={() => setMobileOpen(false)} className="text-white text-2xl" aria-label={t('common.closeMenu')}>
                <FaTimes />
              </button>
            </div>
            <nav className="flex flex-col gap-5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                  className="text-white text-lg font-medium border-b border-white/10 pb-3 hover:text-gold transition-colors"
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-4">
              <LanguageSwitcher dark />
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }} className="btn-primary w-full">
                {t('nav.bookConsultation')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
