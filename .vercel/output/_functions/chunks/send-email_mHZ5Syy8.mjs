import nodemailer from 'nodemailer';

const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const smtpHost = undefined                          || process.env.SMTP_HOST;
    const smtpPort = undefined                          || process.env.SMTP_PORT;
    const smtpUser = undefined                          || process.env.SMTP_USER;
    const smtpPass = undefined                          || process.env.SMTP_PASS;
    const smtpFrom = undefined                          || process.env.SMTP_FROM || smtpUser;
    const smtpTo = undefined                        || process.env.SMTP_TO || smtpUser;
    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      console.error("SMTP credentials missing");
      return new Response(JSON.stringify({ error: "SMTP credentials missing" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: Number(smtpPort) === 465,
      // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });
    let htmlContent = `
      <h2>New Order Received</h2>
      <p><strong>Order Type:</strong> ${data.order_type}</p>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
    `;
    if (data.address) htmlContent += `<p><strong>Address:</strong> ${data.address}</p>`;
    if (data.city) htmlContent += `<p><strong>City:</strong> ${data.city}</p>`;
    if (data.state) htmlContent += `<p><strong>State:</strong> ${data.state}</p>`;
    if (data.landmark) htmlContent += `<p><strong>Landmark:</strong> ${data.landmark}</p>`;
    if (data.reference) htmlContent += `<p><strong>Payment Reference:</strong> ${data.reference}</p>`;
    if (data.amount) htmlContent += `<p><strong>Total Amount:</strong> ₦${data.amount}</p>`;
    if (data.cart_items) {
      try {
        const items = typeof data.cart_items === "string" ? JSON.parse(data.cart_items) : data.cart_items;
        if (Array.isArray(items) && items.length > 0) {
          htmlContent += `<h3>Cart Items:</h3><ul>`;
          items.forEach((item) => {
            htmlContent += `<li>${item.title} - Qty: ${item.quantity} - Price: ₦${item.price}</li>`;
          });
          htmlContent += `</ul>`;
        }
      } catch (e) {
      }
    }
    if (data.message) {
      htmlContent += `<p><strong>Message:</strong> ${data.message}</p>`;
    }
    const mailOptions = {
      from: smtpFrom,
      to: smtpTo,
      subject: `New Order/Booking from ${data.name}`,
      html: htmlContent
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return new Response(JSON.stringify({ success: true, messageId: info.messageId }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
