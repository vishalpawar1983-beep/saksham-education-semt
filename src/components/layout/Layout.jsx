import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import WhatsAppButton from '../common/WhatsAppButton';
import LeadPopup from '../common/LeadPopup';
import { pageTransition } from '../../utils/animations';

function Loader() {
  return (
    <div className="grid min-h-[60vh] place-items-center">
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
    </div>
  );
}

export default function Layout() {
  const location = useLocation();
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Suspense fallback={<Loader />}>
          <motion.div key={location.pathname} {...pageTransition}>
            <Outlet />
          </motion.div>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
      <LeadPopup />
    </div>
  );
}
