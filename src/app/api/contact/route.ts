import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function buildEmailHtml(name: string, email: string, message: string) {
  const now = new Date();
  const year = now.getFullYear();
  const fullDate = now.toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' });
  const safeMsg = message.replace(/\n/g, '<br>');
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="color-scheme" content="light only">
<meta name="supported-color-schemes" content="light only">
<title>New Contact Form Message</title>
<!--[if mso]>
<noscript>
<xml>
<o:OfficeDocumentSettings>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
</noscript>
<![endif]-->
<style>
  table,td{ border-collapse:collapse; }
  body{
    margin:0; padding:0;
    background-color:#f4f6f9;
    font-family:Helvetica,Arial,sans-serif;
    -webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;
  }
  .wrapper{ max-width:580px; margin:0 auto; }
  .preheader{
    font-size:11px; letter-spacing:1px; text-transform:uppercase;
    color:#8896ab; text-align:center; padding:0 16px 14px;
  }
  @media only screen and (max-width:480px){
    body{ padding:16px 8px !important; }
    .wrapper{ width:100% !important; }
    .header-cell{ padding:20px 16px !important; }
    .card-cell{ padding:24px 16px 20px !important; }
    h1{ font-size:20px !important; }
    .meta-label{ width:100% !important; display:block !important; padding-bottom:2px !important; }
    .meta-value{ display:block !important; }
    .meta-row{ display:block !important; padding:10px 0 !important; }
    .btn-cell{ display:block !important; width:100% !important; }
    .btn-primary,.btn-outline{ display:block !important; text-align:center !important; width:100% !important; box-sizing:border-box !important; }
    .btn-outline{ margin-top:8px !important; }
  }
</style>
</head>
<body style="margin:0;padding:32px 16px;background-color:#f4f6f9;font-family:Helvetica,Arial,sans-serif;">
<table role="presentation" cellpadding="0" cellspacing="0" width="100%">
<tr><td align="center" style="padding:0;">

  <div class="preheader" style="font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#8896ab;text-align:center;padding:0 16px 14px;">
    New message &middot; Contact Form &middot; amir.dev
  </div>

  <table role="presentation" cellpadding="0" cellspacing="0" class="wrapper" style="max-width:580px;width:100%;">
    <tr>
      <td style="padding:0;">

        <!-- HEADER -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#1a1a2e;border-radius:10px 10px 0 0;">
          <tr>
            <td class="header-cell" style="padding:22px 28px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td width="44" valign="middle" style="padding:0;">
                    <table role="presentation" cellpadding="0" cellspacing="0" style="width:36px;height:36px;background:rgba(255,255,255,0.1);border-radius:8px;">
                      <tr><td align="center" valign="middle" style="font-size:0;">
                        <img src="https://img.icons8.com/ios-filled/18/ffffff/new-post.png" alt="" width="18" height="18" style="display:block;border:0;">
                      </td></tr>
                    </table>
                  </td>
                  <td valign="middle" style="padding:0 0 0 14px;">
                    <div style="color:#ffffff;font-size:16px;font-weight:600;">Portfolio Contact</div>
                    <div style="color:#8896ab;font-size:11px;font-weight:400;letter-spacing:1px;text-transform:uppercase;margin-top:1px;">New Inquiry Received</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- CARD -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#ffffff;border-radius:0 0 10px 10px;box-shadow:0 4px 24px rgba(26,26,46,0.06);">
          <tr>
            <td class="card-cell" style="padding:32px 28px 28px;">

              <!-- BADGE -->
              <table role="presentation" cellpadding="0" cellspacing="0" style="background:#eef2ff;border-radius:20px;margin-bottom:16px;">
                <tr>
                  <td style="padding:5px 12px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;color:#4f46e5;">&bull; New Message</td>
                </tr>
              </table>

              <!-- TITLE -->
              <h1 style="margin:0 0 6px;font-size:24px;font-weight:700;color:#1a1a2e;line-height:1.3;">Contact Form Submission</h1>
              <p style="margin:0 0 24px;font-size:14px;color:#64748b;line-height:1.5;">${name} has sent you a message through your portfolio contact form.</p>

              <hr style="border:none;border-top:1px solid #e9edf2;margin:0 0 22px;">

              <!-- META TABLE -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:24px;">
                <tr class="meta-row">
                  <td class="meta-label" width="100" valign="top" style="padding:10px 0;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;color:#4f46e5;border-bottom:1px solid #f1f4f9;">From</td>
                  <td class="meta-value" valign="top" style="padding:10px 0;font-size:14px;color:#1a1a2e;font-weight:500;border-bottom:1px solid #f1f4f9;">${name}</td>
                </tr>
                <tr class="meta-row">
                  <td class="meta-label" width="100" valign="top" style="padding:10px 0;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;color:#4f46e5;border-bottom:1px solid #f1f4f9;">Email</td>
                  <td class="meta-value" valign="top" style="padding:10px 0;font-size:14px;color:#1a1a2e;font-weight:500;border-bottom:1px solid #f1f4f9;"><a href="mailto:${email}" style="color:#4f46e5;text-decoration:none;">${email}</a></td>
                </tr>
                <tr class="meta-row">
                  <td class="meta-label" width="100" valign="top" style="padding:10px 0;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;color:#4f46e5;border-bottom:none;">Date</td>
                  <td class="meta-value" valign="top" style="padding:10px 0;font-size:14px;color:#1a1a2e;font-weight:500;border-bottom:none;">${fullDate}</td>
                </tr>
              </table>

              <!-- MESSAGE -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f8fafc;border:1px solid #e9edf2;border-left:3px solid #4f46e5;border-radius:8px;margin-bottom:24px;">
                <tr>
                  <td style="padding:16px 18px;">
                    <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;color:#4f46e5;margin-bottom:8px;">Message</div>
                    <p style="margin:0;font-size:15px;line-height:1.7;color:#334155;">${safeMsg}</p>
                  </td>
                </tr>
              </table>

              <!-- ACTIONS -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td class="btn-cell" width="50%" style="padding:0 5px 0 0;vertical-align:top;">
                    <!--[if mso]><table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="padding:0;" class="btn-cell" width="100%"><![endif]-->
                    <a href="mailto:${email}" class="btn-primary" style="display:block;background:#1a1a2e;color:#ffffff !important;font-size:14px;font-weight:600;text-decoration:none;padding:12px 20px;border-radius:8px;text-align:center;letter-spacing:-0.1px;">Reply to ${name} &rarr;</a>
                    <!--[if mso]></td></tr></table><![endif]-->
                  </td>
                  <td class="btn-cell" width="50%" style="padding:0 0 0 5px;vertical-align:top;">
                    <!--[if mso]><table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="padding:0;" class="btn-cell" width="100%"><![endif]-->
                    <a href="mailto:${email}" class="btn-outline" style="display:block;background:transparent;color:#1a1a2e !important;font-size:14px;font-weight:500;text-decoration:none;padding:12px 20px;border-radius:8px;border:1.5px solid #e9edf2;text-align:center;letter-spacing:-0.1px;">View Contact</a>
                    <!--[if mso]></td></tr></table><![endif]-->
                  </td>
                </tr>
              </table>

            </td>
          </tr>
        </table>

        <!-- FOOTER -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td style="padding:20px 16px 0;text-align:center;">
              <p style="margin:0;font-size:12px;color:#8896ab;line-height:1.7;">
                This message was sent from the contact form on <a href="https://prodevamir.vercel.app" style="color:#4f46e5;text-decoration:underline;">prodevamir.vercel.app</a><br>
                You are receiving this because you are the site owner.
              </p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>

</td></tr>
</table>
</body>
</html>`;
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: 'prodeveloperamir@gmail.com',
      subject: `New Portfolio Message from ${name}`,
      html: buildEmailHtml(name, email, message),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    const message = error instanceof Error ? error.message : 'Failed to send message';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}