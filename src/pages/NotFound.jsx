import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLang } from "../context/LanguageContext.jsx";
import { STORE } from "../data/store.js";

export default function NotFound() {
  const { lang } = useLang();
  return (
    <>
      <Helmet>
        <title>Page introuvable — Dropsellerr</title>
        <link rel="canonical" href={`${STORE.domain}/404`} />
      </Helmet>
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <p className="text-7xl font-bold text-brand-600">404</p>
        <h1 className="mt-4 text-2xl font-bold text-gray-900">
          {lang === "fr" ? "Cette page n'existe pas" : "هذه الصفحة غير موجودة"}
        </h1>
        <p className="mt-2 text-gray-500">
          {lang === "fr"
            ? "Le lien est peut-être cassé ou la page a été déplacée."
            : "ربما الرابط معطل أو تم نقل الصفحة."}
        </p>
        <Link
          to="/"
          className="mt-8 inline-block px-8 py-3.5 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors"
        >
          {lang === "fr" ? "Retour à l'accueil" : "العودة إلى الرئيسية"}
        </Link>
      </div>
    </>
  );
}
