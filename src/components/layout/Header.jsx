import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import Logo from '../common/Logo';
import Button from '../common/Button';
import TopBar from './TopBar';
import CoursesMegaMenu from './CoursesMegaMenu';
import { navLinks } from '../../data/site';
import { categories, courseCountByCategory } from '../../data/courses';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const closeTimer = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMegaOpen(false);
    setMobileCoursesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Hover handlers with a small delay so the gap between trigger and panel
  // doesn't accidentally close the mega menu.
  const openMega = () => {
    clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const scheduleCloseMega = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 150);
  };

  const linkClass = ({ isActive }) =>
    `relative text-sm font-semibold transition-colors link-underline ${
      isActive ? 'text-primary after:w-full' : 'text-ink hover:text-primary'
    }`;

  const allCategories = categories;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <TopBar />
      <div
        className={`transition-all duration-300 ${
          scrolled ? 'bg-white/95 shadow-soft backdrop-blur' : 'bg-white/80 backdrop-blur'
        }`}
      >
        <nav className="container relative flex items-center justify-between py-3.5">
          <Logo />

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) =>
              link.name === 'Courses' ? (
                <li
                  key={link.path}
                  onMouseEnter={openMega}
                  onMouseLeave={scheduleCloseMega}
                >
                  <NavLink to={link.path} className={linkClass}>
                    <span className="inline-flex items-center gap-1">
                      {link.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${megaOpen ? 'rotate-180' : ''}`}
                      />
                    </span>
                  </NavLink>
                </li>
              ) : (
                <li key={link.path}>
                  <NavLink to={link.path} className={linkClass} end={link.path === '/'}>
                    {link.name}
                  </NavLink>
                </li>
              )
            )}
          </ul>

          <div className="flex items-center gap-3">
            <Button to="/admissions" className="hidden sm:inline-flex">
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </Button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white text-ink lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Desktop mega menu */}
          <AnimatePresence>
            {megaOpen && (
              <div
                onMouseEnter={openMega}
                onMouseLeave={scheduleCloseMega}
                className="absolute left-1/2 top-full hidden w-[min(1240px,calc(100vw-2rem))] -translate-x-1/2 pt-3 lg:block"
              >
                <CoursesMegaMenu onNavigate={() => setMegaOpen(false)} />
              </div>
            )}
          </AnimatePresence>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[82%] max-w-sm flex-col gap-1 overflow-y-auto bg-white p-6 shadow-float lg:hidden"
            >
              <div className="mb-4 flex items-center justify-between">
                <Logo />
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-line"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {navLinks.map((link) =>
                link.name === 'Courses' ? (
                  <div key={link.path}>
                    <button
                      onClick={() => setMobileCoursesOpen((v) => !v)}
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-semibold text-ink hover:bg-surface"
                    >
                      Courses
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${mobileCoursesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {mobileCoursesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-3 mt-1 flex flex-col gap-0.5 border-l border-line pl-3">
                            <Link
                              to="/courses"
                              className="rounded-lg px-3 py-2 text-sm font-semibold text-primary hover:bg-primary/5"
                            >
                              All Courses
                            </Link>
                            {allCategories.map((c) => (
                              <Link
                                key={c.slug}
                                to={`/courses?category=${c.slug}`}
                                className="flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface hover:text-primary"
                              >
                                <span className="leading-tight">{c.name}</span>
                                <span className="shrink-0 text-xs opacity-60">
                                  {courseCountByCategory[c.slug]}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-3 font-semibold transition-colors ${
                        isActive ? 'bg-primary/10 text-primary' : 'text-ink hover:bg-surface'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                )
              )}

              <Button to="/admissions" className="mt-4 w-full">
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
