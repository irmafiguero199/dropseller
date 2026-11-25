import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Check, Clock, MessageCircle, ShieldCheck, ShoppingCart, Zap } from "lucide-react";
import ProductCard from "../components/ProductCard.jsx";
import { useCart } from "../context/CartContext.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import { getT } from "../data/i18n.js";
import { getProduct, PRODUCTS } from "../data/products.js";
import { STORE, waLink } from "../data/store.js";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProduct(slug);
  const { add } = useCart();
  const { lang } = useLang();
  const t = getT(lang);

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          {lang === "fr" ? "Produit introuvable" : "المنتج غير موجود"}
        </h1>
        <Link to="/catalogue" className="mt-4 inline-block text-brand-600 font-semibold">
          {t.common.continueShopping}
        </Link>
      </div>
    );
  }

  const related = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);
  const waMsg = lang === "fr"
    ? `Bonjour, je souhaite commander : ${product.name.fr} (${product.duration.fr}) — ${product.price.toFixed(2)} USD.`
    : `مرحبا، أريد طلب: ${product.name.ar} (${product.duration.ar}) — ${product.price.toFixed(2)} دولار.`;

  return (
    <>
      <Helmet>
        <title>{product.name.fr} — Dropsellerr</title>
        <link rel="canonical" href={`${STORE.domain}/produit/${product.slug}`} />
        <meta name="description" content={product.desc.fr} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link to="/catalogue" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 mb-8">
          <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
          {t.common.back}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            {product.popular && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-600 text-white text-xs font-semibold mb-4">
                <Zap className="w-3 h-3" fill="currentColor" />
                {t.common.popular}
              </span>
            )}
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name[lang]}</h1>
            <p className="mt-4 text-gray-500 leading-relaxed">{product.desc[lang]}</p>

            <ul className="mt-6 space-y-2.5">
              {product.features.map((f) => (
                <li key={f.fr} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-brand-600 mt-0.5 shrink-0" />
                  {f[lang]}
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
                <Clock className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-gray-900 uppercase tracking-wide">{t.common.delivery}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{product.delivery[lang]}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
                <ShieldCheck className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-gray-900 uppercase tracking-wide">{t.common.warranty}</p>
                  <p className="text-sm text-gray-500 mt-0.5">
                    {lang === "fr"
                      ? "Remplacement garanti pendant toute la durée de l'abonnement en cas de problème d'accès."
                      : "استبدال مضمون طوال مدة الاشتراك في حال أي مشكل في الدخول."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="lg:sticky lg:top-24 p-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="flex items-baseline gap-3">
                {product.oldPrice && (
                  <span className="text-lg text-gray-400 line-through tabular-nums">
                    {t.common.currency}{product.oldPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-4xl font-bold text-gray-900 tabular-nums">
                  {t.common.currency}{product.price.toFixed(2)}
                </span>
                <span className="text-sm text-gray-500">USD — {product.duration[lang]}</span>
              </div>
              {product.oldPrice && (
                <p className="mt-1 text-sm font-semibold text-green-600">
                  {t.common.save} {t.common.currency}{(product.oldPrice - product.price).toFixed(2)}
                </p>
              )}

              <button
                onClick={() => add(product.slug)}
                className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                {t.common.addToCart}
              </button>
              <a
                href={waLink(waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                {t.common.orderNow} {t.common.onWhatsApp}
              </a>

              <div className="mt-6 pt-6 border-t border-gray-100 text-sm text-gray-500 space-y-2">
                <p>
                  <span className="font-medium text-gray-900">{t.common.duration}:</span> {product.duration[lang]}
                </p>
                <p>
                  <span className="font-medium text-gray-900">{t.common.delivery}:</span>{" "}
                  {lang === "fr" ? "Digitale, sous 5 à 30 minutes" : "رقمية، خلال 5 إلى 30 دقيقة"}
                </p>
                <p>
                  <span className="font-medium text-gray-900">
                    {lang === "fr" ? "Paiement" : "الدفع"}:
                  </span>{" "}
                  Virement CIH (RIB/IBAN)
                </p>
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{t.common.related}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
