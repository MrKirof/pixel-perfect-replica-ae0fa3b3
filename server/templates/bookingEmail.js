const bookingEmailTemplate = ({ clientName, serviceName, bookingDate, bookingTime, location = "Online / TBD", bookingRef, calendarUrl = "#", cancelUrl = "#" }) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head><meta charset="UTF-8"><title>Booking Confirmed</title></head>
  <body style="margin:0;padding:0;background:#f0f4f8;font-family:'Segoe UI',Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8;padding:40px 0;">
      <tr><td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.07);">
          <tr>
            <td style="background:linear-gradient(135deg,#fa709a 0%,#fee140 100%);padding:40px;text-align:center;">
              <div style="font-size:44px;margin-bottom:12px;">📅</div>
              <h1 style="margin:0;color:#fff;font-size:26px;font-weight:700;">Booking Confirmed!</h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.9);font-size:15px;">Your appointment is scheduled</p>
            </td>
          </tr>
          <tr>
            <td style="padding:36px 40px;">
              <p style="margin:0 0 20px;font-size:16px;color:#374151;">Hi <strong>${clientName}</strong>,</p>
              <p style="margin:0 0 28px;font-size:15px;color:#6b7280;line-height:1.7;">Your booking for <strong>${serviceName}</strong> has been confirmed. See details below.</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#fff7ed;border-radius:10px;margin-bottom:28px;border:1px solid #fed7aa;">
                <tr><td style="padding:24px;">
                  <p style="margin:0 0 16px;font-size:11px;font-weight:700;color:#c2410c;text-transform:uppercase;letter-spacing:1px;">Appointment Details</p>
                  <table width="100%">
                    <tr><td style="font-size:14px;color:#6b7280;padding:7px 0;">Service</td><td style="font-size:14px;font-weight:700;color:#1f2937;text-align:right;">${serviceName}</td></tr>
                    <tr><td style="font-size:14px;color:#6b7280;padding:7px 0;">Date</td><td style="font-size:14px;font-weight:700;color:#1f2937;text-align:right;">${bookingDate}</td></tr>
                    <tr><td style="font-size:14px;color:#6b7280;padding:7px 0;">Time</td><td style="font-size:14px;font-weight:700;color:#1f2937;text-align:right;">${bookingTime}</td></tr>
                    <tr><td style="font-size:14px;color:#6b7280;padding:7px 0;">Location</td><td style="font-size:14px;font-weight:700;color:#1f2937;text-align:right;">${location}</td></tr>
                    <tr><td style="font-size:14px;color:#6b7280;padding:7px 0;">Ref #</td><td style="font-size:14px;font-weight:700;color:#1f2937;text-align:right;">${bookingRef}</td></tr>
                  </table>
                </td></tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-right:8px;">
                    <a href="${calendarUrl}" style="display:inline-block;background:linear-gradient(135deg,#fa709a,#fee140);color:#fff;text-decoration:none;font-size:14px;font-weight:600;padding:12px 24px;border-radius:8px;">Add to Calendar</a>
                  </td>
                  <td align="center" style="padding-left:8px;">
                    <a href="${cancelUrl}" style="display:inline-block;background:#fff;border:1.5px solid #e5e7eb;color:#6b7280;text-decoration:none;font-size:14px;font-weight:600;padding:12px 24px;border-radius:8px;">Cancel Booking</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 40px;border-top:1px solid #f3f4f6;text-align:center;">
              <p style="margin:0;font-size:12px;color:#9ca3af;">Please arrive 5 minutes early. Need to reschedule? Reply to this email.</p>
            </td>
          </tr>
        </table>
      </td></tr>
    </table>
  </body>
  </html>`;
};

export default bookingEmailTemplate;
