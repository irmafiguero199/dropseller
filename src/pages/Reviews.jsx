import { Helmet } from "react-helmet-async";
import { Star } from "lucide-react";
import SectionHeader from "../components/SectionHeader.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import { STORE } from "../data/store.js";

const CONTENT = {
  fr: {
    title: "Avis clients",
    subtitle: "Ce que nos clients disent de leur expérience Dropsellerr.",
    stats: [
      { value: "4.8/5", label: "Note moyenne" },
      { value: "2 400+", label: "Commandes traitées" },
      { value: "95 %", label: "Livraison en moins de 30 min" },
      { value: "7j/7", label: "Support disponible" },
    ],
    reviews: [
      {
        name: "Youssef A.", city: "Casablanca",
        text: "Netflix 4K reçu en 10 minutes sur WhatsApp. Le profil marche parfaitement depuis 3 semaines. Service très sérieux.",
        product: "Netflix Premium 4K",
        rating: 5,
      },
      {
        name: "Salma B.", city: "Rabat",
        text: "J'ai commandé Canva Pro pour un an, activation faite en 15 minutes sur mon propre compte. Prix imbattable.",
        product: "Canva Pro",
        rating: 5,
      },
      {
        name: "Mehdi K.", city: "Marrakech",
        text: "ChatGPT Plus livré rapidement. Petit souci après 2 semaines, remplacé en moins d'une heure sans discussion. Je recommande.",
        product: "ChatGPT Plus",
        rating: 5,
      },
      {
        name: "Imane E.", city: "Tanger",
        text: "Le Pack Créateur est un excellent deal. Paiement par virement CIH simple, réponse très rapide sur WhatsApp.",
        product: "Pack Créateur",
        rating: 4,
      },
      {
        name: "Omar T.", city: "Fès",
        text: "VPN 12 mois fonctionnel, vitesse excellente. Communication claire du début à la fin.",
        product: "NordVPN 12 mois",
        rating: 5,
      },
      {
        name: "Khadija M.", city: "Agadir",
        text: "YouTube Premium activé sur mon compte en 20 minutes. Support très patient avec mes questions avant l'achat.",
        product: "YouTube Premium",
        rating: 5,
      },
    ],
  },
  ar: {
    title: "آراء الزبائن",
    subtitle: "ماذا يقول زبائننا عن تجربتهم مع Dropsellerr.",
    stats: [
      { value: "4.8/5", label: "متوسط التقييم" },
      { value: "+2400", label: "طلب تم معالجته" },
      { value: "95%", label: "توصيل في أقل من 30 دقيقة" },
      { value: "7/7", label: "دعم متوفر" },
    ],
    reviews: [
      { name: "يوسف أ.", city: "الدار البيضاء", text: "استلمت نتفليكس 4K خلال 10 دقائق على واتساب. البروفايل يعمل بشكل ممتاز منذ 3 أسابيع. خدمة جد جدية.", product: "Netflix Premium 4K", rating: 5 },
      { name: "سلمى ب.", city: "الرباط", text: "طلبت Canva Pro لسنة كاملة، والتفعيل تم خلال 15 دقيقة على حسابي الخاص. سعر لا يقاوم.", product: "Canva Pro", rating: 5 },
      { name: "مهدي ك.", city: "مراكش", text: "ChatGPT Plus وصل بسرعة. حدث مشكل صغير بعد أسبوعين، وتم الاستبدال في أقل من ساعة دون نقاش. أنصح به.", product: "ChatGPT Plus", rating: 5 },
      { name: "إيمان ع.", city: "طنجة", text: "باقة صانع المحتوى صفقة ممتازة. الدفع بتحويل CIH سهل، ورد سريع جدا على واتساب.", product: "Pack Créateur", rating: 4 },
      { name: "عمر ت.", city: "فاس", text: "VPN لمدة 12 شهرا يعمل بشكل ممتاز وسرعة رائعة. تواصل واضح من البداية إلى النهاية.", product: "NordVPN 12 mois", rating: 5 },
      { name: "خديجة م.", city: "أكادير", text: "تم تفعيل يوتيوب بريميوم على حسابي خلال 20 دقيقة. الدعم كان صبورا جدا مع أسئلتي قبل الشراء.", product: "YouTube Premium", rating: 5 },
    ],
  },
};

export default function Reviews() {
  const { lang } = useLang();
  const c = CONTENT[lang];

  return (
    <>
      <Helmet>
        <title>Avis clients — Dropsellerr</title>
        <link rel="canonical" href={`${STORE.domain}/avis`} />
        <meta name="description" content="Avis clients Dropsellerr : note moyenne 4.8/5, plus de 2400 commandes traitées, livraison rapide via WhatsApp." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader title={c.title} subtitle={c.subtitle} />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {c.stats.map((s) => (
            <div key={s.label} className="p-5 rounded-2xl bg-gray-50 text-center">
              <p className="text-2xl md:text-3xl font-bold text-brand-600 tabular-nums">{s.value}</p>
              <p className="mt-1 text-sm text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {c.reviews.map((r) => (
            <figure key={r.name} className="p-6 rounded-2xl bg-white border border-gray-100 flex flex-col">
              <div className="flex gap-0.5 mb-3" aria-label={`${r.rating}/5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < r.rating ? "text-amber-400" : "text-gray-200"}`}
                    fill="currentColor"
                  />
                ))}
              </div>
              <blockquote className="text-sm text-gray-600 leading-relaxed flex-1">"{r.text}"</blockquote>
              <figcaption className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm font-semibold text-gray-900">{r.name} — {r.city}</p>
                <p className="text-xs text-gray-400 mt-0.5">{r.product}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </>
  );
}
