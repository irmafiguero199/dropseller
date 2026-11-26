// Configuration de la boutique
export const STORE = {
  name: "Dropsellerr",
  domain: "https://www.dropsellerr.com",
  email: "support@dropsellerr.com",
  whatsapp: "2126XXXXXXXX",
  currency: "USD",
  foundedYear: 2026,
  location: "Casablanca, Maroc",
  paymentMethods: ["Virement CIH", "Binance Pay"],
  paymentDetails: {
    cihRib: "",
    cihIban: "",
    binancePayId: "12345677",
  },
  socials: {
    whatsapp: "https://wa.me/2126XXXXXXXX",
    instagram: "https://instagram.com/dropsellerr",
    telegram: "https://t.me/dropsellerr",
  },
};

export const waLink = (message = "") =>
  `https://wa.me/${STORE.whatsapp}${message ? "?text=" + encodeURIComponent(message) : ""}`;
