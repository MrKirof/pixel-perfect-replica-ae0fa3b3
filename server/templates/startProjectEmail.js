const startProjectEmailTemplate = ({ clientName, projectName, startDate, deadline, projectManager, dashboardUrl = "#" }) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head><meta charset="UTF-8"><title>Project Kickoff</title></head>
  <body style="margin:0;padding:0;background:#f0f4f8;font-family:'Segoe UI',Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8;padding:40px 0;">
      <tr><td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.07);">
          <tr>
            <td style="background:linear-gradient(135deg,#4facfe 0%,#00f2fe 100%);padding:40px;text-align:center;">
              <div style="font-size:44px;margin-bottom:12px;">🚀</div>
              <h1 style="margin:0;color:#fff;font-size:26px;font-weight:700;">Project Kickoff!</h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:15px;">Your project is officially underway</p>
            </td>
          </tr>
          <tr>
            <td style="padding:36px 40px;">
              <p style="margin:0 0 20px;font-size:16px;color:#374151;">Hi <strong>${clientName}</strong>,</p>
              <p style="margin:0 0 28px;font-size:15px;color:#6b7280;line-height:1.7;">We're excited to kick off <strong>${projectName}</strong>. Our team is ready and committed to delivering outstanding results for you.</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#eff6ff;border-radius:10px;margin-bottom:28px;">
                <tr><td style="padding:24px;">
                  <p style="margin:0 0 16px;font-size:11px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:1px;">Project Details</p>
                  <table width="100%">
                    <tr><td style="font-size:14px;color:#6b7280;padding:7px 0;">Project Name</td><td style="font-size:14px;font-weight:700;color:#1f2937;text-align:right;">${projectName}</td></tr>
                    <tr><td style="font-size:14px;color:#6b7280;padding:7px 0;">Start Date</td><td style="font-size:14px;font-weight:700;color:#1f2937;text-align:right;">${startDate}</td></tr>
                    <tr><td style="font-size:14px;color:#6b7280;padding:7px 0;">Deadline</td><td style="font-size:14px;font-weight:700;color:#1f2937;text-align:right;">${deadline}</td></tr>
                    <tr><td style="font-size:14px;color:#6b7280;padding:7px 0;">Project Manager</td><td style="font-size:14px;font-weight:700;color:#1f2937;text-align:right;">${projectManager}</td></tr>
                  </table>
                </td></tr>
              </table>
              <table width="100%"><tr><td align="center">
                <a href="${dashboardUrl}" style="display:inline-block;background:linear-gradient(135deg,#4facfe,#00f2fe);color:#fff;text-decoration:none;font-size:15px;font-weight:600;padding:14px 36px;border-radius:8px;">View Project Dashboard</a>
              </td></tr></table>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 40px;border-top:1px solid #f3f4f6;text-align:center;">
              <p style="margin:0;font-size:12px;color:#9ca3af;">Questions? Reply to this email or contact your project manager directly.</p>
            </td>
          </tr>
        </table>
      </td></tr>
    </table>
  </body>
  </html>`;
};

export default startProjectEmailTemplate;
