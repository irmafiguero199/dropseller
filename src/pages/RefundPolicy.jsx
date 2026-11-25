import { Helmet } from "react-helmet-async";
import SectionHeader from "../components/SectionHeader.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import { STORE } from "../data/store.js";

export function LegalContent({ c }) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeader title={c.title} subtitle={c.subtitle} />
      <div className="space-y-6">
        {c.sections.map((s) => (
          <section key={s.h} className="p-6 rounded-2xl bg-white border border-gray-100">
            <h2 className="font-bold text-gray-900">{s.h}</h2>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.p}</p>
            {s.list && (
              <ul className="mt-3 space-y-1.5">
                {s.list.map((li) => (
                  <li key={li} className="text-sm text-gray-600 flex gap-2">
                    <span className="text-brand-600 shrink-0">•</span>
                    {li}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

const CONTENT = {
  fr: {
    title: "Politique de remboursement & remplacement",
    subtitle: "Dernière mise à jour : 25 novembre 2026",
    sections: [
      { h: "1. Principe général", p: "Tous les produits vendus par Dropsellerr sont des biens et services numériques, livrés immédiatement après confirmation du paiement. En raison de leur nature digitale, tout produit livré et fonctionnel ne peut faire l'objet d'un remboursement, sauf disposition contraire de la présente politique." },
      { h: "2. Garantie de remplacement", p: "Chaque abonnement bénéficie d'une garantie de remplacement couvrant toute la durée acquise. Si l'accès acheté cesse de fonctionner (compte inaccessible, licence révoquée, invitation retirée), nous le remplaçons gratuitement par un accès équivalent dans un délai maximal de 24 heures après signalement sur WhatsApp." },
      { h: "3. Cas ouvrant droit à remplacement", list: [
        "Accès livré ne fonctionne pas dès la réception (vérifié avec le client sur WhatsApp).",
        "Perte d'accès en cours de période, sans modification des conditions d'usage par le client.",
        "Produit livré différent de celui commandé.",
      ]},
      { h: "4. Cas exclus", list: [
        "Révocation liée à une violation des conditions d'usage du service tiers (changement d'email du compte, partage abusif des identifiants).",
        "Blocage dû à l'utilisation d'un appareil incompatible signalé avant l'achat.",
        "Changement d'avis après livraison et vérification du bon fonctionnement.",
      ]},
      { h: "5. Remboursement", p: "Un remboursement partiel ou total peut être accordé uniquement si le remplacement est impossible (produit épuisé ou service suspendu définitivement). Le remboursement est effectué par le même canal que le paiement initial (virement CIH) sous 3 à 5 jours ouvrés." },
      { h: "6. Comment demander", p: "Contactez-nous sur WhatsApp en précisant votre nom, la date de commande et le produit concerné. Notre équipe traite chaque demande en moins de 24 heures, 7j/7." },
    ],
  },
  ar: {
    title: "سياسة الاستبدال والاسترجاع",
    subtitle: "آخر تحديث: 25 نونبر 2026",
    sections: [
      { h: "1. المبدأ العام", p: "جميع المنتجات المباعة من طرف Dropsellerr منتجات وخدمات رقمية، تُسلّم فورا بعد تأكيد الدفع. ونظرا لطبيعتها الرقمية، لا يمكن استرجاع أي منتج مُسلّم ويعمل بشكل صحيح، إلا في الحالات المنصوص عليها في هذه السياسة." },
      { h: "2. ضمان الاستبدال", p: "كل اشتراك يستفيد من ضمان استبدال يغطي كامل المدة المشتراة. إذا توقف الحساب المشترى عن العمل (حساب غير قابل للدخول، رخصة ملغاة، دعوة مسحوبة)، نستبدله مجانا بحساب مماثل في أجل أقصاه 24 ساعة بعد الإبلاغ على واتساب." },
      { h: "3. حالات الاستحقاق", list: ["حساب مُسلّم لا يعمل منذ الاستلام (يُتحقق مع الزبون على واتساب).", "فقدان الدخول خلال المدة، دون أي تعديل من طرف الزبون على شروط الاستخدام.", "منتج مُسلّم مختلف عن المطلوب."] },
      { h: "4. حالات الاستبعاد", list: ["الإلغاء المرتبط بخرق شروط استخدام الخدمة الخارجية (تغيير بريد الحساب، مشاركة مفرطة لبيانات الدخول).", "الحظر بسبب جهاز غير متوافق تم التنبيه عليه قبل الشراء.", "تغيير الرأي بعد التسليم والتحقق من سلامة العمل."] },
      { h: "5. الاسترجاع", p: "يمكن منح استرجاع جزئي أو كامل فقط إذا استحال الاستبدال (منتج نفد أو خدمة أوقفت نهائيا). يتم الاسترجاع عبر نفس قناة الدفع الأصلية (تحويل CIH) خلال 3 إلى 5 أيام عمل." },
      { h: "6. كيفية الطلب", p: "تواصل معنا على واتساب مع ذكر اسمك وتاريخ الطلب والمنتج المعني. يعالج فريقنا كل طلب في أقل من 24 ساعة، 7/7." },
    ],
  },
};

export default function RefundPolicy() {
  const { lang } = useLang();
  const c = CONTENT[lang];
  return (
    <>
      <Helmet>
        <title>Politique de remboursement & remplacement — Dropsellerr</title>
        <link rel="canonical" href={`${STORE.domain}/politique-remboursement`} />
        <meta name="description" content="Politique de remboursement et de remplacement Dropsellerr : garantie de remplacement pendant toute la durée de chaque abonnement digital." />
      </Helmet>
      <LegalContent c={c} />
    </>
  );
}
