import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';
import Icon from '../common/Icon';
import { heroFloatingCards } from '../../data/content';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface pt-32 pb-20 md:pt-40 md:pb-28">
      {/* decorative background */}
      <span className="blur-blob -left-32 top-20 h-96 w-96 bg-primary/30" />
      <span className="blur-blob right-0 top-40 h-80 w-80 bg-secondary/20" />
      <span className="blur-blob left-1/3 bottom-0 h-72 w-72 bg-accent/30" />

      <div className="container relative z-10 grid items-center gap-12 lg:grid-cols-2">
        {/* Left content */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary"
          >
            <Sparkles className="h-4 w-4 text-secondary" />
            Career Focused Skill Development Institute
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-extrabold leading-[1.1] text-ink md:text-5xl lg:text-6xl text-balance"
          >
            Build Your <span className="gradient-text">Future</span> With Industry Relevant{' '}
            <span className="gradient-text">Skills</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            SEMT provides career-oriented diploma, certification, IT, management, teacher training
            and professional development programs designed to enhance employability.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <Button to="/courses">
              Explore Courses
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button to="/admissions" variant="outline">
              Apply Now
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[20, 11, 29, 53].map((n) => (
                <img
                  key={n}
                  src={`https://i.pravatar.cc/100?img=${n}`}
                  alt="Student"
                  loading="lazy"
                  className="h-11 w-11 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-0.5 text-sm text-muted">
                <span className="font-bold text-ink">5000+</span> students trained
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-[2.5rem] bg-gradient-to-br from-primary to-secondary opacity-90" />
          <div className="absolute right-6 top-10 -z-10 h-40 w-40 rounded-full bg-accent/40 blur-2xl" />
          <img
            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80"
            alt="SEMT student"
            className="relative w-full rounded-[2.5rem] object-cover shadow-float"
          />

          {/* Floating cards */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-6 top-12 flex items-center gap-3 rounded-2xl bg-white p-3.5 pr-5 shadow-card"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <Icon name={heroFloatingCards[0].icon} className="h-6 w-6" />
            </span>
            <div>
              <p className="text-base font-extrabold text-ink">{heroFloatingCards[0].value}</p>
              <p className="text-xs text-muted">{heroFloatingCards[0].label}</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-4 top-1/3 flex items-center gap-3 rounded-2xl bg-white p-3.5 pr-5 shadow-card"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary/10 text-secondary">
              <CheckCircle2 className="h-6 w-6" />
            </span>
            <div>
              <p className="text-sm font-extrabold text-ink">Placement</p>
              <p className="text-xs text-muted">Assistance</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -left-4 bottom-10 flex items-center gap-3 rounded-2xl bg-white p-3.5 pr-5 shadow-card"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/30 text-secondary">
              <Icon name="Award" className="h-6 w-6" />
            </span>
            <div>
              <p className="text-sm font-extrabold text-ink">Industry</p>
              <p className="text-xs text-muted">Certificates</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            className="absolute -right-6 bottom-16 flex items-center gap-3 rounded-2xl bg-white p-3.5 pr-5 shadow-card"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <Icon name="Users" className="h-6 w-6" />
            </span>
            <div>
              <p className="text-sm font-extrabold text-ink">Experienced</p>
              <p className="text-xs text-muted">Trainers</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
