import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, X, ChevronLeft, ChevronRight, FilterX } from 'lucide-react';
import SEO, { buildBreadcrumbSchema } from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import CourseCard from '../components/common/CourseCard';
import { courses, categories, courseTypes, courseCountByCategory } from '../data/courses';
import { stagger } from '../utils/animations';

const PER_PAGE = 9;
const durations = ['3 Months', '6 Months', '12 Months'];

export default function Courses() {
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(params.get('category') || 'all');
  const [type, setType] = useState('all');
  const [duration, setDuration] = useState('all');
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  // keep state in sync if the URL ?category changes (e.g. from a card link)
  useEffect(() => {
    setCategory(params.get('category') || 'all');
  }, [params]);

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchSearch =
        !search ||
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.categoryName.toLowerCase().includes(search.toLowerCase());
      const matchCat = category === 'all' || c.category === category;
      const matchType = type === 'all' || c.type === type;
      const matchDur = duration === 'all' || c.duration === duration;
      return matchSearch && matchCat && matchType && matchDur;
    });
  }, [search, category, type, duration]);

  useEffect(() => setPage(1), [search, category, type, duration]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE) || 1;
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const updateCategory = (slug) => {
    setCategory(slug);
    const next = new URLSearchParams(params);
    if (slug === 'all') next.delete('category');
    else next.set('category', slug);
    setParams(next, { replace: true });
  };

  const resetFilters = () => {
    setSearch('');
    setType('all');
    setDuration('all');
    updateCategory('all');
  };

  const activeFilters = category !== 'all' || type !== 'all' || duration !== 'all' || search;

  return (
    <>
      <SEO
        title="Courses"
        description="Browse 100+ career-focused diploma and certificate courses at SEMT across IT, management, design, teacher training, healthcare and more."
        path="/courses"
        schema={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Courses', path: '/courses' },
        ])}
      />
      <PageHero
        title="Explore Our Courses"
        subtitle="100+ career-focused diploma and certificate programs designed to make you job-ready."
        breadcrumb={[{ name: 'Courses', path: '/courses' }]}
      />

      <section className="section">
        <div className="container">
          {/* Search + mobile filter toggle */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search courses..."
                className="w-full rounded-full border border-line bg-white py-3.5 pl-12 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="flex items-center gap-3">
              <p className="text-sm text-muted">
                <span className="font-bold text-ink">{filtered.length}</span> courses found
              </p>
              <button
                onClick={() => setShowFilters((v) => !v)}
                className="btn-outline px-4 py-2.5 lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </button>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            {/* Sidebar filters */}
            <aside
              className={`${
                showFilters ? 'block' : 'hidden'
              } lg:block space-y-6 lg:sticky lg:top-28 lg:self-start`}
            >
              <div className="flex items-center justify-between lg:hidden">
                <h3 className="font-bold text-ink">Filters</h3>
                <button onClick={() => setShowFilters(false)} aria-label="Close filters">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <FilterGroup title="Category">
                <FilterPill active={category === 'all'} onClick={() => updateCategory('all')}>
                  All Categories
                </FilterPill>
                {categories.map((c) => (
                  <FilterPill
                    key={c.slug}
                    active={category === c.slug}
                    onClick={() => updateCategory(c.slug)}
                  >
                    {c.label}
                    <span className="ml-auto text-xs opacity-70">{courseCountByCategory[c.slug]}</span>
                  </FilterPill>
                ))}
              </FilterGroup>

              <FilterGroup title="Program Type">
                <FilterPill active={type === 'all'} onClick={() => setType('all')}>
                  All Types
                </FilterPill>
                {courseTypes.map((t) => (
                  <FilterPill key={t} active={type === t} onClick={() => setType(t)}>
                    {t}
                  </FilterPill>
                ))}
              </FilterGroup>

              <FilterGroup title="Duration">
                <FilterPill active={duration === 'all'} onClick={() => setDuration('all')}>
                  Any Duration
                </FilterPill>
                {durations.map((d) => (
                  <FilterPill key={d} active={duration === d} onClick={() => setDuration(d)}>
                    {d}
                  </FilterPill>
                ))}
              </FilterGroup>

              {activeFilters && (
                <button onClick={resetFilters} className="btn-ghost w-full justify-center">
                  <FilterX className="h-4 w-4" />
                  Clear All Filters
                </button>
              )}
            </aside>

            {/* Results */}
            <div>
              {paged.length === 0 ? (
                <div className="card-base grid place-items-center p-16 text-center">
                  <FilterX className="mb-4 h-12 w-12 text-muted" />
                  <h3 className="text-xl font-bold text-ink">No courses found</h3>
                  <p className="mt-2 text-muted">Try adjusting your filters or search term.</p>
                  <button onClick={resetFilters} className="btn-primary mt-6">
                    Reset Filters
                  </button>
                </div>
              ) : (
                <motion.div
                  key={page + category + type + duration + search}
                  variants={stagger}
                  initial="hidden"
                  animate="show"
                  className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
                >
                  {paged.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </motion.div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white disabled:opacity-40"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPage(i + 1)}
                      className={`grid h-10 w-10 place-items-center rounded-xl border text-sm font-semibold transition-colors ${
                        page === i + 1
                          ? 'border-primary bg-primary text-white'
                          : 'border-line bg-white text-ink hover:border-primary'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white disabled:opacity-40"
                    aria-label="Next page"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div className="card-base p-5">
      <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-ink">{title}</h4>
      <div className="flex flex-col gap-1.5">{children}</div>
    </div>
  );
}

function FilterPill({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
        active ? 'bg-primary text-white' : 'text-muted hover:bg-surface hover:text-ink'
      }`}
    >
      {children}
    </button>
  );
}
