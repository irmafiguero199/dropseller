import { Helmet } from "react-helmet-async";
import { LegalContent } from "./RefundPolicy.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import { STORE } from "../data/store.js";

const CONTENT = {
  fr: {
    title: "Conditions d'utilisation",
    subtitle: "Dernière mise à jour : 25 novembre 2026",
    sections: [
      { h: "1. Objet", p: "Les présentes conditions régissent l'utilisation du site Dropsellerr et l'achat de produits et services numériques (abonnements, licences, invitations, packs). En passant commande, vous acceptez l'intégralité de ces conditions." },
      { h: "2. Nature des produits", p: "Les produits proposés sont des biens numériques : accès à des services de streaming, outils d'IA, logiciels et VPN, sous forme de profils, comptes, codes ou invitations. La livraison est exclusivement digitale, via WhatsApp, en 5 à 30 minutes après confirmation du paiement." },
      { h: "3. Prix & paiement", p: "Les prix sont affichés en USD et fermes au moment de la commande. Le paiement s'effectue par virement bancaire CIH (RIB/IBAN). La commande n'est traitée qu'après réception et vérification du virement." },
      { h: "4. Livraison", p: "La livraison est effectuée sur WhatsApp à partir du moment où le paiement est confirmé. Dropsellerr ne saurait être tenue responsable des retards imputables à la banque ou à des indisponibilités temporaires du service tiers." },
      { h: "5. Garantie", p: "Chaque produit bénéficie de la garantie de remplacement décrite dans la politique de remboursement et remplacement, couvrant toute la durée acquise. Le remplacement est gratuit et illimité dans le cadre d'un usage conforme." },
      { h: "6. Conditions d'usage des accès", p: "Les identifiants fournis sont strictement personnels. Toute revente, partage massif ou modification des paramètres du compte (email, mot de passe maître) annule la garantie. Suivez les consignes d'usage transmises à la livraison." },
      { h: "7. Responsabilité", p: "Dropsellerr est une boutique indépendante et n'est pas affiliée aux marques citées (Netflix, YouTube, OpenAI, Canva, etc.). Les marques appartiennent à leurs propriétaires respectifs. Notre responsabilité se limite à la fourniture de l'accès commandé et à son remplacement en cas de panne." },
      { h: "8. Droit applicable", p: "Les présentes conditions sont régies par le droit marocain. Tout litige relève des tribunaux compétents du Royaume du Maroc." },
    ],
  },
  ar: {
    title: "شروط الاستخدام",
    subtitle: "آخر تحديث: 25 نونبر 2026",
    sections: [
      { h: "1. الموضوع", p: "تحكم هذه الشروط استعمال موقع Dropsellerr وشراء المنتجات والخدمات الرقمية (اشتراكات، رخص، دعوات، باقات). بإتمامك الطلب، تقبل هذه الشروط كاملة." },
      { h: "2. طبيعة المنتجات", p: "المنتجات المعروضة بضائع رقمية: وصول إلى خدمات البث، أدوات الذكاء الاصطناعي، برامج وVPN، على شكل بروفايلات أو حسابات أو أكواد أو دعوات. التوصيل رقمي حصريا عبر واتساب، خلال 5 إلى 30 دقيقة بعد تأكيد الدفع." },
      { h: "3. الأسعار والدفع", p: "تُعرض الأسعار بالدولار وتكون نهائية عند الطلب. يتم الدفع بتحويل بنكي CIH (RIB/IBAN). لا تُعالج الطلبات إلا بعد استلام التحويل والتحقق منه." },
      { h: "4. التوصيل", p: "يتم التسليم على واتساب منذ تأكيد الدفع. لا تتحمل Dropsellerr مسؤولية التأخيرات المنسوبة للبنك أو التوقفات المؤقتة للخدمة الخارجية." },
      { h: "5. الضمان", p: "كل منتج يستفيد من ضمان الاستبدال الموضح في سياسة الاستبدال والاسترجاع، ويغطي كامل المدة المشتراة. الاستبدال مجاني وغير محدود في إطار استعمال ملائم." },
      { h: "6. شروط استعمال الحسابات", p: "بيانات الدخول المقدمة شخصية بحتة. أي إعادة بيع أو مشاركة جماعية أو تعديل لمعطيات الحساب (البريد، كلمة السر الرئيسية) يلغي الضمان. اتبع تعليمات الاستعمال المرسلة عند التسليم." },
      { h: "7. المسؤولية", p: "Dropsellerr متجر مستقل وليست تابعة للعلامات المذكورة (Netflix، YouTube، OpenAI، Canva وغيرها). العلامات ملك لأصحابها. مسؤوليتنا تقتصر على توفير الوصول المطلوب واستبداله عند العطل." },
      { h: "8. القانون الواجب التطبيق", p: "تخضع هذه الشروط للقانون المغربي. وتختص محاكم المملكة المغربية بأي نزاع." },
    ],
  },
};

export default function TermsOfService() {
  const { lang } = useLang();
  const c = CONTENT[lang];
  return (
    <>
      <Helmet>
        <title>Conditions d'utilisation — Dropsellerr</title>
        <link rel="canonical" href={`${STORE.domain}/conditions-utilisation`} />
        <meta name="description" content="Conditions d'utilisation Dropsellerr : produits numériques, paiement virement CIH, garantie de remplacement, conditions d'usage des accès." />
      </Helmet>
      <LegalContent c={c} />
    </>
  );
}
