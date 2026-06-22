export const business = {
  name: "Bionsa Studio",
  tagline: "Korean lashlift & brow studio",
  description: "Boutique lash and brow studio offering Korean lashlift and tailored brow treatments.",
  category: "Beauty",
  address: {
    street: "Muningatan 19",
    postalCode: "753 08",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "070-740 79 00",
  phoneLink: "tel:+46707407900",
  email: null as string | null,
  emailLink: null as string | null,
  bookingUrl: "https://www.bokadirekt.se/places/bionsa-studio-135623",
  bookingLabel: "Boka på Bokadirekt",
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  owner: "Bionsa Studio",
  rating: 5.0,
  reviewCount: 61,
  foundedYear: null as number | null,
  coordinates: { lat: 59.8588, lng: 17.6386 },
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
  usps: [
    {
      title: "Certifierad behandling",
      description: "Skönhetsbehandlingar med omsorg hos Bionsa Studio.",
    },
    {
      title: "Personlig service",
      description: "Varje besök anpassas efter dina önskemål.",
    },
    {
      title: "Populärt val",
      description: "Starkt betyg med 61 recensioner.",
    },
    {
      title: "Bekvämt läge",
      description: "Finns på Muningatan 19 i Uppsala.",
    },
  ],
  services: [
    {
      id: "lashlift",
      name: "Lashlift",
      description: "Professionell lashlift med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "browlift",
      name: "Browlift",
      description: "Professionell browlift med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "koreansk-lashlift",
      name: "Koreansk lashlift",
      description: "Professionell koreansk lashlift med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "brynfix",
      name: "Brynfix",
      description: "Professionell brynfix med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "fransf-rg",
      name: "Fransfärg",
      description: "Professionell fransfärg med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  testimonials: [
    {
      text: "Fantastisk upplevelse hos Bionsa Studio. Personalen var professionell och resultatet överträffade förväntningarna.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
    {
      text: "Rekommenderar Bionsa Studio varmt. Snabb service, trevligt bemötande och bra kvalitet till rimligt pris.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
  ],
  seoKeywords: [
    "lashlift Uppsala",
    "browlift Uppsala",
    "fransar Luthagen",
    "brynbehandling Uppsala",
  ],
  brandColors: {
    primary: "#8b4a6b",
    secondary: "#e8b4bc",
    accent: "#fdf6f8",
    dark: "#5c2d42",
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
