import toast from 'react-hot-toast';
import { create } from 'zustand';
import { products } from '../data/products';

const findProduct = (productId) => products.find((product) => product.id === productId);

export const useCartStore = create((set) => ({
  cart: [],
  wishlist: [],
  addToCart: (product, size = product.sizes?.[0] || 'M') =>
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.id === product.id && item.selectedSize === size
      );

      if (existingItem) {
        toast.success(`${product.title} quantity updated`);
        return {
          cart: state.cart.map((item) =>
            item.id === product.id && item.selectedSize === size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      toast.success(`${product.title} added to cart`);
      return {
        cart: [...state.cart, { ...product, quantity: 1, selectedSize: size }],
      };
    }),
  updateQuantity: (productId, selectedSize, delta) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId && item.selectedSize === selectedSize
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
          : item
      ),
    })),
  removeFromCart: (productId, selectedSize) =>
    set((state) => ({
      cart: state.cart.filter(
        (item) => !(item.id === productId && item.selectedSize === selectedSize)
      ),
    })),
  toggleWishlist: (productId) =>
    set((state) => ({
      wishlist: state.wishlist.includes(productId)
        ? state.wishlist.filter((id) => id !== productId)
        : [...state.wishlist, productId],
    })),
  clearCart: () => set({ cart: [] }),
}));