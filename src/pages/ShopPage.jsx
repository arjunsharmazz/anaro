import { SlidersHorizontal } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import PageShell from '../components/PageShell';
import { SkeletonCard } from '../components/Loader';
import { categories, products } from '../data/products';
import { formatCurrency } from '../utils/currency';

const sortOptions = {
  trending: (a, b) => Number(b.trending) - Number(a.trending) || b.rating - a.rating,
  low: (a, b) => a.price - b.price,
  high: (a, b) => b.price - a.price,
};

function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedSizes, setSelectedSizes] = useState([]);
  const maxPrice = Math.max(...products.map((product) => product.price));
  const minPrice = Math.min(...products.map((product) => product.price));
  const [price, setPrice] = useState(maxPrice);
  const [sortBy, setSortBy] = useState('trending');

  const activeCategory = searchParams.get('category') || 'All';

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch = activeCategory === 'All' || product.category === activeCategory;
      const priceMatch = product.price <= price;
      const sizeMatch = selectedSizes.length === 0 || selectedSizes.some((size) => product.sizes.includes(size));
      return categoryMatch && priceMatch && sizeMatch;
    });

    return [...filtered].sort(sortOptions[sortBy]);
  }, [activeCategory, price, selectedSizes, sortBy]);

  const sizes = ['S', 'M', 'L', 'XL'];

  return (
    <PageShell>
      <section className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Shop Anaro</p>
            <h1 className="mt-3 font-display text-4xl text-white">Curated luxury layers</h1>
          </div>
          <div className="glass-panel flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/70">
            <SlidersHorizontal size={16} /> {filteredProducts.length} pieces available
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <aside className="glass-panel h-fit rounded-[2rem] p-5">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Category</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['All', ...categories.map((category) => category.title)].map((categoryName) => (
                  <button
                    key={categoryName}
                    type="button"
                    onClick={() => setSearchParams(categoryName === 'All' ? {} : { category: categoryName })}
                    className={[
                      'rounded-full px-4 py-2 text-sm transition',
                      activeCategory === categoryName ? 'bg-crimson-700 text-white' : 'bg-white/5 text-white/70',
                    ].join(' ')}
                  >
                    {categoryName}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Price range</p>
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={price}
                onChange={(event) => setPrice(Number(event.target.value))}
                className="mt-4 w-full accent-crimson-500"
              />
              <p className="mt-2 text-sm text-white/70">Up to {formatCurrency(price)}</p>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Sizes</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {sizes.map((size) => {
                  const active = selectedSizes.includes(size);
                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() =>
                        setSelectedSizes((current) =>
                          active ? current.filter((item) => item !== size) : [...current, size]
                        )
                      }
                      className={[
                        'h-11 w-11 rounded-2xl text-sm transition',
                        active ? 'bg-white text-black' : 'bg-white/5 text-white/70',
                      ].join(' ')}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Sort</p>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="mt-4 w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white outline-none"
              >
                <option value="trending" className="bg-obsidian">Trending</option>
                <option value="low" className="bg-obsidian">Price: Low to High</option>
                <option value="high" className="bg-obsidian">Price: High to Low</option>
              </select>
            </div>
          </aside>

          <div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.length === 0
                ? Array.from({ length: 3 }).map((_, index) => <SkeletonCard key={index} />)
                : filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export default ShopPage;