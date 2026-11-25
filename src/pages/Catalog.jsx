import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import ProductCard from "../components/ProductCard.jsx";
import { CATEGORIES, PRODUCTS } from "../data/products.js";
import { useLang } from "../context/LanguageContext.jsx";
import { getT } from "../data/i18n.js";
import { STORE } from "../data/store.js";

export default function Catalog() {
  const { lang } = useLang();
  const t = getT(lang);
  const [cat, setCat] = useState("all");
  const [sort, setSort] = useState("default");

  const list = useMemo(() => {
    let l = cat === "all" ? [...PRODUCTS] : PRODUCTS.filter((p) => p.category === cat);
    if (sort === "asc") l.sort((a, b) => a.price - b.price);
    if (sort === "desc") l.sort((a, b) => b.price - a.price);
    return l;
  }, [cat, sort]);

  return (
    <>
      <Helmet>
        <title>Catalogue — Dropsellerr</title>
        <link rel="canonical" href={`${STORE.domain}/catalogue`} />
        <meta
          name="description"
          content="Catalogue complet Dropsellerr : Netflix, YouTube, Spotify, ChatGPT Plus, Canva Pro, CapCut, VPN. Prix en USD, livraison WhatsApp rapide."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          {lang === "fr" ? "Catalogue" : "المنتجات"}
        </h1>
        <p className="mt-2 text-gray-500 max-w-2xl">
          {lang === "fr"
            ? "Tous nos abonnements et outils digitaux. Prix en USD, garantie de remplacement incluse."
            : "جميع اشتراكاتنا وأدواتنا الرقمية. الأسعار بالدولار مع ضمان الاستبدال."}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCat("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                cat === "all" ? "bg-brand-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {t.common.all}
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === c.id ? "bg-brand-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {c.name[lang]}
              </button>
            ))}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="sm:ms-auto px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            <option value="default">{lang === "fr" ? "Tri : par défaut" : "ترتيب: افتراضي"}</option>
            <option value="asc">{t.common.sortPriceAsc}</option>
            <option value="desc">{t.common.sortPriceDesc}</option>
          </select>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          {list.length} {t.common.results}
        </p>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </>
  );
}
