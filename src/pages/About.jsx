import { Helmet } from "react-helmet-async";
import { Zap, Target, ShieldCheck, Handshake } from "lucide-react";
import SectionHeader from "../components/SectionHeader.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import { STORE } from "../data/store.js";

const CONTENT = {
  fr: {
    title: "À propos de Dropsellerr",
    subtitle: "La boutique digitale pensée pour les abonnements et outils en ligne, au meilleur prix.",
    story: {
      heading: "Notre histoire",
      text: "Dropsellerr est né d'un constat simple : les abonnements numériques (streaming, IA, productivité, sécurité) coûtent souvent trop cher au prix plein, et les acheteurs cherchent une solution fiable, rapide et transparente. Depuis notre lancement, nous traitons des commandes chaque jour et nous nous engageons sur trois piliers : des prix réduits, une livraison rapide via WhatsApp, et une garantie de remplacement réelle.",
    },
    values: [
      { icon: Target, title: "Prix justes", desc: "Des tarifs en USD nettement inférieurs aux prix officiels, sans frais cachés." },
      { icon: Zap, title: "Rapidité", desc: "Livraison digitale en 5 à 30 minutes, support réactif 7j/7." },
      { icon: ShieldCheck, title: "Confiance", desc: "Garantie de remplacement pendant toute la durée de chaque abonnement." },
      { icon: Handshake, title: "Transparence", desc: "Chaque produit indique sa durée, son mode de livraison et ses conditions d'usage." },
    ],
    cta: { title: "Prêt à commander ?", desc: "Parcourez le catalogue et recevez vos accès en quelques minutes.", button: "Voir le catalogue" },
  },
  ar: {
    title: "من نحن — Dropsellerr",
    subtitle: "متجر رقمي مصمم للاشتراكات والأدوات الإلكترونية، بأفضل الأسعار.",
    story: {
      heading: "قصتنا",
      text: "وُلد Dropsellerr من ملاحظة بسيطة: الاشتراكات الرقمية (البث، الذكاء الاصطناعي، الإنتاجية، الأمان) غالية جدا بالسعر الكامل، والمشترون يبحثون عن حل موثوق وسريع وشفاف. منذ انطلاقنا، نعالج الطلبات يوميا والتزامنا قائم على ثلاث ركائز: أسعار مخفضة، توصيل سريع عبر واتساب، وضمان استبدال حقيقي.",
    },
    values: [
      { icon: Target, title: "أسعار عادلة", desc: "أسعار بالدولار أقل بكثير من الأسعار الرسمية، دون رسوم خفية." },
      { icon: Zap, title: "سرعة", desc: "توصيل رقمي خلال 5 إلى 30 دقيقة، ودعم سريع 7/7." },
      { icon: ShieldCheck, title: "ثقة", desc: "ضمان استبدال طوال مدة كل اشتراك." },
      { icon: Handshake, title: "شفافية", desc: "كل منتج يوضح مدته وطريقة توصيله وشروط استخدامه." },
    ],
    cta: { title: "جاهز للطلب؟", desc: "تصفح المنتجات واستلم حساباتك خلال دقائق.", button: "تصفح المنتجات" },
  },
};

export default function About() {
  const { lang } = useLang();
  const c = CONTENT[lang];

  return (
    <>
      <Helmet>
        <title>À propos — Dropsellerr</title>
        <link rel="canonical" href={`${STORE.domain}/a-propos`} />
        <meta name="description" content="Dropsellerr : boutique digitale spécialisée dans les abonnements et outils en ligne à prix réduits. Livraison WhatsApp rapide, garantie de remplacement." />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader title={c.title} subtitle={c.subtitle} />

        <div className="p-8 rounded-3xl bg-gray-50">
          <h2 className="text-xl font-bold text-gray-900">{c.story.heading}</h2>
          <p className="mt-3 text-gray-600 leading-relaxed">{c.story.text}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          {c.values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl bg-white border border-gray-100">
              <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" />
              </span>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 rounded-3xl bg-brand-600 text-white">
          <h2 className="text-2xl font-bold">{c.cta.title}</h2>
          <p className="mt-2 text-brand-100">{c.cta.desc}</p>
          <a
            href="/catalogue"
            className="mt-6 inline-block px-8 py-3.5 rounded-xl bg-white text-brand-700 font-semibold hover:bg-brand-50 transition-colors"
          >
            {c.cta.button}
          </a>
        </div>
      </div>
    </>
  );
}
