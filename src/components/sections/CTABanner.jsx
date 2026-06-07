import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import Button from '../common/Button';
import { site } from '../../data/site';
import { fadeUp, reveal } from '../../utils/animations';

export default function CTABanner() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          {...reveal}
          variants={fadeUp}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-700 via-primary to-primary-600 px-8 py-14 md:px-16 md:py-20"
        >
          <span className="blur-blob -left-10 top-0 h-60 w-60 bg-secondary/40" />
          <span className="blur-blob right-0 bottom-0 h-72 w-72 bg-accent/30" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-7 text-center">
            <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white">
              Admissions Open
            </span>
            <h2 className="max-w-3xl text-3xl font-extrabold text-white md:text-5xl text-balance">
              Start Your Career Journey With SEMT Today
            </h2>
            <p className="max-w-xl text-white/80">
              Join thousands of students who transformed their future with industry-relevant skills.
              Your dream career is just one step away.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button to="/admissions" variant="secondary">
                Apply Now <ArrowRight className="h-5 w-5" />
              </Button>
              <a
                href={`tel:${site.phoneRaw}`}
                className="btn border-2 border-white/40 px-7 py-3.5 text-white hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
