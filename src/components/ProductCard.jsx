import { Link } from "react-router-dom";
import { Clock, ShieldCheck, ShoppingCart, Zap } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import { getT } from "../data/i18n.js";
import { getCategory } from "../data/products.js";

export default function ProductCard({ product }) {
  const { add } = useCart();
  const { lang } = useLang();
  const t = getT(lang);
  const cat = getCategory(product.category);

  return (
    <div className="group relative flex flex-col rounded-2xl border border-gray-100 bg-white p-5 hover:border-brand-500 hover:shadow-lg hover:shadow-brand-600/5 transition-all">
      {product.popular && (
        <span className="absolute top-4 end-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-600 text-white text-xs font-semibold">
          <Zap className="w-3 h-3" fill="currentColor" />
          {t.common.popular}
        </span>
      )}
      <span className="text-xs font-medium text-brand-600">{cat?.name[lang]}</span>
      <Link to={`/produit/${product.slug}`} className="mt-1.5 block">
        <h3 className="font-semibold text-gray-900 leading-snug group-hover:text-brand-600 transition-colors">
          {product.name[lang]}
        </h3>
      </Link>
      <p className="mt-1.5 text-sm text-gray-500 leading-relaxed line-clamp-2">{product.desc[lang]}</p>

      <div className="mt-3 space-y-1.5 text-xs text-gray-500">
        <p className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-gray-400" />
          {t.common.duration}: <span className="font-medium text-gray-700">{product.duration[lang]}</span>
        </p>
        <p className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-gray-400" />
          {t.common.replacementWarranty}
        </p>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
        <div>
          {product.oldPrice && (
            <span className="block text-xs text-gray-400 line-through">{t.common.currency}{product.oldPrice.toFixed(2)}</span>
          )}
          <span className="text-xl font-bold text-gray-900 tabular-nums">
            {t.common.currency}{product.price.toFixed(2)}
          </span>
        </div>
        <button
          onClick={() => add(product.slug)}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-colors"
        >
          <ShoppingCart className="w-4 h-4" />
          {t.common.addToCart}
        </button>
      </div>
    </div>
  );
}
