import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Icon from '../common/Icon';
import { features } from '../../data/content';
import { fadeUp, stagger, reveal } from '../../utils/animations';

export default function Features() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          variants={stagger}
          {...reveal}
          className="grid gap-6 md:grid-cols-3"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className="card-base group p-7 hover:shadow-card hover:-translate-y-1.5"
            >
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Icon name={f.icon} className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-ink">{f.title}</h3>
              <p className="mt-3 text-muted leading-relaxed">{f.description}</p>
              <Link
                to="/about"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
