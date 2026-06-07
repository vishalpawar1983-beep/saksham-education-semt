import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import CategoryCard from '../common/CategoryCard';
import Button from '../common/Button';
import { categories, courseCountByCategory } from '../../data/courses';
import { stagger, reveal } from '../../utils/animations';

export default function Categories() {
  const featured = categories.filter((c) => c.featuredHome);
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="Explore Categories"
          title="Browse Our Popular Course Categories"
          highlight="Course Categories"
          description="From IT and management to design, teaching and healthcare — discover career-focused programs across 20+ streams."
        />

        <motion.div
          variants={stagger}
          {...reveal}
          className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4"
        >
          {featured.map((cat) => (
            <CategoryCard
              key={cat.slug}
              category={cat}
              count={courseCountByCategory[cat.slug]}
            />
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Button to="/courses" variant="outline">
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
}
