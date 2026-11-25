import { Helmet } from "react-helmet-async";
import { LegalContent } from "./RefundPolicy.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import { STORE } from "../data/store.js";

const CONTENT = {
  fr: {
    title: "Politique de confidentialité",
    subtitle: "Dernière mise à jour : 25 novembre 2026",
    sections: [
      { h: "1. Données collectées", p: "Dans le cadre d'une commande, nous collectons uniquement : votre nom, votre numéro WhatsApp, votre adresse email (optionnelle) et le détail des produits commandés. Ces données servent exclusivement au traitement et à la livraison de votre commande." },
      { h: "2. Utilisation des données", p: "Vos données sont utilisées pour : préparer votre commande, vous transmettre vos accès, assurer le suivi de la garantie de remplacement et répondre à vos questions. Nous n'envoyons aucune prospection commerciale sans votre accord." },
      { h: "3. Partage des données", p: "Nous ne vendons, n'échangeons ni ne louons vos données personnelles à des tiers. Vos identifiants et informations de commande sont transmis uniquement via votre conversation WhatsApp." },
      { h: "4. Cookies & stockage local", p: "Le site utilise le stockage local de votre navigateur pour mémoriser votre panier, votre langue préférée (français/arabe) et vos inscriptions. Aucun cookie de suivi publicitaire n'est déposé." },
      { h: "5. Sécurité", p: "Les accès vendus sont transmis de manière confidentielle. Nous vous recommandons de ne jamais partager vos identifiants avec des tiers et de suivre les consignes d'usage communiquées lors de la livraison." },
      { h: "6. Vos droits", p: "Conformément à la loi 09-08 relative à la protection des données personnelles (Maroc), vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Contactez-nous sur WhatsApp ou par email pour exercer ces droits." },
    ],
  },
  ar: {
    title: "سياسة الخصوصية",
    subtitle: "آخر تحديث: 25 نونبر 2026",
    sections: [
      { h: "1. البيانات المجمعة", p: "في إطار الطلب، نجمع فقط: اسمك، رقم واتساب، بريدك الإلكتروني (اختياري) وتفاصيل المنتجات المطلوبة. تُستعمل هذه البيانات حصريا لمعالجة طلبك وتسليمه." },
      { h: "2. استعمال البيانات", p: "تُستعمل بياناتك من أجل: تجهيز طلبك، إرسال حساباتك، متابعة ضمان الاستبدال والإجابة على أسئلتك. لا نرسل أي عروض تجارية دون موافقتك." },
      { h: "3. مشاركة البيانات", p: "لا نبيع ولا نتاجر ولا نؤجر بياناتك الشخصية لأطراف ثالثة. تُرسل بيانات الدخول ومعلومات الطلب فقط عبر محادثة واتساب الخاصة بك." },
      { h: "4. ملفات الارتباط والتخزين المحلي", p: "يستعمل الموقع التخزين المحلي لمتصفحك لحفظ سلة المشتريات ولغتك المفضلة (فرنسي/عربي) واشتراكاتك. لا يتم وضع أي ملفات تعقب إعلانية." },
      { h: "5. الأمان", p: "تُرسل الحسابات بسرية تامة. ننصحك بعدم مشاركة بيانات الدخول مع أي طرف ثالث واتباع تعليمات الاستخدام المرفقة عند التسليم." },
      { h: "6. حقوقك", p: "وفقا للقانون 09-08 المتعلق بحماية المعطيات الشخصية (المغرب)، يحق لك الوصول إلى بياناتك وتصحيحها وحذفها. تواصل معنا على واتساب أو بالبريد لممارسة هذه الحقوق." },
    ],
  },
};

export default function PrivacyPolicy() {
  const { lang } = useLang();
  const c = CONTENT[lang];
  return (
    <>
      <Helmet>
        <title>Politique de confidentialité — Dropsellerr</title>
        <link rel="canonical" href={`${STORE.domain}/politique-confidentialite`} />
        <meta name="description" content="Politique de confidentialité Dropsellerr : données minimales, aucune revente, sécurité des accès, droits conformes à la loi 09-08." />
      </Helmet>
      <LegalContent c={c} />
    </>
  );
}
