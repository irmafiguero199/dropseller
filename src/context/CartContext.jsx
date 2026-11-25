import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { PRODUCTS } from "../data/products.js";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("dropsellerr_cart")) || [];
    } catch {
      return [];
    }
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("dropsellerr_cart", JSON.stringify(items));
  }, [items]);

  const add = (slug) => {
    setItems((prev) => {
      const found = prev.find((i) => i.slug === slug);
      if (found) return prev.map((i) => (i.slug === slug ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { slug, qty: 1 }];
    });
    setOpen(true);
  };

  const remove = (slug) => setItems((prev) => prev.filter((i) => i.slug !== slug));
  const setQty = (slug, qty) =>
    setItems((prev) =>
      qty <= 0 ? prev.filter((i) => i.slug !== slug) : prev.map((i) => (i.slug === slug ? { ...i, qty } : i))
    );
  const clear = () => setItems([]);

  const detailed = useMemo(
    () =>
      items
        .map((i) => ({ ...i, product: PRODUCTS.find((p) => p.slug === i.slug) }))
        .filter((i) => i.product),
    [items]
  );

  const total = detailed.reduce((sum, i) => sum + i.product.price * i.qty, 0);
  const count = detailed.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider value={{ items: detailed, add, remove, setQty, clear, total, count, open, setOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
