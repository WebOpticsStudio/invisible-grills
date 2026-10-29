import { afterEach, describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/leads/route";

const body = (extra: Record<string, string> = {}) => {
  const f = new FormData();
  const base = { form: "contact", name: "Asha", phone: "9876543210", message: "Need a quote please", consent: "on", ...extra };
  for (const [k, v] of Object.entries(base)) f.set(k, v);
  return new Request("http://test/api/leads", { method: "POST", body: f });
};

afterEach(() => { vi.unstubAllEnvs(); vi.unstubAllGlobals(); });

describe("POST /api/leads", () => {
  it("rejects invalid data", async () => expect((await POST(body({ phone: "1" }))).status).toBe(400));
  it("silently accepts honeypot submissions", async () => expect((await POST(body({ company_website: "spam" }))).status).toBe(200));
  it("reports not_configured without a webhook", async () => {
    vi.stubEnv("LEAD_WEBHOOK_URL", "");
    const res = await POST(body());
    expect(res.status).toBe(503);
    expect((await res.json()).error).toBe("not_configured");
  });
  it("forwards to the webhook when configured", async () => {
    vi.stubEnv("LEAD_WEBHOOK_URL", "https://hooks.example.com/x");
    const fetchMock = vi.fn().mockResolvedValue(new Response("ok"));
    vi.stubGlobal("fetch", fetchMock);
    expect((await POST(body())).status).toBe(200);
    expect(fetchMock).toHaveBeenCalledOnce();
  });
});
