// Catalogue — nom + description en français et en arabe
export const CATEGORIES = [
  {
    id: "streaming",
    slug: "streaming-divertissement",
    icon: "clapperboard",
    name: { fr: "Streaming & Divertissement", ar: "البث والترفيه" },
    desc: {
      fr: "Netflix, YouTube, Spotify — profils privés en 4K, livrés rapidement.",
      ar: "نتفليكس، يوتيوب، سبوتيفاي — بروفايلات خاصة بجودة 4K وتوصيل سريع.",
    },
  },
  {
    id: "ia",
    slug: "outils-ia-productivite",
    icon: "bot",
    name: { fr: "Outils IA & Productivité", ar: "أدوات الذكاء الاصطناعي والإنتاجية" },
    desc: {
      fr: "ChatGPT Plus, Adobe Creative Cloud et les meilleurs outils IA.",
      ar: "ChatGPT Plus، Adobe Creative Cloud وأفضل أدوات الذكاء الاصطناعي.",
    },
  },
  {
    id: "design",
    slug: "design-creation",
    icon: "palette",
    name: { fr: "Design & Création", ar: "التصميم والإبداع" },
    desc: {
      fr: "Canva Pro, CapCut Pro — tout pour créer du contenu professionnel.",
      ar: "Canva Pro وCapCut Pro — كل ما تحتاجه لصناعة محتوى احترافي.",
    },
  },
  {
    id: "securite",
    slug: "vpn-securite",
    icon: "shield",
    name: { fr: "VPN & Sécurité", ar: "VPN والأمان" },
    desc: {
      fr: "NordVPN et ExpressVPN — navigation privée et sécurisée.",
      ar: "NordVPN وExpressVPN — تصفح خاص وآمن.",
    },
  },
  {
    id: "packs",
    slug: "packs-bundles",
    icon: "package",
    name: { fr: "Packs & Bundles", ar: "الباقات والعروض المجمعة" },
    desc: {
      fr: "Des packs regroupant plusieurs services à prix réduit.",
      ar: "باقات تجمع عدة خدمات بسعر مخفض.",
    },
  },
];

