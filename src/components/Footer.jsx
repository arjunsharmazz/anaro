import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="relative z-10 mx-auto mt-16 w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
      <div className="glass-panel rounded-[2rem] px-6 py-8 text-sm text-white/70 md:flex md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold text-white">Anaro</p>
          <p className="mt-2 max-w-md text-white/60">
            Step into style with precision-crafted essentials, deep tonal palettes, and a premium digital storefront.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-6 md:mt-0">
          <Link to="/" className="transition hover:text-white">Home</Link>
          <Link to="/shop" className="transition hover:text-white">Shop</Link>
          <Link to="/cart" className="transition hover:text-white">Cart</Link>
          <Link to="/checkout" className="transition hover:text-white">Checkout</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;