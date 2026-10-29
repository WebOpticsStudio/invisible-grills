"use client";

import React, { useState, useId } from "react";
import type { Faq } from "@/types";
import { Plus, Minus } from "lucide-react";

export function FaqAccordion({
  faqs,
  className = "",
}: {
  faqs: Faq[];
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`divide-y divide-slate-800 border-y border-slate-800 ${className}`}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const triggerId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={faq.q} className="group py-2">
            <h3>
              <button
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-[#C5A880]"
              >
                <span className="font-display text-base sm:text-lg font-medium tracking-tight text-white pr-6 group-hover:text-[#C5A880] transition-colors">
                  {faq.q}
                </span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded border border-slate-700 bg-slate-900/60 text-slate-300 group-hover:border-[#C5A880] group-hover:text-[#C5A880] transition-colors">
                  {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
              className={`pb-6 text-sm text-slate-300 font-light leading-relaxed max-w-3xl transition-opacity duration-300 ${
                isOpen ? "block opacity-100" : "hidden opacity-0"
              }`}
            >
              <p>{faq.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
