import { create } from 'zustand';
import { products } from './data';

export interface CartItem {
  productId: number;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addToCart: (productId: number, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getItemCount: () => number;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  addToCart: (productId, quantity = 1) => set((state) => {
    const existingItem = state.items.find(item => item.productId === productId);
    if (existingItem) {
      return {
        items: state.items.map(item => 
          item.productId === productId 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      };
    }
    return { items: [...state.items, { productId, quantity }] };
  }),
  removeFromCart: (productId) => set((state) => ({
    items: state.items.filter(item => item.productId !== productId)
  })),
  updateQuantity: (productId, quantity) => set((state) => ({
    items: state.items.map(item => 
      item.productId === productId 
        ? { ...item, quantity: Math.max(0, quantity) }
        : item
    ).filter(item => item.quantity > 0)
  })),
  clearCart: () => set({ items: [] }),
  getCartTotal: () => {
    const state = get();
    return state.items.reduce((total, item) => {
      const product = products.find(p => p.id === item.productId);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  },
  getItemCount: () => {
    const state = get();
    return state.items.reduce((count, item) => count + item.quantity, 0);
  }
}));