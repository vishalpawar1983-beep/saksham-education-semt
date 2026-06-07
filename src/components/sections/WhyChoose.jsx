import { motion } from 'framer-motion';
import Icon from '../common/Icon';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { whyChoose } from '../../data/content';
import { slideInLeft, slideInRight, stagger, fadeUp, reveal } from '../../utils/animations';

export default function WhyChoose() {
  return (
    <section className="section bg-white">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        {/* Content */}
        <motion.div {...reveal} variants={slideInLeft}>
          <SectionHeading
            align="left"
            eyebrow="Why Choose Us"
            title="Our Commitment to Excellence, Learn, Grow & Succeed"
            highlight="Excellence"
            className="md:mx-0"
          />
          <p className="mt-5 text-muted leading-relaxed">
            SEMT is dedicated to building careers, not just delivering courses. Here is why
            thousands of students choose us to launch their professional journey.
          </p>

          <motion.div variants={stagger} className="mt-8 grid gap-5 sm:grid-cols-2">
            {whyChoose.map((w) => (
              <motion.div key={w.title} variants={fadeUp} className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon name={w.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-bold text-ink">{w.title}</h3>
                  <p className="mt-1 text-sm text-muted">{w.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <Button to="/admissions" className="mt-9">
            Get Started Today
          </Button>
        </motion.div>

        {/* Image composition */}
        <motion.div {...reveal} variants={slideInRight} className="relative">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
            alt="SEMT learning environment"
            loading="lazy"
            className="w-full rounded-[2rem] object-cover shadow-float"
          />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-5 bottom-10 max-w-[200px] rounded-2xl bg-white p-4 shadow-card"
          >
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary/15 text-secondary">
                <Icon name="ThumbsUp" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-lg font-extrabold text-ink">95%</p>
                <p className="text-xs text-muted">Success Rate</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
