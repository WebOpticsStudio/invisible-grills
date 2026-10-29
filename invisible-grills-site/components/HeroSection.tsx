"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight, PhoneCall, CalendarCheck } from "lucide-react";

interface HeroSlide {
  image: string;
  badge: string;
  headlinePart1: string;
  headlinePart2: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  ctaIcon: "quote" | "callback" | "inspection";
}

const SLIDES: HeroSlide[] = [
  {
    image: "/images/service-child-safety.jpg",
    badge: "✓ 100% CHILD AND PET SAFETY",
    headlinePart1: "CHILD SAFETY.",
    headlinePart2: "ZERO COMPROMISE.",
    description:
      "Knotless mesh with an aperture a child cannot pass through, anchored into structural concrete.",
    ctaText: "GET FREE QUOTE",
    ctaHref: `/contact?service=${encodeURIComponent("Child Safety Nets")}`,
    ctaIcon: "quote",
  },
  {
    image: "/images/hero-balcony.jpg",
    badge: "✓ CERTIFIED 316L MARINE GRADE",
    headlinePart1: "INVISIBLE GRILLS.",
    headlinePart2: "UNCOMPROMISED SAFETY.",
    description:
      "High-tension steel protection engineered to keep your family secure without sacrificing a single degree of your view.",
    ctaText: "REQUEST CALL BACK",
    ctaHref: `/contact?service=${encodeURIComponent("Invisible Grill Installation")}`,
    ctaIcon: "callback",
  },
  {
    image: "/images/project-penthouse.jpg",
    badge: "✓ PREMIUM BALCONY & WINDOW PROTECTION",
    headlinePart1: "PREMIUM SAFETY.",
    headlinePart2: "UNINTERRUPTED VIEWS.",
    description:
      "High-tensile stainless steel invisible grills engineered for high-rise apartments and panoramic views.",
    ctaText: "BOOK INSPECTION",
    ctaHref: `/contact?service=${encodeURIComponent("Balcony Safety Nets")}`,
    ctaIcon: "inspection",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Slide changes every 2 seconds; paused on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const activeSlide = SLIDES[current];

  return (
    <section
      className="relative w-full h-[calc(100svh-68px)] md:h-[calc(100dvh-72px)] min-h-[460px] max-h-[820px] overflow-hidden bg-[#080B11] flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Architectural Showcase"
    >
      {/* 1. Full-bleed background imagery with smooth transition */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100 scale-100" : "opacity-0 scale-[1.02] pointer-events-none"
              } transform transition-transform duration-700`}
            aria-hidden={index !== current}
          >
            <Image
              src={slide.image}
              alt={`${slide.headlinePart1} ${slide.headlinePart2}`}
              fill
              priority
              loading="eager"
              className="object-cover object-center"
            />

            {/* High-contrast multi-layer gradient for pristine typography readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080B11] via-transparent to-black/35" />
          </div>
        ))}
      </div>

      {/* 2. Left and Right Arrow Navigation Controls */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:bg-black/80 hover:border-[#C5A880] hover:text-[#C5A880] hover:scale-105 active:scale-95 cursor-pointer shadow-xl"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:bg-black/80 hover:border-[#C5A880] hover:text-[#C5A880] hover:scale-105 active:scale-95 cursor-pointer shadow-xl"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* 3. Main Hero Content - sized to comfortably fit 100% inside viewport on both laptop and mobile */}
      <div className="relative z-10 mx-auto w-full max-w-page px-8 sm:px-14 md:px-20 lg:px-24 py-6 sm:py-8">
        <div className="max-w-2xl sm:max-w-3xl">
          {/* Eclipsed Content at the Top of Main Headline */}
          <div className="mb-2.5 sm:mb-3">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#C5A880] px-3.5 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-black tracking-[0.16em] uppercase text-[#0B0F17] shadow-xl shadow-amber-950/30">
              {activeSlide.badge}
            </span>
          </div>

          {/* Main Headline Using 2 Colors - Highlighting Safety & Protection */}
          <h1 className="font-display font-extrabold uppercase tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.94]">
            <span className="block text-white">
              {activeSlide.headlinePart1}
            </span>
            <span className="block text-[#C5A880] mt-1">
              {activeSlide.headlinePart2}
            </span>
          </h1>


          {/* Small 1 Short Line Description */}
          <p className="mt-2 sm:mt-2.5 max-w-xl text-xs sm:text-sm md:text-base text-slate-200/95 font-light leading-relaxed">
            {activeSlide.description}
          </p>

          {/* Exactly 1 Single CTA per slide redirecting to /contact */}
          <div className="mt-5 sm:mt-7">
            <Link
              href={activeSlide.ctaHref}
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#C5A880] px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-extrabold uppercase tracking-[0.16em] text-[#080B11] shadow-2xl shadow-amber-950/40 transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>{activeSlide.ctaText}</span>
              {activeSlide.ctaIcon === "quote" && (
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              )}
              {activeSlide.ctaIcon === "callback" && (
                <PhoneCall className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              )}
              {activeSlide.ctaIcon === "inspection" && (
                <CalendarCheck className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              )}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


