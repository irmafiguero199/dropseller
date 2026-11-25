import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { MessageCircle, Mail, MapPin, Send } from "lucide-react";
import SectionHeader from "../components/SectionHeader.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import { STORE, waLink } from "../data/store.js";

const CONTENT = {
  fr: {
    title: "Contact",
    subtitle: "Une question, une commande, un problème ? Notre équipe répond 7j/7.",
    via: "Nous contacter",
    whatsapp: "WhatsApp (réponse en quelques minutes)",
    email: "Email",
    location: "Localisation",
    formTitle: "Envoyer un message",
    name: "Votre nom",
    emailField: "Votre email",
    message: "Votre message",
    send: "Envoyer via WhatsApp",
    toast: "Message préparé — WhatsApp va s'ouvrir avec votre message.",
  },
  ar: {
    title: "اتصل بنا",
    subtitle: "سؤال؟ طلب؟ مشكل؟ فريقنا يجيب 7/7.",
    via: "تواصل معنا",
    whatsapp: "واتساب (رد خلال دقائق)",
    email: "البريد الإلكتروني",
    location: "الموقع",
    formTitle: "أرسل رسالة",
    name: "اسمك",
    emailField: "بريدك الإلكتروني",
    message: "رسالتك",
    send: "أرسل عبر واتساب",
    toast: "تم تجهيز الرسالة — سيُفتح واتساب برسالتك.",
  },
};

export default function Contact() {
  const { lang } = useLang();
  const c = CONTENT[lang];
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const msg = lang === "fr"
      ? `Bonjour, je suis ${form.name} (${form.email}).

${form.message}`
      : `مرحبا، أنا ${form.name} (${form.email}).

${form.message}`;
    window.open(waLink(msg), "_blank");
    setSent(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact — Dropsellerr</title>
        <link rel="canonical" href={`${STORE.domain}/contact`} />
        <meta name="description" content="Contactez Dropsellerr : WhatsApp 7j/7 pour vos commandes et questions, email support@dropsellerr.com." />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader title={c.title} subtitle={c.subtitle} />

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="font-bold text-gray-900">{c.via}</h2>
            <a
              href={waLink(lang === "fr" ? "Bonjour, j'ai une question." : "مرحبا، لدي سؤال.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 hover:border-green-500 transition-colors"
            >
              <span className="w-11 h-11 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6" />
              </span>
              <div>
                <p className="font-semibold text-gray-900">WhatsApp</p>
                <p className="text-sm text-gray-500">{c.whatsapp}</p>
              </div>
            </a>
            <a
              href={`mailto:${STORE.email}`}
              className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 hover:border-brand-500 transition-colors"
            >
              <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </span>
              <div>
                <p className="font-semibold text-gray-900">{c.email}</p>
                <p className="text-sm text-gray-500">{STORE.email}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100">
              <span className="w-11 h-11 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </span>
              <div>
                <p className="font-semibold text-gray-900">{c.location}</p>
                <p className="text-sm text-gray-500">{STORE.location}</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50">
            <h2 className="font-bold text-gray-900 mb-4">{c.formTitle}</h2>
            {sent ? (
              <p className="text-sm text-green-600 font-medium">{c.toast}</p>
            ) : (
              <form onSubmit={submit} className="space-y-3">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={c.name}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={c.emailField}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={c.message}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  {c.send}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
