import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Clock,
  Users,
  Star,
  BarChart3,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Send,
  Phone,
} from 'lucide-react';
import SEO, { buildBreadcrumbSchema, buildCourseSchema } from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Accordion from '../components/common/Accordion';
import CourseCard from '../components/common/CourseCard';
import Button from '../components/common/Button';
import { getCourseBySlug, getRelatedCourses } from '../data/courses';
import { site } from '../data/site';
import { makeFormHandler } from '../utils/submitForm';
import { fadeUp, stagger, reveal } from '../utils/animations';

export default function CourseDetail() {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);
  const [status, setStatus] = useState('idle');

  if (!course) return <Navigate to="/courses" replace />;

  const handleSubmit = makeFormHandler({
    subject: `Course Inquiry: ${course.title} — SEMT Website`,
    extra: { Course: course.title },
    onStatus: setStatus,
  });

  const related = getRelatedCourses(course);

  const quickFacts = [
    { icon: Clock, label: 'Duration', value: course.duration },
    { icon: BarChart3, label: 'Level', value: course.level },
    { icon: Users, label: 'Students', value: `${course.students}+` },
    { icon: Star, label: 'Rating', value: course.rating },
  ];

  return (
    <>
      <SEO
        title={course.title}
        description={course.shortDescription}
        path={`/courses/${course.slug}`}
        image={course.image}
        type="article"
        schema={[
          buildCourseSchema(course),
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Courses', path: '/courses' },
            { name: course.title, path: `/courses/${course.slug}` },
          ]),
        ]}
      />

      <PageHero
        title={course.title}
        subtitle={course.shortDescription}
        breadcrumb={[
          { name: 'Courses', path: '/courses' },
          { name: course.title },
        ]}
      >
        <div className="flex flex-wrap gap-4">
          {quickFacts.map((f) => (
            <div
              key={f.label}
              className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur"
            >
              <f.icon className="h-4 w-4 text-accent" />
              <span className="text-white/70">{f.label}:</span>
              <span className="font-semibold">{f.value}</span>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1fr_360px]">
          {/* Main content */}
          <div className="space-y-12">
            <img
              src={course.image}
              alt={course.title}
              className="h-72 w-full rounded-2xl object-cover shadow-soft md:h-96"
            />

            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold text-ink">Course Overview</h2>
              <p className="mt-4 text-muted leading-relaxed">{course.overview}</p>
            </div>

            {/* Curriculum */}
            <div>
              <h2 className="text-2xl font-bold text-ink">Curriculum</h2>
              <motion.div variants={stagger} {...reveal} className="mt-6 space-y-3">
                {course.curriculum.map((m) => (
                  <motion.div key={m.module} variants={fadeUp} className="card-base p-5">
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                        {m.module.replace('Module ', '')}
                      </span>
                      <h3 className="font-bold text-ink">{m.title}</h3>
                    </div>
                    <ul className="mt-3 grid gap-1.5 pl-12 text-sm text-muted">
                      {m.topics.map((t) => (
                        <li key={t} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-secondary" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Eligibility & Duration */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="card-base p-6">
                <span className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-bold text-ink">Eligibility</h3>
                <p className="mt-2 text-sm text-muted">{course.eligibility}</p>
                <ul className="mt-3 space-y-1.5 text-sm text-muted">
                  {course.eligibilityList.map((e) => (
                    <li key={e} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-secondary" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-base p-6">
                <span className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-secondary/10 text-secondary">
                  <Clock className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-bold text-ink">Duration & Mode</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" /> Duration: {course.duration}</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" /> Level: {course.level}</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" /> Mode: Classroom + Practical Labs</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" /> Certificate on completion</li>
                </ul>
              </div>
            </div>

            {/* Career opportunities */}
            <div>
              <h2 className="text-2xl font-bold text-ink">Career Opportunities</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {course.careerOpportunities.map((role) => (
                  <div key={role} className="card-base flex items-center gap-3 p-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Briefcase className="h-5 w-5" />
                    </span>
                    <span className="font-medium text-ink">{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-ink">Frequently Asked Questions</h2>
              <Accordion items={course.faqs} />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="card-base p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-ink">Course Inquiry</h3>
                <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                  {course.type}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">
                Get fee details &amp; a free callback from our counsellors.
              </p>
              {status === 'success' ? (
                <div className="mt-4 rounded-xl bg-green-50 p-4 text-center text-sm font-medium text-green-700">
                  ✅ Thank you! Our team will contact you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                  <input required name="Name" placeholder="Your Name" className="form-input" />
                  <input required name="Phone" type="tel" placeholder="Phone Number" className="form-input" />
                  <input required name="Email" type="email" placeholder="Email Address" className="form-input" />
                  <textarea name="Message" rows="3" placeholder="Message (optional)" className="form-input resize-none" />
                  {status === 'error' && (
                    <p className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600">
                      Something went wrong. Please try again.
                    </p>
                  )}
                  <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center">
                    <Send className="h-4 w-4" />
                    {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
                  </button>
                </form>
              )}

              <a
                href={`tel:${site.phoneRaw}`}
                className="btn-outline mt-3 w-full justify-center"
              >
                <Phone className="h-4 w-4" />
                Call {site.phone}
              </a>
            </div>

            <div className="card-base bg-primary p-6 text-white">
              <h3 className="text-lg font-bold">Need Guidance?</h3>
              <p className="mt-2 text-sm text-white/80">
                Talk to our counsellors to find the perfect program for your career goals.
              </p>
              <Button to="/contact" variant="secondary" className="mt-4 w-full justify-center">
                Talk to a Counsellor
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {/* Related courses */}
      {related.length > 0 && (
        <section className="section bg-white">
          <div className="container">
            <SectionHeading
              eyebrow="Keep Exploring"
              title="Related Courses"
              highlight="Related Courses"
            />
            <motion.div variants={stagger} {...reveal} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((c) => (
                <CourseCard key={c.id} course={c} />
              ))}
            </motion.div>
            <div className="mt-10 text-center">
              <Link to="/courses" className="btn-outline">Browse All Courses</Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
