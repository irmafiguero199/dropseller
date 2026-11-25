import { Helmet } from "react-helmet-async";
import { Search, CreditCard, Send, KeyRound, ShieldCheck, Clock, Headset } from "lucide-react";
import SectionHeader from "../components/SectionHeader.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import { STORE } from "../data/store.js";

const CONTENT = {
  fr: {
    title: "Comment ça marche",
    subtitle: "Un parcours simple, pensé pour être rapide et transparent — de la commande à la réception.",
    steps: [
      { icon: Search, title: "1. Choisissez vos produits", desc: "Parcourez le catalogue, comparez les durées et les prix en USD, puis ajoutez au panier. Vous pouvez aussi commander directement via WhatsApp." },
      { icon: CreditCard, title: "2. Validez et payez par virement CIH", desc: "Sur la page Commander, saisissez vos coordonnées. Nous vous envoyons sur WhatsApp les coordonnées bancaires CIH (RIB/IBAN) pour effectuer votre virement." },
      { icon: Send, title: "3. Envoyez la preuve de paiement", desc: "Une fois le virement effectué, partagez le reçu ou la capture sur WhatsApp. Notre équipe vérifie et confirme votre commande immédiatement." },
      { icon: KeyRound, title: "4. Recevez vos accès", desc: "Vos identifiants, codes ou invitations arrivent sur WhatsApp en 5 à 30 minutes. En cas de pépin, notre garantie de remplacement s'applique pendant toute la durée de l'abonnement." },
    ],
    faqPoints: [
      { icon: Clock, title: "Délais de livraison", desc: "La plupart des commandes sont livrées en 5 à 30 minutes. En cas de forte demande, sous 2 heures maximum." },
      { icon: ShieldCheck, title: "Garantie de remplacement", desc: "Si un accès cesse de fonctionner pendant sa durée, nous le remplaçons gratuitement. Voir la politique de remboursement et remplacement." },
      { icon: Headset, title: "Support 7j/7", desc: "Une question avant ou après l'achat ? Notre support répond sur WhatsApp 7j/7." },
    ],
    paymentsTitle: "Moyens de paiement acceptés",
    payments: ["Virement bancaire CIH", "RIB (attijariwafa bank / CIH)", "IBAN international"],
  },
  ar: {
    title: "كيف يعمل",
    subtitle: "مسار بسيط وسريع وشفاف — من الطلب إلى الاستلام.",
    steps: [
      { icon: Search, title: "1. اختر منتجاتك", desc: "تصفح المنتجات، قارن المدد والأسعار بالدولار، ثم أضف إلى السلة. يمكنك أيضا الطلب مباشرة عبر واتساب." },
      { icon: CreditCard, title: "2. أكد الطلب وادفع بتحويل CIH", desc: "في صفحة إتمام الطلب، أدخل معلوماتك. نرسل لك عبر واتساب الإحداثيات البنكية CIH (RIB/IBAN) لإتمام التحويل." },
      { icon: Send, title: "3. أرسل إثبات الدفع", desc: "بعد إتمام التحويل، أرسل الإيصال أو لقطة الشاشة على واتساب. فريقنا يتحقق ويؤكد طلبك فورا." },
      { icon: KeyRound, title: "4. استلم حساباتك", desc: "تصلك بيانات الدخول أو الأكواد أو الدعوات عبر واتساب خلال 5 إلى 30 دقيقة. وفي حال أي مشكل، يسري ضمان الاستبدال طوال مدة الاشتراك." },
    ],
    faqPoints: [
      { icon: Clock, title: "مدة التوصيل", desc: "معظم الطلبات تصل خلال 5 إلى 30 دقيقة. وفي أوقات الذروة، خلال ساعتين كحد أقصى." },
      { icon: ShieldCheck, title: "ضمان الاستبدال", desc: "إذا توقف أي حساب عن العمل خلال مدته، نستبدله مجانا. راجع سياسة الاستبدال والاسترجاع." },
      { icon: Headset, title: "دعم 7/7", desc: "سؤال قبل أو بعد الشراء؟ دعمنا يجيب على واتساب طوال أيام الأسبوع." },
    ],
    paymentsTitle: "طرق الدفع المقبولة",
    payments: ["تحويل بنكي CIH", "RIB (التجاري وفا بنك / CIH)", "IBAN دولي"],
  },
};

export default function HowItWorks() {
  const { lang } = useLang();
  const c = CONTENT[lang];

  return (
    <>
      <Helmet>
        <title>Comment ça marche — Dropsellerr</title>
        <link rel="canonical" href={`${STORE.domain}/comment-ca-marche`} />
        <meta
          name="description"
          content="Commandez en 4 étapes : panier, virement CIH (RIB/IBAN), preuve de paiement sur WhatsApp, réception de vos accès en 5-30 minutes."
        />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader title={c.title} subtitle={c.subtitle} />

        <ol className="space-y-4">
          {c.steps.map(({ icon: Icon, title, desc }) => (
            <li key={title} className="flex gap-4 p-6 rounded-2xl bg-white border border-gray-100">
              <span className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6" />
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
                <p className="mt-1 text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {c.faqPoints.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-5 rounded-2xl bg-gray-50">
              <Icon className="w-6 h-6 text-brand-600 mb-3" />
              <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
              <p className="mt-1 text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-2xl border border-gray-100">
          <h2 className="font-bold text-gray-900">{c.paymentsTitle}</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {c.payments.map((p) => (
              <span key={p} className="px-3 py-1.5 rounded-lg bg-gray-100 text-sm font-medium text-gray-700">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
