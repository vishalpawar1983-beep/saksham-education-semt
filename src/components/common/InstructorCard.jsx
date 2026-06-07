import { motion } from 'framer-motion';
import { BookOpen, Users, Star } from 'lucide-react';
import { site } from '../../data/site';
import { fadeUp } from '../../utils/animations';

export default function InstructorCard({ instructor }) {
  return (
    <motion.div
      variants={fadeUp}
      className="card-base group overflow-hidden text-center hover:shadow-card hover:-translate-y-1.5"
    >
      <div className="relative bg-gradient-to-br from-accent/40 to-secondary/20 px-6 pt-8">
        <img
          src={instructor.image}
          alt={instructor.name}
          loading="lazy"
          className="mx-auto h-40 w-40 rounded-full object-cover ring-4 ring-white shadow-card transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-bold text-ink shadow-soft">
          <Star className="h-3.5 w-3.5 fill-accent text-accent" />
          {instructor.rating}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-ink">{instructor.name}</h3>
        <p className="mt-1 text-sm font-medium text-primary">{instructor.designation}</p>
        <p className="mt-1 text-xs text-muted">{instructor.expertise}</p>
        <div className="mt-4 flex items-center justify-center gap-5 border-t border-line pt-4 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5">
            <BookOpen className="h-4 w-4 text-secondary" />
            {instructor.courses} Courses
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Users className="h-4 w-4 text-secondary" />
            {instructor.students}+
          </span>
        </div>
      </div>
    </motion.div>
  );
}
