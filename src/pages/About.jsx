import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle2 } from 'lucide-react';
import SEO, { buildBreadcrumbSchema } from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Icon from '../components/common/Icon';
import CounterSection from '../components/sections/CounterSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTABanner from '../components/sections/CTABanner';
import { milestones, timeline } from '../data/content';
import { fadeUp, slideInLeft, slideInRight, stagger, reveal } from '../utils/animations';

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Saksham Education (SEMT) — a career-focused skill development institute in Mohali, Punjab with 16+ years of excellence and 5000+ students trained."
        path="/about"
        schema={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
      <PageHero
        title="About Saksham Education"
        subtitle="Empowering students with industry-relevant skills, professional certifications and dedicated career guidance since 2010."
        breadcrumb={[{ name: 'About', path: '/about' }]}
      />

      {/* Overview */}
      <section className="section">
        <div className="container grid items-center gap-14 lg:grid-cols-2">
          <motion.div {...reveal} variants={slideInLeft} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80" alt="Campus" loading="lazy" className="h-72 w-full rounded-2xl object-cover shadow-soft" />
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80" alt="Students" loading="lazy" className="mt-10 h-72 w-full rounded-2xl object-cover shadow-soft" />
            </div>
          </motion.div>
          <motion.div {...reveal} variants={slideInRight}>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title="A Career-First Skill Development Institute"
              highlight="Skill Development"
              className="md:mx-0"
            />
            <p className="mt-5 text-muted leading-relaxed">
              Saksham Education (SEMT) was founded with a simple belief — that practical, job-ready
              skills are the surest path to a successful career. Located in the heart of Mohali,
              Punjab, we offer 100+ career-focused programs across IT, management, design, teacher
              training, healthcare and vocational streams.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Over 16+ years, we have trained more than 5,000 students, combining hands-on training
              with industry-recognised certifications and end-to-end career support.
            </p>
            <ul className="mt-6 space-y-3">
              {['Industry-aligned, practical curriculum', 'Experienced & dedicated faculty', 'Placement assistance & career counselling'].map((p) => (
                <li key={p} className="flex items-center gap-3 text-ink">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-white">
        <div className="container grid gap-6 md:grid-cols-2">
          {[
            { icon: Target, title: 'Our Mission', text: 'To empower every learner with practical, employable skills and the confidence to build a successful, future-ready career — regardless of their background.' },
            { icon: Eye, title: 'Our Vision', text: 'To be the most trusted skill development institute in the region, recognised for transforming students into industry-ready professionals.' },
          ].map((b, i) => (
            <motion.div
              key={b.title}
              {...reveal}
              variants={i === 0 ? slideInLeft : slideInRight}
              className="card-base p-8"
            >
              <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
                <b.icon className="h-7 w-7" />
              </span>
              <h3 className="text-2xl font-bold text-ink">{b.title}</h3>
              <p className="mt-3 text-muted leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CounterSection />

      {/* Achievements */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Our Achievements"
            title="Milestones That Define Us"
            highlight="Milestones"
            description="Recognition earned through years of dedication to student success."
          />
          <motion.div variants={stagger} {...reveal} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m) => (
              <motion.div key={m.title} variants={fadeUp} className="card-base p-6 text-center hover:shadow-card hover:-translate-y-1.5">
                <span className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-secondary/15 text-secondary">
                  <Icon name={m.icon} className="h-7 w-7" />
                </span>
                <h3 className="font-bold text-ink">{m.title}</h3>
                <p className="mt-2 text-sm text-muted">{m.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our Journey"
            title="The SEMT Story Over the Years"
            highlight="SEMT Story"
          />
          <div className="relative mt-14 mx-auto max-w-2xl">
            <span className="absolute left-3 top-0 h-full w-0.5 bg-line" />
            <div className="space-y-8">
              {timeline.map((t) => (
                <motion.div
                  key={t.year}
                  {...reveal}
                  variants={slideInRight}
                  className="relative pl-12"
                >
                  <span className="absolute left-0 top-1.5 z-10 grid h-7 w-7 place-items-center rounded-full bg-primary text-[10px] font-bold text-white ring-4 ring-surface">
                    {t.year.slice(-2)}
                  </span>
                  <div className="card-base p-5">
                    <span className="text-sm font-bold text-secondary">{t.year}</span>
                    <h3 className="mt-1 font-bold text-ink">{t.title}</h3>
                    <p className="mt-1 text-sm text-muted">{t.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
