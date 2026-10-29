import React from "react";
import Image from "next/image";

export interface ReviewItem {
  name: string;
  designation: string;
  rating: number;
  review: string;
  avatar: string;
}

const reviews: ReviewItem[] = [
  {
    name: "Siddharth & Priya Menon",
    designation: "18th Floor • Prestige Shantiniketan, Whitefield",
    rating: 5.0,
    review:
      "Transformed our balcony. We kept 100% of our panoramic sunset views with zero anxiety for our kids. Truly unyielding structural grade.",
    avatar: "/images/avatars/avatar-siddharth.jpg",
  },
  {
    name: "Dr. Ananya Reddy",
    designation: "Penthouse Owner • Sobha Silicon Oasis, HSR Layout",
    rating: 4.5,
    review:
      "Clean, silent, and extraordinarily precise installation. The crew used dust-free calibration drills and left zero masonry debris on our balcony.",
    avatar: "/images/avatars/avatar-ananya.jpg",
  },
  {
    name: "Vikram Malhotra",
    designation: "Tech Lead • Total Environment, Koramangala",
    rating: 4.8,
    review:
      "The 316L cables are practically invisible from 10 feet away. Passed our strict society facade inspection without a single hiccup. Outstanding craftsmanship.",
    avatar: "/images/avatars/avatar-vikram.jpg",
  },
  {
    name: "Rahul & Neha Sharma",
    designation: "24th Floor • Brigade Gateway, Rajajinagar",
    rating: 4.7,
    review:
      "Absolute peace of mind for our pet cats. The structural tension is perfect, completely rigid, and blending beautifully with the glass railing.",
    avatar: "/images/avatars/avatar-rahul-neha.jpg",
  },
];

// Helper to render exact vector stars: full stars, clipped half star, and muted empty stars
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1.5 mb-3.5">
      <div className="flex items-center gap-0.5 text-amber-400">
        {[1, 2, 3, 4, 5].map((star) => {
          const isFull = rating >= star;
          const isHalf = !isFull && rating >= star - 0.5;

          if (isFull) {
            return (
              <svg key={star} className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            );
          }

          if (isHalf) {
            return (
              <span key={star} className="relative inline-block w-4 h-4 shrink-0">
                {/* Background empty star */}
                <svg className="w-4 h-4 fill-slate-700 text-slate-700" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {/* 50% width clipped filled half star */}
                <span className="absolute inset-0 overflow-hidden w-1/2">
                  <svg className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
              </span>
            );
          }

          return (
            <svg key={star} className="w-4 h-4 fill-slate-700 text-slate-700 shrink-0" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          );
        })}
      </div>
      <span className="text-gray-400 text-xs font-mono font-semibold">({rating.toFixed(1)})</span>
    </div>
  );
}

export default function TestimonialMarquee() {
  // Duplicate 4 reviews into 8 items per loop, repeated twice (16 cards total)
  // This guarantees full coverage on laptops, desktops, and wide monitors
  const reviewTrack = [...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <div className="w-full overflow-hidden relative bg-black py-8 sm:py-12">
      {/* Gradients on the side to give an elite fading blur effect */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

      {/* Sliding Track Container - Pure hardware-accelerated CSS marquee sliding right to left */}
      <div className="animate-marquee-track gap-6 flex w-max">
        {reviewTrack.map((item, index) => (
          <div
            key={index}
            className="w-[310px] sm:w-[350px] bg-[#0c1017] border border-gray-800/80 rounded-2xl p-6 flex flex-col justify-between shrink-0 hover:border-[#C5A880]/60 hover:bg-[#0f141d] transition-all duration-300 shadow-xl"
          >
            <div>
              {/* Profile Head with Photorealistic Avatar */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-slate-700/80 shrink-0 shadow-md">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="text-white text-sm font-semibold truncate leading-snug">{item.name}</h4>
                  <p className="text-gray-400 text-xs truncate leading-normal mt-0.5">{item.designation}</p>
                </div>
              </div>

              {/* Graphical Stars (Proper full & half stars) */}
              <StarRating rating={item.rating} />

              {/* Short Review */}
              <p className="text-gray-300 text-sm leading-relaxed">&ldquo;{item.review}&rdquo;</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
