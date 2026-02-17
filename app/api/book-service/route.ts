import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, service, preferredDate, message, conversation } = body;

    if (!name || !email || !service || !preferredDate) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const to = process.env.EMAIL_TO ?? process.env.EMAIL_USER ?? "rjimueltorrecampo@gmail.com";

    if (!resend || !resendApiKey || !to) {
      console.error("Resend or email environment variables are not configured");
      return NextResponse.json(
        { error: "Email configuration is missing on the server" },
        { status: 500 }
      );
    }

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Service: ${service}`,
      `Preferred date/time: ${preferredDate}`,
      "",
      "Message:",
      message || "-",
      "",
      "Conversation transcript:",
      conversation || "-",
    ].join("\n");

    const fromAddress = process.env.RESEND_FROM ?? "onboarding@resend.dev";

    // 1. Send booking notification to you (Jimuel)
    const { error: resendError } = await resend.emails.send({
      from: fromAddress,
      to,
      subject: `New service booking from ${name}`,
      text,
      html: `<p>New booking request from <strong>${name}</strong>.</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Service:</strong> ${service}</p>
<p><strong>Preferred date/time:</strong> ${preferredDate}</p>
<p><strong>Message:</strong><br/>${message || "-"}</p>
<hr />
<p><strong>Conversation transcript:</strong></p>
<pre style="white-space:pre-wrap;font-family:system-ui, -apple-system, sans-serif;">${conversation || "-"}</pre>`,
    });

    if (resendError) {
      console.error("Resend error in /api/book-service:", resendError);
      return NextResponse.json(
        { error: "Email provider rejected the request" },
        { status: 502 }
      );
    }

    // 2. Send confirmation to the person who booked
    const { error: confirmError } = await resend.emails.send({
      from: fromAddress,
      to: email,
      subject: "Booking request received – Jimuel",
      text: `Hi ${name},\n\nThanks for your booking request! Jimuel has received your details and will get back to you soon.\n\nService: ${service}\nPreferred date/time: ${preferredDate}\n\nBest,\nPortfolio`,
      html: `<p>Hi ${name},</p><p>Thanks for your booking request! Jimuel has received your details and will get back to you soon.</p><p><strong>Service:</strong> ${service}<br/><strong>Preferred date/time:</strong> ${preferredDate}</p><p>Best,<br/>Portfolio</p>`,
    });

    if (confirmError) {
      console.error("Resend confirmation error (notification still sent):", confirmError);
      // Don't fail the request – owner notification already went through
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in /api/book-service:", error);
    return NextResponse.json(
      { error: "Failed to send booking email" },
      { status: 500 }
    );
  }
}

