import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import BlogCard from '../common/BlogCard';
import Button from '../common/Button';
import { latestBlogs } from '../../data/blogs';
import { stagger, reveal } from '../../utils/animations';

export default function BlogSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Our Blog"
            title="Recent Articles & Career Insights"
            highlight="Career Insights"
            description="Tips, guides and stories to help you make smarter career decisions."
            className="md:mx-0"
          />
          <Button to="/blog" variant="outline" className="shrink-0">
            View All Articles
          </Button>
        </div>

        <motion.div
          variants={stagger}
          {...reveal}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {latestBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
