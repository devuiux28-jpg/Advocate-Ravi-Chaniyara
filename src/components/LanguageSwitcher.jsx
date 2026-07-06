import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGlobe, FaChevronDown } from 'react-icons/fa'

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'gu', label: 'ગુજરાતી' }
]

export default function LanguageSwitcher({ dark = false }) {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const current = LANGUAGES.find((l) => l.code === i18n.resolvedLanguage) || LANGUAGES[0]

  const changeLanguage = (code) => {
    i18n.changeLanguage(code)
    setOpen(false)
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-full border transition-colors ${
          dark ? 'border-white/30 text-white hover:bg-white/10' : 'border-navy/15 text-navy hover:bg-navy/5'
        }`}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <FaGlobe className="text-gold" />
        {current.label}
        <FaChevronDown className={`text-xs transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-soft border border-navy/5 overflow-hidden z-50"
            role="listbox"
          >
            {LANGUAGES.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gold/10 transition-colors ${
                    lang.code === current.code ? 'text-royal font-semibold bg-royal/5' : 'text-navy'
                  }`}
                >
                  {lang.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
