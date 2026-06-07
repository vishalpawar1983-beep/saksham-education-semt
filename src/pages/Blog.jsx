import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import SEO, { buildBreadcrumbSchema } from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import BlogCard from '../components/common/BlogCard';
import { blogs } from '../data/blogs';
import { stagger } from '../utils/animations';

export default function Blog() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const categoryList = useMemo(
    () => ['All', ...new Set(blogs.map((b) => b.category))],
    []
  );

  const filtered = blogs.filter((b) => {
    const matchSearch =
      !search ||
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === 'All' || b.category === category;
    return matchSearch && matchCat;
  });

  return (
    <>
      <SEO
        title="Blog"
        description="Career guidance, skill development tips and education insights from the SEMT team."
        path="/blog"
        schema={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ])}
      />
      <PageHero
        title="Insights & Articles"
        subtitle="Career guidance, skill-development tips and stories to help you grow."
        breadcrumb={[{ name: 'Blog', path: '/blog' }]}
      />

      <section className="section">
        <div className="container">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {categoryList.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    category === c
                      ? 'bg-primary text-white'
                      : 'bg-white text-ink border border-line hover:border-primary'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:max-w-xs">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-full border border-line bg-white py-3 pl-12 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="py-16 text-center text-muted">No articles found.</p>
          ) : (
            <motion.div
              key={category + search}
              variants={stagger}
              initial="hidden"
              animate="show"
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
