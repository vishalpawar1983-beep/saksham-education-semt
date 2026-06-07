import { Link } from 'react-router-dom';

export default function Logo({ variant = 'dark', onClick }) {
  // The wordmark has dark text, so on dark backgrounds (footer) we place it on
  // a white pill to keep it legible.
  const wrap =
    variant === 'light' ? 'bg-white rounded-xl px-3 py-2 shadow-soft' : '';
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Saksham Education (SEMT) home"
      className={`inline-flex items-center ${wrap}`}
    >
      <img
        src="/saksham-logo1.png"
        alt="Saksham Edutech & Management Technology (SEMT)"
        className="h-10 w-auto md:h-11"
      />
    </Link>
  );
}
