"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  slug: string;
  title: string;
  image: string;
  price: number;
  discount: number;
  quantity: number;
  color: {
    title: string;
    hex?: string;
  } |null;
}

interface CartState {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (id: string, colorTitle?: string) => void;
  updateQuantity: (id: string, quantity: number, colorTitle?: string) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, quantity = 1) => {
        const items = get().items;
        const existingIndex = items.findIndex(
          (item) =>
            item.id === product.id &&
            item.color?.title === product.color?.title
        );

        if (existingIndex > -1) {
          const updated = [...items];
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: updated[existingIndex].quantity + quantity,
          };
          set({ items: updated });
        } else {
          set({ items: [...items, { ...product, quantity }] });
        }
      },

      removeItem: (id, colorTitle) => {
        set({
          items: get().items.filter(
            (item) =>
              !(item.id === id && item.color?.title === colorTitle)
          ),
        });
      },

      updateQuantity: (id, quantity, colorTitle) => {
        if (quantity <= 0) {
          get().removeItem(id, colorTitle);
          return;
        }

        set({
          items: get().items.map((item) =>
            item.id === id && item.color?.title === colorTitle
              ? { ...item, quantity }
              : item
          ),
        });
      },

      clearCart: () => set({ items: [] }),

      totalItems: () =>
        get().items.reduce((sum, item) => sum + item.quantity, 0),

      totalPrice: () =>
        get().items.reduce((sum, item) => {
          const finalPrice = item.discount
            ? item.price * (1 - item.discount / 100)
            : item.price;
          return sum + finalPrice * item.quantity;
        }, 0),
    }),
    {
      name: "shopping-cart",
    }
  )
);