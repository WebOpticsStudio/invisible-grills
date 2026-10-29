"use client";
import { telLink } from "@/lib/links";

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto max-w-prose px-5 py-24">
      <h1 className="text-4xl">Something went wrong</h1>
      <p className="mt-3 text-slate">The page could not be shown. Try again, or <a className="underline" href={telLink()}>call us</a>.</p>
      <button type="button" onClick={reset} className="mt-6 min-h-12 rounded-full bg-ink px-6 text-paper cursor-pointer">Try again</button>
    </div>
  );
}
