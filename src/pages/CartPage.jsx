import { Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import PageShell from '../components/PageShell';
import { useCartStore } from '../hooks/useCartStore';

function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <PageShell>
      <section className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">Cart</p>
          <h1 className="mt-3 font-display text-4xl text-white">Your selected pieces</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="space-y-4">
            {cart.length === 0 ? (
              <div className="glass-panel rounded-[2rem] p-8 text-center">
                <p className="font-display text-3xl text-white">Your cart is empty</p>
                <p className="mt-3 text-sm text-white/60">Curate your next look from the latest Anaro drop.</p>
                <Link to="/shop" className="mt-6 inline-block">
                  <Button>Discover the collection</Button>
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} className="glass-panel rounded-[2rem] p-4 sm:flex sm:items-center sm:gap-5">
                  <img src={item.image} alt={item.title} className="h-32 w-full rounded-[1.5rem] object-cover sm:w-28" loading="lazy" />
                  <div className="mt-4 flex-1 sm:mt-0">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-white/60">{item.category}</p>
                        <h2 className="mt-2 font-display text-2xl text-white">{item.title}</h2>
                        <p className="mt-2 text-sm text-white/60">Size {item.selectedSize}</p>
                      </div>
                      <p className="text-xl font-semibold text-white">${item.price}</p>
                    </div>
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2">
                        <button type="button" onClick={() => updateQuantity(item.id, item.selectedSize, -1)}>
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button type="button" onClick={() => updateQuantity(item.id, item.selectedSize, 1)}>
                          <Plus size={16} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                        className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
                      >
                        <Trash2 size={16} /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <aside className="glass-panel h-fit rounded-[2rem] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Summary</p>
            <h2 className="mt-3 font-display text-3xl text-white">Order preview</h2>
            <div className="mt-8 space-y-4 text-sm text-white/68">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span className="text-white">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Delivery</span>
                <span className="text-white">Free</span>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-4 text-base">
                <span>Total</span>
                <span className="font-semibold text-white">${subtotal.toFixed(2)}</span>
              </div>
            </div>
            <Link to="/checkout" className="mt-8 block">
              <Button className="w-full">Proceed to checkout</Button>
            </Link>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}

export default CartPage;