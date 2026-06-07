import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import Icon from './Icon';
import { fadeUp } from '../../utils/animations';

export default function StatCounter({ value, suffix = '', prefix = '', label, icon }) {
  return (
    <motion.div variants={fadeUp} className="text-center">
      {icon && (
        <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
          <Icon name={icon} className="h-7 w-7" />
        </div>
      )}
      <div className="text-4xl md:text-5xl font-extrabold text-ink">
        {prefix}
        <CountUp end={value} duration={2.5} enableScrollSpy scrollSpyOnce separator="," />
        {suffix}
      </div>
      <p className="mt-2 text-sm font-medium text-muted">{label}</p>
    </motion.div>
  );
}
