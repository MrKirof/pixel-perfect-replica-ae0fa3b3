const welcomeEmailTemplate = ({ name, loginUrl = "#", supportEmail = "support@example.com" }) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Welcome!</title></head>
  <body style="margin:0;padding:0;background:#f0f4f8;font-family:'Segoe UI',Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8;padding:40px 0;">
      <tr><td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.07);">
          <tr>
            <td style="background:linear-gradient(135deg,#11998e 0%,#38ef7d 100%);padding:48px 40px;text-align:center;">
              <div style="font-size:48px;margin-bottom:16px;">🎉</div>
              <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:700;">Welcome aboard, ${name}!</h1>
              <p style="margin:12px 0 0;color:rgba(255,255,255,0.85);font-size:16px;">We're thrilled to have you with us.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:40px;">
              <p style="margin:0 0 20px;font-size:16px;color:#374151;line-height:1.7;">Hi <strong>${name}</strong>,</p>
              <p style="margin:0 0 24px;font-size:15px;color:#6b7280;line-height:1.7;">Your account has been created successfully. You're now part of our community and ready to explore everything we have to offer.</p>
              <!-- Steps -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="padding:12px 16px;background:#f0fdf4;border-radius:8px;margin-bottom:8px;">
                    <p style="margin:0;font-size:14px;color:#166534;"><strong>✅ Step 1:</strong> Complete your profile to personalize your experience</p>
                  </td>
                </tr>
                <tr><td style="height:8px;"></td></tr>
                <tr>
                  <td style="padding:12px 16px;background:#f0fdf4;border-radius:8px;">
                    <p style="margin:0;font-size:14px;color:#166534;"><strong>✅ Step 2:</strong> Explore our features and get started on your first project</p>
                  </td>
                </tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr><td align="center">
                  <a href="${loginUrl}" style="display:inline-block;background:linear-gradient(135deg,#11998e,#38ef7d);color:#ffffff;text-decoration:none;font-size:16px;font-weight:600;padding:14px 40px;border-radius:8px;">Get Started Now</a>
                </td></tr>
              </table>
              <p style="margin:28px 0 0;font-size:13px;color:#9ca3af;text-align:center;">Need help? Reach us at <a href="mailto:${supportEmail}" style="color:#11998e;">${supportEmail}</a></p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 40px;border-top:1px solid #f3f4f6;text-align:center;">
              <p style="margin:0;font-size:12px;color:#9ca3af;">You received this email because you signed up for an account.</p>
            </td>
          </tr>
        </table>
      </td></tr>
    </table>
  </body>
  </html>
  `;
};

export default welcomeEmailTemplate;
