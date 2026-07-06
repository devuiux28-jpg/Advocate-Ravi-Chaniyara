import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import FloatingButtons from './components/FloatingButtons.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import CookieConsent from './components/CookieConsent.jsx'
import PageLoader from './components/PageLoader.jsx'
import Home from './pages/Home.jsx'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <PageLoader />

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
      <CookieConsent />
    </div>
  )
}
