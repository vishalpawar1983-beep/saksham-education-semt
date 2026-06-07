import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import CountUp from 'react-countup';
import Button from '../common/Button';
import SectionHeading from '../common/SectionHeading';
import { aboutStats } from '../../data/content';
import { slideInLeft, slideInRight, reveal } from '../../utils/animations';

const points = [
  'Career-oriented, practical training programs',
  'Experienced and dedicated faculty',
  'Recognised diploma & certificate courses',
];

export default function AboutSection() {
  return (
    <section className="section bg-white">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        {/* Image composition */}
        <motion.div {...reveal} variants={slideInLeft} className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
              alt="SEMT students"
              loading="lazy"
              className="h-64 w-full rounded-2xl object-cover shadow-soft"
            />
            <img
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80"
              alt="SEMT classroom"
              loading="lazy"
              className="mt-8 h-64 w-full rounded-2xl object-cover shadow-soft"
            />
          </div>

          {/* floating stat */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl bg-primary px-6 py-4 text-white shadow-glow"
          >
            <span className="text-4xl font-extrabold">
              <CountUp end={16} duration={2} enableScrollSpy scrollSpyOnce />+
            </span>
            <span className="text-sm font-medium leading-tight">
              Years of <br /> Excellence
            </span>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div {...reveal} variants={slideInRight}>
          <SectionHeading
            align="left"
            eyebrow="About SEMT"
            title="The Place Where You Can Achieve Your Career Goals"
            highlight="Career Goals"
            className="md:mx-0"
          />
          <p className="mt-5 text-muted leading-relaxed">
            Saksham Education (SEMT) is a career-focused skill development institute based in
            Mohali, Punjab. We empower students with industry-relevant skills through hands-on
            training, professional certifications and dedicated career guidance.
          </p>

          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-ink">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {aboutStats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-line bg-surface p-4 text-center">
                <p className="text-2xl font-extrabold text-primary">
                  <CountUp end={s.value} duration={2.2} enableScrollSpy scrollSpyOnce separator="," />
                  {s.suffix}
                </p>
                <p className="mt-1 text-xs text-muted">{s.label}</p>
              </div>
            ))}
          </div>

          <Button to="/about" className="mt-8">
            Read More <ArrowRight className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
