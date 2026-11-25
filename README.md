# Dropsellerr — Boutique digitale

Boutique e-commerce de produits et services numériques (streaming, IA, design, VPN, packs).
Site bilingue **français / arabe** (avec RTL), panier persistant, checkout via **WhatsApp**, paiement **virement CIH (RIB/IBAN)**.

## Stack

- React 18 + Vite
- Tailwind CSS
- React Router DOM
- React Helmet Async (SEO + canonical)
- Lucide React (icônes)

## Démarrage

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production → dist/
npm run preview
```

## Configuration — 2 minutes

Toute la configuration se passe dans **`src/data/store.js`** :

| Champ | Description |
|---|---|
| `whatsapp` | ⚠️ **Ton numéro WhatsApp au format international sans "+" ni espaces** (ex: `"212612345678"`). C'est la seule chose obligatoire avant le lancement. |
| `domain` | Ton domaine final (utilisé pour les canonical SEO et le sitemap) |
| `email` | Email de support affiché dans le footer |
| `location` | Ville / pays affiché dans la page Contact |
| `socials` | Liens Instagram / Telegram |

Le catalogue (produits, prix, durées, descriptions FR/AR) se modifie dans **`src/data/products.js`**.

## Déploiement

### Vercel (recommandé)
1. Pousse le projet sur GitHub.
2. Sur [vercel.com](https://vercel.com) : **Import Project** → sélectionne le repo.
3. Framework : Vite (détecté automatiquement). Build : `npm run build`, output : `dist`.
4. Ajoute ton domaine `dropsellerr.com` dans *Settings → Domains*.

### GitHub Pages
1. `npm run build`
2. Publie le dossier `dist/` (branche `gh-pages` via `npx gh-pages -d dist`).
3. Le `404.html` inclus redirige les routes SPA vers l'accueil.

Après le déploiement, mets à jour `domain` dans `src/data/store.js`, `public/robots.txt` et `public/sitemap.xml`, puis rebuild.

## Structure

```
public/                 assets statiques, robots, sitemap, 404.html
src/
  components/           Header, Footer, Hero, ProductCard, CartDrawer…
  context/              LanguageContext (FR/AR + RTL), CartContext (localStorage)
  data/                 store.js (config), products.js (catalogue), i18n.js
  layouts/              MainLayout
  pages/                17 pages (accueil, catalogue, produit, checkout, légal…)
  seo/                  StoreSchema (JSON-LD)
```

## Fonctionnement de la commande

1. Le client remplit le panier.
2. Checkout : nom + numéro WhatsApp.
3. Clic → WhatsApp s'ouvre avec le récapitulatif pré-rempli.
4. Tu réponds avec tes coordonnées CIH (RIB/IBAN), il envoie le reçu, tu livres les accès.
