import dotenv from "dotenv";
dotenv.config({ path: "./server/.env" });

import express from "express";
import cors from "cors";

import { sendMail } from "./send.js";
import { verifyTransport } from "./transport.js";
import commonEmailTemplate from "./templates/commonEmail.js";

const app = express();
const PORT = process.env.SERVER_PORT || 5000;

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.use(express.json());

// Health check
app.get("/api/health", async (req, res) => {
  try {
    await verifyTransport();
    res.json({ status: "SMTP OK" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "SMTP FAIL" });
  }
});

// Contact form
app.post("/api/send-email", async (req, res) => {
  const { service, name, email, message, formdata } = req.body;

  console.log("Incoming:", req.body);

  if (!name || !email) {
    return res.status(400).json({ error: "Required fields missing" });
  }

  console.log("Service:", service);
  console.log("Extra Data:", formdata);

  const items = Object.entries(formdata || {}).map(([key, value]) => {
    let formattedValue = value;

    // format date nicely
    if (key === "date") {
      formattedValue = new Date(value).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }

    return {
      key: isNaN(Number(key)) ? key.charAt(0).toUpperCase() + key.slice(1) : Number(key) + 1,
      value: formattedValue,
    };
  });

  const html = commonEmailTemplate({
    name: name,
    email: email,
    message,
    items: items,
  });

  let subject = `New message from ${name}`;

  switch (service) {
    case "contact":
      subject = `New contact from ${name}`;
      break;
    case "start-project":
      subject = `New project request from ${name}`;
      break;
    case "book-call":
      subject = `New appointment request from ${name}`;
      break;
    case "quote":
      subject = `New quote request from ${name}`;
      break;
    default:
      break;
  }

  try {
    await sendMail({
      to: process.env.CONTACT_TO_EMAIL,
      subject: subject,
      replyTo: 'noreply@mrkirof.com',
      html: html,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("FULL ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running: http://localhost:${PORT}`);
});