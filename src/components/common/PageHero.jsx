import { motion } from 'framer-motion';
import Breadcrumb from './Breadcrumb';

/**
 * Reusable inner-page hero banner with gradient background and breadcrumb.
 */
export default function PageHero({ title, subtitle, breadcrumb = [], children }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary to-primary-600 pt-36 pb-16 md:pt-44 md:pb-24">
      {/* decorative blobs */}
      <span className="blur-blob -left-20 top-10 h-72 w-72 bg-secondary/40" />
      <span className="blur-blob right-0 bottom-0 h-80 w-80 bg-accent/30" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
          backgroundSize: '32px 32px',
        }}
      />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <Breadcrumb items={breadcrumb} />
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg text-white/80 max-w-2xl leading-relaxed">{subtitle}</p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
