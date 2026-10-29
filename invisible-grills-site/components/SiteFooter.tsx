import Link from "next/link";
import { site } from "@/lib/site";
import { telLink, whatsappLink } from "@/lib/links";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  const sevenSystems = [
    "Invisible Balcony Grills",
    "Invisible Window Grills",
    "Pigeon Safety Nets",
    "Bird Safety Nets",
    "Child Safety Nets",
    "AC Outdoor-Unit Safety",
    "Apartment Safety Nets",
  ];

  return (
    <footer className="border-t border-slate-800 bg-[#0B111E] text-[#EAEBE7]">
      <div className="mx-auto max-w-page px-6 md:px-12 lg:px-16 pt-12 md:pt-14 pb-6 md:pb-8">
        <div className="grid gap-10 md:gap-12 lg:gap-16 lg:grid-cols-12 items-start">
          {/* Column 1: Left Column (The Core Identity) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block group focus-visible:outline-[#C5A880]">
              <span className="font-display text-2xl font-semibold tracking-[0.06em] text-white group-hover:text-[#C5A880] transition-colors">
                CLEARVIEW
              </span>
              <span className="block text-[9px] font-semibold uppercase tracking-[0.28em] text-[#C5A880] mt-0.5">
                ARCHITECTURAL SAFETY SYSTEMS
              </span>
            </Link>

            {/* 1-Line Clean Description */}
            <p className="text-xs sm:text-sm leading-relaxed text-slate-300 font-light max-w-md">
              Premium, near-invisible safety engineering for luxury high-rises and modern residential balconies.
            </p>

            {/* Local Neighborhood Chips (Bangalore local areas) */}
            <div className="pt-2">
              <span className="block text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-500 mb-2">
                Priority Service Suburbs
              </span>
              <div className="flex flex-wrap gap-1.5">
                {site.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="border border-slate-800/90 bg-slate-900/60 px-2.5 py-1 text-[9px] tracking-[0.16em] uppercase text-slate-400 rounded-sm hover:border-[#C5A880]/40 transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Middle Column (The 7 Systems) - Moved to right & center-aligned */}
          <div className="lg:col-span-4 space-y-3.5 lg:mx-auto lg:text-center w-full max-w-[260px]">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C5A880]">
              The 7 Systems
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-light">
              {sevenSystems.map((name) => (
                <li
                  key={name}
                  className="py-0.5 border-b border-slate-800/50 text-slate-300/90"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Studio Inquiries - Aligned vertically with Navbar FREE QUOTE right edge */}
          <div className="lg:col-span-3 space-y-3.5 lg:flex lg:flex-col lg:items-end lg:text-right">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C5A880]">
              Studio Inquiries
            </h4>
            <div className="space-y-3.5 text-xs text-slate-300 font-light lg:flex lg:flex-col lg:items-end">
              <div>
                <span className="block text-[9px] uppercase tracking-[0.2em] text-slate-400 mb-0.5">
                  Primary Studio Line
                </span>
                <a
                  href={telLink(site.phone)}
                  className="font-medium text-white hover:text-[#C5A880] transition-colors tracking-wide text-sm block"
                >
                  {site.phoneDisplay}
                </a>
              </div>

              <div>
                <span className="block text-[9px] uppercase tracking-[0.2em] text-slate-400 mb-0.5">
                  Secondary Line
                </span>
                <a
                  href={telLink(site.phoneSecondary)}
                  className="font-medium text-white hover:text-[#C5A880] transition-colors tracking-wide text-sm block"
                >
                  {site.phoneSecondaryDisplay}
                </a>
              </div>

              <div className="pt-1">
                <a
                  href={whatsappLink("Hello CLEARVIEW, I would like to arrange an on-site architectural consultation.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#C5A880] bg-[#C5A880]/10 px-5 py-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C5A880] hover:bg-[#C5A880] hover:text-[#0B111E] transition-all cursor-pointer"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>

              <div className="pt-1 text-[11px] text-slate-400 leading-relaxed font-light">
                {site.hours}
              </div>
            </div>
          </div>
        </div>

        {/* Lower Row: Copyright & Systems Links */}
        <div className="mt-8 md:mt-10 border-t border-slate-800/80 pt-4 md:pt-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} CLEARVIEW &bull; Architectural Safety Systems.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/services" className="hover:text-white transition-colors">
              Systems
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Consultation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
