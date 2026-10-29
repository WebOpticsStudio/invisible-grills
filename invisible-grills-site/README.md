# Invisible Grills Website

Lead-generation website for an invisible grill installation business in India. Next.js (App Router), React, TypeScript, Tailwind CSS 3, Zod.

## Prerequisites
Node.js 20.9 or newer and npm.

## Setup
```bash
npm install
cp .env.example .env.local   # then edit the values
npm run dev                  # http://localhost:3000
```

## Commands
| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` / `npm start` | Production build and server |
| `npm run lint` | ESLint (Next.js core-web-vitals + TypeScript rules) |
| `npm run typecheck` | TypeScript check |
| `npm test` | Vitest: validation, enquiry API route, content integrity, sitemap |

## Environment variables
See `.env.example`. All `NEXT_PUBLIC_*` values are business details shown on the site and in structured data (phone, WhatsApp number in international format without `+`, email, address, service areas as a comma-separated list, hours). Defaults are obvious placeholders; replace them before launch.

`LEAD_WEBHOOK_URL` (server only) is where enquiries are forwarded as a multipart POST (fields plus up to 3 photos). **Without it the form returns a clear "not configured" message and no enquiry is stored or sent.** Point it at your CRM, a Zapier/Make webhook, or your own endpoint. Consider adding rate limiting or a CAPTCHA before launch; only a honeypot field is included.

## Customising
- Company details: environment variables above (`lib/site.ts` reads them).
- Services and their copy: `data/services.ts`. Materials and "confirm with installer" rows: `data/materials.ts`. Process: `data/process.ts`. FAQs: `data/faqs.ts`.
- Projects: `data/projects.ts`. All bundled projects are **sample content** (`isSample: true`) drawn with an SVG illustration. To use real work, add photos to `public/projects/`, render them with `next/image` in `components/ui/ProjectVisual.tsx`, and set `isSample: false` only for real, approved jobs.
- Design tokens (colours, fonts, radii, shadows, widths): `tailwind.config.ts`. Fonts are system stacks so the build works offline; swap in `next/font` if you want custom typefaces.
- Phone and WhatsApp links: `lib/links.ts` (WhatsApp pre-filled message can be changed there).
- Testimonials and credentials: none are included on purpose. Add only genuine, permissioned reviews and verifiable credentials.
- Privacy policy and terms are templates and need professional legal review.

## Content and safety policy
No numeric wire specifications are published because none are verified for a specific supplier. Pages state that invisible grills reduce risk and do not replace supervision, and are never described as childproof, pet-proof or fall-proof.

## Deployment
Any Node host that supports Next.js (Vercel, a Node server, or a container): set the environment variables, run `npm run build` then `npm start`. Set `NEXT_PUBLIC_SITE_URL` to the live domain so the sitemap, canonical URLs and structured data are correct.

## Structure
```
app/          routes, layout, loading/error/not-found, sitemap, robots, api/leads
components/   header, footer, sticky mobile actions, FAQ, CTA band, ui primitives
features/     lead (quote/contact form), projects (filterable gallery)
data/         typed services, projects, FAQs, materials, process
lib/          site config, links, validation (Zod), SEO helpers
types/        shared types
tests/        Vitest suites
```
