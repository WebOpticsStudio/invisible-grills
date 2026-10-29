import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyActions } from "@/components/StickyActions";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { jsonLdString, localBusinessJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: `${site.tagline} ${site.supportingMessage} Precision engineered 316 stainless steel invisible grills and architectural pleated mosquito mesh systems.`,
  keywords: [
    "invisible grills",
    "balcony safety grills",
    "invisible grills Bangalore",
    "invisible grills Hyderabad",
    "architectural safety systems",
    "mosquito mesh",
    "316 stainless steel safety cables",
  ],
  authors: [{ name: "CLEARVIEW Architectural Systems" }],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
    title: `${site.name} — ${site.tagline}`,
    description: `${site.tagline} ${site.supportingMessage}`,
    images: [
      {
        url: "/images/hero-balcony.jpg",
        width: 1200,
        height: 675,
        alt: "CLEARVIEW Architectural Safety Systems - Invisible Grills",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.supportingMessage,
    images: ["/images/hero-balcony.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#080B11",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${manrope.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-[#080B11] text-[#94A3B8] antialiased selection:bg-[#C9A86A]/25 selection:text-white pb-28 md:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-[#0B0F17] focus:px-4 focus:py-2 focus:text-white focus:shadow-lg focus:border focus:border-[#C5A880]"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>

        <SiteFooter />
        <StickyActions />
        <FloatingWhatsApp />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString(localBusinessJsonLd()) }}
        />
      </body>
    </html>
  );
}
