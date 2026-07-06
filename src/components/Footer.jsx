import { useTranslation } from 'react-i18next'
import { FaBalanceScale, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaFilePdf } from 'react-icons/fa'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  const quickLinks = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'faq', href: '#faq' },
    { key: 'contact', href: '#contact' }
  ]

  const serviceLinks = t('services.items', { returnObjects: true }).slice(0, 6)

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy-dark bg-navy text-white pt-16 pb-8">
      <div className="container-custom grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FaBalanceScale className="text-gold text-2xl" />
            <span className="font-heading font-bold">Advocate Ravi Chaniyara</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-5">{t('footer.tagline')}</p>
          <div className="flex gap-3">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">{t('footer.quickLinks')}</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.key}>
                <button onClick={() => scrollTo(link.href)} className="text-white/60 text-sm hover:text-gold transition-colors">
                  {t(`nav.${link.key}`)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">{t('footer.servicesTitle')}</h4>
          <ul className="space-y-2.5">
            {serviceLinks.map((item, i) => (
              <li key={i} className="text-white/60 text-sm">{item.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">{t('footer.contactTitle')}</h4>
          <ul className="space-y-2.5 text-white/60 text-sm mb-5">
            <li>{t('contact.officeAddress')}</li>
            <li>+91 90163 77078</li>
            <li>contact@advocaterajeev.com</li>
          </ul>
          <a href="#" className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors">
            <FaFilePdf /> {t('common.downloadProfile')}
          </a>
        </div>
      </div>

      <div className="container-custom border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/50 text-xs">
        <p>&copy; {year} Advocate Ravi Chaniyara. {t('footer.rights')}</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-gold transition-colors">{t('footer.privacy')}</a>
          <a href="#" className="hover:text-gold transition-colors">{t('footer.terms')}</a>
        </div>
      </div>
    </footer>
  )
}
