import { motion } from 'framer-motion';
import StatCounter from '../common/StatCounter';
import { counters } from '../../data/content';
import { stagger, reveal } from '../../utils/animations';

export default function CounterSection() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          variants={stagger}
          {...reveal}
          className="grid grid-cols-2 gap-6 rounded-3xl border border-line bg-white p-8 shadow-soft md:grid-cols-4 md:p-12"
        >
          {counters.map((c) => (
            <StatCounter key={c.label} {...c} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
