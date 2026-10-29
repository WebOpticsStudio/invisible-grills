// Single source of truth for business details.
const areas = process.env.NEXT_PUBLIC_SERVICE_AREAS ?? "Bangalore (All Neighborhoods & Suburbs)";

export const site = {
  name: process.env.NEXT_PUBLIC_BUSINESS_NAME ?? "CLEARVIEW — Architectural Safety Systems",
  brandName: "CLEARVIEW",
  subBrand: "Architectural Safety Systems",
  tagline: "Safety that respects your view.",
  supportingMessage: "Precision-fitted balcony and window protection for modern homes in Bangalore.",
  primaryCta: "Get Free Quote",
  secondaryCta: "Explore Services",

  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  
  // Primary and secondary contact numbers (placeholder fake numbers)
  phone: "+919876543210",
  phoneDisplay: "+91 98765 43210",
  phoneSecondary: "+918123456789",
  phoneSecondaryDisplay: "+91 81234 56789",
  whatsapp: "919876543210",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "enquiries@clearview-safety.in",
  address: process.env.NEXT_PUBLIC_ADDRESS ?? "Technical Center & Studio: Bengaluru, Karnataka (Installation services exclusively in Bangalore)",
  hours: process.env.NEXT_PUBLIC_HOURS ?? "Mon–Sat: 9:00 AM – 7:00 PM | Sun: By Appointment",
  serviceAreas: [
    "Whitefield",
    "Indiranagar",
    "Koramangala",
    "HSR Layout",
    "Hebbal",
    "Sarjapur Road",
    "Electronic City",
    "Jayanagar",
    "Sadashivanagar",
    "Bellandur",
  ],
  isIllustrative: true,
};

