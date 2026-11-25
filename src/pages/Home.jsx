import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Search, CreditCard, Send, KeyRound } from "lucide-react";
import Hero from "../components/Hero.jsx";
import CategoryGrid from "../components/CategoryGrid.jsx";
import ProductCard from "../components/ProductCard.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Newsletter from "../components/Newsletter.jsx";
import { PRODUCTS, getCategory } from "../data/products.js";
import { useLang } from "../context/LanguageContext.jsx";
import { getT } from "../data/i18n.js";
import { STORE } from "../data/store.js";

const STEPS = {
  fr: [
    { icon: Search, title: "1. Choisissez vos produits", desc: "Parcourez le catalogue et ajoutez vos abonnements au panier." },
    { icon: CreditCard, title: "2. Payez par virement CIH", desc: "Validez votre commande et effectuez le virement (RIB/IBAN communiqué sur WhatsApp)." },
    { icon: Send, title: "3. Envoyez le reçu", desc: "Partagez la preuve de paiement sur WhatsApp pour confirmation immédiate." },
    { icon: KeyRound, title: "4. Recevez vos accès", desc: "Vos identifiants ou codes arrivent en 5–30 minutes. Support 7j/7." },
  ],
  ar: [
    { icon: Search, title: "1. اختر منتجاتك", desc: "تصفح المنتجات وأضف اشتراكاتك إلى السلة." },
    { icon: CreditCard, title: "2. ادفع بتحويل CIH", desc: "أكد طلبك وقم بالتحويل البنكي (RIB/IBAN يصلك عبر واتساب)." },
    { icon: Send, title: "3. أرسل الإيصال", desc: "شارك إثبات الدفع على واتساب للتأكيد الفوري." },
    { icon: KeyRound, title: "4. استلم حساباتك", desc: "تصلك بيانات الدخول خلال 5–30 دقيقة. دعم 7/7." },
  ],
};

export default function Home() {
  const { lang } = useLang();
  const t = getT(lang);
  const featured = PRODUCTS.filter((p) => p.popular);
  const catName = (id) => getCategory(id)?.name[lang] || "";

  return (
    <>
      <Helmet>
        <title>Dropsellerr — Abonnements & outils digitaux au meilleur prix</title>
        <link rel="canonical" href={`${STORE.domain}/`} />
        <meta
          name="description"
          content="Netflix, YouTube Premium, ChatGPT Plus, Canva Pro, VPN — abonnements digitaux à prix réduits. Livraison via WhatsApp en quelques minutes, paiement virement CIH (RIB/IBAN), garantie de remplacement."
        />
      </Helmet>

      <Hero />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          title={lang === "fr" ? "Nos catégories" : "فئاتنا"}
          subtitle={lang === "fr" ? "Un catalogue complet de services digitaux vérifiés." : "كتالوج كامل من الخدمات الرقمية الموثوقة."}
        />
        <CategoryGrid />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
              {lang === "fr" ? "Les plus demandés" : "الأكثر طلبا"}
            </h2>
            <p className="mt-2 text-gray-500">
              {lang === "fr" ? "Les abonnements préférés de nos clients, livrés en quelques minutes." : "الاشتراكات المفضلة لزبائننا، تصلك في دقائق."}
            </p>
          </div>
          <Link to="/catalogue" className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 shrink-0">
            {t.common.viewAll}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={lang === "fr" ? "Comment ça marche" : "كيف يعمل"}
            subtitle={lang === "fr" ? "Simple et rapide : 4 étapes et vous êtes équipé." : "بسيط وسريع: 4 خطوات وتكون جاهزا."}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STEPS[lang].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl bg-white border border-gray-100">
                <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </span>
                <h3 className="font-semibold text-gray-900">{title}</h3>
                <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          title={lang === "fr" ? "Tout le catalogue" : "كامل المنتجات"}
          subtitle={lang === "fr" ? "Prix en USD, garantie de remplacement incluse sur chaque produit." : "الأسعار بالدولار، مع ضمان الاستبدال على كل منتج."}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRODUCTS.filter((p) => !p.popular).slice(0, 6).map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/catalogue"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors"
          >
            {t.hero.ctaCatalog}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Newsletter />
      </section>
    </>
  );
}
