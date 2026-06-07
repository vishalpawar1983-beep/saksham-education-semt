import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import CourseCard from '../common/CourseCard';
import Button from '../common/Button';
import { featuredCourses } from '../../data/courses';
import { stagger, reveal } from '../../utils/animations';

export default function PopularCourses() {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Popular Programs"
            title="Most Popular Courses at SEMT"
            highlight="Popular Courses"
            description="Hand-picked, career-focused programs that our students love the most."
            className="md:mx-0"
          />
          <Button to="/courses" variant="outline" className="shrink-0">
            View All Courses
          </Button>
        </div>

        <motion.div
          variants={stagger}
          {...reveal}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
