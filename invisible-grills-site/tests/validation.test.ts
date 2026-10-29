import { describe, expect, it } from "vitest";
import { contactSchema, quoteSchema, validatePhotos } from "@/lib/validation";

const valid = { name: "Asha Rao", phone: "9876543210", email: "", propertyType: "apartment", location: "Indiranagar, Bengaluru", installationType: "balcony", width: "8", height: "9.5", contactMethod: "phone", notes: "", consent: "on" };

describe("quoteSchema", () => {
  it("accepts a valid quote", () => expect(quoteSchema.safeParse(valid).success).toBe(true));
  it("rejects an invalid phone number", () => expect(quoteSchema.safeParse({ ...valid, phone: "12345" }).success).toBe(false));
  it("requires email when email contact is chosen", () => expect(quoteSchema.safeParse({ ...valid, contactMethod: "email" }).success).toBe(false));
  it("requires consent", () => expect(quoteSchema.safeParse({ ...valid, consent: undefined }).success).toBe(false));
  it("rejects non-numeric dimensions", () => expect(quoteSchema.safeParse({ ...valid, width: "wide" }).success).toBe(false));
});

describe("contactSchema", () => {
  it("accepts a valid message", () => expect(contactSchema.safeParse({ name: "Asha", phone: "+91 98765 43210", message: "Need a quote", consent: "on" }).success).toBe(true));
});

describe("validatePhotos", () => {
  it("accepts small images", () => expect(validatePhotos([{ size: 1000, type: "image/png" }])).toBeNull());
  it("rejects oversize, wrong type and too many", () => {
    expect(validatePhotos([{ size: 6e6, type: "image/png" }])).not.toBeNull();
    expect(validatePhotos([{ size: 10, type: "application/pdf" }])).not.toBeNull();
    expect(validatePhotos(Array(4).fill({ size: 10, type: "image/png" }))).not.toBeNull();
  });
});
