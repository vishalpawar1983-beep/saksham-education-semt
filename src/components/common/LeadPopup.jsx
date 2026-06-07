import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Send, CheckCircle2, PhoneCall, Gift, BadgeCheck, Clock } from 'lucide-react';
import { categories } from '../../data/courses';
import { site } from '../../data/site';
import { submitForm } from '../../utils/submitForm';

const STORAGE_KEY = 'semt_lead_popup_seen';
const SCROLL_TRIGGER = 60; // percent

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const sent = status === 'success';

  const dismissForSession = useCallback(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* ignore storage errors */
    }
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    dismissForSession();
  }, [dismissForSession]);

  // Trigger on 60% scroll, once per session.
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === '1';
    } catch {
      seen = false;
    }
    if (seen) return undefined;

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const pct = (window.scrollY / scrollable) * 100;
      if (pct >= SCROLL_TRIGGER) {
        setOpen(true);
        dismissForSession();
        window.removeEventListener('scroll', onScroll);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [dismissForSession]);

  // Esc to close + lock body scroll while open.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = Object.fromEntries(new FormData(e.target).entries());
    setStatus('sending');
    try {
      await submitForm(fields, 'New Lead — Scholarship Popup — SEMT Website');
      setStatus('success');
      setTimeout(() => setOpen(false), 2800);
    } catch {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
          className="fixed inset-0 z-[120] grid place-items-center bg-ink/60 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
            className="relative grid w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-float md:grid-cols-2"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-3 top-3 z-30 grid h-10 w-10 place-items-center rounded-full bg-ink text-white shadow-card ring-2 ring-white transition-transform hover:scale-110 hover:bg-primary"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left: offer panel */}
            <div className="relative hidden flex-col justify-center overflow-hidden bg-gradient-to-br from-primary-700 via-primary to-secondary p-8 text-white md:flex">
              <span className="blur-blob -left-10 top-0 h-48 w-48 bg-accent/40" />
              <span className="blur-blob -right-10 bottom-0 h-48 w-48 bg-white/10" />
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80"
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-15"
              />
              <div className="relative z-10">
                <span className="inline-flex animate-pulse items-center gap-2 rounded-full bg-accent px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-ink">
                  <Gift className="h-4 w-4" />
                  Admissions Open 2026
                </span>

                <h3 className="mt-5 text-3xl font-extrabold leading-tight">
                  Get Up To{' '}
                  <span className="rounded-lg bg-accent px-2 text-ink">30% Scholarship</span> + Free
                  Demo Class
                </h3>
                <p className="mt-3 text-sm text-white/85">
                  Book a free career counselling session today and grab your scholarship before seats
                  fill up.
                </p>

                {/* Social proof */}
                <div className="mt-6 grid grid-cols-3 gap-3 border-y border-white/20 py-4 text-center">
                  {[
                    { v: '5000+', l: 'Students' },
                    { v: '4.8★', l: 'Google Rating' },
                    { v: '95%', l: 'Placement' },
                  ].map((s) => (
                    <div key={s.l}>
                      <p className="text-xl font-extrabold">{s.v}</p>
                      <p className="text-[11px] text-white/70">{s.l}</p>
                    </div>
                  ))}
                </div>

                <ul className="mt-5 space-y-2 text-sm">
                  {['100% practical training', 'Guaranteed placement assistance', 'Easy EMI & fee options'].map(
                    (t) => (
                      <li key={t} className="flex items-center gap-2">
                        <BadgeCheck className="h-5 w-5 shrink-0 text-accent" />
                        {t}
                      </li>
                    )
                  )}
                </ul>

                <p className="mt-5 flex items-center gap-2 text-xs font-semibold text-accent">
                  <Clock className="h-4 w-4" />
                  Hurry! Limited scholarship seats this month.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="p-7 sm:p-9">
              {sent ? (
                <div className="grid h-full place-items-center py-10 text-center">
                  <div>
                    <CheckCircle2 className="mx-auto h-14 w-14 text-green-600" />
                    <h3 className="mt-4 text-xl font-bold text-ink">Thank You!</h3>
                    <p className="mt-2 text-muted">
                      Our counsellor will call you back shortly on the number provided.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-secondary md:hidden">
                    <Gift className="h-3.5 w-3.5" /> 30% Scholarship + Free Demo
                  </span>
                  <p className="mb-1 mt-3 hidden text-sm font-semibold uppercase tracking-wide text-secondary md:mt-0 md:block">
                    Claim Your Offer
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-ink">Book Your Free Counselling</h3>
                  <p className="mt-2 text-sm text-muted">
                    Fill in your details and our expert will call you back within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                    <input required name="Name" placeholder="Full Name" className="form-input" />
                    <input required name="Phone" type="tel" placeholder="Phone Number" className="form-input" />
                    <input name="Email" type="email" placeholder="Email Address" className="form-input" />
                    <select required name="Course" defaultValue="" className="form-input">
                      <option value="" disabled>
                        Select a course / category
                      </option>
                      {categories.map((c) => (
                        <option key={c.slug} value={c.label}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                    {status === 'error' && (
                      <p className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600">
                        Something went wrong. Please try again.
                      </p>
                    )}
                    <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center">
                      <Send className="h-4 w-4" />
                      {status === 'sending' ? 'Submitting...' : 'Claim My Scholarship'}
                    </button>
                  </form>

                  <a
                    href={`tel:${site.phoneRaw}`}
                    className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-ink hover:text-primary"
                  >
                    <PhoneCall className="h-4 w-4 text-primary" />
                    Or call us at {site.phone}
                  </a>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
