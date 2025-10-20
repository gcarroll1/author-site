// app/api/reviews/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { createTransport, defaultFrom } from "@/lib/mailer";
import { saveJSONL } from "@/lib/save";

export const runtime = "nodejs";
export const preferredRegion = ["syd1"]; // Sydney

/** ---- Helpers ---- **/

// Read URL-encoded / multipart as FormData; JSON fallback; empty object otherwise
async function readBody(req: Request): Promise<Record<string, any>> {
  const ct = req.headers.get("content-type") || "";
  if (ct.includes("multipart/form-data") || ct.includes("application/x-www-form-urlencoded")) {
    const fd = await req.formData();
    const out: Record<string, any> = {};
    for (const [k, v] of fd.entries()) {
      out[k] = typeof v === "string" ? v : (v as File).name;
    }
    return out;
  }
  try {
    const j = await req.json();
    if (j && typeof j === "object") return j as Record<string, any>;
  } catch {
    // ignore
  }
  return {};
}

function first(obj: Record<string, any>, keys: string[], fallback = ""): string {
  for (const k of keys) {
    const v = obj[k];
    if (typeof v === "string" && v.trim()) return v.trim();
  }
  return fallback;
}

function pickLongestText(obj: Record<string, any>): string {
  let best = "";
  for (const v of Object.values(obj)) {
    if (typeof v === "string") {
      const s = v.trim();
      if (s.length > best.length) best = s;
    }
  }
  return best;
}

// Parse "1".."5" -> number 1..5; anything else -> undefined
function parseRating(input: string): number | undefined {
  const n = Number(input);
  if (!Number.isFinite(n)) return undefined;
  const r = Math.round(n);
  return r >= 1 && r <= 5 ? r : undefined;
}

/** ---- Validation ---- **/
const schema = z.object({
  name: z.string().optional().default("Anonymous"),
  email: z.string().email().optional().or(z.literal("")).default(""),
  location: z.string().optional().default(""),
  review: z.string().min(2, "Please write a short review"),
  rating: z.number().int().min(1).max(5).optional(), // optional 1–5
  hp: z.string().optional().default(""),
});

/** ---- POST handler ---- **/
export async function POST(req: Request) {
  const raw = await readBody(req);

  if (process.env.DEBUG_FORMS === "1") {
    try {
      console.log("[reviews] keys:", Object.keys(raw));
    } catch {}
  }

  // Normalize incoming fields from multiple possible names
  const dataDraft = {
    name: first(raw, ["name", "your-name", "author", "from", "user"], ""),
    email: first(raw, ["email", "your-email", "reply", "contact"], ""),
    location: first(raw, ["location", "city", "country", "where"], ""),
    review: first(raw, ["review", "message", "body", "content", "comments", "text", "feedback"], ""),
    rating: parseRating(first(raw, ["rating", "stars", "score"], "")),
    hp: first(raw, ["hp", "honeypot", "_hp", "_honey"], ""),
  };

  // Fallback: if no explicit "review" matched, pick the longest text field
  if (!dataDraft.review || dataDraft.review.length < 2) {
    const longest = pickLongestText(raw);
    if (longest) dataDraft.review = longest;
  }

  try {
    const data = schema.parse(dataDraft);

    // Honeypot trips still go to success (silently discard spam)
    if (data.hp) {
      return NextResponse.redirect(new URL("/reviews/success", req.url), 303);
    }

    // Persist (JSONL file)
    // await saveJSONL("reviews", data);

    // Email notify
    const tx = createTransport();
    const to = process.env.REVIEWS_TO || process.env.CONTACT_TO || (process.env.SMTP_USER as string);
    const ratingLine = data.rating ? `Rating: ${data.rating}/5\n` : "";

    await tx.sendMail({
      from: defaultFrom(),
      to,
      subject: "New reader review",
      text:
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Location: ${data.location}\n` +
        ratingLine +
        `\nReview:\n${data.review}\n`,
    });

    // Success: redirect with GET
    return NextResponse.redirect(new URL("/reviews/success", req.url), 303);
  } catch (err: any) {
    // Rich server-side logging for production debugging
    console.error("[REVIEWS API ERROR]", {
      message: err?.message || String(err),
      name: err?.name,
      stack: err?.stack,
      dataDraft,
    });

    // Bounce back to the form with a friendly error and a short code
    const ref = req.headers.get("referer");
    const back = ref ? new URL(ref) : new URL("/reviews", req.url);
    back.searchParams.set("err", "Please check your entries and try again.");

    // Short error code to surface *what* failed in prod
    if (err?.name) back.searchParams.set("code", err.name);
    else if (err?.message) back.searchParams.set("code", String(err.message).slice(0, 40));

    return NextResponse.redirect(back, 303);
  }
}

// (Optional) Reject other methods explicitly with a 405
export async function GET() {
  return NextResponse.json(
    { ok: false, error: "Method Not Allowed" },
    { status: 405, headers: { Allow: "POST" } }
  );
}
