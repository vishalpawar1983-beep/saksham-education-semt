import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Icon from './Icon';
import { fadeUp } from '../../utils/animations';

export default function CategoryCard({ category, count }) {
  return (
    <motion.div variants={fadeUp}>
      <Link
        to={`/courses?category=${category.slug}`}
        className="card-base group relative flex h-full flex-col gap-4 overflow-hidden p-6 hover:shadow-card hover:-translate-y-1.5"
      >
        <div
          className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
        >
          <Icon name={category.icon} className="h-7 w-7" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-ink group-hover:text-primary transition-colors">
            {category.label}
          </h3>
          <p className="mt-1 text-sm text-muted">{count} Course{count !== 1 ? 's' : ''}</p>
        </div>
        <span className="absolute right-5 top-6 text-muted opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2">
          <ArrowUpRight className="h-5 w-5 text-primary" />
        </span>
      </Link>
    </motion.div>
  );
}
