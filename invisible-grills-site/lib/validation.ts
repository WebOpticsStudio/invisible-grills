import { z } from "zod";

export const serviceCategories = [
  { value: "invisible-grill", label: "Invisible Grill Installation" },
  { value: "pigeon-safety-nets", label: "Pigeon Safety Nets" },
  { value: "ac-outdoor-unit-safety-nets", label: "AC Outdoor Unit Safety Nets" },
  { value: "child-safety-nets", label: "Child Safety Nets" },
  { value: "invisible-window-grills", label: "Invisible Window Grills" },
  { value: "duct-area-safety-nets", label: "Duct Area Safety Nets" },
  { value: "terrace-safety-nets", label: "Terrace Safety Nets" },
  { value: "balcony-safety-nets", label: "Balcony Safety Nets" },
  { value: "anti-monkey-safety-nets", label: "Anti Monkey Safety Nets" },
  { value: "construction-safety-nets", label: "Construction Safety Nets" },
  { value: "cricket-practice-nets", label: "Cricket Practice Nets" },
  { value: "parking-area-safety-nets", label: "Parking Area Safety Nets" },
] as const;

export const serviceCategoryLabels = serviceCategories.map((s) => s.label);

export const propertyTypes = [
  { value: "apartment", label: "Apartment" },
  { value: "independent-house", label: "Independent house" },
  { value: "villa", label: "Villa" },
  { value: "commercial", label: "Commercial space" },
] as const;

export const installationTypes = [
  { value: "balcony", label: "Balcony" },
  { value: "window", label: "Windows" },
  { value: "child-safety", label: "Child safety" },
  { value: "pet-safety", label: "Pet safety" },
  { value: "bird-protection", label: "Bird protection" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export const contactMethods = [
  { value: "phone", label: "Phone call" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "email", label: "Email" },
] as const;


const values = <T extends readonly { value: string }[]>(list: T) =>
  list.map((i) => i.value) as [T[number]["value"], ...T[number]["value"][]];

const name = z.string().trim().min(2, "Enter your full name");
const phone = z.string().trim().regex(/^(?:\+91|91|0)?[\s-]?[6-9]\d{4}[\s-]?\d{5}$/, "Enter a valid 10-digit Indian mobile number");
const dimension = z.string().trim().regex(/^$|^\d{1,3}(\.\d{1,2})?$/, "Enter a number in feet, for example 6.5");
const consent = z.literal("on", { message: "Please agree so we can contact you about this enquiry" });

export const quoteSchema = z
  .object({
    name,
    phone,
    email: z.union([z.literal(""), z.string().trim().email("Enter a valid email address")]),
    propertyType: z.enum(values(propertyTypes), { message: "Select a property type" }),
    location: z.string().trim().min(3, "Enter your area and city"),
    installationType: z.enum(values(installationTypes), { message: "Select what you need" }),
    width: dimension,
    height: dimension,
    contactMethod: z.enum(values(contactMethods), { message: "Select how we should reach you" }),
    notes: z.string().trim().max(1000, "Keep notes under 1000 characters"),
    consent,
  })
  .refine((d) => d.contactMethod !== "email" || d.email !== "", { path: ["email"], message: "Add an email address to be contacted by email" });

export const contactSchema = z.object({
  name,
  phone,
  message: z.string().trim().min(5, "Tell us briefly how we can help").max(1000, "Keep your message under 1000 characters"),
  consent,
});

export const callbackSchema = z.object({
  name,
  phone,
  area: z.string().trim().min(2, "Please enter your area or locality"),
  service: z.string().trim().min(2, "Please select the service needed"),
});


export const PHOTO_LIMITS = { count: 3, bytes: 5 * 1024 * 1024, types: ["image/jpeg", "image/png", "image/webp"] };

/** Returns an error message, or null when the files are acceptable. */
export function validatePhotos(files: { size: number; type: string }[]): string | null {
  if (files.length > PHOTO_LIMITS.count) return `Attach up to ${PHOTO_LIMITS.count} photos`;
  for (const f of files) {
    if (!PHOTO_LIMITS.types.includes(f.type)) return "Photos must be JPG, PNG or WebP";
    if (f.size > PHOTO_LIMITS.bytes) return "Each photo must be under 5 MB";
  }
  return null;
}
