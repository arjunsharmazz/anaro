import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';

const HomePage = lazy(() => import('./pages/HomePage'));
const ShopPage = lazy(() => import('./pages/ShopPage'));
const ProductDetailsPage = lazy(() => import('./pages/ProductDetailsPage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-obsidian text-white transition-colors duration-300">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,0,0,0.24),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(139,94,60,0.18),_transparent_26%)]" />
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<Loader fullScreen label="Loading Anaro" />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;