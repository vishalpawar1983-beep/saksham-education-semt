import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarDays, User, Clock, Tag, ArrowLeft } from 'lucide-react';
import SEO, { buildBreadcrumbSchema } from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import BlogCard from '../components/common/BlogCard';
import { getBlogBySlug, blogs } from '../data/blogs';
import { fadeUp, stagger, reveal } from '../utils/animations';

const formatDate = (d) =>
  new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  if (!blog) return <Navigate to="/blog" replace />;

  const related = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  return (
    <>
      <SEO
        title={blog.title}
        description={blog.excerpt}
        path={`/blog/${blog.slug}`}
        image={blog.image}
        type="article"
        schema={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: blog.title, path: `/blog/${blog.slug}` },
        ])}
      />
      <PageHero
        title={blog.title}
        breadcrumb={[
          { name: 'Blog', path: '/blog' },
          { name: blog.category },
        ]}
      >
        <div className="flex flex-wrap items-center gap-5 text-sm text-white/80">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-accent" />
            {formatDate(blog.date)}
          </span>
          <span className="inline-flex items-center gap-2">
            <User className="h-4 w-4 text-accent" />
            {blog.author}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-accent" />
            {blog.readTime}
          </span>
        </div>
      </PageHero>

      <article className="section">
        <div className="container max-w-3xl">
          <motion.img
            {...reveal}
            variants={fadeUp}
            src={blog.image}
            alt={blog.title}
            className="mb-10 h-72 w-full rounded-2xl object-cover shadow-soft md:h-96"
          />
          <div className="prose-content space-y-5 text-lg leading-relaxed text-ink/80">
            {blog.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <Tag className="h-4 w-4 text-primary" />
            {blog.tags.map((t) => (
              <span key={t} className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                {t}
              </span>
            ))}
          </div>

          <Link to="/blog" className="btn-outline mt-10">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </article>

      <section className="section bg-white">
        <div className="container">
          <h2 className="mb-10 text-2xl font-bold text-ink">Related Articles</h2>
          <motion.div variants={stagger} {...reveal} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((b) => (
              <BlogCard key={b.id} blog={b} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
