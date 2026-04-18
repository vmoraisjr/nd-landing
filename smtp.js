import "dotenv/config";
import nodemailer from "nodemailer";

function readBooleanEnv(name, fallback = false) {
  const value = process.env[name];
  if (value == null) {
    return fallback;
  }

  return String(value).trim().toLowerCase() === "true";
}

export function createTransporter() {
  const host = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      "SMTP_HOST, SMTP_USER e SMTP_PASS precisam estar definidos no ambiente.",
    );
  }

  const secure = process.env.SMTP_SECURE != null
    ? readBooleanEnv("SMTP_SECURE", false)
    : smtpPort === 465;

  const requireTLS = process.env.SMTP_REQUIRE_TLS != null
    ? readBooleanEnv("SMTP_REQUIRE_TLS", false)
    : smtpPort === 587;

  const tls = {};
  if (!readBooleanEnv("SMTP_TLS_REJECT_UNAUTHORIZED", true)) {
    tls.rejectUnauthorized = false;
  }

  return nodemailer.createTransport({
    host,
    port: smtpPort,
    secure,
    requireTLS,
    auth: {
      user,
      pass,
    },
    tls,
  });
}
