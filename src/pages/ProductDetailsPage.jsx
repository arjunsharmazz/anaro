import { Star, Truck } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button';
import PageShell from '../components/PageShell';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useCartStore } from '../hooks/useCartStore';

const reviews = [
  { name: 'Mira', comment: 'The finish feels expensive and the fit is precise.', rating: 5 },
  { name: 'Aarav', comment: 'Packaging and quality both feel premium.', rating: 5 },
  { name: 'Noah', comment: 'Excellent shape retention and standout styling.', rating: 4 },
];

function ProductDetailsPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id)) || products[0];
  const relatedProducts = useMemo(
    () => products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3),
    [product.category, product.id]
  );
  const [selectedImage, setSelectedImage] = useState(product.gallery?.[0] || product.image);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'M');
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <PageShell>
      <section className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-panel rounded-[2.5rem] p-5">
            <div className="overflow-hidden rounded-[2rem]">
              <img src={selectedImage} alt={product.title} className="h-[520px] w-full object-cover" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {product.gallery.map((image) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={[
                    'overflow-hidden rounded-[1.5rem] border transition',
                    selectedImage === image ? 'border-crimson-500' : 'border-white/10',
                  ].join(' ')}
                >
                  <img src={image} alt={product.title} className="h-28 w-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-[2.5rem] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">{product.category}</p>
            <h1 className="mt-3 font-display text-4xl text-white">{product.title}</h1>
            <div className="mt-4 flex items-center gap-4">
              <p className="text-3xl font-semibold text-white">${product.price}</p>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1 text-sm text-white/70">
                <Star size={14} fill="currentColor" className="text-sand-500" /> {product.rating}
              </span>
            </div>
            <p className="mt-6 text-base leading-7 text-white/72">{product.description}</p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Select size</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={[
                      'h-12 w-12 rounded-2xl border text-sm transition',
                      selectedSize === size
                        ? 'border-crimson-500 bg-crimson-700 text-white'
                        : 'border-white/10 text-white/70',
                    ].join(' ')}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button onClick={() => addToCart(product, selectedSize)} className="sm:flex-1">
                Add to Cart
              </Button>
              <div className="glass-panel flex items-center gap-3 rounded-2xl px-5 py-3 text-sm text-white/70 sm:flex-1">
                <Truck size={18} className="text-sand-500" /> Express dispatch in 48 hours
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-display text-2xl text-white">Reviews</h2>
                <span className="text-sm text-white/60">Static preview</span>
              </div>
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.name} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-white">{review.name}</p>
                      <p className="text-sm text-white/60">{review.rating}.0 / 5</p>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white/68">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Related products</p>
              <h2 className="mt-3 font-display text-3xl text-white">Continue the look</h2>
            </div>
            <Link to="/shop" className="text-sm uppercase tracking-[0.18em] text-white/60 transition hover:text-white">
              Browse shop
            </Link>
          </div>
          <div className="hide-scrollbar flex gap-5 overflow-x-auto pb-4">
            {relatedProducts.map((item) => (
              <div key={item.id} className="min-w-[300px] flex-1">
                <ProductCard product={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export default ProductDetailsPage;