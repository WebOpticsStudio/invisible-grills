import { callbackSchema, contactSchema, quoteSchema, validatePhotos } from "@/lib/validation";

/**
 * Receives enquiries. It validates and forwards the multipart payload to LEAD_WEBHOOK_URL.
 * With no webhook configured it answers 503 and never pretends the lead was stored.
 */
export async function POST(request: Request) {
  let data: FormData;
  try { data = await request.formData(); } catch { return Response.json({ error: "invalid_request" }, { status: 400 }); }

  if (data.get("company_website")) return Response.json({ ok: true }); // honeypot: silently drop bots

  const formType = String(data.get("form") || "callback");
  const raw = Object.fromEntries([...data.entries()].filter(([, v]) => typeof v === "string"));
  
  const schema = formType === "contact" ? contactSchema : formType === "quote" ? quoteSchema : callbackSchema;
  const parsed = schema.safeParse(raw);
  if (!parsed.success) return Response.json({ error: "invalid", fields: parsed.error.issues.map((i) => String(i.path[0])) }, { status: 400 });

  if (formType === "quote") {
    const photos = data.getAll("photos").filter((f): f is File => f instanceof File && f.size > 0);
    if (validatePhotos(photos)) return Response.json({ error: "invalid_photos" }, { status: 400 });
  }


  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (!webhook) return Response.json({ error: "not_configured" }, { status: 503 });

  try {
    const res = await fetch(webhook, { method: "POST", body: data });
    if (!res.ok) return Response.json({ error: "upstream_failed" }, { status: 502 });
  } catch { return Response.json({ error: "upstream_failed" }, { status: 502 }); }
  return Response.json({ ok: true });
}
