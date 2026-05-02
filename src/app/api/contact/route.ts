import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, phone, email, service, message } = body;

    // 1️⃣ Send to YOU (lead email)
    await resend.emails.send({
      from: "Samira Cloud <hello@samiracloud.com>",
      to: ["hello@samiracloud.com"],
      replyTo: email,
      subject: `New Website Lead from ${name}`,
      html: `
        <h2>New Lead 🚀</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Phone:</b> ${escapeHtml(phone)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Service:</b> ${escapeHtml(service)}</p>
        <p><b>Message:</b><br/>${escapeHtml(message)}</p>
      `,
    });

    // 2️⃣ Auto-reply to USER
    await resend.emails.send({
      from: "Samira Cloud <hello@samiracloud.com>",
      to: [email],
      subject: "We received your message",
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6">
          <h2>Thanks for contacting Samira Cloud</h2>

          <p>Hi ${escapeHtml(name)},</p>

          <p>
            We received your request about 
            <strong>${escapeHtml(service)}</strong>.
          </p>

          <p>
            Our team will review your message and get back to you shortly.
          </p>

          <br/>

          <p>Best regards,</p>
          <p><strong>Samira Cloud</strong><br/>Doha, Qatar</p>
        </div>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);
    return Response.json({ success: false });
  }
}