import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronDown } from "lucide-react";
import SectionHeader from "../components/SectionHeader.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import { STORE, waLink } from "../data/store.js";

const CONTENT = {
  fr: {
    title: "Questions fréquentes",
    subtitle: "Tout ce qu'il faut savoir avant de commander. Une autre question ? Contactez-nous sur WhatsApp.",
    items: [
      { q: "Comment se passe la livraison ?", a: "Toutes nos livraisons sont digitales et se font via WhatsApp. Après confirmation de votre paiement (virement CIH), vous recevez vos identifiants, codes ou invitations en 5 à 30 minutes." },
      { q: "Quels moyens de paiement acceptez-vous ?", a: "Nous acceptons les virements bancaires CIH, les paiements par RIB et les virement IBAN international. Les coordonnées complètes vous sont communiquées sur WhatsApp lors de la validation de votre commande." },
      { q: "La garantie de remplacement, comment ça marche ?", a: "Si votre accès cesse de fonctionner pendant la durée de l'abonnement acheté, nous le remplaçons gratuitement. Contactez-nous simplement sur WhatsApp avec votre numéro de commande." },
      { q: "Puis-je être remboursé ?", a: "Les produits étant digitaux et livrés immédiatement, les remboursements ne sont possibles qu'en cas de produit défectueux non remplaçable. Consultez notre politique de remboursement et remplacement pour le détail." },
      { q: "Les comptes sont-ils sécurisés ?", a: "Oui. Nous fournissons des profils privés avec codes PIN quand c'est applicable, et les identifiants sont transmis uniquement via votre conversation WhatsApp." },
      { q: "Puis-je renouveler mon abonnement ?", a: "Bien sûr. Avant la fin de votre période, contactez-nous sur WhatsApp pour renouveler au même tarif, ou choisissez directement une durée plus longue (3 mois, 12 mois) dans le catalogue." },
      { q: "Commander pour quelqu'un d'autre, c'est possible ?", a: "Oui, indiquez-le simplement lors de la commande. Nous livrons les accès à la personne de votre choix." },
      { q: "Proposez-vous des packs sur mesure ?", a: "Oui ! Dites-nous les services qui vous intéressent sur WhatsApp et nous vous préparons un pack groupé avec une remise spéciale." },
    ],
  },
  ar: {
    title: "الأسئلة الشائعة",
    subtitle: "كل ما تحتاج معرفته قبل الطلب. لديك سؤال آخر؟ تواصل معنا على واتساب.",
    items: [
      { q: "كيف يتم التوصيل؟", a: "جميع عمليات التوصيل رقمية وتتم عبر واتساب. بعد تأكيد الدفع (تحويل CIH)، تستلم بيانات الدخول أو الأكواد أو الدعوات خلال 5 إلى 30 دقيقة." },
      { q: "ما هي طرق الدفع المقبولة؟", a: "نقبل التحويلات البنكية CIH، والدفع عبر RIB، والتحويل الدولي عبر IBAN. تصلك الإحداثيات الكاملة عبر واتساب عند تأكيد طلبك." },
      { q: "كيف يعمل ضمان الاستبدال؟", a: "إذا توقف حسابك عن العمل خلال مدة الاشتراك المشتراة، نستبدله مجانا. فقط تواصل معنا على واتساب مع رقم طلبك." },
      { q: "هل يمكن استرجاع المال؟", a: "بما أن المنتجات رقمية وتُسلّم فورا، فالاسترجاع ممكن فقط في حالة منتج معطل لا يمكن استبداله. راجع سياسة الاستبدال والاسترجاع للتفاصيل." },
      { q: "هل الحسابات آمنة؟", a: "نعم. نوفر بروفايلات خاصة برموز PIN عندما يكون ذلك ممكنا، وتُرسل بيانات الدخول فقط عبر محادثة واتساب الخاصة بك." },
      { q: "هل يمكن تجديد اشتراكي؟", a: "بالتأكيد. قبل نهاية مدتك، تواصل معنا على واتساب للتجديد بنفس السعر، أو اختر مباشرة مدة أطول (3 أشهر، 12 شهرا) من المنتجات." },
      { q: "هل يمكن الطلب لشخص آخر؟", a: "نعم، فقط أخبرنا عند الطلب. نسلّم الحسابات للشخص الذي تختاره." },
      { q: "هل توفرون باقات خاصة؟", a: "نعم! أخبرنا بالخدمات التي تهمك على واتساب وسنجهز لك باقة مجمعة بخصم خاص." },
    ],
  },
};

export default function FAQ() {
  const { lang } = useLang();
  const c = CONTENT[lang];
  const [open, setOpen] = useState(0);

  return (
    <>
      <Helmet>
        <title>FAQ — Dropsellerr</title>
        <link rel="canonical" href={`${STORE.domain}/faq`} />
        <meta name="description" content="Questions fréquentes Dropsellerr : livraison digitale, paiement virement CIH (RIB/IBAN), garantie de remplacement, renouvellement." />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader title={c.title} subtitle={c.subtitle} />

        <div className="space-y-3">
          {c.items.map((item, i) => (
            <div key={item.q} className="rounded-2xl border border-gray-100 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-start font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
              >
                {item.q}
                <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <p className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">{item.a}</p>}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={waLink(lang === "fr" ? "Bonjour, j'ai une question." : "مرحبا، لدي سؤال.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
          >
            {lang === "fr" ? "Poser une question sur WhatsApp" : "اطرح سؤالك على واتساب"}
          </a>
        </div>
      </div>
    </>
  );
}
