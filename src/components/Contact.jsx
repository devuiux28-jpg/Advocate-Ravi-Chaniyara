import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa'

// Replace with your own EmailJS credentials: https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

export default function Contact() {
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      if (EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID') {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, EMAILJS_PUBLIC_KEY)
      } else {
        // Fallback simulation when EmailJS is not yet configured
        await new Promise((res) => setTimeout(res, 800))
      }
      setStatus('success')
      setForm({ name: '', phone: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const infoItems = [
    { icon: FaMapMarkerAlt, label: t('contact.office'), value: t('contact.officeAddress') },
    { icon: FaPhoneAlt, label: t('contact.phone'), value: '+91 90163 77078' },
    { icon: FaWhatsapp, label: t('contact.whatsapp'), value: '+91 90163 77078' },
    { icon: FaEnvelope, label: t('contact.email'), value: 'contact@advocaterajeev.com' },
    { icon: FaClock, label: t('contact.hours'), value: t('contact.hoursValue') }
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">{t('contact.eyebrow')}</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-3">{t('contact.title')}</h2>
          <p className="text-navy/70">{t('contact.subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-xl2 overflow-hidden shadow-card h-64">
              <iframe
                title="office-location"
                src="https://www.google.com/maps?q=Ashram%20Road%2C%20Ahmedabad%2C%20Gujarat&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {infoItems.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="card p-5 flex items-start gap-3">
                    <span className="w-10 h-10 rounded-full bg-navy-gradient text-gold flex items-center justify-center shrink-0">
                      <Icon />
                    </span>
                    <div>
                      <div className="text-xs text-navy/50">{item.label}</div>
                      <div className="text-sm font-medium text-navy">{item.value}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="card p-8 flex flex-col gap-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                required name="name" value={form.name} onChange={handleChange}
                placeholder={t('contact.form.name')}
                className="border border-navy/15 rounded-xl px-4 py-3 text-sm focus:border-royal outline-none transition-colors"
              />
              <input
                required name="phone" value={form.phone} onChange={handleChange}
                placeholder={t('contact.form.phone')}
                className="border border-navy/15 rounded-xl px-4 py-3 text-sm focus:border-royal outline-none transition-colors"
              />
            </div>
            <input
              required type="email" name="email" value={form.email} onChange={handleChange}
              placeholder={t('contact.form.email')}
              className="border border-navy/15 rounded-xl px-4 py-3 text-sm focus:border-royal outline-none transition-colors"
            />
            <input
              required name="subject" value={form.subject} onChange={handleChange}
              placeholder={t('contact.form.subject')}
              className="border border-navy/15 rounded-xl px-4 py-3 text-sm focus:border-royal outline-none transition-colors"
            />
            <textarea
              required name="message" value={form.message} onChange={handleChange} rows={5}
              placeholder={t('contact.form.message')}
              className="border border-navy/15 rounded-xl px-4 py-3 text-sm focus:border-royal outline-none transition-colors resize-none"
            />
            <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-60">
              {status === 'sending' ? t('contact.form.sending') : <>{t('contact.form.submit')} <FaPaperPlane /></>}
            </button>
            {status === 'success' && <p className="text-sm text-green-600 font-medium">{t('contact.form.success')}</p>}
            {status === 'error' && <p className="text-sm text-red-600 font-medium">{t('contact.form.error')}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
