import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactRefForm } from "@/components/ContactRefForm";
import { site } from "@/lib/site";
import { telLink, whatsappLink } from "@/lib/links";
import { MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — CLEARVIEW Architectural Safety",
  description:
    "Get in touch with CLEARVIEW. Call our direct line or request a callback for on-site invisible grill structural assessment.",
};

interface ContactPageProps {
  searchParams: Promise<{ service?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedSearchParams = await searchParams;
  const initialService = resolvedSearchParams?.service || "";

  return (
    <section className="min-h-[82vh] bg-[#0B111E] text-white py-12 md:py-20 flex flex-col justify-center">
      <div className="mx-auto w-full max-w-page px-6 md:px-12 lg:px-16">
        {/* Header requested: short headline "get in touch" and main headline "contact us" */}
        <div className="mb-10 md:mb-14 text-center sm:text-left">
          <span className="text-xs sm:text-sm font-bold tracking-[0.28em] uppercase text-[#C5A880] block mb-2">
            GET IN TOUCH
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
            CONTACT US
          </h1>
        </div>

        {/* Form and Direct Contact Cards as shown in reference */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-12 lg:items-stretch">
          {/* LEFT CARD: Direct Line, Support, and Ellipse WhatsApp / Instagram buttons */}
          <div className="lg:col-span-5 rounded-3xl border border-slate-800 bg-[#121721] p-8 sm:p-12 flex flex-col justify-between shadow-2xl space-y-10">
            <div className="space-y-8">
              {/* Direct Line */}
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-2">
                  DIRECT LINE
                </span>
                <a
                  href={telLink(site.phone)}
                  className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white hover:text-[#C5A880] transition-colors block"
                >
                  {site.phoneDisplay}
                </a>
              </div>

              {/* Support */}
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-2">
                  SUPPORT
                </span>
                <a
                  href={telLink(site.phoneSecondary)}
                  className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white hover:text-[#C5A880] transition-colors block"
                >
                  {site.phoneSecondaryDisplay}
                </a>
              </div>
            </div>

            {/* Ellipse action buttons matching ref */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800/80">
              <a
                href={whatsappLink(
                  "Hello CLEARVIEW, I would like to request an on-site invisible grill inspection."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-[#20ba5a] hover:scale-105 active:scale-95"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WHATSAPP US</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-[#1A2230] px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:border-slate-500 hover:bg-slate-800 active:scale-95"
              >
                <svg className="h-4 w-4 fill-current text-rose-400" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>INSTAGRAM</span>
              </a>
            </div>
          </div>

          {/* RIGHT CARD: Request A Call Back Form */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-8 text-center text-xs text-slate-500">Loading form...</div>}>
              <ContactRefForm initialService={initialService} />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
