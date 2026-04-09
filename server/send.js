import { getTransport } from "./transport.js";

class MailError extends Error {
  constructor(message, cause) {
    super(message);
    this.name = "MailError";
    this.cause = cause;
  }
}

function defaultFrom() {
  const name = process.env.SMTP_FROM_NAME || "App";
  const addr =
    process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || "";
  return `${name} <${addr}>`;
}

export async function sendMail(opts) {
  const transport = getTransport();

  let info;

  try {
    info = await transport.sendMail({
      from: opts.from || defaultFrom(),
      to: opts.to,
      subject: opts.subject,
      text: opts.text,
      html: opts.html,
      replyTo: opts.replyTo,
      cc: opts.cc,
      bcc: opts.bcc,
      attachments: opts.attachments,
    });
  } catch (err) {
    throw new MailError("Failed to send email", err);
  }

  if (info.rejected.length > 0) {
    throw new MailError(`Rejected: ${info.rejected.join(", ")}`);
  }

  return {
    messageId: info.messageId,
    accepted: info.accepted,
    rejected: info.rejected,
  };
}

export { MailError };