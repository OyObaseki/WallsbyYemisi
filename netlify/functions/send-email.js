import nodemailer from 'nodemailer';

export const handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const body = JSON.parse(event.body);
    console.log('Incoming request body:', body);

    const { name, email, phone, message, formType = 'Form' } = body;

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      SMTP_FROM,
      SMTP_TO,
    } = process.env;

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const subject = `New ${formType} submission`;

    let htmlContent = `<h3>New Submission Details:</h3>`;
    htmlContent += `<p><strong>Form Type:</strong> ${formType}</p>`;

    // Add dynamically mapped fields to support any form variables properly
    for (const [key, value] of Object.entries(body)) {
      if (key === 'formType') continue;

      const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
      htmlContent += `<p><strong>${formattedKey}:</strong> ${value}</p>`;
    }

    const htmlBody = htmlContent;

    const info = await transporter.sendMail({
      from: SMTP_FROM || SMTP_USER,
      to: SMTP_TO || SMTP_USER,
      subject: subject,
      html: htmlBody,
    });

    console.log('Email sent successfully. MessageId:', info.messageId);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
