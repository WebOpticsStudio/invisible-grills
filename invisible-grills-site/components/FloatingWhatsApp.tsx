"use client";

import React, { useState } from "react";
import { whatsappLink } from "@/lib/links";
import { MessageCircle, X } from "lucide-react";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 right-4 sm:right-6 z-40 md:bottom-8 md:right-8 flex flex-col items-end pointer-events-none">
      {/* Optional dismissible tooltip prompt */}
      {showTooltip && (
        <div className="mb-2 hidden sm:flex items-center gap-2 rounded-full border border-slate-800 bg-[#121721] px-4 py-2 text-xs text-white shadow-2xl pointer-events-auto">
          <span className="font-medium">Have a quick question? Chat on WhatsApp</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss chat tooltip"
            className="text-slate-400 hover:text-white"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Floating button */}
      <a
        href={whatsappLink(
          "Hello CLEARVIEW, I am exploring invisible grills for my residence and would like to speak with an engineer."
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly with a CLEARVIEW installation engineer on WhatsApp"
        className="pointer-events-auto group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-raised transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a] focus-visible:outline-[#C5A880]"
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
        <span className="sr-only">Chat on WhatsApp</span>

        {/* Pulse effect badge with Warm Champagne Gold */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C9A86A] opacity-75" />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-[#C9A86A] text-[9px] font-bold text-[#0B0F17] items-center justify-center">
            1
          </span>
        </span>
      </a>
    </div>
  );
}
