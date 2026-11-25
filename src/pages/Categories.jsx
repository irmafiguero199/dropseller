import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import CategoryGrid from "../components/CategoryGrid.jsx";
import ProductCard from "../components/ProductCard.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { CATEGORIES, productsByCategory } from "../data/products.js";
import { useLang } from "../context/LanguageContext.jsx";
import { STORE } from "../data/store.js";

export default function Categories() {
  const { lang } = useLang();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <>
      <Helmet>
        <title>Catégories — Dropsellerr</title>
        <link rel="canonical" href={`${STORE.domain}/categories`} />
        <meta
          name="description"
          content="Parcourez les catégories Dropsellerr : streaming, outils IA, design, VPN et packs. Abonnements digitaux à prix réduits."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader
          title={lang === "fr" ? "Nos catégories" : "فئاتنا"}
          subtitle={lang === "fr" ? "Cliquez sur une catégorie pour découvrir ses produits." : "اضغط على فئة لاكتشاف منتجاتها."}
        />
        <CategoryGrid />

        {CATEGORIES.map((c) => {
          const products = productsByCategory(c.id);
          if (products.length === 0) return null;
          return (
            <section key={c.id} id={c.slug} className="mt-16 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900">{c.name[lang]}</h2>
              <p className="mt-1 text-sm text-gray-500">{c.desc[lang]}</p>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
