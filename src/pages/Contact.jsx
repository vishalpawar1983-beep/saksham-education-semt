import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import SEO, { localBusinessSchema, buildBreadcrumbSchema } from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import { site } from '../data/site';
import { makeFormHandler } from '../utils/submitForm';
import { fadeUp, slideInLeft, slideInRight, stagger, reveal } from '../utils/animations';

const contactCards = [
  { icon: Phone, title: 'Call Us', value: site.phone, href: `tel:${site.phoneRaw}` },
  { icon: Mail, title: 'Email Us', value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, title: 'Visit Us', value: `${site.address.line1}, ${site.address.line2}` },
  { icon: Clock, title: 'Working Hours', value: 'Mon – Sat: 9 AM – 7 PM' },
];

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const handleSubmit = makeFormHandler({
    subject: 'New Contact Enquiry — SEMT Website',
    onStatus: setStatus,
  });

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with SEMT. Visit our campus in SAS Nagar Mohali, call, email or send us a message — we are here to help."
        path="/contact"
        schema={[
          localBusinessSchema,
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
        ]}
      />
      <PageHero
        title="Get in Touch"
        subtitle="Have questions about our courses or admissions? We'd love to hear from you."
        breadcrumb={[{ name: 'Contact', path: '/contact' }]}
      />

      {/* Contact cards */}
      <section className="section">
        <div className="container">
          <motion.div variants={stagger} {...reveal} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((c) => {
              const Inner = (
                <>
                  <span className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <c.icon className="h-7 w-7" />
                  </span>
                  <h3 className="font-bold text-ink">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted">{c.value}</p>
                </>
              );
              return (
                <motion.div key={c.title} variants={fadeUp}>
                  {c.href ? (
                    <a href={c.href} className="card-base group flex h-full flex-col p-6 hover:shadow-card hover:-translate-y-1.5">
                      {Inner}
                    </a>
                  ) : (
                    <div className="card-base group flex h-full flex-col p-6 hover:shadow-card hover:-translate-y-1.5">
                      {Inner}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section pt-0">
        <div className="container grid gap-8 lg:grid-cols-2">
          <motion.div {...reveal} variants={slideInLeft} className="card-base p-7 md:p-9">
            <h2 className="text-2xl font-bold text-ink">Send Us a Message</h2>
            <p className="mt-2 text-muted">Fill out the form and we'll respond within 24 hours.</p>
            {status === 'success' ? (
              <div className="mt-6 rounded-xl bg-green-50 p-8 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
                <h3 className="mt-4 text-xl font-bold text-ink">Message Sent!</h3>
                <p className="mt-2 text-muted">Thank you for reaching out. We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="form-label">Name *</label>
                  <input required name="Name" placeholder="Your name" className="form-input" />
                </div>
                <div>
                  <label className="form-label">Phone *</label>
                  <input required name="Phone" type="tel" placeholder="+91" className="form-input" />
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label">Email *</label>
                  <input required name="Email" type="email" placeholder="you@example.com" className="form-input" />
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label">Subject</label>
                  <input name="Subject" placeholder="How can we help?" className="form-input" />
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label">Message *</label>
                  <textarea required name="Message" rows="4" placeholder="Your message..." className="form-input resize-none" />
                </div>
                {status === 'error' && (
                  <p className="sm:col-span-2 rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-600">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}
                <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row">
                  <button type="submit" disabled={status === 'sending'} className="btn-primary flex-1 justify-center">
                    <Send className="h-4 w-4" />
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex-1 justify-center"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </form>
            )}
          </motion.div>

          <motion.div {...reveal} variants={slideInRight} className="flex flex-col gap-6">
            <div className="card-base overflow-hidden">
              <iframe
                title="SEMT Location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  site.address.mapQuery
                )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full lg:h-full"
                style={{ border: 0 }}
              />
            </div>
            <div className="card-base bg-primary p-7 text-white">
              <h3 className="text-xl font-bold">Visit Our Campus</h3>
              <p className="mt-2 flex items-start gap-3 text-white/85">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                {site.address.full}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
