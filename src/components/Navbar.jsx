import { AnimatePresence, motion } from 'framer-motion';
import { Heart, Menu, MoonStar, ShoppingBag, SunMedium, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useCartStore } from '../hooks/useCartStore';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'Cart', path: '/cart' },
  { label: 'Checkout', path: '/checkout' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const cart = useCartStore((state) => state.cart);
  const wishlist = useCartStore((state) => state.wishlist);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header id="top" className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel rounded-[1.75rem] px-4 py-3 shadow-[0_14px_40px_rgba(0,0,0,0.18)]">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="font-display text-2xl font-semibold tracking-[0.2em] text-white">
              ANARO
            </Link>
            <nav className="hidden items-center gap-2 md:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    [
                      'rounded-full px-4 py-2 text-sm transition',
                      isActive ? 'bg-white/12 text-white' : 'text-white/70 hover:text-white',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="hidden items-center gap-2 md:flex">
              <button
                type="button"
                onClick={toggleTheme}
                className="rounded-full border border-white/10 p-3 text-white/80 transition hover:bg-white/10 hover:text-white"
                aria-label="Toggle theme"
              >
                {isDark ? <SunMedium size={18} /> : <MoonStar size={18} />}
              </button>
              <div className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-white/80">
                <Heart size={16} />
                <span>{wishlist.length}</span>
              </div>
              <Link
                to="/cart"
                className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/15"
              >
                <ShoppingBag size={16} />
                <span>{cartCount}</span>
              </Link>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="rounded-full border border-white/10 p-3 text-white md:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
          <AnimatePresence>
            {isOpen ? (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden md:hidden"
              >
                <div className="flex flex-col gap-2 pt-4">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        [
                          'rounded-2xl px-4 py-3 text-sm transition',
                          isActive ? 'bg-white/12 text-white' : 'text-white/70',
                        ].join(' ')
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/80"
                  >
                    <span>Theme</span>
                    {isDark ? <SunMedium size={18} /> : <MoonStar size={18} />}
                  </button>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

export default Navbar;