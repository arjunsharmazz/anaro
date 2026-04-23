import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import CategoryCard from '../components/CategoryCard';
import PageShell from '../components/PageShell';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../data/products';

function HomePage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 400], [0, 120]);
  const trendingProducts = products.filter((product) => product.trending);

  return (
    <PageShell>
      <section className="relative mx-auto mt-6 min-h-[88vh] max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="noise-overlay glass-panel relative overflow-hidden rounded-[2.5rem] px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
          <motion.img
            style={{ y: heroY }}
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80"
            alt="Anaro fashion hero"
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(9,9,9,0.92)_20%,rgba(9,9,9,0.34)_55%,rgba(139,0,0,0.45)_100%)]" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-3xl py-10 lg:py-20">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/70">
                <Sparkles size={14} className="text-sand-500" /> Anaro capsule 2026
              </p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-display text-5xl font-semibold leading-none text-white sm:text-6xl lg:text-8xl"
              >
                Upgrade Your <span className="text-gradient">Style</span>
              </motion.h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
                Step into style with precision-tailored essentials, deep red gradients, and future-facing silhouettes built for elevated everyday luxury.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link to="/shop">
                  <Button>
                    <span className="flex items-center gap-2">
                      Shop Now <ArrowRight size={16} />
                    </span>
                  </Button>
                </Link>
                <a
                  href="#trending"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/75 transition hover:bg-white/10 hover:text-white"
                >
                  Explore Drops
                </a>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="glass-panel rounded-[2rem] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Signature promise</p>
                <p className="mt-4 font-display text-3xl text-white">Luxury minimalism with kinetic energy.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-panel rounded-[2rem] p-5">
                  <p className="text-3xl font-semibold text-white">48h</p>
                  <p className="mt-2 text-sm text-white/60">Priority dispatch on all premium drops</p>
                </div>
                <div className="glass-panel rounded-[2rem] p-5">
                  <p className="text-3xl font-semibold text-white">4.9</p>
                  <p className="mt-2 text-sm text-white/60">Average customer review on standout pieces</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Featured categories</p>
            <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">Designed for every movement</h2>
          </div>
          <Link to="/shop" className="text-sm uppercase tracking-[0.2em] text-white/60 transition hover:text-white">
            View all
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </section>

      <section id="trending" className="mx-auto mt-20 max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Trending now</p>
            <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">Future icons in rotation</h2>
          </div>
          <p className="max-w-sm text-sm text-white/60">A high-velocity edit of customer favorites with smart tailoring and statement texture.</p>
        </div>
        <div className="hide-scrollbar flex snap-x gap-5 overflow-x-auto pb-4">
          {trendingProducts.map((product) => (
            <div key={product.id} className="min-w-[290px] snap-start sm:min-w-[340px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

export default HomePage;