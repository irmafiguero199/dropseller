import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MessageCircle, Trash2, Landmark, Bitcoin, Upload, CheckCircle2 } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import { getT } from "../data/i18n.js";
import { STORE, waLink } from "../data/store.js";

const CONTENT = {
  fr: { title: "Finaliser la commande", subtitle: "Choisissez votre mode de paiement, effectuez le paiement, puis envoyez la preuve avec votre commande.", yourInfo: "Vos informations", fullName: "Nom complet", whatsappNumber: "Numéro WhatsApp (avec indicatif pays)", emailOptional: "Email (optionnel)", paymentMethod: "Mode de paiement", cih: "Virement bancaire CIH", cihDesc: "RIB / IBAN CIH", binance: "Binance Pay", binanceDesc: "Payez avec Binance Pay", paymentDetails: "Coordonnées de paiement", unavailable: "Les coordonnées CIH seront ajoutées prochainement.", payId: "Binance Pay ID", proof: "Preuve de paiement", chooseProof: "Choisir une image ou un fichier", proofHint: "Après l'ouverture de WhatsApp, joignez cette preuve à la conversation.", instructionsTitle: "Étapes du paiement", instructions: ["Choisissez CIH ou Binance Pay.", "Effectuez le paiement avec les coordonnées affichées.", "Sélectionnez votre preuve de paiement.", "Envoyez la commande sur WhatsApp et joignez la preuve."], sendOrder: "Envoyer la commande sur WhatsApp", emptyTitle: "Votre panier est vide", emptyDesc: "Ajoutez des produits avant de passer commande.", browse: "Parcourir le catalogue", sentTitle: "Commande préparée !", sentDesc: "WhatsApp s'est ouvert. N'oubliez pas de joindre votre preuve de paiement.", orderIntro: "Bonjour, je souhaite passer commande sur Dropsellerr :", totalLabel: "Total", customer: "Client", selectedPayment: "Paiement", proofLabel: "Preuve" },
  ar: { title: "إتمام الطلب", subtitle: "اختر طريقة الدفع، قم بالدفع، ثم أرسل إثبات الدفع مع طلبك.", yourInfo: "معلوماتك", fullName: "الاسم الكامل", whatsappNumber: "رقم واتساب (مع رمز الدولة)", emailOptional: "البريد الإلكتروني (اختياري)", paymentMethod: "طريقة الدفع", cih: "تحويل بنكي CIH", cihDesc: "RIB / IBAN ديال CIH", binance: "Binance Pay", binanceDesc: "الدفع عبر Binance Pay", paymentDetails: "معلومات الدفع", unavailable: "معلومات CIH غادي نضيفوها قريباً.", payId: "Binance Pay ID", proof: "إثبات الدفع", chooseProof: "اختار صورة أو ملف", proofHint: "من بعد ما يتحل واتساب، أرفق الإثبات فالمحادثة.", instructionsTitle: "مراحل الدفع", instructions: ["اختار CIH أو Binance Pay.", "قم بالدفع باستعمال المعلومات الظاهرة.", "اختار إثبات الدفع.", "أرسل الطلب عبر واتساب وأرفق الإثبات."], sendOrder: "أرسل الطلب على واتساب", emptyTitle: "السلة فارغة", emptyDesc: "أضف منتجات قبل إتمام الطلب.", browse: "تصفح المنتجات", sentTitle: "تم تجهيز الطلب!", sentDesc: "تحل واتساب. ما تنساش ترفق إثبات الدفع.", orderIntro: "السلام عليكم، بغيت ندير طلب من Dropsellerr:", totalLabel: "المجموع", customer: "الزبون", selectedPayment: "طريقة الدفع", proofLabel: "الإثبات" }
};

