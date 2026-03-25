import { NextResponse } from "next/server";
import { z } from "zod";
import { createTransport, defaultFrom } from "@/lib/mailer";

export const runtime = "nodejs";
export const preferredRegion = ["syd1"];

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  notes: z.string().optional().default(""),
  deadline: z.string().optional().default(""),
  hp: z.string().optional().default(""),
});

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const data = schema.parse({
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      notes: String(form.get("notes") || ""),
      deadline: String(form.get("deadline") || ""),
      hp: String(form.get("hp") || ""),
    });

    if (data.hp) {
      return NextResponse.redirect(new URL("/event/anniversary-edition/success", req.url), 303);
    }

    if (data.deadline && new Date() > new Date(data.deadline)) {
      return NextResponse.redirect(new URL("/event/anniversary-edition?closed=1", req.url), 303);
    }

    const tx = createTransport();
    const to =
      process.env.PREORDER_TO ||
      process.env.CONTACT_TO ||
      (process.env.SMTP_USER as string);

    await tx.sendMail({
      from: defaultFrom(),
      to,
      replyTo: data.email,
      subject: "50th Anniversary Edition order — Author site",
      text:
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Fulfilment: Deliver at 21 April 2026 event\n\n` +
        `${data.notes}`,
    });

    return NextResponse.redirect(new URL("/event/anniversary-edition/success", req.url), 303);
  } catch (err) {
    console.error(err);
    return NextResponse.redirect(new URL("/event/anniversary-edition?err=1", req.url), 303);
  }
}
