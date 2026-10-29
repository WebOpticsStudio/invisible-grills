import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services — CLEARVIEW Safety Systems",
  description:
    "Explore our complete range of certified invisible grills and safety netting installations for residential, commercial, and industrial properties.",
};

const allServices = [
  {
    name: "Invisible Grill Installation",
    image: "/images/hero-balcony.jpg",
  },
  {
    name: "Pigeon Safety Nets",
    image: "/images/service-pigeon-net.jpg",
  },
  {
    name: "AC Outdoor Unit Safety Nets",
    image: "/images/service-ac-unit.jpg",
  },
  {
    name: "Child Safety Nets",
    image: "/images/service-child-safety.jpg",
  },
  {
    name: "Invisible Window Grills",
    image: "/images/solution-window.jpg",
  },
  {
    name: "Duct Area Safety Nets",
    image: "/images/service-duct-net.jpg",
  },
  {
    name: "Terrace Safety Nets",
    image: "/images/balcony-after.jpg",
  },
  {
    name: "Balcony Safety Nets",
    image: "/images/project-penthouse.jpg",
  },
  {
    name: "Anti Monkey Safety Nets",
    image: "/images/service-monkey-net.jpg",
  },
  {
    name: "Construction Safety Nets",
    image: "/images/service-construction-net.jpg",
  },
  {
    name: "Cricket Practice Nets",
    image: "/images/service-cricket-net.jpg",
  },
  {
    name: "Parking Area Safety Nets",
    image: "/images/service-parking-net.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#0B0F17] text-white pt-8 sm:pt-12 pb-20 md:pb-28">
      <div className="mx-auto max-w-page px-6 md:px-12 lg:px-16">
        {/* Header - Compact, elevated, cleanly proportioned */}
        <div className="mb-8 md:mb-10 text-center max-w-2xl mx-auto space-y-2.5">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C5A880]/50 bg-[#C5A880]/15 px-3.5 py-1 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#DFC193]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C5A880]" />
              OUR SPECIALIZATION
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
            ARCHITECTURAL SERVICES.
          </h1>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            Premium safety installations tailored for residential and commercial high-rises across Bangalore.
          </p>
        </div>

        {/* Services Cards Grid: 3 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {allServices.map((service) => (
            <div
              key={service.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#111622] transition-all duration-300 hover:border-[#C5A880]/60 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)] hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111622] via-transparent to-transparent opacity-80" />
              </div>

              {/* Card Body: Service Name & Free Quote CTA (No Price) */}
              <div className="p-6 flex flex-col justify-between flex-1 gap-5">
                <h2 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-white group-hover:text-[#C5A880] transition-colors leading-snug min-h-[3rem] flex items-center">
                  {service.name}
                </h2>

                <div className="pt-2">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.name)}`}
                    className="group/btn inline-flex items-center justify-center gap-2 w-full rounded-full bg-[#C5A880] px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.16em] text-[#080B11] shadow-lg transition-all duration-300 hover:bg-white hover:text-black hover:scale-[1.02] active:scale-95 cursor-pointer"
                  >
                    <span>GET FREE QUOTE</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
