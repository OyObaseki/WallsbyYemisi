import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    const smtpHost = import.meta.env.SMTP_HOST || process.env.SMTP_HOST;
    const smtpPort = import.meta.env.SMTP_PORT || process.env.SMTP_PORT;
    const smtpUser = import.meta.env.SMTP_USER || process.env.SMTP_USER;
    const smtpPass = import.meta.env.SMTP_PASS || process.env.SMTP_PASS;
    const smtpFrom = import.meta.env.SMTP_FROM || process.env.SMTP_FROM || smtpUser;
    const smtpTo = import.meta.env.SMTP_TO || process.env.SMTP_TO || smtpUser;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      console.error('SMTP credentials missing');
      return new Response(JSON.stringify({ error: 'SMTP credentials missing' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: Number(smtpPort) === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const formType = data.formType || 'New Form Submission';
    const senderName = data.name || data.fullName || 'User';

    let htmlContent = `<h2>${formType}</h2>`;

    for (const [key, value] of Object.entries(data)) {
      if (key === 'formType') continue;

      if (key === 'cart_items') {
        try {
          const items = typeof value === 'string' ? JSON.parse(value as string) : value;
          if (Array.isArray(items) && items.length > 0) {
            htmlContent += `<h3>Cart Items:</h3><ul>`;
            items.forEach((item: any) => {
              htmlContent += `<li>${item.title} - Qty: ${item.quantity} - Price: ₦${item.price}</li>`;
            });
            htmlContent += `</ul>`;
          }
        } catch (e) {
          // failed to parse cart items, ignore
        }
      } else {
        // Capitalize key
        const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        htmlContent += `<p><strong>${formattedKey}:</strong> ${value}</p>`;
      }
    }

    const mailOptions = {
      from: smtpFrom,
      to: smtpTo,
      subject: `${formType} from ${senderName}`,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    return new Response(JSON.stringify({ success: true, messageId: info.messageId }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
