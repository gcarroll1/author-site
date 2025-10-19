import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport"; // ← add this line
export function createTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP env vars missing (SMTP_HOST, SMTP_USER, SMTP_PASS).");
  }

  const usingSsl = port === 465;

  const options: SMTPTransport.Options = {
    host,
    port,
    secure: usingSsl,            // SSL if 465
    auth: { user, pass },
    tls: { minVersion: "TLSv1.2" },
    // Only on 587, force STARTTLS and prefer LOGIN
    ...(usingSsl ? {} : { requireTLS: true, authMethod: "LOGIN" })
  };

  return nodemailer.createTransport(options);
}

export function defaultFrom() {
  return process.env.MAIL_FROM || process.env.SMTP_USER || "no-reply@example.com";
}
