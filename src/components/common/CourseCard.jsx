import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { fadeUp } from '../../utils/animations';

export default function CourseCard({ course }) {
  return (
    <motion.article
      variants={fadeUp}
      className="card-base group flex flex-col overflow-hidden hover:shadow-card hover:-translate-y-1.5"
    >
      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary shadow-soft">
          {course.type}
        </span>
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-ink/70 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
          <Star className="h-3.5 w-3.5 fill-accent text-accent" />
          {course.rating}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
          {course.categoryName}
        </span>
        <h3 className="mt-2 text-lg font-bold leading-snug text-ink line-clamp-2">
          <Link to={`/courses/${course.slug}`} className="hover:text-primary transition-colors">
            {course.title}
          </Link>
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">
          {course.shortDescription}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-line pt-4 mt-5">
          <Link
            to={`/courses/${course.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-700"
          >
            View Details
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/admissions"
            className="inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors hover:text-primary"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
