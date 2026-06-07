import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import SEO, { buildBreadcrumbSchema } from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import CTABanner from '../components/sections/CTABanner';
import { galleryImages, galleryCategories } from '../data/gallery';
import { fadeUp, stagger } from '../utils/animations';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const images =
    filter === 'All' ? galleryImages : galleryImages.filter((g) => g.category === filter);

  const showAt = (idx) => setLightbox((idx + images.length) % images.length);

  return (
    <>
      <SEO
        title="Gallery"
        description="Explore life at SEMT — our campus, classrooms, workshops, events and placement drives in pictures."
        path="/gallery"
        schema={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Gallery', path: '/gallery' },
        ])}
      />
      <PageHero
        title="Campus Gallery"
        subtitle="A glimpse into life at SEMT — vibrant classrooms, hands-on workshops, events and celebrations."
        breadcrumb={[{ name: 'Gallery', path: '/gallery' }]}
      />

      <section className="section">
        <div className="container">
          {/* Filters */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  filter === cat
                    ? 'bg-primary text-white shadow-glow'
                    : 'bg-white text-ink border border-line hover:border-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            key={filter}
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
          >
            {images.map((img, i) => (
              <motion.button
                key={img.id}
                variants={fadeUp}
                onClick={() => setLightbox(i)}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <img
                  src={img.thumb}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute inset-0 grid place-items-center bg-ink/50 opacity-0 transition-opacity group-hover:opacity-100">
                  <ZoomIn className="h-8 w-8 text-white" />
                </span>
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink opacity-0 transition-opacity group-hover:opacity-100">
                  {img.category}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] grid place-items-center bg-ink/90 p-4"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); showAt(lightbox - 1); }}
              className="absolute left-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 md:left-8"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[80vh] max-w-[90vw] rounded-2xl object-contain shadow-float"
            />
            <button
              onClick={(e) => { e.stopPropagation(); showAt(lightbox + 1); }}
              className="absolute right-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 md:right-8"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <CTABanner />
    </>
  );
}
