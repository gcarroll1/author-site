// app/api/advance-readers/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { createTransport, defaultFrom } from "@/lib/mailer";
import { saveJSONL } from "@/lib/save";
import { first, redirectBackUrl } from "@/lib/form";

export const runtime = "nodejs";
export const preferredRegion = ["syd1"]; // Sydney

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  platform: z.string().optional().default(""),
  message: z.string().min(2),
  hp: z.string().optional().default(""),
});

export async function POST(req: Request) {
  const form = await req.formData();

  // Accept multiple aliases so markup variations still work
  const dataRaw = {
    name: first(form, ["name", "fullName", "your-name"]),
    email: first(form, ["email", "mail", "your-email"]),
    platform: first(form, ["platform", "channel", "where"]),
    message: first(form, ["message", "notes", "body", "content", "review", "comments"]),
    hp: first(form, ["hp", "honeypot", "_hp"]),
  };

  try {
    const data = schema.parse(dataRaw);

    if (data.hp) {
      return NextResponse.redirect(new URL("/advance-readers/success", req.url));
    }

    await saveJSONL("arc", data);

    const tx = createTransport();
    const to = process.env.ARC_TO || process.env.CONTACT_TO || (process.env.SMTP_USER as string);

    await tx.sendMail({
      from: defaultFrom(),
      to,
      subject: "ARC request — Author site",
      text: `Name: ${data.name}\nEmail: ${data.email}\nPlatform: ${data.platform}\n\nMessage:\n${data.message}`,
    });

    return NextResponse.redirect(new URL("/advance-readers/success", req.url));
  } catch (e: any) {
    const u = redirectBackUrl(req, "/advance-readers");
    u.searchParams.set("err", "Please fill in required fields.");
    return NextResponse.redirect(u);
  }
}
