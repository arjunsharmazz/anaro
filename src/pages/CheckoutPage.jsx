import { CreditCard, Landmark, MapPinHouse } from 'lucide-react';
import Button from '../components/Button';
import PageShell from '../components/PageShell';
import { useCartStore } from '../hooks/useCartStore';

const paymentOptions = [
  { id: 'card', label: 'Card', icon: CreditCard },
  { id: 'upi', label: 'UPI', icon: Landmark },
  { id: 'cod', label: 'COD', icon: MapPinHouse },
];

function CheckoutPage() {
  const cart = useCartStore((state) => state.cart);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <PageShell>
      <section className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">Checkout</p>
          <h1 className="mt-3 font-display text-4xl text-white">Secure luxury checkout</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none" placeholder="First name" />
              <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none" placeholder="Last name" />
              <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none sm:col-span-2" placeholder="Email address" />
              <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none sm:col-span-2" placeholder="Street address" />
              <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none" placeholder="City" />
              <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none" placeholder="Postal code" />
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Payment method</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {paymentOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <label key={option.id} className="flex cursor-pointer items-center gap-3 rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/75 transition hover:border-crimson-500">
                      <input type="radio" name="payment" defaultChecked={option.id === 'card'} className="accent-crimson-500" />
                      <Icon size={18} className="text-sand-500" />
                      {option.label}
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="mt-8">
              <Button className="w-full">Place order</Button>
            </div>
          </div>

          <aside className="glass-panel h-fit rounded-[2rem] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Order summary</p>
            <div className="mt-6 space-y-4">
              {cart.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} className="flex items-center gap-3 rounded-[1.5rem] bg-white/5 p-3">
                  <img src={item.image} alt={item.title} className="h-16 w-16 rounded-2xl object-cover" loading="lazy" />
                  <div className="flex-1">
                    <p className="font-medium text-white">{item.title}</p>
                    <p className="text-sm text-white/60">{item.quantity} x ${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-white/10 pt-4 text-sm text-white/68">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span className="text-white">${subtotal.toFixed(2)}</span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span>Shipping</span>
                <span className="text-white">Free</span>
              </div>
              <div className="mt-4 flex items-center justify-between text-base">
                <span>Total</span>
                <span className="font-semibold text-white">${subtotal.toFixed(2)}</span>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}

export default CheckoutPage;