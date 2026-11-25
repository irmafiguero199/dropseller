import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Menu, X, Zap, Globe } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import { getT } from "../data/i18n.js";

export default function Header() {
  const { count, setOpen } = useCart();
  const { lang, toggle } = useLang();
  const t = getT(lang);
  const [mobile, setMobile] = useState(false);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/catalogue", label: t.nav.catalog },
    { to: "/categories", label: t.nav.categories },
    { to: "/packs", label: t.nav.bundles },
    { to: "/comment-ca-marche", label: t.nav.how },
    { to: "/faq", label: t.nav.faq },
    { to: "/contact", label: t.nav.contact },
  ];

  const linkCls = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-brand-600" : "text-gray-600 hover:text-gray-900"
    }`;

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2" aria-label="Dropsellerr — accueil">
            <span className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" fill="currentColor" />
            </span>
            <span className="text-xl font-bold tracking-tight text-gray-900">dropsellerr</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkCls} end={l.to === "/"}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Changer de langue"
            >
              <Globe className="w-4 h-4" />
              {lang === "fr" ? "العربية" : "FR"}
            </button>
            <button
              onClick={() => setOpen(true)}
              className="relative p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label={t.common.cart}
            >
              <ShoppingCart className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute -top-0.5 -end-0.5 w-5 h-5 rounded-full bg-brand-600 text-white text-xs flex items-center justify-center font-semibold">
                  {count}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobile(!mobile)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              aria-label="Menu"
            >
              {mobile ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobile && (
        <nav className="lg:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setMobile(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive ? "bg-brand-50 text-brand-600" : "text-gray-600 hover:bg-gray-50"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
