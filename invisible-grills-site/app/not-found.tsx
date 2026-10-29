import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-32 md:py-48 bg-[#080B11]">
      <div className="mx-auto w-full max-w-xl px-5 md:px-8 relative z-10 text-center">
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#C5A880] block mb-3">
          Error 404
        </span>

        <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-white">
          Page Not Found.
        </h1>

        <p className="mt-4 text-sm text-slate-300 font-light leading-relaxed">
          The page you are looking for has been moved or does not exist. Explore our core architectural systems or arrange a consultation.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#C9A86A] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#0B0F17] hover:bg-[#D4AF37] shadow-lg shadow-amber-950/30 transition-all hover:scale-105"
          >
            <span>Return Home</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-white hover:border-[#C5A880] hover:text-[#C5A880] transition-colors"
          >
            <span>View Services</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-[#C5A880]/50 bg-[#C5A880]/10 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A880] hover:bg-[#C5A880]/20 transition-colors"
          >
            <span>Contact Studio</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
