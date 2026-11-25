// ─────────────────────────────────────────────────────────────
// CONFIGURATION DE LA BOUTIQUE — modifie uniquement ce fichier
// ─────────────────────────────────────────────────────────────
export const STORE = {
  name: "Dropsellerr",
  domain: "https://www.dropsellerr.com",
  email: "support@dropsellerr.com",
  // !!! IMPORTANT : remplace par ton numéro WhatsApp au format international SANS "+" ni espaces
  // ex : "212612345678"
  whatsapp: "2126XXXXXXXX",
  currency: "USD",
  foundedYear: 2026,
  location: "Casablanca, Maroc",
  paymentMethods: ["Virement CIH", "RIB", "IBAN"],
  socials: {
    whatsapp: "https://wa.me/2126XXXXXXXX",
    instagram: "https://instagram.com/dropsellerr",
    telegram: "https://t.me/dropsellerr",
  },
};

export const waLink = (message = "") =>
  `https://wa.me/${STORE.whatsapp}${message ? "?text=" + encodeURIComponent(message) : ""}`;
