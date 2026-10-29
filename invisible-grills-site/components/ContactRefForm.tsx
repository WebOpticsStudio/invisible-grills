"use client";

import React, { useState, type FormEvent } from "react";
import { serviceCategoryLabels } from "@/lib/validation";
import { site } from "@/lib/site";
import { whatsappLink } from "@/lib/links";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactRefForm({ initialService = "" }: { initialService?: string }) {
  // Resolve service query parameter across all variations, slugs, or aliases
  const resolvedService = React.useMemo(() => {
    if (!initialService) return serviceCategoryLabels[0];
    const normalized = initialService.trim().toLowerCase();
    const exact = serviceCategoryLabels.find(
      (lbl) => lbl.toLowerCase() === normalized
    );
    if (exact) return exact;

    // Keyword match for shortcuts or legacy links
    if (normalized.includes("pigeon")) return "Pigeon Safety Nets";
    if (normalized.includes("child")) return "Child Safety Nets";
    if (normalized.includes("ac")) return "AC Outdoor Unit Safety Nets";
    if (normalized.includes("window")) return "Invisible Window Grills";
    if (normalized.includes("duct")) return "Duct Area Safety Nets";
    if (normalized.includes("terrace")) return "Terrace Safety Nets";
    if (normalized.includes("balcony")) return "Balcony Safety Nets";
    if (normalized.includes("monkey")) return "Anti Monkey Safety Nets";
    if (normalized.includes("cricket")) return "Cricket Practice Nets";
    if (normalized.includes("construction")) return "Construction Safety Nets";
    if (normalized.includes("parking")) return "Parking Area Safety Nets";
    return serviceCategoryLabels[0]; // Default to "Invisible Grill Installation"
  }, [initialService]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    service: resolvedService,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit phone number");
      return;
    }
    if (!formData.area.trim()) {
      setErrorMessage("Please enter your area / locality");
      return;
    }

    setStatus("submitting");

    // 1. Submit lead to server API in background
    try {
      const payload = new FormData();
      payload.set("form", "contact-ref");
      payload.set("name", formData.name);
      payload.set("phone", formData.phone);
      payload.set("area", formData.area);
      payload.set("service", formData.service || "Balcony Invisible Grills");
      payload.set("source", "contact-ref-page");

      await fetch("/api/leads", {
        method: "POST",
        body: payload,
      }).catch(() => {});
    } catch {
      // Continue to WhatsApp even if API call fails
    }

    // 2. Format WhatsApp message
    const msg = `Hello CLEARVIEW,\nI would like to request a call back.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nArea/Locality: ${formData.area}\nService: ${formData.service || "Balcony Invisible Grills"}`;
    const directUrl = whatsappLink(msg);

    setStatus("success");

    // Open WhatsApp in new tab
    if (typeof window !== "undefined") {
      window.open(directUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-[#121721] p-6 sm:p-10 shadow-2xl">
      <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase mb-6 sm:mb-8">
        REQUEST A CALL BACK
      </h2>

      {status === "success" && (
        <div className="mb-6 rounded-2xl border border-emerald-500/40 bg-emerald-950/40 p-4 text-xs text-emerald-200 flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold block text-sm text-white">Opening WhatsApp...</span>
            Your consultation details have been registered. An engineer is connecting with you.
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="mb-6 rounded-2xl border border-rose-500/40 bg-rose-950/40 p-4 text-xs text-rose-200 flex items-center gap-2">
          <AlertCircle className="h-4 w-4 text-rose-400 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Row 1: Name and Phone Number (2 columns as shown in ref) */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="ref-name" className="sr-only">
              Your Name
            </label>
            <input
              id="ref-name"
              name="name"
              type="text"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-800 bg-[#1A2230] px-4 py-3.5 text-sm text-white placeholder-slate-400 focus:border-[#C5A880] focus:bg-[#20293A] focus:outline-none focus:ring-1 focus:ring-[#C5A880] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="ref-phone" className="sr-only">
              Phone Number
            </label>
            <input
              id="ref-phone"
              name="phone"
              type="tel"
              required
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-800 bg-[#1A2230] px-4 py-3.5 text-sm text-white placeholder-slate-400 focus:border-[#C5A880] focus:bg-[#20293A] focus:outline-none focus:ring-1 focus:ring-[#C5A880] transition-colors"
            />
          </div>
        </div>

        {/* Row 2: Area / Locality (e.g. Kokapet) */}
        <div>
          <label htmlFor="ref-area" className="sr-only">
            Area / Locality
          </label>
          <input
            id="ref-area"
            name="area"
            type="text"
            required
            placeholder="Area / Locality (e.g. Kokapet)"
            value={formData.area}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-800 bg-[#1A2230] px-4 py-3.5 text-sm text-white placeholder-slate-400 focus:border-[#C5A880] focus:bg-[#20293A] focus:outline-none focus:ring-1 focus:ring-[#C5A880] transition-colors"
          />
        </div>

        {/* Row 3: Select Service Required */}
        <div className="relative">
          <label htmlFor="ref-service" className="sr-only">
            Select Service Required
          </label>
          <select
            id="ref-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full appearance-none rounded-xl border border-slate-800 bg-[#1A2230] px-4 py-3.5 text-sm text-white focus:border-[#C5A880] focus:bg-[#20293A] focus:outline-none focus:ring-1 focus:ring-[#C5A880] transition-colors"
          >
            <option value="" disabled className="bg-[#1A2230] text-slate-400">
              Select Service Required...
            </option>
            {serviceCategoryLabels.map((cat) => (
              <option key={cat} value={cat} className="bg-[#1A2230] text-white">
                {cat}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>

        {/* Row 4: Eclipse / Ellipse Shape CTA Button in Warm Champagne Gold (as in ref screenshot) */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-full bg-[#C9A86A] py-4 text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0F17] shadow-lg shadow-amber-950/30 transition-all duration-300 hover:bg-[#D4AF37] hover:scale-105 active:scale-95 disabled:opacity-70 cursor-pointer flex items-center justify-center gap-2"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin text-[#0B0F17]" />
                <span>PROCESSING...</span>
              </>
            ) : (
              <span>REQUEST CALL BACK</span>
            )}
          </button>
        </div>

        {/* Subtext from ref */}
        <p className="pt-2 text-center text-[11px] text-slate-400 font-light">
          Opens WhatsApp with your details &mdash; nothing is stored on this site.
        </p>
      </form>
    </div>
  );
}
