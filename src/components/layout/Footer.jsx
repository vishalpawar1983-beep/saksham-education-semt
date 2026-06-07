import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  ArrowUpRight,
} from 'lucide-react';
import Logo from '../common/Logo';
import { site, navLinks } from '../../data/site';
import { categories } from '../../data/courses';
import { submitForm } from '../../utils/submitForm';

const socials = [
  { icon: Facebook, href: site.social.facebook, label: 'Facebook' },
  { icon: Instagram, href: site.social.instagram, label: 'Instagram' },
  { icon: Linkedin, href: site.social.linkedin, label: 'LinkedIn' },
  { icon: Youtube, href: site.social.youtube, label: 'YouTube' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const topCategories = categories.filter((c) => c.featuredHome).slice(0, 6);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      await submitForm({ Email: email }, 'Newsletter Subscription — SEMT Website');
    } catch {
      /* show success regardless to keep footer UX simple */
    }
    setDone(true);
    setEmail('');
    setTimeout(() => setDone(false), 3500);
  };

  return (
    <footer className="relative overflow-hidden bg-ink text-white/70">
      <span className="blur-blob -left-20 -top-20 h-72 w-72 bg-primary/30" />
      <span className="blur-blob right-0 bottom-0 h-72 w-72 bg-secondary/20" />

      <div className="container relative z-10 pt-16 pb-10">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* About */}
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              SEMT is a career-focused skill development institute offering industry-relevant
              diploma, certification and professional development programs in Mohali, Punjab.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white transition-colors hover:bg-primary"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="mb-5 text-base font-bold text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="inline-flex items-center gap-1 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="lg:col-span-3">
            <h4 className="mb-5 text-base font-bold text-white">Top Courses</h4>
            <ul className="space-y-3 text-sm">
              {topCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/courses?category=${cat.slug}`}
                    className="inline-flex items-center gap-1 transition-colors hover:text-white"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + newsletter */}
          <div className="lg:col-span-3">
            <h4 className="mb-5 text-base font-bold text-white">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <span>{site.address.full}</span>
              </li>
              <li>
                <a href={`tel:${site.phoneRaw}`} className="flex items-center gap-3 hover:text-white">
                  <Phone className="h-5 w-5 text-secondary" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-white">
                  <Mail className="h-5 w-5 text-secondary" />
                  {site.email}
                </a>
              </li>
            </ul>

            <form onSubmit={handleSubmit} className="mt-6">
              <p className="mb-2 text-sm font-semibold text-white">Subscribe to our newsletter</p>
              <div className="flex items-center gap-2 rounded-full bg-white/10 p-1.5 pl-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-white transition-colors hover:bg-primary-600"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              {done && <p className="mt-2 text-xs text-accent">Thanks for subscribing! 🎉</p>}
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm md:flex-row">
          <p>© {new Date().getFullYear()} {site.fullName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-white">Privacy Policy</Link>
            <Link to="/about" className="hover:text-white">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
