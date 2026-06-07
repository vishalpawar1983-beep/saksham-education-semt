import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Star, X } from 'lucide-react';
import SEO, { buildBreadcrumbSchema } from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import TestimonialCard from '../components/common/TestimonialCard';
import CTABanner from '../components/sections/CTABanner';
import { testimonials, videoTestimonials } from '../data/testimonials';
import { fadeUp, stagger, reveal } from '../utils/animations';

export default function Testimonials() {
  const [video, setVideo] = useState(null);
  const avgRating = (
    testimonials.reduce((a, t) => a + t.rating, 0) / testimonials.length
  ).toFixed(1);

  return (
    <>
      <SEO
        title="Testimonials"
        description="Read and watch success stories from SEMT students who built rewarding careers through our skill development programs."
        path="/testimonials"
        schema={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Testimonials', path: '/testimonials' },
        ])}
      />
      <PageHero
        title="Student Success Stories"
        subtitle="Hear directly from our learners about how SEMT helped them transform their careers."
        breadcrumb={[{ name: 'Testimonials', path: '/testimonials' }]}
      />

      {/* Rating summary */}
      <section className="section">
        <div className="container">
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { value: avgRating, label: 'Average Rating', icon: true },
              { value: '5000+', label: 'Happy Students' },
              { value: '95%', label: 'Would Recommend' },
            ].map((s) => (
              <div key={s.label} className="card-base p-6 text-center">
                <p className="text-3xl font-extrabold text-primary">{s.value}</p>
                {s.icon && (
                  <div className="mt-1 flex justify-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                )}
                <p className="mt-1 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video testimonials */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Watch & Listen"
            title="Video Testimonials"
            highlight="Video Testimonials"
          />
          <motion.div variants={stagger} {...reveal} className="mt-12 grid gap-6 md:grid-cols-3">
            {videoTestimonials.map((v) => (
              <motion.button
                key={v.id}
                variants={fadeUp}
                onClick={() => setVideo(v.videoUrl)}
                className="group relative aspect-video overflow-hidden rounded-2xl text-left shadow-soft"
              >
                <img src={v.thumbnail} alt={v.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-primary shadow-glow transition-transform group-hover:scale-110">
                  <Play className="h-7 w-7 translate-x-0.5 fill-primary" />
                </span>
                <span className="absolute bottom-4 left-4 text-white">
                  <span className="block font-bold">{v.name}</span>
                  <span className="text-sm text-white/70">{v.course}</span>
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Written testimonials */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="In Their Words"
            title="What Our Students Say"
            highlight="Students Say"
          />
          <motion.div variants={stagger} {...reveal} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video modal */}
      {video && (
        <div
          onClick={() => setVideo(null)}
          className="fixed inset-0 z-[100] grid place-items-center bg-ink/90 p-4"
        >
          <button
            onClick={() => setVideo(null)}
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white"
            aria-label="Close video"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="aspect-video w-full max-w-3xl overflow-hidden rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={video}
              title="Video testimonial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>
      )}

      <CTABanner />
    </>
  );
}
