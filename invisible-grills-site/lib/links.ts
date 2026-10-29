import { site } from "./site";

export const telLink = (num?: string) => `tel:${(num || site.phone).replace(/[\s-]/g, "")}`;
export const whatsappLink = (message = "Hello, I would like to enquire about invisible grills.") =>
  `https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

