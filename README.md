# Saksham Education (SEMT) — Website

A premium, modern, multi-page education academy website for **Saksham Education (SEMT)**, a career-focused skill development institute in SAS Nagar Mohali, Punjab.

## ✨ Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (custom design system)
- **React Router DOM 6** (with code-split routes)
- **Framer Motion** (premium animations)
- **Swiper JS** (instructor & testimonial sliders)
- **React CountUp** (animated counters)
- **react-helmet-async** (SEO / meta / JSON-LD)
- **Lucide React** (icons)
- Mobile-first responsive design

## 🎨 Design System

| Token | Value |
|-------|-------|
| Font | Outfit (Google Fonts) |
| Primary | `#E11D2A` |
| Secondary | `#FF7A00` |
| Accent | `#FFD54F` |
| Background | `#F8FAFC` |
| Card | `#FFFFFF` |
| Text | `#0F172A` |
| Radius | 20px (`rounded-2xl`) |
| Container | 1280px |

## 🚀 Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview production build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── common/      # Button, SEO, cards, Accordion, Counter, Logo, PageHero…
│   ├── layout/      # Header, Footer, TopBar, Layout, ScrollToTop
│   └── sections/    # Home page sections (Hero, Categories, etc.)
├── data/            # site config + courses/blogs/testimonials/instructors/gallery JSON
├── pages/           # Home, About, Courses, CourseDetail, Admissions,
│                    # Gallery, Testimonials, Blog, BlogDetail, Contact, NotFound
├── utils/           # Framer Motion animation variants
├── App.jsx          # routes
├── main.jsx         # entry (Router + HelmetProvider)
└── index.css        # Tailwind layers + component classes
```

## 📚 Pages

Home · About · Courses (filter/search/pagination) · Course Detail · Admissions ·
Gallery (lightbox) · Testimonials (video + written) · Blog · Blog Detail · Contact · 404

## 🔍 SEO

- Per-page meta titles & descriptions
- Open Graph + Twitter cards
- JSON-LD: Organization, LocalBusiness, Course, BreadcrumbList schema
- Canonical URLs, robots.txt

## ⚡ Performance

- Route-based code splitting (`React.lazy`)
- Vendor chunk splitting (Vite `manualChunks`)
- Lazy-loaded images
- Lightweight, system-friendly fonts

## 📝 Course Data

All course categories and programs are defined in [`src/data/courses.js`](src/data/courses.js)
as a hierarchical category → course structure. Each course is generated with a full
overview, curriculum, eligibility, career paths and FAQs.

> Brand, copy and imagery are 100% custom for SEMT. Demo images use remote placeholders —
> swap them for real assets under `public/assets/` (see that folder's README).
