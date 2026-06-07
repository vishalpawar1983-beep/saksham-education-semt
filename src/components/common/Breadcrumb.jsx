import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm flex-wrap">
      <Link to="/" className="text-white/80 hover:text-white inline-flex items-center gap-1">
        <Home className="h-4 w-4" />
        Home
      </Link>
      {items.map((item, i) => (
        <span key={item.path || item.name} className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4 text-white/50" />
          {i === items.length - 1 || !item.path ? (
            <span className="text-white font-medium">{item.name}</span>
          ) : (
            <Link to={item.path} className="text-white/80 hover:text-white">
              {item.name}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
