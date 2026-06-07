import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Icon from '../common/Icon';
import { megaCategories, totalCourses } from '../../data/megaMenu';

/**
 * Full-catalogue mega dropdown for the Courses nav item (desktop).
 * Lists every category and all its courses in a flowing multi-column layout.
 */
export default function CoursesMegaMenu({ onNavigate }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="overflow-hidden rounded-2xl border border-line bg-white shadow-float"
    >
      {/* Scrollable catalogue */}
      <div className="max-h-[72vh] overflow-y-auto p-6 lg:p-7">
        <div className="columns-2 gap-7 lg:columns-3 xl:columns-4 [column-fill:_balance]">
          {megaCategories.map((cat) => (
            <div key={cat.slug} className="mb-6 break-inside-avoid">
              <Link
                to={`/courses?category=${cat.slug}`}
                onClick={onNavigate}
                className="group flex items-center gap-2 border-b border-line pb-2"
              >
                <span
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${cat.color} text-white`}
                >
                  <Icon name={cat.icon} className="h-4 w-4" />
                </span>
                <h3 className="text-[13px] font-bold uppercase leading-tight tracking-wide text-ink transition-colors group-hover:text-primary">
                  {cat.name}
                </h3>
              </Link>
              <ul className="mt-1.5 space-y-0.5">
                {cat.courses.map((c) => (
                  <li key={c.path}>
                    <Link
                      to={c.path}
                      onClick={onNavigate}
                      className="block rounded-md px-2 py-1.5 text-[13px] leading-snug text-muted transition-colors hover:bg-primary/5 hover:text-primary"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="flex items-center justify-between gap-4 border-t border-line bg-surface px-6 py-4 lg:px-7">
        <p className="text-sm text-muted">
          <span className="font-bold text-ink">{totalCourses}+</span> career-focused programs across{' '}
          <span className="font-bold text-ink">{megaCategories.length}</span> streams
        </p>
        <Link to="/courses" onClick={onNavigate} className="btn-primary py-3">
          See All Courses
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}
