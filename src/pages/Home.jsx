import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Services from '../components/Services.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import Process from '../components/Process.jsx'
import Stats from '../components/Stats.jsx'
import FAQ from '../components/FAQ.jsx'
import Blog from '../components/Blog.jsx'
import Contact from '../components/Contact.jsx'

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Helmet>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <Stats />
      <FAQ />
      <Blog />
      <Contact />
    </>
  )
}
