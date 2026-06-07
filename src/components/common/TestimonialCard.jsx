import { Star, Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="card-base flex h-full flex-col gap-5 p-7">
      <div className="flex items-center justify-between">
        <Quote className="h-9 w-9 text-primary/20" />
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < testimonial.rating ? 'fill-accent text-accent' : 'text-line'
              }`}
            />
          ))}
        </div>
      </div>
      <p className="flex-1 text-ink/80 leading-relaxed">“{testimonial.text}”</p>
      <div className="flex items-center gap-3 border-t border-line pt-5">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          loading="lazy"
          className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20"
        />
        <div>
          <p className="font-bold text-ink">{testimonial.name}</p>
          <p className="text-sm text-muted">{testimonial.course}</p>
        </div>
      </div>
    </div>
  );
}