export default function Checkout() {
  const { items, total, setQty, remove } = useCart();
  const { lang } = useLang();
  const t = getT(lang);
  const c = CONTENT[lang];
  const [form, setForm] = useState({ name: "", whatsapp: "", email: "" });
  const [payment, setPayment] = useState("binance");
  const [proof, setProof] = useState(null);
  const [sent, setSent] = useState(false);

  const buildMessage = () => {
    const lines = items.map(({ product, qty }) => `• ${product.name.fr} — ${product.duration.fr} — ${qty} x ${product.price.toFixed(2)} USD`);
    return [c.orderIntro, "", ...lines, "", `${c.totalLabel}: ${total.toFixed(2)} USD`, "", `${c.customer}: ${form.name}`, `WhatsApp: ${form.whatsapp}`, form.email ? `Email: ${form.email}` : "", `${c.selectedPayment}: ${payment === "binance" ? c.binance : c.cih}`, proof ? `${c.proofLabel}: ${proof.name} (à joindre dans WhatsApp)` : `${c.proofLabel}: à envoyer dans WhatsApp`].filter(Boolean).join("\n");
  };

  if (items.length === 0 && !sent) return <div className="max-w-2xl mx-auto px-4 py-24 text-center"><h1 className="text-2xl font-bold text-gray-900">{c.emptyTitle}</h1><p className="mt-2 text-gray-500">{c.emptyDesc}</p><Link to="/catalogue" className="mt-6 inline-block px-6 py-3 rounded-xl bg-brand-600 text-white font-semibold">{c.browse}</Link></div>;
  if (sent) return <div className="max-w-2xl mx-auto px-4 py-24 text-center"><CheckCircle2 className="w-16 h-16 mx-auto text-green-500" /><h1 className="mt-5 text-2xl font-bold text-gray-900">{c.sentTitle}</h1><p className="mt-2 text-gray-500">{c.sentDesc}</p><Link to="/catalogue" className="mt-6 inline-block px-6 py-3 rounded-xl bg-brand-600 text-white font-semibold">{c.browse}</Link></div>;

  return <>
    <Helmet><title>{c.title} — {STORE.name}</title></Helmet>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">{c.title}</h1><p className="mt-2 text-gray-500 max-w-2xl">{c.subtitle}</p>
      <div className="mt-8 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <section className="p-6 rounded-2xl border border-gray-100 bg-white"><h2 className="font-bold text-gray-900 mb-4">{c.yourInfo}</h2><div className="space-y-3">
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={c.fullName} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500" />
            <input required value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} placeholder={c.whatsappNumber} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500" dir="ltr" />
            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder={c.emailOptional} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500" dir="ltr" />
          </div></section>
          <section className="p-6 rounded-2xl border border-gray-100 bg-white"><h2 className="font-bold text-gray-900 mb-4">{c.paymentMethod}</h2><div className="grid sm:grid-cols-2 gap-3">
            {[{ id: "binance", label: c.binance, desc: c.binanceDesc, Icon: Bitcoin }, { id: "cih", label: c.cih, desc: c.cihDesc, Icon: Landmark }].map(({ id, label, desc, Icon }) => <button type="button" key={id} onClick={() => setPayment(id)} className={`text-start p-4 rounded-xl border-2 transition-colors ${payment === id ? "border-brand-600 bg-brand-50" : "border-gray-100 hover:border-gray-300"}`}><Icon className="w-5 h-5 text-brand-600 mb-2" /><p className="font-semibold text-gray-900">{label}</p><p className="text-xs text-gray-500 mt-1">{desc}</p></button>)}
          </div><div className="mt-4 p-4 rounded-xl bg-gray-50 text-sm text-gray-700">{payment === "binance" ? <><p className="font-semibold">{c.payId}</p><p className="mt-1 font-mono text-lg">{STORE.paymentDetails.binancePayId}</p></> : <p>{STORE.paymentDetails.cihRib || STORE.paymentDetails.cihIban ? `${STORE.paymentDetails.cihRib} ${STORE.paymentDetails.cihIban}` : c.unavailable}</p>}</div></section>
          <section className="p-6 rounded-2xl border border-gray-100 bg-white"><h2 className="font-bold text-gray-900 mb-2">{c.proof}</h2><label className="flex items-center gap-3 p-4 rounded-xl border border-dashed border-gray-300 cursor-pointer hover:border-brand-500"><Upload className="w-5 h-5 text-brand-600" /><span className="text-sm text-gray-600">{proof ? proof.name : c.chooseProof}</span><input type="file" accept="image/*,.pdf" onChange={(e) => setProof(e.target.files?.[0] || null)} className="sr-only" /></label><p className="mt-2 text-xs text-gray-500">{c.proofHint}</p></section>
        </div>
        <aside className="lg:col-span-2"><div className="lg:sticky lg:top-24 p-6 rounded-2xl border border-gray-100 bg-white shadow-sm"><h2 className="font-bold text-gray-900 mb-4">{t.common.orderSummary}</h2><div className="space-y-3">{items.map(({ product, qty }) => <div key={product.slug} className="flex items-start gap-3"><div className="flex-1 min-w-0"><p className="text-sm font-medium text-gray-900">{product.name[lang]}</p><p className="text-xs text-gray-500">{product.duration[lang]}</p><div className="mt-1.5 flex items-center gap-2"><button onClick={() => setQty(product.slug, qty - 1)} className="w-6 h-6 rounded-md border text-gray-600">−</button><span className="text-xs font-medium">{qty}</span><button onClick={() => setQty(product.slug, qty + 1)} className="w-6 h-6 rounded-md border text-gray-600">+</button><button onClick={() => remove(product.slug)} className="ms-auto p-1 text-gray-400 hover:text-red-500" aria-label={t.common.remove}><Trash2 className="w-3.5 h-3.5" /></button></div></div><p className="text-sm font-semibold text-gray-900">{t.common.currency}{(product.price * qty).toFixed(2)}</p></div>)}</div><div className="mt-4 pt-4 border-t flex justify-between font-bold"><span>{t.common.total}</span><span>{t.common.currency}{total.toFixed(2)}</span></div><button disabled={!form.name.trim() || !form.whatsapp.trim()} onClick={() => { window.open(waLink(buildMessage()), "_blank"); setSent(true); }} className="mt-5 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 disabled:opacity-40"><MessageCircle className="w-5 h-5" />{c.sendOrder}</button></div></aside>
      </div>
    </div>
  </>;
}
