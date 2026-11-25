import { Link } from "react-router-dom";
import { CATEGORIES } from "../data/products.js";
import { useLang } from "../context/LanguageContext.jsx";
import { CategoryIcon } from "./Hero.jsx";

export default function CategoryGrid() {
  const { lang } = useLang();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {CATEGORIES.map((c) => (
        <Link
          key={c.id}
          to={`/categories#${c.slug}`}
          className="group p-5 rounded-2xl border border-gray-100 bg-white hover:border-brand-500 hover:shadow-lg hover:shadow-brand-600/5 transition-all"
        >
          <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-3 group-hover:bg-brand-600 group-hover:text-white transition-colors">
            <CategoryIcon icon={c.icon} />
          </span>
          <h3 className="font-semibold text-gray-900 text-sm md:text-base">{c.name[lang]}</h3>
          <p className="mt-1 text-xs text-gray-500 leading-relaxed line-clamp-2">{c.desc[lang]}</p>
        </Link>
      ))}
    </div>
  );
}
