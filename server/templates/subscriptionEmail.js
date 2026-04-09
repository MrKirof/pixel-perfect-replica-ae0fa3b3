const subscriptionEmailTemplate = ({ name, plan = "Pro", price = "$29", billingCycle = "monthly", nextBillingDate = "N/A", manageUrl = "#" }) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head><meta charset="UTF-8"><title>Subscription Confirmed</title></head>
  <body style="margin:0;padding:0;background:#f0f4f8;font-family:'Segoe UI',Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8;padding:40px 0;">
      <tr><td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.07);">
          <tr>
            <td style="background:linear-gradient(135deg,#f093fb 0%,#f5576c 100%);padding:40px;text-align:center;">
              <div style="font-size:44px;margin-bottom:12px;">🌟</div>
              <h1 style="margin:0;color:#fff;font-size:26px;font-weight:700;">Subscription Activated!</h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:15px;">Thank you, ${name}. You're all set.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:36px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#fdf2f8;border-radius:10px;margin-bottom:24px;">
                <tr><td style="padding:24px;">
                  <p style="margin:0 0 16px;font-size:11px;font-weight:700;color:#9d174d;text-transform:uppercase;letter-spacing:1px;">Plan Summary</p>
                  <table width="100%">
                    <tr>
                      <td style="font-size:14px;color:#6b7280;padding:6px 0;">Plan</td>
                      <td style="font-size:14px;font-weight:700;color:#1f2937;text-align:right;">${plan}</td>
                    </tr>
                    <tr>
                      <td style="font-size:14px;color:#6b7280;padding:6px 0;">Price</td>
                      <td style="font-size:14px;font-weight:700;color:#1f2937;text-align:right;">${price} / ${billingCycle}</td>
                    </tr>
                    <tr>
                      <td style="font-size:14px;color:#6b7280;padding:6px 0;">Next Billing</td>
                      <td style="font-size:14px;font-weight:700;color:#1f2937;text-align:right;">${nextBillingDate}</td>
                    </tr>
                  </table>
                </td></tr>
              </table>
              <p style="margin:0 0 24px;font-size:15px;color:#6b7280;line-height:1.7;">Your <strong>${plan}</strong> subscription is now active. You have full access to all premium features included in your plan.</p>
              <table width="100%"><tr><td align="center">
                <a href="${manageUrl}" style="display:inline-block;background:linear-gradient(135deg,#f093fb,#f5576c);color:#fff;text-decoration:none;font-size:15px;font-weight:600;padding:14px 36px;border-radius:8px;">Manage Subscription</a>
              </td></tr></table>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 40px;border-top:1px solid #f3f4f6;text-align:center;">
              <p style="margin:0;font-size:12px;color:#9ca3af;">You can cancel or change your plan anytime from your account settings.</p>
            </td>
          </tr>
        </table>
      </td></tr>
    </table>
  </body>
  </html>`;
};

export default subscriptionEmailTemplate;
