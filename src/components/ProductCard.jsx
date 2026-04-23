import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../hooks/useCartStore';
import { formatCurrency } from '../utils/currency';
import Button from './Button';

function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const wishlist = useCartStore((state) => state.wishlist);
  const toggleWishlist = useCartStore((state) => state.toggleWishlist);
  const inWishlist = wishlist.includes(product.id);

  return (
    <motion.article
      layout
      whileHover={{ y: -10 }}
      className="glass-panel group overflow-hidden rounded-[2rem] p-4 shadow-[0_14px_40px_rgba(0,0,0,0.18)]"
    >
      <div className="relative overflow-hidden rounded-[1.5rem]">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
          />
        </Link>
        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/25 p-2 text-white backdrop-blur-sm transition hover:scale-105"
          aria-label="Toggle wishlist"
        >
          <Heart size={18} fill={inWishlist ? 'currentColor' : 'none'} className={inWishlist ? 'text-crimson-500' : ''} />
        </button>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-white/60">
        <span>{product.category}</span>
        <span className="flex items-center gap-1">
          <Star size={14} className="text-sand-500" fill="currentColor" />
          {product.rating}
        </span>
      </div>
      <Link to={`/product/${product.id}`} className="mt-3 block font-display text-xl font-semibold text-white">
        {product.title}
      </Link>
      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-lg font-semibold text-white">{formatCurrency(product.price)}</p>
        <Button
          type="button"
          onClick={() => addToCart(product)}
          className="px-4 py-2 text-xs"
        >
          <span className="flex items-center gap-2">
            <ShoppingBag size={16} /> Quick Add
          </span>
        </Button>
      </div>
    </motion.article>
  );
}

export default ProductCard;