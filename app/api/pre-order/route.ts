
import { NextResponse } from "next/server";
import { z } from "zod";
import { createTransport, defaultFrom } from "@/lib/mailer";
import { saveJSONL } from "@/lib/save";

export const runtime = "nodejs";
export const preferredRegion = ["syd1"]; // Sydney

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  retailer: z.string().optional().default(""),
  hp: z.string().optional().default(""),
});

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const data = schema.parse({
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      retailer: String(form.get("retailer") || ""),
      hp: String(form.get("hp") || ""),
    });

    if (data.hp) {
      return NextResponse.redirect(new URL("/order/preorder/success", req.url));
    }

    await saveJSONL("preorder", data);

    const tx = createTransport();
    const to = process.env.PREORDER_TO || process.env.CONTACT_TO || (process.env.SMTP_USER as string);

    await tx.sendMail({
      from: defaultFrom(),
      to,
      subject: "Pre-order interest — Author site",
      text: `Name: ${data.name}\nEmail: ${data.email}\nPreferred retailer: ${data.retailer}`,
    });

    return NextResponse.redirect(new URL("/order/preorder/success", req.url));
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
