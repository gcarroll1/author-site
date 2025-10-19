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

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,                 // SSL if port 465
    requireTLS: port !== 465,             // Force STARTTLS if port 587
    auth: { user, pass },
    tls: { minVersion: "TLSv1.2" }        // Enforce modern TLS
  });
}

export function defaultFrom() {
  return (
    process.env.MAIL_FROM ||
    process.env.SMTP_USER ||
    "no-reply@example.com"
  );
}
