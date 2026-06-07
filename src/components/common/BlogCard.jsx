import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarDays, ArrowRight, User } from 'lucide-react';
import { fadeUp } from '../../utils/animations';

const formatDate = (d) =>
  new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

export default function BlogCard({ blog }) {
  return (
    <motion.article
      variants={fadeUp}
      className="card-base group flex flex-col overflow-hidden hover:shadow-card hover:-translate-y-1.5"
    >
      <Link to={`/blog/${blog.slug}`} className="relative overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-white">
          {blog.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-4 text-xs text-muted">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" />
            {formatDate(blog.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <User className="h-3.5 w-3.5" />
            {blog.author}
          </span>
        </div>
        <h3 className="mt-3 text-lg font-bold leading-snug text-ink line-clamp-2">
          <Link to={`/blog/${blog.slug}`} className="hover:text-primary transition-colors">
            {blog.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-muted line-clamp-2">{blog.excerpt}</p>
        <Link
          to={`/blog/${blog.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary"
        >
          Read More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}
