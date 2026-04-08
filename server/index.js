require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { sendMail } = require("./send");
const { verifyTransport } = require("./transport");

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
  } catch {
    res.status(500).json({ status: "SMTP FAIL" });
  }
});

// Contact form
app.post("/api/send-email", async (req, res) => {
  const data = req.body;

  // if (!data) {
  //   return res.status(400).json({ error: "All fields required" });
  // }

  console.log(data);
  const { service, name, email, message, formdata } = data;
  console.log(service);

  if (service === "book-call") {
    console.log("selected services", formdata);
  } else if (service === "start-project") {
    console.log("selected services", formdata);
  }
  return 0;

  // use email hook in frontend

  try {
    await sendMail({
      to: process.env.CONTACT_TO_EMAIL,
      subject: `[Contact] ${subject}`,
      replyTo: `${name} <${email}>`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <h2>New Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <hr/>
        <p>${message}</p>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("FULL ERROR:", err); // 👈 add this
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running: http://localhost:${PORT}`);
});
