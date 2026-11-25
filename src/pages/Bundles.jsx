import { Helmet } from "react-helmet-async";
import { Package, BadgePercent } from "lucide-react";
import ProductCard from "../components/ProductCard.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { productsByCategory } from "../data/products.js";
import { useLang } from "../context/LanguageContext.jsx";
import { STORE } from "../data/store.js";

export default function Bundles() {
  const { lang } = useLang();
  const packs = productsByCategory("packs");

  return (
    <>
      <Helmet>
        <title>Packs & Bundles — Dropsellerr</title>
        <link rel="canonical" href={`${STORE.domain}/packs`} />
        <meta
          name="description"
          content="Packs Dropsellerr : plusieurs services regroupés à prix réduit. Économisez jusqu'à 25% avec le Pack Créateur."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader
          title={lang === "fr" ? "Packs & Bundles" : "الباقات والعروض"}
          subtitle={
            lang === "fr"
              ? "Plusieurs services regroupés à prix réduit. L'économie directe, sans compromis."
              : "عدة خدمات مجمعة بسعر مخفض. توفير مباشر دون مساومة على الجودة."
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {packs.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>

        <div className="rounded-3xl bg-gray-50 p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Package className="w-6 h-6 text-brand-600" />
              {lang === "fr" ? "Une demande de pack sur mesure ?" : "طلب باقة خاصة؟"}
            </h2>
            <p className="mt-3 text-gray-500 leading-relaxed">
              {lang === "fr"
                ? "Vous avez besoin d'une combinaison spécifique (ex. Netflix + VPN + ChatGPT) ? Contactez-nous sur WhatsApp : nous montons un pack personnalisé avec une remise groupée."
                : "تحتاج تركيبة خاصة (مثلا: نتفليكس + VPN + ChatGPT)؟ تواصل معنا عبر واتساب وسنجهز لك باقة مخصصة بخصم جماعي."}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={STORE.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center px-6 py-3.5 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors"
            >
              {lang === "fr" ? "Demander sur WhatsApp" : "اطلب عبر واتساب"}
            </a>
            <p className="text-center text-xs text-gray-500 flex items-center justify-center gap-1.5">
              <BadgePercent className="w-4 h-4" />
              {lang === "fr" ? "Remise groupée garantie" : "خصم جماعي مضمون"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
