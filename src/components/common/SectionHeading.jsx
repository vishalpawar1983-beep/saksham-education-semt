import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { fadeUp, reveal } from '../../utils/animations';

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
  className = '',
}) {
  const alignment =
    align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto';

  // Allow highlighting a substring of the title in brand colour
  const renderTitle = () => {
    if (!highlight) return title;
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="gradient-text">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      {...reveal}
      variants={fadeUp}
      className={`flex flex-col gap-4 max-w-2xl ${alignment} ${className}`}
    >
      {eyebrow && (
        <span className="eyebrow">
          <Sparkles className="h-4 w-4 text-secondary" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.15] text-balance">
        {renderTitle()}
      </h2>
      {description && (
        <p className="text-muted text-base md:text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
