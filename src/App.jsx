import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import StoreSchema from "./seo/StoreSchema.jsx";

import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Categories from "./pages/Categories.jsx";
import Bundles from "./pages/Bundles.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
import Reviews from "./pages/Reviews.jsx";
import FAQ from "./pages/FAQ.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Checkout from "./pages/Checkout.jsx";
import RefundPolicy from "./pages/RefundPolicy.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <CartProvider>
          <BrowserRouter>
            <ScrollToTop />
            <StoreSchema />
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/catalogue" element={<Catalog />} />
                <Route path="/produit/:slug" element={<ProductDetail />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/packs" element={<Bundles />} />
                <Route path="/comment-ca-marche" element={<HowItWorks />} />
                <Route path="/avis" element={<Reviews />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/commander" element={<Checkout />} />
                <Route path="/politique-remboursement" element={<RefundPolicy />} />
                <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
                <Route path="/conditions-utilisation" element={<TermsOfService />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}
