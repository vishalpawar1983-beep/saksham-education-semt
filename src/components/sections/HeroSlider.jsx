import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides, heroStats } from '../../data/heroSlides';

const AUTOPLAY = 6000;

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = heroSlides[active];
  const count = heroSlides.length;

  const goTo = (i) => setActive((i + count) % count);

  useEffect(() => {
    if (paused) return undefined;
    const t = setTimeout(() => setActive((a) => (a + 1) % count), AUTOPLAY);
    return () => clearTimeout(t);
  }, [active, paused, count]);

  return (
    <section
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative overflow-hidden bg-[#0b0b14] text-white"
    >
      {/* Ambient brand glows */}
      <span className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-primary/30 blur-[120px]" />
      <span className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-secondary/25 blur-[120px]" />
      <span className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
          backgroundSize: '34px 34px',
        }}
      />

      <div className="container relative z-10 pt-32 pb-10 md:pt-36">
        <div className="grid items-center gap-10 lg:min-h-[520px] lg:grid-cols-2">
          {/* Left: text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
                <Sparkles className="h-4 w-4 text-secondary" />
                {slide.badge} · SEMT
              </span>

              <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] md:text-6xl xl:text-7xl">
                <span className="bg-gradient-to-r from-white via-white to-primary-200 bg-clip-text text-transparent">
                  {slide.heading}
                </span>
              </h1>
              <p className="mt-2 text-2xl font-light text-white/70 md:text-3xl">{slide.subtitle}</p>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
                {slide.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to={slide.path}
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-3.5 font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
                >
                  Explore Course
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
                >
                  <Play className="h-4 w-4 fill-white" />
                  Book Free Demo
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
                {heroStats.map((s, i) => (
                  <div
                    key={s.label}
                    className={i > 0 ? 'border-l border-white/10 pl-10' : ''}
                  >
                    <p className="text-3xl font-extrabold md:text-4xl">{s.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-white/50">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Rating */}
              <div className="mt-8 flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[20, 11, 29, 53].map((n) => (
                    <img
                      key={n}
                      src={`https://i.pravatar.cc/80?img=${n}`}
                      alt=""
                      loading="lazy"
                      className="h-9 w-9 rounded-full border-2 border-[#0b0b14] object-cover"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </span>
                  <span className="text-sm text-white/70">
                    <span className="font-bold text-white">4.9/5</span> from 500+ students
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right: image */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/40 to-secondary/30 blur-2xl" />
              <AnimatePresence mode="wait">
                <motion.img
                  key={slide.id}
                  src={slide.image}
                  alt={slide.heading}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full rounded-[2.5rem] border border-white/10 object-cover shadow-float"
                />
              </AnimatePresence>

              {/* arrows */}
              <button
                onClick={() => goTo(active - 1)}
                aria-label="Previous slide"
                className="absolute -left-5 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition-colors hover:bg-primary"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => goTo(active + 1)}
                aria-label="Next slide"
                className="absolute -right-5 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition-colors hover:bg-primary"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom: course thumbnail slider nav */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {heroSlides.map((s, i) => {
            const isActive = i === active;
            return (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                className={`group relative h-24 overflow-hidden rounded-2xl border text-left transition-all duration-300 ${
                  isActive
                    ? 'border-primary shadow-glow'
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                <img
                  src={s.image}
                  alt={s.heading}
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${
                    isActive ? 'scale-105 opacity-100' : 'opacity-50 group-hover:opacity-80'
                  }`}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#0b0b14] via-[#0b0b14]/60 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-2.5">
                  <span className="block text-xs font-bold leading-tight text-white">
                    {s.heading}
                  </span>
                  <span className="block text-[10px] text-white/50">{s.subtitle}</span>
                </span>
                {isActive && (
                  <motion.span
                    key={active}
                    initial={{ width: 0 }}
                    animate={{ width: paused ? '100%' : '100%' }}
                    transition={{ duration: paused ? 0 : AUTOPLAY / 1000, ease: 'linear' }}
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
