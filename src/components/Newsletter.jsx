import { useState } from "react";
import { MailCheck, Send } from "lucide-react";
import { useLang } from "../context/LanguageContext.jsx";

const CONTENT = {
  fr: {
    title: "Restez informé des nouveautés et promos",
    subtitle: "Recevez nos nouveaux produits et offres spéciales directement par email.",
    placeholder: "Votre adresse email",
    button: "S'abonner",
    success: "Inscription enregistrée. Merci !",
  },
  ar: {
    title: "ابق على اطلاع بالجديد والعروض",
    subtitle: "استلم منتجاتنا الجديدة وعروضنا الخاصة مباشرة عبر البريد الإلكتروني.",
    placeholder: "بريدك الإلكتروني",
    button: "اشترك",
    success: "تم تسجيل اشتراكك. شكرا!",
  },
};

export default function Newsletter() {
  const { lang } = useLang();
  const c = CONTENT[lang];
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    const list = JSON.parse(localStorage.getItem("dropsellerr_newsletter") || "[]");
    localStorage.setItem("dropsellerr_newsletter", JSON.stringify([...list, email]));
    setDone(true);
  };

  return (
    <section className="rounded-3xl bg-brand-600 px-6 py-12 md:p-14 text-center text-white">
      <MailCheck className="w-10 h-10 mx-auto mb-4 opacity-90" />
      <h2 className="text-2xl md:text-3xl font-bold">{c.title}</h2>
      <p className="mt-2 text-brand-100 max-w-xl mx-auto">{c.subtitle}</p>
      {done ? (
        <p className="mt-6 font-semibold text-white">{c.success}</p>
      ) : (
        <form onSubmit={submit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={c.placeholder}
            className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-brand-200 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-white text-brand-700 font-semibold hover:bg-brand-50 transition-colors flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            {c.button}
          </button>
        </form>
      )}
    </section>
  );
}
