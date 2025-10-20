import { NextResponse } from "next/server";
import { z } from "zod";
import { createTransport, defaultFrom } from "@/lib/mailer";
import { saveJSONL } from "@/lib/save";

export const runtime = "nodejs";
export const preferredRegion = ["syd1"]; // Sydney

// Helper: read body as FormData if possible, else JSON
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
  // Try JSON
  try {
    const j = await req.json();
    if (j && typeof j === "object") return j;
  } catch {}
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
  for (const [_, v] of Object.entries(obj)) {
    if (typeof v === "string") {
      const s = v.trim();
      if (s.length > best.length) best = s;
    }
  }
  return best;
}

// NEW: safe parse rating from "1".."5" (empty/invalid => undefined)
function parseRating(input: string): number | undefined {
  const n = Number(input);
  if (!Number.isFinite(n)) return undefined;
  const r = Math.round(n);
  return r >= 1 && r <= 5 ? r : undefined;
}

const schema = z.object({
  name: z.string().optional().default("Anonymous"),
  email: z.string().email().optional().or(z.literal("")).default(""),
  location: z.string().optional().default(""),
  review: z.string().min(2, "Please write a short review"),
  // NEW: optional 1–5 rating
  rating: z.number().int().min(1).max(5).optional(),
  hp: z.string().optional().default(""),
});

export async function POST(req: Request) {
  const raw = await readBody(req);

  if (process.env.DEBUG_FORMS === "1") {
    try {
      console.log("[reviews] keys:", Object.keys(raw));
    } catch {}
  }

  const dataDraft = {
    name: first(raw, ["name", "your-name", "author", "from", "user"], ""),
    email: first(raw, ["email", "your-email", "reply", "contact"], ""),
    location: first(raw, ["location", "city", "country", "where"], ""),
    review: first(raw, ["review", "message", "body", "content", "comments", "text", "feedback"], ""),
    // NEW: look for rating under common keys; accept empty => undefined
    rating: parseRating(first(raw, ["rating", "stars", "score"], "")),
    hp: first(raw, ["hp", "honeypot", "_hp", "_honey"], ""),
  };

  // If no review alias matched, pick the longest text field
  if (!dataDraft.review || dataDraft.review.length < 2) {
    const longest = pickLongestText(raw);
    if (longest) dataDraft.review = longest;
  }

  try {
    const data = schema.parse(dataDraft);

    if (data.hp) {
      return NextResponse.redirect(new URL("/reviews/success", req.url));
    }

    await saveJSONL("reviews", data);

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
        `\nReview:\n${data.review}`,
    });

    return NextResponse.redirect(new URL("/reviews/success", req.url));
  } catch {
    const ref = req.headers.get("referer");
    const u = ref ? new URL(ref) : new URL("/reviews", req.url);
    u.searchParams.set("err", "Please check your entries and try again.");
    return NextResponse.redirect(u);
  }
}
