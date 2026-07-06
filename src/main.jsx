import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './i18n.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-navy text-white">Loading...</div>}>
          <App />
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
