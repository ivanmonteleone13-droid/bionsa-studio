export const business = {
  name: "Bionsa Studio",
  tagline: "Korean lashlift & brow studio",
  description:
    "Bryn & fransar skräddarsytt efter dina önskemål — för hållbara resultat och en lyxig känsla hos Matilda på Muningatan 19 i Uppsala.",
  category: "Beauty",
  address: {
    street: "Muningatan 19",
    postalCode: "753 08",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "070-740 79 37",
  phoneLink: "tel:+46707407937",
  email: "Matildaandrea.leal@gmail.com" as string | null,
  emailLink: "mailto:Matildaandrea.leal@gmail.com" as string | null,
  bookingUrl: "https://www.bokadirekt.se/places/bionsa-studio-135623",
  bookingLabel: "Boka på Bokadirekt",
  websiteUrl: null as string | null,
  logoImage: null as string | null,
  heroImage: "/images/hero.jpg",
  aboutImage: "/images/gallery-2.jpg",
  facebookUrl: null as string | null,
  instagramUrl: "https://www.instagram.com/bionsastudio/" as string | null,
  owner: "Matilda",
  rating: 5.0,
  reviewCount: 61,
  foundedYear: 2010,
  coordinates: { lat: 59.8517, lng: 17.6502 },
  hours: {
    note: "Ring gärna innan besök.",
    regular: [
      { day: "Måndag", hours: "10:00 – 17:00" },
      { day: "Tisdag", hours: "10:00 – 17:00" },
      { day: "Onsdag", hours: "10:00 – 17:00" },
      { day: "Torsdag", hours: "10:00 – 17:00" },
      { day: "Fredag", hours: "10:00 – 17:00" },
      { day: "Lördag", hours: "Stängt" },
      { day: "Söndag", hours: "Stängt" },
    ],
  },
  trustBadges: [
    { label: "5.0 på Bokadirekt", icon: "star" },
    { label: "61+ omdömen", icon: "reviews" },
    { label: "Uppsala centrum", icon: "location" },
    { label: "🌸 Korean Beauty", icon: "student" },
  ],
  usps: [
    {
      title: "Koreansk lashlift",
      description: "Skräddarsydda behandlingar för fransar och bryn med fokus på detaljer.",
    },
    {
      title: "Personlig service",
      description: "Varje behandling anpassas efter dina drag, stil och önskemål.",
    },
    {
      title: "Höga betyg",
      description: "61+ nöjda kunder enligt offentliga omdömen på Bokadirekt.",
    },
    {
      title: "Centralt läge",
      description: "Finns på Muningatan 19 i Uppsala.",
    },
  ],
  services: [
    {
      id: "koreansk-lashlift",
      name: "Koreansk lashlift",
      icon: "✨",
      description: "NYHET! Koreansk lashlift inkl. färg & keratin — skräddarsytt efter dina önskemål.",
      duration: "30–90 min",
      priceFrom: 995,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "klassisk-lashlift",
      name: "Klassisk lashlift",
      icon: "🌸",
      description: "Klassisk lashlift inkl. färg & keratin för hållbara och naturliga resultat.",
      duration: "30–90 min",
      priceFrom: 800,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "browlift",
      name: "Browlift",
      icon: "💫",
      description: "Browlift inkl. färg & keratin — lyfter och formar ögonbrynen naturligt.",
      duration: "30–90 min",
      priceFrom: 1095,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "brynfix",
      name: "Brynfix",
      icon: "🎯",
      description: "Brynplock och färg av bryn — detaljarbete för ett definierat uttryck.",
      duration: "30–90 min",
      priceFrom: 800,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "fransfarg",
      name: "Fransfärg",
      icon: "⭐",
      description: "Färgning av fransar och bryn för ett fräscht, hållbart resultat.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  gallery: [
    { id: 1, label: "Lashlift", image: "/images/gallery-1.jpg" },
    { id: 2, label: "Studio", image: "/images/gallery-2.jpg" },
    { id: 3, label: "Bryn & fransar", image: "/images/gallery-3.jpg" },
    { id: 4, label: "Resultat", image: "/images/gallery-4.jpg" },
    { id: 5, label: "Behandling", image: "/images/gallery-5.jpg" },
    { id: 6, label: "Atmosfär", image: "/images/gallery-6.jpg" },
  ],
  testimonials: [
    {
      text: "Supernöjd med min lashlift, och Matilda var såå snäll och välkomnande 🥰💞",
      author: "Paulina A.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/bionsa-studio-135623",
      rating: 5,
      date: "2026-06-21",
    },
    {
      text: "Kände mig så bekväm och väl omhändertagen! Matilda är grym på det hon gör och gav mig ett par helt nya ögonbryn och fantastiska fransar. Kommer definitivt tillbaka ❤️",
      author: "Angelika K.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/bionsa-studio-135623",
      rating: 5,
      date: "2026-06-17",
    },
    {
      text: "Har testat flera lashlift ställen… INGEN toppar Matildas arbete. Aldrig varit lika nöjd som när jag gjort här. Så så otroligt nöjd!!😍",
      author: "Sara K.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/bionsa-studio-135623",
      rating: 5,
      date: "2026-06-17",
    },
    {
      text: "Jättefina bryn och fransar!",
      author: "Karolina W.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/bionsa-studio-135623",
      rating: 5,
      date: "2026-06-16",
    },
  ],
  about: {
    headline: "Om Bionsa Studio",
    paragraphs: [
      "Välkommen till Bionsa Studio — en plats för dig som vill känna dig lite mer som dig själv fast med ett extra lyft.",
      "Här skapas skräddarsydda behandlingar för fransar och bryn med fokus på detaljerna som gör skillnad. Oavsett om du vill ha ett mjukt, naturligt resultat eller ett mer definierat uttryck anpassas varje behandling efter dina drag, din stil och känslan du vill lämna med.",
      "Hos Matilda handlar det inte bara om fransar och bryn, utan om den där lyxiga känslan av att känna sig fräsch, omhändertagen och självsäker även i det lilla.",
    ],
  },
  faq: [
    {
      question: "Var ligger Bionsa Studio?",
      answer: "Vi finns på Muningatan 19, 753 08 Uppsala.",
    },
    {
      question: "Hur bokar jag tid hos Bionsa Studio?",
      answer: "Boka via Bokadirekt eller ring 070-740 79 37.",
    },
    {
      question: "Vad säger kunder om Bionsa Studio?",
      answer: "Vi har 5.0 i snittbetyg baserat på 61+ recensioner.",
    },
    {
      question: "Vilka öppettider har ni?",
      answer: "Ring gärna innan besök.",
    },
    {
      question: "Kan jag avboka min tid?",
      answer: "Ja, via Bokadirekt kan du hantera din bokning. Avbokning ska ske minst 24 timmar innan bokad tid.",
    },
    {
      question: "Hur länge håller lashlift?",
      answer: "Normalt 6–8 veckor beroende på din franscykel.",
    },
    {
      question: "Vad är brow lift?",
      answer: "En behandling som lyfter och formar ögonbrynen naturligt.",
    },
  ],
  seoKeywords: [
    "lashlift Uppsala",
    "koreansk lashlift Uppsala",
    "browlift Uppsala",
    "fransar Luthagen",
    "brynbehandling Uppsala",
    "Bionsa Studio",
    "Uppsala korean_beauty",
  ],
  brandColors: {
    primary: "#2D2D2D",
    secondary: "#FFB7C5",
    accent: "#FFF5F7",
    dark: "#1a1a1a",
  },
} as const;

export function getFullAddress() {
  const { street, postalCode, city } = business.address;
  return `${street}, ${postalCode} ${city}`;
}

export function getMapsEmbedUrl() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export function getMapsLink() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export function formatPrice(amount: number | null) {
  if (amount === null) return "Pris på förfrågan";
  return `från ${amount} kr`;
}
