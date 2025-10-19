// lib/mailer.ts
import nodemailer from "nodemailer";

export function createTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP env vars missing (SMTP_HOST, SMTP_USER, SMTP_PASS).");
  }

  const usingSsl = port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure: usingSsl,                     // SSL if 465; otherwise STARTTLS
    requireTLS: !usingSsl,                // force STARTTLS on 587
    auth: {
      user,
      pass,
      // Zoho sometimes rejects AUTH PLAIN on 587. Prefer LOGIN on STARTTLS.
      method: usingSsl ? undefined : "LOGIN",
    },
    tls: { minVersion: "TLSv1.2" },
    // Optional debugging if you want to see SMTP dialog in your terminal:
    // logger: true,
    // debug: true,
  });
}

export function defaultFrom() {
  return process.env.MAIL_FROM || process.env.SMTP_USER || "no-reply@example.com";
}
