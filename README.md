# Advocate Ravi Chaniyara — Revenue & Land Legal Services Website

A premium, responsive, trilingual (English / Hindi / Gujarati) advocate website built with React, Vite, Tailwind CSS, Framer Motion, and i18next.

## Tech Stack

- React 18 + Vite
- Tailwind CSS (custom navy / royal blue / gold theme)
- Framer Motion (page & scroll animations)
- React Router DOM
- i18next + react-i18next + browser language detector (EN / HI / GU, persisted to localStorage)
- React Helmet Async (SEO meta tags)
- Swiper.js (testimonials carousel)
- React CountUp (animated statistics)
- EmailJS (contact form — see setup below)

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

### Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/       All UI sections (Header, Hero, About, Services, etc.)
  pages/            Route-level pages (Home.jsx)
  locales/
    en/translation.json
    hi/translation.json
    gu/translation.json
  i18n.js           i18next configuration
  App.jsx
  main.jsx
  index.css
```

## Configuring the Contact Form (EmailJS)

The contact form in `src/components/Contact.jsx` is wired for [EmailJS](https://www.emailjs.com/):

1. Create a free EmailJS account and an email service + template.
2. Open `src/components/Contact.jsx` and replace:
   ```js
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
   ```
   with your real credentials.
3. Until configured, the form simulates a successful send so you can preview the UI.

## Editing Content & Translations

All visible text lives in `src/locales/{en,hi,gu}/translation.json`. Edit the English file first, then mirror any structural changes (new keys, new array items) into the Hindi and Gujarati files to keep all three languages in sync.

## Replacing Images

Hero, About, and Blog sections currently use royalty-free Unsplash images referenced by URL for placeholder purposes. Replace the `src`/background-image URLs in `Hero.jsx`, `About.jsx`, and `Blog.jsx` with your own photography before going live.

## Updating Contact Details

Phone numbers, WhatsApp links, office address, and the embedded Google Map query currently use placeholder data. Update:
- `src/components/Contact.jsx` (map query, info cards)
- `src/components/FloatingButtons.jsx` (`tel:` and `wa.me` links)
- `src/components/Footer.jsx`
- `src/locales/*/translation.json` → `contact.officeAddress`

## Notes

- Language preference is remembered via `localStorage` (`advocate_site_lang`).
- Reduced-motion preference is respected globally (see `index.css`).
- Replace the SVG favicon at `public/favicon.svg` with your firm's logo mark.
