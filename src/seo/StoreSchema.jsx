import { STORE } from "../data/store.js";
import { PRODUCTS } from "../data/products.js";

export default function StoreSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: STORE.name,
    url: STORE.domain,
    description:
      "Boutique digitale : abonnements streaming, outils IA, logiciels et VPN à prix réduits, livrés via WhatsApp.",
    email: STORE.email,
    address: { "@type": "PostalAddress", addressLocality: "Casablanca", addressCountry: "MA" },
    makesOffer: PRODUCTS.map((p) => ({
      "@type": "Offer",
      name: p.name.fr,
      price: p.price.toFixed(2),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${STORE.domain}/produit/${p.slug}`,
    })),
  };
  return <script type="application/ld+json">{JSON.stringify(data)}</script>;
}
