import { Link } from "react-router-dom";
import { X, Trash2, ShoppingCart, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import { getT } from "../data/i18n.js";

export default function CartDrawer() {
  const { items, total, open, setOpen, setQty, remove } = useCart();
  const { lang } = useLang();
  const t = getT(lang);

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 bg-gray-900/40" onClick={() => setOpen(false)} aria-hidden="true" />
      )}
      <aside
        className={`fixed top-0 end-0 z-50 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full rtl:-translate-x-full rtl:translate-x-0"
        } ${open ? "" : "pointer-events-none"}`}
        aria-label={t.common.cart}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100">
          <h2 className="font-bold text-lg text-gray-900 flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-brand-600" />
            {t.common.cart}
          </h2>
          <button onClick={() => setOpen(false)} className="p-2 rounded-lg hover:bg-gray-100" aria-label="Fermer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4" style={{ maxHeight: "calc(100vh - 190px)" }}>
          {items.length === 0 ? (
            <p className="text-center text-gray-500 py-12">{t.common.emptyCart}</p>
          ) : (
            items.map(({ product, qty }) => (
              <div key={product.slug} className="flex gap-3 items-start">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 text-sm leading-snug">{product.name[lang]}</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {t.common.currency}{product.price.toFixed(2)} — {product.duration[lang]}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      onClick={() => setQty(product.slug, qty - 1)}
                      className="w-7 h-7 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm"
                    >
                      −
                    </button>
                    <span className="text-sm font-medium w-5 text-center tabular-nums">{qty}</span>
                    <button
                      onClick={() => setQty(product.slug, qty + 1)}
                      className="w-7 h-7 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-end">
                  <p className="font-semibold text-gray-900 text-sm tabular-nums">
                    {t.common.currency}{(product.price * qty).toFixed(2)}
                  </p>
                  <button
                    onClick={() => remove(product.slug)}
                    className="mt-1 p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                    aria-label={t.common.remove}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-gray-100 px-5 py-4 space-y-3">
            <div className="flex items-center justify-between font-bold text-gray-900">
              <span>{t.common.total}</span>
              <span className="tabular-nums">{t.common.currency}{total.toFixed(2)}</span>
            </div>
            <Link
              to="/commander"
              onClick={() => setOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors"
            >
              {t.common.checkout}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
