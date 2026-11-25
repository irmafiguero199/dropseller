import { Link } from "react-router-dom";
import { Zap, Mail } from "lucide-react";
import { useLang } from "../context/LanguageContext.jsx";
import { getT } from "../data/i18n.js";
import { STORE } from "../data/store.js";

export default function Footer() {
  const { lang } = useLang();
  const t = getT(lang);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-gray-50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" fill="currentColor" />
              </span>
              <span className="text-lg font-bold text-gray-900">dropsellerr</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">{t.footer.tagline}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">{t.footer.shop}</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/catalogue" className="hover:text-brand-600">{t.nav.catalog}</Link></li>
              <li><Link to="/categories" className="hover:text-brand-600">{t.nav.categories}</Link></li>
              <li><Link to="/packs" className="hover:text-brand-600">{t.nav.bundles}</Link></li>
              <li><Link to="/avis" className="hover:text-brand-600">{t.nav.reviews}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">{t.footer.help}</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/comment-ca-marche" className="hover:text-brand-600">{t.nav.how}</Link></li>
              <li><Link to="/faq" className="hover:text-brand-600">{t.nav.faq}</Link></li>
              <li><Link to="/a-propos" className="hover:text-brand-600">{t.nav.about}</Link></li>
              <li><Link to="/contact" className="hover:text-brand-600">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">{t.footer.legal}</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/politique-remboursement" className="hover:text-brand-600">Politique de remboursement & remplacement</Link></li>
              <li><Link to="/politique-confidentialite" className="hover:text-brand-600">Politique de confidentialité</Link></li>
              <li><Link to="/conditions-utilisation" className="hover:text-brand-600">Conditions d'utilisation</Link></li>
            </ul>
            <div className="mt-4">
              <p className="text-xs font-semibold text-gray-900 mb-2">{t.footer.payment}</p>
              <div className="flex flex-wrap gap-2">
                {STORE.paymentMethods.map((m) => (
                  <span key={m} className="px-2.5 py-1 rounded-md bg-white border border-gray-200 text-xs font-medium text-gray-600">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>© {year} {STORE.name}. {t.footer.rights}</p>
          <a href={`mailto:${STORE.email}`} className="flex items-center gap-2 hover:text-brand-600">
            <Mail className="w-4 h-4" /> {STORE.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
