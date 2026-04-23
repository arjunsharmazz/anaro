import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function CategoryCard({ category, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-[2rem]"
    >
      <Link
        to={`/shop?category=${encodeURIComponent(category.title)}`}
        className="glass-panel relative block min-h-[280px] overflow-hidden rounded-[2rem] p-6"
      >
        <img
          src={category.image}
          alt={category.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
        <div className="relative z-10 mt-28 flex h-full flex-col justify-end">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/70">Collection</p>
          <h3 className="font-display text-3xl font-semibold text-white">{category.title}</h3>
          <p className="mt-2 max-w-xs text-sm text-white/75">{category.subtitle}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default CategoryCard;