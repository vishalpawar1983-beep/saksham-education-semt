import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import SEO from '../components/common/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" noindex />
      <section className="grid min-h-[80vh] place-items-center bg-surface px-4 pt-24">
        <div className="text-center">
          <p className="text-[8rem] font-extrabold leading-none gradient-text">404</p>
          <h1 className="mt-2 text-3xl font-bold text-ink">Page Not Found</h1>
          <p className="mx-auto mt-3 max-w-md text-muted">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn-primary">
              <Home className="h-5 w-5" />
              Back to Home
            </Link>
            <Link to="/courses" className="btn-outline">
              <Search className="h-5 w-5" />
              Browse Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