export const PRODUCTS = [
  {
    slug: "netflix-premium-4k-1-mois",
    category: "streaming",
    name: { fr: "Netflix Premium 4K — profil privé", ar: "نتفليكس بريميوم 4K — بروفايل خاص" },
    price: 3.5,
    duration: { fr: "1 mois", ar: "شهر واحد" },
    delivery: {
      fr: "Livraison digitale via WhatsApp — sous 5 à 30 minutes",
      ar: "توصيل رقمي عبر واتساب — خلال 5 إلى 30 دقيقة",
    },
    desc: {
      fr: "Profil Netflix Premium privé avec accès 4K Ultra HD + HDR. Connexion sur TV, smartphone, tablette et ordinateur. Garantie de remplacement pendant toute la durée de l'abonnement en cas de problème d'accès.",
      ar: "بروفايل نتفليكس بريميوم خاص بجودة 4K Ultra HD + HDR. يعمل على التلفاز، الهاتف، اللوحي والحاسوب. ضمان الاستبدال طوال مدة الاشتراك في حال أي مشكل في الدخول.",
    },
    features: [
      { fr: "Qualité 4K Ultra HD + HDR", ar: "جودة 4K Ultra HD + HDR" },
      { fr: "Profil privé avec code PIN", ar: "بروفايل خاص برمز PIN" },
      { fr: "Tous appareils compatibles", ar: "متوافق مع جميع الأجهزة" },
      { fr: "Remplacement garanti pendant 1 mois", ar: "استبدال مضمون طوال الشهر" },
    ],
    popular: true,
  },
  {
    slug: "netflix-premium-4k-3-mois",
    category: "streaming",
    name: { fr: "Netflix Premium 4K — 3 mois", ar: "نتفليكس بريميوم 4K — 3 أشهر" },
    price: 9,
    duration: { fr: "3 mois", ar: "3 أشهر" },
    delivery: {
      fr: "Livraison digitale via WhatsApp — sous 5 à 30 minutes",
      ar: "توصيل رقمي عبر واتساب — خلال 5 إلى 30 دقيقة",
    },
    desc: {
      fr: "Le forfait 3 mois du profil Netflix Premium 4K privé. Le meilleur rapport qualité/prix pour profiter de tout le catalogue sans interruption. Garantie de remplacement totale pendant 3 mois.",
      ar: "باقة 3 أشهر لبروفايل نتفليكس بريميوم 4K الخاص. أفضل قيمة مقابل السعر للاستمتاع بكامل المحتوى دون انقطاع. ضمان استبدال كامل طوال 3 أشهر.",
    },
    features: [
      { fr: "Qualité 4K Ultra HD + HDR", ar: "جودة 4K Ultra HD + HDR" },
      { fr: "Économisez 1.50 $ par rapport au forfait mensuel", ar: "وفّر 1.50$ مقارنة بالاشتراك الشهري" },
      { fr: "Profil privé avec code PIN", ar: "بروفايل خاص برمز PIN" },
      { fr: "Remplacement garanti pendant 3 mois", ar: "استبدال مضمون طوال 3 أشهر" },
    ],
    popular: false,
  },
  {
    slug: "youtube-premium-1-mois",
    category: "streaming",
    name: { fr: "YouTube Premium (+ YouTube Music)", ar: "يوتيوب بريميوم (+ يوتيوب ميوزيك)" },
    price: 2,
    duration: { fr: "1 mois", ar: "شهر واحد" },
    delivery: {
      fr: "Livraison digitale via WhatsApp — sous 5 à 30 minutes",
      ar: "توصيل رقمي عبر واتساب — خلال 5 إلى 30 دقيقة",
    },
    desc: {
      fr: "YouTube sans publicité avec lecture en arrière-plan et téléchargements hors ligne, plus YouTube Music Premium inclus. Activation sur votre propre compte Google.",
      ar: "يوتيوب بدون إعلانات مع تشغيل في الخلفية والتحميل للمشاهدة دون إنترنت، بالإضافة إلى يوتيوب ميوزيك بريميوم. التفعيل يتم على حسابك الشخصي في جوجل.",
    },
    features: [
      { fr: "Zéro publicité", ar: "بدون إعلانات نهائيا" },
      { fr: "Lecture en arrière-plan + hors ligne", ar: "تشغيل في الخلفية + دون إنترنت" },
      { fr: "YouTube Music Premium inclus", ar: "يوتيوب ميوزيك بريميوم مشمول" },
      { fr: "Remplacement garanti pendant 1 mois", ar: "استبدال مضمون طوال الشهر" },
    ],
    popular: true,
  },
  {
    slug: "spotify-premium-1-mois",
    category: "streaming",
    name: { fr: "Spotify Premium", ar: "سبوتيفاي بريميوم" },
    price: 2.5,
    duration: { fr: "1 mois", ar: "شهر واحد" },
    delivery: {
      fr: "Livraison digitale via WhatsApp — sous 5 à 30 minutes",
      ar: "توصيل رقمي عبر واتساب — خلال 5 إلى 30 دقيقة",
    },
    desc: {
      fr: "Musique sans publicité, qualité audio maximale et téléchargements hors ligne. Upgrade de votre propre compte Spotify, vos playlists sont conservées.",
      ar: "موسيقى بدون إعلانات، بأعلى جودة صوت وتحميل دون إنترنت. الترقية تتم على حسابك الخاص في سبوتيفاي مع الاحتفاظ بقوائم التشغيل.",
    },
    features: [
      { fr: "Sans publicité, qualité très haute", ar: "بدون إعلانات بجودة عالية جدا" },
      { fr: "Téléchargement hors ligne", ar: "تحميل للاستماع دون إنترنت" },
      { fr: "Upgrade sur votre compte existant", ar: "ترقية على حسابك الحالي" },
      { fr: "Remplacement garanti pendant 1 mois", ar: "استبدال مضمون طوال الشهر" },
    ],
    popular: false,
  },
  {
    slug: "chatgpt-plus-1-mois",
    category: "ia",
    name: { fr: "ChatGPT Plus", ar: "ChatGPT Plus" },
    price: 8,
    duration: { fr: "1 mois", ar: "شهر واحد" },
    delivery: {
      fr: "Livraison digitale via WhatsApp — sous 5 à 30 minutes",
      ar: "توصيل رقمي عبر واتساب — خلال 5 إلى 30 دقيقة",
    },
    desc: {
      fr: "Accès complet à ChatGPT Plus : modèles les plus puissants, accès prioritaire aux heures de pointe, génération d'images et navigation. Compte dédié ou upgrade selon disponibilité.",
      ar: "وصول كامل إلى ChatGPT Plus: أقوى النماذج، أولوية في أوقات الذروة، توليد الصور والتصفح. حساب مخصص أو ترقية حسب التوفر.",
    },
    features: [
      { fr: "Modèles les plus avancés", ar: "أكثر النماذج تقدما" },
      { fr: "Accès prioritaire aux heures de pointe", ar: "أولوية الوصول في أوقات الذروة" },
      { fr: "Génération d'images incluse", ar: "توليد الصور مشمول" },
      { fr: "Remplacement garanti pendant 1 mois", ar: "استبدال مضمون طوال الشهر" },
    ],
    popular: true,
  },
  {
    slug: "adobe-creative-cloud-1-mois",
    category: "ia",
    name: { fr: "Adobe Creative Cloud", ar: "Adobe Creative Cloud" },
    price: 8,
    duration: { fr: "1 mois", ar: "شهر واحد" },
    delivery: {
      fr: "Livraison digitale via WhatsApp — sous 5 à 30 minutes",
      ar: "توصيل رقمي عبر واتساب — خلال 5 إلى 30 دقيقة",
    },
    desc: {
      fr: "Accès à la suite Adobe complète : Photoshop, Illustrator, Premiere Pro, After Effects et plus de 20 applications créatives. Activation sur votre compte Adobe.",
      ar: "وصول إلى حزمة أدوبي الكاملة: فوتوشوب، إليستريتور، بريمير برو، أفتر إفكتس وأكثر من 20 تطبيقا إبداعيا. التفعيل على حسابك في أدوبي.",
    },
    features: [
      { fr: "+20 applications Adobe incluses", ar: "أكثر من 20 تطبيق أدوبي مشمول" },
      { fr: "Photoshop + Premiere Pro + After Effects", ar: "فوتوشوب + بريمير + أفتر إفكتس" },
      { fr: "Mises à jour incluses", ar: "التحديثات مشمولة" },
      { fr: "Remplacement garanti pendant 1 mois", ar: "استبدال مضمون طوال الشهر" },
    ],
    popular: false,
  },
  {
    slug: "canva-pro-1-an",
    category: "design",
    name: { fr: "Canva Pro (invitation équipe)", ar: "Canva Pro (دعوة فريق)" },
    price: 5,
    duration: { fr: "1 an", ar: "سنة كاملة" },
    delivery: {
      fr: "Livraison digitale via WhatsApp — sous 5 à 30 minutes",
      ar: "توصيل رقمي عبر واتساب — خلال 5 إلى 30 دقيقة",
    },
    desc: {
      fr: "Canva Pro pendant 12 mois via invitation à une équipe Pro sur votre propre compte Canva : templates premium, fonds photos et vidéos, détourage magique, arrière-plan transparent et plus.",
      ar: "Canva Pro لمدة 12 شهرا عبر دعوة إلى فريق Pro على حسابك الخاص: قوالب بريميوم، صور ومقاطع فيديو، إزالة الخلفية السحرية والمزيد.",
    },
    features: [
      { fr: "12 mois sur votre propre compte", ar: "12 شهرا على حسابك الخاص" },
      { fr: "Arrière-plan transparent + détourage magique", ar: "خلفية شفافة + إزالة الخلفية" },
      { fr: "+100 millions de photos et assets premium", ar: "أكثر من 100 مليون صورة وأصل مميز" },
      { fr: "Planificateur de contenu inclus", ar: "مخطط المحتوى مشمول" },
    ],
    popular: true,
  },
  {
    slug: "capcut-pro-1-mois",
    category: "design",
    name: { fr: "CapCut Pro", ar: "CapCut Pro" },
    price: 3,
    duration: { fr: "1 mois", ar: "شهر واحد" },
    delivery: {
      fr: "Livraison digitale via WhatsApp — sous 5 à 30 minutes",
      ar: "توصيل رقمي عبر واتساب — خلال 5 إلى 30 دقيقة",
    },
    desc: {
      fr: "Montage vidéo sans filigrane avec export 4K, effets Pro, templates premium et cloud. Activation sur votre compte CapCut.",
      ar: "مونتاج فيديو بدون علامة مائية مع تصدير 4K، مؤثرات برو وقوالب مميزة. التفعيل على حسابك في CapCut.",
    },
    features: [
      { fr: "Export 4K sans filigrane", ar: "تصدير 4K بدون علامة مائية" },
      { fr: "Effets et templates Pro", ar: "مؤثرات وقوالب برو" },
      { fr: "Espace cloud inclus", ar: "مساحة سحابية مشمولة" },
      { fr: "Remplacement garanti pendant 1 mois", ar: "استبدال مضمون طوال الشهر" },
    ],
    popular: false,
  },
  {
    slug: "nordvpn-expressvpn-12-mois",
    category: "securite",
    name: { fr: "NordVPN / ExpressVPN — 12 mois", ar: "NordVPN / ExpressVPN — 12 شهرا" },
    price: 10,
    duration: { fr: "12 mois", ar: "12 شهرا" },
    delivery: {
      fr: "Livraison digitale via WhatsApp — sous 5 à 30 minutes",
      ar: "توصيل رقمي عبر واتساب — خلال 5 إلى 30 دقيقة",
    },
    desc: {
      fr: "Licence VPN premium 12 mois : navigation privée, déblocage géographique, vitesse maximale et chiffrement complet. Vous choisissez NordVPN ou ExpressVPN lors de la commande.",
      ar: "رخصة VPN بريميوم لمدة 12 شهرا: تصفح خاص، فتح المحتوى الجغرافي، سرعة قصوى وتشفير كامل. اختر NordVPN أو ExpressVPN عند الطلب.",
    },
    features: [
      { fr: "Au choix : NordVPN ou ExpressVPN", ar: "الاختيار بين NordVPN أو ExpressVPN" },
      { fr: "Serveurs dans +60 pays", ar: "خوادم في أكثر من 60 دولة" },
      { fr: "Jusqu'à 6 appareils simultanés", ar: "حتى 6 أجهزة في نفس الوقت" },
      { fr: "Remplacement garanti pendant 12 mois", ar: "استبدال مضمون طوال 12 شهرا" },
    ],
    popular: false,
  },
  {
    slug: "pack-createur-1-mois",
    category: "packs",
    name: { fr: "Pack Créateur — Canva + CapCut + VPN", ar: "باقة صانع المحتوى — Canva + CapCut + VPN" },
    price: 12,
    oldPrice: 16,
    duration: { fr: "1 mois (Canva : 1 an)", ar: "شهر واحد (Canva: سنة)" },
    delivery: {
      fr: "Livraison digitale via WhatsApp — sous 5 à 30 minutes",
      ar: "توصيل رقمي عبر واتساب — خلال 5 إلى 30 دقيقة",
    },
    desc: {
      fr: "Le pack complet du créateur de contenu : Canva Pro (1 an), CapCut Pro (1 mois) et un VPN premium (1 mois). Économisez 4 $ par rapport à l'achat séparé.",
      ar: "الباقة الكاملة لصانع المحتوى: Canva Pro (سنة كاملة) وCapCut Pro (شهر) وVPN بريميوم (شهر). وفّر 4$ مقارنة بالشراء المنفصل.",
    },
    features: [
      { fr: "Canva Pro — 12 mois", ar: "Canva Pro — 12 شهرا" },
      { fr: "CapCut Pro — 1 mois", ar: "CapCut Pro — شهر واحد" },
      { fr: "VPN premium — 1 mois", ar: "VPN بريميوم — شهر واحد" },
      { fr: "Économie de 4 $ (25 %)", ar: "توفير 4$ (25%)" },
    ],
    popular: true,
  },
];

export const getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);
export const getCategory = (id) => CATEGORIES.find((c) => c.id === id);
export const productsByCategory = (id) => PRODUCTS.filter((p) => p.category === id);
