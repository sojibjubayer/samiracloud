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

    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    const service = String(body.service || "").trim();
    const message = String(body.message || "").trim();
    const company = String(body.company || "").trim(); // honeypot

    if (company) {
      return Response.json({ success: true });
    }

    if (!name || !phone || !email || !message) {
      return Response.json(
        { success: false, message: "Please fill all required fields." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Samira Cloud <hello@samiracloud.com>",
      to: ["hello@samiracloud.com"],
      replyTo: email,
      subject: `New Website Lead from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
          <h2>New Contact Form Message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Service:</strong> ${escapeHtml(service || "Not selected")}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}