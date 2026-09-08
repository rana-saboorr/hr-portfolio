# Muddasir Abbas — HR Portfolio

A premium, production-quality personal portfolio website for **Muddasir Abbas**, HR Professional and Human Resources Executive based in Kasur, Punjab, Pakistan.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Build tool | Vite 6 |
| UI Framework | React 19 + JSX |
| Styling | Tailwind CSS v4 + @tailwindcss/vite |
| Animation | motion/react (useScroll, useTransform, useInView, AnimatePresence) |
| Smooth scroll | lenis/react (ReactLenis) |
| Icons | lucide-react |
| Fonts | Sora (headings) + Plus Jakarta Sans (body) via Google Fonts |

---

## Features

- ✅ Premium editorial HR-focused design (not a generic dev portfolio)
- ✅ Smooth scrolling via Lenis
- ✅ Scroll progress bar
- ✅ Fixed glassmorphism navbar with active section detection
- ✅ Animated mobile hamburger menu (keyboard accessible)
- ✅ Dark / light mode toggle
- ✅ Hero with parallax blobs, word-by-word reveal, floating HR cards
- ✅ About section with animated stats counters
- ✅ Alternating desktop career timeline
- ✅ Education card
- ✅ Skills with continuous marquee (HR Skills) + animated pill badges
- ✅ 6 service cards with color-coded gradients
- ✅ Contact form with validation + success state (front-end only)
- ✅ Phone click-to-call + WhatsApp CTA
- ✅ SEO: title, meta, Open Graph, Twitter card
- ✅ JSON-LD Person structured data
- ✅ WCAG-minded accessibility (aria labels, keyboard nav, focus rings)
- ✅ Reduced motion support
- ✅ Fully responsive: 375px → 1920px

---

## Project Structure

```
/
├── index.html              ← SEO, fonts, JSON-LD
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.svg         ← MA monogram
│   └── resume.pdf          ← ⚠ Replace with actual CV
└── src/
    ├── main.jsx
    ├── App.jsx             ← Lenis wrapper + dark mode state
    ├── index.css           ← Tailwind v4 @theme design system
    ├── data/
    │   └── portfolioData.js  ← ⭐ EDIT THIS FILE to update content
    ├── hooks/
    │   ├── useCounter.js
    │   ├── useActiveSection.js
    │   └── useReducedMotion.js
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Experience.jsx
        ├── Education.jsx
        ├── Skills.jsx
        ├── Services.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        ├── SectionHeading.jsx
        ├── AnimatedCounter.jsx
        ├── ScrollProgress.jsx
        └── MagneticButton.jsx
```

---

## Setup & Running

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Editing Content

**All portfolio content lives in one file:**

```
src/data/portfolioData.js
```

### Replacing Intentional Placeholders

| Item | Field in portfolioData.js | Instructions |
|---|---|---|
| **Email address** | `contact.email` | Replace `[your email address]` with your real email |
| **LinkedIn URL** | `social.linkedin` | Replace `[your LinkedIn URL]` with your LinkedIn profile URL |
| **Profile photo** | `personal.hasPhoto` | Set to `true`, place your photo at `public/profile.jpg` |
| **Resume / CV** | N/A | Replace `public/resume.pdf` with your actual CV file |

### Phone Number

The phone number **03062508781** is already configured:
- Display: `0306 2508781`
- Click-to-call: `tel:03062508781`
- WhatsApp: `https://wa.me/923062508781`

If you need to update it, edit these fields in `portfolioData.js`:
```js
personal.phone
personal.phoneDisplay
personal.phoneTel
personal.whatsapp
```

---

## Adding a Profile Photo

1. Add your professional photo to `public/profile.jpg`
2. Open `src/data/portfolioData.js`
3. Change `personal.hasPhoto` from `false` to `true`

The Hero and About sections will automatically display your photo.

---

## Deployment

This is a standard Vite static site. Build with:

```bash
npm run build
```

The `dist/` folder can be deployed to:
- Netlify (drag & drop)
- Vercel
- GitHub Pages
- Any static hosting provider

---

*Built for Muddasir Abbas — HR Professional · Kasur, Punjab, Pakistan*
