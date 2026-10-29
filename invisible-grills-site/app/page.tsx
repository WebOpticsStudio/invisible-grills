import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import ConsultationSection from "@/components/ConsultationSection";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import { generalFaqs } from "@/data/faqs";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  // 13 Core Services with Dedicated Photorealistic Images
  const servicesList = [
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

  // 3-Card Installation Process - Streamlined & Authority-Driven
  const processSteps = [
    {
      num: "01",
      title: "01. TECHNICAL SITE SURVEY",
      desc: "Our engineering team visits your property to take microscopic measurements and run load-bearing checks on your structural walls.",
    },
    {
      num: "02",
      title: "02. PRECISION FABRICATION",
      desc: "We cut premium 316L marine-grade cables and heavy-duty aluminum tracks to your exact balcony specifications, customized to match your building's exterior elevation.",
    },
    {
      num: "03",
      title: "03. CERTIFIED INSTALLATION",
      desc: "Our certified experts securely anchor the structure, thoroughly clean the site, and hand over your lifetime structural warranty.",
    },
  ];



  // Curated FAQs for Homepage
  const homepageFaqs = generalFaqs.slice(0, 6);

  return (
    <>
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. OUR SERVICES SECTION - 3 PER ROW CARDS GRID */}
      <section id="services" className="bg-[#0B0F17] pt-10 md:pt-12 pb-10 md:pb-12">
        <div className="mx-auto max-w-page px-6 md:px-12 lg:px-16">
          <div className="mb-8 md:mb-10 text-center max-w-2xl mx-auto space-y-2.5">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#C5A880]/50 bg-[#C5A880]/15 px-3.5 py-1 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#DFC193]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A880]" />
                OUR SPECIALIZATION
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              ARCHITECTURAL SERVICES.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
              Premium safety installations tailored for residential and commercial high-rises across Bangalore.
            </p>
          </div>

          {/* Cards format side by side, 3 for row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesList.map((service) => (
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
                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-white group-hover:text-[#C5A880] transition-colors leading-snug min-h-[3rem] flex items-center">
                    {service.name}
                  </h3>

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
      </section>

      {/* 3. ABOUT CLEARVIEW: Concise, High-Converting Overview */}
      <section className="border-y border-slate-800 bg-[#0E131D] pt-10 md:pt-12 pb-10 md:pb-12">
        <div className="mx-auto max-w-page px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-5">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#C5A880]/50 bg-[#C5A880]/15 px-3.5 py-1 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#DFC193]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A880]" />
                ABOUT CLEARVIEW
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Invisible Structural Safety. Zero Visual Bulk.
            </h2>

            {/* Limited Reading Container Width with Increased Line Height (10-12 words per line) */}
            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed sm:leading-loose text-center">
              We eliminate the heavy, claustrophobic iron cages of conventional grilles, replacing them with high-tension 316 marine-grade steel cables built for unyielding high-altitude protection.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
              <span className="text-white font-semibold">Certified AISI 316 Marine Alloy</span>
              <span className="text-[#C5A880]">&bull;</span>
              <span className="text-white font-semibold">Sub-Millimeter Laser Precision</span>
              <span className="text-[#C5A880]">&bull;</span>
              <span className="text-white font-semibold">HEPA Dust-Free Drilling</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR PROCESS: HOW WE WORK */}
      <section className="bg-[#080B11] pt-10 md:pt-12 pb-10 md:pb-12 border-t border-slate-800">
        <div className="mx-auto max-w-page px-6 md:px-12 lg:px-16">
          <div className="mb-8 md:mb-10 text-center max-w-2xl mx-auto space-y-2.5">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#C5A880]/50 bg-[#C5A880]/15 px-3.5 py-1 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#DFC193]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A880]" />
                OUR WORKFLOW
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              HOW WE WORK.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
              A seamless, engineering-first approach to securing your balcony and window spaces.
            </p>
            <div className="pt-1.5">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#C5A880]/30 bg-[#C5A880]/10 px-4 py-1.5 text-xs font-medium tracking-wide text-[#C5A880]">
                📍 Available exclusively across Bangalore
              </span>
            </div>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="rounded-3xl border border-slate-800 bg-[#121721] p-7 sm:p-9 text-center flex flex-col items-center shadow-xl hover:border-[#C5A880]/50 transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Step Circle Badge */}
                <div className="mb-5 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-slate-700 bg-[#1A2230] text-lg sm:text-xl font-extrabold tracking-tight text-[#C5A880] shadow-inner group-hover:border-[#C5A880] group-hover:bg-[#C5A880]/10 transition-colors">
                  {step.num}
                </div>

                {/* Step Title */}
                <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-wide text-white mb-3">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQS SECTION: Answering Key Client Inquiries */}
      <section className="border-t border-slate-800 bg-[#0E131D] pt-10 md:pt-12 pb-10 md:pb-12">
        <div className="mx-auto max-w-page px-6 md:px-12 lg:px-16">
          <div className="mb-6 md:mb-8 max-w-xl">
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#C5A880] block mb-2">
              Technical Clarifications
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-white">
              Frequently Asked Questions.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              Clear answers regarding society approvals, wind loading, child safety pitch, and fire safety.
            </p>
          </div>

          <div className="max-w-4xl">
            <FaqAccordion faqs={homepageFaqs} />
          </div>
        </div>
      </section>

      {/* 6. REVIEWS: CLIENT PERSPECTIVES - INFINITE MARQUEE */}
      <section className="border-t border-slate-800 bg-black pt-10 md:pt-12 pb-4 text-white overflow-hidden">
        <div className="mx-auto max-w-page px-6 md:px-12 lg:px-16">
          {/* Header - Aligned with previous sections */}
          <div className="mb-4 max-w-2xl sm:max-w-3xl">
            <div className="mb-2.5">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#C5A880]/50 bg-[#C5A880]/15 px-3 py-1 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#DFC193]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A880]" />
                CLIENT PERSPECTIVES
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              TRUSTED IN HIGH-RISES.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
              Verified homeowners share their experience with Clearview safety systems.
            </p>
          </div>
        </div>

        {/* Pure Tailwind CSS Infinite Marquee */}
        <TestimonialMarquee />
      </section>

      {/* 7. PRIVATE STRUCTURAL CONSULTATION & COMPACT FORM CARD */}
      <ConsultationSection />
    </>
  );
}
