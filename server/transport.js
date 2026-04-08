const nodemailer = require("nodemailer");

let transport = null;

function getTransport() {
  if (transport) return transport;

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("Missing SMTP config");
  }

  transport = nodemailer.createTransport({
    host,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  });

  return transport;
}

async function verifyTransport() {
  await getTransport().verify();
}

module.exports = { getTransport, verifyTransport };