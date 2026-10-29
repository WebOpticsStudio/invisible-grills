import Link from "next/link";
import { telLink, whatsappLink } from "@/lib/links";
import { site } from "@/lib/site";
import { Phone, MessageSquare, PhoneCall } from "lucide-react";

export function StickyActions() {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-800 bg-[#0B0F17]/95 px-4 py-2.5 shadow-[0_-4px_25px_rgba(0,0,0,0.6)] backdrop-blur-md md:hidden"
    >
      <div className="mx-auto flex max-w-sm items-center justify-between gap-2">
        <a
          href={telLink(site.phone)}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-slate-800 bg-[#121721] py-2.5 text-xs font-semibold text-white transition-colors hover:border-[#C5A880] active:scale-95"
        >
          <Phone className="h-3.5 w-3.5 text-[#C5A880]" />
          <span>Call Line 1</span>
        </a>

        <a
          href={whatsappLink("Hello CLEARVIEW, I would like to request an on-site invisible grill inspection.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-slate-800 bg-[#121721] py-2.5 text-xs font-semibold text-white transition-colors hover:border-emerald-500 active:scale-95"
        >
          <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
          <span>WhatsApp</span>
        </a>

        <Link
          href="/contact"
          className="flex flex-[1.2] items-center justify-center gap-1.5 rounded-full bg-[#C9A86A] py-2.5 text-xs font-bold uppercase tracking-wider text-[#0B0F17] shadow-lg shadow-amber-950/30 transition-all hover:bg-[#D4AF37] active:scale-95"
        >
          <PhoneCall className="h-3.5 w-3.5 text-[#0B0F17]" />
          <span>Free Quote</span>
        </Link>
      </div>
    </aside>
  );
}
