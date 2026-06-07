import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Star, BadgeCheck, ChevronDown, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import 'swiper/css';
import SectionHeading from '../common/SectionHeading';
import GoogleIcon from '../common/GoogleIcon';
import { testimonials, googleSummary } from '../../data/testimonials';
import { site } from '../../data/site';
import { reveal } from '../../utils/animations';

const avatarColors = [
  '#4285F4',
  '#EA4335',
  '#F9AB00',
  '#34A853',
  '#A142F4',
  '#FF7A00',
  '#0F9D58',
  '#DB4437',
];

const formatDate = (d) =>
  new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

const writeReviewUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.fullName + ' ' + site.address.mapQuery
)}`;

function Stars({ value = 5, className = 'h-4 w-4' }) {
  return (
    <span className="flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${className} ${i < value ? 'fill-[#FBBC05] text-[#FBBC05]' : 'text-line'}`}
        />
      ))}
    </span>
  );
}

function GoogleWordmark() {
  const letters = [
    ['G', '#4285F4'],
    ['o', '#EA4335'],
    ['o', '#FBBC05'],
    ['g', '#4285F4'],
    ['l', '#34A853'],
    ['e', '#EA4335'],
  ];
  return (
    <span className="text-3xl font-bold tracking-tight">
      {letters.map(([ch, color], i) => (
        <span key={i} style={{ color }}>
          {ch}
        </span>
      ))}
    </span>
  );
}

function ReviewCard({ review, index }) {
  const [expanded, setExpanded] = useState(false);
  const color = avatarColors[index % avatarColors.length];
  return (
    <div className="card-base relative flex h-full flex-col p-6">
      <Quote className="absolute right-5 top-5 h-8 w-8 text-line" />

      <div className="flex items-center gap-3">
        <span
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full text-lg font-bold text-white"
          style={{ backgroundColor: color }}
        >
          {review.name.charAt(0)}
        </span>
        <div>
          <p className="flex items-center gap-1.5 font-bold text-ink">
            {review.name}
            <BadgeCheck className="h-4 w-4 fill-[#4285F4] text-white" />
          </p>
          <p className="text-xs text-muted">{formatDate(review.date)}</p>
        </div>
      </div>

      <div className="mt-3">
        <Stars value={review.rating} />
      </div>

      <p
        className={`mt-3 flex-1 text-sm leading-relaxed text-ink/80 ${
          expanded ? '' : 'line-clamp-3'
        }`}
      >
        {review.text}
      </p>
      <button
        onClick={() => setExpanded((v) => !v)}
        className="mt-1 inline-flex items-center gap-1 self-start text-sm font-semibold text-primary"
      >
        {expanded ? 'Show less' : 'Read more'}
        <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
      </button>

      <div className="mt-5 flex items-center gap-2 border-t border-line pt-4 text-xs text-muted">
        <GoogleIcon className="h-4 w-4" />
        Posted on Google
      </div>
    </div>
  );
}

export default function GoogleReviews() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="Students Feedback"
          title="What Our Students Say on Google"
          description="Real reviews from real students — trusted, verified and handpicked from our Google Business profile."
        />

        {/* Summary card */}
        <motion.div
          {...reveal}
          variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="card-base mt-12 grid gap-8 p-7 md:p-9 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-12"
        >
          {/* Big rating */}
          <div className="text-center lg:border-r lg:border-line lg:pr-12">
            <p className="text-6xl font-extrabold text-ink">{googleSummary.rating}</p>
            <div className="mt-2 flex justify-center">
              <Stars value={Math.round(googleSummary.rating)} className="h-5 w-5" />
            </div>
            <p className="mt-1 text-sm text-muted">out of 5.0</p>
          </div>

          {/* Distribution */}
          <div className="space-y-2.5">
            {googleSummary.distribution.map((d) => (
              <div key={d.stars} className="flex items-center gap-3">
                <span className="w-3 text-sm font-medium text-ink">{d.stars}</span>
                <Star className="h-3.5 w-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${d.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full rounded-full bg-[#FBBC05]"
                  />
                </div>
                <span className="w-9 text-right text-sm text-muted">{d.pct}%</span>
              </div>
            ))}
          </div>

          {/* Google + CTA */}
          <div className="text-center lg:border-l lg:border-line lg:pl-12">
            <GoogleWordmark />
            <p className="mt-2 text-sm text-muted">
              Based on <span className="font-bold text-ink">{googleSummary.total}</span> reviews
            </p>
            <a
              href={writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4285F4] to-[#6E5CF4] px-6 py-3 font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-white">
                <GoogleIcon className="h-3.5 w-3.5" />
              </span>
              Write a Review
            </a>
          </div>
        </motion.div>

        {/* Review slider */}
        <div className="relative mt-10">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 }, 1280: { slidesPerView: 4 } }}
            className="!px-1 !py-2"
          >
            {testimonials.map((review, i) => (
              <SwiperSlide key={review.id} className="h-auto">
                <ReviewCard review={review} index={i} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Nav arrows */}
          <button
            ref={prevRef}
            aria-label="Previous reviews"
            className="absolute -left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-white text-ink shadow-soft transition-colors hover:bg-primary hover:text-white lg:-left-5"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            ref={nextRef}
            aria-label="Next reviews"
            className="absolute -right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-white text-ink shadow-soft transition-colors hover:bg-primary hover:text-white lg:-right-5"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
