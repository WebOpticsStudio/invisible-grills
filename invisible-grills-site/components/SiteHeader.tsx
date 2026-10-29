"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { telLink } from "@/lib/links";
import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileMenuOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-800/90 bg-[#0B0F17]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "border-b border-slate-800/60 bg-[#0B0F17]/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-page items-center justify-between px-6 md:px-12 lg:px-16 py-4">
        {/* Brand Wordmark on far left */}
        <Link
          href="/"
          className="group flex flex-col focus-visible:outline-[#C5A880]"
          aria-label="CLEARVIEW Architectural Systems"
        >
          <span className="font-display text-xl sm:text-2xl font-semibold tracking-[0.05em] text-white group-hover:text-[#C5A880] transition-colors">
            CLEARVIEW
          </span>
          <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#C5A880] -mt-0.5">
            Architectural Safety
          </span>
        </Link>

        {/* Far Right Content: Links (HOME, SERVICES, CONTACT) + Ghost FREE QUOTE Button */}
        <div className="hidden items-center gap-8 lg:gap-10 md:flex">
          <nav className="flex items-center gap-7 lg:gap-9" aria-label="Main Navigation">
            <Link
              href="/"
              className={`text-xs font-medium uppercase tracking-[0.22em] transition-colors hover:text-[#C5A880] ${
                pathname === "/" ? "text-white font-semibold border-b-2 border-[#C5A880] pb-1" : "text-slate-400"
              }`}
            >
              HOME
            </Link>

            <Link
              href="/services"
              className={`text-xs font-medium uppercase tracking-[0.22em] transition-colors hover:text-[#C5A880] ${
                pathname.startsWith("/services") ? "text-white font-semibold border-b-2 border-[#C5A880] pb-1" : "text-slate-400"
              }`}
            >
              SERVICES
            </Link>

            <Link
              href="/contact"
              className={`text-xs font-medium uppercase tracking-[0.22em] transition-colors hover:text-[#C5A880] ${
                pathname === "/contact" ? "text-white font-semibold border-b-2 border-[#C5A880] pb-1" : "text-slate-400"
              }`}
            >
              CONTACT
            </Link>
          </nav>

          {/* Ghost FREE QUOTE Button: clear background with thin outline */}
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full border border-[#C5A880]/80 bg-transparent px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A880] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#C5A880]/15 hover:text-white active:scale-95 cursor-pointer"
          >
            <span>FREE QUOTE</span>
            <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-[#121721] text-white hover:border-[#C5A880] transition-colors"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-x-0 bottom-0 top-[65px] z-50 flex flex-col justify-between overflow-y-auto bg-[#0B0F17] p-8 md:hidden shadow-2xl border-t border-slate-800"
        >
          <div className="space-y-8">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
              Navigation
            </span>

            <div className="flex flex-col space-y-5 text-base font-medium uppercase tracking-[0.18em] text-white">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-slate-800/80 pb-3 flex items-center justify-between"
              >
                <span>HOME</span>
                <ArrowUpRight className="h-4 w-4 text-[#C5A880]" />
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-slate-800/80 pb-3 flex items-center justify-between"
              >
                <span>SERVICES</span>
                <ArrowUpRight className="h-4 w-4 text-[#C5A880]" />
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-slate-800/80 pb-3 flex items-center justify-between"
              >
                <span>CONTACT</span>
                <ArrowUpRight className="h-4 w-4 text-[#C5A880]" />
              </Link>
            </div>
          </div>

          <div className="pt-6">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-[#C5A880]/80 bg-transparent py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A880] hover:bg-[#C5A880]/15 hover:text-white transition-colors"
            >
              <span>FREE QUOTE</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
