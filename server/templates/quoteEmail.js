const quoteEmailTemplate = ({ clientName, quoteRef, quoteDate, validUntil, items = [], total, currency = "$", acceptUrl = "#", contactEmail = "sales@example.com" }) => {
  const itemRows = items.map(item => `
    <tr>
      <td style="font-size:14px;color:#374151;padding:10px 0;border-bottom:1px solid #f3f4f6;">${item.description}</td>
      <td style="font-size:14px;color:#6b7280;padding:10px 0;border-bottom:1px solid #f3f4f6;text-align:center;">${item.qty}</td>
      <td style="font-size:14px;color:#374151;padding:10px 0;border-bottom:1px solid #f3f4f6;text-align:right;">${currency}${item.unitPrice}</td>
      <td style="font-size:14px;font-weight:600;color:#1f2937;padding:10px 0;border-bottom:1px solid #f3f4f6;text-align:right;">${currency}${item.total}</td>
    </tr>
  `).join('');

  return `<!DOCTYPE html>
  <html lang="en">
  <head><meta charset="UTF-8"><title>Your Quote</title></head>
  <body style="margin:0;padding:0;background:#f0f4f8;font-family:'Segoe UI',Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8;padding:40px 0;">
      <tr><td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.07);">
          <tr>
            <td style="background:linear-gradient(135deg,#a18cd1 0%,#fbc2eb 100%);padding:40px;text-align:center;">
              <div style="font-size:44px;margin-bottom:12px;">📋</div>
              <h1 style="margin:0;color:#fff;font-size:26px;font-weight:700;">Your Quote is Ready</h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:15px;">Quote #${quoteRef}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:36px 40px;">
              <p style="margin:0 0 8px;font-size:16px;color:#374151;">Hi <strong>${clientName}</strong>,</p>
              <p style="margin:0 0 28px;font-size:15px;color:#6b7280;line-height:1.7;">Thank you for your interest. Please find your customized quote below. This quote is valid until <strong>${validUntil}</strong>.</p>

              <!-- Meta row -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="font-size:13px;color:#6b7280;">Quote Date: <strong style="color:#374151;">${quoteDate}</strong></td>
                  <td style="font-size:13px;color:#6b7280;text-align:right;">Valid Until: <strong style="color:#374151;">${validUntil}</strong></td>
                </tr>
              </table>

              <!-- Line items -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <thead>
                  <tr style="background:#f8f9fc;">
                    <th style="font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;padding:10px 0;text-align:left;">Description</th>
                    <th style="font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;padding:10px 0;text-align:center;">Qty</th>
                    <th style="font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;padding:10px 0;text-align:right;">Unit Price</th>
                    <th style="font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;padding:10px 0;text-align:right;">Total</th>
                  </tr>
                </thead>
                <tbody>${itemRows}</tbody>
              </table>

              <!-- Total -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td></td>
                  <td style="text-align:right;">
                    <div style="display:inline-block;background:#f5f3ff;padding:14px 24px;border-radius:8px;">
                      <span style="font-size:13px;color:#7c3aed;">Total Amount: </span>
                      <span style="font-size:22px;font-weight:700;color:#5b21b6;">${currency}${total}</span>
                    </div>
                  </td>
                </tr>
              </table>

              <table width="100%"><tr>
                <td align="center" style="padding-right:8px;">
                  <a href="${acceptUrl}" style="display:inline-block;background:linear-gradient(135deg,#a18cd1,#fbc2eb);color:#fff;text-decoration:none;font-size:15px;font-weight:600;padding:14px 36px;border-radius:8px;">Accept Quote</a>
                </td>
                <td align="center" style="padding-left:8px;">
                  <a href="mailto:${contactEmail}" style="display:inline-block;background:#fff;border:1.5px solid #e5e7eb;color:#6b7280;text-decoration:none;font-size:14px;font-weight:600;padding:13px 24px;border-radius:8px;">Ask a Question</a>
                </td>
              </tr></table>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 40px;border-top:1px solid #f3f4f6;text-align:center;">
              <p style="margin:0;font-size:12px;color:#9ca3af;">Prices are estimates and may vary. This quote expires on ${validUntil}.</p>
            </td>
          </tr>
        </table>
      </td></tr>
    </table>
  </body>
  </html>`;
};

export default quoteEmailTemplate;
