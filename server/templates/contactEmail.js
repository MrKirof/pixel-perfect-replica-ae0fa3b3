const contactEmailTemplate = ({ name, email, subject, message }) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Contact Message</title></head>
  <body style="margin:0;padding:0;background:#f0f4f8;font-family:'Segoe UI',Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8;padding:40px 0;">
      <tr><td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.07);">
          <tr>
            <td style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:36px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;">✉ New Contact Message</h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.8);font-size:14px;">Someone reached out via your website</p>
            </td>
          </tr>
          <tr>
            <td style="padding:36px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f9fc;border-radius:8px;margin-bottom:24px;">
                <tr><td style="padding:20px 24px;">
                  <p style="margin:0 0 12px;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;">Sender Details</p>
                  <table width="100%">
                    <tr><td style="padding:6px 0;font-size:14px;color:#6b7280;width:80px;">Name</td><td style="font-size:14px;color:#1f2937;font-weight:600;">${name}</td></tr>
                    <tr><td style="padding:6px 0;font-size:14px;color:#6b7280;">Email</td><td style="font-size:14px;"><a href="mailto:${email}" style="color:#667eea;text-decoration:none;">${email}</a></td></tr>
                    <tr><td style="padding:6px 0;font-size:14px;color:#6b7280;">Subject</td><td style="font-size:14px;color:#1f2937;">${subject || "N/A"}</td></tr>
                  </table>
                </td></tr>
              </table>
              <p style="margin:0 0 8px;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;">Message</p>
              <div style="border-left:4px solid #667eea;padding:16px 20px;background:#fafbff;border-radius:0 8px 8px 0;">
                <p style="margin:0;font-size:15px;color:#374151;line-height:1.7;">${message}</p>
              </div>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr><td align="center">
                  <a href="mailto:${email}?subject=Re: ${subject || 'Your message'}" style="display:inline-block;background:linear-gradient(135deg,#667eea,#764ba2);color:#ffffff;text-decoration:none;font-size:15px;font-weight:600;padding:14px 32px;border-radius:8px;">Reply to ${name}</a>
                </td></tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 40px;border-top:1px solid #f3f4f6;text-align:center;">
              <p style="margin:0;font-size:12px;color:#9ca3af;">This message was sent from your website contact form.</p>
            </td>
          </tr>
        </table>
      </td></tr>
    </table>
  </body>
  </html>
  `;
};

export default contactEmailTemplate;
