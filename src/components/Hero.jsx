import { Link } from "react-router-dom";
import { Zap, Clock, ShieldCheck, CreditCard, Headset, Clapperboard, Bot, Palette, Shield, Package } from "lucide-react";
import { useLang } from "../context/LanguageContext.jsx";
import { getT } from "../data/i18n.js";

const ICONS = { clapperboard: Clapperboard, bot: Bot, palette: Palette, shield: Shield, package: Package };

export function CategoryIcon({ icon, className = "w-6 h-6" }) {
  const Icon = ICONS[icon] || Package;
  return <Icon className={className} />;
}

export default function Hero() {
  const { lang } = useLang();
  const t = getT(lang);

  const trust = [
    { icon: Clock, label: t.hero.trust1 },
    { icon: CreditCard, label: t.hero.trust2 },
    { icon: ShieldCheck, label: t.hero.trust3 },
    { icon: Headset, label: t.hero.trust4 },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-6">
          <Zap className="w-4 h-4" fill="currentColor" />
          {t.hero.badge}
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight max-w-3xl mx-auto">
          {t.hero.title1}{" "}
          <span className="text-brand-600">{t.hero.title2}</span>
        </h1>
        <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">{t.hero.subtitle}</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/catalogue"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors"
          >
            {t.hero.ctaCatalog}
          </Link>
          <Link
            to="/comment-ca-marche"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold hover:border-gray-300 transition-colors"
          >
            {t.hero.ctaHow}
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {trust.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-2 text-sm font-medium text-gray-600">
              <Icon className="w-5 h-5 text-brand-600" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
