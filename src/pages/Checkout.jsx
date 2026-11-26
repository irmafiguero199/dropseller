import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MessageCircle, Trash2, CreditCard, Landmark, CheckCircle2 } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import { getT } from "../data/i18n.js";
import { STORE, waLink } from "../data/store.js";

const CONTENT = {
  fr: {
    title: "Finaliser la commande",
    subtitle: "Remplissez vos informations, puis envoyez la commande. Nous vous répondons sur WhatsApp avec les coordonnées CIH (RIB/IBAN) pour le virement.",
    yourInfo: "Vos informations",
    fullName: "Nom complet",
    whatsappNumber: "Numéro WhatsApp (avec indicatif pays)",
    emailOptional: "Email (optionnel)",
    paymentMethod: "Mode de paiement",
    bankTransfer: "Virement bancaire CIH",
    bankTransferDesc: "RIB / IBAN communiqués sur WhatsApp après envoi de la commande.",
    instructionsTitle: "Comment se passe le paiement ?",
    instructions: [
      "Envoyez votre commande via le bouton WhatsApp ci-dessous.",
      "Nous vous envoyons les coordonnées bancaires CIH (RIB/IBAN) sur WhatsApp.",
      "Effectuez le virement, puis envoyez-nous le reçu.",
      "Vous recevez vos accès en 5 à 30 minutes après confirmation.",
    ],
    sendOrder: "Envoyer la commande sur WhatsApp",
    emptyTitle: "Votre panier est vide",
    emptyDesc: "Ajoutez des produits avant de passer commande.",
    browse: "Parcourir le catalogue",
    sentTitle: "Commande envoyée !",
    sentDesc: "WhatsApp s'est ouvert avec le récapitulatif de votre commande. Notre équipe vous répond en quelques minutes avec les coordonnées bancaires.",
    orderIntro: "Bonjour, je souhaite passer commande sur Dropsellerr :",
    totalLabel: "Total",
    customer: "Client",
    backToCart: "Modifier le panier",
  },
  ar: {
    title: "إتمام الطلب",
    subtitle: "املأ معلوماتك ثم أرسل الطلب. سنرد عليك على واتساب بإحداثيات CIH (RIB/IBAN) للتحويل.",
    yourInfo: "معلوماتك",
    fullName: "الاسم الكامل",
    whatsappNumber: "رقم واتساب (مع رمز الدولة)",
    emailOptional: "البريد الإلكتروني (اختياري)",
    paymentMethod: "طريقة الدفع",
    bankTransfer: "تحويل بنكي CIH",
    bankTransferDesc: "يصلك RIB / IBAN عبر واتساب بعد إرسال الطلب.",
    instructionsTitle: "كيف يتم الدفع؟",
    instructions: [
      "أرسل طلبك عبر زر واتساب بالأسفل.",
      "نرسل لك الإحداثيات البنكية CIH (RIB/IBAN) على واتساب.",
      "قم بالتحويل ثم أرسل لنا الإيصال.",
      "تستلم حساباتك خلال 5 إلى 30 دقيقة بعد التأكيد.",
    ],
    sendOrder: "أرسل الطلب على واتساب",
    emptyTitle: "سلتك فارغة",
    emptyDesc: "أضف منتجات قبل إتمام الطلب.",
    browse: "تصفح المنتجات",
    sentTitle: "تم إرسال الطلب!",
    sentDesc: "فُتح واتساب مع ملخص طلبك. سيرد عليك فريقنا خلال دقائق بالإحداثيات البنكية.",
    orderIntro: "مرحبا، أريد الطلب من Dropsellerr:",
    totalLabel: "المجموع",
    customer: "الزبون",
    backToCart: "تعديل السلة",
  },
};

export default function Checkout() {
  const { items, total, setQty, remove } = useCart();
  const { lang } = useLang();
  const t = getT(lang);
  const c = CONTENT[lang];
  const [form, setForm] = useState({ name: "", whatsapp: "", email: "" });
  const [sent, setSent] = useState(false);

  const buildMessage = () => {
    const lines = items.map(
      ({ product, qty }) => `• ${product.name.fr} — ${product.duration.fr} — ${qty} x ${product.price.toFixed(2)} USD`
    );
    return [
      c.orderIntro,
      "",
      ...lines,
      "",
      `${c.totalLabel}: ${total.toFixed(2)} USD`,
      "",
      `${c.customer}: ${form.name}`,
      `WhatsApp: ${form.whatsapp}`,
      form.email ? `Email: ${form.email}` : "",
      `${c.paymentMethod}: ${c.bankTransfer}`,
    ]
      .filter(Boolean)
      .join("\n");
  };

  return (
    <>
      <Helmet>
        <title>Commander — Dropsellerr</title>
        <link rel="canonical" href={`${STORE.domain}/commander`} />
        <meta name="description" content="Passez commande sur Dropsellerr : récapitulatif, paiement par virement CIH (RIB/IBAN), livraison de vos accès via WhatsApp." />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{c.title}</h1>
        <p className="mt-2 text-gray-500 max-w-2xl">{c.subtitle}</p>

        {items.length === 0 && !sent ? (
          <div className="mt-10 p-12 rounded-2xl border border-dashed border-gray-200 text-center">
            <p className="font-semibold text-gray-900">{c.emptyTitle}</p>
            <p className="mt-1 text-sm text-gray-500">{c.emptyDesc}</p>
            <Link to="/catalogue" className="mt-5 inline-block px-6 py-3 rounded-xl bg-brand-600
