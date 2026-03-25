// api/contact/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { createTransport, defaultFrom } from "@/lib/mailer";
import { saveJSONL } from "@/lib/save";

export const runtime = "nodejs";
export const preferredRegion = ["syd1"]; // Sydney

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  message: z.string().min(5, "Message is required"),
  hp: z.string().optional().default(""),
});

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const data = schema.parse({
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      message: String(form.get("message") || ""),
      hp: String(form.get("hp") || ""),
    });

    const isEvent = data.message.includes("Event booking");

    if (data.hp) {
      return NextResponse.redirect(
        new URL(
          isEvent
            ? "/great-bookie-robbery-50th-anniversary?sent=1"
            : "/contact?sent=1",
          req.url
        )
      );
    }

    await saveJSONL("contact", {
      name: data.name,
      email: data.email,
      message: data.message,
    });

    const tx = createTransport();
    const to = process.env.CONTACT_TO || (process.env.SMTP_USER as string);

    await tx.sendMail({
      from: defaultFrom(),
      to,
      replyTo: data.email,
      subject: isEvent
        ? "Event Booking — 21 April 2026"
        : "New contact message — Author site",
      text: `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
    });

    return NextResponse.redirect(
      new URL(
        isEvent
          ? "/great-bookie-robbery-50th-anniversary?sent=1"
          : "/contact?sent=1",
        req.url
      )
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
