import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle2, Send } from 'lucide-react';
import SEO, { buildBreadcrumbSchema } from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Accordion from '../components/common/Accordion';
import CTABanner from '../components/sections/CTABanner';
import { admissionSteps, requiredDocuments, generalFaqs } from '../data/content';
import { categories } from '../data/courses';
import { makeFormHandler } from '../utils/submitForm';
import { fadeUp, stagger, reveal } from '../utils/animations';

export default function Admissions() {
  const [status, setStatus] = useState('idle');
  const handleSubmit = makeFormHandler({
    subject: 'New Admission Application — SEMT Website',
    onStatus: setStatus,
  });

  return (
    <>
      <SEO
        title="Admissions"
        description="Apply for admission at SEMT. Simple admission process, clear eligibility, required documents and a quick online application form."
        path="/admissions"
        schema={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Admissions', path: '/admissions' },
        ])}
      />
      <PageHero
        title="Admissions Open 2026"
        subtitle="Take the first step toward a future-ready career. Our admission process is simple, transparent and student-friendly."
        breadcrumb={[{ name: 'Admissions', path: '/admissions' }]}
      />

      {/* Process */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="How to Apply"
            title="Our Simple Admission Process"
            highlight="Admission Process"
            description="From enquiry to enrollment in five easy steps."
          />
          <motion.div variants={stagger} {...reveal} className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {admissionSteps.map((s) => (
              <motion.div key={s.step} variants={fadeUp} className="card-base relative p-6 hover:shadow-card">
                <span className="text-4xl font-extrabold text-primary/15">{s.step}</span>
                <h3 className="mt-2 font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Eligibility + Documents */}
      <section className="section bg-white">
        <div className="container grid gap-8 lg:grid-cols-2">
          <motion.div {...reveal} variants={fadeUp} className="card-base p-8">
            <h3 className="text-xl font-bold text-ink">Eligibility Criteria</h3>
            <ul className="mt-5 space-y-3 text-muted">
              {[
                'Minimum 10th / 10+2 pass for most diploma programs',
                'No prior experience required for beginner courses',
                'Advance diploma programs require 10+2 completion',
                'Open to students, working professionals & career switchers',
                'Basic interest and aptitude in the chosen field',
              ].map((e) => (
                <li key={e} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  {e}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...reveal} variants={fadeUp} className="card-base p-8">
            <h3 className="text-xl font-bold text-ink">Required Documents</h3>
            <ul className="mt-5 space-y-3 text-muted">
              {requiredDocuments.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Application form */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="Apply Online"
              title="Application Form"
              highlight="Application Form"
              description="Fill in your details and our admissions team will reach out to guide you."
            />
            <motion.div {...reveal} variants={fadeUp} className="card-base mt-10 p-7 md:p-10">
              {status === 'success' ? (
                <div className="rounded-xl bg-green-50 p-8 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
                  <h3 className="mt-4 text-xl font-bold text-ink">Application Submitted!</h3>
                  <p className="mt-2 text-muted">
                    Thank you for applying to SEMT. Our admissions team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input required name="Name" placeholder="Enter your name" className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">Phone Number *</label>
                    <input required name="Phone" type="tel" placeholder="+91" className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">Email Address *</label>
                    <input required name="Email" type="email" placeholder="you@example.com" className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">Qualification *</label>
                    <input required name="Qualification" placeholder="e.g. 12th Pass" className="form-input" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="form-label">Interested Course / Category *</label>
                    <select required name="Course" className="form-input" defaultValue="">
                      <option value="" disabled>Select a category</option>
                      {categories.map((c) => (
                        <option key={c.slug} value={c.label}>{c.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="form-label">Message</label>
                    <textarea name="Message" rows="4" placeholder="Tell us about your goals..." className="form-input resize-none" />
                  </div>
                  {status === 'error' && (
                    <p className="sm:col-span-2 rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-600">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  )}
                  <div className="sm:col-span-2">
                    <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center">
                      <Send className="h-4 w-4" />
                      {status === 'sending' ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-white">
        <div className="container max-w-3xl">
          <SectionHeading
            eyebrow="Got Questions?"
            title="Admission FAQs"
            highlight="FAQs"
          />
          <div className="mt-10">
            <Accordion items={generalFaqs} />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
