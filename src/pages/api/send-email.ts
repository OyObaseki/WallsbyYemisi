import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get('content-type') || '';
    let data: Record<string, any> = {};
    let attachments: any[] = [];

    if (contentType.includes('application/json')) {
      data = await request.json();
    } else if (contentType.includes('multipart/form-data') || contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await request.formData();
      for (const [key, value] of formData.entries()) {
        if (value instanceof File) {
          if (value.size > 0) {
            const arrayBuffer = await value.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            attachments.push({
              filename: value.name,
              content: buffer,
              contentType: value.type,
            });
          }
        } else {
          data[key] = value;
        }
      }
    } else {
      data = await request.json(); // fallback
    }

    const smtpHost = import.meta.env.SMTP_HOST || (typeof process !== 'undefined' ? process.env.SMTP_HOST : undefined);
    const smtpPort = import.meta.env.SMTP_PORT || (typeof process !== 'undefined' ? process.env.SMTP_PORT : undefined);
    const smtpUser = import.meta.env.SMTP_USER || (typeof process !== 'undefined' ? process.env.SMTP_USER : undefined);
    const smtpPass = import.meta.env.SMTP_PASS || (typeof process !== 'undefined' ? process.env.SMTP_PASS : undefined);
    const smtpFrom = import.meta.env.SMTP_FROM || (typeof process !== 'undefined' ? process.env.SMTP_FROM : undefined) || smtpUser;
    const smtpTo = import.meta.env.SMTP_TO || (typeof process !== 'undefined' ? process.env.SMTP_TO : undefined) || smtpUser;

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

    const mailOptions: any = {
      from: smtpFrom,
      to: smtpTo,
      subject: `${formType} from ${senderName}`,
      html: htmlContent,
    };

    if (attachments.length > 0) {
      mailOptions.attachments = attachments;
    }

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
