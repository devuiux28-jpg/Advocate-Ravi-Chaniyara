import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en/translation.json'
import hi from './locales/hi/translation.json'
import gu from './locales/gu/translation.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
      gu: { translation: gu }
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'hi', 'gu'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'advocate_site_lang'
    },
    interpolation: {
      escapeValue: false
    }
  })

// Keep <html lang> and font-family class in sync with the active language
const applyLangAttributes = (lng) => {
  document.documentElement.lang = lng
  document.documentElement.classList.remove('font-body', 'font-devanagari', 'font-gujarati')
  if (lng === 'hi') document.documentElement.classList.add('font-devanagari')
  else if (lng === 'gu') document.documentElement.classList.add('font-gujarati')
  else document.documentElement.classList.add('font-body')
}

applyLangAttributes(i18n.resolvedLanguage || 'en')
i18n.on('languageChanged', applyLangAttributes)

export default i18n
