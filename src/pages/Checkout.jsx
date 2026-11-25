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
      .join("
");
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
            <Link to="/catalogue" className="mt-5 inline-block px-6 py-3 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700">
              {c.browse}
            </Link>
          </div>
        ) : sent ? (
          <div className="mt-10 p-10 rounded-2xl bg-green-50 border border-green-100 text-center max-w-2xl mx-auto">
            <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <p className="text-xl font-bold text-gray-900">{c.sentTitle}</p>
            <p className="mt-2 text-gray-600">{c.sentDesc}</p>
            <Link to="/catalogue" className="mt-6 inline-block px-6 py-3 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700">
              {c.browse}
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-6">
              <section className="p-6 rounded-2xl border border-gray-100">
                <h2 className="font-bold text-gray-900 mb-4">{c.yourInfo}</h2>
                <div className="space-y-3">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={c.fullName}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                  <input
                    required
                    value={form.whatsapp}
                    onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                    placeholder={c.whatsappNumber}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    dir="ltr"
                  />
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={c.emailOptional}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <h2 className="font-bold text-gray-900 mt-6 mb-3">{c.paymentMethod}</h2>
                <div className="flex items-start gap-3 p-4 rounded-xl border-2 border-brand-500 bg-brand-50">
                  <Landmark className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm flex items-center gap-2">
                      <CreditCard className="w-4 h-4" /> {c.bankTransfer}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{c.bankTransferDesc}</p>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-gray-50">
                  <p className="text-sm font-semibold text-gray-900 mb-2">{c.instructionsTitle}</p>
                  <ol className="space-y-1.5">
                    {c.instructions.map((step, i) => (
                      <li key={i} className="text-sm text-gray-500 flex gap-2">
                        <span className="font-semibold text-brand-600 shrink-0">{i + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </section>
            </div>

            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-24 p-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
                <h2 className="font-bold text-gray-900 mb-4">{t.common.orderSummary}</h2>
                <div className="space-y-3">
                  {items.map(({ product, qty }) => (
                    <div key={product.slug} className="flex items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 leading-snug">{product.name[lang]}</p>
                        <p className="text-xs text-gray-500">{product.duration[lang]}</p>
                        <div className="mt-1.5 flex items-center gap-2">
                          <button
                            onClick={() => setQty(product.slug, qty - 1)}
                            className="w-6 h-6 rounded-md border border-gray-200 text-gray-600 text-xs hover:bg-gray-50"
                          >
                            −
                          </button>
                          <span className="text-xs font-medium tabular-nums">{qty}</span>
                          <button
                            onClick={() => setQty(product.slug, qty + 1)}
                            className="w-6 h-6 rounded-md border border-gray-200 text-gray-600 text-xs hover:bg-gray-50"
                          >
                            +
                          </button>
                          <button
                            onClick={() => remove(product.slug)}
                            className="ms-auto p-1 rounded-md text-gray-400 hover:text-red-500"
                            aria-label={t.common.remove}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-gray-900 tabular-nums">
                        {t.common.currency}{(product.price * qty).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between font-bold text-gray-900">
                  <span>{t.common.total}</span>
                  <span className="tabular-nums">{t.common.currency}{total.toFixed(2)}</span>
                </div>
                <button
                  disabled={!form.name.trim() || !form.whatsapp.trim()}
                  onClick={() => {
                    window.open(waLink(buildMessage()), "_blank");
                    setSent(true);
                  }}
                  className="mt-5 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <MessageCircle className="w-5 h-5" />
                  {c.sendOrder}
                </button>
                <p className="mt-3 text-xs text-gray-400 text-center">{c.bankTransferDesc}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
